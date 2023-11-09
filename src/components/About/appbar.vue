<template>
  <v-app-bar color="transparent" dark elevation="0" flat>
    <v-img
      src="@/assets/logo.png"
      class="pa-2 ma-2"
      contain
      height="40"
      max-width="40"
      style="display: block; margin-right: auto"
    ></v-img>

    <v-spacer></v-spacer>

    <!-- Icons -->
    <v-btn
      icon
      href="https://www.facebook.com/projectstarrygame"
      target="_blank"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn icon href="https://twitter.com/projectstarrygm" target="_blank">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon href="https://www.instagram.com/starrycom/" target="_blank">
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <!-- Add more icons as needed -->
  </v-app-bar>
</template>

<script lang="ts" setup>
// Script setup block
</script>

<!-- Include any styles specific to your About page here -->
<style scoped></style>
