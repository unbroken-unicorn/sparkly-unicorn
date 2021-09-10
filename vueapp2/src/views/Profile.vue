<template>
  <div class="profile">
    <h3>Profile Info</h3>
    <br>
    <span>
    {{ this.$route.params.username }}
    </span>
    <br>
    <span>
    {{ this.$route.params }}
    </span>
  </div>
</template>