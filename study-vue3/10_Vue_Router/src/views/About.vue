<template>
  <div>
    <h2>About</h2>
    <div>{{ route.query.q1 }}</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped></style>
