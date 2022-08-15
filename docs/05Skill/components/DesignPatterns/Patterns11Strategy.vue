<template></template>

<script lang="ts">
// 策略模式
class OrdinaryUser {
    buy () {
        console.log('普通用户购买')
    }
}
class MemberUser {
    buy() {
        console.log('会员用户购买')
    }
}
class VIPUser {
    buy() {
        console.log('VIP用户购买')
    }
}

let u1 = new OrdinaryUser()
let u2 = new MemberUser()
let u3 = new VIPUser()

// u1.buy()
// u2.buy()
// u3.buy()

</script>

<style scoped></style>
