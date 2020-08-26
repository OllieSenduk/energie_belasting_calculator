<template>
  <v-container class="calculator">
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Belastingteruggave Rekenmachine</h1>
      </v-col>
    </v-row>
    <div class="calculator__list">
      <div v-for="{year, kwh} in getEnergyTaxList" :key="year">
        <v-col cols="12">
          <comForm :year="year" :kwh="kwh"></comForm>
        </v-col>
      </div>
    </div>

    <comForm year="2018"></comForm>
  </v-container>
</template>

<script>
import Form from "@/components/Form.vue";
import energyTaxlist from "@/constants/energyTaxlist";

export default {
  components: {
    comForm: Form,
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  name: "Calculator",
  computed: {
    getEnergyTaxList() {
      return energyTaxlist;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
