import React from 'react';
import { AppState } from '../types';

interface Step0LandingProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
  onNext: () => void;
}

export function Step0Landing({ state, updateState, onNext }: Step0LandingProps) {
  const handleSelectJourney = (journey: 'creator' | 'business') => {
    updateState({ journey });
    onNext();
  };

  return (
    <main className="min-h-screen pt-24 pb-32 px-6 lg:px-12 kenyan-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 mt-12 text-center lg:text-left">
          <div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight mb-6">
              What kind of <span className="text-primary">website</span><br/>do you need?
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl font-medium mx-auto lg:mx-0">
              Select your journey below. We'll provide the specific tools, templates, and hosting infrastructure optimized for your Nairobi-based venture.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img alt="Successful Kenyan Entrepreneur" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaBOJ2ygtPwZmD4-AHfsJcNkuauH1SccKHix7Sl8QaqH0B819CdhW_lDzRdBmedAqK1kqFuXpuUPl2PLbeDdBLO4C9TsVRstxMwM8l9FOgdPhm6KQbwqacjoot_PYwsDoz26TGIy2VtVwwoChMH0fbnxOtuQTuo5a2IRrrbDa4gbJTaGaKuppyDAO1O1MUw_o613QMU-lIXwHI2oxfhTbOb4FI7n9PAC-_cr1I7HNm3p_1et8rPnK3ycHpr3lBWZsUOJI_SlPt6w" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-fixed rounded-full -z-0 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-fixed rounded-2xl -z-0 opacity-20"></div>
          </div>
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
        <div className="mt-24 grid grid-cols-12 gap-8 items-center opacity-80">
          <div className="col-span-12 lg:col-span-5 h-[400px] rounded-[3rem] overflow-hidden">
            <img className="w-full h-full object-cover" alt="Kenyan entrepreneur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkjRO604VEJ57P7as0iWXvGsWH23fE8DNcNj_QKUITBaQG5x8gwYBXTenFmJk6pB8CzrWdX6n8aowFlJnCfzAN0AVwCvZs2lcHVwtr1Ij4UptHjI4Wsfv9k8rprX_ih3hZqtY9EAhxIGM8hnmmgyx6ennV6YDoAndj2sl02rCLOT1gmllM-DZEHs7_dJ_dNw4spuOXLjWhk5UW2y61dAusvwyQmJ-NOr79vfIxUkUQHPK6Hq_-w4gJv3HndgNx64M41RDXAcRXbQ" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-12 lg:col-span-7 pl-0 lg:pl-12">
            <div className="inline-block px-4 py-2 bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Enterprise Ready</div>
            <h2 className="text-4xl font-headline font-bold mb-6 text-on-surface">Integrated Local Payments</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              Fringe is built specifically for the Kenyan market. Every website comes pre-configured with M-PESA, Pesapal, and DPO Group integrations out of the box. No coding required.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-primary">150+</span>
                <span className="text-sm font-semibold text-on-surface-variant uppercase">Local Templates</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-primary">24/7</span>
                <span className="text-sm font-semibold text-on-surface-variant uppercase">Local Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
