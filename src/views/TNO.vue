<template>
  <v-app class="TNO">
    <appbar class="Noto" />
    <v-parallax height="100%" :src="require('@/assets/backgroundImage.jpg')">
      <router-view class="nested-routes"></router-view>
    </v-parallax>
    <foot class="Noto" />
  </v-app>
</template>

<script>
import appbar from "@/components/TNO/appbar/index.vue";
import foot from "@/components/TNO/footer/index.vue";
export default {
  name: "TNO",
  metaInfo: {
    title: "TNO",
  },
  components: { appbar, foot },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.$vuetify.theme.dark = true;
    this.$store.commit("setDrawerModel", 0);
  },
};
</script>

<style>
.TNO {
  background-color: transparent !important;
}
</style>
