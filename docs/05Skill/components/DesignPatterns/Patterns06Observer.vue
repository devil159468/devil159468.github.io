<template>
    <div></div>
</template>

<script lang="ts">
// 观察者模式
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

// s.setState(1)
// s.setState(2)
// s.setState(3)


</script>

<style scoped>

</style>
