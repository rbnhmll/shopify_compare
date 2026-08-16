<template>
  <section class="providers wrapper">
    <provider
      v-for="(rate, key) in visibleProviders"
      :key="key"
      :rates="rate[region]"
      @total="collectValues($event)"
    />
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import Provider from './Provider.vue';
import { useShopStore } from '../stores/shop';

export default {
  name: 'ProviderLoop',
  components: {
    Provider,
  },
  methods: {
    ...mapActions(useShopStore, ['setTotals']),
    collectValues(val) {
      this.setTotals(val);
    },
  },
  computed: {
    ...mapState(useShopStore, ['visibleProviders', 'timeFrame', 'region']),
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

.providers
  display flex
  flex-wrap wrap
</style>
