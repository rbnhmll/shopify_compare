<template>
  <div class="disclaimer">
    <v-button
      @click.native="showModal = !showModal"
      type="round"
    >
      !!
    </v-button>
    <modal v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<script>
import Modal from './Modal.vue';
import VButton from './VButton.vue';

export default {
  components: {
    Modal,
    VButton,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins'

button
  --position: 10px

  position fixed
  bottom var(--position)
  right var(--position)


</style>
