# 更新日志

## 更新日志
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
    - 仅推送：yarn push
    - 推送且部署(GitHubPages)：yarn pushAndDeploy

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
