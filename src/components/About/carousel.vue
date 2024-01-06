<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image.imgSrc"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

// Define an interface that represents the structure of your image objects
interface Image {
  imgSrc: string;
  // Include other properties if there are any
}

export default defineComponent({
  setup() {
    // Use the interface in the ref declaration
    const images = ref<Image[]>([]);

    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        if (data.message === "success") {
          // Cast the data to the Image type
          images.value = data.data as Image[];
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    onMounted(() => {
      fetchImages();
    });

    return { images };
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
