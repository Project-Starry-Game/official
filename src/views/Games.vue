<template>
  <v-app class="games">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/games/index.vue";
export default {
  name: "Games",
  metaInfo: {
    title: "Games",
  },
  components: { index },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.$store.commit("setDrawerModel", 3);
    document.title = "Games";
  },
};
</script>

<style>
.games {
  background-color: transparent !important;
  max-height: 1528px;
}
</style>
