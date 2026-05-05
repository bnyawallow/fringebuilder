import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import axios from 'axios';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- M-PESA Helpers ---
const MPESA_ENV = process.env.MPESA_ENVIRONMENT || 'sandbox';
const BASE_URL = MPESA_ENV === 'production' 
  ? 'https://api.safaricom.co.ke' 
  : 'https://sandbox.safaricom.co.ke';

const getMpesaToken = async () => {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  
  if (!consumerKey || !consumerSecret) {
    throw new Error('M-PESA credentials missing in environment.');
  }

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  
  try {
    const response = await axios.get(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
      headers: { Authorization: `Basic ${auth}` }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to get M-PESA token:', error);
    throw new Error('Failed to authenticate with M-PESA');
  }
};

// --- API Routes ---

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Trigger STK Push
app.post('/api/stkpush', async (req, res) => {
  try {
    const { phone, amount, reference } = req.body;
    
    if (!phone || !amount) {
      return res.status(400).json({ error: 'Phone and amount are required' });
    }

    const token = await getMpesaToken();
    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    const appBaseUrl = process.env.APP_BASE_URL || `http://localhost:${PORT}`;

    if (!shortcode || !passkey) {
      return res.status(500).json({ error: 'M-PESA shortcode or passkey missing in environment.' });
    }

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

    // Safaricom expects format: 2547XXXXXXXX
    let formattedPhone = phone.replace(/[\s\-\+]/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '254' + formattedPhone.slice(1);
    } else if (formattedPhone.length === 9) {
      formattedPhone = '254' + formattedPhone;
    }

    const stkPushPayload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Math.ceil(Number(amount)), // Ensure amount is an integer
      PartyA: formattedPhone,
      PartyB: shortcode,
      PhoneNumber: formattedPhone,
      CallBackURL: `${appBaseUrl}/api/stkcallback`,
      AccountReference: reference || "FringeBuilder",
      TransactionDesc: "Payment for Website Build"
    };

    const response = await axios.post(`${BASE_URL}/mpesa/stkpush/v1/processrequest`, stkPushPayload, {
      headers: { Authorization: `Bearer ${token}` }
    });

    res.json(response.data);
  } catch (error: any) {
    console.error('STK Push Error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to initiate STK Push', 
      details: error.response?.data?.errorMessage || error.message 
    });
  }
});

// STK Push Callback route (Webhook from Safaricom)
app.post('/api/stkcallback', (req, res) => {
  console.log('--- STK Push Callback Received ---');
  console.log(JSON.stringify(req.body, null, 2));

  // Extract relevant payload
  const result = req.body?.Body?.stkCallback;
  if (!result) {
    return res.status(400).send('Invalid callback payload');
  }

  const { ResultCode, ResultDesc, CallbackMetadata } = result;
  
  if (ResultCode === 0) {
    console.log(`Payment successful: ${ResultDesc}`);
    // Extract metadata
    if (CallbackMetadata && CallbackMetadata.Item) {
      const metadata = CallbackMetadata.Item.reduce((acc: any, item: any) => {
        acc[item.Name] = item.Value;
        return acc;
      }, {});
      console.log('Metadata extracted:', metadata);
      // Here you would typically save the transaction to a database
      // await saveTransaction(metadata.MpesaReceiptNumber, metadata.Amount, metadata.PhoneNumber, ...)
    }
  } else {
    console.log(`Payment failed or cancelled (Code: ${ResultCode}): ${ResultDesc}`);
  }

  // Respond with success to Safaricom
  res.status(200).json({ message: 'Callback received successfully' });
});


// Vite middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
