<template>
  <div class="cta content">
    <h3 class="cta__message">Get started with <strong class="hl">{{ rates.name }}</strong></h3>
    <v-button :href="rates.affiliate" target="_blank">Sign up for free!</v-button>
  </div>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'CTA',
  components: {
    VButton,
  },
  props: {
    rates: {
      type: Object,
    },
  },
};
</script>

<style lang="stylus" scoped>
.cta
  background var(--lightgrey)
  text-align center
  // flex-direction column
  display block
</style>
