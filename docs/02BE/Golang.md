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


## 函数

函数是基本的代码块，用于执行一个任务。

Go 语言最少有个 main() 函数。

你可以通过函数来划分不同功能，逻辑上每个函数执行的是指定的任务。

函数声明告诉了编译器函数的名称，返回类型，和参数。

Go 语言标准库提供了多种可动用的内置的函数。例如，len() 函数可以接受不同类型参数并返回该类型的长度。如果我们传入的是字符串则返回字符串的长度，如果传入的是数组，则返回数组中包含的元素个数。

```go
func function_name( [parameter list] ) [return_types] {
   函数体
}

/* 函数返回两个数的最大值 */
func max(num1, num2 int) int {
   /* 声明局部变量 */
   var result int

   if (num1 > num2) {
      result = num1
   } else {
      result = num2
   }
   return result
}
```


### 函数调用
```go
package main

import "fmt"

func main() {
   /* 定义局部变量 */
   var a int = 100
   var b int = 200
   var ret int

   /* 调用函数并返回最大值 */
   ret = max(a, b)

   fmt.Printf( "最大值是 : %d\n", ret )
}

/* 函数返回两个数的最大值 */
func max(num1, num2 int) int {
   /* 定义局部变量 */
   var result int

   if (num1 > num2) {
      result = num1
   } else {
      result = num2
   }
   return result
}

// 最大值是 : 200
```


### 函数返回多个值
```go
package main

import "fmt"

func swap(x, y string) (string, string) {
   return y, x
}

func main() {
   a, b := swap("Google", "Runoob")
   fmt.Println(a, b)
}

// Runoob Google
```


### 函数参数

值传递
```go
/* 定义相互交换值的函数 */
func swap(x, y int) int {
   var temp int

   temp = x /* 保存 x 的值 */
   x = y    /* 将 y 值赋给 x */
   y = temp /* 将 temp 值赋给 y*/

   return temp;
}

package main

import "fmt"

func main() {
   /* 定义局部变量 */
   var a int = 100
   var b int = 200

   fmt.Printf("交换前 a 的值为 : %d\n", a )
   fmt.Printf("交换前 b 的值为 : %d\n", b )

   /* 通过调用函数来交换值 */
   swap(a, b)

   fmt.Printf("交换后 a 的值 : %d\n", a )
   fmt.Printf("交换后 b 的值 : %d\n", b )
}

/* 定义相互交换值的函数 */
func swap(x, y int) int {
   var temp int

   temp = x /* 保存 x 的值 */
   x = y    /* 将 y 值赋给 x */
   y = temp /* 将 temp 值赋给 y*/

   return temp;
}

// 结果
交换前 a 的值为 : 100
交换前 b 的值为 : 200
交换后 a 的值 : 100
交换后 b 的值 : 200
```

引用传递值
```go
/* 定义交换值函数*/
func swap(x *int, y *int) {
   var temp int
   temp = *x    /* 保持 x 地址上的值 */
   *x = *y      /* 将 y 值赋给 x */
   *y = temp    /* 将 temp 值赋给 y */
}

package main

import "fmt"

func main() {
   /* 定义局部变量 */
   var a int = 100
   var b int= 200

   fmt.Printf("交换前，a 的值 : %d\n", a )
   fmt.Printf("交换前，b 的值 : %d\n", b )

   /* 调用 swap() 函数
   * &a 指向 a 指针，a 变量的地址
   * &b 指向 b 指针，b 变量的地址
   */
   swap(&a, &b)

   fmt.Printf("交换后，a 的值 : %d\n", a )
   fmt.Printf("交换后，b 的值 : %d\n", b )
}

func swap(x *int, y *int) {
   var temp int
   temp = *x    /* 保存 x 地址上的值 */
   *x = *y      /* 将 y 值赋给 x */
   *y = temp    /* 将 temp 值赋给 y */
}

// 结果
交换前，a 的值 : 100
交换前，b 的值 : 200
交换后，a 的值 : 200
交换后，b 的值 : 100
```

函数作为实参
```go
package main

import (
   "fmt"
   "math"
)

func main(){
   /* 声明函数变量 */
   getSquareRoot := func(x float64) float64 {
      return math.Sqrt(x)
   }

   /* 使用函数 */
   fmt.Println(getSquareRoot(9))

}

// 3
```

