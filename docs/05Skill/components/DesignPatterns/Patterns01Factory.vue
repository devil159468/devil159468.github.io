<template>
    <div></div>
</template>

<script lang="ts">
// 工厂模式
class Product {
    constructor(name) {
        this.name = name
    }
    
    init () {
        console.log(`${this.name}init`)
    }
    fun1 () {
        console.log(`${this.name}fun1`)
    }
    fun2 () {
        console.log(`${this.name}fun2`)
    }
    
}

class Creator {
    create (name) {
        return new Product(name)
    }
}

// 测试
// let _creator = new Creator()
// let item = _creator.create('Factory')
// item.init()
// item.fun1()


</script>

<style scoped>

</style>
