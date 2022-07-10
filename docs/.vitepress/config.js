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
						// text: 'JavaScript',
						items: [
							{ text: 'JavaScript', link: '/01FE/JavaScript' },
							{ text: '工程化', link: '/01FE/Engineering' }
						]
					},
					{
						// text: 'H && C',
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
						// text: '语言',
						items: [
							{ text: 'NodeJS', link: '/02BE/NodeJS' },
							{ text: 'Go', link: '/02BE/Golang' },
							{ text: 'Rust', link: '/02BE/Rust' }
						]
					},
					{
						// text: '数据库',
						items: [
							{ text: 'MongoDB', link: '/02BE/MongoDB' },
							{ text: 'MySQL', link: '/02BE/MySQL' }
						]
					}
				]
			},
			{
				text: '服务器',
				items: [
					{ text: 'Linux', link: '/03Server/Linux.md' },
					{ text: 'Shell', link: '/03Server/Shell.md' },
					{ text: 'Docker', link: '/03Server/Docker.md' },
					{ text: 'CI & CD', link: '/03Server/CICD.md' },
					{ text: '架构', link: '/03Server/Architecture.md' },
				]
			},
			{
				text: '基础技能及工具',
				items: [
					{
						text: '基础技能',
						items: [
							{ text: '计算机组成原理', link: '/05Skill/PrinciplesOfComputerComposition.md' },
							{ text: '数据结构与算法', link: '/05Skill/DataStructuresAndAlgorithms.md' },
							{ text: '设计模式', link: '/05Skill/DesignPatterns.md' },
						]
					},
					{
						text: '工具',
						items: [
							{ text: 'Git', link: '/05Skill/Git.md' },
							{ text: '自有库', link: '/05Skill/PrivateLib.md' },
							{ text: '思维导图', link: '/05Skill/MindMap.md' },
						]
					},


				]
			},
			{
				text: '职业规划',
				items: [
					{ text: '职业规划', link: '/06Interview/CareerPlanning.md' },
					{ text: 'Leetcode', link: '/06Interview/Leetcode.md' },
					{ text: '前端面试题', link: '/06Interview/FEQuestions.md' },
					{ text: '后端面试题', link: '/06Interview/BEQuestions.md' },
					{ text: '管理', link: '/06Interview/Management.md' },
				]
			},
			{
				text: '游戏开发',
				items: [
					{ text: '游戏开发', link: '/07Game/GameDevelopment.md' },
					{ text: '人工智能', link: '/07Game/ArtificialIntelligence.md' },
					{ text: '三维开发', link: '/07Game/ThreeDimensions.md' },
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
			'/03Server/': [
				{
					text: '服务器',
					items: [
						{ text: 'Linux', link: '/03Server/Linux' },
						{ text: 'Shell', link: '/03Server/Shell' },
						{ text: 'Docker', link: '/03Server/Docker' },
					]
				},
				{
					text: '架构',
					items: [
						{ text: '架构', link: '/03Server/Architecture.md' },
						{ text: 'CI & CD', link: '/03Server/CICD' },
					]
				},
			],
			'/05Skill/': [
				{
					text: '基础技能',
					items: [
						{ text: '计算机组成原理', link: '/05Skill/PrinciplesOfComputerComposition.md' },
						{ text: '数据结构与算法', link: '/05Skill/DataStructuresAndAlgorithms.md' },
						{ text: '设计模式', link: '/05Skill/DesignPatterns.md' },
					]
				},
				{
					text: '工具',
					items: [
						{ text: 'Git', link: '/05Skill/Git.md' },
						{ text: '自有库', link: '/05Skill/PrivateLib.md' },
						{ text: '思维导图', link: '/05Skill/MindMap.md' },
					]
				}
			],
			'/06Interview/': [
				{
					text: '基础技能',
					items: [
						{ text: '职业规划', link: '/06Interview/CareerPlanning.md' },
						{ text: 'Leetcode', link: '/06Interview/Leetcode.md' },
						{ text: '前端面试题', link: '/06Interview/FEQuestions.md' },
						{ text: '后端面试题', link: '/06Interview/BEQuestions.md' },
						{ text: '管理', link: '/06Interview/Management.md' },
					]
				}
			],
			'/07Game/': [
				{
					text: '游戏开发',
					items: [
						{ text: '游戏开发', link: '/07Game/GameDevelopment.md' },
						{ text: '人工智能', link: '/07Game/ArtificialIntelligence.md' },
						{ text: '三维开发', link: '/07Game/ThreeDimensions.md' },
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
