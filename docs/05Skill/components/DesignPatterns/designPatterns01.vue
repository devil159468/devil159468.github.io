<template>
    <div></div>
</template>

<script lang="ts" setup>

// 父类
class People {
    // 封装变量
    number
    private secret // 受保护的私有类
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    
    eat () {
        console.log(`${this.name} is eat`)
    }
    
    speak () {
        console.log(`${this.name} is speak`)
    }
    
    say() {
        console.log('It is People')
    }
}
// 子类A：继承父类
class StudentA extends People {
    constructor (name, age, number) {
        super(name, age);
        this.number = number
    }
    
    study () {
        console.log(`${this.name} is study`)
    }
    
    // 多态：重写父类方法
    say () {
        console.log('It is Student A')
    }
}
// 子类B：继承父类
class StudentB extends People {
    constructor(name, age, number) {
        super(name, age);
        this.number = number
    }
    
    study() {
        console.log(`${this.name} is study`)
    }
    
    // 多态：重写父类方法
    say() {
        console.log('It is Student B')
    }
}
let _studentA = new StudentA('Elliot', 30, 131)
_studentA.say();
let _studentB = new StudentB('Knight', 30, 180)
_studentB.say();



// JQuery示例
class jQuery {
    constructor(seletor) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(seletor))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.seletor = seletor || ''
    }
    
    addClass (node) {
        console.log('Append function')
    }
}
window.$ = function (selector) {
    // 工厂模式
    return new jQuery(selector)
}
// 选择 vuetest.vue 中的 p.selectP
let _select = $('p')
console.log('_select', _select);
console.log('_select 方法', _select.addClass);




















</script>

<style scoped>

</style>
