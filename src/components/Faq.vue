<template>
  <section class="faq">
    <div class="wrapper wrapper--mini content">
      <h2 class="hl">Common questions</h2>
      <details
        v-for="item in faq"
        :key="item.q"
        class="faq__item"
      >
        <summary class="faq__question">
          <span>{{ item.q }}</span>
          <v-icon name="chevron-down" class="faq__chevron" />
        </summary>
        <p class="faq__answer">{{ item.a }}</p>
      </details>
    </div>
  </section>
</template>

<script>
import { mapState } from 'pinia';

import { useShopStore } from '../stores/shop';
import { buildFaq } from '../faq';

// Uses native <details>/<summary> rather than a JS accordion: keyboard and
// screen-reader behaviour comes free, and the panels still open in the prerendered
// HTML with JavaScript disabled. Collapsed answers stay in the DOM, so Google still
// indexes them.
export default {
  name: 'Faq',
  computed: {
    ...mapState(useShopStore, ['providerData', 'region']),
    faq() {
      return buildFaq(this.providerData, this.region);
    },
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/mixins'

.faq
  padding var(--padding) 0

h2
  margin-bottom 2rem

.faq__item
  background var(--white)
  border-radius var(--radius)
  margin-bottom 10px
  overflow hidden
  transition()
  shadow()

.faq__question
  display flex
  align-items center
  justify-content space-between
  gap 1.5rem
  padding var(--padding)
  cursor pointer
  font-weight 700
  // Hide the default disclosure triangle in favour of the chevron.
  list-style none
  &::-webkit-details-marker
    display none
  &:focus-visible
    outline 2px solid var(--yellow)
    outline-offset -2px

.faq__chevron
  flex none
  color var(--purple)
  transition(transform)

.faq__item[open] .faq__chevron
  transform rotate(180deg)

.faq__answer
  margin 0
  padding 0 var(--padding) var(--padding)
  line-height 1.5
</style>
