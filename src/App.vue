<template>
  <div id="app">
    <b-container class="m-3">
      <params-card :params="params"></params-card>
      <b-card
        header="What will user see:"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="primary"
        border-variant="primary"
      >
        <reallocation :allocations="realloc_choices" v-model="chosen_reallocation"></reallocation>
        <tax-rates :rates="tax_rates" v-model="chosen_tax_rate"></tax-rates>
        <result :tax="chosen_tax_rate" :chosen_paramset="chosen_paramset" v-if="chosen_paramset && chosen_tax_rate!=undefined"></result>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Reallocation from "./components/Reallocation";
import TaxRate from "./components/TaxRate";
import Result from "./components/Result";
import ParamsCard from "./components/ParamsCard";

export default {
  name: "app",
  components: {
    reallocation: Reallocation,
    "tax-rates": TaxRate,
    result: Result,
    "params-card": ParamsCard
  },
  data() {
    return {
      realloc_choices: [0, 1],
      tax_rates: [0,.3,.4348],
      chosen_tax_rate: undefined,
      chosen_reallocation: undefined,
      params: {
        0: {
          H: {
            capacity: 1,
            productivity: 1,
            number:2
          },
          L: {
            capacity: 1,
            productivity: 1,
            number:2
          }
        },
        1: {
          H: {
            capacity: 1,
            productivity: 4.6,
            number:2
          },
          L: {
            capacity: 0,
            productivity: 0,
            number:2
          }
        }
      }
    };
  },
  computed: {
    chosen_paramset: function() {
      return this.params[this.chosen_reallocation]
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
