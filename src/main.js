import { createApp } from "vue";
import App from "./App.vue";

import router from "./router"; // Import router (if used)

createApp(App)
  .use(router) // Initialize Vue Router
  .mount("#app"); // Mount app to #app in index.html