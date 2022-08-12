<template>
    <div></div>
</template>

<script lang="ts">
// 适配器模式
class Adaptee {
    specificRequest () {
        return '日版Switch电源'
    }
}
class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request () {
        let info = this.adaptee.specificRequest()
        return `${info} - 转换至 - 国行Switch电源`
    }
}

// 测试
let target = new Target()
let res = target.request()
// console.log(res)

</script>

<style scoped>

</style>
