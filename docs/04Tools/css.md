# CSS

## H5隐藏滚动条
```css
.hideScrollBar::-webkit-scrollbar {
    width: 0 !important;
    display: none;
}
```

## 文本超出隐藏
```css
/* 单行 */
.singleTextOverFlow {
   overflow:hidden;
   text-overflow:ellipsis;
   white-space:nowrap;
}

/* 多行 */
.multipleTextOverFlow2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

/* 多行 */
.multipleTextOverFlow3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
```

## 解决ios出现图片阴影问题
```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}


*:not(input, textarea) {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
```

## Scss 计算
```scss
min-height: calc(100vh - #{'43px'});
```

## IPhoneSE 样式适配 
```css
@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  
}
```

## 复制组件失效解决方法
```css
.canCopy {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}
```

## 修改v-html中的样式
```css
css中使用>>>
scss中使用::v-deep

word-break: break-all; // 针对折行
white-space: pre-line; // 针对 / 换行
```

## Scss 样式穿透
```scss
.recommand-carousel {
    ::v-deep .j-carousel-button-width-users {
        width: 10px !important;
        height: 3px !important;
        background: #FFFFFF !important;
        opacity: 0.4;
        border-radius: 3px !important;
    }
}
```

## flex 宽度自适应，文本溢出隐藏
```vue
<template>
    <div class="flexDemo">
        <div class="left"></div>
        <div class="singleTextOverFlow right"></div>
    </div>
</template>

<style lang="scss">
.flexDemo {
    .left {
        width: 50px;
    }
    .right {
        flex: 1;
        width: 0; // 方法1
        overflow: hidden; // 方法2
    }
}
</style>
```

## flex布局
```css
.flexCC {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexSC {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flexSaC {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.flexST {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.flexLT {
    display: flex;
    justify-content: left;
    align-items: start;
}
.flexLC {
  display: flex;
  justify-content: left;
  align-items: center;
}
.flexRC {
  display: flex;
  justify-content: right;
  align-items: center;
}
.flexCStretch {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.flexColomn {
    flex-direction: column;
}
.flexStretch {
    align-items: stretch;
}

.flex1 {
    flex: 1;
}
```


## Scss动画 - 底部滑入滑出
```vue
<template>
    
    <div class="animation" :class="{'animationReverse': isClose}"></div>
    
</template>

<script>
export default {
    data () {
        return {
            isClose: false,
        }
    }
}
</script>

<style lang="scss" scoped>
// 动画
@mixin keyframes($animationName) {
    @-webkit-keyframes #{$animationName} {
        @content;
    }
    @-moz-keyframes #{$animationName} {
        @content;
    }
    @-o-keyframes #{$animationName} {
        @content;
    }
    @keyframes #{$animationName} {
        @content;
    }
}

.animation {
    bottom: 0;
    animation: move .4s cubic-bezier(0.65, 0.05, 0.36, 1);
}
@include keyframes(move) {
    0% {
        height: 0;
    }
    100% {
        height: 90vh;
    }
}

.animationReverse {
    bottom: 0;
    animation: moveOut .5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
@include keyframes(moveOut) {
    0% {
        height: 90vh;
    }
    100% {
        height: 0;
    }
}
</style>
```

## 文字折行
```css
/* 处理文字折断 */
.breakAll {
    word-break: break-all;
}
/* 处理元素内空白 */
.whiteSpacePL {
    white-space: pre-line;
}
```
