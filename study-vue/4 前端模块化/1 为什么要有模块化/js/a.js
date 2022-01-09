var ModuleA = (function () {
  var name = "aaa";
  var flag = true;
  var sum = function (num1, num2) {
    return num1 + num2;
  };

  var obj = {};
  obj.name = name;
  obj.flag = flag;
  obj.sum = sum;

  return obj;
})();
