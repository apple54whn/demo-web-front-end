<template>
  <div>
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <hr />
    <button @click="increment">+1</button>
    <button @click="add">+1</button>
    <button @click="decrement">-1</button>
    <button @click="increment_n({ n: 10 })">+10</button>
    <hr />
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
// import { useMutations } from '../hooks/useVuex'

// import { INCREMENT_N } from '../store/mutation-types'

// export default {
//   methods: {
//     ...mapMutations(['increment', 'decrement', INCREMENT_N]),
//     ...mapMutations({
//       add: 'increment',
//     }),
//   },
//   setup() {
//     console.log('11')
//     const mutations1 = useMutations(['increment', 'decrement', INCREMENT_N])
//     const mutations2 = useMutations({
//       add: 'increment',
//     })
//     return {
//       ...mutations1,
//       ...mutations2,
//     }
//   },
// }
</script>

<script setup>
import { useMutations } from '../hooks/useVuex'

import { INCREMENT_N } from '../store/mutation-types'

// 这里的解构只能用 increment_n 表示了，暂时没有其他办法
const { increment, decrement, increment_n } = useMutations([
  'increment',
  'decrement',
  INCREMENT_N,
])
const { add } = useMutations({
  add: 'increment',
})
</script>
