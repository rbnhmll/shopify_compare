<template>
  <button :class="type">
    <slot />
  </button>
</template>

<script>
export default {
  bame: 'VButton',
  props: {
    type: {
      type: String,
      default: 'square',
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

button
  border none
  display flex
  justify-content center
  align-items center
  line-height 1
  background var(--grey)
  transition(box-shadow)
  &:hover,
  &:active,
  &:focus
    shadow()

.round
  --size: 35px
  width var(--size)
  height var(--size)
  border-radius 50%

.square
  padding 10px 20px
  border-radius 5px

</style>
