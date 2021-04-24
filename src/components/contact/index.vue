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
                v-model="email"
              ></v-text-field>
            </v-card>
            <div style="display: block; height: 50px"></div>
            <v-card class="mx-auto pa-5" color="transparent" elevation="0">
              <v-textarea label="Message" v-model="message"> </v-textarea>
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
import { postForm } from "@/api/postForm.js";
export default {
  data() {
    return {
      googleFormUrl:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSceePJIg4kAjl0oNiKiYp6et-2BTjb0DQoQs1qyRyM9Y9RSNQ/formResponse",
      email: "",
      emailEntry: "entry.2106038721",
      message: "",
      contentEntry: "entry.820220678",
    };
  },
  methods: {
    send() {
      let form = document.getElementById("form");
      let formdata = new FormData(form);
      formdata.append(this.emailEntry, this.email);
      formdata.append(this.contentEntry, this.message);
      postForm(this.googleFormUrl, formdata);
    },
  },
};
</script>

<style>
.contactForm {
  font-family: "Zpix", "Press Start 2P", cursive;
}
</style>
