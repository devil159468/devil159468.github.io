# TypeScript

## 安装
```bash
// 安装
npm install -g typescript

// 编译
tsc -v

// 示例
const hello:string = "Hello World!"
console.log(hello) // Hello World!
```

## 基础数据类型
- any：任意类型
- number：数字
- string：字符串
- boolean：布尔
- enum：枚举
- 数组：
- 元组：
- void：用于标识方法返回值的类型，无返回值
- never：never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
- null：表示对象值缺失
- undefined：用于初始化变量为一个未定义的值

## 变量
### 声明
```bash
let [变量名] : [类型] = 值;

// 例如
let name:string = "Elliot";
```

## 函数
```typescript
// 无参数
function function_name():return_type { 
    return value; 
}
// 示例
function greet(): string { // 返回一个字符串
    return "Hello World"
}


// 有参数
function func_name(param1[:datatype],param2 [:datatype]) {}
// 示例
function addNumber(x: number, y: number): number {
    return x + y;
}


// 默认参数
function function_name(param1[:type],param2[:type]= default_value) {}
// 示例
function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("计算结果: ", discount);
}


// 剩余参数：允许我们将一个不确定数量的参数作为一个数组传入。
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
// 示例
function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum)
}
addNumbers(1, 2, 3)


// 匿名函数
let xx = function ([arguments]) {}
// 示例
let res = function (a: number, b: number) {
    return a * b;
};
console.log(res(12, 2))


// 匿名函数自调用
(function () {
    var x = "Hello!!";
    console.log(x)
})()



// 构造函数
var res = new Function([arg1[, arg2[, ...argN]],] functionBody)
// 示例
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);



// 递归函数
function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1;
    } else {
        return (number * factorial(number - 1));     // 调用自身
    }
};
console.log(factorial(6));



// Lambda函数
([param1, parma2, …param n]) => statement;
// 示例1
var foo = (x: number) => 10 + x
console.log(foo(100))
// 示例2
var foo = (x: number) => {
    x = 10 + x
    console.log(x)
}
foo(100)

// 不指定函数的参数类型，通过函数内来推断参数类型:
var func = (x) => {
    if (typeof x == "number") {
        console.log(x + " 是一个数字")
    } else if (typeof x == "string") {
        console.log(x + " 是一个字符串")
    }
}
func(12)
func("Tom")



// 函数重载
function disp(string): void;
function disp(number): void;

```

## TypeScript 接口
接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。
```typescript
interface interface_name {}

// 示例
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => {
        return "Hi there"
    }
}
console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => {
        return "Hello!!!"
    }
}
console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)

```

## TypeScript 类
```typescript
class class_name { 
    // 类作用域
}

class Car {
    // 字段 
    engine: string;

    // 构造函数 
    constructor(engine: string) {
        this.engine = engine
    }

    // 方法 
    disp(): void {
        console.log("发动机为 :   " + this.engine)
    }
}






```

## TypeScript 泛型（Generices）
```typescript
// T 为类型
function type<T>(arg:T):T {
	return arg
}
// 显示指定类型
let hd = type<string>('Elliot') // Elliot
// 自动推断类型
let xj = type(true) // true

// 参数泛型
function getLength<T extends string | any[]>(arg: T): number {
    return arg.length
}
console.log(getLength('Elliot')); // 6
console.log(getLength(['Elliot', 'Knight'])) // 2



// 泛型类
class CollectionNumber<T> {
    data: T[] = []

    public push(...items: T[]) {
        this.data.push(...items)
    }

    public shift(): T {
        return this.data.shift()
    }
}
// 字符串类型
const collectionsString = new CollectionNumber<string>()
collectionsString.push('Elliot', 'Knight')
console.log(collectionsString.shift()) // Elliot
// 数字类型
const collectionsNumber = new CollectionNumber<number>()
collectionsNumber.push(1, 2, 3, 4, 5)
console.log(collectionsNumber.shift()) // 1
// 自定义类型
type User = { name: string; age: number }
const user1: User = {name: 'Elliot', age: 30}
const user2: User = {name: 'Knight', age: 30}
const collectionsUser = new CollectionNumber<User>()
collectionsUser.push(user1, user2)
console.log(collectionsUser.shift())



// 构造函数泛型
class User<T> {
    public constructor(private _user: T) {
    }

    public get(): T {
        return this._user
    }
}

interface UserInterface {
    name: string
    age: number
}

const obj = new User<UserInterface>({name: 'Elliot', age: 30})
console.log(obj.get().name) // Elliot



// 接口泛型
interface ArticleInterface<B, C> {
    title: string
    isLock: B
    comments: C[]
}

type CommentType = {
    content: string
    author: string
}

const article: ArticleInterface<boolean, CommentType> = {
    title: 'Elliot Knight的博客',
    isLock: true,
    comments: [{content: '内容', author: '作者'}]
}

console.log(article)
// {
//     title: 'Elliot Knight的博客',
//     isLock: true,
//     comments: [{content: '内容', author: '作者'}]
// }

```






























## TypeScript应用

