<template>
  <div class="home-index">
    <mobile
      v-if="is_screen_small"
      :carouselItems="carouselItems"
      :carouselShadowItems="carouselShadowItems"
    />
    <pad
      v-else-if="is_screen_middle"
      :carouselItems="carouselItems"
      :carouselShadowItems="carouselShadowItems"
    />
    <desktop
      v-else
      :carouselItems="carouselItems"
      :carouselShadowItems="carouselShadowItems"
    />
  </div>
</template>

<script>
import mobile from "@/components/TNO/home/mobile.vue";
import pad from "@/components/TNO/home/pad.vue";
import desktop from "@/components/TNO/home/desktop.vue";
export default {
  components: { desktop, mobile, pad },
  data() {
    return {
      carouselItems: [
        { src: require("@/assets/sobs/releasesoon.jpg") },
        { src: require("@/assets/sobs/poster3.jpg") },
        { src: require("@/assets/sobs/poster2.jpg") },
        { src: require("@/assets/sobs/poster1.jpg") },
      ],
      carouselShadowItems: [
        { src: require("@/assets/sobs/releasesoon.jpg") },
        { src: require("@/assets/sobs/poster shadow.jpg") },
        { src: require("@/assets/sobs/poster shadow1.jpg") },
        { src: require("@/assets/sobs/poster shadow2.jpg") },
      ],
    };
  },
  methods: {},
  computed: {
    is_screen_small() {
      // ['xs', 'sm'].includes(this.$vuetify.breakpoint.name);
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_middle() {
      return this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm;
    },
  },
};
</script>

<style>
.home-index {
  background-color: transparent !important;
  height: 100%;
}
</style>
