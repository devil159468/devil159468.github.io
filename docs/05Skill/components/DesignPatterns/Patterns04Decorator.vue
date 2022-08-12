<template>
    <div></div>
</template>

<script lang="ts">
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
// let circle = new Circle()
// circle.draw()
//
// let dec = new Decorator(circle)
// console.log('---使用装饰器---')
// dec.draw()


// 装饰类：示例1
function testDec(isDec) {
    return function (target) {
        target.isDec = isDec
    }
}
@testDec(false)
class Demo {}
// console.log(Demo.isDec)


// 装饰类：示例2
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
class MyClass {}

// let obj = new MyClass()
// obj.foo()


// 装饰方法：示例1
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
// console.log(p.name())
// 重新赋值会报错
// p.name = function () {
//     console.log('new p name')
// }

// 装饰方法：示例2
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
// const result = math.add(2,4)
// console.log('result', result)



</script>

<style scoped>

</style>
