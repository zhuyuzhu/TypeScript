var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var flag = true; // false
    var n = null;
    var unde = undefined;
    var obj = { foo: 'abc', num: 123 };
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    function sum() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (pre, cur) {
            return pre + cur;
        }, 0);
    }
    var tuple = [123, 'abc'];
    console.log(tuple[0]); //123
    console.log(0 /* st1 */); // 4
    var func = function (a, b) {
        if (b === void 0) { b = 10; }
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return '';
    };
    var foo = 'abc';
    foo = 123; //修改值类型，不会报错
    function stringify(value) {
        return JSON.stringify(value);
    }
    stringify('xyz');
    stringify(100);
    var nums = [100, 200, 300];
    var res = nums.find(function (i) { return i > 0; });
    var num1 = res;
    var num2 = res;
    function printPost(post) {
        console.log(post.title);
        //post.summary 仅读，而不能被修改
    }
    printPost({
        title: 'HI',
        content: 'Hello',
        summary: 'read only'
    });
    var cache = {}; //动态添加属性和值
    cache.foo = 'foo1';
    cache.bar = 'bar1';
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.eat = function (food) {
        };
        Person.prototype.run = function (distance) {
        };
        Person.prototype.say = function (language) {
        };
        return Person;
    }());
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function (food) {
            console.log("Eating " + food);
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // constructor() {
        //     super()
        // }
        Dog.prototype.run = function (distance) {
            console.log(distance);
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.run(25);
    function createArr(length, value) {
        var arr = Array(length).fill(value); //T 为类型变量，可以传number、string等
        return arr;
    }
    var strArr = createArr(3, 'abc');
    console.log(strArr); //[ 'abc', 'abc', 'abc' ]
    // import { camelCase } from 'lodash'
    // declare function camelCase (input: string): string; //需要手动去申明
    // let res = camelCase('hello lodash')
    var Student = /** @class */ (function () {
        function Student(name, age) {
            this.name = name;
            this.age = age;
            this.gender = true;
        }
        return Student;
    }());
    var person = {
        name: 'zhu'
    };
    person.hasOwnProperty('name');
})();
