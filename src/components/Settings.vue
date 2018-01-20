<template>
  <div>
    Settings component
    <feedback></feedback>
    <info></info>
    <treatment></treatment>
  </div>
</template>

<script>
import Feedback from "./Feedback.vue"
import TreatmentList from "./TreatmentList.vue"
import Treatment from "./Treatment.vue"
import Info from "./Info.vue"
import SettingsStore from "./../stores/SettingsStore.js"

export default {
  name: 'Settings',
  components: {
    "feedback": Feedback,
    "treatment-list": TreatmentList,
    "info": Info,
    "treatment": Treatment
  },
  data () {
    return {
      SettingsStore: SettingsStore
    }
  }
}
</script>
