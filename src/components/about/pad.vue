<template>
  <div>
    <div style="display: block; height: 90px"></div>
    <v-container fluid>
      <timeline :cols="5" :stuffDatas="stuffDatas" :lines="2" />
    </v-container>
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
