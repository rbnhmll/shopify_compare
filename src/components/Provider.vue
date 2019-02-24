<template>
  <article :id="rates.name | camel" :class="{ bestValue: isBestValue }">
    <best-banner
      v-if="isBestValue"
      :colour="rates.brandColour"
    />
    <div class="content">
      <h2>{{ rates.name }}</h2>
      <ul class="rates">
        <li>
          <i class="fas fa-calendar-alt"></i>
          Monthly Fee: {{ rates.monthlyFee | money }} {{ rates.currency }}
        </li>
        <li>
          <i class="fas fa-credit-card"></i>
          Cost per sale: {{ averageCostPerSale | money }}
        </li>
        <li>
          <i class="fas fa-percentage"></i>
          Fee % Per Sale: {{ feePercentagePerSale }}%
        </li>
        <li>
          <i class="fas fa-equals"></i>
          Total Monthly Fees: {{ totalFeesPerMonth | money }}
        </li>
      </ul>
      <div v-if="rates.additionalFeatures">
        <h4>Plus:</h4>
        <ul class="plus">
          <li
            v-for="feature in rates.additionalFeatures"
            :key="feature.name"
            v-if="feature.value"
            :class="{'req': reqs[feature.id] <= rates.additionalFeatures[feature.id]}"
          >
            <span
              v-if="typeof feature.value === 'number'"
            >{{ feature.value }}</span> {{ feature.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="cta" v-if="rates.affiliate && isBestValue">
      <h3 class="cta__message">Get started with {{ rates.name }}</h3>
      <v-button :href="rates.affiliate" target="_blank">Sign up for free now!</v-button>
    </div>
  </article>
</template>

<script>
import VButton from './VButton.vue';
import BestBanner from './BestBanner.vue';

export default {
  name: 'Provider',
  props: ['rates'],
  components: {
    VButton,
    BestBanner,
  },
  computed: {
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
    paymentProcessingFeeAmount() {
      return this.userInfo.avgTransactionPrice * this.rates.paymentProcessingFeePercentage;
    },
    shippingProcessingFeeAmount() {
      return this.userInfo.avgShippingCost * this.rates.shippingProcessingPercentage;
    },
    proratedMonthlyFee() {
      return this.rates.monthlyFee / (this.userInfo.transactionCount / this.$store.state.months);
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
        name: this.rates.name,
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
      let best = false;
      if (this.$store.getters.bestValue === this.rates.name) {
        best = true;
      }
      return best;
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
  border 2px solid transparent
  transition()
  shadow()

  &.bestValue
    border 2px solid var(--turquoise)
    transform scale(1.05)
    flex-grow 2
    z-index 10
    shadow(0.3)

.content,
.cta
  padding var(--padding)

.cta
  background var(--lightgrey)

.cta__message
  margin-top 0

.rates
  list-style-type none
  padding 0
  margin 0
  li
    padding: 5px
  i
    width 20px

.plus
  // border-radius 3px
  // padding 5px
  // transition background 0.3s

  // &.req
  //   background #8BC34A

.cta
  text-align center
  flex-direction column
</style>
