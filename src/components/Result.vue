<template>
  <div>
    <b-table striped responsive hover :items="income_table" caption-top>
      
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    tax: Number,
    chosen_paramset: Object
  },
  data() {
    return {};
  },
  methods: {
    income_before_tax: function(i) {
      return (i.capacity * i.productivity).toFixed(2);
    },
    income_after_tax: function(i) {
      return (this.income_before_tax(i) * (1 - this.tax) + this.ind_share).toFixed(2);
    }
  },
  computed: {
    total_tax: function() {
      let vals = Object.values(this.chosen_paramset);
      let t = 0;
      vals.forEach(k => {
        t += k.capacity * k.productivity * k.number;
      });
      return t * this.tax;
    },
    num_players: function() {
      let vals = Object.values(this.chosen_paramset);
      let n = 0;
      vals.forEach(k => {
        n += k.number;
      });
      return n;
    },
    ind_share: function() {
      return this.total_tax / this.num_players;
    },
    income_table: function() {
      let cp = this.chosen_paramset;
      
      let data = [];
      Object.keys(cp).forEach(item => {
        let rec = cp[item];
        let i = {
          participant_type: item,
          items_to_do: rec.capacity,
          "points per item": rec.productivity,
          income_before_tax: this.income_before_tax(rec),
          income_after_tax: this.income_after_tax(rec)
        };

        data.push(i);
      });
      return data;
    }
  }
};
</script>
 