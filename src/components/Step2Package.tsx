import React, { useEffect } from 'react';
import { motion } from 'motion/react';
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
      updateState({ packageTier: 'starter' });
    }
  }, [state.packageTier, updateState]);

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          >
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            <span className="text-xs font-bold text-on-surface tracking-wider uppercase">Step 2: Base Package</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-on-surface tracking-tight leading-[1.1] mb-6"
          >
            Based on your {state.category || 'selection'}, we recommend this <span className="relative inline-block"><span className="relative z-10 text-primary">package:</span><svg className="absolute -bottom-1 -left-2 w-[110%] h-4 text-secondary/40 z-0" viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg></span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-on-surface-variant text-xl max-w-2xl leading-relaxed font-body"
          >
            Select the foundation for your digital home. Every tier includes a custom design and high-performance hosting.
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {packages.map((pkg) => {
            const isSelected = state.packageTier === pkg.id;
            return (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
