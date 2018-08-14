<template>
  <v-flex>

    <v-card
      vs-color="primary"
      :class="{ bestValue: isBestValue }"
    >
      <v-card-title
        :vs-background-color="rates.brandColour"
        :vs-title="rates.name"
        :vs-fill="isBestValue"
      ></v-card-title>
      <v-card-text>
        <best-banner
          v-if="isBestValue"
          :colour="rates.brandColour"
        />
        <h2>{{ rates.name }}</h2>
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
            >
              <span
                v-if="typeof feature.value === 'number'"
              >{{ feature.value }}</span> {{ feature.name }}
            </li>
          </ul>
        </div>
        <affiliate-button
          v-if="rates.affiliate && isBestValue" :link="rates.affiliate"
          :name="rates.name"
          :colour="rates.brandColour"
        />
      </v-card-text>
    </v-card>
  </v-flex>
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
.vs-card
  background #fff
  flex 1 0 200px

  // padding 10px
  &+.vs-card
    margin-left 15px

.bestValue
  transition all 0.5s
  transform scale(1.05)
  box-shadow 0 0 20px rgba(0, 0, 0, 0.5)
  flex 2 0 200px

  .con-vs-card-header
    color white !important
</style>
