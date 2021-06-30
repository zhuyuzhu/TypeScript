# typescript

安装：

```sh
yarn init -y
yarn add typescript --dev
```

编译单个TS文件：

```sh
yarn tsc index.ts
```

创建ts工程：

```sh
yarn tsc --init
```

生成tsconfig.json文件

编译单个ts文件时，tsconfig.json文件不生效；当执行整个项目的时候，该配置文件才生效，如下命令：

```sh
yarn tsc
```



原始类型

```js
const str: string = 'abc'
const num: number = 100 //NaN Infinity
const flag: boolean = true // false
const func: void = undefined
const n: null = null
const unde: undefined = undefined
const sym: symbol = Symbol()
```



标准库：内置对象所对应的声明文件

配置文件中的`"target": "ES5",`时，为了让ES6的语法在TS文件中类型检查不报错，有如下两种方法：

1、修改"target": "ES2015"

2、配置文件中的lib

- ES2015
- DOM：添加DOM和BOM内置对象，比如console对象

实例：`"lib": ["ES2015", "DOM"],`



作用域：

单个文件中，`export {} //该文件成为模块作用域`，而防止让变量成为全局变量。实际开发中，每个文件肯定是模块导出，就不会出现全局作用域的情况。



Object类型：TS中泛指所以引用类型

比如：

```js
const obj: Object = function(){} //[]  {}
```



对象类型，可以是对象字面量，比如：

```js
const obj: {foo: string, num: number} = {foo: 'abc', num: 123}
```

不过最好还是用接口，因为字面量要必须一一对应。



TS数组类型：

1、Array泛型，比如：

```js
const arr1: Array<number> = [1,2,3]
```

2、元素类型+[]，比如：

```js
const arr2: number[] = [4,5,6]
```

实例：

```js
function sum (...args: number[]) {
    return args.reduce((pre, cur) => {
        return pre + cur;
    }, 0) 
}
```



TS元组类型：固定长度和类型

比如：

```js
const tuple: [number, string] = [123, 'abc']
console.log(tuple[0]) //123
```

比如：`Object.entries`得到每个键值就是元组类型：

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

```



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries



枚举类型：固定的几个值

比如：数字代表某种状态

```js
enum status {
    st1 = 0,
    st2 = 1,
    st3 = 2,
}
console.log(status.st1) // 0
```



枚举声明时的特点是：声明第一个值后，后续的值会进行累加

```js
enum status {
    st1 = 3,
    st2,
    st3,
}
console.log(status.st2) // 4
```



字符串枚举：因为无法像数字那样自增，所以声明时需要手动赋值

```js
enum status {
    st1 = 'a',
    st2 = 'b',
    st3 = 'c',
}
console.log(status.st2) // b
```



编译TS后，大部分类型都会被移除掉，而枚举类型会在编译后的结果中，有代码生成，比如：枚举会产生双向键值对对象

```js
var status;
(function (status) {
    status[status["st1"] = 3] = "st1";
    status[status["st2"] = 4] = "st2";
    status[status["st3"] = 5] = "st3";
})(status || (status = {}));
console.log(status.st2); // 0
```



所以实际上枚举声明的对象，我们可以直接获取键名：

```js
enum status {
    st1 = 3,
    st2,
    st3,
}
console.log(status.st2) // 4
console.log(status[5]) // st3
```

如果不想在编译后的js代码中产生额外的枚举代码，且没有获取键名的操作，可以将枚举定义为常量，那么编译后就不会产生额外代码：

```js
const enum status {
    st1 = 3,
    st2,
    st3,
}
console.log(status.st2) // 4
```



TS函数类型

函数声明：接收两个参数，且返回字符串

```ts
function func(a: string, b: number): string {
    return ''
}
```

可选参数：如下形参b是可选的

```ts
function func(a: string, b?: number): string {
    return ''
}
```

或者ES6，默认参数，那么该参数也是可有可无的：

```ts
function func(a: string, b: number = 10): string {
    return ''
}
```

如果想接收任意个参数，可以使用ES6 的不定参数：

```ts
function func(a: string, b: number = 10, ...rest: number[]): string {
    return ''
}
```



函数表达式：

```tsx
const func = function (a: string, b: number = 10, ...rest: number[]): string {
    return ''
}
```

根据编辑器提示，修复函数表达式：

```tsx
const func: (a: string, b?: number, ...rest: number[]) => string = function (a: string, b: number = 10, ...rest: number[]): string {
    return ''
}
```



TS任意类型：

any类型不会有任何的类型检查

```ts
let foo: any = 'abc'
foo = 123 //修改值类型，不会报错

