import React, { useState, useRef } from 'react';
import { AppState } from '../types';

interface Step5SupportProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step5Support({ state, updateState }: Step5SupportProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateContact = (field: keyof AppState['contact'], value: string) => {
    updateState({
      contact: {
        ...state.contact,
        [field]: value
      }
    });
  };

  const isCommerce = state.packageTier === 'commerce';

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      updateState({ logoName: e.dataTransfer.files[0].name });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      updateState({ logoName: e.target.files[0].name });
    }
  };

  const removeLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateState({ logoName: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <main className="mr-0 md:mr-80 pt-24 pb-48 md:pb-32 px-6 md:px-12 max-w-5xl">
      <section className="mb-12">
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">Step 5: Content & Support</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-headline">Let's make it official</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">Tell us how you want to handle content, choose your ongoing support, and provide your contact details.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Secondary Config Column */}
          <div className="space-y-8">
            <div>
              <h4 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">edit_document</span>
                Who will provide content?
              </h4>
              <div className="space-y-3">
                <button 
                  onClick={() => updateState({ contentProvider: 'self' })}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.contentProvider === 'self' ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-lowest hover:border-primary/50 border-2 border-outline-variant/30'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${state.contentProvider === 'self' ? 'text-primary' : 'text-on-surface-variant'}`}>edit_note</span>
                    <span className={`font-medium ${state.contentProvider === 'self' ? 'text-primary font-bold' : 'text-on-surface'}`}>I'll provide all images & text</span>
                  </div>
                  <span className={`material-symbols-outlined ${state.contentProvider === 'self' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{state.contentProvider === 'self' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                </button>

                <button 
                  onClick={() => updateState({ contentProvider: 'ai' })}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.contentProvider === 'ai' ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-lowest hover:border-primary/50 border-2 border-outline-variant/30'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${state.contentProvider === 'ai' ? 'text-primary' : 'text-on-surface-variant'}`}>auto_awesome</span>
                    <span className={`font-medium ${state.contentProvider === 'ai' ? 'text-primary font-bold' : 'text-on-surface'}`}>Fringe AI should write for me</span>
                  </div>
                  <span className={`material-symbols-outlined ${state.contentProvider === 'ai' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{state.contentProvider === 'ai' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                </button>

                <button 
                  onClick={() => updateState({ contentProvider: 'copywriter' })}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.contentProvider === 'copywriter' ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-lowest hover:border-primary/50 border-2 border-outline-variant/30'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${state.contentProvider === 'copywriter' ? 'text-primary' : 'text-on-surface-variant'}`}>person_search</span>
                    <div>
                      <span className={`font-medium block ${state.contentProvider === 'copywriter' ? 'text-primary font-bold' : 'text-on-surface'}`}>Hire a Fringe copywriter</span>
                      <span className="text-xs text-on-surface-variant">+KSh 15,000</span>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined ${state.contentProvider === 'copywriter' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{state.contentProvider === 'copywriter' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-headline font-bold text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    Monthly Care Package
                  </h4>
                  <p className="text-sm text-on-surface-variant mt-1">Updates, security, and premium hosting included. No hidden fees.</p>
                </div>
                <button
                  onClick={() => updateState({ wantsCarePackage: !state.wantsCarePackage, carePackage: !state.wantsCarePackage ? state.carePackage : null })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${state.wantsCarePackage ? 'bg-primary' : 'bg-outline-variant'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${state.wantsCarePackage ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              {state.wantsCarePackage && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                  <button 
                    onClick={() => updateState({ carePackage: 'basic' })}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.carePackage === 'basic' ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-lowest hover:border-primary/50 border-2 border-outline-variant/30'}`}
                  >
                    <div>
                      <span className={`font-medium block ${state.carePackage === 'basic' ? 'text-primary font-bold' : 'text-on-surface'}`}>Basic</span>
                      <span className="text-xs text-on-surface-variant">Essential maintenance</span>
                    </div>
                    <span className={`font-bold ${state.carePackage === 'basic' ? 'text-primary' : 'text-on-surface'}`}>KSh 2,800/mo</span>
                  </button>

                  <button 
                    onClick={() => updateState({ carePackage: 'growth' })}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.carePackage === 'growth' ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-lowest hover:border-primary/50 border-2 border-outline-variant/30'}`}
                  >
                    <div>
                      <span className={`font-medium block ${state.carePackage === 'growth' ? 'text-primary font-bold' : 'text-on-surface'}`}>Growth</span>
                      <span className="text-xs text-on-surface-variant">Priority support & updates</span>
                    </div>
                    <span className={`font-bold ${state.carePackage === 'growth' ? 'text-primary' : 'text-on-surface'}`}>KSh 5,500/mo</span>
                  </button>

                  {isCommerce && (
                    <button 
                      onClick={() => updateState({ carePackage: 'commerce' })}
                      className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.carePackage === 'commerce' ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-lowest hover:border-primary/50 border-2 border-outline-variant/30'}`}
                    >
                      <div>
                        <span className={`font-medium block ${state.carePackage === 'commerce' ? 'text-primary font-bold' : 'text-on-surface'}`}>Commerce</span>
                        <span className="text-xs text-on-surface-variant">Full e-commerce management</span>
                      </div>
                      <span className={`font-bold ${state.carePackage === 'commerce' ? 'text-primary' : 'text-on-surface'}`}>KSh 12,500/mo</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Form Column */}
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">contact_mail</span>
              Your Details
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {state.journey === 'creator' ? (
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    value={state.contact.fullName}
                    onChange={(e) => updateContact('fullName', e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="e.g. Kwame Otieno" 
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Business / Brand Name *</label>
                  <input 
                    type="text" 
                    value={state.contact.businessName}
                    onChange={(e) => updateContact('businessName', e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="The Coffee Workshop" 
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Email Address *</label>
                <input 
                  type="email" 
                  value={state.contact.email}
                  onChange={(e) => updateContact('email', e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                  placeholder="kwame@workshop.co.ke" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">WhatsApp Number (Optional)</label>
                <div className="flex gap-2">
                  <div className="bg-surface-container-low rounded-xl px-3 flex items-center text-sm font-bold text-on-surface-variant border border-outline-variant/50">+254</div>
                  <input 
                    type="tel" 
                    value={state.contact.whatsapp}
                    onChange={(e) => updateContact('whatsapp', e.target.value)}
                    className="flex-1 bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="712 345 678" 
                  />
                </div>
              </div>
            </div>
            <div className="pt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={state.hasLogo || false} 
                  onChange={(e) => updateState({ hasLogo: e.target.checked })} 
                />
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${state.hasLogo ? 'bg-primary border-primary' : 'border-outline group-hover:border-primary'}`}>
                  <span className={`material-symbols-outlined text-white text-sm ${state.hasLogo ? 'opacity-100' : 'opacity-0'}`} style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <span className="text-sm font-medium text-on-surface">I already have a logo</span>
              </label>
              
              {state.hasLogo && (
                <div 
                  className={`mt-4 p-8 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer ${isDragging ? 'border-primary bg-primary/10' : 'border-outline-variant bg-surface-container-lowest/50 hover:bg-white'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".svg,.png,.ai,image/png,image/svg+xml"
                  />
                  {state.logoName ? (
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                      </div>
                      <p className="text-sm font-bold text-on-surface mb-1 truncate max-w-[200px]">{state.logoName}</p>
                      <button 
                        onClick={removeLogo}
                        className="text-xs text-error font-medium hover:underline mt-2 px-3 py-1 bg-error/10 rounded-full"
                      >
                        Remove Logo
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-primary transition-colors pointer-events-none">upload_file</span>
                      <p className="text-sm text-on-surface-variant pointer-events-none">Drag and drop your logo here, or <span className="text-primary font-bold">browse</span></p>
                      <p className="text-[10px] text-outline mt-1 uppercase tracking-widest pointer-events-none">SVG, PNG or AI (Max 5MB)</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
