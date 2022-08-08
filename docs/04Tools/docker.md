# Docker

## Docker镜像相关操作 - 删除镜像
```bash
1、删除所有容器(可用)
docker rm `docker ps -a -q`
2、删除所有镜像(可用)
docker rmi `docker images -q`
3、按条件删除镜像(待验证)
- 没有打标签
docker rmi `docker images -q | awk '/^<none>/ { print $3 }'`
- 镜像名包含关键字
docker rmi --force `docker images | grep doss-api | awk '{print $3}'` //其中doss-api为关键字
```
