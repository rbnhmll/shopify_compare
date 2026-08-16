<template>
  <header>
    <div class="content wrapper">
      <h1 class="hl">Shop<br>Compare</h1>
      <p class="tagline">Compare Shopify and Etsy fees side by side and find the cheapest plan for your sales volume.</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
};
</script>

<style scoped lang="stylus">
header
  padding 10px 0 80px
  background linear-gradient(to bottom right, var(--purple), var(--turquoise))
  margin-bottom -100px

.content
  display flex
  flex-direction column
  align-items flex-end
  justify-content flex-end

h1
  font-size 5rem
  line-height .75
  display inline-block
  text-align right
  color: var(--white)

.tagline
  color var(--white)
  text-align right
  max-width 46ch
  margin-top 2rem
  line-height 1.4
</style>
