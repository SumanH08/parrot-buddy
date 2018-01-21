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
        <treatment v-for="item in SettingsStore.settings" v-bind:toggle="item.status" v-bind:treatment="item.name" v-bind:dropdown="item.customType" v-bind:key="item.name"></treatment>
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
