<template>
  <div>
    <v-carousel
      :key="carouselKey"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        :src="image.imgSrc"
      ></v-carousel-item>
    </v-carousel>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

interface Image {
  imgSrc: string;
}

export default defineComponent({
  setup() {
    const images = ref<Image[]>([]);
    const loading = ref(true);
    const carouselKey = ref(0);

    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        if (data.message === "success") {
          images.value = data.data as Image[];
          carouselKey.value++; // Increment key to force update
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchImages();
    });

    return { images, loading, carouselKey };
  },
});
</script>
