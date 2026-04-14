import React from 'react';
import { AppState } from '../types';

interface Step3FeaturesProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step3Features({ state, updateState }: Step3FeaturesProps) {
  const toggleFeature = (feature: keyof AppState['features']) => {
    updateState({
      features: {
        ...state.features,
        [feature]: !state.features[feature]
      }
    });
  };

  return (
    <main className="pt-24 pb-48 md:pb-32 px-6 flex flex-col md:flex-row gap-8 max-w-[1440px] mx-auto">
      <div className="flex-1 space-y-12 pr-0 md:pr-80">
        <header className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">Step 3: Features</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-headline">Add the Features You Want.</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">Customize your digital experience. Select the components that will power your business growth in Nairobi and beyond.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Group 1: Content & Marketing */}
          <section className="space-y-4">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">campaign</span>
              Content & Marketing
            </h3>
            <div className="grid gap-4">
              <label className="group cursor-pointer">
                <input type="checkbox" className="hidden peer" checked={state.features.blog} onChange={() => toggleFeature('blog')} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-primary">rss_feed</span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">Blog</p>
                        <p className="text-sm text-on-surface-variant">Share stories and news</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">+6k</span>
                  </div>
                </div>
              </label>
              
              <label className="group cursor-pointer">
                <input type="checkbox" className="hidden peer" checked={state.features.seo} onChange={() => toggleFeature('seo')} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-primary">search_check</span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">SEO</p>
                        <p className="text-sm text-on-surface-variant">Rank higher on Google</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">+8k</span>
                  </div>
                </div>
              </label>
            </div>
          </section>

          {/* Group 2: Selling Online */}
          <section className="space-y-4 md:row-span-2">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_cart</span>
              Selling Online
            </h3>
            <div className="grid gap-4">
              <label className="group cursor-pointer">
                <input type="checkbox" className="hidden peer" checked={state.features.mpesa} onChange={() => toggleFeature('mpesa')} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-primary">payments</span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">M-Pesa Integration</p>
                        <p className="text-sm text-on-surface-variant">Direct mobile payments</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">+10k</span>
                  </div>
                </div>
              </label>

              <label className="group cursor-pointer">
                <input type="checkbox" className="hidden peer" checked={state.features.shoppingCart} onChange={() => toggleFeature('shoppingCart')} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-primary">shopping_bag</span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">Shopping Cart</p>
                        <p className="text-sm text-on-surface-variant">Full e-commerce flow</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">+22k</span>
                  </div>
                </div>
              </label>

              <label className="group cursor-pointer">
                <input type="checkbox" className="hidden peer" checked={state.features.inventory} onChange={() => toggleFeature('inventory')} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-primary">inventory_2</span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">Inventory</p>
                        <p className="text-sm text-on-surface-variant">Track stock levels</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">+18k</span>
                  </div>
                </div>
              </label>
            </div>
          </section>

          {/* Group 3: Booking */}
          <section className="space-y-4">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_today</span>
              Booking
            </h3>
            <div className="grid gap-4">
              <label className="group cursor-pointer">
                <input type="checkbox" className="hidden peer" checked={state.features.calendar} onChange={() => toggleFeature('calendar')} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-primary">event_available</span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">Calendar</p>
                        <p className="text-sm text-on-surface-variant">Schedule appointments</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary">+12k</span>
                  </div>
                </div>
              </label>
            </div>
          </section>

          {/* Group 4: Domain & Hosting */}
          <section className="md:col-span-2 space-y-4">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">cloud</span>
              Domain & Hosting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'standard'} onChange={() => updateState({ hosting: 'standard' })} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300">
                  <p className="font-headline font-bold text-on-surface">Standard</p>
                  <p className="text-sm text-on-surface-variant mb-4">Perfect for small sites</p>
                  <span className="text-xs uppercase tracking-widest font-bold text-primary opacity-60">Included</span>
                </div>
              </label>
              
              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'cloud'} onChange={() => updateState({ hosting: 'cloud' })} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300">
                  <p className="font-headline font-bold text-on-surface">Upgrade to Cloud</p>
                  <p className="text-sm text-on-surface-variant mb-4">Enhanced performance</p>
                  <span className="font-bold text-primary">+8k</span>
                </div>
              </label>

              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'vps'} onChange={() => updateState({ hosting: 'vps' })} />
                <div className="bg-surface-container-low peer-checked:bg-primary-container/10 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300">
                  <p className="font-headline font-bold text-on-surface">VPS</p>
                  <p className="text-sm text-on-surface-variant mb-4">Full server control</p>
                  <span className="font-bold text-primary">+15k</span>
                </div>
              </label>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
