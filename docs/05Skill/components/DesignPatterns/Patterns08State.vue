<template></template>

<script lang="ts">
// 状态模式

// 交通灯示例
class State {
    constructor(color) {
        this.color = color
    }
    handle (context) {
        console.log(`转换为 ${this.color} 灯`)
        // 设置状态
        context.setState(this)
    }
}

// 主体
class Context {
    constructor() {
        this.state = null
    }
    
    // 获取状态
    getState () {
        return this.state
    }
    
    setState (state) {
        this.state = state
    }
}


// 测试
let context = new Context()
let green = new State('绿')
let yellow = new State('黄')
let red = new State('红')

// // 绿灯亮了
// green.handle(context)
// console.log(context.getState())
// // 黄灯亮了
// yellow.handle(context)
// console.log(context.getState())
// // 红灯亮了
// red.handle(context)
// console.log(context.getState())



// 简易版 Promise
import StateMachine from 'javascript-state-machine'
// 状态机模型
let fsm = new StateMachine({
    init: 'pending', // 初始化状态
    transitions: [
        {
            name: 'resolve', // 事件名称
            form: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'reject',
            form: 'pending',
            to: 'rejected',
        }
    ],
    methods: {
        // 监听 resolve
        onResolve: (state, data) => {
            // state 当前状态机实例； data - fsm.resolve(xxx) 传递的参数
            data.successList.forEach(fn => fn())
        },
        // 监听 reject
        onReject: (state, data) => {
            // state 当前状态机实例； data - fsm.reject(xxx) 传递的参数
            console.log('data', data)
            // data.failList.forEach(fn => fn())
        },
    }
    
    
})

// 定义 MyPromise
class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []
        
        fn(
            // resolve 函数
            () => {
                fsm.resolve(this)
            },
            // reject 函数
            () => {
                fsm.reject(this)
            }
        )
    }
    
    then (succesFn, failFn) {
        this.successList.push(succesFn)
        this.failList.push(failFn)
    }
}

// 测试
function loadImg (src) {
    const promise = new MyPromise(function (resolve, reject) {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    
    return promise
}

// let src = 'https://elliot-devil.gitee.io/avatar.png'
// let result = loadImg(src)
// result.then(() => {
//     console.log('ok1')
// },() => {
//     console.log('fail1')
// })
//
// result.then(() => {
//     console.log('ok2')
// }, () => {
//     console.log('fail2')
// })

</script>

<style scoped></style>
