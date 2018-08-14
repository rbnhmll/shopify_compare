<template>
  <footer>
    <p>&copy; Robin Hamill {{ currentYear }} | All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'VFooter',
  computed: {
    currentYear() {
      return (new Date()).getFullYear();
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
