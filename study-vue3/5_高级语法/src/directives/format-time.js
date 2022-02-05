import dayjs from 'dayjs'

export default function (app) {
  app.directive('format-time', {
    created(el, bindings) {
      bindings.formatString = 'YYYY-MM-DD HH:mm:ss'
      if (bindings.value) {
        bindings.formatString = bindings.value
      }
    },
    // 都放入 mounted 也一样！
    mounted(el, bindings) {
      const textContent = el.textContent
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format(bindings.formatString)
    },
  })
}
