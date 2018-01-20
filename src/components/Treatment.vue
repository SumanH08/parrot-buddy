<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Treatment</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" checked data-toggle="toggle" data-on=""></td>
        <td>Maxalt</td>
        <td>Dropdown</td>
      </tr>
      <tr>
        <td><input type="checkbox" checked data-toggle="toggle" data-on=""></td>
        <td>Caffeine</td>
        <td>Dropdown</td>
      </tr>
      <tr>
        <td><input type="checkbox" checked data-toggle="toggle" data-on=""></td>
        <td>Cold Shower</td>
        <td>Dropdown</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
var Treatment = {
  name: "treatment"
}
export default Treatment;
</script>
