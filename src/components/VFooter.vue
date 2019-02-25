<template>
  <footer>
    <p>&copy; <a :href="url">Robin Hamill</a> {{ currentYear }} | All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'VFooter',
  data() {
    return {
      url: 'https://www.robinhamill.com',
    };
  },
  computed: {
    currentYear() {
      return (new Date()).getFullYear();
    },
  },
};
</script>

<style scoped lang="stylus">
footer
  justify-content center
  font-size 1rem
  background var(--black)
  display flex
  color var(--white)
</style>
