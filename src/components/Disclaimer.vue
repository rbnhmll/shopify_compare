<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-btn
      slot="activator"
      color="primary"
      dark
    >
      !!
    </v-btn>

    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Disclaimer
      </v-card-title>

      <v-card-text>
        This tool is made for reference only, and does not guarantee the accurance of any of the information or pricing provided.

        Sign up links include affilate paramters.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          small
          @click="dialog = false"
        >
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>

</style>
