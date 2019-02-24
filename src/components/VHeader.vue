<template>
  <header>
    <div class="content wrapper">
      <h1>Shopify<br>Compare</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  data() {
    return {
      title: 'Shopify Compare',
    };
  },
};
</script>

<style scoped lang="stylus">
header
  padding 10px 0 110px
  background linear-gradient(to bottom right, #CC4BF0, #2BB7FC)
  margin-bottom -100px

.content
  display flex
  justify-content flex-end

h1
  line-height .75
  display inline-block
  text-align right
  color: #fff
  font-size 4rem
</style>
