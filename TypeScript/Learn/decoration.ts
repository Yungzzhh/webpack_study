// 装饰器：一种特殊类型的声明，能够被附加到类声明、方法、属性或参数上，可以修改类的行为
function addNameEat(constructor: Function) {
  constructor.prototype.name = "hello";
  constructor.prototype.eat = function () {
    console.log("eat");
  };
}
@addNameEat
class Personal {
  name!: string; //!用于表示类型推断排除null、undefined
  eat!: Function;
  constructor() {}
}
let p3: Personal = new Personal();
// console.log(p3.name);
// p3.eat();
console.log(p3);

