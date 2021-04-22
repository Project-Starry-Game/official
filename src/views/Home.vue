<template>
  <v-app class="home">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/home/index.vue";
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  components: { index },
  mounted() {
    this.$store.commit("setDrawerModel", 0);
  },
};
</script>

<style>
.home {
  background-color: transparent !important;
  max-height: 1280px;
}
</style>
