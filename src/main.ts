import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import CategoryPage from "./pages/CategoryPage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  {
    path: "/phim-bo",
    component: CategoryPage,
    name: "phim-bo",
  },
  {
    path: "/tv-shows",
    component: CategoryPage,
    name: "tv-shows",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
