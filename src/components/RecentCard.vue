<template>
<div class="recent">
  <div v-if="!isExpanded">
    <div class="logged-card row" v-if="dayExists" v-on:click="expandCard">
      <div class="col-sm-2">
        <div v-if="dayType == 'Good'" class="good-mood" v-html=dayTypeEmoji[dayType]></div>
        <div v-else-if="dayType == 'Okay'" class="okay-mood" v-html=dayTypeEmoji[dayType]></div>
        <div v-else="dayType == 'Mig'" class="bad-mood" v-html=dayTypeEmoji[dayType]></div>
      </div>
      <div class="col-sm-10">
        <p style="margin: 6px;">{{ date | moment("dddd, MMMM D") }}</p>
        <div class="activity-level-div">
          <div v-if="activeLevelLabel[activeLevel] == 'Active'" class="logged-full">{{activeLevelLabel[activeLevel]}}</div>
          <div v-else-if="activeLevelLabel[activeLevel] == 'Slower'" class="logged-half">{{activeLevelLabel[activeLevel]}}</div>
          <div v-else="activeLevelLabel[activeLevel] == 'Missed'" class="logged-missed">{{activeLevelLabel[activeLevel]}}</div>
        </div>
        <span class="treatmentSelected" v-for="item in this.treatmentSelected">{{item}}</span>
      </div>
    </div>

    <div class="logged-card unlogged-card" v-else v-on:click="expandCard">
      <i class="fa fa-question-circle fa-1x" aria-hidden="true"></i>
      <span>How was your {{date}}?</span>
    </div>
  </div>
  <div class="logged-card" v-if="isExpanded">
    <div class="ask-how">How was your {{ date | moment("dddd, MMMM Do") }}?</div>
    <table class="table">
      <tbody>
        <tr>
          <td v-on:click="selectMood('Good')"><i class="fa fa-smile-o fa-3x" aria-hidden="true" v-bind:class="moodSelected == 'Good' ? 'good-mood' : ''"></i></td>
          <td v-on:click="selectMood('Okay')" ><i class="fa fa-meh-o fa-3x" aria-hidden="true"  v-bind:class="moodSelected == 'Okay' ? 'okay-mood' : ''"></i></td>
          <td v-on:click="selectMood('Mig')" ><i class="fa fa-frown-o fa-3x" aria-hidden="true"  v-bind:class="moodSelected == 'Mig' ? 'bad-mood' : ''"></i></td>
        </tr>
        <tr>
          <td v-on:click="selectMood('Good')" v-bind:class="moodSelected == 'Good' ? 'good-mood' : ''">Good</td>
          <td v-on:click="selectMood('Okay')" v-bind:class="moodSelected == 'Okay' ? 'okay-mood' : ''">Okay</td>
          <td v-on:click="selectMood('Mig')" v-bind:class="moodSelected == 'Mig' ? 'bad-mood' : ''">Mig</td>
        </tr>
      </tbody>
    </table>
    <div v-if="moodSelected">
      <p>Were your activities affected?</p>
      <table class="table">
        <tbody>
          <tr>
            <td v-on:click="setActivityLevel('Full')" v-bind:class="activeLevelSelected == 'Full' ? 'good-mood' : ''"><i class="fa fa-battery-full fa-3x" aria-hidden="true"></i></td>
            <td v-on:click="setActivityLevel('Half')" v-bind:class="activeLevelSelected == 'Half' ? 'okay-mood' : ''"><i class="fa fa-battery-half fa-3x" aria-hidden="true"></i></td>
            <td v-on:click="setActivityLevel('None')" v-bind:class="activeLevelSelected == 'None' ? 'bad-mood'  : ''"><i class="fa fa-battery-empty fa-3x" aria-hidden="true"></i></td>
          </tr>
          <tr>
            <td v-on:click="setActivityLevel('Full')" v-bind:class="activeLevelSelected == 'Full' ? 'good-mood' : ''">No</td>
            <td v-on:click="setActivityLevel('Half')" v-bind:class="activeLevelSelected == 'Half' ? 'okay-mood' : ''">Slowed Down</i>
            </td>
            <td v-on:click="setActivityLevel('None')" v-bind:class="activeLevelSelected == 'None' ? 'bad-mood'  : ''">Missed Actitivies</td>
          </tr>
        </tbody>
      </table>
      <p>Treatment(s) Used </p>
      <span v-if="!showAll" class="treatmentSelected" v-for="item in this.treatment">{{item}}</span>
      <span class="treatmentSelected" v-for="item in this.SettingsStore.settings" v-if="item.status && !showAll">{{item.name}}</span>
      <div v-on:click="showAllExpand()"><span v-if="!showAllClicked">Show All...</span><span class="treatmentSelected" v-if="showAll" v-for="item in SettingsStore.settings" v-on:click="selectTreatment(item.name)" v-bind:class="highlightTreatmentSelected(item.name)">{{item.name}}</span></div>
      <div><textarea v-model="message" rows="4" cols="50">Enter text here...</textarea></div>
      <div>
        <button v-on:click="done"><i class="fa fa-star" aria-hidden="true"></i>Done!</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SettingsStore from "./../stores/SettingsStore.js"
