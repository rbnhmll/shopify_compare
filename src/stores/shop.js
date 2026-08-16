import { defineStore } from 'pinia';

import providerData from '../providerData';

export const useShopStore = defineStore('shop', {
  state: () => ({
    region: 'CAD',
    months: 1,
    providerCalculated: {
      etsy: {
        name: 'Etsy',
        total: null,
        featureMatches: {
          maxStaffAccounts: false,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
      basicShopify: {
        name: 'Shopify Basic',
        total: null,
        featureMatches: {
          maxStaffAccounts: false,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
      shopify: {
        name: 'Shopify Grow',
        total: null,
        featureMatches: {
          maxStaffAccounts: false,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
      advancedShopify: {
        name: 'Shopify Advanced',
        total: null,
        featureMatches: {
          maxStaffAccounts: null,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
      shopifyPlus: {
        name: 'Shopify Plus',
        total: null,
        featureMatches: {
          maxStaffAccounts: null,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
    },
    // Etsy is hidden by default to keep the comparison compact.
    showEtsy: false,
    multipleStores: false,
    // Only applied when multipleStores is on, so the slider keeps its value when
    // the checkbox is toggled off and back on.
    storeCount: 2,
    userInfo: {
      transactionCount: 10,
      avgTransactionPrice: 10,
      avgShippingCost: 0,
    },
    reqs: {
      maxStaffAccounts: 1,
      giftCards: false,
      proReports: false,
      advReports: false,
      shippingRates: false,
    },
    providerData,
  }),
  getters: {
    timeFrame: state => (state.months === 1 ? 'Monthly' : 'Yearly'),
    effectiveStoreCount: state => (state.multipleStores ? state.storeCount : 1),
    visibleProviders: state => Object.fromEntries(
      Object.entries(state.providerData).filter(([key]) => state.showEtsy || key !== 'etsy'),
    ),
    bestValue: (state) => {
      const visible = Object
        .keys(state.providerData)
        .filter(key => state.showEtsy || key !== 'etsy');
      // Totals arrive a tick after mount, so fall back to plan order until they do.
      const scored = visible.filter(key => typeof state.providerCalculated[key].total === 'number');
      const ranked = (scored.length ? scored : visible)
        .sort((a, b) => state.providerCalculated[a].total - state.providerCalculated[b].total);

      return state.providerData[ranked[0]][state.region];
    },
    // Gross revenue: what buyers actually hand over, shipping included. Fees are
    // charged on that same base, so excluding shipping here understated profit.
    avgRevenue: state => state.userInfo.transactionCount
      * (state.userInfo.avgTransactionPrice + state.userInfo.avgShippingCost),
  },
  actions: {
    setMonths(value) {
      this.months = value;
    },
    setRegion(value) {
      this.region = value;
    },
    setUserInfo({ field, value }) {
      this.userInfo[field] = value;
    },
    setTotals({ name, total }) {
      this.providerCalculated[name].total = total;
    },
    setMaxStaffAccounts(value) {
      this.reqs.maxStaffAccounts = value;
    },
    setGiftCard(value) {
      this.reqs.giftCards = value;
    },
    setProReports(value) {
      this.reqs.proReports = value;
    },
    setAdvReports(value) {
      this.reqs.advReports = value;
    },
    setShippingRates(value) {
      this.reqs.shippingRates = value;
    },
    setShowEtsy(value) {
      this.showEtsy = value;
    },
    setMultipleStores(value) {
      this.multipleStores = value;
    },
    setStoreCount(value) {
      this.storeCount = value;
    },
  },
});
