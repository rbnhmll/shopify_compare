<template>
  <section class="providers wrapper">
    <provider
      v-for="rate in providerData"
      :key="rate.name"
      :rates="rate[region]"
      @total="collectValues($event)"
    />
  </section>
</template>

<script>
import Provider from './Provider.vue';

export default {
  name: 'ProviderLoop',
  components: {
    Provider,
  },
  methods: {
    collectValues(val) {
      this.$store.dispatch('setTotals', val);
    },
  },
  computed: {
    providerData() {
      return this.$store.state.providerData;
    },
    timeframe() {
      return this.$store.getters.timeFrame;
    },
    region() {
      return this.$store.state.region;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

.providers
  // display grid
  // grid-template-columns 1fr
  // grid-gap 20px
  display flex
  flex-wrap wrap
  // @media screen and (min-width 768px)
  //   grid-template-columns repeat(2, 1fr)
  // @media screen and (min-width 1224px)
  //   grid-template-columns repeat(4, 1fr)


</style>
