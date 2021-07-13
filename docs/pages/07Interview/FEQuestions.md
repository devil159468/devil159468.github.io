# 前端面试题

## this 指向问题
1. 如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window(非严格模式)。
2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
3. 如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，**this指向的也只是它上一级的对象。

## call 实现
Call 执行过程
1. 将函数设为对象的属性
2. 执行&删除这个函数
3. 指定this到函数并传入给定参数执行函数
4. 如果不传入参数，默认指向为 window
```js
// 模拟 call bar.mycall(null);
// 实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.myCall = function(context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 在context上加一个唯一值不影响context上的属性
  let key = Symbol('key')
  context[key] = this; // context为调用的上下文,this此处为函数，将这个函数作为context的方法
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组
  
  let result = context[key](...args);
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
};
```

## apply 实现
利用this的上下文特性。
```js
Function.prototype.myApply = function(context = window, ...args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 在context上加一个唯一值不影响context上的属性
  let key = Symbol('key')
  context[key] = this; // context为调用的上下文,this此处为函数，将这个函数作为context的方法
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组
  
  let result = context[key](args); // 这里和call传参不一样
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
}
```
```js
// 使用
function f(a,b){
 console.log(a,b)
 console.log(this.name)
}
let obj={
 name:'Obj'
}
f.myApply(obj,[1,2])  //arguments[1]
```

## bind 实现



### 防抖
限制一个函数在事件触发的N秒以后再执行，若期间事件再次被触发，则重新计算延迟

```js
// func是用户传入需要防抖的函数
// wait是等待时间
const debounce = (func, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
```

### 节流
规定在单位时间内只能有一次事件可以真正触发函数的执行，其他触发被丢弃
```js
// func是用户传入需要防抖的函数
// wait是等待时间
const throttle = (func, wait = 50) => {
  // 上一次执行该函数的时间
  let lastTime = 0
  return function(...args) {
    // 当前时间
    let now = +new Date()
    // 将当前时间和上一次执行函数时间对比
    // 如果差值大于设置的等待时间就执行函数
    if (now - lastTime > wait) {
      lastTime = now
      func.apply(this, args)
    }
  }
}

setInterval(
  throttle(() => {
    console.log(1)
  }, 500),
  1
)
```




