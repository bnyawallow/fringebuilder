export interface AppState {
  step: number;
  journey: 'creator' | 'business' | null;
  businessCategory: string | null;
  retailType: string | null;
  packageTier: 'starter' | 'growth' | 'commerce' | null;
  features: {
    blog: boolean;
    seo: boolean;
    mpesa: boolean;
    shoppingCart: boolean;
    inventory: boolean;
    calendar: boolean;
  };
  hosting: 'standard' | 'cloud' | 'vps';
  designMood: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  contact: {
    fullName: string;
    businessName: string;
    whatsapp: string;
    email: string;
  };
  contentProvider: string | null;
  carePackage: string | null;
}
