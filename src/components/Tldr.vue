<template>
  <section class="tldr">
    <div class="wrapper wrapper--mini content">
      <h2 class="hl">tl;dr</h2>
      <p>With {{ avgRevenue | money }} in {{ timeFrame }} sales, the best value for you right now is:</p>
      <div class="cta">
        <v-button
          :href="`${bestValue.name}` | camel | id"
          shape="square"
          v-smooth-scroll="{ duration: 500, offset: -35 }"
        >
          {{ bestValue.name }}
          <i class="far fa-chevron-down"></i>
        </v-button>
      </div>
    </div>
  </section>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'Tldr',
  components: {
    VButton,
  },
  computed: {
    bestValue() {
      return this.$store.getters.bestValue;
    },
    avgRevenue() {
      return this.$store.getters.avgRevenue;
    },
    timeFrame() {
      return this.$store.getters.timeFrame;
    },
  },
};
</script>

<style lang="stylus" scoped>
section
  background var(--white)

h3
  text-align center
  margin-top 0

.cta
  text-align center

.button
  i
    margin-left 20px
</style>
