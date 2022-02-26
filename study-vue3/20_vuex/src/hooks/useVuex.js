import { computed } from 'vue'
import {
  useStore,
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
  createNamespacedHelpers,
} from 'vuex'

export function useState(moduleName, mapper) {
  let mapperFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  }
  return useMapper(mapper, mapperFn, 'computed')
}

export function useGetters(moduleName, mapper) {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  }
  return useMapper(mapper, mapperFn, 'computed')
}

export function useMutations(moduleName, mapper) {
  let mapperFn = mapMutations
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations
  }
  return useMapper(mapper, mapperFn, 'function')
}

export function useActions(moduleName, mapper) {
  let mapperFn = mapActions
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions
  }
  return useMapper(mapper, mapperFn, 'function')
}

export function useMapper(mapper, mapFn, type) {
  // 拿到store独享
  const store = useStore()

  // 获取到对应的对象的functions: {name: function, age: function}
  const storeFns = mapFn(mapper)

  // 对数据进行转换
  const storeInfo = {}
  Object.keys(storeFns).forEach((fnKey) => {
    const fn = storeFns[fnKey].bind({ $store: store })
    storeInfo[fnKey] = type === 'computed' ? computed(fn) : fn
  })

  return storeInfo
}
