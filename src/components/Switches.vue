<template>
  <div class="switches">
    <timeframe-switcher />
    <region-switcher />
  </div>
</template>

<script>
import RegionSwitcher from './RegionSwitcher.vue';
import TimeframeSwitcher from './TimeframeSwitcher.vue';

export default {
  name: 'Switches',
  components: {
    RegionSwitcher,
    TimeframeSwitcher,
  },
};
</script>

<style lang="stylus">
.switches
  display grid
  grid-template-columns 1fr 1fr
  grid-gap 0 50px
  @media screen and (min-width 768px)
    grid-template-columns 1fr

.select-wrapper
  position relative
  &:after
    position absolute
    right 5px
    top 50%
    transform translateY(-52%)
    content: "\f078";
    font-family: FontAwesome;
    color var(--purple)
    pointer-events: none

select
  -webkit-appearance none
  -moz-appearance none
  color var(--purple)
  background var(--lightgrey)
  appearance none
  width 100%
  padding 2px 5px
  padding-right 25px
  border-radius 0
  border none
  border-bottom 3px solid var(--white)
  transition()
  &:hover,
  &:active,
  &:focus
    outline none
    border-bottom-color var(--yellow)
</style>
