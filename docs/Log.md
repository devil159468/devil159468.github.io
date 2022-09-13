# 更新日志

## 更新日志

::: details 查看详细日志

- 20220913
  - Rust 错误处理
- 20220912
  - Rust 泛型与特性
- 20220911
  - Rust 枚举类
- 20220910
  - Rust 切片、结构体
- 20220909
  - vue2 管理后台模板
- 20220908
  - 导航配置模块化
  - vue2模板新增方法 && 配置文件更新命名
- 20220907
  - Rust 函数、条件语句、循环、所有权
  - 模块化配置文件，添加Lua及对应路由
- 20220906
  - Rust 命令行输出、基础语法、数据类型、注释
- 20220905
  - Rust 入门
- 20220904
  - Koa 模板项目
- 20220903
  - Vite 手写 Mock 服务器
- 20220902
  - 添加 Algolia 搜索
- 20220901
  - Vite vite-plugin-mock插件
- 20220831
  - Vite vite-plugin-html
- 20220830
  - Vite alias插件
- 20220829
  - Vite 静态资源及配置
- 20220828
  - Vite 处理 CSS
- 20220827
  - 细化前端工程化文件
  - Vite 学习
- 20220826
  - 构建工具
- 20220825
  - rollup初探
- 20220824
  - CSS规范整理 
  - JavaScript规范
- 20220823
  - CSS 规范
- 20220822
  - UI组件库：兼容多种 JS 模块标准的软件包
  - TrackSDK 项目
- 20220821
  - UI组件库添加 EsLint Prettier Husky
- 20220820
  - UI组件库添加测试
- 20220819
  - UI组件库添加文档支持
- 20220818
  - UI组件库项目创建
- 20220817
  - 添加 解决方案 文件及路由
- 20220816
  - 添加模板：Vue2 Tab导航模板
- 20220815
  - 设计模式：其他设计模式
    - 原型模式
    - 桥接模式
    - 组合模式
    - 享元模式
    - 策略模式
    - 模板方法模式和责任链模式
    - 命令模式
    - 备忘录模式
    - 中介者模式
    - 访问模式和解释器模式
    - 面试及使用
- 20220814
  - 设计模式：迭代器模式、状态模式
- 20220813
  - 设计模式：代理模式、观察者模式
- 20220812
  - 设计模式：适配器模式、装饰器模式
- 20220811
  - 设计模式：工厂模式、单例模式
- 20220810
  - 设计原则、Vue3 TS模板
  - 设计模式练习题
- 20220809
  - TS设计模式 - 封装、继承、多态(含代码实例)
- 20220808
  - 新增组件目录
  - 文件模板
- 20220807
  - 使用Vue3组件
- 20220806
  - TypeScript 对象
- 20220805
  - TypeScript 数组、对象、元组
- 20220804
  - TypeScript泛型
- 20220803
  - TypeScript函数、接口、类
- 20220802
  - 更新导航链接
  - 更新TypeScript
- 20220801
  - 更新导航
- 20220731
  - 更新Go基础：数据类型
- 20220730
  - 更新Go基础
- 20220729
  - 更新设计模式
- 20220728
  - 更新JS对象循环
- 20220727
  - 更新数组方法
- 20220726
  - 更新ES6数组遍历方法
- 20220725
  - 更新ES5数组遍历方法
- 20220724
  - 更新JS基础及函数
- 20220723
  - 更新Log基础设置命令
- 20220722
  - 更新JS
- 20220721
  - 更新ES规范
- 20220720
  - 补充计划发布至内容页
- 20220719
  - MongoDB及Golang
- 20220718
  - 更新CSS动画
- 20220717
  - 更新CSS BFC解释
  - 添加Vue、React文件，并修改导航及侧边栏
- 20220716
  - 更新配置、更新Gitee地址及对应部署脚本
- 20220715
  - 更新Docker命令、PM2部署示例脚本、添加Head 及 SEO设置
- 20220714
  - 添加TypeScript、新增CSS内容
- 20220713
  - 整理及优化目录结构
- 20220712
  - 更新工程化
  - 更新Git命令
- 20220711
  - 添加GiteePages部署
  - 添加Gitee README文档
- 20220710
  - 配置导航栏、侧边栏、页脚等
  - 整合原有 VuePress 文件
  - 将项目更新为VitePress，打通 Github 及 Gitee 推送
  - 调整脚本，方便部署
- 20220709
  - 创建单独的VitePress项目
  - 配置
  - 测试部署

:::

## 基础设置
- nodeJS使用版本：v14.19.0
- 命令：
  - 同步推送(Github 及 Gitee)：yarn push
  - 同步部署(GitHubPages 及 GitePages)：yarn deploy
  - 推送且部署：yarn pushAndDeploy
> PS: GiteePages 需在项目内手动部署

## Github YML部署脚本备份
```bash
# 目录地址：docs/.github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn install --frozen-lockfile

      - name: Build
        run: yarn docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist

```
