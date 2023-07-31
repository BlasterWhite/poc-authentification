import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.view.vue";
import Docs from "./views/Docs.view.vue";
import Contact from "./views/Contact.view.vue";
import Login from "./views/Login.view.vue";
import Register from "./views/Register.view.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/docs",
    component: Docs,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
