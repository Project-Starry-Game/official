<template>
  <div>
    <v-card-title class="Noto">
      <v-btn color="transparent" dark text to="/" elevation="0">
        <v-img :src="contents.logo" width="150" />
      </v-btn>

      <v-btn
        text
        small
        color="primary"
        elevation="0"
        v-for="(item, index) in contents.items"
        :key="index"
        :to="item.url"
      >
        <span class="text--secondary">
          {{ item.name }}
        </span>
      </v-btn>
      <v-spacer />
    </v-card-title>
  </div>
</template>

<script>
export default {
  props: ["contents"],
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
