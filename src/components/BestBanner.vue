<template>
  <header>
    <strong>Best Value!</strong>
  </header>
</template>

<script>
// :style="{ backgroundColor: colour }" for setting a dynamic colour based on the brand.

export default {
  name: 'BestBanner',
  props: ['colour'],
};
</script>

<style scoped lang="stylus">
header
  color #fff
  padding 2rem 1rem
  text-align center
  background var(--turquoise)
</style>
