# NestJS

## 资料
[NestJS 英文官网](https://nestjs.com/)

[NestJS 中文网](https://docs.nestjs.cn/)

！！！[推荐视频 - 小满NestJS](https://www.bilibili.com/video/BV1NG41187Bs)

**NestJS 作者及联系方式**
- 作者 - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- 网站 - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

NestJS 内置 Express 及 Fastify

## 前置知识
### 依赖注入(DI) 及 控制翻转(IOC)
### TS 装饰器


## Nest Cli

**安装**
```bash
# 安装脚手架
npm i -g @nest/cli

# 新建工程
nest new 工程名
```

**文件作用**

```text

app.controller.ts 带有单个路由的基本控制器示例（处理http请求及调用service层方法）。
app.controller.spec.ts 对于基本控制器的单元测试样例 
app.module.ts 应用程序的根模块（处理其他类的引用与共享）。
app.service.ts 带有单个方法的基本服务（封装通用业务逻辑、数据库及数据交互，其他三方请求）。 

main.ts 应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。

```



**常用Cli命令**
```bash
nest --help # 查看nestjs所有命令

# 单个文件生成器（生成后 nest 会自动引入）
nest g co demo # 生成名为 demo 的 controller
nest g mo demo # 生成名为 demo 的 module
nest g s demo # 生成名为 demo 的 service

# 一次性生成 CRUD 所需文件（一般选择 Restfull API 及 yes）
nest g resource user # 生成名为 user 的一套 CRUD 文件

```








