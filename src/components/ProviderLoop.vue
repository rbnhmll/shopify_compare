<template>
  <section class="provider">
    <provider
      v-for="rate in providerData"
      :key="rate.name"
      :rates="rate[region]"
      @total="collectValues($event)"
    />
  </section>
</template>

<script>
import Provider from './Provider.vue';

export default {
  name: 'ProviderLoop',
  components: {
    Provider,
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
    timeframe() {
      return this.$store.getters.timeFrame;
    },
    region() {
      return this.$store.state.region;
    },
  },
};
</script>

<style lang="stylus" scoped>
.provider
  display flex
  border 2px solid grey
</style>
