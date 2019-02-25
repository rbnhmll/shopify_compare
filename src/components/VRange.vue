<template>
  <div class="rangeSlider">
    <label :for="id"><span class="hl">{{ name }}</span></label>
    <div class="input-wrapper">
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
        class="valueMarker">{{ selection }}</span>
    </div>
    <div class="input-wrapper">
      <span class="price" v-if="price">$</span>
      <input
        :min="min"
        type="number"
        v-model.number="selection"
        v-on="listeners"
      >
    </div>
  </div>
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
    price: {
      type: Boolean,
      default: false,
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
    valPosition() {
      const range = this.max - this.min;
      const ratio = this.selection - this.min;
      const posPercent = (ratio / range) * 100;

      const offset = 10;
      const offsetRange = -20;
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
@import '../assets/styles/mixins'

.input-wrapper
  position relative

.rangeSlider
  display grid
  grid-template-columns 1fr 75px
  align-items center
  grid-gap 0 20px
  label
    text-align center
    grid-column 1 / -1

input[type='range']
  -webkit-appearance none
  background var(--turquoise)
  width 100%
  display block
  height 4px
  border-radius 2px
  margin 0 auto
  outline 0

  &::-webkit-slider-thumb
    -webkit-appearance none
    background-color var(--purple)
    width 20px
    height 20px
    cursor pointer
    border-radius 50%
    border none
    transition(transform)
    &:active,
    &:focus
      transform scale(1.2)

  &::-moz-range-thumb
    background-color var(--purple)
    width 20px
    height 20px
    border-radius 50%
    cursor pointer
    border none
    transition(transform)
    &:active,
    &:focus
      transform scale(1.2)

  &:hover,
  &:active,
  &:focus
    outline none
    + .valueMarker
      opacity 1
      transform translateX(-50%) scale(1)

input[type='number']
  -webkit-appearance none
  -moz-appearance textfield
  background var(--lightgrey)
  appearance none
  margin: 0
  width 100%
  padding 2px 5px
  padding-left 20px
  border none
  border-bottom 3px solid var(--white)
  transition()
  &:hover,
  &:active,
  &:focus
    outline none
    border-bottom-color var(--yellow)

.price
  line-height 1
  display block
  color var(--grey)
  position absolute
  transform translateY(-60%)
  top 50%
  left 5px

.valueMarker
  color var(--white)
  padding 5px
  position absolute
  bottom calc(100% + 15px)
  background var(--purple)
  border-radius 3px
  transform translateX(-50%) scale(0.7)
  opacity 0
  white-space nowrap
  min-width 35px
  text-align center
  box-shadow()
  transition(transform, opacity)
  &:after
    content ""
    position absolute
    top 100%
    left 50%
    transform translateX(-50%)
    border 5px solid var(--purple)
    border-bottom-color transparent
    border-left-color transparent
    border-right-color transparent

.rangeLimits
  display flex
  justify-content space-between
  margin-top 15px
</style>
