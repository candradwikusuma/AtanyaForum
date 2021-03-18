<template>
  <v-app>
    <NavigationBar></NavigationBar>

    <SidebarLeft></SidebarLeft>

    <v-content class="secondary">
      <v-row no-gutters>
        <!-- <v-col class="d-flex d-md-none" fixed app>
         
        </v-col> -->
        <v-col lg="9" md="12" sm="12">
          <MainContent></MainContent>
        </v-col>

        <v-col lg="3" md="0" class="d-none d-lg-flex">
          <SidebarRight></SidebarRight>
        </v-col>
      </v-row>
    </v-content>
    <NavigatioBarOption class="d-flex d-md-none"></NavigatioBarOption>
  </v-app>
</template>

<script>
import NavigationBar from "./containers/NavigationBar";
import SidebarLeft from "./containers/SidebarLeft";
import SidebarRight from "./containers/SidebarRight";
import MainContent from "./containers/MainContent.vue";
import NavigatioBarOption from "./components/NavigationBarOption.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    NavigationBar,
    SidebarLeft,
    SidebarRight,
    MainContent,
    NavigatioBarOption,
  },
};
</script>
