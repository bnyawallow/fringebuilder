import React from 'react';
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">Step 6: Review & Confirm</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-headline">Your Quote Summary.</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">Everything is ready. Review your selections below and secure your spot in our development queue.</p>
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest border-2 border-primary/10 rounded-2xl p-8 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container">payments</span>
                </div>
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">Secure Your Project</h3>
                <p className="text-sm text-on-surface-variant mb-6">A 30% deposit is required to lock in your project date and start the design phase.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => window.print()}
                className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-high transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">picture_as_pdf</span>
                  <span className="font-semibold text-on-surface">Download Your Quote</span>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </button>
              <a 
                href="tel:+254116893804"
                className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-high transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#25D366]">chat</span>
                  <span className="font-semibold text-on-surface">Talk To Our Expert For FREE</span>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </a>
              <button className="w-full bg-gradient-to-br from-[#006565] to-[#008080] text-white rounded-full py-4 px-6 font-bold text-lg active:scale-95 transition-transform shadow-lg mt-2">
                SIGN ME UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
