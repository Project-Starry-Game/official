<template>
  <v-card elevation="0" color="#E8E7E1" tile>
    <v-card color="#0d1a24" class="pa-3" tile elevation="0" width="100%">
      <v-container>
        <v-row>
          <v-toolbar elevation="0" color="transparent">
            <h1>Soul of Butterflies</h1>
            <v-card-actions class="pa-1 SOBFont">INCUBATION</v-card-actions>
            <v-btn
              icon
              elevation="0"
              color="transparent"
              href="https://www.youtube.com/watch?v=LQN1eK75n-o"
            >
              <v-icon color="red"> mdi-youtube </v-icon>
            </v-btn>
          </v-toolbar>
        </v-row>
      </v-container>
    </v-card>
    <div class="pa-3 black--text fourth--text SOBFontChinese">
      <v-img :src="poster" id="posterElement" />
      <div style="display: block; height: 15px"></div>
      <div v-for="(item, index) in article" :key="index">
        <v-card elevation="0" color="fourth" tile>
          <v-card-actions>{{ item.title }}</v-card-actions>
        </v-card>
        <v-card-text style="white-space: pre-line">{{
          item.content
        }}</v-card-text>
      </div>
      <div>
        <v-card elevation="0" color="fourth" tile>
          <v-card-actions>旅店</v-card-actions>
        </v-card>
        <div style="display: block; height: 15px"></div>
        <v-img :src="require('@/assets/sobs/lobby dark.jpg')"></v-img>
      </div>
      <div style="display: block; height: 15px"></div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["contents"],
  components: {},
  data() {
    return {
      poster: require("@/assets/sobs/poster3.jpg"),
      article: [
        {
          title: "故事概要",
          content:
            "殞落貴族-愛德華(EDWARDS)家族的後代-安德斯(Anders)\n在12歲時，父母離奇死亡後，便一直照顧著體弱多病的妹妹奈拉(Nara)\n為了救治染上了怪病的妹妹，在戰後經濟落魄的時代，Anders艱難的扛起撫養和醫療的鉅額費用，\n並在某天接到一份位於銀橋森林邊上歡樂鎮的一神秘旅社的徵人邀請…\n就此接觸了一系列龐大、驚悚的陰謀及秘密",
        },
        {
          title: "遊戲介紹 ",
          content:
            "這是Soul of Butterflies世界觀的起源之作\n在驚悚科幻的冒險之中，藉由一步步的冒險和故事，玩家將體驗整套完整的精彩世界觀\n在這款獨立開發的多元互動式冒險驚悚解謎遊戲中 \n 你將藉由點擊、拖移等相當多元豐富的遊戲方式慢慢深入故事核心\n跟隨著主角-Anders的腳步逐漸深入旅社內部挖掘出更龐大的世界觀和故事線",
        },
      ],
    };
  },
  methods: {
    rndPoster() {
      let rndPoster = Math.floor(Math.random() * 3) + 1;
      this.poster = require("@/assets/sobs/poster" + rndPoster + ".jpg");
      this.slideshow();
    },
    fadeOut(self, img) {
      let fading = setInterval(function () {
        if (img.style.opacity < 0.5) {
          let rndPoster = Math.floor(Math.random() * 3) + 1;
          self.poster = require("@/assets/sobs/poster" + rndPoster + ".jpg");
          img.style.opacity = 1;
          clearInterval(fading);
        } else {
          img.style.opacity -= 0.1;
        }
      }, 10);
    },
    slideshow() {
      var self = this;
      let img = document.getElementById("posterElement");
      setInterval(function () {
        setTimeout(self.fadeOut(self, img), 0);
      }, 5000);
    },
  },
  computed: {
    is_screen_small() {
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_large() {
      return this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl;
    },
  },
  mounted() {
    this.rndPoster();
  },
};
</script>
