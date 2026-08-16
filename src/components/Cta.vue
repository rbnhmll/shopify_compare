<template>
  <div class="cta content">
    <h3 class="cta__message">Get started with <strong class="hl">{{ rates.name }}</strong></h3>
    <v-button :href="rates.affiliate" :target="linkTarget">{{ rates.ctaLabel || 'Sign up for free!' }}</v-button>
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
  computed: {
    // A mailto: opens the mail client, so _blank would leave a stray empty tab.
    linkTarget() {
      const href = this.rates.affiliate || '';
      return href.startsWith('mailto:') ? null : '_blank';
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
