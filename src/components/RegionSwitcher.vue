<template>
  <label for="region">
    Region
    <div class="select-wrapper">
      <select name="Region" id="region" v-model.number="region">
        <option v-for="option in options"
          :value="option"
          :key="option"
        >{{ option }}</option>
      </select>
      <v-icon name="chevron-down" />
    </div>
  </label>
</template>

<script>
import { useShopStore } from '../stores/shop';

export default {
  name: 'RegionSwitcher',
  data() {
    return {
      options: ['USD', 'CAD'],
    };
  },
  computed: {
    store() {
      return useShopStore();
    },
    region: {
      get() {
        return this.store.region;
      },
      set(val) {
        this.store.setRegion(val);
      },
    },
  },
};
</script>

<style scoped lang="stylus">
label
  display flex
  flex-direction column

.select
  display inline-block
</style>
