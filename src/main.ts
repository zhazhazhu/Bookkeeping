import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagListModel from "./models/tagListModel";
const xxx = tagListModel.fetch()
tagListModel.init(xxx);

Vue.config.productionTip = false;

Vue.component("Nav", Nav); //引入全局Nav组件
Vue.component("Layout", Layout); //引入全局Layout组件
Vue.component("Icon", Icon); //引入全局Icon

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
