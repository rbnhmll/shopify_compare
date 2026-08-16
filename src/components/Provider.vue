<template>
  <article :id="$camel(rates.name)" :class="{ bestValue: isBestValue }">
    <best-banner v-if="isBestValue" />
    <div class="content">
      <h2 class="hl provider__name">{{ rates.name }}</h2>
      <ul class="rates">
        <li>
          <v-icon name="calendar-alt" />
          Monthly Fee: {{ $money(effectiveMonthlyFee) }}
          <span class="currency">
            <small>{{ rates.currency }}</small>
            <icon-tooltip v-if="rates.monthlyFee > 0">
              Billed in {{ rates.currency }}
            </icon-tooltip>
          </span>
        </li>
        <li v-if="showEtsy">
          <v-icon name="list-alt" />
          Item Listing Fee: {{ $money(rates.listingFeeFixed) }}
        </li>
        <li v-if="rates.salesFeePercentage > 0 || rates.shippingFeePercentage > 0">
          <v-icon name="money-bill" />
          Transaction Fee:
          {{ $percent(rates.salesFeePercentage) }}
          <icon-tooltip>
            Sale + Shipping
          </icon-tooltip>
          <ul v-if="rates.salesFeePercentage !== rates.shippingFeePercentage">
            <li v-if="rates.salesFeePercentage > 0">{{ $percent(rates.salesFeePercentage) }}</li>
            <li v-if="rates.shippingFeePercentage > 0">{{ $percent(rates.shippingFeePercentage) }}</li>
          </ul>
        </li>
        <li>
          <v-icon name="credit-card" />
          Processing Fees:
            <span v-if="paymentProcessingFeePercentage > 0">{{ $percent(paymentProcessingFeePercentage) }} + </span>
            <span v-if="paymentProcessingFeeFixed > 0">{{ $money(paymentProcessingFeeFixed) }}</span>
          <icon-tooltip v-if="rates.monthlyFee > 0">
            Billed in {{ region }}
          </icon-tooltip>
          <show-more>
            <ul>
              <li v-if="paymentProcessingFeePercentage > 0">
                Payment Processing Fee: {{ $percent(paymentProcessingFeePercentage) }}
              </li>
              <li v-if="paymentProcessingFeeFixed > 0">
                Payment Processing Fixed Fee: {{ $money(paymentProcessingFeeFixed) }}
              </li>
            </ul>
          </show-more>
        </li>
        <li>
          <v-icon name="equals" />
          Total Fees: {{ $money(totalFeesPerMonth) }} <small>{{ region }}</small>
          <icon-tooltip>
            Based on monthly sales
          </icon-tooltip>
          <show-more>
            <ul>
              <li>
                Total Cost Per Sale: {{ $money(averageCostPerSale) }}
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
          <template v-for="feature in rates.additionalFeatures" :key="feature.name">
            <li v-if="feature.value">
              <span
                v-if="typeof feature.value !== 'boolean'"
              >{{ feature.value }}</span>
              {{ feature.name }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <cta v-if="rates.affiliate && isBestValue" :rates="rates" />
  </article>
</template>

<script>
import { mapState } from 'pinia';

import IconTooltip from './IconTooltip.vue';
import ShowMore from './ShowMore.vue';
import BestBanner from './BestBanner.vue';
import Cta from './Cta.vue';
import { useShopStore } from '../stores/shop';
import { buyerPaidPerSale, effectiveMonthlyFee as calcMonthlyFee, monthlyGmv } from '../fees';

export default {
  name: 'Provider',
  props: {
    rates: {
      type: Object,
    },
  },
  components: {
    IconTooltip,
    ShowMore,
    BestBanner,
    Cta,
  },
  emits: ['total'],
  computed: {
    ...mapState(useShopStore, [
      'region',
      'userInfo',
      'months',
      'bestValue',
      'effectiveStoreCount',
      'showEtsy',
    ]),
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
      // Processing applies to what the buyer pays: item price + shipping charged.
      return buyerPaidPerSale(this.userInfo) * this.paymentProcessingFeePercentage;
    },
    effectiveMonthlyFee() {
      return calcMonthlyFee(
        this.rates,
        monthlyGmv(this.userInfo, this.months),
        this.effectiveStoreCount,
      );
    },
    proratedMonthlyFee() {
      // providerData holds each region's native prices, so no FX conversion here.
      return this.effectiveMonthlyFee / (this.userInfo.transactionCount / this.months);
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
      return (this.userInfo.transactionCount *
      this.averageCostPerSale) /
      this.months;
    },
    feePercentagePerSale() {
      const percent = ((this.averageCostPerSale / this.userInfo.avgTransactionPrice) * 100)
        .toFixed(2) / 1;
      return percent !== Infinity ? percent : '';
    },
    isBestValue() {
      if (this.bestValue.name === this.rates.name) {
        return true;
      }
      return false;
    },
  },
  watch: {
    // Was emitted from inside the totalFeesPerMonth computed, which mutated the
    // store mid-render. Vue 3 schedules this after the value settles instead.
    totalFeesPerMonth: {
      immediate: true,
      handler(total) {
        this.$emit('total', {
          name: this.rates.id,
          total,
        });
      },
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
    .icon
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
