<template></template>

<script lang="ts">
// 备忘录模式

// 备忘类
class Memento {
    constructor(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
}
// 备忘列表
class CareTaker {
    constructor() {
        this.list = []
    }
    add(memento) {
        this.list.push(memento)
    }
    get(index) {
        return this.list[index]
    }
}
// 编辑器
class Editor {
    constructor() {
        this.content = null
    }
    setContent(content) {
        this.content = content
    }
    getContent(content) {
        return this.content
    }
    saveContentToMemento () {
        return new Memento(this.content)
    }
    getContentToMemento(memento) {
        this.content = memento.getContent()
    }
}


// 测试
let editor = new Editor()
let careTaker = new CareTaker()

// editor.setContent('111')
// editor.setContent('222')
// careTaker.add(editor.saveContentToMemento()) // 备份当前内容
// editor.setContent('333')
// careTaker.add(editor.saveContentToMemento()) // 备份当前内容
// editor.setContent('444')
// console.log(editor.getContent())
// editor.getContentToMemento(careTaker.get(1)) // 撤销
// console.log(editor.getContent())
// editor.getContentToMemento(careTaker.get(0)) // 撤销
// console.log(editor.getContent())

</script>

<style scoped></style>
