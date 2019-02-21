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
    <!-- <advanced-options /> -->
  </v-form>
</template>

<script>
import AdvancedOptions from './AdvancedOptions.vue';

export default {
  name: 'InputForm',
  components: {
    AdvancedOptions,
  },
  methods: {
    updateField(field, value) {
      this.$store.dispatch('setUserInfo', { field, value });
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
