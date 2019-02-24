<template>
  <div class="switches">
    <region-switcher />
    <timeframe-switcher />
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
  grid-gap 50px
  @media screen and (min-width 768px)
    grid-template-columns 1fr

.select-wrapper
  position relative
  &:after
    position absolute
    right 5px
    top 50%
    transform translateY(-50%)
    content: "\f078";
    font-family: FontAwesome;
    color var(--purple)
    pointer-events: none

select
  -webkit-appearance none
  -moz-appearance none
  color var(--purple)
  appearance none
  width 100%
  padding-right 25px
  border none
  border-bottom 3px solid transparent
  &:hover,
  &:active,
  &:focus
    border-bottom-color var(--yellow)
</style>
