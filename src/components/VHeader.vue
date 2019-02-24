<template>
  <header>
    <div class="content wrapper">
      <h1 class="hl">Shopify<br>Compare</h1>
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
  padding 10px 0 80px
  background linear-gradient(to bottom right, var(--purple), var(--turquoise))
  margin-bottom -100px

.content
  display flex
  justify-content flex-end

h1
  font-size 5rem
  line-height .75
  display inline-block
  text-align right
  color: var(--white)
</style>
