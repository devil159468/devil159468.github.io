# 工程化

## package.json详解

```javascript
{
	"name"
:
	"vuepress-knowledge",
		"version"
:
	"1.0.0",
		"main"
:
	"index.js",
		"license"
:
	"MIT",
		"scripts"
:
	{
		"dev"
	:
		"vuepress dev docs",
			"build"
	:
		"vuepress build docs",
			"push-mirror"
	:
		"git push --mirror xxx",
			"push-github"
	:
		"git push --mirror xxx"
	}
,
	"devDependencies"
:
	{
		"vuepress"
	:
		"^1.8.2"
	}
,
	"keywords"
:
	"vue",
		"author"
:
	"ElliotKnight",
		"description"
:
	"编程知识积累"
}
```

| 字段          | 说明        |
|-------------|:----------|
| name        | 项目名称，必填   |
| version     | 项目版本，必填   |
| main        | 入口文件      |
| license     | 项目遵守的许可证  |
| script      | 可运行的npm命令 |
| keywords    | 关键字       |
| author      | 作者        |
| description | 项目描述      |

## 计划发布List

### 打包及构建工具

- WebPack
    - 解析、源码及实现
    - loader 及 插件开发
- Rollup解析、源码及实现
- Vite
    - 解析、源码及实现
    - 插件开发

### 工程化应用
- Vue插件开发
- Npm包开发
- SDK开发
- 全局埋点系统(Vue + Golang)
