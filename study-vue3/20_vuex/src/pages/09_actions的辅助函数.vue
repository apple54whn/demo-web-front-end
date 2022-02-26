<template>
  <div>
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <hr />
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <hr />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { useActions } from '../hooks/useVuex'

export default {
  // methods: {
  //   ...mapActions(['incrementAction', 'decrementAction']),
  //   ...mapActions({
  //     add: 'incrementAction',
  //     sub: 'decrementAction',
  //   }),
  // },
  // setup() {
  //   const actions = useActions(['incrementAction', 'decrementAction'])
  //   const actions2 = useActions({
  //     add: 'incrementAction',
  //     sub: 'decrementAction',
  //   })
  //   console.log('actions', actions)
  //   console.log('actions2', actions2)
  //   return {
  //     ...actions,
  //     ...actions2,
  //   }
  // },
}
</script>

<script setup>
import { useActions } from '../hooks/useVuex'

const { incrementAction, decrementAction } = useActions([
  'incrementAction',
  'decrementAction',
])

const { add, sub } = useActions({
  add: 'incrementAction',
  sub: 'decrementAction',
})
</script>

<style scoped></style>
