<template>
  <v-app class="contact">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/TNO/contact/index.vue";
export default {
  name: "Contact",
  metaInfo: {
    title: "Contact",
  },
  components: { index },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.$store.commit("setDrawerModel", 2);
    document.title = "Contacts";
  },
};
</script>

<style>
.contact {
  background-color: transparent !important;
  max-height: 1560px;
}
</style>
