<template>
  <div>
    <div style="display: block; height: 90px"></div>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <timeline :gameContents="gameContents" />
      </v-col>
    </v-row>
    <div style="display: block; height: 90px"></div>
  </div>
</template>

<script>
import timeline from "@/components/TNO/games/timelineMob.vue";
export default {
  props: ["gameContents"],
  components: { timeline },
  data() {
    return {};
  },
  methods: {},
};
</script>
