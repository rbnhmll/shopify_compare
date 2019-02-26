<template>
  <span class="iconTooltip">
    <i class="trigger" :class="icon" tabindex="0"></i>
    <span class="tooltip">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'IconTooltip',
  props: {
    icon: {
      type: String,
      default: 'far fa-info-circle',
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

.iconTooltip
  position relative
  bottom 10px
  font-size 10px

.tooltip
  z-index 30
  border-radius 0.3em
  position absolute
  bottom calc(100% + 5px)
  left 50%
  transform translateX(-50%)
  background var(--lightgrey)
  padding 0.4em 0.8em
  display inline-block
  white-space nowrap
  opacity 0
  transition(opacity)
  &:after
    position absolute
    top 100%
    left 50%
    transform translateX(-50%)
    content ""
    border 5px solid var(--lightgrey)
    border-bottom-color transparent
    border-left-color transparent
    border-right-color transparent

.trigger
  color var(--purple)
  &:hover,
  &:focus,
  &:active
    & + .tooltip
      opacity 1
</style>
