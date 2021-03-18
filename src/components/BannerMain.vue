<template>
  <div>
    <div class="px-3 pt-2 pb-3">
      <v-row>
        <v-col md="12" v-for="(banner, i) in itemBanner" :key="i">
          <v-card elevation="5" class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end bottom-gradient"
              height="250px"
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
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerMain",
  data: () => ({
    itemBanner: [
      {
        judul: "Lomba matematika tingkat nasional",
        picture: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        lazy: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        author: "candra",
      },
      //   {
      //     judul: "Semninar Dalam rangka hari pendidikan nasional",
      //     picture: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      //     author: "dwi",
      //   },
      //   {
      //     judul: "Banner 3",
      //     picture: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      //     author: "kusuma",
      //   },
    ],
  }),
};
</script>
<style scoped>
.bottom-gradient {
  background-image: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
}
</style>
