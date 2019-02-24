import Vue from 'vue';
import Vuex from 'vuex';

import providerData from './providerData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    region: 'CAD',
    months: 1,
    providerCalculated: {
      Etsy: {
        total: null,
        featureMatches: {
          maxStaffAccounts: false,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
      'Basic Shopify': {
        total: null,
        featureMatches: {
          maxStaffAccounts: false,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
      Shopify: {
        total: null,
        featureMatches: {
          maxStaffAccounts: false,
          giftCards: false,
          proReports: false,
          advReports: false,
          shippingRates: false,
        },
      },
      'Advanced Shopify': {
        total: null,
        featureMatches: {
          maxStaffAccounts: 1,
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
      CAD_USD: null,
      USD_CAD: null,
    },
    providerData,
  },
  getters: {
    timeFrame: state => (state.months === 1 ? 'Monthly' : 'Yearly'),
    bestValue: (state) => {
      const arr = Object
        .keys(state.providerCalculated)
        .sort((a, b) => state.providerCalculated[a].total - state.providerCalculated[b].total);
      return arr[0];
    },
    avgRevenue: state => state.userInfo.transactionCount * state.userInfo.avgTransactionPrice || '',
  },
  mutations: {
    setMonths: (state, payload) => {
      Vue.set(state, 'months', payload);
    },
    setRegion: (state, payload) => {
      Vue.set(state, 'region', payload);
    },
    setUserInfo: (state, { field, value }) => {
      Object.assign(state.userInfo, {
        [field]: value,
      });
    },
    setTotals: (state, { name, total }) => {
      Object.assign(state.providerCalculated[name], {
        total,
      });
    },
    setMaxStaffAccounts: (state, value) => {
      Vue.set(state.reqs, 'maxStaffAccounts', value);
      // state.reqs.maxStaffAccounts = value;
    },
    setGiftCard: (state, value) => {
      Vue.set(state.reqs, 'giftCards', value);
      // state.reqs.giftCards = value;
    },
    setProReports: (state, value) => {
      Vue.set(state.reqs, 'proReports', value);
      // state.reqs.proReports = value;
    },
    setAdvReports: (state, value) => {
      Vue.set(state.reqs, 'advReports', value);
      // state.reqs.advReports = value;
    },
    setShippingRates: (state, value) => {
      Vue.set(state.reqs, 'shippingRates', value);
      // state.reqs.shippingRates = value;
    },
    setExchangeRates: (state, { CAD_USD, USD_CAD }) => {
      Object.assign(state.exchangeRates, {
        CAD_USD,
        USD_CAD,
      });
    },
  },
  actions: {
    setMonths: (context, val) => context.commit('setMonths', val),
    setRegion: (context, val) => context.commit('setRegion', val),
    setUserInfo: (context, val) => context.commit('setUserInfo', val),
    setTotals: (context, val) => context.commit('setTotals', val),
    setMaxStaffAccounts: (context, val) => context.commit('setMaxStaffAccounts', val),
    setGiftCard: (context, val) => context.commit('setGiftCard', val),
    setProReports: (context, val) => context.commit('setProReports', val),
    setAdvReports: (context, val) => context.commit('setAdvReports', val),
    setShippingRates: (context, val) => context.commit('setShippingRates', val),
    getExchangeRates: (context) => {
      const endpoint = 'https://free.currencyconverterapi.com/api/v6/convert?q=CAD_USD,USD_CAD&compact=ultra&apiKey=f3b0ddafa92827d8978f';

      fetch(endpoint)
        .then(response => response.json())
        .then((response) => {
          context.commit('setExchangeRates', response);
        });
    },
  },
});
