import React from 'react';
import { motion } from 'motion/react';
import { AppState } from '../types';
import { calculatePricing } from '../utils/pricing';

interface Step6QuoteProps {
  state: AppState;
}

export function Step6Quote({ state }: Step6QuoteProps) {
  const pricing = calculatePricing(state);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE').format(amount);
  };

  return (
    <main className="pt-24 pb-48 md:pb-32 px-6 pr-0 md:pr-80 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
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
            Your Quote <span className="relative inline-block"><span className="relative z-10 text-primary">Summary.</span><svg className="absolute -bottom-1 -left-2 w-[110%] h-4 text-secondary/40 z-0" viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg></span>
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

        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="bg-surface-container-lowest rounded-2xl p-8 sunlight-shadow overflow-hidden relative">
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
                <div className="flex justify-between pt-3 border-t border-outline-variant/30">
                  <span className="font-bold text-xl text-on-surface">Grand Total</span>
                  <span className="font-extrabold text-2xl text-primary">KSh {formatCurrency(pricing.total)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest border-2 border-primary/10 rounded-2xl p-8 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container">payments</span>
                </div>
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Secure Your Project</h3>
                <p className="text-sm text-on-surface-variant mb-6">A 30% deposit is required to lock in your project date and start the design phase.</p>
              </div>
              <button className="w-full bg-[#52B44B] hover:bg-[#429E3B] text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm">
                <span className="material-symbols-outlined">phone_iphone</span>
                Pay with M-PESA
              </button>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <button 
                onClick={() => window.print()}
                className="flex items-center justify-between p-5 bg-surface-container-lowest border-2 border-transparent hover:border-primary/20 rounded-2xl transition-all group shrink-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">download</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-lg text-on-surface">Download Estimate</span>
                    <span className="text-sm text-on-surface-variant">Save a PDF copy for your records</span>
                  </div>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1">arrow_forward</span>
              </button>

              <div className="flex-1 bg-surface-container-lowest rounded-2xl p-6 border-2 border-transparent hover:border-[#25D366]/20 transition-colors flex flex-col justify-between gap-6">
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
                  <label className="flex items-center gap-2 cursor-pointer w-full justify-center group py-1">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-outline-variant text-primary accent-primary cursor-pointer" />
                    <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Join Our Mailing List</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
