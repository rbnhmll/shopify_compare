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
      <i class="far fa-chevron-down"></i>
    </div>
  </label>
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
label
  display flex
  flex-direction column

.select
  display inline-block
</style>
