function forEach(array, callback = function (item, index) { }) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    // 这里注意第一个参数为指定的函数上下文，后俩才是callback参数
    callback.call(element, element, index)
  }
}

const arr = [
  { type: 'dog' },
  { type: 'cat' },
  { type: 'bird' }
]

forEach(arr, function (item, index) {
  console.log(index + '===' + item.type);
  // 此时的 this 为 call 显示指定的当前遍历的元素
  console.log(this === arr[index]);

})

forEach(arr, item => {
  console.log(item.type);
})


