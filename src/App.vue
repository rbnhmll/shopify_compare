<template>
  <div class="wrapper">
    <v-header />
    <main>
      <section class="options">
        <h2>Options</h2>
        <region-switcher />
        <timeframe-switcher />
      </section>
      <section class="input-form">
        <h2>User Inputs</h2>
        <input-form />
      </section>
      <provider-loop />
      <v-summary />
    </main>
    <v-footer />
    <disclaimer />
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import RegionSwitcher from './components/RegionSwitcher.vue';
import TimeframeSwitcher from './components/TimeframeSwitcher.vue';
import InputForm from './components/InputForm.vue';
import VSummary from './components/VSummary.vue';
import ProviderLoop from './components/ProviderLoop.vue';
import VFooter from './components/VFooter.vue';
import Disclaimer from './components/Disclaimer.vue';

export default {
  name: 'App',
  components: {
    VHeader,
    InputForm,
    VSummary,
    RegionSwitcher,
    TimeframeSwitcher,
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
  .wrapper
    max-width 800px
    width 100%
    margin 0 auto
</style>
