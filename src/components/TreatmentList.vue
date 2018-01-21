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
        <treatment></treatment>
      </tbody>
    </table>
  </div>
</template>

<script>
import Treatment from "./Treatment.vue"
import Info from "./Info.vue"
var TreatmentList = {
  name: "treatment-list",
  components: {
    "info": Info,
    "treatment": Treatment
  }
}
export default TreatmentList;
</script>
