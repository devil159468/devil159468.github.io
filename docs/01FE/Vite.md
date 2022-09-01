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
const baseEnvConfig = 'xxx'; // 读取 .env 配置
const modeEnvConfig = 'xxx'; // 读取 mode env 相关配置
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
```javascript
import {defineConfig} from "vite";
const path = require('path')

const postcssPresetEnv = require('postcss-preset-env')

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
		postcss: {
			plugins: [postcssPresetEnv({
				importFrom: path.resolve(__dirname, "./variable.css") // 需要加载的全局变量文件
			})]
		}
	},
})

```
```css
/* variable.css */
:root {
    --globalColor: lightbule;
}
```


## Vite加载静态资源

客户端静态资源：图片、视频等
服务端静态资源：除了动态API以外，其余的都可以被称为静态资源

vite 对静态资源基本上都是开箱即用的

```javascript
import {defineConfig} from "vite";
const path = require('path')

export default defineConfig({
	resolve: {
		// 目录别名
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets')
		}
	},
})

```

> alias 别名最终做的事情就是字符串替换

### SVG（Scalable Vector Graphics 可伸缩适量图形）

优点：不会失真，尺寸小

缺点：无法表示层次丰富的 图片信息

svg在前端多被用作图标

```javascript
import svgRaw from './xxx'

// 使用svg
document.body.innerHTML = svgRaw

// svg 填充颜色
const svgElement = document.getElementsByTagName('svg')[0]
svgElement.onmouseover = function () {
    this.style.fill = 'red';
}
```


## vite 在生产环境对静态资源的处理

打包后的资源为什么要有hash？

浏览器有缓存机制，静态资源只要名字不改，那么他就会直接使用缓存

```javascript
import {defineConfig} from "vite";

export default defineConfig({
	build: { // 构建生产环境的配置策略
		rollupOptions: { // 配置 Rollup 的一些构建策略
			output: {
				assetFileNames: "[hash],[name].[ext]", // 在 Rollup 中，hash 代表将你的的文件名和文件内容进行组合计算得来的结果
			}
		},
		assetsInlineLimit: 4096, // 4kb：小于该配置的值会转换为 base64 字符，否则转换为图片
		outDir: 'testDist', // 输出目录：根目录，默认值为 dist， 修改该项配置则可以自定义
		assetsDir: 'static', // 输出目录：静态文件目录，默认值为 src，修改该项配置则可以自定义
		emptyOutDir: true, // 清除输出目录中的所有文件
	}
})
```


## Vite 插件
> 插件(中间件)：在不同生命周期的不同阶段去调用不同的插件以达到不同的目的


## vite-aliases
vite-aliases 可以帮助我们自动生成别名：检测当前目录下包括src在内的所有文件夹，并帮助开发者生命别名

```javascript
import {defineConfig} from "vite";
import {ViteAliases} from 'vite-aliases'

export default defineConfig({

	plugins: [
		ViteAliases(), // 生成别名
	]
})
```


## 手写vite-alias插件

整个插件就是在vite的生命周期的不同阶段去做不同的事

vite 的插件必须返回给 vite 一个配置对象

通过 vite.config.js 返回出去的配置对象以及我们在插件的 config 生命周期中返回的对象都不是最终的配置对象

vite 会把这几个配置对象进行 merge 合并
```bash
{ ...defaultConfig, ...specifyVonfig }
```

手写vite-alias插件代码
```javascript
// vite 的插件必须返回给 vite 一个配置对象
const fs = require('fs');
const path = require('path')

function diffDirAndFile(dirFilesArr = [], basePath = "") {
	const result = {
		dirs: [],
		files: []
	}
	dirFilesArr.forEach(name => {
		const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name));
		console.log('currentFileStat', name, currentFileStat.isDirectory())
		const isDirectory = currentFileStat.isDirectory()

		if (isDirectory) {
			result.dirs.push(name)
		} else {
			result.files.push(name)
		}
	})

	return result
}

function getTotalSrcDir (keyName) {
	const result = fs.readdirSync(path.resolve(__dirname, '../src'))
	const diffResult = diffDirAndFile(result, '../src')
	// console.log('diffResult', diffResult)
	const resolveAliasesObj = {} // 返回一个别名对象
	diffResult.dirs.forEach(dirName => {
		const key = `${keyName}${dirName}`
		const absPath = path.resolve(__dirname, '../src' + '/' + dirName)
		// console.log('key',key,absPath)
		resolveAliasesObj[key] = absPath
	})

	return resolveAliasesObj
}

module.exports = ({
	keyName = '@'
} = {}) => {
	return {
		config (config, env) { // config 函数返回一个对象，整个对象是部分的 viteconfig 配置【需要自定义的部分】
			console.log('config111', config, env)
			// config: 目前的配置对象
			// env: mode: string (production || development), command: string


			const resolveAliasesObj = getTotalSrcDir(keyName)
			console.log('resolveAliasesObj', resolveAliasesObj)
			return {
				// 发挥一个 resolve ，将 src 目录下的所有文件夹进行别名控制
				// 读目录
				resolve: {
					alias: resolveAliasesObj
				}

			}
		}
	}
}

```

































































## vite 常用插件 vite-plugin-html

安装
```bash
yarn add vite-plugin-html
```

手写 vite-plugin-html
```javascript
// 插件部分
module.exports = (options) => {
	return {
		// 转换html
		// 将插件的执行时机提前
		transformIndexHtml: {
			enforce: 'pre',
			transform: (html, ctx) => {
				console.log('html', html)
				return html.replace(/<%= title %>/g, options.inject.data.title);
			}
		}
	}
}
```
```html
<!-- HTML部分 -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title><%= title %></title>
    </head>
    <body>
    
        <script src="main.js" type="module"></script>
    </body>
</html>

```


## vite 常用插件 vite-plugin-mock

mock.js 模拟海量数据。 vite-plugin-mock 依赖 mock.js 

安装
```bash
yarn add vite-plugin-mock mockjs -D
```

Mock 接口配置
```javascript
// mock/index.js

import mockjs from "mockjs";

const userList = mockjs.mock({
	'data|100': [{
		naem: '@cname',
		ename: '@name',
		'id|+1': 1,
		time: '@time',
		data: '@date',
	}]
})

// console.log('userList', userList)

module.exports = [
	{
		mothod: 'post',
		url: '/api/users',
		response: ({body}) => {
			// body -> 请求体
			return userList
		}
	}
]


```

项目中的使用示例
```javascript
fetch('/api/users', {
	method: 'post'
}).then(data => {
	console.log('data',data)
}).catch(err => {
	console.log('err',err)
})
```






















##
