import { App } from "vue";

import DataTable from "./DataTable.vue";

export const registerComponents = (app: App<Element>): void => {
  app.component("DataTable", DataTable);
};

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    DataTable: typeof DataTable;
  }
}
