import React from 'react';
import { AppState } from '../types';
import { calculatePricing } from '../utils/pricing';

interface SideNavBarProps {
  state: AppState;
}

export function SideNavBar({ state }: SideNavBarProps) {
  const pricing = calculatePricing(state);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE').format(amount);
  };

  return (
    <aside className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-[#f6f3ee] dark:bg-slate-900 shadow-[24px_0_40px_rgba(109,57,20,0.06)] flex flex-col p-6 gap-4 z-40 transition-all duration-300 overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-[#1c1c19] dark:text-white font-headline">Live Pricing</span>
        <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded uppercase">KES</span>
      </div>
      
      <div className="space-y-4">
        {/* Nav Tabs */}
        <div className="space-y-2">
          <div className={`flex items-center gap-3 p-3 rounded-lg font-['Inter'] text-sm transition-all ${state.step <= 3 ? 'border-l-4 border-[#006565] bg-[#ffffff] dark:bg-slate-800 text-[#006565] font-semibold' : 'text-[#3e4949] dark:text-slate-400 opacity-80 hover:bg-[#e5e2dd] dark:hover:bg-slate-800'}`}>
            <span className="material-symbols-outlined">build</span>
            <span>Features</span>
          </div>
          <div className={`flex items-center gap-3 p-3 rounded-lg font-['Inter'] text-sm transition-all ${state.step === 4 ? 'border-l-4 border-[#006565] bg-[#ffffff] dark:bg-slate-800 text-[#006565] font-semibold' : 'text-[#3e4949] dark:text-slate-400 opacity-80 hover:bg-[#e5e2dd] dark:hover:bg-slate-800'}`}>
            <span className="material-symbols-outlined">palette</span>
            <span>Design</span>
          </div>
          <div className={`flex items-center gap-3 p-3 rounded-lg font-['Inter'] text-sm transition-all ${state.step === 5 ? 'border-l-4 border-[#006565] bg-[#ffffff] dark:bg-slate-800 text-[#006565] font-semibold' : 'text-[#3e4949] dark:text-slate-400 opacity-80 hover:bg-[#e5e2dd] dark:hover:bg-slate-800'}`}>
            <span className="material-symbols-outlined">fact_check</span>
            <span>Review</span>
          </div>
        </div>

        {/* Current Selection Summary */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-on-surface-variant">{pricing.baseName}</span>
            <span className="font-bold">{formatCurrency(pricing.basePrice)}</span>
          </div>
          
          {pricing.featureItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">{item.name}</span>
              <span className="font-bold">{formatCurrency(item.price)}</span>
            </div>
          ))}

          {pricing.hostingPrice > 0 && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">{pricing.hostingName}</span>
              <span className="font-bold">{formatCurrency(pricing.hostingPrice)}</span>
            </div>
          )}
        </div>

        {/* Active Discount State */}
        {pricing.discountAmount > 0 && (
          <div className="bg-tertiary-container/10 p-4 rounded-xl border border-tertiary/20 flex gap-3 items-center">
            <span className="material-symbols-outlined text-tertiary">celebration</span>
            <div>
              <p className="text-xs font-bold text-tertiary">Fringe SME Saver Applied</p>
              <p className="text-[10px] text-tertiary/80">5% discount for 4+ items</p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-outline-variant/30 space-y-2">
          <div className="flex justify-between items-center text-sm text-on-surface-variant">
            <span>Subtotal</span>
            <span>{formatCurrency(pricing.subtotal)}</span>
          </div>
          {pricing.discountAmount > 0 && (
            <div className="flex justify-between items-center text-sm text-tertiary">
              <span>Discount (5%)</span>
              <span>-{formatCurrency(pricing.discountAmount)}</span>
            </div>
          )}
          <div className="flex justify-between items-center text-sm text-on-surface-variant">
            <span>VAT (16%)</span>
            <span>{formatCurrency(pricing.vat)}</span>
          </div>
          <div className="flex justify-between items-end pt-2">
            <span className="font-headline font-bold">Total Price</span>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-primary leading-none">{formatCurrency(pricing.total)}</p>
              <p className="text-[10px] text-on-surface-variant mt-1">Includes 16% VAT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-outline-variant/20">
        <div className="flex items-center gap-3 p-4 bg-white/40 dark:bg-slate-800/40 rounded-xl">
          <span className="material-symbols-outlined text-primary">lightbulb</span>
          <p className="text-xs text-on-surface-variant leading-tight">Most similar businesses choose the Growth package for better SEO reach.</p>
        </div>
      </div>
    </aside>
  );
}
