# UI 组件库

## 使用Vite搭建开发环境
```bash
mkdir ek-ui-vite
cd ek-ui-vite

pnpm init
```

安装vite
```bash
pnpm i vite@"3.0.7" -D
```

创建测试页面
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello EK UI</h1>
    <script src="./src/index.ts" type="module"></script>
</body>
</html>
```

测试 TypeScript 支持
```typescript
const str: string = "Hello Vite"
console.log(str)
```

安装 Vue3 及 Vite 的 vue 插件
```bash
pnpm i vue@"3.2.37"
pnpm i @vitejs/plugin-vue@"3.0.3" -D
pnpm i @vitejs/plugin-vue-jsx@"2.0.0" -D
```

安装 UnoCSS 库。
```bash
pnpm i -D unocss@"0.45.6"
pnpm i -D @iconify-json/ic@"1.1.4"
```


## 文档支持

添加 VitePress 文档
```bash
pnpm i vitepress@"0.22.4" -D
```

Markdown 插槽
```bash
pnpm i vitepress-theme-demoblock@"1.4.2" -D
```


## 测试保障

添加测试框架
```bash
pnpm i -D vitest@"0.21.1" happy-dom@"6.0.4" @vue/test-utils@"2.0.2"
```




























