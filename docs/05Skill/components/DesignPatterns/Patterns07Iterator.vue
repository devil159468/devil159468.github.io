<template></template>

<script lang="ts">
// 迭代器模式
class Iterator {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }
    
    next () {
        if (this.hasNext()) {
            return this.list[this.index++]
        }
        return null
    }
    
    hasNext () {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
    
    
}
class Container {
    constructor(list) {
        this.list = list
    }
    // 生成遍历器
    getInterator () {
        return new Iterator(this)
    }
}

// 测试
// let container = new Container([1, 2, 3, 4, 5])
// let iterator = container.getInterator()
// while (iterator.hasNext()) {
//     console.log('iterator',iterator.next())
// }

// ES6 迭代器
function each(data) {
    let iterator = data[Symbol.iterator]()
    
    let item = {done: false}
    while (!item.done) {
        item = iterator.next()
        if (!item.done) {
            console.log(item.value)
        }
    }
}



// for of 实现
function each2(data) {
    for (let item of data ) {
        console.log(item)
    }
}

// 测试迭代器
let arr = [1,2,3,4]
let m = new Map()
m.set('a',100)
m.set('b',200)

// each(arr)
// each(m)
// each2(arr)
// each2(m)


</script>

<style scoped></style>
