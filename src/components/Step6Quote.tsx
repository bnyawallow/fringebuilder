import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppState } from '../types';
import { calculatePricing } from '../utils/pricing';

const TermsModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-surface-container-lowest rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-headline text-on-surface">Terms and Conditions</h2>
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
        <p>By proceeding with this application, you agree to our Terms and Conditions.</p>
        
        <h3 className="font-bold text-on-surface mt-6 text-base">1. Use of Contact Information</h3>
        <p>We may use the contact information provided (such as your email address and phone number) to communicate with you regarding your quote, development updates, and to share relevant internal offers or promotional materials (Lead Generation).</p>
        
        <h3 className="font-bold text-on-surface mt-6 text-base">2. Data Privacy</h3>
        <p>Your privacy is important to us. We will <strong>never</strong> sell, rent, or share your personal contact information with third parties or external vendors for their own marketing purposes. Your data is kept strictly confidential within our organization.</p>

        <h3 className="font-bold text-on-surface mt-6 text-base">3. Project Initiation & Deposits</h3>
        <p>A non-refundable deposit (typically 30%) is required to lock in your project date and commence the discovery and design phases. Remaining balances will be billed according to agreed milestone deliverables.</p>

        <h3 className="font-bold text-on-surface mt-6 text-base">4. Revisions & Approvals</h3>
        <p>Projects include a set number of revision rounds as defined in your specific package. Any additional major design or functional changes requested after sign-off may incur additional costs.</p>
      </div>
      <div className="mt-8 flex justify-end">
        <button onClick={onClose} className="px-6 py-3 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary/90 transition-colors">
          I Understand
        </button>
      </div>
    </motion.div>
  </div>
);

interface Step6QuoteProps {
  state: AppState;
}

