<template>
  <div>
    <v-header />
    <main>
      <input-form />
      <tldr />
      <provider-loop />
      <v-summary />
    </main>
    <v-footer />
    <disclaimer />
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import InputForm from './components/InputForm.vue';
import Tldr from './components/Tldr.vue';
import VSummary from './components/VSummary.vue';
import ProviderLoop from './components/ProviderLoop.vue';
import VFooter from './components/VFooter.vue';
import Disclaimer from './components/Disclaimer.vue';

export default {
  name: 'App',
  components: {
    VHeader,
    InputForm,
    Tldr,
    VSummary,
    ProviderLoop,
    VFooter,
    Disclaimer,
  },
  computed: {
    currentYear() {
      return (new Date()).getFullYear();
    },
    months() {
      return this.$store.state.months;
    },
  },
  created() {
    this.$store.dispatch('getExchangeRates');
  },
  head: {
    title() {
      return {
        inner: 'Shopify Compare',
        complement: 'Find the right pricing tier for your shop',
      };
    },
    meta: [
      { name: 'description', content: 'Find the best value pricing tier for your e-commerce store on Shopify or Etsy', id: 'desc' },
      { name: 'keywords', content: 'Shopify, Shopify Pricing, Etsy, Etsy Pricing, Best value, Best deal, e-commerce, E-Commerce', id: 'keys' },
      { name: 'author', content: 'Robin Hamill', id: 'author' },

      { property: 'og:title', content: 'Shopify Compare | Find the right pricing tier for your shop', id: 'og-title' },
      { property: 'og:site_name', content: 'Shopify Compare', id: 'og-site-name' },
      { property: 'og:url', content: 'https://shopify-compare.club', id: 'og-url' },
      { property: 'og:description', content: 'Find the best value pricing tier for your e-commerce store on Shopify or Etsy', id: 'og-description' },
      { property: 'og:type', content: 'website', id: 'og-type' },
      { property: 'og:image', content: 'https://shopify-compare.club/social.png', id: 'og-image' },

      { property: 'twitter:site', content: 'https://shopify-compare.club', id: 'twitter-site' },
      { property: 'twitter:card', content: 'summary_large_image', id: 'twitter-card' },
      { property: 'twitter:creator', content: '@rbnhmll', id: 'twitter-creator' },
      { property: 'twitter:title', content: 'Shopify Compare', id: 'twitter-title' },
      { property: 'twitter:description', content: 'Find the best value pricing tier for your e-commerce store on Shopify or Etsy', id: 'twitter-description' },
      { property: 'twitter:image', content: 'https://shopify-compare.club/social.png', id: 'twitter-image' },
    ],
  },
};
</script>

<style lang="stylus">
@import './assets/styles/normalize'
@import './assets/styles/vars'
@import './assets/styles/mixins'
@import './assets/styles/global'
</style>
