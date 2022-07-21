//接口可以用来描述`对象的形状`
interface Speakable {
  speak(): void
  readonly lng?: string
  name?: string 
  [propName: string]: any //在定义接口的时候无法预先知道有哪些属性的时候,可以使用 [propName:string]:any
}
let speakMan = {
  name: "tom",
  age:10
  // lng: "jerry"
  // age: 1111 //err:多了
}
// console.log(speakMan);

interface Eatable {
  eat(): void
}
//接口可以在面向对象编程中表示为行为的抽象
class PersonBehavior implements Speakable, Eatable {
  // lng: string
  // constructor(lng: string) {
  //   this.lng = lng
  // }
  speak(): void {
    console.log('say sth');
  }
  eat(): void {
    console.log('eat sth');
  }
}

interface discount {
  (price: number): number;
}
let cost: discount = function (price: number): number {
  return price * 0.8;
};

// 构造函数的类型接口
// 使用特殊的 new()关键字来描述类的构造函数类型
// 这样的用法一般出现在 当我们需要把一个类作为参数的时候
// 我们需要对传入的类的构造函数类型进行约束 所以需要使用 new 关键字代表是类的构造函数类型 用以和普通函数进行区分
class Animal2 {
  constructor(public name: string) {}
}
//不加new是修饰函数的,加new是修饰类的
interface WithNameClass {
  new (name: string): Animal2;
}
function createAnimal(clazz: WithNameClass, name: string) {
  return new clazz(name);
}
let a = createAnimal(Animal2, "hello");
// console.log(a.name);



export {}