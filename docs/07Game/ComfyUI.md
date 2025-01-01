# Mac 本地部署ComfyUI

## 前置条件 
- MacBook M1 或 M2 芯片 
- 系统版本在 13 以上 
- 硬盘剩余空间在150GB左右

## 软件安装 
### Python 3.10.11
官网地址：https://www.python.org/downloads/macos/ 
中搜索3.10.11 版本，点击Download后面的链接即可 

### Homebrew 
官网地址：https://brew.sh/zh-cn/
复制如下命令执行
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

如果报错，可以使用如下命令进行修复后再执行官网命令。 
```
export HOMEBREW_INSTALL_FROM_API=1 
export HOMEBREW_API_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
```
安装后执行 Next steps 中的配置命令即可完成安装
```
==> Next steps:
- Run these commands in your terminal to add Homebrew to your PATH:
    echo >> /Users/elliot/.zprofile
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/elliot/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
- Run these commands in your terminal to add the non-default Git remotes for Homebrew/brew and Homebrew/homebrew-core:
    echo '# Set non-default Git remotes for Homebrew/brew and Homebrew/homebrew-core.' >> /Users/elliot/.zprofile
    echo 'export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"' >> /Users/elliot/.zprofile
    echo 'export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"' >> /Users/elliot/.zprofile
    export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
    export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
```

### ComfyUI 下载 
- 地址：https://github.com/comfyanonymous/ComfyUI?tab=readme-ov-file#installing
- 搜索 Installing ComfyUI 点击后跳转到 Direct link to download 点击即可下载 
### pytorch cuda
- 地址：https://pytorch.org/get-started/locally/，符合电脑的版本会自动选择好，直接执行 Run this Command 后面的命令即可 
- PS：如果遇到网络问题，可以尝试开始或关闭魔法

---

### 本地启动ComfyUI 
- 进入下载好的文件夹，开启一个基于ComfyUI文件夹的命令行，输入：pip3 install -r requirements.txt 安装依赖项。 
- 执行 python3 main.py 后，打开 http://127.0.0.1:8188


