<template>
  <div>
    <div style="display: block; height: 90px"></div>
    <v-container fluid class="pa-2">
      <timeline :cols="4" :stuffDatas="stuffDatas" :lines="2" />
    </v-container>
    <div style="display: block; height: 90px"></div>
  </div>
</template>

<script>
import timeline from "@/components/about/multiTimelines.vue";
export default {
  props: ["stuffDatas"],
  components: { timeline },
  computed: {},
  mounted() {},
};
</script>
