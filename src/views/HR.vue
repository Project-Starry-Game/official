<template>
  <div>Humand Resource page of starry</div>
</template>

<script>
export default {
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    window.location.href = "https://project-starry.github.io/HR-official/";
  },
};
</script>
