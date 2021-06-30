
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
