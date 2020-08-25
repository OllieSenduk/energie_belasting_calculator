<template>
  <div class="calculator">
    <ul class="calculator__list">
      <li v-for="{year, kwh} in getEnergyTaxList" :key="year">
        <comForm :year="year" :kwh="kwh"></comForm>
      </li>
    </ul>

    <comForm year="2018"></comForm>
  </div>
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
