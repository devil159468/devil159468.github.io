# 更新日志

## 更新日志
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
