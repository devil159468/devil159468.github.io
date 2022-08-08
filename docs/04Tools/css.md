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

## 
