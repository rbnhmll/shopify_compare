<template>
  <article :id="rates.name | camel" :class="{ bestValue: isBestValue }">
    <best-banner v-if="isBestValue" />
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
          Item Listing Fee: {{ rates.listingFeeFixed | money }}
        </li>
        <li v-if="rates.salesFeePercentage > 0 || rates.shippingFeePercentage > 0">
          <i class="far fa-money-bill"></i>
          Transaction Fee:
          <template >
            {{ rates.salesFeePercentage | percent }}
            <icon-tooltip>
              Sale + Shipping
            </icon-tooltip>
          </template>
          <ul v-if="rates.salesFeePercentage !== rates.shippingFeePercentage">
            <li v-if="rates.salesFeePercentage > 0">{{ rates.salesFeePercentage | percent }}</li>
            <li v-if="rates.shippingFeePercentage > 0">{{ rates.shippingFeePercentage | percent }}</li>
          </ul>
        </li>
        <li>
          <i class="far fa-credit-card"></i>
          Processing Fees:
            <span v-if="paymentProcessingFeePercentage > 0">{{ paymentProcessingFeePercentage | percent }} + </span>
            <span v-if="paymentProcessingFeeFixed > 0">{{ paymentProcessingFeeFixed | money }}</span>
          <icon-tooltip v-if="rates.monthlyFee > 0">
            Billed in {{ region }}
          </icon-tooltip>
          <show-more>
            <ul>
              <li v-if="paymentProcessingFeePercentage > 0">
                Payment Processing Fee: {{ paymentProcessingFeePercentage | percent }}
              </li>
              <li v-if="paymentProcessingFeeFixed > 0">
                Payment Processing Fixed Fee: {{ paymentProcessingFeeFixed | money }}
              </li>
            </ul>
          </show-more>
        </li>
        <li>
          <i class="far fa-equals"></i>
          Total Fees: {{ totalFeesPerMonth | money }} <small>{{ region }}</small>
          <icon-tooltip>
            Based on monthly sales
          </icon-tooltip>
          <show-more>
            <ul>
              <li>
                Total Cost Per Sale: {{ averageCostPerSale | money }}
              </li>
              <li>
                Total Fee % Per Sale: {{ feePercentagePerSale }}%
              </li>
            </ul>
          </show-more>
        </li>
      </ul>
      <div v-if="rates.additionalFeatures">
        <h4 class="plus__heading hl">Plus:</h4>
        <ul class="plus">
          <li
            v-for="feature in rates.additionalFeatures"
            :key="feature.name"
            v-if="feature.value"
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
import ShowMore from './ShowMore.vue';
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
    ShowMore,
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
    salesFeeAmount() {
      return this.userInfo.avgTransactionPrice * this.rates.salesFeePercentage;
    },
    shippingFeeAmount() {
      return this.userInfo.avgShippingCost * this.rates.shippingFeePercentage;
    },
    paymentProcessingFeeFixed() {
      return this.rates.paymentProcessingFeeFixed;
    },
    listingFeeFixed() {
      return this.rates.listingFeeFixed;
    },
    paymentProcessingFeePercentage() {
      return this.rates.paymentProcessingFeePercentage;
    },
    paymentProcessingFeeAmount() {
      return (this.userInfo.avgTransactionPrice + this.shippingFeeAmount) * this.paymentProcessingFeePercentage;
    },
    proratedMonthlyFee() {
      const monthlyFee = this.region === 'CAD'
        ? this.rates.monthlyFee * this.exchangeRates.USD_CAD
        : this.rates.monthlyFee;
      return monthlyFee / (this.userInfo.transactionCount / this.$store.state.months);
    },
    averageCostPerSale() {
      return this.salesFeeAmount
      + this.shippingFeeAmount
      + this.paymentProcessingFeeAmount
      + this.paymentProcessingFeeFixed
      + this.listingFeeFixed
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

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

article
  display flex
  flex-direction column
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

.plus__heading
  margin-bottom 0

.plus
  font-size 1.4rem

.cta
  margin-top auto
</style>
