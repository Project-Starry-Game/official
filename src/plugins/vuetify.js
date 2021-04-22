import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  iconfont: "fa",
});

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#1d3a50",
        secondary: "#504b79",
        third: "#ffffff",
        fourth: "#403c60",
      },
      dark: {
        primary: "#1d3a50",
        secondary: "#504b79",
        third: "#000000",
        fourth: "#403c60",
      },
    },
  },
});
