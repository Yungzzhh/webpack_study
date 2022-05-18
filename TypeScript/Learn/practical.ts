// typeof 关键词除了做类型保护 还可以从实现推出类型，
//先定义变量，再定义类型
let p12 = {
  name: "hello",
  age: 10,
  gender: "male",
};
type Peoples = typeof p12;
function getName(p: Peoples): string {
  return p.name;
}
// console.log(getName(p12));

// keyof 可以用来取得一个对象接口的所有 key 值
interface Personss {
  name: string;
  age: number;
  gender: "male" | "female";
}
//type PersonKey = 'name'|'age'|'gender';
type PersonKey = keyof Personss;

function getValueByKey(p: Personss, key: PersonKey) {
  return p[key];
}
let vals = getValueByKey({ name: "hello", age: 10, gender: "male" }, "name");
// console.log(vals);

// 索引访问操作符
interface Person {
  name: string;
  age: number;
}
type x = Person["name"]; // x is string
// let strss:x = "123"
// console.log(strss);

// 映射类型 in
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}
//批量把一个接口中的属性都变成可选的
type PartPerson = {
  [Key in keyof Person]?: Person[Key];
};

let p2: PartPerson = {};

// 11个内置工具
/**
 * Exclude<T,U>
 * Extract<T,U>
 * NonNullable
 * ReturnType
 * Parameters
 * Partial 
 * Required
 * Readonly
 * Pick<T,K>
 * Record<K,T>
 * Omit<K,T> 
 */


