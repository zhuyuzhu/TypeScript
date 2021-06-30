
const flag: boolean = true // false

const n: null = null
const unde: undefined = undefined
const sym: symbol = Symbol()

const obj: {foo: string, num: number} = {foo: 'abc', num: 123}

const arr1: Array<number> = [1,2,3]
const arr2: number[] = [4,5,6]

function sum (...args: number[]) {
    return args.reduce((pre, cur) => {
        return pre + cur;
    }, 0) 
}

const tuple: [number, string] = [123, 'abc']
console.log(tuple[0]) //123

const enum status {
    st1 = 3,
    st2,
    st3,
}
console.log(status.st2) // 4

const func: (a: string, b?: number, ...rest: number[]) => string = function (a: string, b: number = 10, ...rest: number[]): string {
    return ''
}


let foo: any = 'abc'
foo = 123 //修改值类型，不会报错

function stringify(value: any) {
    return JSON.stringify(value)
}
stringify('xyz')
stringify(100)

const nums = [100, 200, 300]
let res = nums.find(i => i > 0);
let num2 = <number>res;

export {} //该文件成为模块作用域


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

interface Cache {
    [prop: string]: string;
}
let cache: Cache = {} //动态添加属性和值
cache.foo = 'foo1'
cache.bar = 'bar1'

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

function createArr<T> (length: number, value: T): T[] {
    let arr = Array<T>(length).fill(value); //T 为类型变量，可以传number、string等
    return arr;
}
let strArr = createArr<string> (3, 'abc')
console.log(strArr) //[ 'abc', 'abc', 'abc' ]

// import { camelCase } from 'lodash'
// declare function camelCase (input: string): string; //需要手动去申明
// let res = camelCase('hello lodash')