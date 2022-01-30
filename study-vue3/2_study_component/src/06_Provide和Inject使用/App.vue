<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import Home from './Home.vue'
import { computed } from 'vue'

export default {
  components: {
    Home,
  },
  // provide 对象中的 this 为 undefined，
  // 为了绑定 Vue 实例，可以使用类似 data 函数一样的方式实现
  // provide: { name: 'why' },
  provide() {
    return {
      name: 'why',
      age: 18,
      // length 需要在 name 的长度变化时改变，可以使用计算属性，computed 返回的是 ref 对象，需要 .value 获取值
      length: computed(() => this.names.length), // ref对象 .value
    }
  },
  data() {
    return {
      names: ['abc', 'cba', 'nba'],
    }
  },
  methods: {
    addName() {
      this.names.push('why')
      console.log(this.names)
    },
  },
}
</script>

<style scoped></style>