函数闭包
```go
package main

import "fmt"

func getSequence() func() int {
   i:=0
   return func() int {
      i+=1
     return i  
   }
}

func main(){
   /* nextNumber 为一个函数，函数 i 为 0 */
   nextNumber := getSequence()  

   /* 调用 nextNumber 函数，i 变量自增 1 并返回 */
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())
   
   /* 创建新的函数 nextNumber1，并查看结果 */
   nextNumber1 := getSequence()  
   fmt.Println(nextNumber1())
   fmt.Println(nextNumber1())
}

// 结果
1
2
3
1
2
```

函数方法
```go
func (variable_name variable_data_type) function_name() [return_type]{
   /* 函数体*/
}


package main

import (
   "fmt"  
)

/* 定义结构体 */
type Circle struct {
  radius float64
}

func main() {
  var c1 Circle
  c1.radius = 10.00
  fmt.Println("圆的面积 = ", c1.getArea())
}

//该 method 属于 Circle 类型对象中的方法
func (c Circle) getArea() float64 {
  //c.radius 即为 Circle 类型对象中的属性
  return 3.14 * c.radius * c.radius
}

// 圆的面积 =  314
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


## 递归函数

语法格式如下
```go
func recursion() {
   recursion() /* 函数调用自身 */
}

func main() {
   recursion()
}
```

阶乘
```go
package main

import "fmt"

func Factorial(n uint64)(result uint64) {
    if (n > 0) {
        result = n * Factorial(n-1)
        return result
    }
    return 1
}

func main() {  
    var i int = 15
    fmt.Printf("%d 的阶乘是 %d\n", i, Factorial(uint64(i)))
}

// 输出
15 的阶乘是 1307674368000
```

斐波那契数列
```go
package main

import "fmt"

func fibonacci(n int) int {
  if n < 2 {
   return n
  }
  return fibonacci(n-2) + fibonacci(n-1)
}

func main() {
    var i int
    for i = 0; i < 10; i++ {
       fmt.Printf("%d\t", fibonacci(i))
    }
}

// 输出
0    1    1    2    3    5    8    13    21    34
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


## 错误处理

语言通过内置的错误接口提供了非常简单的错误处理机制。error类型是一个接口类型，这是它的定义：
```go
type error interface {
    Error() string
}
```

通过实现 error 接口类型来生成错误信息。函数通常在最后的返回值中返回错误信息。使用errors.New 可返回一个错误信息：
```go
func Sqrt(f float64) (float64, error) {
    if f < 0 {
        return 0, errors.New("math: square root of negative number")
    }
    // 实现
}
```

```go
package main

import (
    "fmt"
)

// 定义一个 DivideError 结构
type DivideError struct {
    dividee int
    divider int
}

// 实现 `error` 接口
func (de *DivideError) Error() string {
    strFormat := `
    Cannot proceed, the divider is zero.
    dividee: %d
    divider: 0
`
    return fmt.Sprintf(strFormat, de.dividee)
}

// 定义 `int` 类型除法运算的函数
func Divide(varDividee int, varDivider int) (result int, errorMsg string) {
    if varDivider == 0 {
            dData := DivideError{
                    dividee: varDividee,
                    divider: varDivider,
            }
            errorMsg = dData.Error()
            return
    } else {
            return varDividee / varDivider, ""
    }

}

func main() {

    // 正常情况
    if result, errorMsg := Divide(100, 10); errorMsg == "" {
            fmt.Println("100/10 = ", result)
    }
    // 当除数为零的时候会返回错误信息
    if _, errorMsg := Divide(100, 0); errorMsg != "" {
            fmt.Println("errorMsg is: ", errorMsg)
    }

}

// 输出
// 100/10 =  10
// errorMsg is:  
//    Cannot proceed, the divider is zero.
//    dividee: 100
//    divider: 0

```


## 并发
```go
go 函数名( 参数列表 )
```

