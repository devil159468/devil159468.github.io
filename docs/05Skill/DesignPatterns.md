# 设计模式（DesignPatterns）

代码质量评价： 可维护性、可读性、可扩展性、灵活性、简洁性（简单、复杂）、可复用性、可测试性。

## 设计原则
- SOLID 原则：SRP 单一职责原则
- SOLID 原则：OCP 开闭原则
- SOLID 原则：LSP 里式替换原则
- SOLID 原则：ISP 接口隔离原则
- SOLID 原则：DIP 依赖倒置原则

其他原则：DRY 原则、KISS 原则、YAGNI 原则、LOD 法则等。。


## 设计模式分类
1. 创建型
   - 常用的有：单例模式、工厂模式（工厂方法和抽象工厂）、建造者模式。
   - 不常用的有：原型模式。

2. 结构型/组合型
   - 常用的有：代理模式、桥接模式、装饰者模式、适配器模式。
   - 不常用的有：门面模式、组合模式、享元模式。

3. 行为型
   - 常用的有：观察者模式、模板模式、策略模式、职责链模式、迭代器模式、状态模式。
   - 不常用的有：访问者模式、备忘录模式、命令模式、解释器模式、中介模式。


## 面向对象
定义：
- 面向对象编程是一种编程范式或编程风格。它以类或对象作为组织代码的基本单元，并将封装、抽象、继承、多态四个特性，作为代码设计和实现的基石 。
- 面向对象编程语言是支持类或对象的语法机制，并有现成的语法机制，能方便地实现面向对象编程四大特性（封装、抽象、继承、多态）的编程语言。

### 封装、抽象、继承、多态 解决什么问题
- 封装（Encapsulation）也叫作信息隐藏或者数据访问保护
  - public 完全开放
  - protected 对子类开放
  - private 对自己开放
- 抽象（Abstraction）隐藏方法的具体实现，让调用者只需要关心方法提供了哪些功能，并不需要知道这些功能是如何实现的。
- 继承（Inheritance）表示类之间的 is-a 关系
- 多态（Polymorphism）子类可以替换父类，提高代码的可扩展性和复用性
<DesignPatterns01/>
<DesignPatterns02/>

### 优势
- OOP 更加能够应对大规模复杂程序的开发
- OOP 风格的代码更易复用、易扩展、易维护
- OOP 语言更加人性化、更加高级、更加智能

### 看似是OOP实际不是的例子
- 滥用 getter、setter 方法：数据有被修改的风险
- 滥用全局变量和全局方法：抽象utils类最好区分使用场景，不要大而全的包装为一个类
- 定义数据和方法分离的类：MVC将数据和方法分离是典型的面向过程

## 接口VS抽象类的区别

### 抽象类
- 抽象类不允许被实例化，只能被继承。
- 抽象类可以包含属性和方法。
- 子类继承抽象类，必须实现抽象类中的所有抽象方法。

### 接口类
- 接口不能包含属性（也就是成员变量）。
- 接口只能声明方法，方法不能包含代码实现。
- 类实现接口的时候，必须实现接口中声明的所有方法

> 总结：抽象类实际上就是类，只不过是一种特殊的类，这种类不能被实例化为对象，只能被子类继承。我们知道，继承关系是一种 is-a 的关系，那抽象类既然属于类，也表示一种 is-a 的关系。相对于抽象类的 is-a 关系来说，接口表示一种
has-a 关系，表示具有某些功能。对于接口，有一个更加形象的叫法，那就是协议（contract）。

