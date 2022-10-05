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


## 函数

函数定义格式

```lua
optional_function_scope function function_name( argument1, argument2, argument3..., argumentn)
    function_body
    return result_params_comma_separated
end
```

解析
- optional_function_scope: 该参数是可选的制定函数是全局函数还是局部函数，未设置该参数默认为全局函数，如果你需要设置函数为局部函数需要使用关键字 local。
- function_name: 指定函数名称。
- argument1, argument2, argument3..., argumentn: 函数参数，多个参数以逗号隔开，函数也可以不带参数。
- function_body: 函数体，函数中需要执行的代码语句块。
- result_params_comma_separated: 函数返回值，Lua语言函数可以返回多个值，每个值以逗号隔开。

实例
```lua
--[[ 函数返回两个值的最大值 --]]
function max(num1, num2)

   if (num1 > num2) then
      result = num1;
   else
      result = num2;
   end

   return result;
end
-- 调用函数
print("两值比较最大值为 ",max(10,4)) # 两值比较最大值为     10
print("两值比较最大值为 ",max(5,6)) # 两值比较最大值为     6
```

函数作为参数
```lua
myprint = function(param)
   print("这是打印函数 -   ##",param,"##")
end

function add(num1,num2,functionPrint)
   result = num1 + num2
   -- 调用传递的函数参数
   functionPrint(result)
end
myprint(10) # 这是打印函数 -   ##    10    ##
-- myprint 函数作为参数传递
add(2,5,myprint) # 这是打印函数 -   ##    7    ##
```

多返回值 Lua函数可以返回多个结果值，比如string.find，其返回匹配串"开始和结束的下标"（如果不存在匹配串返回nil）。
```lua
> s, e = string.find("www.runoob.com", "runoob") 
> print(s, e)
5    10
```

Lua函数中，在return后列出要返回的值的列表即可返回多值，
```lua
function maximum (a)
    local mi = 1             -- 最大值索引
    local m = a[mi]          -- 最大值
    for i,val in ipairs(a) do
       if val > m then
           mi = i
           m = val
       end
    end
    return m, mi
end

print(maximum({8,10,23,12,5})) # 23    3
```

可变参数
```lua
function add(...)  
local s = 0  
  for i, v in ipairs{...} do   --> {...} 表示一个由所有变长参数构成的数组  
    s = s + v  
  end  
  return s  
end  
print(add(3,4,5,6,7))  --->25
```


## 数组
```lua
array = {"Lua", "Tutorial"}

for i= 0, 2 do
   print(array[i])
end

# 输出
nil
Lua
Tutorial
```

在 Lua 索引值是以 1 为起始，但可以指定 0 开始。
```lua
array = {}

for i= -2, 2 do
   array[i] = i *2
end

for i = -2,2 do
   print(array[i])
end

# 输出
-4
-2
0
2
4
```

多维数组
```lua
-- 初始化数组
array = {}
for i=1,3 do
   array[i] = {}
      for j=1,3 do
         array[i][j] = i*j
      end
end

-- 访问数组
for i=1,3 do
   for j=1,3 do
      print(array[i][j])
   end
end

# 输出
1
2
3
2
4
6
3
6
9
```

不同索引键的三行三列阵列多维数组
```lua
-- 初始化数组
array = {}
maxRows = 3
maxColumns = 3
for row=1,maxRows do
   for col=1,maxColumns do
      array[row*maxColumns +col] = row*col
   end
end

-- 访问数组
for row=1,maxRows do
   for col=1,maxColumns do
      print(array[row*maxColumns +col])
   end
end

# 输出
1
2
3
2
4
6
3
6
9
```





