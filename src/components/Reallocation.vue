<template>
  <div>
      <b-form-group label="Choose the reallocation:">
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
  name: 'Reallocation',
  props: {
    allocations: Array
  },
  data() {
      return {
        selected: undefined,

      }
    },
    computed: {
      options: function() {
        let b = this.allocations.map(i => {
          let p = parseFloat(i * 100).toFixed(0) + "%";
          return { text: `Allocation ${p}`, value: i };
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

