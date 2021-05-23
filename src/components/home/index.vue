<template>
  <div class="customHome">
    <mobile class="Noto" v-if="is_screen_small" />
    <pad class="Noto" v-else-if="is_screen_middle" />
    <desktop class="Noto" v-else />
  </div>
</template>

<script>
import desktop from "@/components/Home/desktop.vue";
import pad from "@/components/Home/pad.vue";
import mobile from "@/components/Home/mobile.vue";
export default {
  components: { desktop, pad, mobile },
  mounted() {},
  computed: {
    is_screen_small() {
      // ['xs', 'sm'].includes(this.$vuetify.breakpoint.name);
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_middle() {
      return this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm;
    },
    is_screen_large() {
      return this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl;
    },
  },
};
</script>
<style>
.customHome {
  height: 100%;
  max-height: 650px;
}
</style>
