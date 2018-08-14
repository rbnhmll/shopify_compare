import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('money', value => `$${value.toFixed(2)}`);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
