<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <!-- <MainBar></MainBar> -->
    <SidebarLeft></SidebarLeft>

    <v-content class="secondary">
      <v-row no-gutters>
        <v-col class="d-flex d-sm-none" sm="12">
          <MainBar></MainBar>
        </v-col>
        <v-col md="9" sm="12">
          <MainContent></MainContent>
        </v-col>
        <v-col md="3" class="d-none d-sm-flex">
          <SidebarRight></SidebarRight>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "./containers/NavigationBar";
import SidebarLeft from "./containers/SidebarLeft";
import SidebarRight from "./containers/SidebarRight";
import MainContent from "./containers/MainContent.vue";
import MainBar from "./components/MainBar.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    NavigationBar,
    SidebarLeft,
    SidebarRight,
    MainContent,
    MainBar,
  },
};
</script>
