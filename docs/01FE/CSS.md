# CSS

::: details 基础知识一览

- 选择器的权重和优先级
- 盒模型
    - 盒子大小计算
    - margin 的重叠计算
- 浮动float
    - 浮动布局概念
    - 清理浮动
- 定位position
    - 文档流概念
    - 定位分类
    - fixed 定位特点
    - 绝对定位计算方式
- flex布局
- 如何实现居中对齐？
- 理解语义化
- CSS3 动画
- 重绘和回流
:::


## CSS 规范

[CSS规范参考](https://github.com/ecomfe/spec/blob/master/css-style-guide.md#user-content-32-%E5%B1%9E%E6%80%A7%E7%BC%A9%E5%86%99)

### 属性书写顺序

- Formatting Model 相关属性包括：position / top / right / bottom / left / float / display / overflow 等
- Box Model 相关属性包括：border / margin / padding / width / height 等
- Typographic 相关属性包括：font / line-height / text-align / word-wrap 等
- Visual 相关属性包括：background / color / transition / list-style 等

```css
.sidebar {
    /* formatting model: positioning schemes / offsets / z-indexes / display / ...  */
    position: absolute;
    top: 50px;
    left: 0;
    overflow-x: hidden;

    /* box model: sizes / margins / paddings / borders / ...  */
    width: 200px;
    padding: 5px;
    border: 1px solid #ddd;

    /* typographic: font / aligns / text styles / ... */
    font-size: 14px;
    line-height: 20px;

    /* visual: colors / shadows / gradients / ... */
    background: #f5f5f5;
    color: #333;
    -webkit-transition: color 1s;
       -moz-transition: color 1s;
            transition: color 1s;
}
```

### 响应式

```css
/* header styles */
@media (...) {
    /* header styles */
}

/* main styles */
@media (...) {
    /* main styles */
}

/* footer styles */
@media (...) {
    /* footer styles */
}
```

### 缩进

使用四个空格进行缩进

选择器 与 { 之间必须包含空格。

```css
.selector {
    margin: 0;
    padding: 0;
}
```

### 行长度

```css
/* 不同属性值按逻辑分组 */
background:
    transparent url(aVeryVeryVeryLongUrlIsPlacedHere)
    no-repeat 0 0;

/* 可重复多次的属性，每次重复一行 */
background-image:
    url(aVeryVeryVeryLongUrlIsPlacedHere)
    url(anotherVeryVeryVeryLongUrlIsPlacedHere);

/* 类似函数的属性值可以根据函数调用的缩进进行 */
background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.04, rgb(88,94,124)),
    color-stop(0.52, rgb(115,123,162))
);
```

### 选择器

```css
.post,
.page,
.comment {
    line-height: 1.5;
}

```

## 选择器的权重和优先级

- 代表内联样式，如style="xxx"，权值为 1000；
- 代表 ID 选择器，如#content，权值为 100；
- 代表类、伪类和属性选择器，如.content、:hover、[attribute]，权值为 10；
- 代表元素选择器和伪元素选择器，如div、p，权值为 1。

> 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为 0。

> 权重值大的选择器其优先级也高，相同权重的优先级又遵循后定义覆盖前面定义的情况。

## 盒模型
通用盒模型设置
```css
* {
    box-sizing:border-box
}
```
## 垂直边距塌陷
> 垂直边距塌陷：块级元素的外边距(margin)在垂直方向上的边距会重叠

### BFC(Block Formatting Context)
使用以下方式都能创建 BFC
1. float 的值不是 none。
2. position 的值不是 static 或者 relative。
3. display 的值是 inline-block、table-cell、flex、table-caption 或者inline-flex
4. overflow 的值不是 visible

## CSS Reset
	简介	代码	最后提交	star
| Reset方案       | 简介                                | 解释/说明    |
|:--------------|:----------------------------------|----------|
| reset.css     | CSS Tools: Reset CSS              | 旧项目	     |
| normalize.css | CSS Reset 的现代替代方案                 | 推荐(新项目)	 |
| reseter.css   | Normalize.css 和 CSS Reset 的未来替代方案 | 推荐(新项目)	 |

## CSS过度

## CSS动画
### @keyframes的两种方式
- from…to…
- 每个阶段百分比

### animation相关属性
| 属性名称                      | 解释           |
|:--------------------------|:-------------|
| animation-name            | 动画名称         |
| animation-duration        | 动画的持续时间      |
| animation-timing-function | 动画的过渡类型      |
| animation-delay           | 动画延迟的时间      |
| animation-iteration-count | 动画的循环次数      |
| animation-direction       | 动画在循环中是否反向运动 |
| animation-fill-mode       | 动画时间之外的状态    |
| animation-play-state      | 对象动画的状态      |





## CSS特殊效果库(幽灵按钮及特效类整合)



