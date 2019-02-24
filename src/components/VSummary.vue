<template>
  <section class="summary">
    <div class="wrapper wrapper--mini content">
      <h2 class="hl">Summary</h2>
      <h3>Best value for you right now: <strong class="hl">{{ bestValue.name }}</strong></h3>
      <p>Avg. {{ timeFrame }} Sales: {{ avgRevenue | money }} <small>{{ region }}</small>
        <br>
        <small v-if="region === 'CAD'">
          ~ {{ avgRevenue * exchangeRates.CAD_USD | money }} USD
          <icon-tooltip>
            Est. CAD/USD exchange = {{ exchangeRates.CAD_USD }}
          </icon-tooltip>
        </small>
      </p>
      <p>Total {{ timeFrame }} Fees: {{ totalFees | money }} <small>{{ region }}</small></p>
      <p>Profit: {{ profit | money }} <small>{{ region }}</small></p>
    </div>
    <cta :rates="bestValue" />
  </section>
</template>

<script>
import VButton from './VButton.vue';
import Switches from './Switches.vue';
import IconTooltip from './IconTooltip.vue';
import Cta from './Cta.vue';

export default {
  name: 'Summary',
  components: {
    VButton,
    Switches,
    IconTooltip,
    Cta,
  },
  computed: {
    avgRevenue() {
      return this.$store.getters.avgRevenue;
    },
    totalFees() {
      return this.providerCalculated[this.bestValue.id].total * this.$store.state.months;
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
    providerCalculated() {
      return this.$store.state.providerCalculated;
    },
    profit() {
      return this.avgRevenue - this.totalFees;
    },
  },
};
</script>

<style scoped lang="stylus">
.summary
  background var(--white)

</style>
