import React from 'react';
import { AppState } from '../types';

interface Step1CategoryProps {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

export function Step1Category({ state, updateState }: Step1CategoryProps) {
  const isCreator = state.journey === 'creator';
  
  const creatorCategories = [
    { id: 'Artist', icon: 'palette', title: 'Artist' },
    { id: 'Musician', icon: 'music_note', title: 'Musician' },
    { id: 'Photographer', icon: 'camera_alt', title: 'Photographer' },
    { id: 'Coach / Trainer', icon: 'sports', title: 'Coach / Trainer' },
    { id: 'Blogger / Writer', icon: 'edit_document', title: 'Blogger / Writer' },
    { id: 'Fashion Designer', icon: 'styler', title: 'Fashion Designer' },
    { id: 'Other', icon: 'more_horiz', title: 'Other Creator' },
  ];

  const businessCategories = [
    { id: 'Grocery Store', icon: 'shopping_basket', title: 'Grocery Store' },
    { id: 'Salon / Barber', icon: 'content_cut', title: 'Salon / Barber' },
    { id: 'Pharmacy / Chemist', icon: 'local_pharmacy', title: 'Pharmacy / Chemist' },
    { id: 'Restaurant / Café', icon: 'restaurant', title: 'Restaurant / Café' },
    { id: 'Boutique / Clothing Shop', icon: 'checkroom', title: 'Boutique / Clothing Shop' },
    { id: 'Hardware Shop', icon: 'handyman', title: 'Hardware Shop' },
    { id: 'Butchery', icon: 'set_meal', title: 'Butchery' },
    { id: 'Real Estate Agent', icon: 'real_estate_agent', title: 'Real Estate Agent' },
    { id: 'Mechanic / Auto Shop', icon: 'car_repair', title: 'Mechanic / Auto Shop' },
    { id: 'Event Planner', icon: 'celebration', title: 'Event Planner' },
    { id: 'NGO / Church / School', icon: 'diversity_3', title: 'NGO / Church / School' },
    { id: 'Other', icon: 'more_horiz', title: 'Other Business' },
  ];

  const categories = isCreator ? creatorCategories : businessCategories;

  const handleCategorySelect = (id: string) => {
    updateState({ category: id });
  };

  return (
    <main className="pt-24 pb-48 md:pb-32 pr-0 md:pr-80 min-h-screen">
      <div className="max-w-4xl mx-auto px-8">
        <header className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-sm font-bold mb-4 tracking-wide uppercase">STEP 1: CATEGORY</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-headline">
            {isCreator ? "What best describes you?" : "What best describes your business?"}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-body">
            We'll tailor your experience and pricing based on your selection.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {categories.map((cat) => {
            const isSelected = state.category === cat.id;
            return (
              <div 
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`group relative overflow-hidden bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95 flex flex-col items-center text-center ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border border-outline-variant/30 hover:border-primary/50'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-primary mb-3 transition-transform ${isSelected ? 'bg-primary/20' : 'bg-surface-container-low group-hover:scale-110'}`}>
                  <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                </div>
                {isSelected && (
                  <div className="absolute top-3 right-3 text-primary">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                )}
                <h3 className="font-headline text-sm font-bold">{cat.title}</h3>
              </div>
            );
          })}
        </div>

        {state.category === 'Other' && (
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-4">
            <label className="block text-sm font-bold text-on-surface mb-2">Please specify:</label>
            <input 
              type="text" 
              value={state.otherCategory}
              onChange={(e) => updateState({ otherCategory: e.target.value })}
              placeholder={isCreator ? "e.g. Podcaster" : "e.g. Logistics Company"}
              className="w-full p-4 rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-surface-container-lowest"
            />
          </div>
        )}

        {state.category && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-primary/10 border border-primary/20 text-on-surface p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Great choice!</h4>
                <p className="text-sm text-on-surface-variant">We’ll recommend the perfect base package for you next.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
