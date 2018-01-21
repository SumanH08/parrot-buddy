<template>
<tr>
  <td><input type="checkbox" v-bind:checked="toggle" data-toggle="toggle" data-on=""></td>
  <td>{{treatment}}</td>
  <td>
    <div class="dropdown">
      <select>
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
var Treatment = {
  name: "treatment",
  props: ["toggle", "treatment", "dropdown"]
}
export default Treatment;
</script>