export function Step6Quote({ state }: Step6QuoteProps) {
  const [showTerms, setShowTerms] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(true);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const pricing = calculatePricing(state);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE').format(amount);
  };

  const handleDownloadPDF = async () => {
    if (!hasAcceptedTerms) return;
    setIsGeneratingPDF(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('pdf-estimate-template');
      const opt = {
        margin:       [0.5, 0],
        filename:     `Estimate - ${state.contact.fullName || 'Client'}.pdf`,
        image:        { type: 'jpeg' as const, quality: 1.0 },
        html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#FAFAFA' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' as const }
      };
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <main className="pt-24 pb-48 md:pb-32 px-6 pr-0 md:pr-80 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-surface-container border border-[#bdc9c84d] px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          >
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            <span className="text-xs font-bold text-on-surface tracking-wider uppercase">Step 6: Review & Confirm</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-on-surface tracking-tight leading-[1.1] mb-6"
          >
            Your Quote <span className="relative inline-block"><span className="relative z-10 text-primary">Summary.</span><svg className="absolute -bottom-1 -left-2 w-[110%] h-4 text-[#8a502966] z-0" viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-on-surface-variant text-xl max-w-2xl leading-relaxed font-body"
          >
            Everything is ready. Review your selections below and secure your spot in our development queue.
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-1 gap-6 mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-surface-container-lowest rounded-2xl p-8 sunlight-shadow overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-9xl">receipt_long</span>
            </div>
            <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">description</span>
              Investment Summary
            </h2>
            <div className="space-y-6">
              
              <div className="flex justify-between items-start group">
                <div className="flex flex-col">
                  <span className="font-semibold text-on-surface">Development ({pricing.baseName})</span>
                  <span className="text-sm text-on-surface-variant">Core website build</span>
                </div>
                <span className="font-bold text-on-surface whitespace-nowrap">KSh {formatCurrency(pricing.basePrice)}</span>
              </div>

              {pricing.featureItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start border-t border-surface-container-high pt-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-on-surface">{item.name}</span>
                  </div>
                  <span className="font-bold text-on-surface whitespace-nowrap">{item.price === 0 ? 'Included' : `KSh ${formatCurrency(item.price)}`}{item.price > 0 && item.isMonthly ? '/mo' : ''}</span>
                </div>
              ))}

              {pricing.hostingPrice > 0 && (
                <div className="flex justify-between items-start border-t border-surface-container-high pt-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-on-surface">Premium Hosting Add-on</span>
                    <span className="text-sm text-on-surface-variant">{pricing.hostingName}</span>
                  </div>
                  <span className="font-bold text-on-surface whitespace-nowrap">KSh {formatCurrency(pricing.hostingPrice)}</span>
                </div>
              )}

              <div className="bg-surface-container-low rounded-xl p-6 space-y-3 mt-8">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>KSh {formatCurrency(pricing.subtotal)}</span>
                </div>
                {pricing.discountAmount > 0 && (
                  <div className="flex justify-between text-tertiary">
                    <span>Discount (5%)</span>
                    <span>-KSh {formatCurrency(pricing.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-on-surface-variant">
                  <span>VAT (16%)</span>
                  <span>KSh {formatCurrency(pricing.vat)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#bdc9c84d]">
                  <span className="font-bold text-xl text-on-surface">Grand Total</span>
                  <span className="font-extrabold text-2xl text-primary">KSh {formatCurrency(pricing.total)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex items-center justify-center gap-3 cursor-pointer group"
            onClick={() => setHasAcceptedTerms(!hasAcceptedTerms)}
          >
            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${hasAcceptedTerms ? 'bg-primary border-primary text-on-primary' : 'border-outline-variant bg-surface-container-lowest text-transparent group-hover:border-primary/50'}`}>
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <p className="text-sm text-on-surface-variant font-medium select-none">
              I accept the <button type="button" onClick={(e) => { e.stopPropagation(); setShowTerms(true); }} className="text-primary underline hover:text-primary/80">Terms and Conditions</button>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-surface-container-lowest border-2 border-[#0065651a] rounded-2xl p-8 flex flex-col justify-between hover:border-[#00656566] transition-colors"
            >
              <div>
                <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container">payments</span>
                </div>
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Secure Your Project</h3>
                <p className="text-sm text-on-surface-variant mb-6">A 30% deposit is required to lock in your project date and start the design phase.</p>
              </div>
              <button 
                disabled={!hasAcceptedTerms}
                className={`w-full rounded-xl py-4 font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${hasAcceptedTerms ? 'bg-[#52B44B] hover:bg-[#429E3B] text-white active:scale-95' : 'bg-surface-container border border-[#bdc9c84d] text-on-surface-variant opacity-50 cursor-not-allowed'}`}
              >
                <span className="material-symbols-outlined">phone_iphone</span>
                Pay with M-PESA
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4 h-full"
            >
              <button 
                onClick={handleDownloadPDF}
                disabled={!hasAcceptedTerms || isGeneratingPDF}
                className={`flex items-center justify-between p-5 bg-surface-container-lowest border-2 rounded-2xl transition-all shrink-0 ${hasAcceptedTerms && !isGeneratingPDF ? 'border-transparent hover:border-[#00656533] cursor-pointer group' : 'border-[#bdc9c84d] opacity-50 cursor-not-allowed'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${hasAcceptedTerms && !isGeneratingPDF ? 'bg-secondary-fixed text-on-secondary-container group-hover:bg-[#0065651a] group-hover:text-primary transition-colors' : 'bg-surface-container text-on-surface-variant'}`}>
                    <span className="material-symbols-outlined">
                      {isGeneratingPDF ? 'hourglass_empty' : 'download'}
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-lg text-on-surface">Download Estimate</span>
                    <span className="text-sm text-on-surface-variant">{isGeneratingPDF ? "Generating PDF..." : "Save a PDF copy for your records"}</span>
                  </div>
                </div>
                <span className={`material-symbols-outlined transition-all transform ${hasAcceptedTerms && !isGeneratingPDF ? 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-on-surface' : 'opacity-0'} `}>arrow_forward</span>
              </button>

              <div className="flex-1 bg-surface-container-lowest rounded-2xl p-6 border-2 border-transparent hover:border-[#25D36633] transition-colors flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-[#25D366]">support_agent</span>
                    <h3 className="font-headline font-bold text-lg text-on-surface">Have Questions?</h3>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-2">Reach out directly on WhatsApp to get immediate answers from our experts.</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <a 
                    href="https://wa.me/254116893804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl py-4 px-6 font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Chat With Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      </AnimatePresence>

      {/* Hidden PDF Template for Download */}
      <div className="absolute top-0 left-0 -z-50 opacity-0 pointer-events-none">
        <div id="pdf-estimate-template" className="w-[800px] min-h-[1000px] bg-[#FAFAFA] text-[#1a1a1a] p-16 font-body">
          {/* Header */}
          <div className="flex justify-between items-end border-b-2 border-[#00656533] pb-8 mb-12">
            <div>
              <h1 className="text-5xl font-black text-[#006565] tracking-tight font-headline mb-2">Fringe Builder</h1>
              <p className="text-[#8a5029] font-bold tracking-widest uppercase text-sm">Digital Home Estimates</p>
            </div>
            <div className="text-right text-[#6B7280] text-sm space-y-1">
              <p className="font-medium text-[#1F2937]">Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p>Reference: FB-{Math.floor(Math.random() * 10000)}</p>
            </div>
          </div>

          {/* Intro */}
          <div className="mb-12 text-[#1F2937] text-lg leading-relaxed">
            <p className="font-bold text-2xl mb-4 text-[#1a1a1a] font-headline">Hi {state.contact.fullName || 'there'},</p>
            <p>Thank you for considering Fringe Builder for your digital home. We're excited about the possibility of bringing your vision to life. Below is a detailed estimate based on the preferences you've shared with us.</p>
          </div>

          {/* Estimate Breakdown */}
          <div className="bg-white rounded-2xl border border-[#F3F4F6] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-8 mb-12">
            <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3 text-[#1a1a1a] border-b border-[#F3F4F6] pb-4">
              Investment Summary
            </h2>
            <div className="space-y-6">
              
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-[#1a1a1a]">Development: {pricing.baseName}</span>
                  <span className="text-[#6B7280]">Core website build</span>
                </div>
                <span className="font-bold text-lg text-[#1a1a1a]">KSh {formatCurrency(pricing.basePrice)}</span>
              </div>

              {pricing.featureItems.length > 0 && (
                <div className="pt-2">
                  <h3 className="text-sm font-bold tracking-wider text-[#9CA3AF] uppercase mb-4">Add-ons & Features</h3>
                  <div className="space-y-4">
                    {pricing.featureItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-[#F4F5F7] p-3 rounded-lg border border-[#F9FAFB]">
                        <span className="font-medium text-[#374151]">{item.name}</span>
                        <span className="font-bold text-[#1F2937]">{item.price === 0 ? 'Included' : `KSh ${formatCurrency(item.price)}`}{item.price > 0 && item.isMonthly ? '/mo' : ''}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {pricing.hostingPrice > 0 && (
                <div className="flex justify-between items-start border-t border-[#F3F4F6] pt-6 mt-6">
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-[#1a1a1a]">Premium Hosting Add-on</span>
                    <span className="text-[#6B7280]">{pricing.hostingName}</span>
                  </div>
                  <span className="font-bold text-lg text-[#1a1a1a]">KSh {formatCurrency(pricing.hostingPrice)}</span>
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="bg-[#f6f3ee] rounded-xl p-8 mt-8 border border-[#e8dfcf]">
              <div className="space-y-4">
                <div className="flex justify-between text-[#4B5563] font-medium">
                  <span>Subtotal</span>
                  <span>KSh {formatCurrency(pricing.subtotal)}</span>
                </div>
                {pricing.discountAmount > 0 && (
                  <div className="flex justify-between text-[#16A34A] font-medium">
                    <span>Discount (5%)</span>
                    <span>-KSh {formatCurrency(pricing.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#4B5563] font-medium">
                  <span>VAT (16%)</span>
                  <span>KSh {formatCurrency(pricing.vat)}</span>
                </div>
                <div className="flex justify-between pt-6 mt-4 border-t-2 border-[#e8dfcf]">
                  <span className="font-bold text-2xl text-[#1a1a1a]">Grand Total</span>
                  <span className="font-black text-3xl text-[#006565]">KSh {formatCurrency(pricing.total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outro */}
          <div className="text-[#374151] leading-relaxed mb-12">
            <p className="mb-4 text-lg">We would love to continue this conversation and move forward with your project. If you have any questions about this estimate or your project scope, please don't hesitate to reach out.</p>
            <p className="text-lg">Looking forward to building something great together!</p>
          </div>

          {/* Footer Contacts */}
          <div className="border-t-2 border-[#E5E7EB] pt-8 flex gap-8 items-center text-[#006565] font-bold">
            <a href="mailto:hello@fringebuilder.com" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">mail</span>
              hello@fringebuilder.com
            </a>
            <a href="https://wa.me/254116893804" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">chat</span>
              WhatsApp: +254 116 893 804
            </a>
            <a href="https://fringebuilder.com" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">language</span>
              fringebuilder.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