Go 允许使用 go 语句开启一个新的运行期线程， 即 goroutine，以一个不同的、新创建的 goroutine 来执行一个函数。 同一个程序中的所有 goroutine 共享同一个地址空间。
```go
package main

import (
        "fmt"
        "time"
)

func say(s string) {
        for i := 0; i < 5; i++ {
                time.Sleep(100 * time.Millisecond)
                fmt.Println(s)
        }
}

func main() {
        go say("world")
        say("hello")
}

// world
// hello
// hello
// world
// world
// hello
// hello
// world
// world
// hello
```

通道（channel）是用来传递数据的一个数据结构。

通道可用于两个 goroutine 之间通过传递一个指定类型的值来同步运行和通讯。操作符 <- 用于指定通道的方向，发送或接收。如果未指定方向，则为双向通道。

```go
ch <- v    // 把 v 发送到通道 ch
v := <-ch  // 从 ch 接收数据
           // 并把值赋给 v
```

声明一个通道很简单，我们使用chan关键字即可，通道在使用前必须先创建：
```go
ch := make(chan int)
```

> 默认情况下，通道是不带缓冲区的。发送端发送数据，同时必须有接收端相应的接收数据。

```go
package main

import "fmt"

func sum(s []int, c chan int) {
        sum := 0
        for _, v := range s {
                sum += v
        }
        c <- sum // 把 sum 发送到通道 c
}

func main() {
        s := []int{7, 2, 8, -9, 4, 0}

        c := make(chan int)
        go sum(s[:len(s)/2], c)
        go sum(s[len(s)/2:], c)
        x, y := <-c, <-c // 从通道 c 中接收

        fmt.Println(x, y, x+y)
}

// 输出：-5 17 12
```

通道缓冲区

通道可以设置缓冲区，通过 make 的第二个参数指定缓冲区大小

```go
ch := make(chan int, 100)
```

> 如果通道不带缓冲，发送方会阻塞直到接收方从通道中接收了值。如果通道带缓冲，发送方则会阻塞直到发送的值被拷贝到缓冲区内；如果缓冲区已满，则意味着需要等待直到某个接收方获取到一个值。接收方在有值可以接收之前会一直阻塞。

```rust
package main

import "fmt"

func main() {
    // 这里我们定义了一个可以存储整数类型的带缓冲通道
        // 缓冲区大小为2
        ch := make(chan int, 2)

        // 因为 ch 是带缓冲的通道，我们可以同时发送两个数据
        // 而不用立刻需要去同步读取数据
        ch <- 1
        ch <- 2

        // 获取这两个数据
        fmt.Println(<-ch)
        fmt.Println(<-ch)
}

// 输出
// 1
// 2
```

遍历通道与关闭通道

通过 range 关键字来实现遍历读取到的数据，类似于与数组或切片。如果通道接收不到数据后 ok 就为 false，这时通道就可以使用 close() 函数来关闭。

```go
package main

import (
        "fmt"
)

func fibonacci(n int, c chan int) {
        x, y := 0, 1
        for i := 0; i < n; i++ {
                c <- x
                x, y = y, x+y
        }
        close(c)
}

func main() {
        c := make(chan int, 10)
        go fibonacci(cap(c), c)
        // range 函数遍历每个从通道接收到的数据，因为 c 在发送完 10 个
        // 数据之后就关闭了通道，所以这里我们 range 函数在接收到 10 个数据
        // 之后就结束了。如果上面的 c 通道不关闭，那么 range 函数就不
        // 会结束，从而在接收第 11 个数据的时候就阻塞了。
        for i := range c {
                fmt.Println(i)
        }
}

// 输出
0
1
1
2
3
5
8
13
21
34
```



## 框架 Gin
[Gin文档](https://gin-gonic.com/zh-cn/docs/)

### 安装

1. 下载并安装 gin
```bash
$ go get -u github.com/gin-gonic/gin
```
2. 将 gin 引入到代码中
```bash
import "github.com/gin-gonic/gin"
```
3. 如果使用诸如 http.StatusOK 之类的常量，则需要引入 net/http 包（可选）
```bash
import "net/http"
```
4. 创建你的项目文件夹并 cd 进去
```bash
$ mkdir -p $GOPATH/src/github.com/myusername/project && cd "$_"
```
5. 拷贝一个初始模板到你的项目里
```bash
curl https://raw.githubusercontent.com/gin-gonic/examples/master/basic/main.go > main.go 
```
6. 运行你的项目
```bash
go run main.go
```












## 框架 Beego


