# 工程化

## Npm包
### package.json详解
```javascript
{
	"name": "vuepress-knowledge",
    "version": "1.0.0",
    "main":" index.js",
    "license": "MIT",
    "scripts": {
		"dev": "vuepress dev docs",
        "build": "vuepress build docs",
        "push-mirror": "git push --mirror xxx",
        "push-github": "git push --mirror xxx"
	},
	"devDependencies": {
		"vuepress": "^1.8.2"
	},
	"keywords": "vue",
    "author": "ElliotKnight",
    "description": "编程知识积累"
}
```

| 字段          | 说明        | 是否必填 |
|-------------|:----------|:----:|
| name        | 项目名称      |  是   |
| version     | 项目版本      |  是   |
| main        | 入口文件      |      |
| license     | 项目遵守的许可证  |      |
| script      | 可运行的npm命令 |      |
| keywords    | 关键字       |      |
| author      | 作者        |      |
| description | 项目描述      |      |


### 字段详解：
- name
  - 长度必须小于或等于214个字符，不能以“.”或者“_”开头，不能包含大写字母。
  - 名称可以作为参数被传入require（""），用来导入模块，所以应尽量语义化。
  - 字段不能与其他模块名重复，可以使用npm view命令查询模块名是否重复。
- version
  - 遵守语义化版本2.0.0（SemVer）规范。格式为主版本号.次版本号.修订号。主版本号表示做了不兼容的API修改，次版本号表示做了向下兼容的功能性新增，修订号表示做了向下兼容的bug修复。
  - 如果某个版本的改动比较大，并且不稳定，可能无法满足预期的兼容性需求，就需要发布先行版本。
  - 先行版本号可以加到“主版本号.次版本号.修订号”的后面，通过“-”号连接以点分隑的标识符和版本编译信息：内部版本（alpha）、公测版本（beta）和候选版本（rc，即release candiate），vue发布的版本号如图1-3所示。
  - 查看npm包的版本信息，以vue包为例。
    - 查看最新版本：npm view vue version。
    - 查看所有版本：npm view vue versions。
- keywords：
  - 包关键字。包中的description字段和keywords字段需要进行匹配，写好package.json文件中的description字段和keywords字段将有利于增加包的曝先率。
- 依赖包：
  - npm包声明会添加到dependencies或者devDependencies中。
  - dependencies中声明的是项目在生产环境中所必需的包。
  - devDependencies中声明的是开发阶段需要的包，
  - 如Webpack、ESLint、Babel等，用来辅助开发。打包上线时并不需要这些包，所以要根据包的实际用途把它们声明在适当的位置。
    - 若希望在找不到包或者安装失败时，npm包能继续运行，则可将该包放在optionalDependencies对象中。
    - optionalDependencies对象中的包会覆盖dependencies中同名的包，这一点需要特别注意。
- scripts脚本：
  - package.json内置脚本入口，是stage-value键值对配置，key为可运行的命令，
  - 通过npm run执行命令。除了运行基本的scripts命令，还可以结合pre和post完成前置、后续操作，该操作可以类比单元测试用的setUp和tearDown。
- main配置：指定加载入口，在Browser环境和Node环境中均可使用。
  - 如果项目发布成了npm包，则用户安装并且使用require（'my-module'）后返回的就是main字段中所列出文件的module.exports属性。
  - 如果没有该字段，则Node会尝试加载根目彔的index.js、index.json或者index.node。
  - 如果都没有找到，就会报错，只能通过require（'my-module/dist/xxx.js'）这种方式加载。
- module配置：定义npm包的ESM规范的入口文件，在Browser环境和Node环境中均可使用。
- browser配置：npm包在Browser环境下的入口文件。
> - main、module和browser这三项配置都和入口文件相关，之所以把它们放在一起介绍，是因为这三项之间是有差别的，特别是在不同的使用场景下。
> - 在Web环境下，如果使用loader加载ESM（ES module），那么这三项配置的加载顺序是browser→module→main；
> - 如果使用require加载CommonJS模块，则加载的顺序是main→module→browser。
> - Webpack在进行项目构建时，有一个target选项，默认为Web，即构建Web应用。如果需要编译一些同构项目，如node项目，则只需将webpack.config.js的target选项设置为node进行构建即可。
> - 如果在Node环境中加载CommonJS模块或者ESM，则只有main字段有效。
- engines：为了让项目能够“开箱即用”，可以在engines中说明具体的版本号。『engines仅起到说明的作用，即使用户安装的版本不符合，也不影响依赖包的安装。』
- bin配置（脚手架常用）：许多包都有一个或多个可执行文件，可以使用npm link命令把这些文件导入全局路径中，以便在任意目彔下执行。
- config：配置scripts运行的配置参数
- author：作者
- license：需要遵守的协议
- repository：一个对象配置，type说明是Git库还是svn库，URL说明该包或者工程源代码地址。
- bugs：该包或者工程的bug地址或者反馈问题的E-mail，可以指定一个或者两个，以便于author快速搜集、处理问题。
- OS：
- publicConfig：在发布时使用的一组配置。如使用registry指定发布的地址来发布指定的tag、access（public，restricted）等。

其他常见配置
- unpkg：npm包中的所有文件都开启了CDN服务，该CDN服务由unpkg提供。
- jsdelivr配置：免费的CDN服务配置。
- sideEffects配置：该项为Webpack的辅助配置，是Webpack 4新增的一个特性，用来声明该包或模块是否包含sideEffects（副作用）。
  - 原理是Webpack能将标记为side-effects-free的包由import{a}from xx转换为import{a}from'xx/a'，从而自动去掉不必要的模块。
  - 如果我们引入的包或模块标记了sideEffects：false，那么不管它是否有副作用，只要没有被用到，整个包或模块就会被完整地移除。
- typings配置：ts的入口文件，作用与main配置相同。
- lint-staged：lint-staged是一个在Git暂存文件上运行linters的工具，配置后每次修改一个文件即可给所有文件执行一次lint检查，通常配合gitHooks一起使用。
- gitHooks：定义一个钩子，在提交（commit）之前执行ESLint检查。
  - 在执行lint命令后，会自动修复暂存区的文件。
  - 修复之后的文件并不存储在暂存区中，所以需要用git add命令将修复后的文件重新加入暂存区。在执行pre-commit命令后，如果没有错误，就会执行git commit命令
- standard：
  - standard是一个JavaScript代码检查和优化的工具库，可以在package.json包中增加相应的配置来优化代码
- browserlist：设置浏览器的兼容情况。
- Babel：Babel的编译配置


## Babel

## 打包及构建工具
### WebPack
- 解析、源码及实现
- loader 及 插件开发

### Rollup
- 解析
- 源码及实现

```javascript
// rollup.config.js
export default {
	input: './src/main.js', // 入口文件
    output: {
		file: './dist/bundle.js', // 导报后的存放文件
        format: 'cjs', // 输出格式 amd es6 iife umd cjd
        name: 'bundleName' // 如果是 iife，umd 需要指定一个全局变量
    }
}
```

### Vite
- 解析、源码及实现
- 插件开发







### 工程化应用
- Npm包开发
- 全局埋点系统(Vue + Golang)
