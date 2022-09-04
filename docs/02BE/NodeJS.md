# NodeJS

## Koa

### Koa安装
```bash
yarn add koa // koa
yarn add nodemon // 自动重启
yarn add koa-json // json pretty
```

### 添加路由
```bash
yarn add koa-router // koa 路由
yarn add koa-ejs // koa 模板引擎
```

### POST解析
```bash
yarn add koa-bodyparser
```

### 数据库相关
```bash
yarn add mongoose
```

### 隐藏密码
```bash
yarn add bcryptjs
```

### 默认头像
```bash
yarn add gravatar
```

### JWT
```bash
yarn add jsonwebtoken
```

### 验证JWT
```bash
yarn add koa-passport
yarn add passport-jwt
```

### Pm2全局安装
```bash
yarn global add pm2
```


## 通用模板
```javascript
// 入口文件
const Koa = require("koa");
const {router} = require('./routes/index')



// 实例化
const app = new Koa();

// 端口
const {PORT} = require('./config/prot')

// 数据库
const {mongoose} = require('./database/index')

// 路由
app.use(router.routes())



// 启动服务
app.listen(PORT, () => {
	console.log(`Server Started on ${PORT}....`);
});

```
```javascript
// 端口
/*
 *   端口设置
 *   production = 5001  生产环境
 *   predeploy = 5002  测试环境
 *   development = 5003  本地开发环境
 */
let portList = {
	"production": 5001,
	"predeploy": 5002,
	"development": 5003,
}
console.log("ENV log", process.env.NODE_ENV, portList[process.env.NODE_ENV]);

let PORT = portList[process.env.NODE_ENV] || 5001

module.exports = {
	PORT
}

```
```javascript
// 数据库配置
const mongoose = require("mongoose");

const db = require("./key").mongoURI;
mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log("MongoDB Connected");
}).catch((e) => {
	console.log("DB Error", e);
});

module.exports = {
	mongoose
}

```
```javascript
// 路由
const KoaRouter = require("koa-router");
const router = new KoaRouter();

// 路由跳转 index
router.get("/", async (ctx) => {
	ctx.body = {msg: "Hello Koa interface~"};
});




module.exports = {
	router
}

```


## 计划发布List

- NPM & yarn
- Experss
- KOA
- 线上接口服务(基于Heroku部署)

--- 
### 基于Express搭建的API接口服务
- 开发时间：20210701 ~ 20210713
- [线上地址(基于PostMan发布)](https://documenter.getpostman.com/view/3694200/TzmBCZRp#a864a0c1-b6f8-46a7-932e-2e0a509386dd)
