<template>
  <div class="skrim">
    <div class="modal" aria-modal="true">
      <header>
        ⚠️ Disclaimer
      </header>
      <div class="content">
        <ul class="disclaimers">
          <li>This tool is not associated in any way with Shopify, and as such, pricing could change without warning. This tool is intended for reference only, and does not guarantee the accuracy of any pricing information provided.</li>
          <li>Currency conversions are based on an external resource. Double check conversion rates. Today's rates are:
            <ul>
              <li>CAD => USD: {{ exchangeRates.CAD }}</li>
            </ul>
          </li>
          <li>This site contains affiliate links to help support and maintain this tool.</li>
          <li>
            Need a pre-made theme? Check out some amazing themes at
            <a href="https://outofthesandbox.com?rfsn=587318.8a8207" target="_blank">
              Out of the Sandbox
              <i class="far fa-external-link-alt"></i>
            </a>
          </li>
          <li>
            Need a Shopify developer?
            <a href="https://www.robinhamill.com" target="_blank">
              Let's work together!
              <i class="far fa-external-link-alt"></i>
            </a>
          </li>
          <li>This tool is in beta. If you notice any issues or have comments, please <a href="mailto:hi@robinhamill.com?subject=Issue on Shopify Compare">email me</a> 😺.</li>
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
  computed: {
    exchangeRates() {
      return this.$store.state.exchangeRates;
    },
  },
  mounted() {
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
  font-size 1.4rem
  padding-left 1.2rem
  margin-bottom 3rem
  i
    font-size .8em

</style>
