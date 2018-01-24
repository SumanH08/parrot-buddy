<template>
<tr>
  <td>
    <div class="main">
      <toggle-button :color="{checked: '#52E0D1', unchecked: '#2C343E'}" :value="toggle" :sync="true" v-on:change="updateToggle" />
    </div>
  </td>
  <td>{{treatment}}</td>
  <td>
    <div class="dropdown select">
      <select @change="updateDropdown">
      <option v-bind:selected="dropdown == 'relief'? true : false" value="relief">Relief</option>
      <option v-bind:selected="dropdown == 'preventative'? true : false" value="preventative">Preventative</option>
      <option v-bind:selected="dropdown == 'rescue'? true : false" value="rescue">Rescue</option>
      <option v-bind:selected="dropdown == 'others'? true : false" value="others">Others</option>
    </select>
      <div class="select_arrow">
      </div>
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
    updateToggle: function(val) {
      var settingsObj = {
        status: val.value,
        name: this.treatment,
        customType: this.dropdown
      }
      SettingsStore.putSettingsToAPI(settingsObj);
      console.log(settingsObj.status);
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

<style>
.select {
  position: relative;
  display: inline-block;
  width: 100%;
}

.table td, .table th {
  vertical-align: middle !important;
}
.select select {
  font-family: 'Arial';
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 6px 12px;
  outline: 0;
  border: 0px solid #000000;
  border-radius: 6px;
  background: #E6E6E6;
  color: black;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select select::-ms-expand {
  display: none;
}

.select select:disabled {
  opacity: 0.5;
  pointer-events: none;
}

.select_arrow {
  position: absolute;
  top: 16px;
  right: 15px;
  width: 0;
  height: 0;
  color: black;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0px 5px;
  border-color: #000 transparent transparent transparent;
}

.select select:hover~.select_arrow,
.select select:focus~.select_arrow {
  border-top-color: #000000;
}

.select select:disabled~.select_arrow {
  border-top-color: #CCCCCC;
}
</style>
