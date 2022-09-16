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
> PS: bit 计算机最小存储单位；byte：计算机中基本存储单元
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


## 条件语句
### if 循环
```go
package main

import "fmt"

func main() {
    var age int = 23
    if age == 25 {
        fmt.Println("true")
    } else if age < 25 {
        fmt.Println("too small")
    } else {
        fmt.Println("too big")
    }
}

// too small
```

### switch
```go
package main

import "fmt"

func main() {
   /* 定义局部变量 */
   var grade string = "B"
   var marks int = 90

   switch marks {
      case 90: grade = "A"
      case 80: grade = "B"
      case 50,60,70 : grade = "C"
      default: grade = "D"  
   }

   switch {
      case grade == "A" :
         fmt.Printf("优秀!\n" )    
      case grade == "B", grade == "C" :
         fmt.Printf("良好\n" )      
      case grade == "D" :
         fmt.Printf("及格\n" )      
      case grade == "F":
         fmt.Printf("不及格\n" )
      default:
         fmt.Printf("差\n" );
   }
   fmt.Printf("你的等级是 %s\n", grade );      
}

// 优秀!
// 你的等级是 A
```

### select

select 是 Go 中的一个控制结构，类似于用于通信的 switch 语句。每个 case 必须是一个通信操作，要么是发送要么是接收。

select 随机执行一个可运行的 case。如果没有 case 可运行，它将阻塞，直到有 case 可运行。一个默认的子句应该总是可运行的。

```go
package main

import "fmt"

func main() {
   var c1, c2, c3 chan int
   var i1, i2 int
   select {
      case i1 = <-c1:
         fmt.Printf("received ", i1, " from c1\n")
      case c2 <- i2:
         fmt.Printf("sent ", i2, " to c2\n")
      case i3, ok := (<-c3):  // same as: i3, ok := <-c3
         if ok {
            fmt.Printf("received ", i3, " from c3\n")
         } else {
            fmt.Printf("c3 is closed\n")
         }
      default:
         fmt.Printf("no communication\n")
   }    
}

// no communication
```


## 数组
```go
// 数组初始化
var balance = [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}

// 字面量方式
balance := [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}

// 长度不确定时
balance := [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}

// 如果设置了数组的长度，我们还可以通过指定下标来初始化元素：将索引为 1 和 3 的元素初始化
balance := [5]float32{1:2.0,3:7.0}

```

### 访问数组元素
```go
package main

import "fmt"

func main() {
   var n [10]int /* n 是一个长度为 10 的数组 */
   var i,j int

   /* 为数组 n 初始化元素 */        
   for i = 0; i < 10; i++ {
      n[i] = i + 100 /* 设置元素为 i + 100 */
   }

   /* 输出每个数组元素的值 */
   for j = 0; j < 10; j++ {
      fmt.Printf("Element[%d] = %d\n", j, n[j] )
   }
}

// 输出
// Element[0] = 100
// Element[1] = 101
// Element[2] = 102
// Element[3] = 103
// Element[4] = 104
// Element[5] = 105
// Element[6] = 106
// Element[7] = 107
// Element[8] = 108
// Element[9] = 109
```
```go
package main

import "fmt"

func main() {
   var i,j,k int
   // 声明数组的同时快速初始化数组
   balance := [5]float32{1000.0, 2.0, 3.4, 7.0, 50.0}

   /* 输出数组元素 */         ...
   for i = 0; i < 5; i++ {
      fmt.Printf("balance[%d] = %f\n", i, balance[i] )
   }
   
   balance2 := [...]float32{1000.0, 2.0, 3.4, 7.0, 50.0}
   /* 输出每个数组元素的值 */
   for j = 0; j < 5; j++ {
      fmt.Printf("balance2[%d] = %f\n", j, balance2[j] )
   }

   //  将索引为 1 和 3 的元素初始化
   balance3 := [5]float32{1:2.0,3:7.0}  
   for k = 0; k < 5; k++ {
      fmt.Printf("balance3[%d] = %f\n", k, balance3[k] )
   }
}

// balance[0] = 1000.000000
// balance[1] = 2.000000
// balance[2] = 3.400000
// balance[3] = 7.000000
// balance[4] = 50.000000
// balance2[0] = 1000.000000
// balance2[1] = 2.000000
// balance2[2] = 3.400000
// balance2[3] = 7.000000
// balance2[4] = 50.000000
// balance3[0] = 0.000000
// balance3[1] = 2.000000
// balance3[2] = 0.000000
// balance3[3] = 7.000000
// balance3[4] = 0.000000
```


## 类型转换
```rust
package main

import "fmt"

func main() {
   var sum int = 17
   var count int = 5
   var mean float32
   
   mean = float32(sum)/float32(count)
   fmt.Printf("mean 的值为: %f\n",mean)
}

// mean 的值为: 3.400000
```

go 不支持隐式转换类型，只能显式调用
```rust
package main
import "fmt"

func main() {  
    var a int64 = 3
    var b int32
    b = int32(a)
    fmt.Printf("b 为 : %d", b)
}
```


## 接口
接口它把所有的具有共性的方法定义在一起，任何其他类型只要实现了这些方法就是实现了这个接口。
```rust
/* 定义接口 */
type interface_name interface {
   method_name1 [return_type]
   method_name2 [return_type]
   method_name3 [return_type]
   ...
   method_namen [return_type]
}

/* 定义结构体 */
type struct_name struct {
   /* variables */
}

/* 实现接口方法 */
func (struct_name_variable struct_name) method_name1() [return_type] {
   /* 方法实现 */
}
...
func (struct_name_variable struct_name) method_namen() [return_type] {
   /* 方法实现*/
}
```

例子中定义了一个接口Phone，接口里面有一个方法call()。然后我们在main函数里面定义了一个Phone类型变量，并分别为之赋值为NokiaPhone和IPhone。然后调用call()方法，输出结果如下：
```rust
package main

import (
    "fmt"
)

type Phone interface {
    call()
}

type NokiaPhone struct {
}

func (nokiaPhone NokiaPhone) call() {
    fmt.Println("I am Nokia, I can call you!")
}

type IPhone struct {
}

func (iPhone IPhone) call() {
    fmt.Println("I am iPhone, I can call you!")
}

func main() {
    var phone Phone

    phone = new(NokiaPhone)
    phone.call()

    phone = new(IPhone)
    phone.call()

}

// I am Nokia, I can call you!
// I am iPhone, I can call you!
```


## 结构体

Go 语言中数组可以存储同一类型的数据，但在结构体中我们可以为不同项定义不同的数据类型。
```go
package main

import "fmt"

type Books struct {
   title string
   author string
   subject string
   book_id int
}


func main() {

    // 创建一个新的结构体
    fmt.Println(Books{"Go 语言", "www.runoob.com", "Go 语言教程", 6495407})

    // 也可以使用 key => value 格式
    fmt.Println(Books{title: "Go 语言", author: "www.runoob.com", subject: "Go 语言教程", book_id: 6495407})

    // 忽略的字段为 0 或 空
   fmt.Println(Books{title: "Go 语言", author: "www.runoob.com"})
}

// {Go 语言 www.runoob.com Go 语言教程 6495407}
// {Go 语言 www.runoob.com Go 语言教程 6495407}
// {Go 语言 www.runoob.com  0}
```


## 框架
### Gin
### Beego


