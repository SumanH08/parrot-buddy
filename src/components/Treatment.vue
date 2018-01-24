<template>
<tr>
  <td>
    <div class="main">
      <toggle-button :color="{checked: '#52E0D1', unchecked: '#2C343E'}" :value="toggle" :sync="true" v-on:change="updateToggle" />
    </div>
  </td>
  <td>{{treatment}}</td>
  <td>
    <div class="dropdown">
      <select @change="updateDropdown">
      <option v-bind:selected="dropdown == 'relief'? true : false" value="relief">relief</option>
      <option v-bind:selected="dropdown == 'preventative'? true : false" value="preventative">preventative</option>
      <option v-bind:selected="dropdown == 'rescue'? true : false" value="rescue">rescue</option>
      <option v-bind:selected="dropdown == 'others'? true : false" value="others">others</option>
    </select>
    </div>
  </td>
</tr>
</template>

<script>
import SettingsStore from "./../stores/SettingsStore"
var Treatment = {
  name: "treatment",
  props: ["toggle", "treatment", "dropdown"],
  methods: {
    updateToggle: function(val){
      var settingsObj = {
        status: val.value,
        name: this.treatment,
        customType: this.dropdown
      }
      SettingsStore.putSettingsToAPI(settingsObj);
    },
    updateDropdown: function(val) {
      var settingsUpdateObj = {
        name: this.treatment,
        customType: val.target.value
      }
      SettingsStore.putSettingsToAPI(settingsUpdateObj);
    }
  }
}
export default Treatment;
</script>
<!--
<style>

</style> -->
