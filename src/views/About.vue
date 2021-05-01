<template>
  <v-app class="about">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/about/index.vue";
export default {
  name: "About",
  metaInfo: {
    title: "About",
  },
  components: { index },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.$store.commit("setDrawerModel", 1);
  },
};
</script>

<style>
.about {
  background-color: transparent !important;
  max-height: 1528px;
}
</style>
