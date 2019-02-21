<template>
  <div>
    <label for="region">Region</label>
    <select name="Region" id="region" v-model.number="region">
      <option v-for="option in options"
        :value="option"
        :key="option"
      >{{ option }}</option>
    </select>
  </div>
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
