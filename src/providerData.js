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
};
