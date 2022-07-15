# Docker(速查命令)

## 术语
| 命令        | 解释/说明 |
|:----------|:------|
| 	host     | 宿主机   |
| image     | 镜像    |
| image     | 镜像    |
| container | 容器    |
| registry  | 仓库    |
| daemon    | 守护程序  |
| client    | 客户端   |

## Registry
| 命令                   | 解释/说明                |
|:---------------------|----------------------|
| docker search        | 镜像名称 搜索镜像            |
| docker pull	         | 镜像名称 拉取镜像            |
| docker push 用户名      | 镜像名称 推送镜像            |

## Docker使用
| 命令                   | 解释/说明                |
|:---------------------|----------------------|
| docker pull	         | 获取Image              |
| docker build	创建Image | 构建镜像                 |
| docker images        | 列出Image	             |
| docker run           | 运行Container	         |
| docker ps            | 列出Container	         |
| docker rm            | 删除Container	         |
| docker rmi           | 删除Image	             |
| docker cp	           | 在本机与Container之间拷贝文件  |
| docker commit	       | 保存改动为新的Images(类似git) |

## Dockerfile语法
| 命令          | 解释/说明           |
|:------------|-----------------|
| FROM	       | 基础 image 	      |
| RUN	        | 执行命令 	          |
| ADD	        | 添加文件(可拉取远程仓库) 	 |
| COPY	       | 复制(一般为本地) 	     |
| CMD	        | 执行命令 	          |
| EXPOSE      | 暴露端口 	          |
| WORKDIR     | 制定路径 	          |
| MAINTAINER	 | 维护者/作者 	        |
| ENV	        | 设定环境变量 	        |
| ENTRYPOINT  | 容器入口 	          |
| USER        | 制定用户 	          |
| VOLUME      | 挂载的卷 	          |

## docker-compose命令
| 命令                  | 解释/说明        |
|:--------------------|--------------|
| docker-compose up   | 	启动服务        |
| docker-compose stop | 	停止服务        |
| docker-compose rm   | 	删除服务器中的各个容器 |
| docker-compose logs | 	观察各个容器的日志   |
| docker-compose ps   | 	列出服务相关的容器   |

## docker-compose.yml常用命令
| 命令         | 解释/说明  |
|:-----------|--------|
| build      | 本地创建镜像 |
| command    | 覆盖缺省命令 |
| depends_on | 链接容器   |
| ports      | 暴露端口   |
| volumes    | 卷      |
| image      | pull镜像 |


	













	
