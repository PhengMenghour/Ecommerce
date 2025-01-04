import { createApp } from "vue";
import App from "./App.vue";

import router from "./router"; // Import router (if used)
import store from "./store"; // Import Vuex store (if used)

createApp(App)
  .use(router) // Initialize Vue Router
  .use(store)  // Initialize Vuex
  .mount("#app"); // Mount app to #app in index.html