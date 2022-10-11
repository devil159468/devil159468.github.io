import { defineConfig } from "vitepress";

// 路由数组
let menuDetailList = [
	{
		text: 'FE',
		sidebarName: '/01FE/',
		items: [

			// 下拉菜单
			{
				text: 'JavaScript',
				// isSowTextNav: true,
				// isSowTextSidebar: true,
				items: [
					{text: 'JavaScript', link: '/01FE/JavaScript'},
					{text: 'TypeScript', link: '/01FE/TypeScript'},
					{text: 'Vue', link: '/01FE/Vue'},
					{text: 'React', link: '/01FE/React'},
				]
			},
			{
				// text: '工程化',
				items: [
					{text: '工程化', link: '/01FE/Engineering'},
					{text: 'NPM', link: '/01FE/NPM'},
					{text: '构建工具', link: '/01FE/BuildTool'},
					{text: 'Babel', link: '/01FE/Babel'},
					{text: 'WebPack', link: '/01FE/WebPack'},
					{text: 'Rollup', link: '/01FE/Rollup'},
					{text: 'Vite', link: '/01FE/Vite'}
				]
			},
			{
				// text: 'H && C',
				items: [
					{text: 'Html', link: '/01FE/HTML'},
					{text: 'CSS', link: '/01FE/CSS'}
				]
			},
			{
				// text: '面试题',
				items: [
					{text: '前端面试题', link: '/01FE/FEQuestions'},
				]
			},
		]
	},
	{
		text: 'BE',
		sidebarName: '/02BE/',
		items: [
			{
				// text: '语言',
				items: [
					{text: 'NodeJS', link: '/02BE/NodeJS'},
					{text: 'Go', link: '/02BE/Golang'},
					{text: 'Rust', link: '/02BE/Rust'},
					{text: 'Lua', link: '/02BE/Lua'},
				]
			},
			{
				// text: '数据库',
				items: [
					{text: 'MongoDB', link: '/02BE/MongoDB'},
					{text: 'MySQL', link: '/02BE/MySQL'}
				]
			},
			{
				// text: '后端面试题',
				items: [
					{text: '后端面试题', link: '/02BE/BEQuestions.md'}
				]
			},
		]
	},
	{
		text: 'Service',
		sidebarName: '/03Server/',
		items: [
			{
				// text: '服务器',
				items: [
					{text: 'Linux', link: '/03Server/Linux'},
					{text: 'Shell', link: '/03Server/Shell'},
				]
			},
			{
				// text: '架构',
				items: [
					{text: 'Docker', link: '/03Server/Docker'},
					{text: 'CI & CD', link: '/03Server/CICD'},
					{text: '架构', link: '/03Server/Architecture.md'},
				]
			},
		]
	},

	{
		text: 'Template',
		sidebarName: '/04Tools/',
		items: [
			{
				items: [
					{text: 'CSS', link: '/04Tools/css.md'},
				]
			},
			{
				items: [
					{text: '公共接口', link: '/04Tools/Interface.md'},
				]
			},
			{
				items: [
					{text: '原生JS', link: '/04Tools/pureJavascript.md'},
					{text: 'vue2', link: '/04Tools/vue2.md'},
					{text: 'vue3', link: '/04Tools/vue3.md'},
					{text: 'react', link: '/04Tools/react.md'},
				]
			},
			{
				items: [
					{text: 'NPM', link: '/04Tools/npm.md'},
				]
			},
			{
				items: [
					{text: '小程序', link: '/04Tools/miniprogram.md'},
					{text: 'Docker', link: '/04Tools/docker.md'},
					{text: 'WebStorm', link: '/04Tools/webstorm.md'},
					{text: 'VsCode', link: '/04Tools/vscode.md'},
				]
			},
		]
	},
	{
		text: 'Skill',
		sidebarName: '/05Skill/',
		items: [
			{
				// text: '基础技能',
				items: [
					{text: '计算机组成原理', link: '/05Skill/PrinciplesOfComputerComposition.md'},
					{text: '数据结构与算法', link: '/05Skill/DataStructuresAndAlgorithms.md'},
					{text: '设计模式', link: '/05Skill/DesignPatterns.md'},
					{text: 'Leetcode', link: '/05Skill/Leetcode.md'},
				]
			},
			{
				// text: '工具',
				items: [
					{text: 'Git', link: '/05Skill/Git.md'},
					{text: '思维导图', link: '/05Skill/MindMap.md'},
				]
			},

		]
	},

	{
		text: 'Plan',
		sidebarName: '/06Solution/',
		items: [
			{
				text: 'SDK',
				items: [
					{text: '埋点SDK', link: '/06Solution/trackingSdk.md'},
				]
			},
			{
				text: '方案',
				items: [
					{text: '组件库', link: '/06Solution/uiComponentLibrary.md'},
					{text: '工具库', link: '/06Solution/toolsLibrary.md'},
				]
			},
			{
				text: '开发心得',
				items: [
					{text: '开发心得', link: '/06Solution/DevInsight.md'},
				]
			},
		]
	},
	{
		text: 'Game',
		sidebarName: '/07Game/',
		items: [
			{
				text: '游戏开发',
				items: [
					{text: '游戏开发', link: '/07Game/GameDevelopment.md'},
					{text: '人工智能', link: '/07Game/ArtificialIntelligence.md'},
					{text: '三维开发', link: '/07Game/ThreeDimensions.md'},
				]
			},

		]
	},

	{
		text: '关注我',
		items: [
			{text: 'Github', link: 'https://github.com/devil159468'},
			{text: 'Gitee', link: 'https://gitee.com/Elliot-Devil'},
			{text: '博客国外地址', link: 'https://devil159468.github.io/'},
			{text: '博客国内地址', link: 'https://elliot-devil.gitee.io/'},
		]
	},
]

