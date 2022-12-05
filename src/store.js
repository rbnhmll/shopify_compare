import Vue from 'vue';
import Vuex from 'vuex';

import providerData from './providerData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
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
  mutations: {
    setMonths: (state, payload) => {
      Vue.set(state, 'months', payload);
    },
    setRegion: (state, payload) => {
      Vue.set(state, 'region', payload);
    },
    setUserInfo: (state, { field, value }) => Vue.set(state.userInfo, field, value),
    setTotals: (state, { name, total }) => Vue.set(state.providerCalculated[name], 'total', total),
    setMaxStaffAccounts: (state, value) => {
      Vue.set(state.reqs, 'maxStaffAccounts', value);
    },
    setGiftCard: (state, value) => Vue.set(state.reqs, 'giftCards', value),
    setProReports: (state, value) => Vue.set(state.reqs, 'proReports', value),
    setAdvReports: (state, value) => Vue.set(state.reqs, 'advReports', value),
    setShippingRates: (state, value) => Vue.set(state.reqs, 'shippingRates', value),
    setExchangeRates: (state, { CAD, USD }) => {
      Object.assign(state.exchangeRates, {
        CAD,
        USD,
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
      const endpoint = 'https://api.currencyapi.com/v3/latest?apikey=Ns2PWtFB4ujlRRLibG4Y6xFxMpWmj9mfB7wD9ZtY&currencies=USD%2CCAD';

      fetch(endpoint)
        .then(response => response.json())
        .then((response) => {
          context.commit('setExchangeRates', {
            CAD: response.data.CAD.value,
            USD: response.data.USD.value,
          });
        })
        .catch(err => console.error('Failed to fetch exchange rates. Using fallback values: ', err));
    },
  },
});
