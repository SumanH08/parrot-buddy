<template>
<div>
  <!-- <p>{{date}} {{dayExists}} {{dayType}} {{activeLevel}} {{treatment}} {{notes}}
    </p> -->
  <div v-on:click="expandCard">
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
          <td v-on:click="selectMood('Good')" v-bind:class="moodSelected == 'Good' ? 'good-mood' : ''">Good</td>
          <td v-on:click="selectMood('Okay')" v-bind:class="moodSelected == 'Okay' ? 'okay-mood' : ''">Okay</td>
          <td v-on:click="selectMood('Bad')" v-bind:class="moodSelected == 'Bad' ? 'bad-mood' : ''">Bad</td>
        </tr>
      </tbody>
    </table>
    <div v-if="moodSelected">
      <p>Were your activities affected?</p>
      <table class="table">
        <tbody>
          <tr>
            <td v-on:click="setActivityLevel('Full')" v-bind:class="activeLevelSelected == 'Full' ? 'activeLevelFull' : ''"><i class="fa fa-battery-full" aria-hidden="true"></i></td>
            <td v-on:click="setActivityLevel('Half')" v-bind:class="activeLevelSelected == 'Half' ? 'activeLevelHalf' : ''"><i class="fa fa-battery-half" aria-hidden="true"></i></td>
            <td v-on:click="setActivityLevel('None')" v-bind:class="activeLevelSelected == 'None' ? 'activeLevelNone' : ''"><i class="fa fa-battery-empty" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td>No</td>
            <td>Slowed Down</i>
            </td>
            <td>Missed Actitivies</td>
          </tr>
        </tbody>
      </table>
      <button v-for="item in SettingsStore.settings" v-on:click="selectTreatment(item.name)" v-bind:class="highlightTreatmentSelected(item.name)">{{item.name}}</button>
      <div><textarea v-model="message" rows="4" cols="50">Enter text here...</textarea></div>
      <div>
        <button v-on:click="done">Done</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SettingsStore from "./../stores/SettingsStore.js"

var RecentCard = {
  name: "recent-card",
  props: ["date", "dayExists", "dayType", "activeLevel", "treatment", "notes"],
  data: function() {
    return {
      isExpanded: false,
      moodSelected: null,
      activeLevelSelected: "Full",
      treatmentSelected: [],
      message: "",
      SettingsStore: SettingsStore
    }
  },
  methods: {
    expandCard: function() {
      this.isExpanded = true;
      console.log(this.dayType);
    },
    selectMood: function(mood) {
      this.moodSelected = mood;
      console.log(mood);
    },
    setActivityLevel: function(activeLevelSelected) {
      this.activeLevelSelected = activeLevelSelected;
      console.log(activeLevelSelected);
    },
    selectTreatment: function(treatmentSelected) {
      if (this.treatmentSelected.indexOf(treatmentSelected) < 0) {
        this.treatmentSelected.push(treatmentSelected);
        console.log("pushed into array");
      } else {
        var index = this.treatmentSelected.indexOf(treatmentSelected);
        this.treatmentSelected.splice(index, 1);
        console.log("removed from the array");
      }

    },
    highlightTreatmentSelected: function(treatmentSelected) {
      return this.treatmentSelected.indexOf(treatmentSelected) > -1 ? "highlightTreatment" : "removeTreatment";
    },
    done: function(){
      var treatmentObj = {};
      treatmentObj = {
        moodSelected: this.moodSelected,
        activeLevelSelected: this.activeLevelSelected,
        treatmentSelected: this.treatmentSelected,
        message: this.message
      }
      this.$toasted.show("Changes to " + this.date + " are saved");
      console.log(treatmentObj);
    }
  }
}

export default RecentCard;
</script>

<style>
.good-mood {
  color: green;
}

.okay-mood {
  color: blue;
}

.bad-mood {
  color: yellow;
}

.activeLevelFull {
  color: red;
}

.activeLevelHalf {
  color: pink;
}

.activeLevelNone {
  color: purple;
}

.treatmentSelected {
  color: orange;
}

.highlightTreatment {
  color: red;
}

.removeTreatment {
  color: grey;
}
</style>
