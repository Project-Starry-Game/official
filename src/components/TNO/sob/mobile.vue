<template>
  <div>
    <div style="display: block; height: 90px"></div>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <intro />
      </v-col>
    </v-row>
    <div style="display: block; height: 90px"></div>
  </div>
</template>

<script>
import intro from "@/components/TNO/sob/intro.vue";
export default {
  props: ["contents"],
  components: { intro },
  data() {
    return {};
  },
  methods: {},
};
</script>
