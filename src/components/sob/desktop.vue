<template>
  <div>
    <div style="display: block; height: 90px"></div>
    <v-row justify="center" align="center">
      <v-col cols="7">
        <intro />
      </v-col>
    </v-row>
    <div style="display: block; height: 120px"></div>
  </div>
</template>

<script>
import intro from "@/components/sob/intro.vue";
export default {
  props: ["contents"],
  components: { intro },
  data() {
    return {};
  },
  methods: {},
};
</script>
