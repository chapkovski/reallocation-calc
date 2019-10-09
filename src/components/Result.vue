<template>
  <div>
    <b-table striped hover :items="income_table"   >
      
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
    income: function(i) {
      return i.capacity * i.productivity * (1 - this.tax);
    }
  },
  computed: {
    total_tax: function() {
      let vals = Object.values(this.chosen_paramset);
      let t = 0;
      vals.forEach((k, v) => {
        t += k.capacity * k.productivity * k.number;
      });
      return t * this.tax;
    },
    num_players: function() {
      let vals = Object.values(this.chosen_paramset);
      let n = 0;
      vals.forEach((k, v) => {
        n += k.number;
      });
      return n;
    },
    ind_share: function() {
      return this.total_tax / this.num_players;
    },
    income_table: function() {
      let cp = this.chosen_paramset;
      let indshare = this.ind_share;
      let data = [];
      Object.keys(cp).forEach(item => {
        let i = { player_type: item, income: (this.income(cp[item]) + indshare).toFixed(2) };
        data.push(i);
      });
      return data;
    }
  }
};
</script>
 