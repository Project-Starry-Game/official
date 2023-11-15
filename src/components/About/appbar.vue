<template>
  <v-app-bar color="transparent" dark elevation="0" flat>
    <router-link to="/" class="logo-link">
      <v-img
        src="@/assets/logo.png"
        class="pa-2 ma-2"
        contain
        height="30"
        width="30"
      ></v-img>
    </router-link>

    <v-spacer></v-spacer>

    <!-- Icons -->

    <v-btn
      icon
      color="#3b5998"
      href="https://www.facebook.com/projectstarrygame"
      target="_blank"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      icon
      color="#1DA1F2"
      href="https://twitter.com/projectstarrygm"
      target="_blank"
    >
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      icon
      color="#C13584"
      href="https://www.instagram.com/starrycom/"
      target="_blank"
    >
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <v-btn
      icon
      color="red"
      href="https://www.youtube.com/channel/UCcnPnyhAAq2mIQg92TNe30w"
      target="_blank"
    >
      <v-icon>mdi-youtube</v-icon>
    </v-btn>
    <!-- Add more icons as needed -->
  </v-app-bar>
</template>

<script lang="ts" setup>
// Script setup block
</script>

<!-- Include any styles specific to your About page here -->
<style scoped>
.logo-link {
  text-decoration: none; /* Optional: Removes underline from link */
}
</style>
