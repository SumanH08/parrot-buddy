<template>
  <div>
    <feedback></feedback>
    <treatment-list></treatment-list>
  </div>
</template>

<script>
import Feedback from "./Feedback.vue"
import TreatmentList from "./TreatmentList.vue"
import SettingsStore from "./../stores/SettingsStore.js"

export default {
  name: 'Settings',
  components: {
    "feedback": Feedback,
    "treatment-list": TreatmentList,
  },
}
</script>
