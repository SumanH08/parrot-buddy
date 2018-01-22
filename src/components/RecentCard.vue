<template>
  <div>
    <!-- <p>{{date}} {{dayExists}} {{dayType}} {{activeLevel}} {{treatment}} {{notes}}
    </p> -->
    <div v-on:click="expandLevel1">
      <i class="fa fa-question-circle" aria-hidden="true"></i>
      <span>How was your {{date}}?</span>
    </div>
    <div v-if="isExpanded">
      <table class="table">
        <tbody>
          <tr>
            <td><i class="fa fa-smile-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-meh-o" aria-hidden="true"></i></td>
            <td><i class="fa fa-frown-o" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td v-on:click="expandLevel2">Good</td>
            <td>Okay</i></td>
            <td>Bad</td>
          </tr>
        </tbody>
      </table>
      <div v-if="isMoodSelected">
        <p>Were your activities affected?</p>
        <table class="table">
          <tbody>
            <tr>
              <td><i class="fa fa-battery-full" aria-hidden="true"></i></td>
              <td><i class="fa fa-battery-half" aria-hidden="true"></i></td>
              <td><i class="fa fa-battery-empty" aria-hidden="true"></i></td>
            </tr>
            <tr>
              <td>No</td>
              <td>Slowed Down</i></td>
              <td>Missed Actitivies</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
var RecentCard = {
  name: "recent-card",
  props: ["date", "dayExists", "dayType", "activeLevel", "treatment", "notes"],
  data: function(){
    return {
      isExpanded : false,
      isMoodSelected: false
    }
  },
  methods: {
    expandLevel1: function(){
      this.isExpanded = true;
      console.log(this.dayType);
    },
    expandLevel2: function(){
      this.isMoodSelected = true;
    }
  }
}

export default RecentCard;
</script>
