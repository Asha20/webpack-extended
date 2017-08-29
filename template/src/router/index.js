import VueRouter from "vue-router";
import Vue from "vue";


Vue.use(VueRouter);

function view(name) {
  return require("@/views/" + name + ".vue");
}

const routes = [
  {
    path: "/",
    component: view("Home")
  }
];

export default new VueRouter({
  routes
});