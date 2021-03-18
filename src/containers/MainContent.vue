<template>
  <div>
    <!-- <BannerMain></BannerMain> -->
    <Carousel></Carousel>
    <div class="px-2 pt-3">
      <v-card
        class=" mb-3 rounded"
        max-width
        outlined
        v-for="(item, i) in itemPertanyaan"
        :key="i"
      >
        <v-list-item three-line>
          <v-list-item-content color="">
            <div class=" mb-4">
              {{ item.judul }}
            </div>
            <!-- <v-list-item-title class="headline mb-1">
              Headline 5
            </v-list-item-title> -->
            <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="50" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            class="rounded-lg white--text"
            small
            depressed
            color="light-blue"
          >
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
// import BannerMain from "../components/BannerMain";
import Carousel from "../components/Carousel";

export default {
  components: {
    // BannerMain,
    Carousel,
  },
  data: () => ({
    name: "Main",

    itemPertanyaan: [
      {
        judul: "Apakah Kamus bisa membuat mejadi pintar bahaasa?",
        subtitle: "Ini adalah fakta ketika kamus belajar kamus",
      },
      {
        judul:
          "Bagaimana cara deteksi koneksi internet on / off di VueJs NuxtJs",
        subtitle:
          "Bagaimana cara deteksi koneksi internet on / off di VueJs NuxtJs ?? saya ingin jika koneksi internet mati maka memunculkan alert no internet connection , jika ada internet maka bisa get data melalui API endpoint yang sudah di tuju",
      },
      {
        judul: "Path My Document dengan PHP",
        subtitle:
          "Mohon bantuaannya..bagaimana caranya menentukan path/directory my Documents menggunakan PHP. Jadi misalkan ada file yg telah di download..di letakan di my document tiap user.jd secara otomatis file yg terdownload ada di my documents mereka.terimaksih ",
      },
      {
        judul:
          "Bagaimana cara mengatasi 'Uncaught ReferenceError: berhasil is not defined' pada AJAX dan Jquery",
        subtitle:
          "Data berhasil diolah atau diupload namun untuk menangkap responnya 'berhasil' malah jadi 'berhasil is not defined'Saya sudah mengotak atik letak pemanggilan jquery nya tapi tetap saja dan saya juga ganti response nya tetap error.",
      },
      {
        judul: "Path My Document dengan PHP",
        subtitle:
          "Mohon bantuaannya..bagaimana caranya menentukan path/directory my Documents menggunakan PHP. Jadi misalkan ada file yg telah di download..di letakan di my document tiap user.jd secara otomatis file yg terdownload ada di my documents mereka.terimaksih ",
      },
    ],
  }),
};
</script>
