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

> vite.config.js 可以书写成 esmodule 形式的原因：vite在读取 vite.config.js 时会优先使用 node 解析文件语法，如果发现是 esmodule 规范，则将 esmodule 规范替换变成 commonjs 规范


## vite 是如何让浏览器识别 .vue 文件的？
在 vite 项目中，vite 服务器会将 .vue 文件编译(词法分析、语法分析，查找替换等)为可让 Vue.CreateElement() 识别的 js 文件，再通过 Content-Type: text/javascript 的方式让浏览器识别，最终构建原生DOM


## vite 处理 CSS

vite 天生就支持对 css 文件的直接处理

1. vite 在读取到 main.js 中引用了 index.css
2. 使用 fs 模块读取 index.css 中的内容
3. 创建一个 style 标签，将 index.css 中文件内容直接 copy 到 style 标签内
4. 将 style 标签插入到 index.html 的 head 中
5. 将该 css 文件中的内容直接替换为 js 脚本（方便热更新 及 css 模块化），同时设置 Content-Type 为 js，从而让浏览器以 js 脚本的形式执行该 css 后缀的文件

CSS module 的作用就是为了避免类名重复问题，原理如下(基于 Node )：
1. 开启模块化：xxx.module.css
2. 将所有类名进行一定规则的替换（将 footer 替换为 _footer_i22st_1 ）
3. 同时创建一个映射对象 { footer: 'footer_i22st_1' }
4. 将替换过后的内容加入 style 中并插入到 head 标签
5. 将原有 css 擦除，替换为 JS脚本
6. 创建映射对象在脚本中默认导出

> Less Sass 等预处理器同理


## vite.config.js 中 css 配置

使用 css 属性控制 vite 对 css 的处理行为
```javascript
import {defineConfig} from "vite";

export default defineConfig({
	optimizeDeps: {
		exclude: [],
	},
	envPrefix: "ENV_", // 配置 vite 注入客户端环境变量校验的 env 前缀

	css: { // 对 css 行为进行配置
		// modules 最终会作为传入 postcss 里面的参数
		modules: {
			localsConvention: "camelCaseOnly", // 修改生成配置对象的key值展示方式（驼峰或中划线形式）
			scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化（有 hash 就是开启了模块化的一个标志，产生不同的 hash 控制样式类名不重复）
			// generateScopedName: '[name]_[local]_[hash:5]', // 生成类名展示形式：字符串规则
			// generateScopedName: (name, filename, css) => { // 生成类名展示形式：函数
			// 	// name -> css 文件中的类名
			// 	// filename -> css 文件的绝对路径
			// 	// css -> 当前的样式
			// 	return `${name}_${filename}_${css}`
			// }

			hashPrefix: '', // 生成hash会根据你的类名 + 一些其他字符（文件名 + 内部随机生成字符串）进行生成

			globalModulePaths: ['./xxx.css'], // 数组中的路径不参与到 css 模块化
		}

	}
})

```



## vite 中 css 配置流程（preprocessorOptions）

preprocessorOptions 用来配置 css 预处理器的全局参数

```javascript
import {defineConfig} from "vite";

export default defineConfig({
	optimizeDeps: {
		exclude: [],
	},
	envPrefix: "ENV_", // 配置 vite 注入客户端环境变量校验的 env 前缀

	css: { // 对 css 行为进行配置
		// modules 最终会作为传入 postcss 里面的参数
		modules: {
			localsConvention: "camelCaseOnly", // 修改生成配置对象的key值展示方式（驼峰或中划线形式）
			scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化（有 hash 就是开启了模块化的一个标志，产生不同的 hash 控制样式类名不重复）
            
			// generateScopedName: '[name]_[local]_[hash:5]', // 生成类名展示形式：字符串规则
			// generateScopedName: (name, filename, css) => { // 生成类名展示形式：函数
			// 	// name -> css 文件中的类名
			// 	// filename -> css 文件的绝对路径
			// 	// css -> 当前的样式
			// 	return `${name}_${filename}_${css}`
			// }

			hashPrefix: '', // 生成hash会根据你的类名 + 一些其他字符（文件名 + 内部随机生成字符串）进行生成

			globalModulePaths: ['./xxx.css'], // 数组中的路径不参与到 css 模块化
		},
		preprocessorOptions: { // key + config 的形式，key 代表预处理器名称
			less: { // 配置对象会最终给到 less 的执行参数（全局参数）
				math: 'always', // 变量计算：如 100px / 2, 配置 always 最终会输出 50px
				globalVars: { // 全局变量
					mainColor: 'red' // 全局颜色
				}
			},
			sass: {

			}
		},
		devSourcemap: 'true', // 开启 css 的 sourcemap，默认为 false
	},
})
```






## postcss

vite 对 postcss 天然支持

postcss工作原理类似过滤器

> postcss 与 less、sass 等预处理不一样，现阶段（2022年）postcss 不在集成对 less、sass 的处理，一般工作成流程是先编译 less、sass 文件，产出的结果再交由 postcss 进行语法降级、前缀补全 等一系列操作
> 如果需要兼容预处理器，需要自行查找或开发 postcss 针对预处理的插件即可
> 故而 postcss 也被称作 **后处理器**

```bash
yarn add postcss-cli postcss -D
yarn add postcss-preset-env -D
```
```javascript
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
	plugins: [
		postcssPresetEnv(/* pluginOptions */)
    ]
}

```

### 配置




















