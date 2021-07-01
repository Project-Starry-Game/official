<template>
  <div>
    Humand Resource page of starry
    <v-btn link="ttps://project-starry.github.io/HR-official/">Redirect</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      //   window.location.href = "https://project-starry.github.io/HR-official/";
    },
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
    this.redirect();
  },
};
</script>
