import React from 'react';
import { AppState } from '../types';

interface Step4DesignContactProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step4DesignContact({ state, updateState }: Step4DesignContactProps) {
  const updateContact = (field: keyof AppState['contact'], value: string) => {
    updateState({
      contact: {
        ...state.contact,
        [field]: value
      }
    });
  };

  return (
    <main className="mr-0 md:mr-80 pt-24 pb-32 px-6 md:px-12 max-w-5xl">
      {/* Step 4: Design Section */}
      <section className="mb-20">
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">Step 4: Visual Identity</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-headline">Curate your visual identity</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">Define the aesthetic direction of your digital home. Choose a moodboard that resonates with your brand's personality.</p>
        </header>

        {/* Moodboard Bento Grid */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          {/* Modern Card */}
          <div 
            onClick={() => updateState({ designMood: 'modern' })}
            className={`col-span-12 md:col-span-4 group cursor-pointer relative overflow-hidden speech-bubble bg-surface-container-lowest sunlight-shadow p-6 border-2 transition-all ${state.designMood === 'modern' ? 'border-primary' : 'border-transparent hover:border-primary'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-surface-container-high overflow-hidden">
              <img alt="Minimalist tech interface with clean lines and high-contrast typography" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGMVmhGyG6fLzzeZumjHvGBqBBt76mqyy9mQOCUuJXh7nuNN6HdCJ1hq88JSpHuSQKFzKsxZqpncmgMOPT0nUjPEdjqXM-81T7p8sYcTT2FhrLzPPZSxG5SscgvFiyW4MMyh_7G0QaUcJV9FrrUkAQ2JuVrmRPt7TTdn8MyrjSzrVYqNZdOjl-eeqoPn6AjIZMQ8V77kmuhNichJaNkCn56Bk_MqY5x3Mpxrf8JUO0r70T6EfhlIcRluZAuP6LB8R2a9cK7aK2Fg" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Modern</h3>
            <p className="text-on-surface-variant text-sm">Clean, sharp, and data-driven aesthetics.</p>
            {state.designMood === 'modern' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </div>

          {/* Bold Card */}
          <div 
            onClick={() => updateState({ designMood: 'bold' })}
            className={`col-span-12 md:col-span-8 group cursor-pointer relative overflow-hidden speech-bubble bg-surface-container-lowest sunlight-shadow p-6 border-2 transition-all ${state.designMood === 'bold' ? 'border-primary' : 'border-transparent hover:border-primary'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-surface-container-high overflow-hidden">
              <img alt="Vibrant design with energetic orange and teal gradients" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFBji7KSboCJHlHo5p4zsc66iy53b5bGVblFhDYDR4ed5f66UHYcT8Qqkc0seiUwlvvIwrRXdQ1EkcQwQ1q8YLOypdxq3yIVPRVL21m7epvzCrC68kkQfKpl4y62CgSeDMD7_gBs9JBCOMCJmDqlY4-F_T62uyReXzvzb6ul0SQ60UvUjK3f8DbjLMRIdkZ5fpAYpn9Zrpll6NlhYKIWuHobxGMr2U4aGRsT6ZKY1Ab51UY4N4wo_3GsLOySpR9bVFkAfIYkYyUQ" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-headline font-bold text-lg mb-1 ${state.designMood === 'bold' ? 'text-primary' : ''}`}>Bold & Colorful</h3>
                <p className="text-on-surface-variant text-sm">Stand out with high energy and vibrant saturation.</p>
              </div>
              {state.designMood === 'bold' && (
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              )}
            </div>
          </div>

          {/* Warm Kenyan Card */}
          <div 
            onClick={() => updateState({ designMood: 'warm' })}
            className={`col-span-12 md:col-span-5 group cursor-pointer relative overflow-hidden speech-bubble bg-surface-container-lowest sunlight-shadow p-6 border-2 transition-all ${state.designMood === 'warm' ? 'border-primary' : 'border-transparent hover:border-primary'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-secondary-fixed overflow-hidden">
              <img alt="Warm earth tones and subtle cultural patterns" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiSDTAE4faTTfZD4TSWDdFfz5NZG2o9I0oSkm66Zp0Fr_MM27SXtBFtMhXX0OqIW5HAJgHs67qH7_bEiSPhbpz8grqo5JJG7olfxfjnGhu7DwuWuE6v5riXcQyMcPg67PExGQBywvuKncuENmtTKO60W3o0mk75gdgPg0bHvG39FeLcaxNZeVYdbfeDOOLaZrsQx5ixezbTZwhhJOricocVy0e29UvuiNArwoJspRGLRF6Y2WHaG5P4rnggfsBjU3Et7GU9mXNaQ" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Warm Kenyan</h3>
            <p className="text-on-surface-variant text-sm">Earthy neutrals and artisanal textures.</p>
            {state.designMood === 'warm' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </div>

          {/* Professional Card */}
          <div 
            onClick={() => updateState({ designMood: 'professional' })}
            className={`col-span-12 md:col-span-3 group cursor-pointer relative overflow-hidden speech-bubble bg-surface-container-lowest sunlight-shadow p-6 border-2 transition-all ${state.designMood === 'professional' ? 'border-primary' : 'border-transparent hover:border-primary'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-primary-container overflow-hidden">
              <img alt="Serious corporate layout with trustworthy blue tones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDffSTO2eZGAh0RZ58-YZ9YXnYUMuFhYfEpe2qDdVgOWHnxKhTM1w-RdBpZLCZAt6qWZVKFtywuaSsqMFaM4gMRYoxJx8Bxq9oxAVg4c5KucPWQ1uDsyzIsxWRMqLND-ztP51L1wF4Q1Slgc22uOtQfUdMatRqmskFM4T1DZty8J5UDJbXi07TTdxvcm4E_PP2kzIIN9qVlTvJcNsM-HDAPvkez-788gdXsXQJkFU_bMNQKAaDNv7Sp28FMz4tLzIUH_8Z8p274xw" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Professional</h3>
            <p className="text-on-surface-variant text-sm">Authority and trust.</p>
            {state.designMood === 'professional' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </div>

          {/* Minimal Card */}
          <div 
            onClick={() => updateState({ designMood: 'minimal' })}
            className={`col-span-12 md:col-span-4 group cursor-pointer relative overflow-hidden speech-bubble bg-surface-container-lowest sunlight-shadow p-6 border-2 transition-all ${state.designMood === 'minimal' ? 'border-primary' : 'border-transparent hover:border-primary'}`}
          >
            <div className="h-40 rounded-xl mb-4 bg-surface-container overflow-hidden">
              <img alt="Essentialist design focusing on content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-7s4roB_RWqArnN7ZSQyuKreK05IuiwFmIbsTpETb8qS9-BDGQeeviw4wIWBV7vW7tEOhnHroC9OxEMSEIhG-E5ahELkz3-TN8ub0ldrakCxlxo-XVIuHqy7HqoMuwhqlx7_bC_0lafwLHIDIRGqtXd7nODTrSZko8BaUXI8sOuxlMqbI0g4t8I7FBOYBJQfesqat5OAf1RQ7Gyfx1AEs7SC53XGM9TkMMhVuIC3j2V9dKq2bLGd3pu8SlXn9BnM9ZY_D-_SqQ" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-headline font-bold text-lg mb-1">Minimal</h3>
            <p className="text-on-surface-variant text-sm">Stripped back to the essentials.</p>
            {state.designMood === 'minimal' && (
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            )}
          </div>
        </div>

        {/* Color Palette Picker */}
        <div className="bg-surface-container-low p-8 rounded-3xl">
          <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">colorize</span>
            Brand Colors
          </h3>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-sm font-semibold mb-3 text-on-surface-variant">Primary Brand Color</p>
              <div className="flex gap-3">
                {['#006565', '#8a5029', '#3b82f6', '#10b981'].map(color => (
                  <div 
                    key={color}
                    onClick={() => updateState({ primaryColor: color })}
                    className={`w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-transform ${state.primaryColor === color ? 'border-4 border-white shadow-md' : ''}`}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-outline">add</span>
                </div>
              </div>
            </div>
            <div className="w-px bg-outline-variant/30 hidden md:block"></div>
            <div>
              <p className="text-sm font-semibold mb-3 text-on-surface-variant">Secondary Accent</p>
              <div className="flex gap-3">
                {['#8a4900', '#ffb283', '#f43f5e', '#8b5cf6'].map(color => (
                  <div 
                    key={color}
                    onClick={() => updateState({ secondaryColor: color })}
                    className={`w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-transform ${state.secondaryColor === color ? 'border-4 border-white shadow-md' : ''}`}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-outline">add</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Contact Section */}
      <section className="mb-12">
        <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">edit_square</span>
          Let's make it official
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Column */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={state.contact.fullName}
                  onChange={(e) => updateContact('fullName', e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all outline-none" 
                  placeholder="e.g. Kwame Otieno" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Business Name</label>
                <input 
                  type="text" 
                  value={state.contact.businessName}
                  onChange={(e) => updateContact('businessName', e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all outline-none" 
                  placeholder="The Coffee Workshop" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">WhatsApp Number</label>
                <div className="flex gap-2">
                  <div className="bg-surface-container-low rounded-xl px-3 flex items-center text-sm font-bold text-on-surface-variant">+254</div>
                  <input 
                    type="tel" 
                    value={state.contact.whatsapp}
                    onChange={(e) => updateContact('whatsapp', e.target.value)}
                    className="flex-1 bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all outline-none" 
                    placeholder="712 345 678" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={state.contact.email}
                  onChange={(e) => updateContact('email', e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all outline-none" 
                  placeholder="kwame@workshop.co.ke" 
                />
              </div>
            </div>
            <div className="pt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-6 h-6 rounded-md border-2 border-outline group-hover:border-primary flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-primary text-sm opacity-0 group-hover:opacity-100" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <span className="text-sm font-medium text-on-surface">Do you have a logo?</span>
              </label>
              <div className="mt-4 p-8 border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center text-center bg-surface-container-lowest/50 group hover:bg-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-primary transition-colors">upload_file</span>
                <p className="text-sm text-on-surface-variant">Drag and drop your logo here, or <span className="text-primary font-bold">browse</span></p>
                <p className="text-[10px] text-outline mt-1 uppercase tracking-widest">SVG, PNG or AI (Max 5MB)</p>
              </div>
            </div>
          </div>

          {/* Secondary Config Column */}
          <div className="space-y-8">
            <div>
              <h4 className="font-headline font-bold text-lg mb-4">Who will provide content?</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => updateState({ contentProvider: 'self' })}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.contentProvider === 'self' ? 'bg-white border-2 border-primary sunlight-shadow' : 'bg-surface-container-low hover:bg-surface-container-highest border-2 border-transparent'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${state.contentProvider === 'self' ? 'text-primary' : 'text-on-surface-variant'}`}>edit_note</span>
                    <span className={`font-medium ${state.contentProvider === 'self' ? '' : 'text-on-surface-variant'}`}>I'll provide all images & text</span>
                  </div>
                  <span className={`material-symbols-outlined ${state.contentProvider === 'self' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{state.contentProvider === 'self' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                </button>

                <button 
                  onClick={() => updateState({ contentProvider: 'ai' })}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.contentProvider === 'ai' ? 'bg-white border-2 border-primary sunlight-shadow' : 'bg-surface-container-low hover:bg-surface-container-highest border-2 border-transparent'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${state.contentProvider === 'ai' ? 'text-primary' : 'text-on-surface-variant'}`}>auto_awesome</span>
                    <span className={`font-medium ${state.contentProvider === 'ai' ? '' : 'text-on-surface-variant'}`}>Fringe AI should write for me</span>
                  </div>
                  <span className={`material-symbols-outlined ${state.contentProvider === 'ai' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{state.contentProvider === 'ai' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                </button>

                <button 
                  onClick={() => updateState({ contentProvider: 'copywriter' })}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${state.contentProvider === 'copywriter' ? 'bg-white border-2 border-primary sunlight-shadow' : 'bg-surface-container-low hover:bg-surface-container-highest border-2 border-transparent'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${state.contentProvider === 'copywriter' ? 'text-primary' : 'text-on-surface-variant'}`}>person_search</span>
                    <span className={`font-medium ${state.contentProvider === 'copywriter' ? '' : 'text-on-surface-variant'}`}>Hire a Fringe copywriter</span>
                  </div>
                  <span className={`material-symbols-outlined ${state.contentProvider === 'copywriter' ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{state.contentProvider === 'copywriter' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                </button>
              </div>
            </div>

            <div className="bg-[#ffdbc8]/30 p-6 rounded-3xl border border-secondary/10">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">verified_user</span>
                  <h4 className="font-headline font-bold text-lg">Monthly Care Package</h4>
                </div>
                <div 
                  onClick={() => updateState({ carePackage: state.carePackage === 'standard' ? 'scale' : 'standard' })}
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${state.carePackage === 'scale' ? 'bg-primary' : 'bg-outline-variant'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${state.carePackage === 'scale' ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">Updates, security, and premium hosting included. No hidden fees.</p>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => updateState({ carePackage: 'standard' })}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${state.carePackage === 'standard' ? 'bg-white border-primary' : 'bg-white/50 border-transparent hover:border-primary/30'}`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${state.carePackage === 'standard' ? 'text-primary' : 'text-on-surface-variant'}`}>Standard</p>
                  <p className={`text-xl font-headline font-extrabold ${state.carePackage === 'standard' ? 'text-on-surface' : 'text-on-surface-variant'}`}>2,800<span className="text-xs font-medium opacity-60">/mo</span></p>
                </div>
                <div 
                  onClick={() => updateState({ carePackage: 'scale' })}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${state.carePackage === 'scale' ? 'bg-white border-primary' : 'bg-white/50 border-transparent hover:border-primary/30'}`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${state.carePackage === 'scale' ? 'text-primary' : 'text-on-surface-variant'}`}>Scale</p>
                  <p className={`text-xl font-headline font-extrabold ${state.carePackage === 'scale' ? 'text-on-surface' : 'text-on-surface-variant'}`}>5,500<span className="text-xs font-medium opacity-60">/mo</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
