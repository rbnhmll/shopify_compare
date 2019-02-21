<template>
  <section class="rangeSlider">
    <div class="rangeSlider__wrapper">
      <label
        :for="id"
        class="visuallyhidden">{{ name }}</label>
      <input
        v-bind="$attrs"
        :id="id"
        :min="min"
        :max="max"
        :step="step"
        type="range"
        :name="name"
        v-model.number="selection"
        v-on="listeners">
      <span
        :style="valPosition"
        class="valueMarker">{{ compRange }}</span>
        {{value}}
    </div>
    <div class="rangeLimits">
      <span>&#60; {{ unitBefore }}{{ min }} {{ unitAfter }}</span>
      <span>{{ unitBefore }}{{ max }} {{ unitAfter }} +</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RangeSlider',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    unitBefore: {
      type: String,
      default: '',
    },
    unitAfter: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    defaultValue: {
      type: Number,
      default: 50,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selection: '',
    };
  },
  computed: {
    listeners() {
      return {
        input: () => this.$emit('change', this.selection),
      };
    },
    compRange() {
      let range = '';
      if (this.selection === this.min) {
        range = `< ${this.unitBefore}${this.selection} ${this.unitAfter}`;
      } else if (this.selection === this.max) {
        range = `${this.unitBefore}${this.selection} ${this.unitAfter} +`;
      } else {
        range = `${this.unitBefore}${this.selection} ${this.unitAfter}`;
      }
      return range;
    },
    valPosition() {
      const range = this.max - this.min;
      const ratio = this.selection - this.min;
      const posPercent = (ratio / range) * 100;

      const offset = 15;
      const offsetRange = -30;
      // const offsetRatio = posPercent * -15;
      // const offsetPercent = (offsetRatio / -30) * 100;

      const offsetVal = ((offsetRange * posPercent) / 100) + offset;

      return `left: calc(${posPercent}% + ${offsetVal}px)`;
    },
  },
  mounted() {
    this.selection = this.value;
  },
};
</script>

<style scoped lang="stylus">
// @import '~assets/styles/_vars'
// @import '~assets/styles/_mixins'

h3
  color $darkblue
  font-size 1.7rem

.rangeSlider__wrapper
  position relative

input[type='range']
  // -webkit-appearance none
  width 100%
  display block
  // background-color $darkblue
  background-color darkblue
  height 4px
  border-radius 2px
  margin 0 auto
  outline 0

  &::-webkit-slider-thumb
    // -webkit-appearance none
    // background-color $turquoise
    background-color blue
    width 30px
    height 30px
    border-radius 50%
    cursor pointer
    transition(transform)

    &:active
      transform scale(1.2)

  &:hover, &:active, &:focus
    + .valueMarker
      opacity 1
      transform translateX(-50%) scale(1)

.valueMarker
  padding 5px
  position absolute
  bottom calc(100% + 25px)
  background #fff
  border 1px solid #ddd
  border-radius 3px
  transform translateX(-50%) scale(0.7)
  opacity 0
  white-space nowrap
  box-shadow()
  transition(transform, opacity)

.rangeLimits
  display flex
  justify-content space-between
  margin-top 15px
</style>
