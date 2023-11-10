<template>
  <v-container
    id="scroll-target"
    class="overflow-y-auto trailer pa-0 ma-0"
    fluid
  >
    <!-- Mobile Content -->
    <div class="home">
      <div class="butter_logo_phone_container">
        <v-img class="butter_logo_phone" :src="butterflylogo" cover />
      </div>
      <v-img class="butter_background" cover :src="bg_builder" />
      <div class="next-page-container">
        <v-btn
          @click="scrollToNextSection"
          color="transparent"
          elevation="0"
          class="next-page-button"
        >
          Next Page <span class="right-arrow">></span>
        </v-btn>
      </div>
      <div class="butter_text_container">
        <p>Swallow the Black liquid, tell me what you see.</p>
        <br />
        <p>A beautiful world with silence? A broken coffin?</p>
        <p>Or even just that empty bottle in your hand.</p>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import bg_builder from "@/assets/bgwithcc.png";
import butterflylogo from "@/assets/logo_shadow.png";

const emit = defineEmits(["scroll-to-next"]);

const scrollToNextSection = () => {
  emit("scroll-to-next");
};
</script>

<script lang="ts">
export default {
  setup() {},

  mounted() {},
};
</script>

<style>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.butter_logo_phone_container {
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  width: 100vw;
  z-index: 100;
}
.butter_logo_phone {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  top: 15vh;
}
.butter_background {
  height: 100%;
}
.butter_text_container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
  top: 55vh;
  padding: 0;
  margin: 0;
  width: 100vw;
  z-index: 100;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  text-shadow: 2px 3px #000;
  font-size: 14px;
}
.butter_scoll_container {
  position: absolute;
  top: 90%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 10000;
}
.butter_scroll_btn {
  height: 0.6rem;
  width: 0.6rem;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  animation: move-down 2s infinite;
  margin-top: -1rem;
}
a#scroll_btn {
  height: 0.6rem;
  width: 0.6rem;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  animation: move-down 2s infinite;
  margin-top: -1rem;
}
@keyframes move-down {
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(1.5rem);
    opacity: 0;
  }
}

p#scrolldown_text {
  font-size: 0.6rem;
  color: #fff;
}

.next-page-container {
  position: fixed;
  bottom: 16px; /* or any appropriate spacing from the bottom */
  right: 16px; /* or any appropriate spacing from the right */
  z-index: 1000; /* ensure it's above other elements */
  color: #fff;
}

.next-page-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px; /* adjust padding as needed */
  font-size: 10px;
  /* Additional button styling */
}

.right-arrow {
  margin-left: 8px; /* space between text and arrow */
  /* Additional arrow styling */
}

/* Keyframe animation for moving right effect */
@keyframes move-right {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

/* Style for the right arrow with the new animation */
.right-arrow {
  animation: move-right 1s ease-in-out infinite;
  display: inline-block; /* Keep the arrow inline with the text */
}

.next-page-button {
  /* Existing styles */
  border: 2px solid #fff; /* White outline */
  border-radius: 5px; /* Rounded corners for the outline */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

/* Adjust the hover effect for the next-page-button */
.next-page-button:hover {
  background-color: rgba(
    255,
    255,
    255,
    0
  ); /* Slight background color change on hover */
  border-color: rgba(255, 255, 255, 0); /* Lighten the border color on hover */
}
</style>
