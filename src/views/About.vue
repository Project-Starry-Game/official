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

        <v-row
          justify="center"
          v-for="(content, index) in contents"
          :key="index"
        >
          <v-col cols="12" md="8" lg="8">
            <v-card elevation="0" color="transparent">
              <v-card-title>{{ content.title }}</v-card-title>
              <v-card-subtitle>
                Genre:
                <span v-for="(genre, i) in parseTags(content.tags)" :key="i"
                  >{{ genre }},</span
                >
              </v-card-subtitle>
              <v-card-text v-html="content.body"></v-card-text>
              <v-col cols="6" v-if="index == 0">
                <v-img class="pa-0 ma-0" :src="houseImg"></v-img>
              </v-col>
            </v-card>
            <v-card elevation="0" color="transparent" v-if="index == 1">
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
            <carousel class="carousel-container" />
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="8">
            <v-card-title>Contact us</v-card-title>
            <contact></contact>
          </v-col>
        </v-row>
      </v-container>

      <v-footer fixed color="transparent">
        <v-row justify="center">
          <v-col cols="12" md="12" lg="8">
            <v-card-subtitle>
              <!-- <div>contact@projectstarry.com</div> -->
              <div>&copy; Project Starry 2023. All rights reserved.</div>
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import appbar from "@/components/About/appbar.vue";
import carousel from "@/components/About/carousel.vue";
import contact from "@/components/About/contact.vue";
import steamLogo from "@/assets/SteamLogo.png";
import itchLogo from "@/assets/itchLogo.png";
import applestore from "@/assets/AppleStore.svg";
import applestoreMac from "@/assets/AppleStoreMac.svg";
import house from "@/assets/House.png";

interface ContentData {
  title: string;
  body: string;
  tags: string;
}

export default defineComponent({
  data() {
    return {
      platforms: [
        {
          name: "Steam",
          url: "https://store.steampowered.com/app/2391350/Soul_of_Butterflies_Incubation/",
          img: steamLogo,
          disable: false,
        },
        {
          name: "itch.io",
          url: "https://project-starry.itch.io/soul-of-butterflies-incubation",
          img: itchLogo,
          disable: false,
        },
        {
          name: "Apple Store",
          url: "https://apps.apple.com/us/app/incubation/id6444002659",
          img: applestore,
          disable: true,
        },
        // Add more platforms as necessary
      ],
      houseImg: house,
    };
  },
  components: {
    appbar,
    carousel,
    contact,
  },
  setup() {
    const contents = ref<ContentData[]>([]);

    const fetchContent = async () => {
      try {
        const response = await fetch("/api/description");
        const data = await response.json();
        if (data.message === "success") {
          contents.value = data.data;
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    const parseTags = (tagsString: string) => {
      return tagsString ? tagsString.split(",") : [];
    };

    onMounted(fetchContent);

    return { contents, parseTags };
  },
});
</script>

<style scoped>
.v-card-title,
.v-card-subtitle,
.v-card-text {
  text-align: left; /* Aligns text to the left */
}

.content-wrapper {
  background-color: rgba(0, 0, 0, 0.7); /* Black with some opacity */
  padding: 20px; /* Adjust padding as needed */
  border-radius: 10px; /* Optional, for rounded corners */
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

@media (max-width: 600px) {
  .platform-button {
    margin: 10px; /* Adjust the value as needed */
  }
}

@media (max-width: 600px) {
  .carousel-container {
    position: relative;
    top: -50px;
  }
}

/* Style for the image inside the button */
.platform-button img {
  max-height: 40px; /* or any size you want */
  max-width: 90%; /* to ensure it doesn't stretch beyond the button */
}

.v-footer {
  /* inherit the max-width from a variable or directly */
  max-width: var(--footer-max-width, 1200px);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.grayed-out {
  filter: grayscale(100%);
}
</style>
