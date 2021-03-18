<template>
  <div>
    <div class="d-flex justify-space-between">
      <span class="headline mt-5 ml-5 font-weight-bold" outlined tile>
        Event
      </span>
      <v-btn class="mt-6  " elevation="0" text small>
        See all event <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <div>
      <v-slide-group
        v-model="model"
        class="pt-1 px-2 mb-5"
        active-class="success"
      >
        <v-slide-item v-for="(banner, i) in itemBanner" :key="i" class="flex">
          <!-- <v-card class="ma-1" height="100" width="250"> </v-card> -->
          <v-card
            elevation="2"
            class="mx-2 justify-space-around"
            :aspect-ratio="16 / 9"
            :width="width"
          >
            <v-img
              class="white--text align-end bottom-gradient  "
              height="200px"
              :src="banner.picture"
              :lazy-src="banner.lazy"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <div class="fill-height bottom-gradient">
                <v-card-title
                  max
                  class="d-inline-block subtitle-1 text-justify text-truncate"
                  style="max-width: 220px;"
                  >{{ banner.judul }}</v-card-title
                >
                <v-card-subtitle class="white--text caption"
                  >Post by.{{ banner.author }}</v-card-subtitle
                >
              </div>
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    width: 220,
    itemBanner: [
      {
        judul: "Lomba matematika tingkat nasional",
        picture: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        lazy: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        author: "candra",
      },
      {
        judul: "Semninar Dalam rangka hari pendidikan nasional",
        picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        author: "dwi",
      },
      {
        judul: "Banner 3",
        picture: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        author: "kusuma",
      },
    ],
  }),
};
</script>
