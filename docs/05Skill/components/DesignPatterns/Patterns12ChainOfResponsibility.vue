<template></template>

<script lang="ts">
// 责任链模式
class Action {
    constructor(name) {
        this.name = name
    }
    setNextAction(action) {
        this.nextAction = action
    }
    handle() {
        console.log(`${this.name} 审批`)
        if (this.nextAction != null) {
            this.nextAction.handle()
        }
    }
}

// 测试
let a1 = new Action('组长')
let a2 = new Action('经理')
let a3 = new Action('总监')
a1.setNextAction(a2)
a2.setNextAction(a3)
// a1.handle()

</script>

<style scoped></style>
