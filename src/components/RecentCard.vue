<template>
  <div>
    <p>{{date}} {{dayExists}} {{dayType}} {{activeLevel}} {{treatment}} {{notes}}
    </p>
  </div>
</template>

<script>
var RecentCard = {
  name: "recent-card",
  props: ["date", "dayExists", "dayType", "activeLevel", "treatment", "notes"]
}

export default RecentCard;
</script>
