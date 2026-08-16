<template>
  <svg
    v-if="icon"
    class="icon"
    :viewBox="`0 0 ${icon.w} ${icon.h}`"
    role="img"
    aria-hidden="true"
    focusable="false"
  ><path :d="icon.d" /></svg>
</template>

<script>
import { icons } from '../icons';

export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator: name => name in icons,
    },
  },
  computed: {
    icon() {
      return icons[this.name] || null;
    },
  },
};
</script>

<style scoped lang="stylus">
.icon
  // Match how the icon font behaved: 1em tall, inheriting colour, sitting on the
  // text baseline. Width is left auto so it derives from the viewBox aspect ratio —
  // and so parent rules (e.g. the 20px icon column in .rates) can still override it.
  height 1em
  width auto
  fill currentColor
  vertical-align -0.125em
  display inline-block
</style>
