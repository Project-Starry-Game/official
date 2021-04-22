<template>
  <v-app>
    <appbar class="Noto" />
    <v-parallax height="100%" :src="require('@/assets/backgroundImage.jpg')">
      <router-view></router-view>
      <foot class="Noto" />
    </v-parallax>
    <v-overlay :absolute="true" opacity="0.98" :value="overlay" class="SOBFont">
      {{ loading }}%
    </v-overlay>
  </v-app>
</template>

<script>
import appbar from "@/components/appbar/index.vue";
import foot from "@/components/footer/index.vue";

export default {
  name: "App",
  metaInfo() {
    return {
      title: "Project Starry Game",
      titleTemplate: "%s | Project Starry",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Project Starry Game, an indie games team from Taipei, Taiwan, © 2019 Starry Game,",
        },
      ],
    };
  },
  data() {
    return {
      overlay: false,
      loading: "0",
    };
  },
  components: {
    appbar,
    foot,
  },
  methods: {},
  computed: {},
  async mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.Noto {
  font-family: "Noto Sans", sans-serif;
}

@font-face {
  font-family: "SOB";
  src: url("~@/assets/fonts/Please write me a song.ttf");
}
.SOBFont {
  font-family: "SOB", "Noto Sans", cursive;
}

@font-face {
  font-family: "SOBChinese";
  src: url("~@/assets/fonts/GenJyuuGothic-Monospace-Normal.ttf");
}
.SOBFontChinese {
  font-family: "SOBChinese", "Noto Sans", cursive;
}

.v-parallax__image {
  width: 100% !important;
}
</style>
