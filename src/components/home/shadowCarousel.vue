<template>
  <div>
    <v-carousel
      delimiter-icon="mdi-radiobox-marked"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="100%"
      class="custom"
      v-model="model"
    >
      <router-link :to="{ name: 'sob' }">
        <v-carousel-item
          v-for="(item, i) in carouselItems"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </router-link>
    </v-carousel>
    <v-toolbar elevation="0" color="transparent">
      <v-spacer />
      <v-btn
        icon
        v-for="(btn, j) in carouselItems"
        :key="j"
        color="transparent"
        @click="model = j"
      >
        <v-icon
          :color="model == j ? '#a4b5ff' : 'white'"
          x-small
          style="transform: rotate(45deg)"
        >
          mdi-vector-combine
        </v-icon>
      </v-btn>
      <v-spacer />
    </v-toolbar>

    <v-carousel
      delimiter-icon="mdi-radiobox-marked"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="100%"
      class="custom"
      v-model="model"
      style="transform: scaleY(-1); opacity: 0.5"
    >
      <v-carousel-item
        v-for="(item, i) in carouselShadowItems"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: ["carouselItems", "carouselShadowItems"],
  components: {},
  data() {
    return { model: 0 };
  },
  methods: {},
  computed: {},
};
</script>

<style>
.custom .v-carousel__controls__item.v-btn {
  color: white;
}
.custom .v-carousel__controls__item.v-btn.v-btn--active {
  color: red;
}

.custom .v-carousel__controls__item.v-btn:hover:before {
  opacity: 0;
}
.custom .v-carousel__controls__item.v-btn.v-btn--active:before {
  opacity: 0;
}
</style>
