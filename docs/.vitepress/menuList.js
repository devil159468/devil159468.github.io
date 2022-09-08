// 原始 sidebar 备份
let originSidebarBackup = {
	'/01FE/': [
		{
			// text: 'JavaScript',
			items: [
				{text: 'JavaScript', link: '/01FE/JavaScript', activeMatch: '/01FE/'},
				{text: 'TypeScript', link: '/01FE/TypeScript'},
				{text: 'Vue', link: '/01FE/Vue'},
				{text: 'React', link: '/01FE/React'},
			]
		},
		{
			// text: 'H && C',
			items: [
				{text: 'HTML', link: '/01FE/HTML'},
				{text: 'CSS', link: '/01FE/CSS'},
			]
		},
		{
			text: '工程化',
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
			text: '面试题',
			items: [
				{text: '前端面试题', link: '/01FE/FEQuestions'},
			]
		},
	],
	'/02BE/': [
		{
			text: '语言',
			items: [
				{text: 'NodeJS', link: '/02BE/NodeJS'},
				{text: 'Go', link: '/02BE/Golang'},
				{text: 'Rust', link: '/02BE/Rust'},
				{text: 'Lua', link: '/02BE/Lua'},
			]
		},
		{
			text: '数据库',
			items: [
				{text: 'MongoDB', link: '/02BE/MongoDB'},
				{text: 'MySQL', link: '/02BE/MySQL'}
			]
		},
		{
			text: '面试题',
			items: [
				{text: '后端面试题', link: '/02BE/BEQuestions'},
			]
		},
	],
	'/03Server/': [
		{
			text: '服务器',
			items: [
				{text: 'Linux', link: '/03Server/Linux'},
				{text: 'Shell', link: '/03Server/Shell'},
			]
		},
		{
			text: '架构',
			items: [
				{text: 'Docker', link: '/03Server/Docker'},
				{text: 'CI & CD', link: '/03Server/CICD'},
				{text: '架构', link: '/03Server/Architecture.md'},
			]
		},
	],
	'/04Tools/': [
		{
			text: 'CSS',
			items: [
				{text: 'CSS', link: '/04Tools/css.md'},
			]
		},
		{
			text: 'JavaScript',
			items: [
				{text: '原生JS', link: '/04Tools/pureJavascript.md'},
				{text: 'vue2', link: '/04Tools/vue2.md'},
				{text: 'vue3', link: '/04Tools/vue3.md'},
				{text: 'react', link: '/04Tools/react.md'},
			]
		},
		{
			text: 'NodeJS',
			items: [
				{text: 'NPM', link: '/04Tools/npm.md'},
			]
		},
		{
			text: '其他',
			items: [
				{text: '小程序', link: '/04Tools/miniprogram.md'},
				{text: 'Docker', link: '/04Tools/docker.md'},
				{text: 'WebStorm', link: '/04Tools/webstorm.md'},
				{text: 'VsCode', link: '/04Tools/vscode.md'},
			]
		},
	],
	'/05Skill/': [
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
	],
	'/06Solution/': [
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
	],
	'/07Game/': [
		{
			// text: '游戏开发',
			items: [
				{text: '游戏开发', link: '/07Game/GameDevelopment.md'},
				{text: '人工智能', link: '/07Game/ArtificialIntelligence.md'},
				{text: '三维开发', link: '/07Game/ThreeDimensions.md'},
			]
		}
	],
}


let menuDetailList = [
	{
		text: '前端',
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
		text: '后端',
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
		text: '服务器',
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
		text: '常用模板',
		sidebarName: '/04Tools/',
		items: [
			{
				items: [
					{text: 'CSS', link: '/04Tools/css.md'},
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
		text: '基础技能',
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
		text: '解决方案',
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
		]
	},
	{
		text: '游戏开发',
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

module.exports = {
	menuList
}
