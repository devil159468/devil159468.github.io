# VuePress 个人项目(知识汇总)

## 立项目的
该项目作为个人知识库，针对编程知识进行系统化梳理及总结，避免以往知识点。

## 记录内容
计划将该项目作为储备知识库，主要包含以下内容：
- 前端知识
- 后端知识
- 服务器 & CI/CD
- 架构
- 面试
- 常用工具
- 程序素养

## 更新日志
知识库更新记录时间顺序
- 20210629：
  - 初始化项目并部署至Heroku（main 分支）
  - 将代码放置在Gitee上托管（master分支）

## 部署问题汇总
代码托管：Gitee（ master 分支）

托管步骤
- 按照正常开发步骤，在master上进行开发，完成功能后提交 commit 即可

代码部署：Heroku( main 分支)

部署步骤
- 切换到main分支
- 使用 git merge master 命令(不建议使用rebase，因为rebase将分支进行变基，需要再次对当前分支进行合并[--allow-unrelated-histories])，将master上最新的改动同步到 main 分支上
- 使用 yarn build 打包最新代码
- 将代码commit
- 执行 git push heroku main 进行部署
