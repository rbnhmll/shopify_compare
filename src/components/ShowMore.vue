<template>
  <div class="show_more">
    <v-button class="more_button" shape="small" @click.native="show = !show">
      <template v-if="!show">
        <i class="far fa-plus"></i>
        See details
      </template>
      <template v-else>
        <i class="far fa-minus"></i>
        Hide details
      </template>
    </v-button>
    <transition name="drawer">
      <slot v-if="show"></slot>
    </transition>
  </div>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'ShowMore',
  components: {
    VButton,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

.show_more
  padding-top 5px

.drawer-enter-active,
.drawer-leave-active
  transition(opacity)

.drawer-enter,
.drawer-leave-to
  opacity 0


.more_button
  margin-left 20px
  display grid
  grid-template-columns auto auto
  grid-gap .5em
</style>
