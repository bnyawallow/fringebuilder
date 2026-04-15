import React, { useEffect } from 'react';
import { AppState } from '../types';

interface Step2PackageProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step2Package({ state, updateState }: Step2PackageProps) {
  const isCreator = state.journey === 'creator';

  // Auto-select logic
  useEffect(() => {
    if (!state.packageTier) {
      if (isCreator) {
        updateState({ packageTier: 'starter' });
      } else {
        updateState({ packageTier: 'growth' });
      }
    }
  }, [isCreator, state.packageTier, updateState]);

  const packages = isCreator ? [
    {
      id: 'starter',
      name: 'Starter',
      price: 'KSh 25,000 - 42,000',
      bestFor: 'Artists, musicians, photographers, coaches, bloggers (personal portfolios)',
      inclusions: ['Up to 5 pages', 'Basic gallery', 'Contact + WhatsApp', 'SEO basics', '1st Year Domain & Hosting'],
      delivery: '4-7 days',
      popular: true
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 'KSh 48,000 - 72,000',
      bestFor: 'Creators needing blog, testimonials or larger portfolio',
      inclusions: ['Up to 10 pages', 'Blog module', 'Testimonials', 'Premium animations', '1st Year Domain & Hosting'],
      delivery: '7-11 days',
      popular: false
    },
    {
      id: 'commerce',
      name: 'Commerce',
      price: 'KSh 85,000 - 125,000',
      bestFor: 'Creators selling merch, music, courses or digital products',
      inclusions: ['Everything in Growth', 'Shopping cart', 'Payment gateway', 'Product catalog', '1st Year Domain & Hosting'],
      delivery: '11-16 days',
      popular: false
    }
  ] : [
    {
      id: 'starter',
      name: 'Starter',
      price: 'KSh 32,000 - 52,000',
      bestFor: 'Simple service pages (consultants, small startups)',
      inclusions: ['Up to 7 pages', 'Contact + WhatsApp', 'Google Maps', '1st Year Domain & Hosting'],
      delivery: '5-8 days',
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 'KSh 62,000 - 92,000',
      bestFor: 'Salons, clinics, real estate, mechanics, NGOs, churches, schools',
      inclusions: ['Up to 14 pages', 'Blog & Testimonials', 'Admin dashboard', 'SEO optimization', '1st Year Domain & Hosting'],
      delivery: '8-12 days',
      popular: true
    },
    {
      id: 'commerce',
      name: 'Commerce',
      price: 'KSh 105,000 - 155,000',
      bestFor: 'Grocery stores, boutiques, pharmacies, restaurants, hardware',
      inclusions: ['Everything in Growth', 'Product catalog', 'Shopping cart', 'M-Pesa ready', '1st Year Domain & Hosting'],
      delivery: '12-18 days',
      popular: false
    }
  ];

  return (
    <main className="pt-24 pb-48 md:pb-32 pr-0 md:pr-80 min-h-screen">
      <div className="max-w-5xl mx-auto px-8">
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">Step 2: Base Package</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4">
            Based on your {state.category || 'selection'}, we recommend this base package:
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">
            Select the foundation for your digital home. Every tier includes a custom design and high-performance hosting.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => {
            const isSelected = state.packageTier === pkg.id;
            return (
              <div 
                key={pkg.id}
                onClick={() => updateState({ packageTier: pkg.id as any })}
                className={`bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm flex flex-col h-full relative transition-all duration-300 cursor-pointer hover:translate-y-[-4px] ${isSelected ? 'border-t-[12px] border-primary shadow-lg scale-105 z-10' : 'border-t-[12px] border-surface-container-highest'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">Recommended</div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-on-surface mb-2">{pkg.name}</h3>
                </div>
                <div className="mb-8">
                  <div className="text-sm font-semibold text-primary mb-1">PRICE RANGE</div>
                  <div className={`font-bold text-on-surface ${isSelected ? 'text-3xl' : 'text-2xl'}`}>{pkg.price}</div>
                </div>
                <div className="space-y-6 flex-grow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-outline mb-2 block">Best for...</span>
                    <p className="text-on-surface text-sm font-medium">{pkg.bestFor}</p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline">schedule</span>
                    <span className="text-xs font-semibold text-outline">Delivery: {pkg.delivery}</span>
                  </div>
                </div>
                <button className={`mt-8 w-full py-4 rounded-xl font-bold transition-colors ${isSelected ? 'text-white bg-primary' : 'text-on-surface bg-surface-container-highest hover:bg-outline-variant'}`}>
                  {isSelected ? 'Selected' : `Select ${pkg.name}`}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
