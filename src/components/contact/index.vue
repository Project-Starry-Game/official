<template>
  <v-container class="Noto">
    <div style="display: block; height: 90px"></div>
    <v-form ref="form" id="form">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="10">
          <v-card
            elevation="0"
            class="mx-auto"
            color="transparent"
            width="550px"
          >
            <v-card class="mx-auto" color="transparent" elevation="0">
              <v-card-title>Contact Us</v-card-title>
              <v-card-subtitle
                >Tell us anything you want. Even the moment you felt in our
                games.
              </v-card-subtitle>
            </v-card>
            <div style="display: block; height: 30px"></div>
            <v-card class="mx-auto pa-5" color="transparent" elevation="0">
              <v-text-field
                class="primary--text"
                label="Email"
                required
              ></v-text-field>
            </v-card>
            <div style="display: block; height: 50px"></div>
            <v-card class="mx-auto pa-5" color="transparent" elevation="0">
              <v-textarea label="Message"> </v-textarea>
            </v-card>
            <v-toolbar elevation="0" color="transparent">
              <v-spacer />
              <v-btn color="white" @click="send" text> Send </v-btn>
            </v-toolbar>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    send() {},
  },
};
</script>

<style>
.contactForm {
  font-family: "Zpix", "Press Start 2P", cursive;
}
</style>
