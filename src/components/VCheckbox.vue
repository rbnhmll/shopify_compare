<template>
  <div class="checkbox">
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <label :for="id"><slot /></label>
  </div>
</template>

<script>
export default {
  name: 'VCheckbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/mixins'

.checkbox
  display flex
  align-items center
  gap 8px

input
  appearance none
  -webkit-appearance none
  flex none
  width 18px
  height 18px
  margin 0
  border-radius 3px
  border 2px solid var(--grey)
  background var(--white)
  cursor pointer
  position relative
  transition()
  &:hover
    border-color var(--purple)
  &:focus-visible
    outline 2px solid var(--yellow)
    outline-offset 2px
  &:checked
    background var(--purple)
    border-color var(--purple)
    &:after
      content ""
      position absolute
      top 1px
      left 5px
      width 4px
      height 9px
      border 2px solid var(--white)
      border-top 0
      border-left 0
      transform rotate(45deg)

label
  cursor pointer
  user-select none
</style>
