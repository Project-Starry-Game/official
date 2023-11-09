<template>
  <v-app>
    <appbar />
    <v-main>
      <v-container>
        <!-- Video Row -->
        <v-row justify="center">
          <v-col cols="12" md="8" lg="8">
            <!-- This will ensure it takes the full width -->
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/mENwQl3MAL0?rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </v-col>
        </v-row>

        <!-- Textual Information Row -->
        <v-row justify="center">
          <v-col cols="12" md="8" lg="8">
            <v-card elevation="0" color="transparent">
              <v-card-title>Soul of Butterflies: Incubation</v-card-title>
              <v-card-subtitle>
                Genre:
                <span v-for="(genre, index) in genres" :key="index">{{
                  genre
                }}</span>
              </v-card-subtitle>
              <v-card-text>
                "Soul of Butterflies: Incubation" is a point-and-click adventure
                game with a unique worldview. Players will take on the role of
                Anders and explore an extremely enigmatic world. Amidst
                indescribable struggles and fears, they will gradually piece
                together the truth of this world.
              </v-card-text>
              <v-card-title> Background story </v-card-title>
              <v-card-text>
                In the "Republic of Darkcone," a country that has experienced
                multiple changes in political power, the people continue to
                suffer from the ravages of war. At this time, an outbreak of a
                mysterious infectious disease has once again thrust them into
                the brink of survival. <br /><br />The protagonist of the story
                is named "Anders." In order to raise the necessary medical funds
                for his ailing sister "Nara," he accepts a mysterious job
                invitation from the "Butterfly Inn." Little does he know that
                his inner struggles and fears will become a significant test
                before he embarks on an irreversible adventure…
              </v-card-text>
            </v-card>

            <v-card elevation="0" color="transparent">
              <v-card-title>Platforms</v-card-title>
              <v-btn
                tag="a"
                :href="platform.url"
                target="_blank"
                color="transparent"
                text="true"
                class="platform-button"
                v-for="(platform, index) in platforms"
                :key="index"
              >
                <img :src="platform.img" :alt="platform.name + ' Logo'" />
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <!-- Carousel Row -->
        <v-row justify="center">
          <v-col cols="12" md="8" lg="8">
            <carousel />
          </v-col>
        </v-row>
      </v-container>
      <v-footer fixed color="transparent">
        <v-row justify="center">
          <v-col cols="12" md="8" lg="8">
            <v-card-subtitle>
              contact@projectstarry.com | &copy; Project Starry 2023. All rights
              reserved.
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import appbar from "@/components/About/appbar.vue";
import carousel from "@/components/About/carousel.vue";
import footer from "@/components/About/footer.vue";

import steamLogo from "@/assets/SteamLogo.png";
import itchLogo from "@/assets/itchLogo.png";
// Script setup block
</script>

<script lang="ts">
export default {
  data() {
    return {
      platforms: [
        {
          name: "Steam",
          url: "https://store.steampowered.com/app/2391350/Soul_of_Butterflies_Incubation/",
          img: steamLogo,
        },
        {
          name: "itch.io",
          url: "https://project-starry.itch.io/soul-of-butterflies-incubation",
          img: itchLogo,
        },
        // Add more platforms as necessary
      ],
      genres: ["Puzzle, ", "Room Escape"],
    };
  },
  mounted() {},
};
</script>

<style scoped>
.v-card-title,
.v-card-subtitle,
.v-card-text {
  text-align: left; /* Aligns text to the left */
}

iframe {
  margin-bottom: 20px; /* Spacing below the iframe */
}

/* The following style ensures that the .v-col width is consistent across all elements */
.v-col {
  max-width: 100%;
}

/* You can remove any unnecessary styles that are not being used */
</style>
<style scoped>
/* Container for iframe to maintain 16:9 aspect ratio */
.video-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

/* Responsive iframe with absolute positioning to fill the container */
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 600px) {
  /* Adjust for xs screens */
  .video-container {
    padding-top: 56.25%;
  }
}

.platform-button {
  padding: 0; /* Remove padding if not needed */
  display: inline-flex; /* Aligns the button content in the center */
  justify-content: center;
  align-items: center;
  text-decoration: none; /* In case you want to remove underline from anchor tags */
}

/* Style for the image inside the button */
.platform-button img {
  max-height: 40px; /* or any size you want */
  max-width: 100%; /* to ensure it doesn't stretch beyond the button */
}

.v-footer {
  /* inherit the max-width from a variable or directly */
  max-width: var(--footer-max-width, 1200px);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