## UML类图
[processon](https://processon.com/)

## Unix && Linux 设计哲学
1. 小而且美
2. 每个程序只做一件事
3. 快速建立原型
4. 舍弃高效率二取可移植性
5. 采用纯文本存储数据
6. 充分复用
7. 使用Shell脚本提交效率
8. 避免强制用户界面
9. 让每个程序都成为过滤器
10. 允许用户定制环境
11. 尽量使内核小且轻量化
12. 使用小写字母且尽量短
13. 沉默是金
14. 各部分之和大于整体
15. 寻求90%的解决方案（二八定律）

## 练习题
### 题目一
1. 打车时由专车和快车，每个车辆都有车牌号和名称
2. 不同的车价格不同，快车1元/公里，专车2元/公里
3. 行程开始显示车辆信息
4. 行程结束显示打车金额（固定5公里）
```typescript
{
    // 父类：车
    class Car {
        constructor(name, number) {
            this.name = name
            this.number = number
        }
    }

    // 子类：快车
    class Kuaiche extends Car {
        constructor(name, number) {
            super(name, number);
            this.price = 1;
        }
    }

    // 子类：专车
    class Zhuanche extends Car {
        constructor(name, number) {
            super(name, number);
            this.price = 2;
        }
    }

    // 行程：
    class Trip {
        constructor(car) {
            this.car = car
        }

        start() {
            console.log(`${this.car.name}行程开始,车牌号码为：${this.car.number}`)
        }

        end() {
            console.log(`行程结束，价格为：${this.car.price * 5}`)
        }
    }

    let car = new Kuaiche('快车A',100)
    let trip = new Trip(car)
    trip.start()
    trip.end()
}
```

### 题目二
1. 一个3层，每层100车位的停车场
2. 每个车位都能监控到茶凉的驶入和离开
3. 车辆进入前，显示每层的空余车位数量
4. 车辆进入时，摄像头可识别车牌号码并记录时间
5. 车辆驶出时，出口显示车牌号和停车时长
```typescript
{
    // 停车场
    class Park {
        constructor(floors) {
            this.floors = floors || []
            this.camera = new Camera()
            this.screen = new Screen()
            this.carList = {} // 存储摄像头拍摄返回的车辆信息
        }

        in(car) {
            // 通过摄像头获取信息
            const info = this.camera.shot(car)
            // 停到某个停车位
            const i = parseInt(Math.random() * 100 % 100)
            const place = this.floors[0].places[i]
            place.in()
            info.place = place
            // 记录信息
            this.carList[car.num] = info
        }

        out(car) {
            const info = this.carList[car.num]
            // 清空停车位
            const place = info.place
            place.out()
            // 显示时间
            this.screen.show(car, info.inTime)
            // 清空记录
            delete this.carList[car.num]
        }

        emptyNum() {
            return this.floors.map((floor) => {
                return `${floor.index} 层还有 ${floor.emptyPlaceMun()} 个车位`
            }).join('\n')
        }
    }

    // 层
    class Floor {
        constructor(index, places) {
            this.index = index
            this.places = places || []
        }

        emptyPlaceMun() {
            let num = 0;
            this.places.forEach(p => {
                if (p.empty) {
                    num = num + 1
                }
            })

            return num
        }
    }

    // 车位
    class Place {
        constructor() {
            this.empty = true
        }

        in() {
            this.empty = false
        }

        out() {
            this.empty = true
        }
    }

    // 摄像头
    class Camera {
        shot(car) {
            return {
                num: car.num,
                inTime: Date.now()
            }
        }
    }

    // 屏幕
    class Screen {
        show(car, inTime) {
            console.log(`车牌号：${car.num}，停车时间${Date.now() - inTime}`)
        }
    }

    // 车辆
    class Car {
        constructor(num) {
            this.num = num
        }
    }


    // 测试
    // 初始化停车场
    const floors = []
    for (let i = 0; i < 3; i++) {
        const places = []
        for (let j = 0; j < 100; j++) {
            places[j] = new Place()
        }
        floors[i] = new Floor(i + 1, places)
    }

    const park = new Park(floors)

    // 初始化车辆
    const car1 = new Car(100)
    const car2 = new Car(200)
    const car3 = new Car(300)

    console.log('第一辆车进入')
    console.log(park.emptyNum())
    park.in(car1)
    console.log('第二辆车进入')
    console.log(park.emptyNum())
    park.in(car2)
    console.log('第一辆车离开')
    park.out(car1)
    console.log('第二辆车离开')
    park.out(car2)

    console.log('第三辆车进入')
    console.log(park.emptyNum())
    park.in(car3)
    console.log('第三辆车离开')
    park.out(car3)
}
```

## 工厂模式
- 将new操作单独封装
- 遇到new就需要考虑是否使用工厂模式
```typescript
// 工厂模式
class Product {
    constructor(name) {
        this.name = name
    }
    
    init () {
        console.log(`${this.name}init`)
    }
    fun1 () {
        console.log(`${this.name}fun1`)
    }
    fun2 () {
        console.log(`${this.name}fun2`)
    }
    
}

class Creator {
    create (name) {
        return new Product(name)
    }
}

// 测试
let _creator = new Creator()
let item = _creator.create('Factory')
item.init()
item.fun1()
```
<Patterns01Factory />


## 单例模式
- 系统中被唯一使用
- 一个类只有一个实例
```typescript
// 单例模式
class SingleObject {
    login () {
        console.log('login...')
    }
}
SingleObject.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log('obj1 === obj2', obj1 === obj2)


// 登录框示例
class LoginForm {
    constructor() {
        this.state = 'hide'
    }

    show() {
        if (this.state === 'show') {
            console.log('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }

    hide() {
        if (this.state === 'hide') {
            console.log('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }
}
LoginForm.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()

// 测试
let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
login2.hide()

console.log('login1 === login2', login1 === login2)

```
<Patterns02Singleton />


## 适配器模式
- 旧接口不兼容新模式
- 使用适配转换接口
```typescript
// 适配器模式
class Adaptee {
    specificRequest () {
        return '日版Switch电源'
    }
}
class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request () {
        let info = this.adaptee.specificRequest()
        return `${info} - 转换至 - 国行Switch电源`
    }
}

// 测试
let target = new Target()
let res = target.request()
console.log(res)
```
<Patterns03Adapter />


## 装饰器模式
- 为对象添加新功能

三方库：core-decorators
```typescript
// 装饰器模式
class Circle {
    draw () {
        console.log('绘制方法')
    }
}
class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw () {
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder (circle) {
        console.log('装饰器新增方法')
    }
}

// 测试
let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)
console.log('---使用装饰器---')
dec.draw()
```

### 装饰类
```typescript
// 示例1：
function testDec(isDec) {
    return function (target) {
        target.isDec = isDec
    }
}
@testDec(false)
class Demo {}
console.log(Demo.isDec)


// 示例2：
function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}
const Foo = {
    foo () {
        console.log('foo function')
    }
}

@mixins(Foo)
class MyClass {
}

let obj = new MyClass()
obj.foo()
```

### 装饰方法
```typescript
// 示例1
function readonly (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

class Person {
    constructor() {
        this.first = "A"
        this.last = "B"
    }
    
    @readonly
    name () {
        return `${this.first} ${this.last}`
    }
}

let p = new Person()
console.log(p.name())
// 重新赋值会报错
// p.name = function () {
//     console.log('new p name')
// }

// 示例2
function log (target, name, descriptor) {
    let oldValue = descriptor.value
    descriptor.value = function () {
        console.log(`calling ${name} width`, arguments)
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

class Math {
    @log
    add (a, b) {
        return a + b
    }
}

let math = new Math()
const result = math.add(2,4)
console.log('result', result)
```
<Patterns04Decorator />

## 代理模式
- 使用者无权访问目标对象
- 通过代理做授权和控制
- 代理类和目标类分离，隔离开目标类和使用者
```typescript
// 代理模式
class ReadImg {
    constructor(fileName) {
        this.fileName = fileName
        this.loadFormDisk()
    }
    
    display () {
        console.log(`${this.fileName} is Display ..`)
    }
    
    loadFormDisk () {
        console.log('loading form disk',this.fileName)
    }
}
class ProxyImg {
    constructor(fileName) {
        this.realImg = new ReadImg(fileName)
    }
    display () {
        this.realImg.display()
    }
}

// 测试
let proxyImg = new ProxyImg('1.png')
proxyImg.display()


// 其他示例1：事件代理
{
    let div1 = document.getElementById('div1')
    div1.addEventListener('click', (e) => {
        const target = e.target
        if (target.nodeName === 'A') {
            console.log(target.innerHtml)
        }
    })
}

// 其他示例2：jQuery 代理 this
{
    $('#div1').click(function () {
        let fn = function () {
            $(this).css('background-color', 'yellow')
        }
        fn = $.proxy(, this)
        setTimeout( fn,1000)
    })
}

// 其他示例3：ES6 Proxy
// 明星
let star = {
    name: 'Elliot',
    age: 30,
    phone: 'start: 13122223333'
}
let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            return 'agent: 18011112222'
        }
        if (key === 'price') {
            return 120000
        }
        
        return target[key]
    },
    set: function (target, key, val) {
        if (key === 'customPrice') {
            if (val < 100000) {
                throw new Error('价格太低')
            } else {
                target[key] = val
                return true
            }
        }
        
    }
})

// 测试
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 150000
console.log('agent.customPrice', agent.customPrice)


```
<Patterns05Proxy />

## 代理模式 适配器模式 装饰器模式 对比

适配器模式 vs 代理模式
- 适配器模式：提供一个不同的接口（不同版本的插头 ）
- 代理模式：提供一模一样的接口（翻墙）

装饰器模式 && 代理模式 
- 装饰器模式：扩展功能，原有功能不变且可直接使用
- 代理模式：显示原有功能，但是进过限制或阉割

## 观察者模式
- 发布 && 订阅
- 一对N
- 将主体与观察者分离，不是主动触发而是被动监听，两者解耦
```typescript
class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState () {
        return this.state
    }
    setState (state) {
        this.state = state
        this.notifyAllObservers()
    }
    
    notifyAllObservers () {
        this.observers.forEach((obs) => {
            obs.update()
        })
    }
    
    attach (observer) {
        this.observers.push(observer)
    }
    
}

class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update () {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

// 测试
let s = new Subject()
let o1 = new Observer('o1',s)
let o2 = new Observer('o2',s)
let o3 = new Observer('o3',s)

s.setState(1)
s.setState(2)
s.setState(3)
```
<Patterns06Observer />



















<script setup>
import DesignPatterns01 from './components/DesignPatterns/designPatterns01.vue';
import DesignPatterns02 from './components/DesignPatterns/designPatterns02.vue';
import Patterns01Factory from './components/DesignPatterns/Patterns01Factory.vue';
import Patterns02Singleton from './components/DesignPatterns/Patterns02Singleton.vue';
import Patterns03Adapter from './components/DesignPatterns/Patterns03Adapter.vue';
import Patterns04Decorator from './components/DesignPatterns/Patterns04Decorator.vue';
import Patterns05Proxy from './components/DesignPatterns/Patterns05Proxy.vue';
import Patterns06Observer from './components/DesignPatterns/Patterns06Observer.vue';
</script>

