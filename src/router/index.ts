import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Money from "@/views/Money.vue";
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue"
import newIcon from '../components/Labels/newIcon.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/money'
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/labels",
    component: Labels,
  },
  {
    path:'/statistics',
    component: Statistics
  },
  {
    path:'/newIcon',
    component:newIcon
  },
  {
    path:'*',
    component:NotFound
  }
];

const router = new VueRouter({
  routes,
});

export default router;
