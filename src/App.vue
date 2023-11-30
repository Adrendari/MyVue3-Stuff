<template>
  <v-container id="app" class="ma-5 pa-5">
    <h1 style="color: steelblue; margin-bottom: 1em">My Vue 3 Playground</h1>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="panelTitle">
          DataTable
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <template>
            <DataTable />
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
});
</script>
