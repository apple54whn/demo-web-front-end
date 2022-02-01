<template>
  <div>
    <my-slot-cpn>
      <!-- 注意，这里面会对 my-slot-cpn 中定义的 3 个插槽都写入 button-->
      <button>我是按钮</button>
    </my-slot-cpn>
    <hr />

    <!-- 注意，这里面会对 my-slot-cpn 中定义的 3 个插槽都写入 我是普通的文本-->
    <my-slot-cpn> 我是普通的文本 </my-slot-cpn>
    <hr />

    <my-slot-cpn>
      <!-- 注意，这里面会对 my-slot-cpn 中定义的 3 个插槽都写入 my-button 组件-->
      <my-button />
    </my-slot-cpn>
    <hr />

    <!-- 注意，这里面会对 my-slot-cpn 中定义的 3 个插槽启用默认值-->
    <my-slot-cpn />
    <hr />

    <!-- 插入了很多的内容 -->
    <my-slot-cpn>
      <!-- 注意，这里面会对 my-slot-cpn 中定义的 3 个插槽分别！！！插入如下3个元素！！！总共出现9个！！！-->
      <h2>哈哈哈</h2>
      <button>我是按钮</button>
      <strong>我是strong</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue'
import MyButton from './MyButton.vue'

export default {
  components: {
    MySlotCpn,
    MyButton,
  },
}
</script>

<style scoped></style>
