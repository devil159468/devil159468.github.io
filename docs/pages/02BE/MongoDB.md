# MongoDB

## 1.NoSQL 简介
> [菜鸟教程](https://www.runoob.com/mongodb/nosql.html)

## 2.MongoDB 概念解析

|   SQL术语/概念    | MongoDB术语/概念 | 解释/说明 |
|:-----------:|:-----------:|:------------|
|database |	database | 	数据库|
|table |	collection | 	数据库表/集合|
|row |	document | 	数据记录行/文档|
|column | field | 数据字段/域 |
|index |	index | 	索引|
|table | joins | 	 	表连接,MongoDB不支持|
|primary | key | 	primary key	主键,MongoDB自动将_id字段设置为主键|

[//]: # (## NodeJS Mongoose)

[//]: # (> 基于开发 ExpressAPI 项目获知)

[//]: # ()
[//]: # ([mongoose]&#40;https://mongoosejs.com/&#41;)

[//]: # ()
[//]: # (## 可用链接)

[//]: # (> 基于开发 ExpressAPI 项目获知)

[//]: # ([【图文教程】新手友好的MongoDB云数据库Atlas使用]&#40;https://zhuanlan.zhihu.com/p/98916948&#41;)

## 3.MongoDB安装
> 强烈推荐使用Docker安装！以下为 docker-compose 示例

### 数据存放目录
```bash
# 建立本地 mongo 目录
mkdir mongo & mkdir mongo/initdb
# 初始化脚本js等
mkdir mongo/initdb
# 数据库保存文件夹
mkdir mongo/datadir
# 数据库服务设置
mkdir mongo/configdb
```

### docker-compose.yml
```ymL
version: '3'
services:
    mongo:
        image: mongo:4.2
        container_name: mongo
        ports: 
            - '27017:27017'
        command: --auth
        volumes:
            - /Users/elliot/database/mongo/initdb:/docker-entrypoint-initdb.d
            - /Users/elliot/database/mongo/datadir:/data/db
            - /Users/elliot/database/mongo/configdb:/data/configdb
        environment:
            MONGO_INITDB_ROOT_USERNAME: MongoDBAdmin
            MONGO_INITDB_ROOT_PASSWORD: TxServerMongo
            MONGO_INITDB DATABASE: mydb
            TZ: Asia/Shanghai
```

### docker-compose 服务的启动及停止
> PS：要进入对应目录(/Users/elliot/database/mongo)执行命令，否则会报错
```bash
# 编译服务
docker-compose build
# 容器启动（精灵线程）
docker-compose up -d
# 查询容器状态
docker-compose ps

# 容器停止
docker-compose stop
# 容器停止+消除(容器+网络）
docker-compose down
# 容器停止+消除(容器+网络+镜像）
docker-compose down --rmi all

```

## 4.MongoDB连接
> 推荐官方出品的免费软件 MongoDB Compass，
```bash
mongodb://用户名:密码@localhost:27017/?authMechanism=DEFAULT
```

MongoDB Compass:
![img.png](./img.png)

## 5.数据库相关操作
|     命令     |    解释     | 说明           |
|:----------:|:---------:|:-------------|
|     db     |  显示当前数据库  | -            |
| use runoob | 使用(创建)数据库 | 存在则切换，不存在则创建 |
|  show dbs  |  查看所有数据库  | 空数据库不会展示     |

### 增删改查
|              命令               |  解释   | 说明  |
|:-----------------------------:|:-----:|:----|
| db.数据库名.insert({"name":"名称"}) | 插入数据  | 增加  |
|       db.dropDatabase()       | 删除数据库 | 增加  |
