<template>
  <div>
    <h2 ref="title">哈哈哈</h2>

    <h2 v-for="item of 3" :key="item" :ref="setH2Refs">{{ item }}</h2>
  </div>
</template>

<script>
import { ref, watchEffect, onBeforeUpdate } from 'vue'

export default {
  setup() {
    // 单个 ref
    const title = ref(null)

    watchEffect(
      () => {
        console.log(title.value)
        console.log(h2Refs)
      },
      {
        flush: 'post',
      }
    )

    // v-for 中 ref
    let h2Refs = []
    // DOM 被更新之前被调用
    onBeforeUpdate(() => {
      h2Refs = []
    })
    const setH2Refs = (el) => {
      if (el) h2Refs.push(el)
    }

    return {
      title,
      setH2Refs,
    }
  },
}
</script>

<style scoped></style>
