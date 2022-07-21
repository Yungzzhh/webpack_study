// 定义一个类的时候,会得到 2 个类型
// 一个是构造函数类型的函数类型(当做普通构造函数的类型) 
// 另一个是类的实例类型（代表实例）
class Person {
  name!: string; //如果初始属性没赋值就需要加上!
  constructor(_name: string) {
    this.name = _name;
  }
  getName(): void {
    console.log(this.name);
  }
}
let p1 = new Person("hello");
// p1.getName();

// 通过存取器来改变一个类中属性的读取和赋值行为
class User {
  // readonly 修饰的变量只能在构造函数中初始化 TypeScript 的类型
  // 系统同样也允许将 interface、type、 class 上的属性标识为 readonly 
  // readonly 实际上只是在编译阶段进行代码检查。
  public readonly height: string; 
  // public 类里面 子类 其它任何地方外边都可以访问
  myname: string; // public myname: string;
  // protected 类里面 子类 都可以访问,其它任何地方不能访问
  protected sex: string;
  // private 类里面可以访问，子类和其它任何地方都不可以访问
  private host: string;
  constructor(myname: string, height: string, sex: string, host: string) {
    this.myname = myname;
    this.height = height;
    this.sex = sex
    this.host = host
  }
  get name() {
    return this.myname;
  }
  set name(value) {
    console.log(`set value: ${value}`);
    this.myname = value;
  }
  changeName(height: string) {
    // this.height = height //ts报错
  }
  print() {
    console.log(this.host);
  }
  
}

class Student extends User {
  no: number
  constructor(myname: string, height: string, sex: string, host: string, no: number) {
    super(myname, height, sex, host) //继承得到的属性需要全部写入
    this.no = no
  }
  static car: string = 'bwm'
  static getCar(): void {
    //注意静态方法里面的this指向的是类本身 而不是类的实例对象 所以静态方法里面只能访问类的静态属性和方法
    console.log(this.car);
    
  }
  changeHeight(height: string) {
    // this.height = height //继承得来的属性如果是只读属性的话，这个属性也是只读的
  }
  print() {
    // console.log(this.host);// err: host is a private varible
  }
}
const dad = new User("Jack", "180", "male", "2234")
const son = new Student("tom", "170", "female", "123", 123) //子类在继承父类属性并进行实例化时，不会触发相应的set方法，但重新赋值就会
// console.log(s2.host); //err: 属性“host”为私有属性，只能在类“User”中访问
// dad.print() // 2234

// console.log(Student.car);
// console.log(son.car); // err
// Student.getCar()

// 抽象类和抽象方法
// 抽象类：无法被实例化，只能被继承且无法创建抽象类的实例
// 抽象方法：只能出现在抽象类中并且抽象方法不能在抽象类中被具体实现,只能在抽象类的子类中实现（必须要实现）
abstract class Animal {
  name!: string
  abstract speak(): void
}
class Cat extends Animal {
  // 必须要实现speak()
  speak(): void {
    console.log('喵喵喵');
  }
}
class Dog extends Animal {
  speak(): void {
    console.log('汪汪汪');
  }
}
// const animal = new Animal() //err 
let cat = new Cat()
let dog = new Dog()
let animal: Animal[] = [dog, cat]
animal.forEach(i=> i.speak())
// cat.speak()

export {}