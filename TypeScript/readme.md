### 全局安装ts-node作用：
在不需要编译成js的前提下执行ts代码

### unknown 和 any的区别：
执行操作之前是否需要对类型进行检查

### never 和 void 的区别：
void可以被赋值为null和undefined，拥有void返回值的函数能正常运行，
never是一个不包含值的类型，拥有never返回值的函数无法正常返回，无法终止或抛出异常

### 重写和重载的区别：
重写是子类重写继承自父类的方法，
重载是为同一个函数提供多个类型定义

### type 和 interface 的区别：
数据类型(type 可以用于基础数据类型、联合类型、交叉类型)、
重复定义(type 不可以重复定义)、
扩展(extends--interface type--&)

### tsconfig.json的作用和重要字段：
#### 作用：
用于标识ts项目的根路径
用于配置ts编译器
用于指定编译的文件
#### 重要字段：
files：设置要编译的文件名称
include：设置需要进行编译的文件，支持路径模式匹配
exclude：设置无需进行编译的文件，支持路径模式匹配
compilerOptions：设置与编译流程相关的选项

### scope
```foo.ts
const foo = 123;
export {};
```
```bar.ts
const bar = foo; // error
```

### 文件
#### 声明文件
#### 第三方声明文件
#### 查找声明文件
根目录下创建index.d.ts文件
针对入口文件，编写一个同名不同后缀的.d.ts文件
```test.d.ts
{
    "name": "myLib",
    "version": "1.0.0",
    "main": "lib/index.js",
    "types": "myLib.d.ts",
}
```
myLib.d.ts ---> index.d.ts ---> lib/index.d.js ---> 没有类型声明