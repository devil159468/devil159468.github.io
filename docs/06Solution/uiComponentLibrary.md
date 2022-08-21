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


## 代码风格检查
```bash
pnpm i eslint -D
# ESLint 专门解析 TypeScript 的解析器
pnpm i @typescript-eslint/parser -D

# 内置各种解析 TypeScript rules 插件
pnpm i @typescript-eslint/eslint-plugin -D

pnpm i eslint-formatter-pretty -D
pnpm i eslint-plugin-json -D
pnpm i eslint-plugin-prettier -D
pnpm i eslint-plugin-vue -D
pnpm i @vue/eslint-config-prettier -D
pnpm i babel-eslint -D
pnpm i prettier -D

```

### husky
```bash
# 安装
pnpm i husky -D

# 添加 husky 脚本：
npm set-script prepare "husky install"

# 添加生命周期钩子：
npx husky add .husky/pre-commit "pnpm lint"
```
### 修改 hooks 程序
```bash
# .husky/pre-commit
# !/bin/sh
. "$(dirname "$0")/_/husky.sh"
pnpm run lint
```

### 添加生命周期钩子
```bash
npx husky add .husky/pre-push "pnpm test:run"
```

### 添加脚本
```bash
# package.json

"scripts": {
    "test:run": "vitest run",
},

```



























