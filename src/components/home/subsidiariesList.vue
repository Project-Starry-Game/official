<template>
  <div class="customHome">
    <div style="display: block; height: 25px"></div>
    <v-container>
      <v-row>
        <v-col cols="4"> <v-card-title>Subsidiaries</v-card-title></v-col>
        <v-col cols="4">
          <v-card-title style="position: relative; left: -15px">
            Games
          </v-card-title>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-for="(item, index) in items" :key="index">
      <v-card elevation="0" @click="func(item)" color="transparent">
        <v-row justify="center">
          <v-col cols="2">
            <v-img
              width="200px"
              style="position: relative; left: 10px"
              :src="item.teamLogo"
            >
            </v-img>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1"><div class="vl"></div></v-col>
          <v-col cols="2">
            <v-img width="200px" :src="item.gameIcon"> </v-img>
          </v-col>
          <v-col cols="5">
            <v-card-title
              :class="item.textColor"
              style="position: relative; left: -10px"
            >
              {{ item.gameName }}
            </v-card-title>
            <br />
            <v-card-actions class="black--text">
              {{ item.gameDesc }}
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
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
.customHome {
  height: 100%;
  max-height: 650px;
}
</style>
