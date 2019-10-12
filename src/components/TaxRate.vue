<template>
  <div>
      <b-form-group label="Choose for which tax rate  you want to see the results:" >
        <template v-slot:label>Choose for which tax rate <br>  you want to see the results:</template>
      <b-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        buttons
        stacked
        button-variant="outline-primary"
        name="radio-btn-stacked"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'TaxRate',
  props: {
    rates: Array
  },
  data() {
      return {
        selected: undefined,
      }
    },
    computed: {
      options: function() {
        let b = this.rates.map(i => {
          let p = parseFloat(i * 100).toFixed(0) + "%";
          return { text: `Tax rate ${p}`, value: i };
        });
        return b;
      }
    },
    watch: {
    selected(val) {
      this.$emit('input', val);
    }
  }
}
</script>

 
