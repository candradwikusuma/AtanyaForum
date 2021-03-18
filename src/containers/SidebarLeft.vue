<template>
  <v-navigation-drawer floating clipped app>
    <v-card flat class="rounded-lg ">
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="accent">
          <v-list-item v-for="(item, i) in menuItems" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    name: "Sidabar",
    selectedItem: 0,
    menuItems: [
      { text: "Pertanyaan", icon: "mdi-forum-outline" },
      { text: "Tag", icon: "mdi-tag-outline" },
      { text: "Users", icon: "mdi-account-multiple-outline" },
      { text: "Blogs", icon: "mdi-book-outline" },
      { text: "Event", icon: "mdi-calendar-text" },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
