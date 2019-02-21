<template>
  <section class="summary">
    <h2 class="headline white--text light-green">Summary</h2>
    <h3>Avg. {{ timeFrame }} Sales: ${{ avgRevenue }} {{ region }}</h3>
    <div v-if="region === 'CAD'">
      <p>~ {{ avgRevenue * exchangeRates.CAD_USD | money }} USD</p>
      <small>*Estimated CAD => USD exchange = {{ exchangeRates.CAD_USD }}</small>
    </div>
    <h3>Best value for you right now: {{ bestValue }}</h3>
  </section>
</template>

<script>
export default {
  name: 'Summary',
  computed: {
    avgRevenue() {
      return this.$store.getters.avgRevenue;
    },
    bestValue() {
      return this.$store.getters.bestValue;
    },
    exchangeRates() {
      return this.$store.state.exchangeRates;
    },
    timeFrame() {
      return this.$store.getters.timeFrame;
    },
    region() {
      return this.$store.state.region;
    },
  },
};
</script>

<style scoped lang="stylus">
h2
  text-align center
</style>
