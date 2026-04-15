import React, { useState } from 'react';
import { AppState } from './types';
import { TopNavBar } from './components/TopNavBar';
import { FooterActionBar } from './components/FooterActionBar';
import { SideNavBar } from './components/SideNavBar';
import { Step0Landing } from './components/Step0Landing';
import { Step1Category } from './components/Step1Category';
import { Step2Package } from './components/Step2Package';
import { Step3Features } from './components/Step3Features';
import { Step4Design } from './components/Step4Design';
import { Step5Support } from './components/Step5Support';
import { Step6Quote } from './components/Step6Quote';

export default function App() {
  const [state, setState] = useState<AppState>({
    step: 0,
    journey: null,
    category: null,
    otherCategory: '',
    packageTier: null,
    features: {
      premiumGallery: false,
      socialMedia: false,
      calendar: false,
      blog: false,
      contentWriting: false,
      animations: false,
      multilingual: false,
      mpesa: false,
      shoppingCart: false,
      inventory: false,
      reviews: false,
      googleMaps: false,
      seo: false,
      dashboard: false,
      speedCdn: false,
    },
    hosting: 'standard',
    designMood: null,
    primaryColor: null,
    secondaryColor: null,
    hasLogo: null,
    referenceWebsites: '',
    contentProvider: null,
    carePackage: null,
    contact: {
      fullName: '',
      businessName: '',
      whatsapp: '',
      email: '',
    },
  });

  const updateState = (updates: Partial<AppState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    setState((prev) => ({ ...prev, step: Math.min(prev.step + 1, 6) }));
  };

  const handleBack = () => {
    setState((prev) => ({ ...prev, step: Math.max(prev.step - 1, 0) }));
  };

  const canContinue = () => {
    switch (state.step) {
      case 0:
        return state.journey !== null;
      case 1:
        return state.category !== null && (state.category !== 'Other' || state.otherCategory.trim() !== '');
      case 2:
        return state.packageTier !== null;
      case 3:
        return true; // Hosting is pre-selected
      case 4:
        return state.designMood !== null && state.primaryColor !== null && state.secondaryColor !== null;
      case 5:
        return state.contentProvider !== null && state.carePackage !== null && state.contact.fullName !== '' && state.contact.email !== '';
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      <TopNavBar step={state.step} />
      
      {state.step > 0 && state.step <= 6 && <SideNavBar state={state} updateState={updateState} />}

      {state.step === 0 && <Step0Landing state={state} updateState={updateState} onNext={handleNext} />}
      {state.step === 1 && <Step1Category state={state} updateState={updateState} />}
      {state.step === 2 && <Step2Package state={state} updateState={updateState} />}
      {state.step === 3 && <Step3Features state={state} updateState={updateState} />}
      {state.step === 4 && <Step4Design state={state} updateState={updateState} />}
      {state.step === 5 && <Step5Support state={state} updateState={updateState} />}
      {state.step === 6 && <Step6Quote state={state} />}

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
