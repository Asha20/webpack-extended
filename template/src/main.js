import Vue from "vue";
{{#if vueRouter}}
import router from "./router";
{{else}}
import App from "./App.vue";
{{/if}}
{{#vuex}}
import store from "./store";
{{/vuex}}


new Vue({
  el: "#app",
  {{#if vueRouter}}
  router,
  {{else}}
  render: h => h(App),
  {{/if}}
  {{#vuex}}
  store,
  {{/vuex}}
});
