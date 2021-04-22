<template>
  <v-container>
    <div style="display: block; height: 120px"></div>
    <v-row justify="center" align="center">
      <v-card color="transparent" width="220%">
        <carousel
          :carouselItems="carouselItems"
          :carouselShadowItems="carouselShadowItems"
        />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import carousel from "@/components/home/shadowCarousel.vue";
export default {
  props: ["carouselItems", "carouselShadowItems"],
  components: { carousel },
  data() {
    return {
      model: 0,
    };
  },
  methods: {
    setModel(val) {
      this.model = val;
    },
  },
  computed: {
    modelNext() {
      return (this.model + 1) % this.carouselItems.length;
    },
  },
};
</script>
