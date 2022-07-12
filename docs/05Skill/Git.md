# Git命令汇总

## 常用命令
```bash
# 克隆项目
git clone xxx

# 查看文件状态
git status
# 全部暂存
git add .
# 填写提交信息
git commit -m "commit_message"
# 拉取远程分支
git pull
# 推送分支
git push

# 查看历史记录
git log
# 查看详细历史
git log -p
# 查看所有历史记录（包含回退的记录）
git reflog
# 查看简要统计
git log --stat
# 查看具体的 commit
git show
# 查看看任意一个 commit
git show 5e68b0d8
# 查看指定 commit 中的指定文件
git show 5e68b0d8 shopping\ list.txt
# 看未提交的内容
git diff
# 比对暂存区和上一条提交
git diff --staged
# 比对工作目录和上一条提交
git diff HEAD



# 创建 feature1 分支
git branch feature1
# 切换到 feature1 分支
git checkout feature1
# 创建并切换到 feature1 分支
git checkout -b feature1
# 删除分支（未合并到 master 上的分支会失败）
git branch -d feature1
# 删除分支（强制删除）
git branch -D feature1

# 合并操作
git merge feature1
# 放弃合并
git merge --abort

```
> 远程仓库的 HEAD 是永远指向它的默认分支（即 master，如果不修改它的名称的话）

## 高级命令
```bash
# rebase
git checkout branch1
git rebase master

# 
commit --amend

```
