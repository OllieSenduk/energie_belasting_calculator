<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Artikelen</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelpfulLinks",
  data() {
    return {
      links: [
        {
          text:
            "Essent - Wat aan te leveren bij het terugvragen van energie belasting",
          href:
            "https://www.essent.nl/content/zakelijk/ondernemersdesk/uw-facturen/energiebelasting.html#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>