<template>
  <v-timeline dense>
    <v-slide-x-reverse-transition group hide-on-leave>
      <v-timeline-item
        v-for="(item, index) in gameContents"
        :key="index"
        small
        color="secondary"
      >
        <router-link :to="{ name: item.router }">
          <div @click="click(item)">
            <h2 class="white--text text-center">
              {{ item.title }}
            </h2>
            <h5 v-if="item.subtitle" class="white--text text-center">
              {{ item.subtitle }}
            </h5>
          </div>
          <v-img :src="item.src" @click="click(item)"></v-img>
        </router-link>
      </v-timeline-item>
    </v-slide-x-reverse-transition>
  </v-timeline>
</template>

<script>
export default {
  props: ["gameContents"],
  components: {},
  data() {
    return {};
  },
  methods: {
    click(val) {
      if (val.router == null) {
        this.removeA(this.gameContents, val);
      }
    },
    removeA(arr) {
      var what,
        a = arguments,
        L = a.length,
        ax;
      while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
          arr.splice(ax, 1);
        }
      }
      return arr;
    },
  },
};
</script>
