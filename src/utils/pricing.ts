import { AppState } from '../types';

export function calculatePricing(state: AppState) {
  let basePrice = 0;
  let baseName = 'Starter Package';
  
  if (state.journey === 'creator') {
    if (state.packageTier === 'starter') {
      basePrice = 25000;
      baseName = 'Starter Package';
    } else if (state.packageTier === 'growth') {
      basePrice = 48000;
      baseName = 'Growth Package';
    } else if (state.packageTier === 'commerce') {
      basePrice = 85000;
      baseName = 'Commerce Package';
    }
  } else {
    // business
    if (state.packageTier === 'starter') {
      basePrice = 32000;
      baseName = 'Starter Package';
    } else if (state.packageTier === 'growth') {
      basePrice = 62000;
      baseName = 'Growth Package';
    } else if (state.packageTier === 'commerce') {
      basePrice = 105000;
      baseName = 'Commerce Package';
    }
  }

  const featureItems: { name: string; price: number; isMonthly?: boolean }[] = [];
  
  if (state.category) {
    const catName = state.category === 'Other' ? state.otherCategory : state.category;
    if (catName) featureItems.push({ name: `Category: ${catName}`, price: 0 });
  }

  if (state.features.premiumGallery) featureItems.push({ name: 'Premium Gallery', price: 0 });
  if (state.features.socialMedia) featureItems.push({ name: 'Social Media Integration', price: 6000 });
  if (state.features.calendar) featureItems.push({ name: 'Booking Calendar', price: 12000 });
  if (state.features.blog) featureItems.push({ name: 'Blog / News Section', price: 6000 });
  if (state.features.contentWriting) featureItems.push({ name: 'Professional Content Writing', price: 15000 });
  if (state.features.animations) featureItems.push({ name: 'Premium Animations', price: 8000 });
  if (state.features.multilingual) featureItems.push({ name: 'Multilingual (En/Sw)', price: 7000 });
  
  if (state.features.mpesa) featureItems.push({ name: 'M-Pesa + Card Gateway', price: 10000 });
  if (state.features.shoppingCart) featureItems.push({ name: 'Advanced Shopping Cart', price: 22000 });
  if (state.features.inventory) featureItems.push({ name: 'Inventory Management', price: 18000 });
  if (state.features.reviews) featureItems.push({ name: 'Customer Reviews', price: 5000 });
  if (state.features.googleMaps) featureItems.push({ name: 'Google Maps', price: 0 });
  if (state.features.seo) featureItems.push({ name: 'Basic SEO Optimization', price: 8000 });
  if (state.features.dashboard) featureItems.push({ name: 'Advanced Dashboard', price: 10000 });
  if (state.features.speedCdn) featureItems.push({ name: 'Speed & CDN Boost', price: 6000 });

  if (state.carePackage === 'basic') featureItems.push({ name: 'Basic Care Package (Monthly)', price: 2800, isMonthly: true });
  if (state.carePackage === 'growth') featureItems.push({ name: 'Growth Care Package (Monthly)', price: 5500, isMonthly: true });
  if (state.carePackage === 'commerce') featureItems.push({ name: 'Commerce Care Package (Monthly)', price: 12500, isMonthly: true });

  if (state.contentProvider === 'copywriter') featureItems.push({ name: 'Professional Content Writing', price: 15000 });
  else if (state.contentProvider === 'self') featureItems.push({ name: 'Content Provided by You', price: 0 });
  else if (state.contentProvider === 'ai') featureItems.push({ name: 'AI Assisted Content', price: 0 });

  if (state.designMood) featureItems.push({ name: `Design Mood: ${state.designMood.charAt(0).toUpperCase() + state.designMood.slice(1)}`, price: 0 });
  if (state.primaryColor) featureItems.push({ name: `Primary Color: ${state.primaryColor}`, price: 0 });
  if (state.secondaryColor) featureItems.push({ name: `Secondary Color: ${state.secondaryColor}`, price: 0 });
  if (state.hasLogo) featureItems.push({ name: 'Logo Provided', price: 0 });

  let hostingPrice = 0;
  let hostingName = 'Standard Domain + Hosting';
  if (state.hosting === 'premium_domain') {
    hostingPrice = 3000;
    hostingName = 'Premium Domain';
  } else if (state.hosting === 'enhanced') {
    hostingPrice = 5000;
    hostingName = 'Enhanced Shared / Lite Cloud';
  } else if (state.hosting === 'cloud') {
    hostingPrice = 10000;
    hostingName = 'Cloud / Business Hosting';
  } else if (state.hosting === 'vps') {
    hostingPrice = 20000;
    hostingName = 'VPS Hosting';
  }

  const featuresTotal = featureItems.reduce((sum, item) => sum + (!item.isMonthly ? item.price : 0), 0);
  const subtotal = basePrice + featuresTotal + hostingPrice;

  // Only count actual features for the discount, not care packages or content providers
  const numFeatures = Object.values(state.features).filter(Boolean).length;
  const discountAmount = numFeatures >= 4 ? subtotal * 0.05 : 0;
  
  const taxableAmount = subtotal - discountAmount;
  const vat = taxableAmount * 0.16;
  const total = taxableAmount + vat;

  return {
    basePrice,
    baseName,
    featureItems,
    hostingPrice,
    hostingName,
    subtotal,
    discountAmount,
    vat,
    total,
    numFeatures
  };
}
