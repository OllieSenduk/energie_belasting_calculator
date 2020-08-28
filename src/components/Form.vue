<template>
  <div class="form ml-0">
    <h2>Jaartal: {{year}}</h2>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="VerbruikLaag" :rules="numRules" label="Verbruik laag" required></v-text-field>

      <v-text-field v-model="VerbruikHoog" :rules="numRules" label="Verbruik hoog" required></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="setShowResults"
        type="number"
      >Bereken</v-btn>
    </v-form>
    <v-container v-if="showResults">
      <v-row align="center">
        <ul>
          <li>
            <b>Totaal aantal Kwh: {{totalKwh}}</b>
          </li>
          <li>
            <b>Totaal eerste schijf (tot {{firstTierBoundry}} ): {{totalFirstTierCosts}}</b>
          </li>
        </ul>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    year: String,
    kwh: Object,
  },
  data: () => ({
    valid: true,
    showResults: false,
    VerbruikLaag: "",
    VerbruikHoog: "",
    firstTierBoundry: "",
    firstTierCosts: "",
    numRules: [
      (v) =>
        (!!v && !isNaN(parseFloat(v))) ||
        "Ingevulde waarde moet een nummer zijn",
    ],
    restNum: 0,
  }),
  methods: {
    calculateTotal() {
      return parseInt(this.VerbruikLaag) + parseInt(this.VerbruikHoog);
    },
    setShowResults(e) {
      e.preventDefault();
      this.showResults = true;
    },
  },
  computed: {
    totalKwh() {
      let total = this.calculateTotal();
      this.restNum = total;
      return isNaN(total) ? "" : total;
    },
    totalfirstTierCosts() {
      if (this.restNum >= this.firstTierBoundry) {
        return this.firstTierBoundry * this.firstTierCost;
      } else {
        return "lower";
      }
    },
  },
  created() {
    let firstTier = this.$props.kwh["firstTier"];
    this.firstTierCost = firstTier["cost"];
    this.firstTierBoundry = firstTier["boundry"];
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
