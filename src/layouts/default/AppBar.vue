<template>
  <v-app-bar color="transparent" dark elevation="0" flat>
    <v-img
      src="@/assets/logo.png"
      class="d-inline-block align-top"
      contain
      height="40"
      style="max-width: 120px"
    ></v-img>

    <v-spacer></v-spacer>
    <!-- This pushes the icons to the right -->

    <!-- Icons -->
    <v-btn
      icon
      href="https://www.facebook.com/projectstarrygame"
      target="_blank"
    >
      <v-icon size="24">mdi-facebook</v-icon>
    </v-btn>
    <v-btn icon href="https://twitter.com/projectstarrygm" target="_blank">
      <v-icon size="24">mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon href="https://www.instagram.com/starrycom/" target="_blank">
      <v-icon size="24">mdi-instagram</v-icon>
    </v-btn>
    <!-- Add more icons as needed -->
  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  width: 100%; /* Ensures the app bar takes full width */
}

/* Additional styling for logo and icons can go here */
</style>
