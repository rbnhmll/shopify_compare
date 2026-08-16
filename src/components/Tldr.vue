<template>
  <section class="tldr">
    <div class="wrapper wrapper--mini content">
      <h2 class="hl">tl;dr</h2>
      <p>With {{ $money(avgRevenue) }} in {{ timeFrame }} sales, the best value for you right now is:</p>
      <div class="cta">
        <v-button
          :href="$id($camel(`${bestValue.name}`))"
          shape="square"
          v-smooth-scroll="{ duration: 500, offset: -35 }"
        >
          {{ bestValue.name }}
          <v-icon name="chevron-down" />
        </v-button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'pinia';

import VButton from './VButton.vue';
import { useShopStore } from '../stores/shop';

export default {
  name: 'Tldr',
  components: {
    VButton,
  },
  computed: {
    ...mapState(useShopStore, ['bestValue', 'avgRevenue', 'timeFrame']),
  },
};
</script>

<style lang="stylus" scoped>
section
  background var(--white)

h3
  text-align center
  margin-top 0

.cta
  text-align center

.button
  .icon
    margin-left 20px
</style>
