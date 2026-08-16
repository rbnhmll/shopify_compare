<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <template #header>
        <div>
          <h3>Advanced Options</h3>
        </div>
      </template>
      <v-container>
        <p>These requirements will overide "Best Value" in suggesting a tier.</p>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm6 md4>
            <v-card>
              <v-slider
                v-model="maxStaffAccounts"
                min="1"
                max="15"
                thumb-label
                label="Staff Accounts"
                inverse-label
              ></v-slider>
              <v-text-field
                v-model="maxStaffAccounts"
                type="number"
                min="1"
                max="15"
                solo
              />
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md7>
            <v-card>
              <v-layout row wrap>
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
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { useShopStore } from '../stores/shop';

export default {
  name: 'AdvancedOptions',
  computed: {
    store() {
      return useShopStore();
    },
    maxStaffAccounts: {
      get() {
        return this.store.reqs.maxStaffAccounts;
      },
      set(value) {
        this.store.setMaxStaffAccounts(value);
      },
    },
    giftCards: {
      get() {
        return this.store.reqs.giftCards;
      },
      set(value) {
        this.store.setGiftCard(value);
      },
    },
    proReports: {
      get() {
        return this.store.reqs.proReports;
      },
      set(value) {
        this.store.setProReports(value);
      },
    },
    advReports: {
      get() {
        return this.store.reqs.advReports;
      },
      set(value) {
        this.store.setAdvReports(value);
      },
    },
    shippingRates: {
      get() {
        return this.store.reqs.shippingRates;
      },
      set(value) {
        this.store.setShippingRates(value);
      },
    },
  },
};
</script>

<style scoped lang="styl">

</style>
