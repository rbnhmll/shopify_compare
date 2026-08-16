import { createApp, createSSRApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import VIcon from './components/VIcon.vue';
import {
  camel, id, money, percent,
} from './format';

// Shared by the browser entry (main.js) and the build-time prerender, so the two can
// never drift apart in how the app is assembled.
export const createShopApp = ({ ssr = false } = {}) => {
  const app = ssr ? createSSRApp(App) : createApp(App);

  app.use(createPinia());

  // Used in almost every component; registering globally avoids 11 local imports.
  app.component('VIcon', VIcon);

  // Stand-ins for the Vue 2 filters, usable as {{ $money(value) }} in templates.
  Object.assign(app.config.globalProperties, {
    $camel: camel,
    $id: id,
    $money: money,
    $percent: percent,
  });

  return app;
};

export default createShopApp;
