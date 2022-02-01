<template>
  <div>
    <h2 ref="title">{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Home',
    }
  },
  methods: {
    changeMessage() {
      this.message = '你好啊, 李银河'
    },
  },
  // beforeCreate() {
  //   console.log("home beforeCreate");
  // },
  // created() {
  //   console.log("home created");
  // },
  // beforeMount() {
  //   console.log("home beforeMount");
  // },
  // mounted() {
  //   console.log("home mounted");
  // },
  // beforeUnmount() {
  //   console.log("home beforeUnmount");
  // },
  // unmounted() {
  //   console.log("home unmounted");
  // },
  // beforeUpdate() {
  //   console.log(this.$refs.title.innerHTML);
  //   console.log("home beforeUpdate");
  // },
  // updated() {
  //   console.log(this.$refs.title.innerHTML);
  //   console.log("home updated");
  // }
  beforeCreate() {
    console.log(
      '[beforeCreate]: after init events & lifecycle。事件绑定、生命周期函数等。即 Vue 应用生成之前，Vue.createApp',
      '。root innerHTML: ',
      document.getElementById('root').innerHTML // 空
    )
  },
  created() {
    console.log(
      '[created]: after init injections & reactivity。依赖注入、响应式（数据双向绑定）等。即 Vue 应用生成之后，Vue.createApp',
      '。root innerHTML: ',
      document.getElementById('root').innerHTML // 空
    )
  },
  // 组件中有 template 则编译为 render 函数，没有则使用 mount 挂载的 el DOM 元素作为 template 进行编译
  beforeMount() {
    console.log(
      '[beforeMount]: template（或 el） 的 innerHtml 被编译成render函数后。或称为组件被渲染到页面前。app.mount()',
      '。root innerHTML: ',
      document.getElementById('root').innerHTML // 空，此时没有任何内容！
    )
  },
  mounted() {
    console.log(
      '[mounted]: after Create app.$el and replace "el" with it。 组件被渲染到页面后。此时页面的所有数据都可以正常展示!!!app.mount()',
      '。root innerHTML: ',
      document.getElementById('root').innerHTML // <div>1</div>
    )
  },
  beforeUpdate() {
    // 执行 vm.counter ++ 改变了 data 中数据即可
    console.log(
      '[beforeUpdate]: when data change, before Virtual DOM re-rendered and patch。即 data 变化，且页面重新渲染前执行',
      '。root innerHTML: ',
      document.getElementById('root').innerHTML // <div>1</div>
    )
  },
  updated() {
    // 执行 vm.counter ++ 改变了 data 中数据即可
    console.log(
      '[updated]: when data change, after Virtual DOM re-rendered and patch。即 data 变化，且页面重新渲染后执行',
      '。root innerHTML: ',

      document.getElementById('root').innerHTML // <div>2</div>
    )
  },
  beforeUnmount() {
    console.log(
      '[beforeUnmount]: when app.unmount() is called。即 Vue 应用失效时，类比 beforeMount',
      '。root innerHTML: ',
      document.getElementById('root').innerHTML // <div>2</div>
    )
  },
  unmounted() {
    console.log(
      '[unmounted]: when app.unmount() is called。即 Vue 应用失效，且 DOM 完全销毁之后，类比 mounted',
      '。root innerHTML: ',
      document.getElementById('root').innerHTML // 空
    )
  },
}
</script>

<style scoped></style>
