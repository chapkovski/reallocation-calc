<template>
    <div id="app">
        <b-container class="m-3">
            <div class="row">
                <div class="col">
                    <b-card
                        header="Choose possible options:"
                        header-text-variant="white"
                        header-tag="header"
                        header-bg-variant="primary"
                        border-variant="primary"
                    >
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 text-center">
                                    <reallocation
                                        :allocations="realloc_choices"
                                        v-model="chosen_reallocation"
                                    ></reallocation>
                                    <tax-rates
                                        :rates="tax_rates"
                                        v-model="chosen_tax_rate"
                                        v-if="chosen_reallocation!=undefined"
                                    ></tax-rates>
                                </div>
                                <b-col class="col-md-8" align-self="center">
                                    <div
                                        class="alert alert-primary"
                                        v-if="chosen_reallocation===undefined"
                                    >Please choose one of the options</div>

                                    <transition name="fade">
                                        <b-alert
                                            variant="danger"
                                            :show="chosen_reallocation!=undefined && chosen_tax_rate===undefined "
                                        >Now choose for which tax rate you want to see the results</b-alert>
                                    </transition>
                                    <transition name="fade">
                                        <result
                                            :tax="chosen_tax_rate"
                                            :chosen_paramset="chosen_paramset"
                                            v-if="chosen_paramset && chosen_tax_rate!==undefined"
                                        ></result>
                                    </transition>
                                </b-col>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
        </b-container>
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
            show: true,
            realloc_choices: [0, 1],
            tax_rates: [0, 0.3, 0.4348],
            chosen_tax_rate: undefined,
            chosen_reallocation: undefined,
            params: {
                0: {
                    A: {
                        capacity: 4,
                        productivity: 1,
                        number: 2
                    },
                    B: {
                        capacity: 4,
                        productivity: 1,
                        number: 2
                    }
                },
                1: {
                    A: {
                        capacity: 0,
                        productivity: 0,
                        number: 2
                    },
                    B: {
                        capacity: 4,
                        productivity: 4.6,
                        number: 2
                    }
                }
            }
        };
    },
    computed: {
        chosen_paramset: function() {
            return this.params[this.chosen_reallocation];
        }
    },
    
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
.fade-enter-active,
.fade-leave-to {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
