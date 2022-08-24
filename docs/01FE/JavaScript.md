# JavaScript

## 代码规范
[JavaScript代码规范](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md)

## 类型
- 原始类型（基础类型）
  - Boolean
  - String
  - Number
  - Null
  - Undefined
  - Symbol（ES6 新定义）
  - BigInt
- 对象类型（引用类型）
  - Array
  - Object
  - Function
  - Date
  - Math
  - ...

### 原始类型
1. 布尔值（Boolean）
2. 字符串（String）
   1. 模板字符串
    ```javascript
    let name = 'Elliot'
    const str = `我是${name}~` // 输出： 我是Elliot
    ```
   2. 属性：length
   3. 方法
      1. 转大写字符：toUpperCase()『不修改原始值』
      2. 转小写字符：toLowerCase()『不修改原始值』
      3. 是否包含：includes(str)【返回布尔值】
      4. 获取下标：indexOf(str)【返回字符串中指定字符的第一个下标 或 -1】
      5. 获取最后一个下标lastIndexOf(str)【返回最后出现的指定字符下标 或 -1】
      6. 截取下标：slice(start,end)【截取包含 start 且 不包含 end 的字符串】
      7. 截取长度：substr(start,length)【截取从 start 开始，长度为 length 的字符串】
      8. 替换：replace(oldFlag,newFlag)【将 oldFlag 替换为 newFlag 且仅替换一次】
3. 数字（Number）
   1. 运算符：+ - * / **(幂运算) %(取余)
   2. 运算顺序：括号、次方、除法、乘法、加法、减法
   3. 快速加/减1：++ --
   4. 快速加/减N：+= N  -=N
   5. 非数字：NaN(Not A Number)
4. 空（Null）
5. 未定义（Undefined）
6. 符号（Symbol）
7. 大型数字（BigInt）

### 引用类型
1. 数组（Array）
   1. 定义
   ```javascript
      new Array()
      let arr = []
   ```
   2. 属性：length
   3. 方法
      1. 数组转字符串：arr.join(flag)【flag 为转换为字符串中的连接符】
      2. 获取下标：indexOf(str)【返回数组中指定字符的第一个下标 或 -1】
      3. 是否包含：includes(str)【返回布尔值】
      4. 连接数组：concat(arr1,arr2...)【合并多个数组】
      5. 尾添加：push(sth)【会更改原始值，返回值为新数组的长度】
      6. 尾删除：pop(sth)【会更改原始值，返回值为删除项的值】
      7. 首添加：unshift()【会更改原始值，返回值为新数组的长度】
      8. 首删除：shift()【会更改原始值，返回值为删除项的值】
      9. 删除指定下标：splice(index,length，item?)【会改变原始值，返回值为该数组下标元素，index为下标，length为删除长度数字，item为可选项，如果有值，则会替换删除的元素】
2. 对象（Object）
3. 函数（Function）
   1. 函数声明与表达式：函数声明有变量提升，表达式则没有
   ```javascript
    // 函数声明
    function logName () {
        console.log('Elliot')
    }
    // 函数表达式
    const name = function name() {
        console.log('Knight')
    }
   ```
   2. 函数默认值
   ```javascript
   function showName (name = '111') {console.log(name)}
   ```
4. 日期（Date）
5. 数学计算（Math）
6. 正则(RegExp)

