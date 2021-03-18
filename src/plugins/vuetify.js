import Vue from "vue";
import Vuetify from "vuetify/lib";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: "sm", // This is equivalent to a value of 960
  },

  theme: {
    themes: {
      light: {
        primary: "#FFFFFF",
        secondary: colors.blueGrey.lighten5, // #FFCDD2
        accent: "#0091EA",
      },
    },
  },
});
