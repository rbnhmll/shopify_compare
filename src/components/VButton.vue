<template>
  <a :href="href" class="button" :class="shape" v-if="elementType === 'anchor'">
    <slot />
  </a>

  <button v-else class="button" :class="shape">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    shape: {
      type: String,
      default: 'square',
    },
    href: {
      type: String,
      required: false,
    },
  },
  computed: {
    elementType() {
      return this.href ? 'anchor' : 'button';
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

button,
a
  // color inherit
  color var(--white)
  text-decoration none
  border none
  display inline-flex
  justify-content center
  align-items center
  line-height 1
  background var(--turquoise)
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
  padding 15px 20px
  border-radius var(--radius)

</style>
