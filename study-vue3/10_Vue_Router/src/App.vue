<template>
  <div>
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">{{ props.href }}</button>
      <button @click="props.navigate">哈哈哈</button>
      <span :class="{ active: props.isActive }">{{ props.isActive }}</span>
      <span :class="{ active: props.isExactActive }">{{
        props.isExactActive
      }}</span>
      <!-- <p>{{props.route}}</p> -->
    </router-link>
    <br />
    <!-- <router-link to="/home">Home</router-link> | -->
    <router-link to="/about">About</router-link> |
    <router-link to="/user/conanan/id/10086">User</router-link> |
    <router-link to="/notfound/aa/bb/cc">NotFound</router-link> |
    <router-link to="/login">登录</router-link> |
    <button @click="jumpToAbout">查看我！</button>
    <button @click="back">←</button>
    <button @click="forword">→</button>

    <br />
    <router-link to="/category">分类</router-link>

    <router-view v-slot="props">
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
    <!-- <router-view /> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const jumpToAbout = () => {
  router.push({
    path: '/about',
    query: {
      q1: 'qa1',
    },
  })
}

const forword = () => {
  router.go(1)
  // 其他方法就不介绍了
}

const back = () => {
  router.go(-1)
}
</script>

<style>
.router-link-active {
  color: red;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
