<template>
  <!-- <div class="container"> -->
  <div class="backdrop">
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
  <!-- </div> -->
</template>

<script>
import Settings from "./Settings.vue"
import Recent from "./Recent.vue"
import SettingsStore from "./../stores/SettingsStore"
import RecentStore from "./../stores/RecentStore"
var Master = {
  name: "master",
  components: {
    "Settings": Settings,
    "Recent": Recent
  },
  created: function() {
    SettingsStore.getSettingsFromAPI();
    RecentStore.getRecentFromAPI();
  }
}
export default Master;
</script>

<style>
.container {
  background-color: #48657C;
}

.backdrop {
  background-color: #48657C;
}
</style>
