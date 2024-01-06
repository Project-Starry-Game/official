<template>
  <v-container>
    <v-form ref="myForm" @submit.prevent="submitForm">
      <!-- Email Field with Error Detection -->
      <v-text-field
        v-model="formData.email"
        label="Email"
        required
        :rules="emailRules"
      ></v-text-field>
      <!-- Message Field -->
      <v-textarea
        v-model="formData.message"
        label="Message"
        required
      ></v-textarea>
      <!-- Submit Button -->
      <v-btn type="submit">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { stringify } from "qs";

export default defineComponent({
  data() {
    return {
      formData: {
        email: "",
        message: "",
      },
      googleFormURL:
        "https://docs.google.com/forms/d/e/1FAIpQLScFimQV3TuaRCNZt3IBF6XY6s9RhFoB58Y4h1eOBZrHlXP8cg/viewform",
    };
  },
  methods: {
    async submitForm() {
      // Clean text by trimming whitespace
      this.formData.message = this.formData.message.trim();

      const FORM_ID =
        "1FAIpQLScFimQV3TuaRCNZt3IBF6XY6s9RhFoB58Y4h1eOBZrHlXP8cg"; // Replace with your Google Form ID
      const query = {
        "entry.504793339": this.formData.email, // Replace with the correct field IDs
        "entry.1074462405": this.formData.message,
      };

      await this.submitToGoogleForm(FORM_ID, query)
        .then(() => {
          // Handle success (e.g., show a success message to the user)
          console.log("Form submitted successfully");
          // Clear the form after successful submission
          this.clearForm();
        })
        .catch(() => {
          // Handle failure (e.g., show an error message to the user)
          console.error("Form submission failed");
        });
    },
    submitToGoogleForm(
      formId: string,
      query: Record<string, unknown>
    ): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        fetch(
          `https://docs.google.com/forms/d/e/${formId}/formResponse?&${stringify(
            query
          )}&submit=SUBMIT`,
          {
            method: "POST",
            mode: "no-cors",
            redirect: "follow",
            referrer: "no-referrer",
          }
        )
          .then(() => resolve())
          .catch(() => reject());
      });
    },
    clearForm() {
      // Clear the form fields
      this.formData.email = "";
      this.formData.message = "";
    },
  },
  computed: {
    emailRules() {
      // Define email validation rule using Vuetify's rules
      return [
        (v: any) => !!v || "Email is required",
        (v: any) => /.+@.+\..+/.test(v) || "Email must be valid",
      ];
    },
  },
});
</script>
