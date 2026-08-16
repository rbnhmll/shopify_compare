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
          Avg. {{ timeFrame }} Sales: {{ $money(avgRevenue) }} <small>{{ region }}</small>
        </li>
        <li>
          <i class="far fa-minus"></i>&nbsp;
        </li>
        <li>
          <i class="far fa-file-invoice-dollar"></i>
          Total {{ timeFrame }} Fees: {{ $money(totalFees) }} <small>{{ region }}</small>
          <show-more>
            <ul>
              <li v-if="provider.monthlyFee > 0">
                Monthly Fee: {{ $money(provider.monthlyFee) }}
                <small>{{ provider.currency }}</small>
                <icon-tooltip v-if="provider.currency !== region">
                  Billed in {{ provider.currency }}
                </icon-tooltip>
                <small v-if="provider.currency !== region">
                  (~{{ $money(provider.monthlyFee * exchangeRates.USD) }} {{ region }})
                  <icon-tooltip v-if="provider.currency !== region">
                    XR: {{ exchangeRates.USD }}
                  </icon-tooltip>
                </small>
              </li>
              <li v-if="listingFees > 0">Listing Fees: {{ $money(listingFees) }} <small>{{ provider.currency }}</small></li>
              <li v-if="transactionFees > 0">Transaction Fees: {{ $money(transactionFees) }} <small>{{ provider.currency }}</small></li>
              <li>
                Processing Fees: {{ $money(paymentProcessingFees) }}
                <small>{{ region }}</small>
              </li>
            </ul>
          </show-more>
        </li>
        <li>
          <i class="far fa-equals"></i>
          Profit: {{ $money(profit) }} <small>{{ region }}</small>
        </li>
      </ul>
      <p>
      </p>
    </div>
    <cta :rates="provider" />
  </section>
</template>

<script>
import { mapState } from 'pinia';

import IconTooltip from './IconTooltip.vue';
import ShowMore from './ShowMore.vue';
import Cta from './Cta.vue';
import { useShopStore } from '../stores/shop';

export default {
  name: 'VSummary',
  components: {
    IconTooltip,
    ShowMore,
    Cta,
  },
  computed: {
    ...mapState(useShopStore, [
      'avgRevenue',
      'exchangeRates',
      'timeFrame',
      'region',
      'providerCalculated',
      'userInfo',
      'months',
    ]),
    ...mapState(useShopStore, { provider: 'bestValue' }),
    totalFees() {
      return this.providerCalculated[this.provider.id].total * this.months;
    },
    profit() {
      return this.avgRevenue - this.totalFees;
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
