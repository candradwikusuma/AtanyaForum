import Vue from "vue";
import Vuetify from "vuetify/lib";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey.lighten5, // #E53935
        secondary: colors.blueGrey.lighten5, // #FFCDD2
        accent: "#0091EA",
      },
    },
  },
});
