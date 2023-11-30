import { createApp } from "vue";

import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import pinia from "@/stores";

import { registerComponents } from "@/components/index";

const app = createApp(App).use(pinia).use(vuetify);

registerComponents(app);

app.mount("#app");
