<template>
  <div class="skrim">
    <div class="modal">
      <header>
        Disclaimer
      </header>
      <div class="content">
        <ul class="disclaimers">
          <li><p>This tool is made for reference only, and does not guarantee the accurance of any of the information or pricing provided.</p></li>
          <li><p>Shopify pricing is shown in USD because that is the currency they bill in.</p></li>
          <li><p>Other currency conversions are estimates based off of an external resource. Do your homework, and double check conversions.</p></li>
          <li><p>Sign up links include affilate paramters.</p></li>
        </ul>

        <v-button
          @click.native="close"
          shape="square"
          type="button"
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
  max-width 600px
  width 90%
  background #fff
  border-radius var(--radius)
  overflow hidden
  shadow()

header,
.content
  padding: var(--padding)

header
  background var(--grey)

.disclaimers
  font-size 1.2rem
  padding-left 1.2rem
  margin-bottom 3rem

</style>
