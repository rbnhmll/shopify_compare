import vueSmoothScroll from 'vue2-smooth-scroll';
import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

Vue.filter('money', value => `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);

Vue.filter('camel', value => value
  .replace(/\s(.)/g, $1 => $1.toUpperCase())
  .replace(/\s/g, '')
  .replace(/^(.)/, $1 => $1.toLowerCase()));

Vue.filter('id', value => `#${value}`);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
