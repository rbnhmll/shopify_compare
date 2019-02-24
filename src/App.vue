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
};
</script>

<style lang="stylus">
@import './assets/styles/normalize'
@import './assets/styles/vars'
@import './assets/styles/mixins'
@import './assets/styles/global'
</style>
