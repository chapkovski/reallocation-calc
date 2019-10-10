<template>
  <div class="m-1 col">
      <b-table striped hover :items="items" :fields="fields" caption-top small responsive>
         <template v-slot:table-caption>Reform: <b>{{format_allocation}}</b></template>
      </b-table>
    
  </div>
</template>

<script>
export default {
  name: "IndParamsCard",
  props: {
    indparams: Array
  },
  data() {
    let allocation = this.indparams[0];
    let params_dict = this.indparams[1];
    let items = Object.keys(params_dict).map(function(key) {
      let obj = params_dict[key];
      obj.player_type = key;
      return obj;
    });
    return {
      fields: ['player_type', 'capacity', 'productivity','number'],
      format_allocation: allocation==='0'?'No':'Yes',
      items: items
    };
  }
};
</script>
 