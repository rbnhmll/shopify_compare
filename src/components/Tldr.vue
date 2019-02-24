<template>
  <section class="tldr">
    <div class="wrapper">
      <div class="content">
        <h2 class="">tl;dr</h2>
        <h3>Best value for you right now:</h3>
        <div class="cta">
          <v-button
            :href="`${bestValue}` | camel | id"
            shape="square"
            v-smooth-scroll="{ duration: 500, offset: -35 }"
          >
            {{ bestValue }}
            <i class="fas fa-chevron-down"></i>
          </v-button>
        </div>
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
  },
};
</script>

<style lang="stylus" scoped>
section
  background var(--white)

.content
  padding var(--padding)
  padding-top 0

.cta
  text-align center

.button
  i
    margin-left 20px
</style>
