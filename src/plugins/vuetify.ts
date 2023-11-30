import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

// import alert from '@/plugins/vuetify/alert';
// import disabled from '@/plugins/vuetify/disabled';
// import error from '@/plugins/vuetify/error';
import main from "@/plugins/vuetify/main";

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "main",
    themes: {
      //   alert,
      //   disabled,
      //   error,
      main,
    },
  },
});

// export enum ThemeName {
//   Alert = 'alert',
//   Disabled = 'disabled',
//   Error = 'error',
//   Main = 'main'
// }
