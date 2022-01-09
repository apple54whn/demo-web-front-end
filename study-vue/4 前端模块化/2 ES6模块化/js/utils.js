// 导出方式1:直接写在 变量、函数、类等之前（不推荐）
/**
 * 每年的天数
 */
export const DAY_OF_YEAR = 365;

/**
 * 格式化时间
 * @param {Date} date
 */
function formatDate(date) {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  }`;
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log("姓名：" + this.name + "，年龄：" + this.age);
  }
}

function add(num1, num2) {
  console.log(num1 + "+" + num2 + "=" + (num1 + num2));
}

// 导出方式2（推荐）
export { formatDate, Person };

// default导出，也可以直接写在变量、函数、类等之前（不推荐）
export default add;
