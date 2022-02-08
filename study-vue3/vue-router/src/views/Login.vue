<template>
  <div>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const loginClick = () => {
  window.localStorage.setItem('token', 'why')

  router.push({
    path: '/home',
  })
}
</script>

<style scoped></style>
