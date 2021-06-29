module.exports = {
  title: "Elliot's Press",
  description: '编程知识汇总及总结',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 顶部导航
    nav:[

      // 首页
      { text: '首页', link: '/' },

      // 下拉列表
      {
        text: '前端',  //默认显示
        ariaLabel: '前端',   //用于识别的label
        items: [
          //点击标签会跳转至link的markdown文件生成的页面
          { text: 'HTML', link: '/pages/01FE/HTML.md' },
          { text: 'CSS', link: '/pages/01FE/CSS.md' },
          { text: 'JavaScript', link: '/pages/01FE/JavaScript.md' },
          { text: '工程化', link: '/pages/01FE/Engineering.md' },
        ]
      },
      {
        text: '后端',
        ariaLabel: '后端',
        items: [
          { text: 'NodeJS', link: '/pages/02BE/NodeJS.md' },
          { text: 'Golang', link: '/pages/02BE/Golang.md' },
          { text: 'Rust', link: '/pages/02BE/Rust.md' },
          { text: '数据库 MongoDB', link: '/pages/02BE/MongoDB.md' },
          { text: '数据库 MySQL', link: '/pages/02BE/MySQL.md' },
        ]
      },
      {
        text: '服务器 & CI/CD',
        ariaLabel: '服务器 & CI/CD',
        items: [
          { text: 'Linux', link: '/pages/03Server/Linux.md' },
          { text: 'Shell', link: '/pages/03Server/Shell.md' },
          { text: 'Docker', link: '/pages/03Server/Docker.md' },
          { text: 'CI & CD', link: '/pages/03Server/CI&CD.md' },
        ]
      },
      {
        text: '架构体系',
        ariaLabel: '架构体系',
        items: [
          { text: '架构体系', link: '/pages/04Architecture/Architecture.md' },
        ]
      },
      {
        text: '常用工具',
        ariaLabel: '常用工具',
        items: [
          { text: 'Git', link: '/pages/05Tool/Git.md' },
          { text: '自有库', link: '/pages/05Tool/PrivateLib.md' },
          { text: '思维导图', link: '/pages/05Tool/MindMap.md' },
        ]
      },
      {
        text: '程序素养',
        ariaLabel: '程序素养',
        items: [
          { text: '计算机组成原理', link: '/pages/06Skill/PrinciplesOfComputerComposition.md' },
          { text: '数据结构与算法', link: '/pages/06Skill/DataStructuresAndAlgorithms.md' },
          { text: '设计模式', link: '/pages/06Skill/DesignPatterns.md' },
        ]
      },
      {
        text: '面试相关',
        ariaLabel: '面试相关',
        items: [
          { text: '前端面试题', link: '/pages/07Interview/FEQuestions.md' },
          { text: '后端面试题', link: '/pages/07Interview/BEQuestions.md' },
          { text: '职业规划', link: '/pages/07Interview/CareerPlanning.md' },
          { text: '管理', link: '/pages/07Interview/Management.md' },
          { text: 'Leetcode', link: '/pages/07Interview/Leetcode.md' },
        ]
      },
      {
        text: '其他',
        ariaLabel: '其他',
        items: [
          { text: '游戏开发', link: '/pages/08Other/GameDevelopment.md' },
          { text: '人工智能', link: '/pages/08Other/ArtificialIntelligence.md' },
        ]
      },

      // 外部链接
      {
        text: '关注我',
        items: [
          { text: 'Gitee', link: 'https://gitee.com/Elliot-Devil' },
          { text: 'GitHub', link: 'https://github.com/devil159468' },
        ]
      }

    ],

    // 侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/01FE/': [
        {
          title: 'HTML',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            // ['HTML.md', 'HTML'],  //菜单名称为'子菜单1'，跳转至/pages/01FE/HTML.md
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'JavaScript',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '工程化',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        }
      ],
      '/pages/02BE/': [
        {
          title: 'NodeJS',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'Golang',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'Rust',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'MongoDB',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'MySQL',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
      ],
      '/pages/03Server/': [
        {
          title: 'Linux',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'Shell',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'Docker',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'CI & CD',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
      ],
      '/pages/04Architecture/': [
        {
          title: '架构体系',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        }
      ],
      '/pages/05Tool/': [
        {
          title: 'Git',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '私有库',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '思维导图',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        }
      ],
      '/pages/06Skill/': [
        {
          title: '计算机组成原理',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '数据结构与算法',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '设计模式',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        }
      ],
      '/pages/07Interview/': [
        {
          title: '前端面试题',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '后端面试题',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '职业规划',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '管理',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: 'Leetcode',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        }
      ],
      '/pages/08Other': [
        {
          title: '游戏开发',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        },
        {
          title: '人工智能',
          collapsable: false,
          sidebarDepth: 1,
          children: []
        }
      ]
    },

    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
};
