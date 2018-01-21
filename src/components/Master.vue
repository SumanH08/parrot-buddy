<template>
  <div>
    <tabs :options="{ useUrlFragment: false }">
       <tab name="Recent">
           Recent content
       </tab>
       <tab name="Trends" :is-disabled="true">
           Trends content
       </tab>
       <tab name="Settings">
           <settings></settings>
       </tab>
   </tabs>
  </div>
</template>

<script>
import Settings from "./Settings.vue"
var Master = {
  name: "master",
  components: {
    "Settings": Settings
  }
}
export default Master;
</script>
