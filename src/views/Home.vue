<template>
  <v-app class="home">
    <div style="display: block; height: 10px"></div>
    <v-app-bar elevation="1" color="transparent" height="100">
      <v-btn color="transparent" dark text to="/" elevation="0">
        <v-img :src="require('@/assets/logos/logo black.png')" width="150" />
      </v-btn>
    </v-app-bar>
    <index />
    <v-footer padless height="70px" color="transparent" fixed>
      <v-card color="transparent" width="120%" elevation="0">
        <v-card-title class="ma-2">
          <v-col style="position: relative; top: -17px">
            <v-row>
              <p class="Noto primary--text">Project Starry Game</p>
              <v-spacer />
              <p class="Noto primary--text" style="font-size: 11px">
                © 2019 Starry Game
              </p>
            </v-row>
            <v-row>
              <p
                class="Noto primary--text"
                style="
                  font-size: 11px;
                  position: relative;
                  top: -20px;
                  margin-left: 1px;
                "
              >
                an indie games team from Taipei, Taiwan.
              </p>
              <v-spacer />
              <v-btn
                v-for="(item, index) in media"
                :key="index"
                style="position: relative; top: -20px"
                :href="item.linking"
                icon
                x-small
              >
                <v-icon dark small>{{ item.icon }}</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import index from "@/components/Home/index.vue";
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      media: [
        {
          icon: "mdi-facebook",
          linking: "https://www.facebook.com/Game-Starry-109356847225732",
        },
        { icon: "mdi-twitter", linking: "https://twitter.com/projectstarrygm" },
        {
          icon: "mdi-instagram",
          linking: "https://www.instagram.com/starrycom/?hl=en",
        },
      ],
    };
  },
  components: { index },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.$vuetify.theme.dark = false;
  },
};
</script>

<style>
.home {
  background-color: transparent !important;
  max-height: 580px;
}

.footer {
  background-color: white;
}
</style>
