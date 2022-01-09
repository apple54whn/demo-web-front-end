var ModuleB = (function () {
  var name = "bbb";
  console.log(ModuleA.name);
  console.log(ModuleA.flag);
  console.log(ModuleA.sum(1, 2));

  console.log("bbbbbb comoe on");

  var obj = {};
  obj.name = name;

  return obj;
})();
