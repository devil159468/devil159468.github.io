# 人工智能（ArtificialIntelligence）
> 本文主要以PyTorch为主

## 资源链接
- [Pytorch官网](https://pytorch.org/)
- [Anaconda下载地址](https://www.anaconda.com/)
- [油管教程 - 土堆 33集](https://www.youtube.com/watch?v=QJgjcnuQqNI&list=PLgAyVnrNJ96CqYdjZ8v9YjQvCBcK5PZ-V)
- [油管教程 - 莫凡 35集](https://www.youtube.com/watch?v=lAaCeiqE6CE&list=PLXO45tsB95cJxT0mL0P3-G0rBcLSvVkKH)

## 环境安装
*Anaconda* [下载地址](https://www.anaconda.com/download)

创建环境命令
```
conda create -n pytorch310 python=3.10
```
![初始化界面](./img/AI/AI01.png)
![激活环境命令](./img/AI/AI02.png)
激活环境命令
```
conda activate pytorch310
```
![去激活环境命令](./img/AI/AI03.png)
去激活环境命令
```
conda deactivate
```

> 报错处理：
  - 1.移除代理 
    ```
    conda config --remove-key proxy
    ```

  - 2.使用镜像 
    ```
    conda config --set remote_read_timeout_secs 600 conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
    ```
  
  - 3.临时禁用代理 
    ```
    conda config --set proxy_servers.http ""
    conda config --set proxy_servers.https ""
    ```
---
*Pytorch安装* [官网地址](https://pytorch.org/)

![选择对应的版本，复制命令即可](./img/AI/AI04.png)
选择对应的版本，复制命令即可

![省略其余安装包](./img/AI/AI05.png)
省略其余安装包

![安装完成](./img/AI/AI06.png)
安装完成

---
验证是否安装成功 

pip
![验证是否安装成功](./img/AI/AI07.png)

命令行导入测试，无报错则安装成功
![命令行导入测试，无报错则安装成功](./img/AI/AI08.png)

## 编辑器安装
*Pycharm* [下载地址](https://www.jetbrains.com/pycharm/download/#section=windows)

*Jupiter* 安装及使用

> python < 3.10 以下可使用 conda install nb_conda

python >= 3.10 可使用 conda install -c conda-forge nb_conda_kernels

开启Jupyter NoteBook命令：jupyter notebook



