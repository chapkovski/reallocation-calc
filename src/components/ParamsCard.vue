<template>
  <div>
    <b-card
      sub-title="Not to be shown to user"
      class="mb-2"
      header="Parameters:"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="dark"
      border-variant="dark"
    >
      <b-card-text>
        <div class="container fluid">
          <div class="row">
            <ind-params v-for="(param,i) in params_list" :indparams="param" :key="i"></ind-params>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import IndParams from "./IndParamsCard";
export default {
  name: "ParamsCard",
  props: {
    params: Object
  },
  data() {
    let params_list = Object.entries(this.params);
    return { params_list: params_list };
  },

  components: { "ind-params": IndParams }
};
</script>
 