## 数组与对象的循环
### 数组
- ES5： forEach、every 、some、 filter、map、reduce、reduceRight、
- ES6： find、findIndex、keys、values、entries
```javascript
ES5

let arr = [1,2,3,4,5]

// for 循环
for (let i = 0; i < arr.length; i++) {
	console.log("for循环：",i,arr[i]) // i 为 index，arr[i] 为对应元素
}
// for 循环优化版
for(let i = 0; len = arr.length,i < len; i++) {
	console.log("for循环：",i,arr[i]) // i 为 index，arr[i] 为对应元素
}



/*
 * forEach
 * value: 当前值；index：下标；array：当前数组
 * return不能中断函数继续执行，
 * 返回值：无
 * 不改变原数组
 */ 
arr.forEach((value, index, array) => {
	return value * 2;
});
console.log('forEach',arr);  //[1, 2, 3, 4, 5]



/*
 * map
 * value: 当前值；index：下标；array：当前数组
 * return不能中断函数继续执行，
 * 返回值：符合表达式的新数组
 * 改变原数组
 */
let mapArr = arr.map((value, index, array) => {
	return value * 2;
});
console.log('map',mapArr,arr); // [2, 4, 6, 8, 10], [1, 2, 3, 4, 5]



/*
 * filter：过滤
 * value: 当前值；index：下标；array：当前数组
 * return不能中断函数继续执行，
 * 返回值：符合filter表达式的数组
 * 不改变原数组
 */
let filterArrs = arr.filter((value, index, array) => {
	if (value > 2) {
		return true;
	} else {
		return false;
	}
});
console.log('filter',filterArrs,arr); //[3, 4, 5], [1, 2, 3, 4, 5]



/*
 * reduce：累加器
 * prev：前两个值的和；next：下一个值；index：下标；array：当前数组
 * return不能中断函数继续执行，
 * 返回值：所有元素累加后的结果
 * 不改变原数组
 */
let reduceArrs = arr.reduce((prev, next, index, array) => {
	console.log('reduceArrs',prev, next, index, array)
	console.log(prev);   // 1，3，6，10
	console.log(next);   // 2，3，4，5
	return prev + next;
});
console.log('reduce',reduceArrs, arr);  // 15, [1, 2, 3, 4, 5]



/*
 * some
 * value: 当前值；index：下标；array：当前数组
 * return不能中断函数继续执行，
 * 返回值：数组中存在一个符合表达式的值则返回true，否则返回false
 * 不改变原数组
 */
let someArrs = arr.some((value, index, array) => {
	return value > 3;
});
console.log('some',someArrs, arr);  // true, [1, 2, 3, 4, 5]

/*
 * every
 * value: 当前值；index：下标；array：当前数组
 * return不能中断函数继续执行，
 * 返回值：数组中每一项都符合表达式则返回true，否则返回false
 * 不改变原数组
 */
let everyArrs = arr.every((value, index, array) => {
	return value > 3;
});
console.log('every', everyArrs, arr);  //false, [1, 2, 3, 4, 5]



/*
 * for...in
 * 不能使用return
 * 返回值：无
 * 不改变原数组
 */
let arr = [1, 2, 3, 4, 5];
for(let i in arr) {
	console.log(i,arr[i]);  // i 为 index，arr[i] 为对应元素
}




/*
 * for...of
 * 不能使用return
 * 返回值：无
 * 不改变原数组
 */
let arr = [1, 2, 3, 4, 5];
for (let i of arr) {
	console.log(i);  // i：数组中每个元素
}


ES6
/*
 * find、findIndex
 * 不能使用return
 * 返回值：符合表达式的值的数组元素/下标
 * 不改变原数组
 */
let arrFind = [
	{name: 'a', age: 1},
	{name: 'b', age: 2},
	{name: 'c', age: 3},
	{name: 'd', age: 4},
];
console.log(arrFind.find((value => value.age === 3)))
console.log(arrFind.findIndex((value => value.age === 3)))


/*
 * keys(键名/下标)，values(值)，entries(键值对)   
 * 不能使用return
 * 返回值：无
 * 不改变原数组
 */
for (let index of arr.keys()) {
	console.log(index)
}
for (let elem of arr.values()) {
	console.log(elem)
}
for (let [index, elem] of arr.entries()) {
	console.log(index, elem)
} 
    
    
    
    
`
总结：
一般的循环用for,for in,for of 和 forEach
需要映射为新数组的用map，
需要筛选出想要的用filter，
数值需要进行累加的用reduce，
找值用some和every，
数组对象查找用find、findIndex
获取下标、值、或键值对用keys，values，entries   
并且想知道值的具体位置的可以用indexOf和lastIndexOf
`


// 性能对比测试
let arr = Array(100).fill(5);

console.time("for循环");
for(let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * 2;
}
console.timeEnd("for循环");  // for循环: 0.041ms

console.time("for...in循环");
for(let i in arr) {
	arr[i] = arr[i] * 2;
}
console.timeEnd("for...in循环"); // for...in循环: 0.126ms

console.time("for...of循环");
for(let i of arr) {
	arr[i] = arr[i] * 2;
}
console.timeEnd("for...of循环");  // for...of循环: 3532.695ms

console.time("forEach循环");
arr.forEach((value, index, arr) => {
	arr[index] = value * 2;
});
console.timeEnd("forEach循环");  // forEach循环: 0.103ms

console.time("map循环");
arr.map((value, index, arr) => {
	arr[index] = value * 2;
});
console.timeEnd("map循环"); //map循环: 0.086ms

`
结论：for > for in > for of > forEach > map
`

// 引用链接：https://juejin.cn/post/6844903865947521031



```

### 对象
```javascript
let obj = {
	name: "Elliot",
	age: 30,
	isAdmin: true
};

/*
 * for...in
 * 不能使用return
 * 返回值：无
 * 不改变原数组
 */
for (let i in obj) {
	console.log(i, arr[i]);  // name, Elliot; age, 30;  isAdmin, true
}



/*
 * Object.keys：返回 key 值的数组
 * Object.values：返回 values 值的数组
 * Object.entries：返回 key 及 values 值的二维数组
 */
let keys = Object.keys(obj);
console.log(keys);  // ['name', 'age', 'isAdmin']

let values = Object.values(obj);
console.log(values); // ['Elliot', 30, true]

var entries = Object.entries(obj);
console.log(entries);
```

## ES规范
### ES2021规范
- String.prototype.replaceAll
- 逻辑赋值运算符
- 逻辑赋值运算符
- 逻辑赋值运算符
- 逻辑赋值运算符
- Promise.all

### ES2020规范
- String.protype.matchAll
- 动态导入（dynamic import）
- BigInt
- Optional Chaining（可选链操作符）
- Nullish coalescing（空位操作符）
- globalThis
- 模块命名空间导出（module namespace export）。
- Promise.allSettled

### ES2019规范
- Array.flat Array.flatMap
- Object.fromEntries
- String.trimStart和String.trimEnd
- JSON.stringfy改造
- Symbol description属性

### ES2018规范
- 对象的Rest/Spread
- Promise.finally
- 异步迭代器

### ES2017规范
- Object.values/Object.entries
- 字符串补全
- 异步函数（asnyc）
- Object.getOwnPropertyDescriptors

## JQuery源码解析及实现
## Lodash源码解析及实现

## SDK开发

## 跨端应用
### 小程序
### Uni-app
### Electron
