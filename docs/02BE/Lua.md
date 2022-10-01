# Lua

## 环境安装
Mac OS X
```bash
curl -R -O http://www.lua.org/ftp/lua-5.3.0.tar.gz
tar zxf lua-5.3.0.tar.gz
cd lua-5.3.0
make macosx test
make install
```
测试
```bash
# HelloWorld.lua 文件
print("Hello World!")

lua HelloWorld.lua # Hello World!

```

注释
```bash
# 单行注释
--

# 多行注释
--[[
 多行注释
 多行注释
 --]]
```

变量

在默认情况下，变量总是认为是全局的。

全局变量不需要声明，给一个变量赋值后即创建了这个全局变量，访问一个没有初始化的全局变量也不会出错，只不过得到的结果是：nil。

删除一个全局变量，只需要将变量赋值为nil。
```bash
print(b) # nil

b=10
print(b) # 10

b = nil
print(b) # nil
```