function stringify(value: any) {
    return JSON.stringify(value)
}
stringify('xyz')
stringify(100)
```



隐式类型推断：

如果开发时没有标记变量类型，那么TS会推断类型

```ts
let str = 'abc' //类型推断str为string
str = 123; //修改类型会报错
```

如果TS无法推断类型，那么该变量的类型TS就认为是any，比如：

```tsx
let str //类型推断str为any
str = 123; //可以修改值类型
```



类型断言：明确告诉TS是什么类型

```ts
const nums = [100, 200, 300]
let res = nums.find(i => i > 0); //let res: number | undefined 隐式推断出结果.
//但是我们知道，肯定会找到一个大于0的数字，就可以断言res肯定是number
let num = res as number;
```

第二种写法：jsx语法下不能使用

```ts
const nums = [100, 200, 300]
let res = nums.find(i => i > 0);
let num2 = <number>res;
```



TS接口

约束使用者的结构，如果对象实现了该接口，对象就必须拥有接口中约束的所有成员

```ts
interface Post {
    title: string;
    content: string;
}
function printPost (post: Post) {
    console.log(post.title)
}

printPost({
    title: 'HI',
    content: 'Hello'
})
```

接口约定的成员：可选成员、只读成员、动态成员

可选成员：可传可以不传；

只读成员：不能被修改

```ts
interface Post {
    title: string;
    content: string;
    subTitle?: string; //可选成员
    readonly summary: string; //只读成员
}
function printPost (post: Post) {
    console.log(post.title)
    //post.summary 仅读，而不能被修改
}

printPost({
    title: 'HI',
    content: 'Hello',
    summary: 'read only',
})
```

动态成员：

只约定属性名类型（字符串），而不约定属性的个数和属性名

```ts
interface Cache {
    [prop: string]: string;
}
let cache: Cache = {} //动态添加属性和值
cache.foo = 'foo1'
cache.bar = 'bar1'
```



### 类：

类的属性，必须要有初始值，或在构造函数中通过this赋值

类的属性，在使用前，必须在类中声明

```ts
class Person {
    name: string = 'init name'; //可以赋默认值
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi (msg: string) { //可以在函数中访问声明的类属性
        console.log(`I am ${this.name}, ${msg}`)
    }
}
let person: Person = new Person('zhu', 25)
person.sayHi('in a bad mood today')
```

类的私有属性：——访问级别

```ts
class Person {
    public name: string = 'init name'; //默认就是public，平时都省略public
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    printAge () { //内部方法可以访问私有属性
        console.log(`I am ${this.age}`)
    }
}
let person: Person = new Person('zhu', 25)
console.log(person.name)
console.log(person.age) //报错
```

还有关键词：protected

如果类的constructor 设置为private，那么就不可以通过new的方式来创建实例

还要参考：https://www.bilibili.com/video/BV1784y1c7V9?p=39



属性修饰符：readonly

- 要在其他修饰符后
- 在类属性声明时赋值或在构造函数中赋值

```ts
class Person {
    public name: string = 'init name';
    private age: number;
    protected gender: boolean;
    private readonly lover: string; //readonly要在其他修饰符后
    constructor(name: string, age: number) {
        this.age = age;
        this.gender = true;
        this.lover = ''
    }
}
```



### 接口

类的公共功能抽象为接口，对象必须实现对应的接口。与此相关的有公共的父类

```js
interface EatAndRun {
    eat (food: string): void;
    run (distance: number): void;
}
interface Say {
    say(language: string): void
}

class Person implements EatAndRun, Say{
    constructor() {
        
    }
    eat(food: string): void {

    }
    run(distance: number){

    }
    say(language: string) {
        
    }
}
```



### 抽象类

抽象类只能被继承，而不能通过new创建实例对象

```tsx
abstract class Animal {
    eat (food: string): void {
        console.log(`Eating ${food}`)
    }
    abstract run (distance: number): void; //抽象方法只声明，在子类中创建
}

class Dog extends Animal {
    // constructor() {
    //     super()
    // }
    run (distance: number): void {
        console.log(distance)
    }
}
let dog = new Dog()
dog.run(25)
```



### 泛型

声明函数或类时，没有指定类型，当使用时再指定类型——目的，极大的复用代码

`Array<number>`泛型Array，使用时，再指定了number类型的内容

```ts
function createArr (length: number, value: number): number[] {
    let arr = Array<number>(length).fill(value); //TS中Array的类型为any，内容值可以是任务类型
    return arr;
}
```

将上述函数泛型化，可接受不同类型的值，组成数组

```ts
function createArr<T> (length: number, value: T): T[] {
    let arr = Array<T>(length).fill(value); //T 为类型变量，可以传number、string等
    return arr;
}
let strArr = createArr<string> (3, 'abc')
console.log(strArr) //[ 'abc', 'abc', 'abc' ]
```



### TS中第三方模块类型申明

有的模块，不是TS开发的，引用时，会报一些类型申明的错，需要在我们使用时，特别申明

或模块对应的类型申明模块

比如：lodash

```ts
import { camelCase } from 'lodash'
declare function camelCase (input: string): string; //需要手动去申明
let res = camelCase('hello lodash')
```

该模块有自己的类型申明`@types/lodash`，下载安装对应的类型申明即可，就不需要declare去申明了

很多模块，已经集成了内部声明文件，比如：`query-string`



