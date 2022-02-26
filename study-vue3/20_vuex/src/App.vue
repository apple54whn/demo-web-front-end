<template>
  <div>
    <Home />
    <h2>App:{{ store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Home from './pages/Home.vue'
const store = useStore()

const increment = () => {
  store.commit('increment')
}

const decrement = () => {
  store.commit('decrement')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
