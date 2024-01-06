import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import Start from "./views/Start.vue";
import Movies from "/src/views/Movies.vue";
import Todo from "/src/views/Todo.vue";
import Counter from "/src/views/Counter.vue";
import Account from "/src/views/Account.vue";
import Start from "/src/views/Start.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Start,
  },
  {
    path: "/movie",
    name: "Movie App",
    component: Movies,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/404",
    name: "NotFound",
    component: Start,
    meta: { layout: "empty" },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
