<template>
  <div>
    <v-app-bar-nav-icon
      @click="setDrawer(true)"
      clipped
      app
    ></v-app-bar-nav-icon>
    <v-btn color="transparent" text to="/" elevation="0">
      <v-img :src="contents.logo" width="150" />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["contents"],
  components: {},
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    setDrawer(val) {
      this.$store.commit("setDrawerState", val);
    },
  },
};
</script>
