<template></template>

<script lang="ts">
// 中介者模式
class A {
    constructor() {
        this.number = 0
    }
    setNumber(num,m) {
        this.number = num
        if (m) {
            m.setB()
        }
    }
}

class B {
    constructor() {
        this.number = 0
    }
    
    setNumber(num, m) {
        this.number = num
        if (m) {
            m.setA()
        }
    }
}

class Mediator {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    
    setA() {
        let number = this.b.number
        this.a.setNumber(number / 100)
    }
    
    setB() {
        let number = this.a.number
        this.b.setNumber(number * 100)
    }
}


// 测试
let a = new A()
let b = new B()
let m = new Mediator(a,b)
a.setNumber(100, m)
b.setNumber(100, m)
// console.log(a.number, b.number)
// console.log(a.number, b.number)

</script>

<style scoped></style>
