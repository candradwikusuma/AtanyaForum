import Vue from "vue";
import VueRouter from "vue-router";
import MainContent from "../containers/MainContent.vue";
// import Pertanyaan from "../views/Pertanyaan.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // redirect: "/pertanyaan",
    name: "Home",
    component: MainContent,
    // children: [
    //   {
    //     path: "/pertanyaan",
    //     name: "pertanyaan",
    //     component: Pertanyaan,
    //   },
    // ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
