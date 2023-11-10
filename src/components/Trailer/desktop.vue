<template>
  <v-container
    id="scroll-target"
    class="overflow-y-auto trailer pa-0 ma-0"
    v-scroll:#scroll-target="onScroll"
    fluid
  >
    <div class="img_container" id="logo_box">
      <div class="img_logo" id="img_logo">
        <v-img :src="butterflylogo" />
      </div>
    </div>
    <div class="background_box">
      <v-img :src="bg_builder" />
      <div class="scrolldown_box">
        <v-btn @click="scrollToNextSection" class="next-page-btn">
          Next Page <span class="right-arrow">></span>
        </v-btn>
      </div>
    </div>
    <div class="text_section" id="text_section">
      <p>Swallow the Black liquid, tell me what you see.</p>
      <br />
      <p>
        A beautiful world with silence? A broken coffin? Or even just that empty
        bottle in your hand.
      </p>
      <br />
      <!-- <p>
          {{ $t("trialerIntro.section_three") }}
        </p> -->
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

  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    onScroll(e: any) {
      var bk = document.getElementById("background");
      var logo_box = document.getElementById("logo_box");
      var img_logo = document.getElementById("img_logo");
      var text_section = document.getElementById("text_section");
      var halfposition = (e.target!.scrollHeight - window.innerHeight) * 0.5;

      this.offsetTop = e.target!.scrollTop;

      logo_box!.style.opacity = (
        1 -
        (this.offsetTop / (e.target!.scrollHeight - window.innerHeight)) * 1.5
      ).toString();

      if (this.offsetTop < halfposition) {
        text_section!.style.opacity = "0";
      } else {
        text_section!.style.opacity = (
          (this.offsetTop - halfposition) /
          (e.target!.scrollHeight - window.innerHeight - halfposition)
        ).toString();
      }

      //   img_logo!.style.transform =
      //     "scale(" +
      //     1 -
      //     this.offsetTop / (e.target!.scrollHeight - window.innerHeight) +
      //     ")";
    },
  },
};
</script>

<style>
.home {
  height: 100vh;
  width: 100vw;
}
.scroll_view {
  position: relative;
}
.trailer {
  position: relative;
  top: 0%;

  overflow-x: hidden;
  max-height: 100vh;
}

.img_container {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 10%; /* 移到上面 */
  width: 100vw;
  z-index: 100;
}
.img_logo {
  position: relative;
  width: 40%;
}
.background_box {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0%;
  z-index: 10;
}
.text_section {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 43%,
    rgba(46, 35, 27, 0) 100%
  );
  color: rgb(254, 255, 249);
  width: 100vw;
  height: 90vh;
  display: flex;
  position: sticky;
  top: 0%;
  z-index: 1000;
  opacity: 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
}
.scrolldown_box {
  position: absolute;
  bottom: 1%;
  left: 43%;
  width: 100vw;
  height: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  color: #fff;
}
a#scroll-btn {
  height: 1rem;
  width: 1rem;
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
.scrolldown_text {
  font-size: 1rem;
  color: #fff;
}

/* Mobile styles */
@media (max-width: 768px) {
  .img_logo {
    width: 80%; /* Increase the width for smaller devices */
  }

  .text_section {
    font-size: 0.8rem; /* Adjust the font size for smaller screens */
    padding: 10px; /* Add padding to prevent text from touching the screen edges */
  }

  /* You can adjust other styles as well */
}

/* You may also add media queries for different screen sizes */
@media (max-width: 480px) {
  .img_logo {
    width: 90%; /* Further increase width for very small devices */
  }

  .text_section {
    font-size: 0.7rem; /* Make the font even smaller */
  }

  /* Adjust padding, margins, and other properties as needed */
}

/* Styles for the Next Page button */
.next-page-btn {
  border: 2px solid white; /* Change as per your design */
  border-radius: 5px; /* Optional, for rounded corners */
  padding: 10px 20px; /* Adjust the padding */
  color: white; /* Text color */
  font-weight: bold; /* Optional, for bold text */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.next-page-btn:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Slight background on hover */
}

/* Styles for the right arrow */
.right-arrow {
  display: inline-block;
  margin-left: 5px;
  transition: transform 0.3s ease; /* Animation for the arrow */
}

/* Animation on hover */
.next-page-btn:hover .right-arrow {
  transform: translateX(5px); /* Moves the arrow to the right */
}

/* Keyframe animation for the arrow symbol */
@keyframes arrow-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.right-arrow {
  animation: arrow-blink 1s infinite; /* Apply the animation to the arrow */
}
</style>
