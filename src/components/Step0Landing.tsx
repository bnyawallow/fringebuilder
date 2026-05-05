import React from 'react';
import { motion } from 'motion/react';
import { AppState } from '../types';

interface Step0LandingProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
  onNext: () => void;
}

export function Step0Landing({ state, updateState, onNext }: Step0LandingProps) {
  const handleSelectJourney = (journey: 'creator' | 'business') => {
    updateState({ 
      journey,
      category: journey === 'creator' ? 'Artist' : 'Grocery Store',
      packageTier: 'starter'
    });
    onNext();
  };

  return (
    <main className="min-h-screen pb-32 kenyan-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        {/* Playful Hero Section */}
        <div className="relative mb-20 lg:mb-24 pt-12 lg:pt-16 flex flex-col items-center justify-center text-center w-full">
          {/* Animated Background Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 flex items-center justify-center overflow-visible"
          >
            <div className="absolute w-[40vw] h-[40vw] max-w-[30rem] max-h-[30rem] bg-primary/15 rounded-full blur-[80px] -top-20 -left-10 lg:-left-20 opacity-80 mix-blend-multiply"></div>
            <div className="absolute w-[30vw] h-[30vw] max-w-[25rem] max-h-[25rem] bg-secondary/15 rounded-full blur-[80px] top-10 -right-10 lg:-right-20 opacity-80 mix-blend-multiply"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-5 py-2 rounded-full mb-8 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
          >
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            <span className="text-sm font-bold text-on-surface tracking-wider uppercase">Let's Build Something Great</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-headline font-black text-on-surface tracking-tight leading-[1.1] mb-8"
          >
            What kind of <span className="relative inline-block">
              <span className="relative z-10 text-primary">website</span>
              {/* Playful underline SVG */}
              <svg className="absolute -bottom-1 -left-2 w-[110%] h-4 text-secondary/40 z-0" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span><br/>do you need?
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-medium leading-relaxed"
          >
            Select your journey below. We'll provide the specific tools, templates, and hosting infrastructure optimized for your venture.
          </motion.p>
        </div>

        {/* Bento Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Option 1: Creator */}
          <div 
            onClick={() => handleSelectJourney('creator')}
            className="group relative overflow-hidden bg-surface-container-lowest p-8 lg:p-12 rounded-[2rem] shadow-[24px_0_40px_rgba(109,57,20,0.06)] hover:scale-[1.01] transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary-fixed"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-16 h-16 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-8 text-on-secondary-fixed-variant">
                  <span className="material-symbols-outlined text-4xl">palette</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">I’m an Individual / Creator</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">Perfect for artists, musicians, freelancers, and personal portfolios. Show your craft to the world.</p>
              </div>
              <div className="mt-12 flex items-center gap-3 text-primary font-bold">
                <span>Get started as a Creator</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[12rem]">brush</span>
            </div>
          </div>

          {/* Option 2: Business */}
          <div 
            onClick={() => handleSelectJourney('business')}
            className="group relative overflow-hidden bg-surface-container-lowest p-8 lg:p-12 rounded-[2rem] shadow-[24px_0_40px_rgba(109,57,20,0.06)] hover:scale-[1.01] transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary-fixed"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-8 text-on-primary-fixed-variant">
                  <span className="material-symbols-outlined text-4xl">storefront</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">I run a Business / SME</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">Scalable solutions for retail, services, and local enterprises. Integrated inventory and payments.</p>
              </div>
              <div className="mt-12 flex items-center gap-3 text-primary font-bold">
                <span>Get started as a Business</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[12rem]">apartment</span>
            </div>
          </div>
        </div>

        {/* Decorative Visual */}
        <div className="mt-24 grid grid-cols-12 gap-8 items-center opacity-90">
          <div className="col-span-12 lg:col-span-5 h-[400px] rounded-[3rem] relative bg-surface-container p-8 flex flex-col justify-center border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <span className="material-symbols-outlined text-[12rem]">trending_up</span>
             </div>
             
             <div className="relative z-10 flex flex-col gap-5">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between border border-surface-container-highest"
               >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                     <span className="material-symbols-outlined">public</span>
                   </div>
                   <div>
                     <div className="text-base font-bold text-on-surface">Global Reach</div>
                     <div className="text-sm text-on-surface-variant">Visible to millions 24/7</div>
                   </div>
                 </div>
                 <span className="material-symbols-outlined text-primary">arrow_upward</span>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between ml-6 border border-surface-container-highest"
               >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                     <span className="material-symbols-outlined">payments</span>
                   </div>
                   <div>
                     <div className="text-base font-bold text-on-surface">Online Sales</div>
                     <div className="text-sm text-on-surface-variant">Automated conversions</div>
                   </div>
                 </div>
                 <span className="text-secondary font-bold text-lg">+84%</span>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between ml-12 border border-surface-container-highest"
               >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
                     <span className="material-symbols-outlined">verified</span>
                   </div>
                   <div>
                     <div className="text-base font-bold text-on-surface">Credibility</div>
                     <div className="text-sm text-on-surface-variant">Professional brand image</div>
                   </div>
                 </div>
                 <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
               </motion.div>
             </div>
          </div>
          <div className="col-span-12 lg:col-span-7 pl-0 lg:pl-12">
            <div className="inline-block px-4 py-2 bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Growth Accelerator</div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-on-surface tracking-tight">Unlock Your Full Potential</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              A robust web presence is no longer optional. Establish credibility, reach new audiences beyond your immediate network, and turn casual visitors into loyal clients around the clock.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-primary">24/7</span>
                <span className="text-sm font-semibold text-on-surface-variant uppercase">Availability</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-primary">100%</span>
                <span className="text-sm font-semibold text-on-surface-variant uppercase">Your Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
