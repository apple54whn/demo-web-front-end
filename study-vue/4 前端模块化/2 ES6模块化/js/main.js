// 都可以使用 as 起别名（default导入的直接就可以自定义名称，且导入的只有一个）
import plus, {
  formatDate as format,
  DAY_OF_YEAR as DAY,
  Person,
} from "./utils.js";

// 统一全部导入
import * as poem from "./poem.js";

console.log(DAY);

console.log(format(new Date()));

const student = new Person("张三", 13);
student.say();

plus(1, 2);

console.log(poem.AUTUMN);
