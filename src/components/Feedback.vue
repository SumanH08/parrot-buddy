<template>
<div>
    <div class="feedback-card row">
      <!-- <div class="col-sm-3"></div> -->
      <div class="col-sm"><i class="fa fa-comment-o fa-3x" aria-hidden="true"></i></div>
      <div class="col-sm"><span>Have some feedback for us?<br><a href="#">Tap here</a> to drop us a note!</span></div>
      <!-- <div class="col-sm-3"></div> -->
    </div>
  <div class="input-group">
    <i class="fa fa-caret-down" aria-hidden="true"></i></span>Edit Your Treatment Shortcuts
  </div>
</div>
</template>

<script>
var Feedback = {
  name: "feedback"
}
export default Feedback;
</script>


<style>
.feedback-card {
  margin: auto;
  text-align: center;
  border-radius: 6px;
  border: 1.5px solid;
  border-color: #365468;
  background-color: #37586C;
  color: white;
  padding: 12px;
}

.feedback-card a {
  color: #56D4C7;
}

.input-group {
  padding: 12px 0 12px 0;
  color: white;
}

.input-group i {
  padding: 0 12px 0 12px;
}
</style>
