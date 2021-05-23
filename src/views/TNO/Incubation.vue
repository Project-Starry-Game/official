<template>
  <v-app class="sob">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/TNO/sob/index.vue";
export default {
  name: "SOB",
  metaInfo: {
    title: "SOB",
  },
  components: { index },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
};
</script>

<style>
.sob {
  background-color: transparent !important;
  max-height: 3764px;
}
</style>
