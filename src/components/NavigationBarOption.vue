<template>
  <v-bottom-navigation app color="primary" grow :value="value">
    <v-btn href="#tab-1" class="accent--text">
      <v-icon color="accent">mdi-forum-outline</v-icon>
    </v-btn>

    <v-btn href="#tab-2" class="accent--text">
      <v-icon color="accent">mdi-tag-outline</v-icon>
    </v-btn>

    <v-btn href="#tab-3" class="accent--text">
      <v-icon color="accent">mdi-account-multiple-outline</v-icon>
    </v-btn>
    <v-btn href="#tab-4" class="accent--text">
      <v-icon color="accent">mdi-book-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({
    value: 1,
    tab: null,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
};
</script>
<style lang="scss">
@import "@/sass/variable.scss";
</style>
