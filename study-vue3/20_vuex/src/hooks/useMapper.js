import { computed } from 'vue'
import { useStore } from 'vuex'

export function useMapper(mapper, mapFn) {
  // 拿到store独享
  const store = useStore()

  // 获取到对应的对象的functions: {name: function, age: function}
  const storeStateFns = mapFn(mapper)
  console.log('storeStateFns', storeStateFns)

  // 对数据进行转换
  const storeInfo = {}
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store })
    storeInfo[fnKey] = computed(fn)
  })
  console.log('storeInfo', storeInfo)

  return storeInfo
}
