import React, { useState } from 'react';
import { AppState } from './types';
import { TopNavBar } from './components/TopNavBar';
import { FooterActionBar } from './components/FooterActionBar';
import { SideNavBar } from './components/SideNavBar';
import { Step0Landing } from './components/Step0Landing';
import { Step1Business } from './components/Step1Business';
import { Step2Package } from './components/Step2Package';
import { Step3Features } from './components/Step3Features';
import { Step4DesignContact } from './components/Step4DesignContact';
import { Step5Quote } from './components/Step5Quote';

export default function App() {
  const [state, setState] = useState<AppState>({
    step: 0,
    journey: null,
    businessCategory: null,
    retailType: null,
    packageTier: null,
    features: {
      blog: false,
      seo: false,
      mpesa: false,
      shoppingCart: false,
      inventory: false,
      calendar: false,
    },
    hosting: 'standard',
    designMood: null,
    primaryColor: null,
    secondaryColor: null,
    contact: {
      fullName: '',
      businessName: '',
      whatsapp: '',
      email: '',
    },
    contentProvider: null,
    carePackage: null,
  });

  const updateState = (updates: Partial<AppState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    setState((prev) => ({ ...prev, step: Math.min(prev.step + 1, 5) }));
  };

  const handleBack = () => {
    setState((prev) => ({ ...prev, step: Math.max(prev.step - 1, 0) }));
  };

  const canContinue = () => {
    switch (state.step) {
      case 0:
        return state.journey !== null;
      case 1:
        return state.businessCategory !== null && (state.businessCategory !== 'retail' || state.retailType !== null);
      case 2:
        return state.packageTier !== null;
      case 3:
        return true; // Hosting is pre-selected, so an option is always selected
      case 4:
        return state.designMood !== null && state.contact.fullName !== '' && state.contact.email !== '' && state.contentProvider !== null && state.carePackage !== null;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      <TopNavBar step={state.step} />
      
      {state.step > 0 && state.step <= 5 && <SideNavBar state={state} updateState={updateState} />}

      {state.step === 0 && <Step0Landing state={state} updateState={updateState} onNext={handleNext} />}
      {state.step === 1 && <Step1Business state={state} updateState={updateState} />}
      {state.step === 2 && <Step2Package state={state} updateState={updateState} />}
      {state.step === 3 && <Step3Features state={state} updateState={updateState} />}
      {state.step === 4 && <Step4DesignContact state={state} updateState={updateState} />}
      {state.step === 5 && <Step5Quote state={state} />}

      {state.step > 0 && (
        <FooterActionBar 
          step={state.step} 
          onBack={handleBack} 
          onContinue={handleNext} 
          canContinue={canContinue()} 
          onNavigateStep={(s) => updateState({ step: s })}
        />
      )}
    </div>
  );
}
