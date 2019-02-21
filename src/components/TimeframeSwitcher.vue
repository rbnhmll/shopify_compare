<template>
  <div>
    <label for="timeframe">Timeframe</label>
    <select name="Timeframe" id="timeframe" v-model.number="months">
      <option v-for="option in options"
        :value="option.value"
        :key="option.text"
      >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TimeframeSwitcher',
  data() {
    return {
      options: [
        { text: '1 Month', value: 1 },
        { text: '1 Year', value: 12 },
      ],
    };
  },
  computed: {
    months: {
      get() {
        return this.$store.state.months;
      },
      set(val) {
        this.$store.dispatch('setMonths', val);
      },
    },
  },
};
</script>

<style scoped lang="stylus">
.select
  display inline-block
</style>
