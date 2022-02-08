<template>
  <h2>User: {{ route.params.username }} - {{ route.params.id }}</h2>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
console.log('router', router)

const route = useRoute()
const params = route.params
console.log('params', params)

const query = route.query
console.log('query', query)

// 这种方法获取到是 undefiend，很尴尬。不知道原因在哪
// import { getCurrentInstance } from 'vue'
// const { ctx } = getCurrentInstance()
// console.log(ctx.$router)
// console.log(ctx.$route)

// 在 options api 中直接调用如下：
// this.$route.params 即可
// this.$route.query 即可
// this.$router
</script>

<style lang="scss" scoped></style>
