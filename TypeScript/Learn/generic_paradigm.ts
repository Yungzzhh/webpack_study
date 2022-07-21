// 泛型参数的默认类型
function createArr<T = string>(len: number, val: T): Array<T> {
  let res: T[] = []
  for(let i=0;i<len;i++) {
    res[i] = val
  }
  return res
}
// console.log(createArr<string>(4,"x"));

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// swap([7, "seven"]); // ['seven', 7]

// 泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 只允许这个函数传入那些包含 length 属性的变量。
// loggingIdentity(function test(a:any,b:any,c:any) {
//   let d =a=b=c
//   return d
// })

// 泛型接口
interface Cart<T> {
  list: T[];
}
let cart: Cart<{ name: string; price: number }> = {
  list: [{ name: "hello", price: 10 }],
};
// console.log(cart.list[0].name, cart.list[0].price);

// 泛型类
class MyArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value);
  }
  getMax(): T {
    let result = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] > result) {
        result = this.list[i];
      }
    }
    return result;
  }
}
let arr = new MyArray();
arr.add(1);
arr.add(2);
arr.add(3);
let ret = arr.getMax();
// console.log(ret);

// 泛型类型别名
type Carts<T> = { list: T[] } | T[];
let c1: Carts<string> = { list: ["1"] };
let c2: Carts<number> = [1];


export {}