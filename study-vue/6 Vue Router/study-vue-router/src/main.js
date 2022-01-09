import Vue from "vue";
import App from "./App.vue";
// 导入，./router 是一个目录，会自动导入 index 文件
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
