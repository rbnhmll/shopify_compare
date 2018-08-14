<template>
  <a
    :href="link"
    :style="{ backgroundColor: colour }"
  >
    Get started with {{ name }}
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
  padding 5px 15px
  display inline-block
  border-radius 4px
  font-weight bold
</style>
