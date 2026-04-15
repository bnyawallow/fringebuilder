import React, { useState } from 'react';
import { AppState } from '../types';

interface Step3FeaturesProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step3Features({ state, updateState }: Step3FeaturesProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const isCreator = state.journey === 'creator';
  const isCommerce = state.packageTier === 'commerce';

  const toggleFeature = (feature: keyof AppState['features']) => {
    updateState({
      features: {
        ...state.features,
        [feature]: !state.features[feature]
      }
    });
  };

  const formatPrice = (price: number) => {
    return price === 0 ? 'Included' : `+${price / 1000}k`;
  };

  const FeatureCard = ({ id, icon, title, desc, price, badge }: { id: keyof AppState['features'], icon: string, title: string, desc: string, price: number, badge?: string }) => (
    <label className="group cursor-pointer">
      <input type="checkbox" className="hidden peer" checked={state.features[id]} onChange={() => toggleFeature(id)} />
      <div className="bg-surface-container-lowest peer-checked:bg-primary/5 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative">
        {badge && (
          <div className="absolute -top-3 right-4 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            {badge}
          </div>
        )}
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <div className={`p-2 rounded-lg ${state.features[id] ? 'bg-primary text-white' : 'bg-surface-container-low text-primary'}`}>
              <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
              <p className="font-headline font-bold text-on-surface text-sm">{title}</p>
              <p className="text-xs text-on-surface-variant mt-1">{desc}</p>
            </div>
          </div>
          <span className={`font-bold text-sm ${price === 0 ? 'text-secondary' : 'text-primary'}`}>{formatPrice(price)}</span>
        </div>
      </div>
    </label>
  );

  return (
    <main className="pt-24 pb-48 md:pb-32 px-6 flex flex-col md:flex-row gap-8 max-w-[1440px] mx-auto">
      <div className="flex-1 space-y-12 pr-0 md:pr-80">
        <header className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">Step 3: Features & Add-ons</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-headline">
            What features do you need?
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">
            Recommended for your {state.category || 'selection'} + {state.packageTier ? state.packageTier.charAt(0).toUpperCase() + state.packageTier.slice(1) : ''} Package.
          </p>
        </header>

        <div className="space-y-8">
          <section>
            <h3 className="font-headline font-bold text-primary flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined">star</span>
              Recommended for you
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isCreator ? (
                <>
                  <FeatureCard id="premiumGallery" icon="photo_library" title="Premium Image / Portfolio Gallery" desc="Enhanced layouts for your work." price={0} />
                  <FeatureCard id="socialMedia" icon="share" title="Social Media Integration" desc="Live feeds and auto-sharing." price={6000} badge="Popular" />
                  <FeatureCard id="calendar" icon="event" title="Appointment / Booking Calendar" desc="For gigs, sessions, or meetings." price={12000} />
                  <FeatureCard id="blog" icon="article" title="Blog / News Section" desc="Share stories and updates." price={6000} />
                  <FeatureCard id="contentWriting" icon="edit_note" title="Professional Content Writing" desc="Up to 10 pages written for you." price={15000} />
                  <FeatureCard id="animations" icon="animation" title="Premium Animations" desc="Engaging interactive elements." price={8000} />
                  <FeatureCard id="multilingual" icon="translate" title="Multilingual (En/Sw)" desc="Reach a wider local audience." price={7000} />
                </>
              ) : (
                <>
                  <FeatureCard id="mpesa" icon="payments" title="M-Pesa + Card Gateway" desc="Accept local and international payments." price={10000} badge="Essential" />
                  <FeatureCard id="shoppingCart" icon="shopping_cart" title="Advanced Shopping Cart" desc="Full checkout experience." price={22000} />
                  <FeatureCard id="inventory" icon="inventory_2" title="Inventory Management" desc="Real-time stock tracking." price={18000} />
                  <FeatureCard id="calendar" icon="event" title="Appointment / Booking Calendar" desc="For services and consultations." price={12000} />
                  <FeatureCard id="reviews" icon="reviews" title="Customer Reviews System" desc="Build trust with testimonials." price={5000} />
                  <FeatureCard id="googleMaps" icon="location_on" title="Google Maps + Location" desc="Help customers find you." price={0} />
                  <FeatureCard id="seo" icon="travel_explore" title="Basic SEO Optimization" desc="Rank higher on Google." price={8000} badge="Popular" />
                </>
              )}
            </div>
          </section>

          <section>
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-primary font-bold hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors"
            >
              <span className={`material-symbols-outlined transition-transform ${showAdvanced ? 'rotate-180' : ''}`}>expand_more</span>
              Add more advanced options
            </button>
            
            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-in fade-in slide-in-from-top-4">
                {!isCreator && <FeatureCard id="blog" icon="article" title="Blog / News Section" desc="Share stories and updates." price={6000} />}
                {isCreator && <FeatureCard id="reviews" icon="reviews" title="Customer Reviews System" desc="Build trust with testimonials." price={5000} />}
                <FeatureCard id="dashboard" icon="dashboard" title="Advanced Self-Service Dashboard" desc="Manage your site easily." price={10000} />
                <FeatureCard id="speedCdn" icon="bolt" title="Speed, Security & CDN Boost" desc="Lightning fast loading globally." price={6000} />
              </div>
            )}
          </section>

          <section className="pt-8 border-t border-outline-variant/30">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined">dns</span>
              Domain & Hosting Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'standard'} onChange={() => updateState({ hosting: 'standard' })} />
                <div className="bg-surface-container-lowest peer-checked:bg-primary/5 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300 relative">
                  <p className="font-headline font-bold text-on-surface text-sm">Standard Domain + Shared Hosting</p>
                  <p className="text-xs text-on-surface-variant mt-1 mb-4">Included for Year 1</p>
                  <span className="text-xs uppercase tracking-widest font-bold text-secondary">Included</span>
                </div>
              </label>
              
              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'premium_domain'} onChange={() => updateState({ hosting: 'premium_domain' })} />
                <div className="bg-surface-container-lowest peer-checked:bg-primary/5 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300">
                  <p className="font-headline font-bold text-on-surface text-sm">Premium Domain</p>
                  <p className="text-xs text-on-surface-variant mt-1 mb-4">e.g., .co.ke or specific TLDs</p>
                  <span className="font-bold text-primary text-sm">+KSh 3,000</span>
                </div>
              </label>

              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'enhanced'} onChange={() => updateState({ hosting: 'enhanced' })} />
                <div className="bg-surface-container-lowest peer-checked:bg-primary/5 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300">
                  <p className="font-headline font-bold text-on-surface text-sm">Enhanced Shared / Lite Cloud</p>
                  <p className="text-xs text-on-surface-variant mt-1 mb-4">Better performance for growing traffic</p>
                  <span className="font-bold text-primary text-sm">+KSh 5,000</span>
                </div>
              </label>

              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'cloud'} onChange={() => updateState({ hosting: 'cloud' })} />
                <div className="bg-surface-container-lowest peer-checked:bg-primary/5 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300 relative">
                  {isCommerce && <div className="absolute -top-3 right-4 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Recommended</div>}
                  <p className="font-headline font-bold text-on-surface text-sm">Cloud / Business Hosting</p>
                  <p className="text-xs text-on-surface-variant mt-1 mb-4">High resources for commerce</p>
                  <span className="font-bold text-primary text-sm">+KSh 10,000</span>
                </div>
              </label>

              <label className="group cursor-pointer">
                <input type="radio" name="hosting" className="hidden peer" checked={state.hosting === 'vps'} onChange={() => updateState({ hosting: 'vps' })} />
                <div className="bg-surface-container-lowest peer-checked:bg-primary/5 border-2 border-transparent peer-checked:border-primary p-5 rounded-xl h-full transition-all duration-300">
                  <p className="font-headline font-bold text-on-surface text-sm">VPS Hosting</p>
                  <p className="text-xs text-on-surface-variant mt-1 mb-4">Dedicated resources & full control</p>
                  <span className="font-bold text-primary text-sm">+KSh 20,000</span>
                </div>
              </label>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
