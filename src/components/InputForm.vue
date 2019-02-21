<template>
  <form @submit.prevent class="input-form">

    <v-range
      :value="userInfo.transactionCount"
      name="Number of Transactions"
      id="numberOfTransaction"
      unitBefore="<"
      unitAfter="+"
      :min="1"
      :max="1000"
      @change="updateField('transactionCount', $event.target.value)"
    />

    <v-range
      :value="userInfo.avgTransactionPrice"
      name="Avg. Transaction Price"
      id="transactionPrice"
      unitBefore="<"
      unitAfter="+"
      :min="1"
      :max="1000"
      @change="updateField('avgTransactionPrice', $event.target.value)"
    />

    <v-range
      :value="userInfo.avgShippingCost"
      name="Avg. Shipping Cost"
      id="shippingCost"
      unitBefore="<"
      unitAfter="+"
      :min="1"
      :max="500"
      @change="updateField('avgShippingCost', $event.target.value)"
    />
    <!-- <advanced-options /> -->
  </form>
</template>

<script>
import VRange from './VRange.vue';
import AdvancedOptions from './AdvancedOptions.vue';

export default {
  name: 'InputForm',
  components: {
    VRange,
    AdvancedOptions,
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
</style>
