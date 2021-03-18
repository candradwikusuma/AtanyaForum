<template>
  <div>
    <v-row>
      <div>
        <v-app-bar
          fixed
          flat
          app
          class="white"
          outlined
          clipped-left
          clipped-right
        >
          <div class="d-flex align-center">
            <v-img
              src="../assets/logo-horizontal.png"
              alt="logo"
              height="30"
              width="100"
            ></v-img>
          </div>
          <v-spacer></v-spacer>

          <v-text-field
            solo
            label="Cari Tag nya dong"
            clearable
            dense
            flat
            hide-details
            background-color="#ECEFF1"
            prepend-inner-icon="mdi-magnify"
            class="d-none d-sm-flex"
          ></v-text-field>
          <!-- <v-text-field
        v-model="myModel"
        label="My Text"
        :class="{ red: myModel.someBool }"
      ></v-text-field> -->

          <v-spacer></v-spacer>

          <v-menu bottom min-width="200px" rounded offset-y nudge-bottom="11">
            <template v-slot:activator="{ on }">
              <v-btn depressed medium v-on="on" small>
                level.0
              </v-btn>
            </template>

            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <span class="white--text headline">{{
                      user.initials
                    }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    Edit Account
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    Disconnect
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>

          <v-menu bottom min-width="200px" rounded offset-y nudge-bottom="5">
            <template v-slot:activator="{ on }">
              <v-btn icon medium v-on="on" class="">
                <v-icon color="grey">mdi-bell-outline</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <span class="white--text headline">{{
                      user.initials
                    }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    Edit Account
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    Disconnect
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
          <v-menu bottom min-width="150px" rounded offset-y nudge-bottom="13">
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="d-flex d-sm-none"
              ></v-app-bar-nav-icon>

              <v-chip pill v-on="on" class="white d-none d-sm-flex">
                <v-avatar left>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-avatar>
                John Leider
              </v-chip>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <span class="white--text headline">{{
                      user.initials
                    }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    Edit Account
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    Disconnect
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
          <MainBar></MainBar>
        </v-app-bar>
        <v-card></v-card>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <!-- <v-toolbar dark color="info">
        <v-btn icon dark @click.native="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-text-field
          hide-details
          append-icon="mdi-microphone"
          flat
          autofocus
          dense
          prepend-inner-icon="mdi-magnify"
          v-model="keyword"
          @input="doSearch"
        ></v-text-field>
      </v-toolbar> -->
      </div>
    </v-row>

    <v-row> </v-row>
  </div>
</template>

<script>
export default {
  // components: {
  //   MainBar,
  // },
  data: () => ({
    drawer: false,
    group: null,
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped></style>
