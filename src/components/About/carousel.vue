<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

// Import each image
import asset0 from "@/assets/screenshots/asset0.png";
import asset1 from "@/assets/screenshots/asset1.png";
import asset2 from "@/assets/screenshots/asset2.png";
import asset4 from "@/assets/screenshots/asset4.png";
import asset5 from "@/assets/screenshots/asset5.png";
import asset6 from "@/assets/screenshots/asset6.png";

export default defineComponent({
  setup() {
    const images = ref<string[]>([
      asset0,
      asset1,
      asset2,
      asset4,
      asset5,
      asset6,
    ]);

    return { images };
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
