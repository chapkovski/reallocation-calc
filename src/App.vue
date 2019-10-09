<template>
  <div id="app">
    <reallocation :allocations="realloc_choices" v-model="chosen_reallocation"></reallocation>
    <tax-rates :rates="tax_rates" v-model="chosen_tax_rate"></tax-rates>
    <result></result>
    <h4>Tax rate: {{chosen_tax_rate}}</h4>
    <h4>Reallocation: {{chosen_reallocation}}</h4>
  </div>
</template>

<script>
import Reallocation from "./components/Reallocation";
import TaxRate from "./components/TaxRate";
import Result from "./components/Result";

export default {
  name: "app",
  components: {
    reallocation: Reallocation,
    "tax-rates": TaxRate,
    result: Result
  },
  data() {
    return {
      realloc_choices: [1, 2, 3],
      tax_rates: [3, 4, 5],
      chosen_tax_rate: 'jopa',
      chosen_reallocation: undefined
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
