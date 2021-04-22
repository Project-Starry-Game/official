<template>
  <div>
    <mobile v-if="is_screen_small" :stuffDatas="stuffDatas" />
    <desktop v-else-if="is_screen_large" :stuffDatas="stuffDatas" />
    <pad v-else :stuffDatas="stuffDatas" />
  </div>
</template>

<script>
import desktop from "@/components/about/desktop.vue";
import mobile from "@/components/about/mobile.vue";
import pad from "@/components/about/pad.vue";
export default {
  components: { desktop, mobile, pad },
  data() {
    return {
      stuffDatas: [
        {
          job: "Director",
          subjob: "Artist",
          profile: ["李予棠"],
          src: require("@/assets/about/art.gif"),
        },
        {
          job: "Music",
          profile: ["陳向琥"],
          src: require("@/assets/about/music.gif"),
        },
        {
          job: "Game Developer",
          profile: ["崔元煜"],
          src: require("@/assets/about/program.gif"),
        },
        {
          job: "Programming",
          profile: ["薛賀升"],
          src: require("@/assets/about/program.gif"),
        },
      ],
    };
  },
  computed: {
    is_screen_small() {
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_large() {
      return this.$vuetify.breakpoint.lg;
    },
  },
  mounted() {},
};
</script>
