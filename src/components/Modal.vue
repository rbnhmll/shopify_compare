<template>
  <div class="skrim">
    <div class="modal" aria-modal="true">
      <header>
        ⚠️ Disclaimer
      </header>
      <div class="content">
        <ul class="disclaimers">
          <li><p>This tool is indented for reference only, and does not guarantee the accuracy of any of the pricing information provided.</p></li>
          <li><p>Currency conversions are estimates based on an external resource. Do your homework, and double check conversion rates.</p></li>
          <li><p>Shopify sign-up links contain affiliate parameters to help support and maintain this site.</p></li>
          <li><p>This site is not associated in any way with Shopify, and as such pricing could change without warning.</p></li>
          <li><p>This tool is in beta. If you notice any issues or have comments, please <a href="mailto:hi@robinhamill.com?subject=Issue on Shopify Compare">email me</a> 😺.</p></li>
        </ul>

        <v-button
          @click.native="close"
          shape="square"
          type="button"
          ref="agree"
        >
          I accept
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'Modal',
  components: {
    VButton,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
  mounted() {
    // this.$refs.agree.focus();
    document.addEventListener('keyup', e => (e.keyCode === 27 ? this.close() : false));
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

.skrim
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background rgba(0,0,0,0.5)
  display flex
  justify-content center
  align-items center
  z-index 30

.modal
  max-width 500px
  width 90%
  background #fff
  border-radius var(--radius)
  overflow hidden
  shadow()

header,
.content
  padding: var(--padding)

header
  background var(--lightgrey)

.disclaimers
  font-size 1.2rem
  padding-left 1.2rem
  margin-bottom 3rem

</style>
