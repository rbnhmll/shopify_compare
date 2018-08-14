<template>
  <v-app>
    <v-content>
      <v-container grid-list-lg>
        <v-header />
        <v-layout wrap grid-list->
          <v-flex xs6>
            <region-switcher />
          </v-flex>
          <v-flex xs6>
            <timeframe-switcher />
          </v-flex>
        </v-layout>
        <input-form />
      </v-container>
      <v-container>
        <v-summary />
        <section class="providers">
          <v-layout row fill-height>
            <provider
              v-for="rate in providerData"
              :key="rate.name"
              :rates="rate[region]"
              @total="collectValues($event)"
            />
          </v-layout>
        </section>
      </v-container>
      <v-footer />
    </v-content>
  </v-app>
</template>

<script>
import VHeader from './components/VHeader.vue';
import RegionSwitcher from './components/RegionSwitcher.vue';
import TimeframeSwitcher from './components/TimeframeSwitcher.vue';
import InputForm from './components/InputForm.vue';
import VSummary from './components/VSummary.vue';
import Provider from './components/Provider.vue';
import VFooter from './components/VFooter.vue';

export default {
  name: 'App',
  components: {
    VHeader,
    InputForm,
    VSummary,
    RegionSwitcher,
    TimeframeSwitcher,
    Provider,
    VFooter,
  },
  methods: {
    collectValues(val) {
      this.$store.dispatch('setTotals', val);
    },
  },
  computed: {
    providerData() {
      return this.$store.state.providerData;
    },
    currentYear() {
      return (new Date()).getFullYear();
    },
    months() {
      return this.$store.state.months;
    },
    timeframe() {
      return this.$store.getters.timeFrame;
    },
    region() {
      return this.$store.state.region;
    },
  },
};
</script>

<style lang="stylus">
</style>
