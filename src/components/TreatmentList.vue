<template>
  <div>
    <info></info>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Treatment</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <treatment v-bind:toggle="SettingsStore.settings[0].status" v-bind:treatment="SettingsStore.settings[0].name" v-bind:dropdown="SettingsStore.settings[0].customType"></treatment>
      </tbody>
    </table>
  </div>
</template>

<script>
import Treatment from "./Treatment.vue"
import Info from "./Info.vue"
import SettingsStore from "./../stores/SettingsStore.js"
var TreatmentList = {
  name: "treatment-list",
  components: {
    "info": Info,
    "treatment": Treatment
  },
  data: function() {
    return {
      SettingsStore: SettingsStore
    }
  }
}
export default TreatmentList;
</script>
