<template>
  <div>
    <v-row v-if="cols" justify="center" align="start">
      <v-col v-for="(array, i) in datas" :key="i" :cols="cols">
        <v-timeline reverse>
          <v-timeline-item
            v-for="(item, j) in array"
            :key="j"
            color="secondary"
            small
            icon="mdi-eye"
          >
            <v-card-title
              class="text-center pa-0 ma-0"
              style="white-space: nowrap"
            >
              {{ item.job }}
              <small v-if="item.subjob"> | {{ item.subjob }}</small>
            </v-card-title>
            <v-img :src="item.src"></v-img>
            <v-card-subtitle
              style="white-space: nowrap"
              class="text-center pa-0 ma-0"
              v-for="p in item.profile"
              :key="p"
            >
              <br />{{ p }}<br />
            </v-card-subtitle>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["cols", "stuffDatas", "lines"],
  data() {
    return {
      datas: [],
    };
  },
  components: {},
  computed: {},
  mounted() {
    let lines = this.lines;
    let length = this.stuffDatas.length;
    let step = length / lines;
    for (let i = 0; i < lines; i++) {
      let array = [];
      for (let j = i * step; j < i * step + step; j++) {
        array.push(this.stuffDatas[j]);
      }
      this.datas.push(array);
    }
  },
};
</script>
