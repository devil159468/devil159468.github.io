<template>
    <div class="text">
        这里是Vue组件渲染出的文本
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: () => {
            return '测试信息'
        }
    }
})
console.log(props.title);
</script>

<style scoped>
.text {
    background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>
