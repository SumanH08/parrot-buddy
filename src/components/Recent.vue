<template>
  <div>
    <p>
      <recent-card v-for="item in RecentStore.recentItems" v-bind:date="item.date" v-bind:dayExists="item.dayExists" v-bind:dayType="item.dayType" v-bind:activeLevel="item.activeLevel" v-bind:treatment="item.treatment" v-bind:notes="item.notes"></recent-card>
    </p>
  </div>
</template>

<script>
import RecentStore from "./../stores/RecentStore.js"
import RecentCard from "./RecentCard.vue"

export default {
  name: 'recent',
  components: {
    "recent-card": RecentCard
  },
  data: function() {
    console.log("REcent store");
    return {
      RecentStore: RecentStore
    }
  }
}
</script>
