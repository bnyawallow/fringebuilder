import { AppState } from '../types';

export function calculatePricing(state: AppState) {
  let basePrice = 0;
  let baseName = 'Starter Package';
  if (state.packageTier === 'starter') {
    basePrice = 28000;
    baseName = 'Starter Package';
  } else if (state.packageTier === 'growth') {
    basePrice = 52000;
    baseName = 'Growth Package';
  } else if (state.packageTier === 'commerce') {
    basePrice = 120000;
    baseName = 'Commerce Package';
  }

  const featureItems: { name: string; price: number; isMonthly?: boolean }[] = [];
  if (state.features.blog) featureItems.push({ name: 'Blog Module', price: 6000 });
  if (state.features.seo) featureItems.push({ name: 'SEO Optimization', price: 8000 });
  if (state.features.mpesa) featureItems.push({ name: 'M-Pesa Integration', price: 10000 });
  if (state.features.shoppingCart) featureItems.push({ name: 'Shopping Cart', price: 22000 });
  if (state.features.inventory) featureItems.push({ name: 'Inventory', price: 18000 });
  if (state.features.calendar) featureItems.push({ name: 'Calendar', price: 12000 });

  if (state.contentProvider === 'ai') featureItems.push({ name: 'AI Content Generation', price: 5000 });
  if (state.contentProvider === 'copywriter') featureItems.push({ name: 'Professional Copywriting', price: 15000 });

  if (state.carePackage === 'standard') featureItems.push({ name: 'Standard Care Package (Monthly)', price: 2800, isMonthly: true });
  if (state.carePackage === 'scale') featureItems.push({ name: 'Scale Care Package (Monthly)', price: 5500, isMonthly: true });

  let hostingPrice = 0;
  let hostingName = 'Standard Hosting';
  if (state.hosting === 'cloud') {
    hostingPrice = 8000;
    hostingName = 'Cloud Hosting';
  } else if (state.hosting === 'vps') {
    hostingPrice = 15000;
    hostingName = 'VPS Hosting';
  }

  const featuresTotal = featureItems.reduce((sum, item) => sum + item.price, 0);
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