// 整合方法
let menuList = {
	nav: _processNav(),
	sideBar: _processSidebar()
}

// 顶部导航
function _processNav () {
	return menuDetailList
}
// 侧边栏导航
function _processSidebar () {

	let result = {}
	for (let i of menuDetailList) {
		// console.log('i',i)

		if (i.sidebarName) {
			result[i.sidebarName] = i.items
		}
	}
	// console.log('result', result)

	return result
}

export default defineConfig({
	// 全局设置
	lang: 'zh-CH',
	lastUpdated: true,
	markdown: {
		theme: 'material-palenight',
		lineNumbers: true
	},

	// Head及SEO设置
	head: [
		[
			"meta",
			{
				name: "viewport",
				content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
			},
		],
		["meta", { name: "keywords", content: "Elliot Knight的Blog" }],
		["link", { rel: "icon", href: "/favicon.ico" }],
	],

	// 浏览器Tab标签栏文本：左侧
	title: 'Elliot Knight\'s Blog',
	// 浏览器默认标签栏文本：右侧
	titleTemplate: 'Elliot Knight',

	// 主题配置
	themeConfig: {
		// 顶部导航栏设置：左侧
		logo: '/avatar.png',
		siteTitle: 'Elliot Knight',

		// 顶部导航栏设置：右侧
		nav: menuList['nav'],

		// 社交账号
		// socialLinks: [
			// { icon: 'github', link: 'https://github.com/devil159468' },
		// ],

		// 侧边栏配置
		sidebar: menuList['sideBar'],

		// 页脚
		footer: {
			message: 'Released under the MIT License. Thanks to WebStorm software support.',
			copyright: 'Copyright © Elliot Knight'
		},

		// Algolia 搜索
		algolia: {
			appId: 'FOWT46OZME',
			apiKey: '001f1a95b14b37a9454dcce7d4795186',
			indexName: 'devil159468',
			container: 'div',
			debug: false
		}
	},

})
