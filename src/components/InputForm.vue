<template>
  <form @submit.prevent class="input-form">

    <fieldset>
      <region-switcher />
      <timeframe-switcher />
    </fieldset>

    <fieldset>

      <v-range
        :value="userInfo.transactionCount"
        name="# of Transactions"
        id="numberOfTransaction"
        :min="1"
        :max="1000"
        @change="updateField('transactionCount', $event)"
      />

      <v-range
        :value="userInfo.avgTransactionPrice"
        name="Avg. Transaction Price"
        id="transactionPrice"
        :min="1"
        :max="1000"
        @change="updateField('avgTransactionPrice', $event)"
      />

      <v-range
        :value="userInfo.avgShippingCost"
        name="Avg. Shipping Cost"
        id="shippingCost"
        :min="1"
        :max="500"
        @change="updateField('avgShippingCost', $event)"
      />
    </fieldset>
    <!-- <advanced-options /> -->
  </form>
</template>

<script>
import RegionSwitcher from './RegionSwitcher.vue';
import TimeframeSwitcher from './TimeframeSwitcher.vue';
import VRange from './VRange.vue';
import AdvancedOptions from './AdvancedOptions.vue';

export default {
  name: 'InputForm',
  components: {
    VRange,
    AdvancedOptions,
    RegionSwitcher,
    TimeframeSwitcher,
  },
  methods: {
    updateField(field, value) {
      this.$store.dispatch('setUserInfo', { field, value });
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style scoped lang="stylus">
.input-form
  display grid
  grid-template-columns 250px 1fr
</style>
