<template>
  <v-toolbar
    app
  >
    <v-toolbar-title v-text="title"></v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'VHeader',
  data() {
    return {
      title: 'Shopify Compare',
    };
  },
};
</script>

<style scoped lang="stylus">
</style>
