<template>
  <div class="skrim">
    <div class="modal" aria-modal="true">
      <header>
        ⚠️ Disclaimer
      </header>
      <div class="content">
        <ul class="disclaimers">
          <li>This tool is not associated in any way with Shopify, and as such, pricing could change without warning. This tool is intended for reference only, and does not guarantee the accuracy of any pricing information provided.</li>
          <li>Prices are shown in each region's own currency as Shopify and Etsy bill them, so no currency conversion is applied. Switch region to see the other set of prices.</li>
          <li>This site contains affiliate links to help support and maintain this tool. Shopify Plus is the exception: those enquiries come straight to us by email and we submit them as partner referrals, not through an affiliate link.</li>
          <li>Shopify Plus covers one main store plus nine expansion stores under a single contract. Past ten stores, pricing is negotiated directly with Shopify, so the store count here stops at ten.</li>
          <li>The totals here cover ongoing fees only. Etsy may charge a one-time, non-refundable set-up fee when you open a shop, and Shopify's advertised free trial is short and followed by a discounted introductory period — check both before you commit.</li>
          <li>
            Need a Shopify developer?
            <a href="https://www.upatfive.ca" target="_blank">
              Let's work together!
              <v-icon name="external-link-alt" />
            </a>
          </li>
          <li>This tool is in beta. If you notice any issues or have comments, please <a href="mailto:hello@upatfive.ca?subject=Issue on Shop Compare">email me</a> 😺.</li>
        </ul>

        <v-button
          @click="close"
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
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    },
    onKeyup(e) {
      return e.key === 'Escape' ? this.close() : false;
    },
  },
  mounted() {
    document.addEventListener('keyup', this.onKeyup);
  },
  unmounted() {
    document.removeEventListener('keyup', this.onKeyup);
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
  .icon
    font-size .8em

</style>
