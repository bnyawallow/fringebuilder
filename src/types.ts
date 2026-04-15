export interface AppState {
  step: number;
  journey: 'creator' | 'business' | null;
  category: string | null;
  otherCategory: string;
  packageTier: 'starter' | 'growth' | 'commerce' | null;
  features: {
    premiumGallery: boolean;
    socialMedia: boolean;
    calendar: boolean;
    blog: boolean;
    contentWriting: boolean;
    animations: boolean;
    multilingual: boolean;
    mpesa: boolean;
    shoppingCart: boolean;
    inventory: boolean;
    reviews: boolean;
    googleMaps: boolean;
    seo: boolean;
    dashboard: boolean;
    speedCdn: boolean;
  };
  hosting: 'standard' | 'premium_domain' | 'enhanced' | 'cloud' | 'vps';
  designMood: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  hasLogo: boolean | null;
  referenceWebsites: string;
  contentProvider: 'self' | 'ai' | 'copywriter' | null;
  carePackage: 'basic' | 'growth' | 'commerce' | 'none' | null;
  contact: {
    fullName: string;
    businessName: string;
    whatsapp: string;
    email: string;
  };
}
