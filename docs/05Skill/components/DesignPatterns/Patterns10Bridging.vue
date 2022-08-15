<template></template>

<script lang="ts">
// 桥接模式

class Color {
    constructor(name) {
        this.name = name
    }
}
class Shape {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    draw() {
        console.log(`${this.color.name} ${this.name}`)
    }
}

// 测试
let red = new Color('red')
let yellow = new Color('yellow')
let circle = new Shape('circle', red)
let triangle = new Shape('triangle',yellow)

// circle.draw()
// triangle.draw()

</script>

<style scoped></style>
