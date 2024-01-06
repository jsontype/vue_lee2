import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import Start from "./views/Start.vue";
import Movies from "/src/views/Movies.vue";
import Account from "/src/views/Account.vue";
import Todo from "/src/views/Todo.vue";

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Start,
  //   meta: { layout: "empty" },
  // },
  {
    path: "/movie",
    name: "Movie App",
    component: Movies,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
