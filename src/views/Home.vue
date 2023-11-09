<template>
  <div>
    <DesktopHome v-if="!isMobile" @scroll-to-next="scrollToNextSection" />
    <MobileHome v-else @scroll-to-next="scrollToNextSection" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import DesktopHome from "@/components/Trailer/desktop.vue";
import MobileHome from "@/components/Trailer/mobile.vue";

const isMobile = ref(window.innerWidth < 768);
const router = useRouter();

const updateWindowSize = () => {
  isMobile.value = window.innerWidth < 768;
};

const scrollToNextSection = () => {
  router.push("/about"); // Replace '/about' with the path to your About page
};

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});
</script>
