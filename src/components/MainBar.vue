<template>
  <v-tabs color="primary" fixed-tabs icons-and-text>
    <v-tab href="#tab-1" class="accent--text">
      Tanya
      <v-icon color="accent">mdi-phone</v-icon>
    </v-tab>

    <v-tab href="#tab-2" class="accent--text">
      Tags
      <v-icon color="accent" class="accent--text">mdi-heart</v-icon>
    </v-tab>

    <v-tab href="#tab-3" class="accent--text">
      Users
      <v-icon color="accent">mdi-account-box</v-icon>
    </v-tab>
    <v-tab href="#tab-3" class="accent--text">
      blogs
      <v-icon color="accent">mdi-account-box</v-icon>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
