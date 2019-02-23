<template>
  <div class="skrim">
    <div class="modal">
      <header>
        Disclaimer
      </header>
      <div class="content">
        <p>This tool is made for reference only, and does not guarantee the accurance of any of the information or pricing provided.</p>
        <p>Sign up links include affilate paramters.</p>

        <v-button
          @click.native="close"
          type="square"
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
    document.addEventListener('keyup', (e) => {
      e.keyCode === 27 ? this.close() : false;
    });
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
  z-index 20
.modal
  max-width 600px
  width 90%
  background #fff
  shadow()

header,
.content
  padding: 25px

header
  background var(--grey)

</style>
