<template>
  <v-select
    :items="options"
    v-model="region"
    label="Region"
    solo
  ></v-select>
</template>

<script>
export default {
  name: 'RegionSwitcher',
  data() {
    return {
      options: ['USD', 'CAD'],
    };
  },
  computed: {
    region: {
      get() {
        return this.$store.state.region;
      },
      set(val) {
        this.$store.dispatch('setRegion', val);
      },
    },
  },
};
</script>

<style scoped lang="stylus">
.select
  display inline-block
</style>
