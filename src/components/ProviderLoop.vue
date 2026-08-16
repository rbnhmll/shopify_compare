<template>
  <section class="providers wrapper">
    <provider
      v-for="rate in providerData"
      :key="rate.name"
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
    ...mapState(useShopStore, ['providerData', 'timeFrame', 'region']),
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

.providers
  display flex
  flex-wrap wrap
</style>
