<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(async () => {
      try {
        const response = await fetch("version.txt");
        const versionNumber = await response.text();
        console.log("App version:", versionNumber.trim());
      } catch (error) {
        console.error("Failed to fetch version:", error);
      }
    });
  },
});
</script>
