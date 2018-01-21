<template>
  <div>
    <tabs :options="{ useUrlFragment: false }">
       <tab name="Recent">
           <recent></recent>
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
import Recent from "./Recent.vue"
var Master = {
  name: "master",
  components: {
    "Settings": Settings,
    "Recent": Recent
  }
}
export default Master;
</script>
