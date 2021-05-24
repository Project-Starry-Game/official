<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
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
  components: {},
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
  font-family: "zpix";
  src: url("~@/assets/fonts/Zpix.ttf");
}
.zpix {
  font-family: "zpix", "Noto Sans", cursive;
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
