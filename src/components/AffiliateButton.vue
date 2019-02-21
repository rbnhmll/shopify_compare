<template>
  <a
    :href="link"
    :style="{ backgroundColor: colour }"
    target="_blank"
  >
    Sign up for free now!
  </a>
</template>

<script>
export default {
  name: 'AffiliateButton',
  props: ['link', 'name', 'colour'],
};
</script>

<style scoped lang="stylus">
a
  text-decoration none
  color #fff
  padding 10px 15px
  display block
  border-radius 4px
  font-weight bold
  text-align center
</style>
