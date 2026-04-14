import React from 'react';
import { AppState } from '../types';

interface Step2PackageProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step2Package({ state, updateState }: Step2PackageProps) {
  return (
    <main className="pt-24 pb-48 md:pb-32 pr-0 md:pr-80 min-h-screen">
      <div className="max-w-5xl mx-auto px-8">
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">Step 2: Selection</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4">Choose your package tier</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">Select the foundation for your digital home. Every tier includes a custom business design and high-performance hosting.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Starter Tier */}
          <div 
            onClick={() => updateState({ packageTier: 'starter' })}
            className={`bg-surface-container-lowest rounded-[2rem] p-8 shadow-[24px_0_40px_rgba(109,57,20,0.06)] flex flex-col h-full transition-all duration-300 cursor-pointer hover:translate-y-[-4px] ${state.packageTier === 'starter' ? 'border-b-8 border-primary' : 'border-b-8 border-surface-container-highest'}`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Starter</h3>
              <p className="text-on-surface-variant text-sm leading-snug">Essential presence for individuals and small brands.</p>
            </div>
            <div className="mb-8">
              <div className="text-sm font-semibold text-primary mb-1">PRICE RANGE</div>
              <div className="text-2xl font-bold text-on-surface">KSh 28,000 - 48,000</div>
            </div>
            <div className="space-y-6 flex-grow">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-outline mb-2 block">Best for...</span>
                <p className="text-on-surface text-sm font-medium">Portfolios, blogs, and simple professional landings.</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Up to 3 Custom Pages</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>1st Year Domain & Hosting</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Mobile Responsive Design</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">schedule</span>
                <span className="text-xs font-semibold text-outline">Delivery: 5-8 days</span>
              </div>
            </div>
            <button className={`mt-8 w-full py-4 rounded-xl font-bold transition-colors ${state.packageTier === 'starter' ? 'text-white bg-primary' : 'text-on-surface bg-surface-container-highest hover:bg-outline-variant'}`}>
              {state.packageTier === 'starter' ? 'Selected' : 'Select Starter'}
            </button>
          </div>

          {/* Growth Tier */}
          <div 
            onClick={() => updateState({ packageTier: 'growth' })}
            className={`bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,101,101,0.12)] flex flex-col h-full relative transform scale-105 z-10 transition-all duration-300 cursor-pointer ${state.packageTier === 'growth' ? 'border-t-[12px] border-primary' : 'border-t-[12px] border-surface-container-highest'}`}
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">Most Popular</div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Growth</h3>
              <p className="text-on-surface-variant text-sm leading-snug">The gold standard for growing Kenyan businesses.</p>
            </div>
            <div className="mb-8">
              <div className="text-sm font-semibold text-primary mb-1">PRICE RANGE</div>
              <div className="text-3xl font-extrabold text-on-surface">KSh 52,000 - 85,000</div>
            </div>
            <div className="space-y-6 flex-grow">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-outline mb-2 block">Best for...</span>
                <p className="text-on-surface text-sm font-medium">Service providers, SMEs, and corporate entities.</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="font-semibold">Up to 10 Pages & Blog</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Priority 1st Year Hosting</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>SEO Optimization Suite</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>WhatsApp Integration</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">speed</span>
                <span className="text-xs font-bold text-primary">Delivery: 10-14 days</span>
              </div>
            </div>
            <button className={`mt-8 w-full py-4 rounded-xl font-bold transition-all ${state.packageTier === 'growth' ? 'text-white bg-gradient-to-br from-[#006565] to-[#008080] shadow-lg shadow-primary/20' : 'text-on-surface bg-surface-container-highest hover:bg-outline-variant'}`}>
              {state.packageTier === 'growth' ? 'Selected' : 'Select Growth'}
            </button>
          </div>

          {/* Commerce Tier */}
          <div 
            onClick={() => updateState({ packageTier: 'commerce' })}
            className={`bg-surface-container-lowest rounded-[2rem] p-8 shadow-[24px_0_40px_rgba(109,57,20,0.06)] flex flex-col h-full transition-all duration-300 cursor-pointer hover:translate-y-[-4px] ${state.packageTier === 'commerce' ? 'border-b-8 border-primary' : 'border-b-8 border-surface-container-highest'}`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-on-surface mb-2">Commerce</h3>
              <p className="text-on-surface-variant text-sm leading-snug">Full-scale retail engines for modern trade.</p>
            </div>
            <div className="mb-8">
              <div className="text-sm font-semibold text-primary mb-1">PRICE RANGE</div>
              <div className="text-2xl font-bold text-on-surface">KSh 120,000+</div>
            </div>
            <div className="space-y-6 flex-grow">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-outline mb-2 block">Best for...</span>
                <p className="text-on-surface text-sm font-medium">Online shops, inventory heavy catalogs, and payments.</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Unlimited Inventory Pages</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span className="font-semibold">M-Pesa & Card Integration</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Advanced Customer Portal</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">schedule</span>
                <span className="text-xs font-semibold text-outline">Delivery: 21+ days</span>
              </div>
            </div>
            <button className={`mt-8 w-full py-4 rounded-xl font-bold transition-colors ${state.packageTier === 'commerce' ? 'text-white bg-primary' : 'text-on-surface bg-surface-container-highest hover:bg-outline-variant'}`}>
              {state.packageTier === 'commerce' ? 'Selected' : 'Select Commerce'}
            </button>
          </div>
        </div>

        <div className="mt-16 bg-surface-variant/70 backdrop-blur-xl p-8 rounded-3xl border border-outline-variant/10 flex items-start gap-6">
          <div className="bg-secondary-container p-4 rounded-2xl">
            <span className="material-symbols-outlined text-on-secondary-container text-3xl">lightbulb</span>
          </div>
          <div>
            <h4 className="text-xl font-bold text-on-surface mb-2 tracking-tight">Need a custom feature?</h4>
            <p className="text-on-surface-variant max-w-2xl">All packages are flexible. If you need specific API integrations or bespoke business animations, we can add them as line-items in the next step.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
