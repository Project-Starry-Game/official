<template>
  <div>
    <mobile v-if="is_screen_small" :contents="contents" />
    <pad v-else-if="is_screen_middle" :contents="contents" />
    <desktop v-else :contents="contents" />
  </div>
</template>

<script>
import mobile from "@/components/sob/mobile.vue";
import pad from "@/components/sob/pad.vue";
import desktop from "@/components/sob/desktop.vue";
export default {
  components: { desktop, mobile, pad },
  data() {
    return {
      contents: [],
    };
  },
  methods: {},
  computed: {
    is_screen_small() {
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_middle() {
      return this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm;
    },
  },
};
</script>
