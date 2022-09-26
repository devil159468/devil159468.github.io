import { defineConfig } from "vitepress";
import { menuList } from "./menuList"; // 导航列表


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
