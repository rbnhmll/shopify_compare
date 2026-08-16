<template>
  <div class="multiStore">
    <v-checkbox id="multipleStores" v-model="multipleStores">
      I run multiple stores
    </v-checkbox>
    <template v-if="multipleStores">
      <v-range
        :value="storeCount"
        name="# of Stores"
        id="storeCount"
        :min="1"
        :max="10"
        @change="storeCount = $event"
      />
      <small class="multiStore__hint">
        Sales figures above are totals across all your stores.
      </small>
    </template>
  </div>
</template>

<script>
import VCheckbox from './VCheckbox.vue';
import VRange from './VRange.vue';
import { useShopStore } from '../stores/shop';

export default {
  name: 'MultiStore',
  components: {
    VCheckbox,
    VRange,
  },
  computed: {
    store() {
      return useShopStore();
    },
    multipleStores: {
      get() {
        return this.store.multipleStores;
      },
      set(value) {
        this.store.setMultipleStores(value);
      },
    },
    storeCount: {
      get() {
        return this.store.storeCount;
      },
      set(value) {
        this.store.setStoreCount(value);
      },
    },
  },
};
</script>

<style scoped lang="stylus">
.multiStore
  display grid
  grid-gap 10px

.multiStore__hint
  color var(--grey)
  line-height 1.3
</style>
