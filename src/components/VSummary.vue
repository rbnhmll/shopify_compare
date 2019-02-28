<template>
  <section class="summary">
    <div class="wrapper wrapper--mini content">
      <h2 class="hl">Summary</h2>
      <h3>Best value for you right now:
        <strong class="hl">{{ provider.name }}</strong>
      </h3>
      <ul class="rates">
        <li>
          <i class="far fa-hand-holding-usd"></i>
          Avg. {{ timeFrame }} Sales: {{ avgRevenue | money }} <small>{{ region }}</small>
        </li>
        <li>
          <i class="far fa-minus"></i>&nbsp;
        </li>
        <li>
          <i class="far fa-file-invoice-dollar"></i>
          Total {{ timeFrame }} Fees: {{ totalFees | money }} <small>{{ region }}</small>
          <show-more>
            <ul>
              <li v-if="provider.monthlyFee > 0">
                Monthly Fee: {{ provider.monthlyFee | money }}
                <small>{{ provider.currency }}</small>
                <icon-tooltip v-if="provider.currency !== region">
                  Billed in {{ provider.currency }}
                </icon-tooltip>
                <small v-if="provider.currency !== region">
                  (~{{ provider.monthlyFee *  exchangeRates.USD_CAD | money }} {{ region }})
                  <icon-tooltip v-if="provider.currency !== region">
                    XR: {{ exchangeRates.USD_CAD }}
                  </icon-tooltip>
                </small>
              </li>
              <li v-if="listingFees > 0">Listing Fees: {{ listingFees | money }}</li>
              <li v-if="transactionFees > 0">Transaction Fees: {{ transactionFees | money }}</li>
              <li>
                Processing Fees: {{ paymentProcessingFees | money }}
                <small>{{ region }}</small>
              </li>
            </ul>
          </show-more>
        </li>
        <li>
          <i class="far fa-equals"></i>
          Profit: {{ profit | money }} <small>{{ region }}</small>
        </li>
      </ul>
      <p>
      </p>
    </div>
    <cta :rates="provider" />
  </section>
</template>

<script>
import VButton from './VButton.vue';
import IconTooltip from './IconTooltip.vue';
import ShowMore from './ShowMore.vue';
import Cta from './Cta.vue';

export default {
  name: 'Summary',
  components: {
    VButton,
    IconTooltip,
    ShowMore,
    Cta,
  },
  computed: {
    avgRevenue() {
      return this.$store.getters.avgRevenue;
    },
    totalFees() {
      return this.providerCalculated[this.provider.id].total * this.$store.state.months;
    },
    provider() {
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
    userInfo() {
      return this.$store.state.userInfo;
    },
    listingFees() {
      return this.provider.listingFeeFixed * this.userInfo.transactionCount;
    },
    transactionFees() {
      const salesFee = this.userInfo.avgTransactionPrice * this.userInfo.transactionCount;
      const shippingFee = this.userInfo.avgShippingCost * this.userInfo.transactionCount;
      return (salesFee + shippingFee) * this.provider.salesFeePercentage;
    },
    paymentProcessingPercent() {
      return this.avgRevenue * this.provider.paymentProcessingFeePercentage;
    },
    paymentProcessingfixed() {
      return this.userInfo.transactionCount * this.provider.paymentProcessingFeeFixed;
    },
    paymentProcessingFees() {
      return this.paymentProcessingPercent + this.paymentProcessingfixed;
    },
  },
};
</script>

<style scoped lang="stylus">
.summary
  background var(--white)

.rates
  list-style-type none
  padding 0
  margin 0
  & > li
    position relative
    padding: 3px
    padding-left 25px
    i
      position absolute
      left 0
      top 7px
      display inline-flex
      justify-content center
      width 20px
      color var(--purple)
  ul
    font-size 1.4rem
    padding-left 18px
</style>
