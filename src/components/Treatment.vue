<template>
  <tr>
    <td><input type="checkbox" checked data-toggle="toggle" data-on=""></td>
    <td>Maxalt</td>
    <td>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Rescue Med
    <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a href="#">Relief</a></li>
          <li><a href="#">Preventive</a></li>
          <li><a href="#">Others</a></li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
var Treatment = {
  name: "treatment"
}
export default Treatment;
</script>
