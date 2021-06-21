<template>
  <div>
    <v-app-bar
      elevation="0"
      color="transparent"
      class="appbar-color"
      dense
      height="70px"
      hide-on-scroll
      fixed
    >
      <mobile v-if="is_screen_small" :contents="contents" />
      <desktop v-else :contents="contents" />
    </v-app-bar>
    <v-navigation-drawer
      v-if="is_screen_small"
      v-model="drawerState"
      color="#161616"
      dark
      fixed
      app
      right
    >
      <v-list nav dense>
        <v-list-item-group v-model="drawerModel">
          <v-list-item
            v-for="(item, index) in contents.items"
            :key="index"
            :value="item.active"
            active-class="secondary"
            :to="item.url"
          >
            <h5 class="white--text Noto">{{ item.name }}</h5>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import desktop from "@/components/TNO/appbar/desktop.vue";
import mobile from "@/components/TNO/appbar/mobile.vue";
export default {
  components: {
    desktop,
    mobile,
  },
  data() {
    return {
      drawer: true,
      contents: {
        logo: require("@/assets/logos/new starry logo.png"),
        items: [
          { name: "Incubation", url: "/tno/incubation" },
          // { name: "Home", url: "/tno" },
          // { name: "About", url: "/tno/about" },
          // { name: "Contact", url: "/tno/contact" },
          // { name: "Games", url: "/tno/games" },
        ],
      },
    };
  },
  computed: {
    is_screen_small() {
      // ['xs', 'sm'].includes(this.$vuetify.breakpoint.name);
      return this.$vuetify.breakpoint.xs;
    },
    drawerState: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawerState", val);
      },
    },
    drawerModel: {
      get() {
        return this.$store.state.drawerModel;
      },
      set(val) {
        this.$store.commit("setDrawerModel", val);
      },
    },
  },
  mounted() {
    this.$store.commit("setDrawerState", false);
  },
};
</script>
