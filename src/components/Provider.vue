<template>
  <article :id="rates.name | camel" :class="{ bestValue: isBestValue }">
    <best-banner
      v-if="isBestValue"
      :colour="rates.brandColour"
    />
    <div class="content">
      <h2 class="hl provider__name">{{ rates.name }}</h2>
      <ul class="rates">
        <li>
          <i class="far fa-calendar-alt"></i>
          Monthly Fee: {{ rates.monthlyFee | money }}
          <span class="currency">
            <small>{{ rates.currency }}</small>
            <icon-tooltip v-if="rates.monthlyFee > 0">
              Billed in {{ rates.currency }}
            </icon-tooltip>
          </span>
        </li>
        <li>
          <i class="far fa-list-alt"></i>
          Item listing fee: {{ rates.listingFeeFixed | money }}
        </li>
        <li>
          <i class="far fa-credit-card"></i>
          Processing Fees: {{ (paymentProcessingFeePercentage * 100).toFixed(1) }}%
          <icon-tooltip v-if="rates.shippingProcessingPercentage > 0">
            Sale price + Shipping
          </icon-tooltip>
          + {{ paymentProcessingFeeFixed | money }}
          <icon-tooltip v-if="rates.monthlyFee > 0">
            Billed in {{ region }}
          </icon-tooltip>
          <ul>
            <li>
              Total Fee % Per Sale: {{ feePercentagePerSale }}%
            </li>
            <li>
              Total Cost Per Sale: {{ averageCostPerSale | money }}
            </li>
          </ul>
        </li>
        <li>
          <i class="far fa-equals"></i>
          Total Fees: {{ totalFeesPerMonth | money }} <small>{{ region }}</small>
          <icon-tooltip>
            Based on monthly sales
          </icon-tooltip>
        </li>
      </ul>
      <div v-if="rates.additionalFeatures">
        <h4 class="plus__heading hl">Plus:</h4>
        <ul class="plus">
          <li
            v-for="feature in rates.additionalFeatures"
            :key="feature.name"
            v-if="feature.value"
            :class="{'req': reqs[feature.id] <= rates.additionalFeatures[feature.id]}"
          >
            <span
              v-if="typeof feature.value === 'number'"
            >{{ feature.value }}</span>
            {{ feature.name }}
          </li>
        </ul>
      </div>
    </div>
    <cta v-if="rates.affiliate && isBestValue" :rates="rates" />
  </article>
</template>

<script>
import VButton from './VButton.vue';
import IconTooltip from './IconTooltip.vue';
import BestBanner from './BestBanner.vue';
import Cta from './Cta.vue';

export default {
  name: 'Provider',
  props: {
    rates: {
      type: Object,
    },
  },
  components: {
    VButton,
    IconTooltip,
    BestBanner,
    Cta,
  },
  computed: {
    region() {
      return this.$store.state.region;
    },
    exchangeRates() {
      return this.$store.state.exchangeRates;
    },
    bestValue() {
      return this.$store.state.bestValue;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
    reqs() {
      return this.$store.state.reqs;
    },
    salesFeeAmount() {
      return this.userInfo.avgTransactionPrice * this.rates.salesFeePercentage;
    },
    paymentProcessingFeeFixed() {
      return this.rates.paymentProcessingFeeFixed;
    },
    paymentProcessingFeePercentage() {
      return this.rates.paymentProcessingFeePercentage;
    },
    paymentProcessingFeeAmount() {
      return this.userInfo.avgTransactionPrice * this.paymentProcessingFeePercentage;
    },
    shippingProcessingFeeAmount() {
      return this.userInfo.avgShippingCost * this.rates.shippingProcessingPercentage;
    },
    proratedMonthlyFee() {
      const monthlyFee = this.region === 'CAD'
        ? this.rates.monthlyFee * this.exchangeRates.USD_CAD
        : this.rates.monthlyFee;
      return monthlyFee / (this.userInfo.transactionCount / this.$store.state.months);
    },
    averageCostPerSale() {
      return this.salesFeeAmount
      + this.paymentProcessingFeeAmount
      + this.shippingProcessingFeeAmount
      + this.rates.paymentProcessingFeeFixed
      + this.rates.listingFeeFixed
      + this.proratedMonthlyFee;
    },
    totalFeesPerMonth() {
      const total = (this.userInfo.transactionCount *
      this.averageCostPerSale) /
      this.$store.state.months;
      this.$emit('total', {
        name: this.rates.id,
        total,
      });
      return total;
    },
    feePercentagePerSale() {
      const percent = ((this.averageCostPerSale / this.userInfo.avgTransactionPrice) * 100)
        .toFixed(2) / 1;
      return percent !== Infinity ? percent : '';
    },
    isBestValue() {
      if (this.$store.getters.bestValue.name === this.rates.name) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/mixins'

article
  overflow hidden
  position relative
  margin 10px 10px
  flex 1 0 280px
  border-radius var(--radius)
  background var(--white)
  transition()
  shadow()

  &.bestValue
    border 2px solid var(--turquoise)
    transform scale(1.05)
    flex-grow 2
    z-index 10
    shadow(0.3)


.rates
  list-style-type none
  padding 0
  margin 0
  li
    padding: 3px
    padding-left 0
  i
    display inline-flex
    justify-content center
    width 20px
    color var(--purple)
  ul
    font-size 1.4rem
    line-height 1

.plus__heading
  margin-bottom 0

.plus
  font-size 1.4rem
  // border-radius 3px
  // padding 5px
  // transition background 0.3s

  // &.req
  //   background #8BC34A
</style>
