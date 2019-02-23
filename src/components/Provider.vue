<template>
  <article :class="{ bestValue: isBestValue }">
    <best-banner
      v-if="isBestValue"
      :colour="rates.brandColour"
    />
    <div>
      <h2>{{ rates.name }}</h2>
    </div>
    <div>
      <h5>Monthly Fee: {{ rates.monthlyFee | money }} {{ rates.currency }}</h5>
      <h3>Cost per sale: {{ averageCostPerSale | money }}</h3>
      <h3>Fee % Per Sale: {{ feePercentagePerSale }}%</h3>
      <h3>Total Monthly Fees: {{ totalFeesPerMonth | money }}</h3>
      <div v-if="rates.additionalFeatures">
        <h4>Plus:</h4>
        <ul>
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
      <affiliate-button
        :link="rates.affiliate"
        :colour="rates.brandColour"
      />
    </div>
  </article>
</template>

<script>
import AffiliateButton from './AffiliateButton.vue';
import BestBanner from './BestBanner.vue';

export default {
  name: 'Provider',
  props: ['rates'],
  components: {
    AffiliateButton,
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
article
  height 100%
  position relative
  margin 0 1%

  &.bestValue
    transition all 0.5s
    transform scale(1.08)
    box-shadow 0 0 20px rgba(0, 0, 0, 0.5)
    flex 2 0 200px
    z-index 10

li
  padding 5px
  border-radius 3px
  transition background 0.3s

  &.req
    background #8BC34A

.cta
  text-align center
  flex-direction column
  padding 20px 0
</style>