import RecentStore from "./../stores/RecentStore.js"

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
      showAll: false,
      showAllClicked: false,
      activeLevelLabel: {
        'Full': 'Active',
        'Half': 'Slower',
        'None': 'Missed'
      },
      dayTypeEmoji: {
        'Good': '<i class="fa fa-smile-o fa-3x" aria-hidden="true"></i>',
        'Okay': '<i class="fa fa-meh-o fa-3x" aria-hidden="true">',
        'Mig': '<i class="fa fa-frown-o fa-3x" aria-hidden="true"></i>'
      },
      SettingsStore: SettingsStore
    }
  },
  created: function() {
    console.log("Virtual DOM created");
    this.moodSelected = this.dayType;
    this.activeLevelSelected = this.activeLevel;
    this.treatmentSelected = this.treatment;
    this.message = this.notes;
  },
  methods: {
    expandCard: function() {
      this.isExpanded = true;
    },
    selectMood: function(mood) {
      this.moodSelected = mood;
      console.log(mood);
    },
    setActivityLevel: function(activeLevelSelected) {
      this.activeLevelSelected = activeLevelSelected;
      console.log(activeLevelSelected);
    },
    showAllExpand: function() {
      console.log("This is showall");
          this.showAll = true;
          this.showAllClicked = true;
    },
    selectTreatment: function(treatmentSelected) {
      console.log("treatmentSelected");
      console.log(treatmentSelected);
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
    done: function() {
      var treatmentObj = {};
      treatmentObj = {
        moodSelected: this.moodSelected,
        activeLevelSelected: this.activeLevelSelected,
        treatmentSelected: this.treatmentSelected,
        message: this.message
      }
      RecentStore.putRecentToAPI(treatmentObj);
      this.$toasted.show("Changes to " + this.date + " are saved");
      console.log("This is my tt obj");
      console.log(treatmentObj);
      this.isExpanded = false;
    }
  }
}

export default RecentCard;
</script>

<style>
td {
  width: 100px;
  text-align: center;
}

button {
  color: white;
  background-color: #52E0D1;
  border-color: #52E0D1;
  border-radius: 6px;
  margin: 3px;
  padding: 6px 12px 6px 12px;
  cursor: pointer;
}

button i {
  color: #FBD751;
  padding: 0 6px 0 0;
}
.recent {
  color: white;
}

.good-mood {
  color:  #A5D4DC;
}

.okay-mood {
  color: #FBD751;
}

.bad-mood {
  color: #F09F5A;
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
  display: inline-block;
  color: white;
  background-color: #37586C;
  border-radius: 6px;
  margin: 0 3px 3px 3px;
  padding: 6px 12px 6px 12px;
}

.highlightTreatment {
  color: red;
}

.removeTreatment {
  color: grey;
}

.logged-card {
  background-color: #323C4A;
  margin: 12px;
  padding: 12px;
  border: 1px solid #585F66;
  border-radius: 6px;
  cursor: pointer;
}
.unlogged-card {
  background-color: #3A4A5A !important;
  color: #BAC1C6;
  text-align: center;
}

.logged-full {
  background-color: #A5D4DC;
  border-radius: 6px;
  margin: 6px;
}
.logged-half {
  background-color: #F09F5A;
  border-radius: 6px;
  margin: 6px;
}
.logged-missed {
  background-color: #FBD751;
  border-radius: 6px;
  margin: 6px;
}

.activity-level-div {
  text-align: center;
}
.ask-how {
  text-align: center;
}

</style>
