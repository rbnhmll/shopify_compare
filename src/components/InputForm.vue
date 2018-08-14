<template>
  <v-form>
    <v-layout>
      <v-flex>
        <v-slider
          :value="userInfo.transactionCount"
          min="1"
          max="1000"
          thumb-label
          @change="updateField('transactionCount', $event)"
          label="Number of Transactions"
        ></v-slider>
      </v-flex>
      <v-flex xs2>
        <v-text-field
          :value="userInfo.transactionCount"
          type="number"
          min="1"
          max="10000"
          @input="updateField('transactionCount', $event)"
          solo
        />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-slider
          :value="userInfo.avgTransactionPrice"
          min="1"
          max="1000"
          thumb-label
          @change="updateField('avgTransactionPrice', $event)"
          label="Avg. Transaction Price"
        ></v-slider>
      </v-flex>
      <v-flex xs2>
        <v-text-field
          :value="userInfo.avgTransactionPrice"
          type="number"
          min="1"
          max="1000"
          @input="updateField('avgTransactionPrice', $event)"
          prefix="$"
          solo
        />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-slider
          v-model="userInfo.avgShippingCost"
          min="0"
          max="500"
          thumb-label
          @change="updateField('avgShippingCost', $event)"
          label="Avg. Shipping Cost"
        ></v-slider>
      </v-flex>
      <v-flex xs2>
        <v-text-field
          :value="userInfo.avgShippingCost"
          type="number"
          min="0"
          max="500"
          @input="updateField('avgShippingCost', $event)"
          prefix="$"
          solo
        />
      </v-flex>
    </v-layout>

    <h2>Advanced Options</h2>
    <v-layout>
      <v-slider
        v-model="maxStaffAccounts"
        min="2"
        max="15"
        thumb-label
        label="Staff Accounts"
        inverse-label
      ></v-slider>
      <v-text-field
        v-model="maxStaffAccounts"
        type="number"
        min="2"
        max="15"
        solo
      />
      <v-checkbox
        label="Gift Cards"
        color="primary"
        v-model="giftCards"
      ></v-checkbox>
      <v-checkbox
        label="Professional Reports"
        color="primary"
        v-model="proReports"
      ></v-checkbox>
      <v-checkbox
        label="Advanced report builder"
        color="primary"
        v-model="advReports"
      ></v-checkbox>
      <v-checkbox
        label="Third-party calculated shipping rates"
        color="primary"
        v-model="shippingRates"
      ></v-checkbox>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  name: 'InputForm',
  methods: {
    updateField(field, value) {
      this.$store.dispatch('setUserInfo', { field, value });
    },
  },
  computed: {
    maxStaffAccounts: {
      get() {
        return this.$store.state.reqs.maxStaffAccounts;
      },
      set(value) {
        this.$store.dispatch('setMaxStaffAccounts', value);
      },
    },
    giftCards: {
      get() {
        return this.$store.state.reqs.giftCards;
      },
      set(value) {
        this.$store.dispatch('setGiftCard', value);
      },
    },
    proReports: {
      get() {
        return this.$store.state.reqs.proReports;
      },
      set(value) {
        this.$store.dispatch('setProReports', value);
      },
    },
    advReports: {
      get() {
        return this.$store.state.reqs.advReports;
      },
      set(value) {
        this.$store.dispatch('setAdvReports', value);
      },
    },
    shippingRates: {
      get() {
        return this.$store.state.reqs.shippingRates;
      },
      set(value) {
        this.$store.dispatch('setShippingRates', value);
      },
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
