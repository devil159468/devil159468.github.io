export default {
	// 全局配置
	themeConfig: {
		// 顶部导航栏设置：左侧
		siteTitle: 'Elliot Knight',
		logo: '/img.png',

		// 顶部导航栏设置：右侧
		nav: [
			{
				text: '前端',
				items: [
					// 单一菜单
					// {text: 'JavaScript', link: '/01FE/JavaScript', activeMatch: '/01FE/'},
					// {text: 'Engineering', link: '/01FE/Engineering', activeMatch: '/01FE/'},

					// 下拉菜单
					{
						text: 'JavaScript',
						items: [
							{ text: 'JavaScript', link: '/01FE/JavaScript' },
							{ text: '工程化', link: '/01FE/Engineering' }
						]
					},
					{
						text: 'H && C',
						items: [
							{ text: 'Html', link: '/01FE/HTML' },
							{ text: 'CSS', link: '/01FE/CSS' }
						]
					}
				]
			},
			{
				text: '后端',
				items: [
					{
						text: '语言',
						items: [
							{ text: 'NodeJS', link: '/02BE/NodeJS' },
							{ text: 'Go', link: '/02BE/Golang' },
							{ text: 'Rust', link: '/02BE/Rust' }
						]
					},
					{
						text: '数据库',
						items: [
							{ text: 'MongoDB', link: '/02BE/MongoDB' },
							{ text: 'MySQL', link: '/02BE/MySQL' }
						]
					}
				]
			},

			{ text: 'Gitee', link: 'https://gitee.com/Elliot-Devil' },
		],

		// 社交账号
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/devil159468' },
		],



		// 侧边栏配置
		sidebar: {
			'/01FE/': [
				{
					text: 'JavaScript',
					items: [
						{ text: 'JavaScript', link: '/01FE/JavaScript', activeMatch: '/config/01FE/' },
						{ text: 'Engineering', link: '/01FE/Engineering' },
					]
				},
				{
					text: 'H && C',
					items: [
						{ text: 'HTML', link: '/01FE/HTML' },
						{ text: 'CSS', link: '/01FE/CSS' },
					]
				}
			],
			'/02BE/': [
				{
					text: '语言',
					items: [
						{ text: 'NodeJS', link: '/02BE/NodeJS' },
						{ text: 'Go', link: '/02BE/Golang' },
						{ text: 'Rust', link: '/02BE/Rust' }
					]
				},
				{
					text: '数据库',
					items: [
						{ text: 'MongoDB', link: '/02BE/MongoDB' },
						{ text: 'MySQL', link: '/02BE/MySQL' }
					]
				}
			],

		},






		// 页脚
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © Elliot Knight'
		}
	},


}
