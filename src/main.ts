import { createApp } from "vue";
import "./style.css";
import router from "./router.ts";
import { Quasar } from "quasar";
import App from "./App.vue";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

createApp(App)
  .use(router)
  .use(Quasar, {
    plugins: {},
  })
  .mount("#app");
