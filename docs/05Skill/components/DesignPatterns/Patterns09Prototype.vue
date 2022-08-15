<template></template>

<script lang="ts">
// 原型模式
const prototype = {
    getName () {
        return this.first + ' ' + this.last
    },
    say () {
        console.log('Say hello')
    }
}

// 基于原型创建 x
let x = Object.create(prototype)
x.first = "A"
x.last = "B"
// console.log('x',x.getName())
// x.say()

// 基于原型创建 y
let y = Object.create(prototype)
y.first = "C"
y.last = "D"
// console.log('y', y.getName())
// y.say()

</script>

<style scoped></style>
