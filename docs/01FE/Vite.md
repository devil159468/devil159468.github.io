# Vite

[Vite官网](https://vitejs.cn/guide/why.html)
优点：开箱即用，不需要读取全部依赖，启动服务很快
缺点：统一的ESM模式，仅关注浏览器端的开发体验

## create-vite 与 vite
```bash
yarn create vite
```
做了什么？
1. 全局安装：create-vite(vite 脚手架)
2. 直接运行 creat-vite bin目录下的执行配置

> 误区：官网中yarn create 构建项目的过程 并不是 vite 在做的工作

create-vite(vite脚手架(预设)) 和 vite 的关系： create-vite 内置了 vite

> 理解预设的含义：
> - 毛坯房：做装修、刮大白、买家具家电。。。
> - 精装房：拎包入住



## Vite安装
```bash
yarn add vite -D
```


## Vite 预加载
```bash
# 正常引入一个依赖
import _ from "lodash"

# Vite解析后
import _ from '/node_modules/.vite/lodash'
import __vite__cjsImport0_lodash from '/node_modules/.vite/lodash.js?v=b6093d67'
```
**依赖预构建**：Vite 会查找对应的依赖，调用 esbuild(对 js 语法进行处理的库)，将其他非凡的代码转换为 esmodule 规范，统一放置在当前目录下的 node_modules/.vite/deps 下。同时对 esmodule 规范的各个模块进行统一集成。有了依赖预构建以后，无论有多少的引用，Vite都会尽可能的将他们进行集成最后只生成一个或几个模块

解决的问题如下：
1. 不同的第三方包会有不同的导出格式(vite无法约束其他人)
2. 对路径的处理上可以直接用 .vite/deps, 方便路径重写
3. 网络多包传输的性能问题(也是原生 esmodule 规范没有支持 node_modules 的原因【递归依赖引用会导致严重的性能问题】)


## Vite 配置文件处理细节

1. vite配置文件的语法提示
2. 区分运行环境处理：
   1. vite.config.js // 入口文件
   2. vite.base.config.js // 通用基础文件
   3. vite.dev.config.js // 开发环境配置
   4. vite.pord.config.js // 生产环境配置

## Vite 环境变量配置

> 环境变量：根据当前代码环境产生值的变化的变量

### 代码环境：
1. 开发环境
2. 测试环境
3. 预发布环境
4. 灰度环境
5. 生产环境

### vite中的环境变量处理
使用 dotenv 这个三方库：dotenv 会自动读取 .env 文件并解析文件中对应的环境变量，同时注入到 process 对象下，但 vite 考虑到和其他配置的一些冲突问题，vite 不会直接注入，需要开发者手动调用。

涉及到 vite.config.js 中的配置
- root
- envDir：配置当前环境变量的文件地址

.env: 所有环境都需要用到的环境变量
.env.development: 开发环境需要用到的环境变量(vite 默认开发环境取名为 development )
.env.production: 生产环境需要用到的环境变量(vite 默认生产环境取名为 production )

### vite 使用 loadEnv 工作流程：
1. 找到 .env 文件，并解析其中的环境变量，并放入变量中
2. 会将传入的 mode 变量进行拼接，并根据我们提供的目录取得对应配置文件进行解析，再放入一个对象中
3. 最后合并两个对象
```javascript
const baseEnvConfig = 读取 .env 配置
const modeEnvConfig = 读取 mode env 相关配置
const lastEnvConfig = {...baseEnvConfig, ...modeEnvConfig }
```

如果是客户端，vite会将对应的环境变量注入到 import.meta.env 中，vite为了防止开发者将隐私类的变量直接注入 import.meta.env 中从而进行了拦截，如果环境变量不是以 VITE 开头，vite 就不会注入到客户端【可以使用 envPreFix 配置更改】


### vite 是如何让浏览器识别 .vue 文件的？





> vite.config.js 可以书写成 esmodule 形式的原因：vite在读取 vite.config.js 时会优先使用 node 解析文件语法，如果发现是 esmodule 规范，则将 esmodule 规范替换变成 commonjs 规范



