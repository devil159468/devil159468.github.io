# Golang

## Golang 主要方向
- 区块链研发工程师
- Go 服务器端/游戏 软件工程师
- Golang分布式/云计算CDN 软件工程师

## 语言特点：
- 静态编译语言的安全和性能 + 动态语言开发维护的高效率
- 继承自C语言，表达式语法、控制结构、基础数据类型，调用参数传值，指针等。
- 引入包概念
- 自动GC
- 天然支持并发
- 语言层面支持并发
- goroutine，轻量级线程，高效利用多核实现大并发处理
- 基于CPS并发模型(Communicating Sequential Processes)实现
- 管道Channel，实现goroute之间相互通信
- 函数多个返回值
- 支持切片slice、延时执行defer等

## 前期准备

### Mac环境变量
```bash
vi /etc/profile

epxort GOROOT=$Home/go_dev/go
export PATH=$PATH:$GOROOT/bin
export GOPATH=$HOME/goproject

source /etc/profile
```

### 开发注意事项：
- 文件以go结尾
- 执行入口为 main() 函数
- 严格区分大小写
- 开发时可省略分号(编译器会自动在每行后加分号)，单行多条语句要加分号
- 引入的包或变量未使用时，无法通过编译

### Go基础程序示例
```go
package main

import "fmt"

func main() {
   /* 这是我的第一个简单的程序 */
   fmt.Println("Hello, World!")
}
```

## 基础语法

### 变量
- 指定变量类型，如未赋值，则使用默认值
- 根据值自动判断(类型推导)
- 省略 var 采用 :=
```go
// var声明多个值
var n1, n2, n3 int
fmt.Println("FMT n1,n2,n3:", n1, n2, n3)

// 解构赋值
var m1, age, m3 = 100, "jack", 666
fmt.Println("FMT m1, age, m3:", m1, age, m3)

// 简化写法
s1, address, s3 := 200, "Beijign", 996
fmt.Println("FMT s1, address, s3:", s1, address, s3)
```

#### 全局变量
定义在函数外的都是全局变量

#### 使用注意事项
- 类型固定
- 不可重复定义
- 变量 = 变量名 + 值 + 数据类型
- 未赋值时，默认有初始值(int 为0，string为''，小数为0 等)

## 数据类型
- 基础数据类型
  - 数值
    - 整数类型（int,int8,int16,int32,int64,uint,uint8,uint16,uint32,unit64,byte）
    - 浮点类型（float32,float64）
  - 字符型（使用byte保存打个字母字符）
  - 布尔型（bool）
  - 字符串（string）
- 复杂数据类型
  - 指针（pointer）
  - 数组
  - 结构体（struct）
  - 管道（channel）
  - 函数
  - 切片（slice）
  - 接口（interface）
  - map

### 数值
1. 整数类型区分：有符号 和 无符号，int unit大小与系统有关
2. 整型默认声明为int
> PS: bit 计算机最小存储大卫；byte：计算机中基本存储单元
3. 浮点型有固定的范围和字段长度，不受操作系统影响
4. 浮点型默认声明为float64，通常情况下也应该用float64，比较精确
5. 浮点型常亮有两种表现形式
   1. 十进制：3.14    .1415926
   2. 科学计数法：3.14e2 = 3.14 * 10的2次方

### 字符串
Go没有专门的字符类型，使用byte存储单个字符，Go的字符串是由字节组成

```
println 输出码值，printf 输出内容
存储 ASCII 码可使用byte，否则建议使用 int
```

### 布尔
- 只有 true 和 false
- 占用1个字节
- 逻辑运算时使用
> Go是强类型语言，不能用 0 或 非0 的整数替代 false 和 true

## 框架
### Gin
### Beego


