import React, { useState } from 'react';
import { AppState } from '../types';
import { calculatePricing } from '../utils/pricing';

interface SideNavBarProps {
  state: AppState;
  updateState?: (updates: Partial<AppState>) => void;
}

export function SideNavBar({ state, updateState }: SideNavBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pricing = calculatePricing(state);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE').format(amount);
  };

  const FullContent = () => (
    <>
      <div className="flex items-center justify-between mb-2 hidden md:flex">
        <span className="text-lg font-bold text-[#1c1c19] dark:text-white font-headline">Live Pricing</span>
        <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded uppercase">KES</span>
      </div>
      
      <div className="space-y-4">
        {/* Nav Tabs */}
        <div className="space-y-2">
          {[
            { id: 1, icon: 'storefront', label: 'Business' },
            { id: 2, icon: 'inventory_2', label: 'Package' },
            { id: 3, icon: 'build', label: 'Features' },
            { id: 4, icon: 'palette', label: 'Design' },
            { id: 5, icon: 'fact_check', label: 'Summary' }
          ].map((tab) => (
            <div 
              key={tab.id}
              onClick={() => {
                if (updateState) updateState({ step: tab.id });
                setIsExpanded(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-lg font-['Inter'] text-sm transition-all cursor-pointer ${state.step === tab.id ? 'border-l-4 border-[#006565] bg-[#ffffff] dark:bg-slate-800 text-[#006565] font-semibold' : 'text-[#3e4949] dark:text-slate-400 opacity-80 hover:bg-[#e5e2dd] dark:hover:bg-slate-800'}`}
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          ))}
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

      <div className="mt-auto pt-6 border-t border-outline-variant/20 hidden md:block">
        <div className="flex items-center gap-3 p-4 bg-white/40 dark:bg-slate-800/40 rounded-xl">
          <span className="material-symbols-outlined text-primary">lightbulb</span>
          <p className="text-xs text-on-surface-variant leading-tight">Most similar businesses choose the Growth package for better SEO reach.</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-[#f6f3ee] dark:bg-slate-900 shadow-[24px_0_40px_rgba(109,57,20,0.06)] flex-col p-6 gap-4 z-40 transition-all duration-300 overflow-y-auto">
        <FullContent />
      </aside>

      {/* Mobile Bottom Bar (Docked above FooterActionBar) */}
      <div className="md:hidden fixed bottom-[96px] left-0 right-0 bg-[#f6f3ee] dark:bg-slate-900 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] z-40 rounded-t-3xl transition-all duration-300 border-t border-outline-variant/20">
        
        {/* Collapsed View / Toggle */}
        <div 
          className="flex items-center justify-between p-5 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Total Price</span>
            <span className="text-xl font-extrabold text-primary">KES {formatCurrency(pricing.total)}</span>
          </div>
          <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-sm font-bold">{isExpanded ? 'Hide Details' : 'View Details'}</span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              expand_less
            </span>
          </div>
        </div>

        {/* Expanded Overlay */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-5 pt-0 overflow-y-auto max-h-[60vh]">
            <FullContent />
          </div>
        </div>
      </div>
      
      {/* Overlay backdrop for mobile */}
      {isExpanded && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30 backdrop-blur-sm transition-opacity"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}
