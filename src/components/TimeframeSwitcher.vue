<template>
    <label for="timeframe">
      Timeframe
      <div class="select-wrapper">
        <select name="Timeframe" id="timeframe" v-model.number="months">
          <option v-for="option in options"
            :value="option.value"
            :key="option.text"
          >{{ option.text }}</option>
        </select>
        <i class="far fa-chevron-down"></i>
      </div>
    </label>
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
label
  display flex
  flex-direction column

.select
  display inline-block
</style>
