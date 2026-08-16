// Pricing last verified: 2026-08-16.
// Shopify: https://www.shopify.com/pricing (and /ca/pricing) — Shopify bills Canadian
// merchants natively in CAD, so each region block holds that region's real prices
// rather than a converted USD figure.
// Etsy: 6.5% transaction fee applies to item price AND buyer-paid shipping.

export default {
  etsy: {
    CAD: {
      name: 'Etsy',
      id: 'etsy',
      affiliate: 'https://www.etsy.com/ca/sell',
      ctaLabel: 'Start selling on Etsy',
      // Charged during onboarding for many (not all) new shops, region-dependent
      // and non-refundable. Disclosed in the FAQ, deliberately NOT part of the fee
      // maths: it is conditional, so folding it into totals would mislead too.
      setupFee: { min: 15, max: 29, currency: 'USD' },
      currency: 'CAD',
      monthlyFee: 0,
      listingFeeFixed: 0.27,
      salesFeePercentage: 0.065,
      shippingFeePercentage: 0.065,
      paymentProcessingFeeFixed: 0.25,
      paymentProcessingFeePercentage: 0.03,
    },
    USD: {
      name: 'Etsy',
      id: 'etsy',
      affiliate: 'https://www.etsy.com/sell',
      ctaLabel: 'Start selling on Etsy',
      // Charged during onboarding for many (not all) new shops, region-dependent
      // and non-refundable. Disclosed in the FAQ, deliberately NOT part of the fee
      // maths: it is conditional, so folding it into totals would mislead too.
      setupFee: { min: 15, max: 29, currency: 'USD' },
      currency: 'USD',
      monthlyFee: 0,
      listingFeeFixed: 0.2,
      salesFeePercentage: 0.065,
      shippingFeePercentage: 0.065,
      paymentProcessingFeeFixed: 0.25,
      paymentProcessingFeePercentage: 0.03,
    },
  },
  basicShopify: {
    CAD: {
      name: 'Shopify Basic',
      id: 'basicShopify',
      affiliate: 'https://shopify.pxf.io/x9PMyO',
      ctaLabel: 'Start your free trial',
      currency: 'CAD',
      monthlyFee: 49,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.028,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 0,
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 10,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: false,
        },
      },
    },
    USD: {
      name: 'Shopify Basic',
      id: 'basicShopify',
      affiliate: 'https://shopify.pxf.io/x9PMyO',
      ctaLabel: 'Start your free trial',
      currency: 'USD',
      monthlyFee: 39,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.029,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 0,
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 10,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: false,
        },
      },
    },
  },
  shopify: {
    CAD: {
      name: 'Shopify Grow',
      id: 'shopify',
      affiliate: 'https://shopify.pxf.io/x9PMyO',
      ctaLabel: 'Start your free trial',
      currency: 'CAD',
      monthlyFee: 132,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.026,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 5,
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 10,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: false,
        },
        internationalDomains: {
          name: 'International Domains',
          id: 'internationalDomains',
          value: true,
        },
        internationalPricing: {
          name: 'International Pricing',
          id: 'internationalPricing',
          value: true,
        },
      },
    },
    USD: {
      name: 'Shopify Grow',
      id: 'shopify',
      affiliate: 'https://shopify.pxf.io/x9PMyO',
      ctaLabel: 'Start your free trial',
      currency: 'USD',
      monthlyFee: 105,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.027,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 5,
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 10,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: false,
        },
        internationalDomains: {
          name: 'International Domains',
          id: 'internationalDomains',
          value: true,
        },
        internationalPricing: {
          name: 'International Pricing',
          id: 'internationalPricing',
          value: true,
        },
      },
    },
  },
  advancedShopify: {
    CAD: {
      name: 'Shopify Advanced',
      id: 'advancedShopify',
      affiliate: 'https://shopify.pxf.io/x9PMyO',
      ctaLabel: 'Start your free trial',
      currency: 'CAD',
      monthlyFee: 517,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.024,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 15,
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 10,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: true,
        },
        internationalDomains: {
          name: 'International Domains',
          id: 'internationalDomains',
          value: true,
        },
        internationalPricing: {
          name: 'International Pricing',
          id: 'internationalPricing',
          value: true,
        },
        internationalPricingVariant: {
          name: 'International Pricing (per variant)',
          id: 'internationalPricingVariant',
          value: true,
        },
      },
    },
    USD: {
      name: 'Shopify Advanced',
      id: 'advancedShopify',
      affiliate: 'https://shopify.pxf.io/x9PMyO',
      ctaLabel: 'Start your free trial',
      currency: 'USD',
      monthlyFee: 399,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.025,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 15,
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 10,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: true,
        },
        internationalDomains: {
          name: 'International Domains',
          id: 'internationalDomains',
          value: true,
        },
        internationalPricing: {
          name: 'International Pricing',
          id: 'internationalPricing',
          value: true,
        },
        internationalPricingVariant: {
          name: 'International Pricing (per variant)',
          id: 'internationalPricingVariant',
          value: true,
        },
      },
    },
  },
  // Plus is quoted, not self-serve. Figures below are the public "starts at" rate on
  // a 3-year term; Shopify bills the GREATER of that platform fee or a percentage of
  // monthly GMV (0.35% on a 3-year term, 0.40% on 1-year), which is why the variable
  // fields exist. The USD variable fee is capped at $40k/mo; no CAD cap is published,
  // so it is left unset (treated as uncapped) rather than guessed.
  shopifyPlus: {
    CAD: {
      name: 'Shopify Plus',
      id: 'shopifyPlus',
      // Plus is enterprise, sales-led: referrals go through the Shopify Partner
      // Program as a submitted lead, not a click-tracked affiliate link. So the CTA
      // opens an email to us and we submit the lead.
      affiliate: 'mailto:hello@upatfive.ca?subject=Shopify%20Plus%20enquiry',
      ctaLabel: 'Get in touch about Plus',
      currency: 'CAD',
      monthlyFee: 3400,
      monthlyFeeVariablePercentage: 0.0035,
      // One main store + nine expansion stores under a single contract.
      includedStores: 10,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.0215,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 'Unlimited',
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 200,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: true,
        },
        b2b: {
          name: 'B2B / Wholesale',
          id: 'b2b',
          value: true,
        },
        internationalDomains: {
          name: 'International Domains',
          id: 'internationalDomains',
          value: true,
        },
        internationalPricing: {
          name: 'International Pricing',
          id: 'internationalPricing',
          value: true,
        },
        internationalPricingVariant: {
          name: 'International Pricing (per variant)',
          id: 'internationalPricingVariant',
          value: true,
        },
      },
    },
    USD: {
      name: 'Shopify Plus',
      id: 'shopifyPlus',
      // Plus is enterprise, sales-led: referrals go through the Shopify Partner
      // Program as a submitted lead, not a click-tracked affiliate link. So the CTA
      // opens an email to us and we submit the lead.
      affiliate: 'mailto:hello@upatfive.ca?subject=Shopify%20Plus%20enquiry',
      ctaLabel: 'Get in touch about Plus',
      currency: 'USD',
      monthlyFee: 2300,
      monthlyFeeVariablePercentage: 0.0035,
      // One main store + nine expansion stores under a single contract.
      includedStores: 10,
      monthlyFeeVariableCap: 40000,
      listingFeeFixed: 0,
      salesFeePercentage: 0,
      paymentProcessingFeeFixed: 0.3,
      paymentProcessingFeePercentage: 0.0215,
      shippingFeePercentage: 0,
      additionalFeatures: {
        maxStaffAccounts: {
          name: 'Staff Accounts',
          id: 'maxStaffAccounts',
          value: 'Unlimited',
        },
        maxLocations: {
          name: 'Locations',
          id: 'maxLocations',
          value: 200,
        },
        giftCards: {
          name: 'Gift Cards',
          id: 'giftCards',
          value: true,
        },
        proReports: {
          name: 'Professional Reports',
          id: 'proReports',
          value: true,
        },
        shippingRates: {
          name: 'Third-party shipping rates',
          id: 'shippingRates',
          value: true,
        },
        b2b: {
          name: 'B2B / Wholesale',
          id: 'b2b',
          value: true,
        },
        internationalDomains: {
          name: 'International Domains',
          id: 'internationalDomains',
          value: true,
        },
        internationalPricing: {
          name: 'International Pricing',
          id: 'internationalPricing',
          value: true,
        },
        internationalPricingVariant: {
          name: 'International Pricing (per variant)',
          id: 'internationalPricingVariant',
          value: true,
        },
      },
    },
  },
};
