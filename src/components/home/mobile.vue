<template>
  <div class="zpix">
    <div style="display: block; height: 50px"></div>
    <v-container v-for="(item, index) in items" :key="index">
      <v-card elevation="0" @click="func(item)" color="transparent">
        <v-row justify="start" align="center">
          <v-col cols="5">
            <v-img
              width="150px"
              style="position: relative; left: 10px"
              :src="item.teamLogo"
            >
            </v-img>
          </v-col>
          <v-col cols="2" />
          <v-col cols="5">
            <v-img max-width="250px" max-height="150px" :src="item.gameIcon">
            </v-img>
          </v-col>
        </v-row>
      </v-card>
      <div style="display: block; height: 50px"></div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          teamLogo: require("@/assets/logos/TNO logo.png"),
          path: "/tno",
          gameIcon: require("@/assets/sobs/incubationicon.png"),
          gameName: "Soul of Butterflies : Incubation",
          gameDesc: "a series horror room escape games",
          textColor: "primary--text",
        },
        {
          teamLogo: require("@/assets/logos/LOGO2.png"),
          path: null,
          gameIcon: require("@/assets/escapes/icon.png"),
          gameName: "Escape",
          gameDesc: "an asymmetric party game.",
          textColor: "red--text",
        },
      ],
    };
  },
  methods: {
    func(val) {
      if (val.path == null) {
        this.removeA(this.items, val);
      } else {
        this.$router.push(val.path);
      }
    },
    removeA(arr) {
      var what,
        a = arguments,
        L = a.length,
        ax;
      while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
        }
      }
      return arr;
    },
  },
  mounted() {},
};
</script>
<style>
.customPadHome {
  position: relative;
  margin: 0;
}
</style>
