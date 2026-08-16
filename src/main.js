import { createApp } from 'vue';
import { createPinia } from 'pinia';
import smoothScroll from 'vue3-smooth-scroll';

import App from './App.vue';
import {
  camel, id, money, percent,
} from './format';

const app = createApp(App);

app.use(createPinia());
app.use(smoothScroll);

// Stand-ins for the Vue 2 filters, usable as {{ $money(value) }} in templates.
Object.assign(app.config.globalProperties, {
  $camel: camel,
  $id: id,
  $money: money,
  $percent: percent,
});

app.mount('#app');
