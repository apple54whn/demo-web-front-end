<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link :to="'/user/'+user.id">User</router-link>|
      <router-link :to="{path: '/profile', query: {name: 'conanan', age: 18}}">Profile</router-link>

      <!-- 当然也可以使用 router-link 和 tag 来实现。但是必须有 to 属性，所以自己斟酌使用场景。这里 button 也不会添加 class -->
      <!-- <button @click="goHome">Home</button>
      <button @click="goAbout">About</button>
      <button @click="goProfile">Profile</button>-->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        id: 10001
      }
    }
  },
  methods: {
    goHome() {
      // vue-router 给所有组件都添加了 $router 属性。还有replace方法！
      console.log(this.$route)
      // 不判断，则第二次点击同一路由报错
      if (this.$route.path !== '/home') {
        this.$router.push('/home')
      }
    },
    goAbout() {
      if (this.$route.path !== '/about') {
        this.$router.push('/about')
      }
    },
    goProfile() {
      if (this.$route.path !== '/profile') {
        this.$router.push({
          path: '/profile',
          // query: { name: 'conanan', age: 18 }
          query: {
            user: {
              name: 'conanan',
              age: 25
            }
          }
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
