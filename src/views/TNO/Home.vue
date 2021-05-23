<template>
  <v-app class="TNOHome">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/TNO/home/index.vue";
export default {
  name: "TNO",
  metaInfo: {
    title: "TNO",
  },
  components: { index },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.$store.commit("setDrawerModel", 0);
  },
};
</script>

<style>
.TNOHome {
  background-color: transparent !important;
  height: 100%;
  max-height: 750px;
}
</style>
