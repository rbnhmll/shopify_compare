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
        name: 'Basic Shopify',
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
        name: 'Shopify',
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
        name: 'Advanced Shopify',
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
    exchangeRates: {
      CAD: 0.73655437,
      USD: 1,
    },
    providerData,
  }),
  getters: {
    timeFrame: state => (state.months === 1 ? 'Monthly' : 'Yearly'),
    bestValue: (state) => {
      const arr = Object
        .keys(state.providerCalculated)
        .sort((a, b) => state.providerCalculated[a].total - state.providerCalculated[b].total);
      const select = arr[0];
      return state.providerData[select][state.region];
    },
    avgRevenue: state => state.userInfo.transactionCount * state.userInfo.avgTransactionPrice || '',
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
    setExchangeRates({ CAD, USD }) {
      Object.assign(this.exchangeRates, { CAD, USD });
    },
    getExchangeRates() {
      const endpoint = 'https://api.currencyapi.com/v3/latest?apikey=Ns2PWtFB4ujlRRLibG4Y6xFxMpWmj9mfB7wD9ZtY&currencies=USD%2CCAD';

      fetch(endpoint)
        .then(response => response.json())
        .then((response) => {
          this.setExchangeRates({
            CAD: response.data.CAD.value,
            USD: response.data.USD.value,
          });
        })
        .catch(err => console.error('Failed to fetch exchange rates. Using fallback values: ', err));
    },
  },
});
