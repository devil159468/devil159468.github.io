# Vue3

[//]: # (引用链接：https://blog.csdn.net/weixin_37682345/article/details/125782635)

## setup定义变量
```typescript
<template>
    <h2>{{count}} {{user.name}}</h2>
    <span v-for="(item, index) in arr" :key="index">{{item}}</span>
    <button @click="setName">点击我增加</button>
</template>
<script setup lang="ts">
    import { ref, reactive } from 'vue';
    // 字符串变量
    const count = ref(0)
    // 对象
    let user = reactive({
        name: '张三'
    })
    // 数组
    let arr = reactive(['1', '2', '3'])
    
    // 综合定义方案
    const originData = reactive({
        count: 0,
        user:{
            name: '张三'
        },
        arr: ['1', '2', '3']
    })
    
    // 方法
    const setName = ()=>{
        count.value++
        user.name = '李四'
    }
</script>
```

## Watch、WatchEffect
```typescript
<template>
    <p>{{originData.count}}  {{originData.user.name}}</p>
    <p v-for="(item, index) in originData.arr" :key="index">{{item}}</p>
    <button @click="incriment">点击我count增加</button>
</template>
<script setup lang="ts">
    import { ref, reactive, watchEffect, watch } from 'vue';

    const count = ref(0)
    const user = reactive({name: '张三'})
    const arr = reactive([1,2,3,4])

    // 综合定义方案
    const originData = reactive({
        count: 0,
        user:{
            name: '张三'
        },
        arr:[1,2,3,4]
    })
    const incriment = ()=>{
        originData.count++
        count.value++
        originData.user.name = '李四'
    }
	// 默认页面更新之前立即执行监听，懒执行开始
    watchEffect(() => console.log(count.value))
    // 默认监听数据变化后的值，页面更新后不会立即执行
    watch(count, (n, o) => {
        console.log('watch', n, o);
    })
    
    // 监听多个值
    watch([count, originData.user], (newValues, prevValues) => {
        console.log(newValues[0], newValues[1].name)
    })

    // 立即监听
    watch([count, originData.user], (newValues, prevValues) => {
        console.log(newValues[0], newValues[1].name)
    }, {deep: true, immediate: true})
   
</script>
```

## 生命周期
```typescript
<script setup lang="ts">
import { onMounted, onActivated, onUnmounted, onUpdated, onDeactivated } from 'vue';
// 读取环境变量
const mode = import.meta.env;
//   import HeadMenu from '@/components/head-menu/index.vue';
onMounted(() => {
  console.log("组件挂载")
})

onUnmounted(() => {
  console.log("组件卸载")
})

onUpdated(() => {
  console.log("组件更新")
})
onActivated(() => {
  console.log("keepAlive 组件 激活")
})

onDeactivated(() => {
  console.log("keepAlive 组件 非激活")
})
</script>
```

## Ts限制define(Emits|Props)参数类型
### 子组件
```typescript
<template >
    <h1>{{msg}}</h1>
    <h3>{{title}}</h3>
    <input v-model="inputValue" type="text" @blur="handleUpdate($event)">
</template>
<script setup lang="ts">
    import { ref } from "vue";
    defineProps<{
            msg?:(string | number),
            title?: string
        }>()
    
         // 提供默认值方式 1
        interface Props{
            msg?: (string | number | boolean), 
            title?: string[]
        }

        withDefaults(defineProps<Props>(), {
            msg: 'hello',
            title: () => ['one', 'two']
        })

        // 提供默认方式 2
        withDefaults(defineProps<{
            msg?: (string | number | boolean)
            title?: string
        }>(), {
            msg: 3,
            title: '默认标题'
        })

    // const  emit = defineEmits(['updateValue'])
    const emit = defineEmits<{
                        (event: 'change'): void,
                        (event: 'update', data: string): void
                }>()

    const inputValue = ref<any>()

    const handleUpdate = (event: any) =>{
        const { target } = event
        // console.log(target.value, 1111);
        emit('update', event.target.value)
    }
</script>
```
### 父组件
```typescript
<script setup lang="ts">
    import CellSample from "./components/cell-samples/index.vue";
    
    const update = (data: any) =>{
        console.log(data);
    }
</script>

<template>
    <CellSample @update="update"></CellSample>
</template>

```

## defineProps、defineEmits
### 子组件
```typescript
<template>
    <p>{{props.msg}}</p>
    <button @click="handleClick">点击我调用父组件方法</button>
</template>
<script setup lang="ts">
    const props = defineProps({
         msg:{
            type: String,
            default: () => '默认值'
         }
    })
    const  emit = defineEmits(['on-change', 'update'])
    const handleClick = () =>{
        emit('on-change', '父组件方法被调用了')
    }
</script>
```
### 父组件
```typescript
<script setup lang="ts">
    import TestPropsPmit from './components/test-props-emit/index.vue';
    import { ref } from 'vue';

    // 定义字符串变量
    const msg = ref('欢迎使用vite！')
	// 调用事件
    const handleChange = (params:string) =>{
        console.log(params);
    }
</script>
<template>
	<TestPropsPmit :msg="msg" @on-change="handleChange"></TestPropsPmit>
</template>
```

## 子组件暴露属性和方法，给父组件引用
### 子组件
```typescript
<script setup lang="ts">
function testChild():void{
    console.log('子组件方法testChild被调用了');
}
const b = ref(2)
// 统一暴露属性
defineExpose({
    obj:{name: '张三', age: 2300},
    b,
    testChild
})
</script>
```
### 父组件
```typescript
<template>
    <TestPropsEmit ref="propsEmitRef" :msg='msg' @on-change="handleChange">         	</TestPropsEmit>
</template>
<script setup lang="ts">
    import TestPropsEmit from './components/test-props-emit/index.vue';
    import {ref, onMounted} from 'vue';

    const msg = ref('欢迎学习vite')

    const handleChange = (params:string)=>{
        console.log(params);
    }

    const propsEmitRef = ref()
    onMounted(()=>{
        console.log(propsEmitRef.value.child);
    })
</script>
```

## component动态组件
```typescript
<script setup lang='ts'>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>

```

## ts限制普通函数/箭头函数参数类型
```typescript
// 普通函数
<script setup lang="ts">
   	function test(params:(string|boolean)):void {
        console.log(params);
    }
    test('5555')
</script>
        
//箭头函数，推荐用法
<script setup lang="ts">
    const test = (params:(string|boolean))=>{
        console.log(params)
    }
    test('5555')
</script>

```

## vuex配置和使用
### 安装vuex
```bash
yarn add vuex@next --save
```
## store/index.ts
```typescript
import { InjectionKey } from 'vue'
/**
 * 引入 InjectionKey 并将其传入 useStore 使用过的任何地方，
 * 很快就会成为一项重复性的工作。为了简化问题，可以定义自己
 * 的组合式函数来检索类型化的 store 
 */
// 未简化useStore版
// import { createStore, Store } from 'vuex'
// 简化useStore版
import { useStore as baseUseStore, createStore, Store} from 'vuex'

// 为 store state 声明类型
export interface State {
    username: string,
    count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

// 导出store模块
export const store = createStore<State>({
    state: {
        username: "测试store",
        count: 0
    },
    getters:{
        getName: state =>{
            return state.username
        }
    },
    mutations: {
        // 重置名称
        SET_NAME(state, params:string) {
            state.username = params
        }
    },
    actions:{}
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
    return baseUseStore(key)
}
```
## root/vuex-d.ts
```typescript
// 一个声明文件来声明 Vue 的自定义类型 ComponentCustomProperties
import {ComponentCustomProperties} from 'vue';
import {Store} from 'vuex';

declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State {
        count: number,
        username: string
    }

    // 为 `this.$store` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

```
## main.ts 引入
```typescript
import { createApp } from 'vue';
import App from './App.vue';
// 导入store模块, 传入 injection key
import { store, key } from '@/store';
const app = createApp(App)
app.use(store, key)
app.mount('#app')

```
## 验证vuex配置
```typescript
<el-button @click="changeName" size="small">点击修改名称</el-button>
<script setup lang="ts">
// vue 组件
import { useStore } from '@/store';
const store = useStore()
// 测试store重置名称
// store.commit('increment', 10)
function changeName():void{
    store.commit('SET_NAME', 10)
    console.log('修改后的名称：'+store.getters.getName);
}
console.log(store.state.count,store.getters.getName)
</script>

```

