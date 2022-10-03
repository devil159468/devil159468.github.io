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


## 数据类型
| 数据类型 | 描述 |
|:---|:---|
| nil | 这个最简单，只有值nil属于该类，表示一个无效值（在条件表达式中相当于false） | u8 |
| boolean | 包含两个值：false和true |
| number | 表示双精度类型的实浮点数 |
| string | 字符串由一对双引号或单引号来表示 |
| function | 由 C 或 Lua 编写的函数 |
| userdata | 表示任意存储在变量中的C数据结构 |
| thread | 表示执行的独立线路，用于执行协同程序 |
| table	 | Lua 中的表（table）其实是一个"关联数组"（associative arrays），数组的索引可以是数字、字符串或表类型。在 Lua 里，table 的创建是通过"构造表达式"来完成，最简单构造表达式是{}，用来创建一个空表 |


## 变量
三种类型：全局变量、局部变量、表中的域

```lua
-- test.lua 文件脚本
a = 5               -- 全局变量
local b = 5         -- 局部变量

function joke()
    c = 5           -- 全局变量
    local d = 6     -- 局部变量
end

joke()
print(c,d)          --> 5 nil

do
    local a = 6     -- 局部变量
    b = 6           -- 对局部变量重新赋值
    print(a,b);     --> 6 6
end

print(a,b)      --> 5 6

$ lua test.lua 
5    nil
6    6
5    6
```

### 赋值语句
```lua
# 定义多个变量
a, b = 10, 2*x       <-->       a=10; b=2*x

# 交换变量
x, y = y, x                     -- swap 'x' for 'y'
a[i], a[j] = a[j], a[i]         -- swap 'a[i]' for 'a[j]'

# 多个赋值特例：要对多个变量赋值必须依次对每个变量赋值
a, b, c = 0
print(a,b,c)             --> 0   nil   nil

```

### 索引
对 table 的索引使用方括号 []。Lua 也提供了 . 操作

```lua
> site = {}
> site["key"] = "www.runoob.com"
> print(site["key"])
www.runoob.com
> print(site.key)
www.runoob.com
```






















