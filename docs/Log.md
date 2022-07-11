# 更新日志

## 基础设置
- nodeJS使用版本：v14.19.0
- 命令：
  - 仅推送：yarn push
  - 推送且部署(GitHubPages)：yarn pushAndDeploy

## 更新日志
- 20220710
  - 配置导航栏、侧边栏、页脚等
  - 整合原有 VuePress 文件
  - 将项目更新为VitePress，打通 Github 及 Gitee 推送
  - 调整脚本，方便部署
- 20220709
  - 创建单独的VitePress项目
  - 配置
  - 测试部署

### Github YML部署脚本备份
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
