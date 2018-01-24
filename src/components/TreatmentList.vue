<template>
  <div class="settings">
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
import Info from "./info.vue"
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

<style>
.settings {
  background-color: #37586C;
  color: white;
  border: 1px solid;
  border-color: #37586C;
  border-radius: 12px;
}

.table th {
  border-top: None;
}

.table thead th {
  border-bottom: None;
}

.table td {
  border-top: 0.1px solid rgba(255,255,255,.25);
}
</style>
