<template>
  <header :style="{ backgroundColor: colour }">
    <strong>Best Value!</strong>
  </header>
</template>

<script>
export default {
  name: 'BestBanner',
  props: ['colour'],
};
</script>

<style scoped lang="stylus">
header
  color #fff
  padding 16px
  text-align center
</style>
