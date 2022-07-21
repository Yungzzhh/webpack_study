// 函数
// 定义 ？的参数必须是最后一个 默认参数可以直接先赋值 剩余参数
function hello(name: string,  method: string = "GET", age?: number, ...nums:number[]) {
  console.log("hello", name);
  console.log("method", method);
  return nums.reduce((val, item) => (val+=item),0)
}
console.log(hello("hahaha","POST",111,1,2,3,4));

// 表达式
type SumFunc = (x: number, y: number) => number;
let countNumber: SumFunc = function (a, b) {
  return a + b;
};
// 重载 给同一个函数提供多个函数类型定义
let obj: any = {};
function attr(val: string): void;
function attr(val: number): void;
function attr(val: any): void {
  if (typeof val === "string") {
    obj.name = val;
  } else {
    obj.age = val;
  }
}
attr("hahaha");
attr(9);
// attr(true); err
console.log(obj);
export {}