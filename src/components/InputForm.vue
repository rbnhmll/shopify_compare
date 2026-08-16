<template>
  <section class="input-form">
    <div class="wrapper wrapper--medium">
      <form @submit.prevent class="input-form">

        <switches />

        <div class="sliders">
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
            price
            @change="updateField('avgTransactionPrice', $event)"
          />
          <v-range
            :value="userInfo.avgShippingCost"
            name="Avg. Shipping Cost"
            id="shippingCost"
            :min="0"
            :max="500"
            price
            @change="updateField('avgShippingCost', $event)"
          />
        </div>
      </form>
    </div>
  </section>
    <!-- <advanced-options /> -->
</template>

<script>
import { mapActions, mapState } from 'pinia';

import Switches from './Switches.vue';
import VRange from './VRange.vue';
import AdvancedOptions from './AdvancedOptions.vue';
import { useShopStore } from '../stores/shop';

export default {
  name: 'InputForm',
  components: {
    VRange,
    // Kept registered for the commented-out <advanced-options /> in the template.
    // eslint-disable-next-line vue/no-unused-components
    AdvancedOptions,
    Switches,
  },
  methods: {
    ...mapActions(useShopStore, ['setUserInfo']),
    updateField(field, value) {
      this.setUserInfo({ field, value });
    },
  },
  computed: {
    ...mapState(useShopStore, ['userInfo']),
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/mixins'

form
  display grid
  grid-template-columns 1fr
  grid-gap var(--padding)
  padding: var(--padding)
  background #fff
  border-radius var(--radius)
  shadow()
  @media screen and (min-width 768px)
    grid-template-columns 200px 1fr


.sliders
  display grid
  grid-template-columns 1fr
  grid-gap 10px
</style>
