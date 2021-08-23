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
              href="https://youtu.be/LQN1eK75n-o"
            >
              <v-icon color="red"> mdi-youtube </v-icon>
            </v-btn>
          </v-toolbar>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="center">
          <iframe
            v-if="is_screen_small"
            frameborder="0"
            src="https://itch.io/embed/1033029?linkback=true&amp;bg_color=0d1a24&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=3b4852"
            width="189"
            height="151"
            ><a
              href="https://project-starry.itch.io/soul-of-butterflies-incubation"
              >Soul of Butterflies : Incubation by Project Starry</a
            ></iframe
          >
          <iframe
            v-else
            frameborder="0"
            src="https://itch.io/embed/1033029?bg_color=0d1a24&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=3b4852"
            width="552"
            height="167"
            ><a
              href="https://project-starry.itch.io/soul-of-butterflies-incubation"
              >Soul of Butterflies : Incubation by Project Starry</a
            ></iframe
          >
        </v-row>
      </v-container>
    </v-card>
    <div class="pa-3 black--text fourth--text SOBFont">
      <v-img :src="poster" id="posterElement" />
      <div style="display: block; height: 15px"></div>
      <div>
        <v-card elevation="0" color="fourth" tile>
          <v-card-actions>Media</v-card-actions>
          <a
            href="https://project-starry.itch.io/soul-of-butterflies-incubation"
            style="text-decoration: none; position: relative; float: right"
          >
            <v-img
              width="100px"
              :src="require('@/assets/logos/badge.svg')"
            ></v-img>
          </a>
        </v-card>
        <v-row justify="center" align="center" style="white-space: nowrap">
          <v-col cols="4">
            <a
              href="https://www.facebook.com/Soul-of-Butterflies-Incubation-101757602075384"
              style="text-decoration: none"
            >
              <v-card-text class="black--text">Facebook</v-card-text>
            </a>
          </v-col>
          <v-col cols="4">
            <a
              href="https://www.instagram.com/soul_of_butterflies_com/"
              style="position: relative; left: -5px; text-decoration: none"
            >
              <v-card-text class="black--text">Instagram</v-card-text>
            </a>
          </v-col>
          <v-col cols="4">
            <a
              href="https://twitter.com/sobseries_com"
              style="text-decoration: none"
            >
              <v-card-text class="black--text">Twitter</v-card-text>
            </a>
          </v-col>
        </v-row>
      </div>
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
          <v-card-actions>Hostel</v-card-actions>
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
          title: "Game Intro",
          content:
            "Soul of Butterflies: Incubation is the origin of the Soul of Butterflies series. Set in a huge fictional world crafted by our team, it is a narrative-based, storytelling horror escape game with a western comic art style.",
        },
        {
          title: "Story - The Incubation",
          content:
            "In a chaotic postwar era, an empire was plagued by a deadly disease. To afford the high medical expenses for his sickly sister, Anders spared every effort to find a job. One night, Anders received a job offer from a mysterious hostel. Following the directions in the letter, he arrived at a weird place. This was the beginning of the uncovering of the secrets and the conspiracies of this mysterious hostel…",
        },
        {
          title: "Backstory - The Soul of Butterflies",
          content:
            "In the 20th century, everything had just come to peace after a hundred-year war. Due to the difference between religions, a severe riot broke out in the Republic of Fabre. The army of traitors used a destructive weapon - Behemoth - which devastated Fabre's army with overwhelming power. Furthermore, the deadly virus plaguing the country worsened the situation. Lots of people in Fabre died because of endless war and disease. Despair overwhelmed every citizen in Fabre. After 10 years, a new government was established. Due to the effort of survivors, everything was getting better and stable. However, there's a big conspiracy behind this seemingly positive situation. During these years, The Gigantic Monster mutated. It started to think like humans and tried to hunt humans for their souls. At the same time, a mysterious hostel showed up in the southern boundary of Fabre...",
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
