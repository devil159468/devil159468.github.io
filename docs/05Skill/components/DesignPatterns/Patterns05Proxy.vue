<template>
    <div></div>
</template>

<script lang="ts">
// 代理模式
class ReadImg {
    constructor(fileName) {
        this.fileName = fileName
        this.loadFormDisk()
    }
    
    display () {
        console.log(`${this.fileName} is Display ..`)
    }
    
    loadFormDisk () {
        console.log('loading form disk',this.fileName)
    }
}
class ProxyImg {
    constructor(fileName) {
        this.realImg = new ReadImg(fileName)
    }
    display () {
        this.realImg.display()
    }
}

// 测试
// let proxyImg = new ProxyImg('1.png')
// proxyImg.display()


// 其他示例1：事件代理
// {
//     let div1 = document.getElementById('div1')
//     div1.addEventListener('click', (e) => {
//         const target = e.target
//         if (target.nodeName === 'A') {
//             console.log(target.innerHtml)
//         }
//     })
// }

// 其他示例2：jQuery 代理 this
// {
//     $('#div1').click(function () {
//         let fn = function () {
//             $(this).css('background-color', 'yellow')
//         }
//         fn = $.proxy(, this)
//         setTimeout( fn,1000)
//     })
// }

// 其他示例3：ES6 Proxy
// 明星
let star = {
    name: 'Elliot',
    age: 30,
    phone: 'start: 13122223333'
}
let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            return 'agent: 18011112222'
        }
        if (key === 'price') {
            return 120000
        }
        
        return target[key]
    },
    set: function (target, key, val) {
        if (key === 'customPrice') {
            if (val < 100000) {
                throw new Error('价格太低')
            } else {
                target[key] = val
                return true
            }
        }
        
    }
})

// 测试
// console.log(agent.name)
// console.log(agent.age)
// console.log(agent.phone)
// console.log(agent.price)
//
// agent.customPrice = 150000
// console.log('agent.customPrice', agent.customPrice)


</script>

<style scoped>

</style>
