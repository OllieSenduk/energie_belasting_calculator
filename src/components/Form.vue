<template>
  <div class="form">
    <h3>Year: {{year}}</h3>
    {{amounts}}
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    year: String,
    kwh: Object,
  },
  computed: {
    amounts() {
      return this.$props.kwh;
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
