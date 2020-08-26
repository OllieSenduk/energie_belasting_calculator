<template>
  <div class="form ml-0">
    <h2>Jaartal: {{year}}</h2>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="VerbruikLaag" :rules="numRules" label="Verbruik laag" required></v-text-field>

      <v-text-field v-model="VerbruikHoog" :rules="numRules" label="Verbruik hoog" required></v-text-field>
      <!-- 
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="calculate"
          type="number"
        >Bereken</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Nieuwe getallen</v-btn>

      <v-btn color="warning" @click="resetValidation">Reset form validatie</v-btn>-->
    </v-form>
    <v-container>
      <v-row align="center">
        <ul>
          <li>
            <b>Totaal aantal Kwh: {{totalKwh}}</b>
          </li>
          <li>
            <b>Totaal eerste schijf: {{totalKwh}}</b>
          </li>
          <li>
            <b>Totaal aantal Kwh: {{totalKwh}}</b>
          </li>
          <li>
            <b>Totaal aantal Kwh: {{totalKwh}}</b>
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
    VerbruikLaag: "",
    VerbruikHoog: "",
    numRules: [
      (v) =>
        (!!v && !isNaN(parseFloat(v))) ||
        "Ingevulde waarde moet een nummer zijn",
    ],
  }),
  methods: {
    calculate() {
      return parseInt(this.VerbruikLaag) + parseInt(this.VerbruikHoog);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {
    amounts() {
      return this.$props.kwh;
    },
    totalKwh() {
      let total = parseInt(this.VerbruikLaag) + parseInt(this.VerbruikHoog);
      return isNaN(total) ? "" : total;
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
