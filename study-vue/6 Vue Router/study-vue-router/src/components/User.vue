<template>
  <div>
    <h1>User</h1>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id
    }
  }
}
</script>

<style>
</style>