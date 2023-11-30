<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="locations"
    show-select
  >
    <!-- <template v-slot:[`item.isAdmin`]="props">
      <v-edit-dialog :return-value.sync="props.item.isAdmin" persistent>
        <template v-slot:input>
          <v-select :item="props.item.isAdmin" :items="adminOptions" />
        </template>
      </v-edit-dialog>
    </template> -->
  </v-data-table>
</template>

<script>
import sampleData from "@/constants/sample-data";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DataTable",
  setup() {
    const singleSelect = false;
    const selected = ref([]);
    const headers = ref(sampleData.locationHeaders);
    const locations = ref(sampleData.agencyLocations);
    const adminOptions = [true, false];

    return {
      adminOptions,
      headers,
      locations,
      selected,
      singleSelect,
    };
  },
});
</script>
