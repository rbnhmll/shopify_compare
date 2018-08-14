import Vue from 'vue';
import Vuex from 'vuex';

import providerData from './providerData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    region: 'CAD',
    months: 1,
    totals: {
      Etsy: null,
      'Basic Shopify': null,
      Shopify: null,
      'Advanced Shopify': null,
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
      USD_CAD: {
        val: 0.75,
      },
      CAD_USD: {
        val: 1.5,
      },
    },
    providerData,
  },
  getters: {
    timeFrame: state => (state.months === 1 ? 'Monthly' : 'Yearly'),
    bestValue: (state) => {
      const arr = Object.keys(state.totals).sort((a, b) => state.totals[a] - state.totals[b]);
      return arr[0];
    },
    avgRevenue: state => state.userInfo.transactionCount * state.userInfo.avgTransactionPrice || '',
  },
  mutations: {
    setMonths: (state, payload) => {
      state.months = payload;
    },
    setRegion: (state, payload) => {
      state.region = payload;
    },
    setUserInfo: (state, { field, value }) => {
      Object.assign(state.userInfo, {
        [field]: value,
      });
    },
    setTotals: (state, { name, total }) => {
      Object.assign(state.totals, {
        [name]: total,
      });
    },
    setMaxStaffAccounts: (state, value) => {
      state.reqs.maxStaffAccounts = value;
    },
    setGiftCard: (state, value) => {
      state.reqs.giftCard = value;
    },
    setProReports: (state, value) => {
      state.reqs.proReports = value;
    },
    setAdvReports: (state, value) => {
      state.reqs.advReports = value;
    },
    setShippingRates: (state, value) => {
      state.reqs.shippingRates = value;
    },
  },
  actions: {
    setMonths: (context, val) => {
      context.commit('setMonths', val);
    },
    setRegion: (context, val) => {
      context.commit('setRegion', val);
    },
    setUserInfo: (context, val) => {
      context.commit('setUserInfo', val);
    },
    setTotals: (context, val) => {
      context.commit('setTotals', val);
    },
    setMaxStaffAccounts: (context, val) => {
      context.commit('setMaxStaffAccounts', val);
    },
    setGiftCard: (context, val) => {
      context.commit('setGiftCard', val);
    },
    setProReports: (context, val) => {
      context.commit('setProReports', val);
    },
    setAdvReports: (context, val) => {
      context.commit('setAdvReports', val);
    },
    setShippingRates: (context, val) => {
      context.commit('setShippingRates', val);
    },
  },
});
