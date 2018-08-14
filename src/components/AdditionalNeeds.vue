<template>
  <section class="additionalNeeds">

    <h3>Additonal Needs</h3>

    <p>Staff accounts: 1-15</p>
    <vs-input-number
      class="vs-input-number"
      vs-min="1"
      vs-max="15"
      v-model.number="staffAccounts"
      vs-color="primary"
      @change="updateOptions"
    />
    <p>Gift cards: true/false</p>
    <vs-checkbox
      v-model="giftCards"
      @change="updateOptions"
    >
      Gift Cards
    </vs-checkbox>

    <vs-checkbox
      v-model="proReports"
      @change="updateOptions"
    >
      Professional reports
    </vs-checkbox>

    <vs-checkbox
      v-model="advReports"
      @change="updateOptions"
    >
      Advanced report builder
    </vs-checkbox>

    <vs-checkbox
      v-model="shippingRates"
      @change="updateOptions"
    >
      3rd party calculated shipping rates
    </vs-checkbox>
  </section>
</template>

<script>
export default {
  name: 'AdditonalNeeds',
  data() {
    return {
      staffAccounts: 2,
      giftCards: false,
      proReports: false,
      advReports: false,
      shippingRates: false,
    };
  },
  metyhods: {
    updateOptions() {
      console.log('update');
    },
  },
};
</script>

<style scoped lang="stylus">
.vs-input-number
  display inline-block
</style>
