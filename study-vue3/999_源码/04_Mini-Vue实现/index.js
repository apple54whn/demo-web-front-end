function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMounted = false
      let oldVNode = null

      watchEffect(function () {
        if (!isMounted) {
          // 第一次进入需要 mount 挂载
          oldVNode = rootComponent.render()
          mount(oldVNode, container)
          isMounted = true
        } else {
          // 非第一次进入需要 patch 更新
          const newVNode = rootComponent.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    },
  }
}
