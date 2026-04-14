import React from 'react';
import { AppState } from '../types';

interface Step1BusinessProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step1Business({ state, updateState }: Step1BusinessProps) {
  const categories = [
    { id: 'creative', icon: 'brush', title: 'Creative', desc: 'Studios, agencies, artists, and independent designers.' },
    { id: 'retail', icon: 'storefront', title: 'Retail & Shops', desc: 'Selling physical products, inventory management, and POS.' },
    { id: 'services', icon: 'home_repair_service', title: 'Services', desc: 'Maintenance, logistics, health, and wellness providers.' },
    { id: 'food', icon: 'restaurant', title: 'Food & Hospitality', desc: 'Cafes, restaurants, hotels, and catering businesses.' },
    { id: 'professional', icon: 'account_balance', title: 'Professional', desc: 'Legal, finance, consulting, and corporate services.' },
    { id: 'community', icon: 'groups', title: 'Community', desc: 'Non-profits, NGOs, schools, and social groups.' },
  ];

  return (
    <main className="pt-24 pb-48 md:pb-32 pr-0 md:pr-80 min-h-screen">
      <div className="max-w-4xl mx-auto px-8">
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">STEP 1: ABOUT YOU</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-headline">Tell Us About Your Business.</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">We'll tailor your experience and pricing based on your industry needs. Select the category that fits best.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => {
            const isSelected = state.businessCategory === cat.id;
            return (
              <div 
                key={cat.id}
                onClick={() => updateState({ businessCategory: cat.id })}
                className={`group relative overflow-hidden bg-surface-container-lowest rounded-xl p-6 shadow-[24px_0_40px_rgba(109,57,20,0.06)] transition-all duration-300 cursor-pointer active:scale-95 ${isSelected ? 'border-2 border-primary' : 'border border-transparent hover:border-primary/20'}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4 transition-transform ${isSelected ? 'bg-primary-container/10' : 'bg-surface-container-low group-hover:scale-110'}`}>
                  <span className="material-symbols-outlined">{cat.icon}</span>
                </div>
                {isSelected && (
                  <div className="absolute top-4 right-4 text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                )}
                <h3 className="font-headline text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{cat.desc}</p>
              </div>
            );
          })}
        </div>

        {state.businessCategory === 'retail' && (
          <section className="mt-12 bg-surface-container-low rounded-xl p-8 border-l-4 border-primary">
            <div className="mb-6">
              <h4 className="font-headline text-xl font-bold text-on-surface">Specific Retail Type</h4>
              <p className="text-on-surface-variant">Tell us more about your shop size.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'supermarket', icon: 'shopping_basket', label: 'Supermarket' },
                { id: 'specialty', icon: 'local_mall', label: 'Specialty' },
                { id: 'minishop', icon: 'store', label: 'Mini-Shop' }
              ].map(type => {
                const isSelected = state.retailType === type.id;
                return (
                  <button 
                    key={type.id}
                    onClick={() => updateState({ retailType: type.id })}
                    className={`flex items-center gap-3 p-4 rounded-lg transition-colors text-left group ${isSelected ? 'bg-surface-container-lowest border border-primary bg-primary/5' : 'bg-surface-container-lowest border border-outline-variant/30 hover:border-primary'}`}
                  >
                    <span className="material-symbols-outlined text-primary" style={isSelected ? { fontVariationSettings: "'FILL' 1" } : {}}>{type.icon}</span>
                    <span className={`font-medium ${isSelected ? 'text-primary' : ''}`}>{type.label}</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {state.businessCategory && (
          <div className="mt-12">
            <div className="bg-primary text-white p-4 rounded-xl flex items-center justify-between shadow-lg backdrop-blur-md bg-opacity-90">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                </div>
                <div>
                  <p className="text-sm font-medium opacity-90">We suggest Starter tier starting at KSh 28,000 for you.</p>
                </div>
              </div>
              <button 
                onClick={() => updateState({ packageTier: 'starter' })}
                className="text-xs font-bold uppercase tracking-widest bg-white text-primary px-4 py-2 rounded-lg hover:bg-secondary-fixed transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
