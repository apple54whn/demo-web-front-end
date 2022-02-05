import { createApp } from 'vue'
import App from './03_自定义指令/03_生命周期和参数-修饰符.vue'
import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'

const app = createApp(App)

registerDirectives(app)

app.use(pluginObject)
app.use(pluginFunction)

// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log("focus mounted");
//     el.focus();
//   }
// })

app.mount('#app')
