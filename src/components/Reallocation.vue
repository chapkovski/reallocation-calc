<template>
  <div>
      <b-form-group label="Choose an option:">
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
        let b = this.allocations.map((i, index) => {
          return { text: `Option ${index+1}`, value: i };
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

