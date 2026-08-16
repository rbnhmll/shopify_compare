<template>
  <v-checkbox id="showEtsy" v-model="showEtsy" class="etsyToggle">
    Compare with Etsy
  </v-checkbox>
</template>

<script>
import VCheckbox from './VCheckbox.vue';
import { useShopStore } from '../stores/shop';

export default {
  name: 'EtsyToggle',
  components: {
    VCheckbox,
  },
  computed: {
    store() {
      return useShopStore();
    },
    showEtsy: {
      get() {
        return this.store.showEtsy;
      },
      set(value) {
        this.store.setShowEtsy(value);
      },
    },
  },
};
</script>

<style scoped lang="stylus">
.etsyToggle
  // Spans both columns in the mobile two-up switcher grid.
  grid-column 1 / -1
  margin-top 15px
</style>
