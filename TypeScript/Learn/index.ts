// 字符串类型
const str:string = 'hello'
// 布尔类型
const flag: boolean = true
// 数字类型
const num: number = 1

// 枚举类型
// 普通枚举
enum Color {
  RED,
  PINK,
  BLUE,
}
const pink: Color = Color.PINK
// console.log(pink);
// 字符串枚举
enum Color {
  REDS = "红色",
  PINKS = "粉色",
  BLUES = "",
}
const pinks: Color = Color.BLUES;
// console.log(pinks); 
// 常量枚举 它是使用 const 关键字修饰的枚举，常量枚举与普通枚举的区别是，整个枚举会在编译阶段被删除
const enum NormalEnum {
  RED,
  PINK,
  BLUE
}
const NormalColor:NormalEnum[] = [NormalEnum.RED, NormalEnum.BLUE, NormalEnum.PINK]
// console.log(NormalColor);

// 数组类型
const Num1: number[] = [1,2,3]
const Num2: Array<number> = [1,2,3]
// console.log(Num1);
//元组类型
const Tuple: [string, number] = ["1",1] //只有2个且类型需要对应，不可超过或减少
// console.log(Tuple);
// Symbol //在tsconfig.json中添加"lib": ["ES2015","DOM"],
const sym1 = Symbol("hello");
const sym2 = Symbol("hello");
// console.log(Symbol("hello") === Symbol("hello")); 
// any
const any1:any = {}
// console.log(any1);

// null 和 undefined
let u: undefined = undefined
let n: null = null

// unknown
let val: unknown
val = 1
val = "2"
val = []

// void类型
// 返回值为void类型
function voidFn(params: string): void {}

// never
// 表示用户无法达到的类型，是那些总是会抛出异常 | 根本不会有返回值的函数表达式 | 箭头函数表达式的返回值类型
function neverFn(): never {
  throw new Error("an error")
}

// BigInt lib加上ESNext.BigInt && "target": "ESNext"
const max1 = Number.MAX_SAFE_INTEGER; // 2**53-1
// console.log(max1 + 1 === max1 + 2); //true
const max2 = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(max2 + 1n === max2 + 2n); //false

// object,Object,{}    Object,{}表示原型类型和非原始类型的集合，允许赋值为非null和undefined的值(严格模式下)，object 只允许= {}

// 类型推论 定义时未赋值就会推论成 any 类型 如果定义的时候就赋值就能利用到类型推论
let inference
let count = 123

// 联合类型
let name2: string | number;
// console.log(name2.toString());
name2 = 1;
// console.log(name2.toFixed(2));
name2 = "hello";
// console.log(name2.length);

// 类型断言 告诉 ts 就按照断言的那个类型通过编译， 也可以 (<string>someValue) 但是jsx会报错
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
// 非空断言 在上下文中当类型检查器无法断定类型时 一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型
let flagForNull: null | undefined | string;
// flagForNull!.toString(); // ok
// flagForNull.toString(); // error

// 字面量类型 仅支持字符串、数字、布尔值
let flag1: "hello" = "hello";
let flag2: 1 = 1;
let flag3: true = true;

// 类型别名
type flagForOther = string | number;
function foo(value: flagForOther) {}

// 类型保护
// typeof
function double(input: string | number | boolean) {
  if (typeof input === "string") {
    return input + input;
  } else {
    if (typeof input === "number") {
      return input * 2;
    } else {
      return !input;
    }
  }
}
// interface
interface Bird {fly: number;}
interface Dog {leg: number;}
function getNumber(value: Bird | Dog) {
  if ("fly" in value) {
    return value.fly;
  }
  return value.leg;
}
// 自定义类型保护
function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}
function fn(x: string | object) {
  if (isObject(x)) {
    // ....
  } else {
    // .....
  }
}
export {}

