# Rust
[Rust 官网（简中）](https://www.rust-lang.org/zh-CN)

[官方文档 英文](https://doc.rust-lang.org/book/)

[官方文档 中文](https://kaisery.github.io/trpl-zh-cn/)

[Rustlings 课程](https://github.com/rust-lang/rustlings/)

[通过例子学习RUST](https://doc.rust-lang.org/stable/rust-by-example/)

## 安装
```bash
# 首次安装
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 升级
rustup update
```


## Cargo：Rust 的构建工具和包管理器

Cargo 功能
- cargo build 可以构建项目 
- cargo run 可以运行项目
- cargo test 可以测试项目
- cargo doc 可以为项目构建文档 
- cargo publish 可以将库发布到 [crates.io](https://crates.io/)。
- cargo clippy: 类似eslint，lint工具检查代码可以优化的地方 
- cargo fmt: 类似go fmt，代码格式化 
- cargo tree: 查看第三方库的版本和依赖关系 
- cargo bench:运行benchmark(基准测试,性能测试)

```bash
# 查看 cargo 版本
cargo --version
```


## 创建新项目
```bash
# 新建 hello-rust 项目
cargo new hello-rust

# 目录结构
hello-rust
|- Cargo.toml
|- src
  |- main.rs
```
### 目录解析 
- Cargo.toml： Rust 的清单文件。其中包含了项目的元数据和依赖库。
- src/main.rs：应用代码入口。

```bash
# cargo run 输出
Compiling hello-rust v0.1.0 (/Users/elliot/Desktop/helloRust/hello-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 2.23s
     Running `target/debug/hello-rust`
Hello, world!
```


## 添加依赖

在 Rust 中，我们通常把包称作“crates”。可以在 [crates.io](https://crates.io/)（Rust 包仓库）

变更 toml 文件
```bash
# Cargo.toml
[dependencies]
ferris-says = "0.2"
```
运行 cargo build 后会开始安装依赖

修改 main.rs
```bash
use ferris_says::say;
```
这样我们就可以使用 ferris-says crate 中导出的 say 函数了。


## 一个 Rust 小应用
修改入口文件
```bash
# main.rs
use ferris_says::say; // from the previous step
use std::io::{stdout, BufWriter};

fn main() {
    let stdout = stdout();
    let message = String::from("Hello fellow Rustaceans!");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(message.as_bytes(), width, &mut writer).unwrap();
}
```
使用 cargo run 查看输出
```bash
# cargo run 输出
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running `target/debug/hello-rust`
----------------------------
< Hello fellow Rustaceans! >
----------------------------
              \
               \
                 _~^~^~_
             \) /  o o  \ (/
               '_   -   _'
               / '-----' \
    
```


## 输出到命令行

println!() 和 print!() 的区别：println!() 会在输出的最后附加一个换行符

### 占位符输出
```rust
fn main() {
  let a = 12;
  println!("a is {}", a)
}
# 输出：a is 12
```

### 多次输出
```rust
fn main() {
  let a = 12;
  println!("a is {0}, a again is {0}", a); 
}
# 输出：a is 12, a again is 12

fn main() {
    let a = 12;
    let b = 24;

    println!("a is {0}, a again is {0}, b is {1} , b again is {1}", a, b);
}
# 输出：a is 12, a again is 12, b is 24 , b again is 24
```

### 输出符号
```rust
fn main() { 
    println!("{{}}"); 
}
# 输出：{}
```


## 基础语法

### 变量
```rust
let a = 123;

// 以下均有错误
a = "abc"; // a 已经是整形数字，不能再被赋值为字符串类型
a = 4.56; // 精度会有损失，Rust 语言不允许精度有损失的自动数据类型转换
a = 456; // a 不是一个可变变量

```
> Rust 语言为了高并发安全而做的设计：在语言层面尽量少的让变量的值可以改变。所以 a 的值不可变。但这不意味着 a 不是"变量"（英文中的 variable），官方文档称 a 这种变量为"不可变变量"。

可变变量
```rust
let mut a = 123;
a = 456;
```

### 常量与不可变变量的区别

```rust
// 合法赋值
let a = 123;   // 可以编译，但可能有警告，因为该变量没有被使用
let a = 456;

// 非法赋值
const a: i32 = 123;
let a = 456;
```

### 重影（Shadowing）

重影就是指变量的名称可以被重新使用的机制

```rust
fn main() {
    let x = 5;
    let x = x + 1;
    let x = x * 2;
    println!("The value of x is: {}", x);
}
// 输出：The value of x is: 12
```
> 重影与可变变量的赋值不是一个概念，重影是指用同一个名字重新代表另一个变量实体，其类型、可变属性和值都可以变化。但可变变量赋值仅能发生值的变化。
```
let mut s = "123";
s = s.len();
// 不能给字符串变量赋整型值
```


## 数据类型

### 整数型
| 位长度 | 有符号 |  无符号|
|:---|:---|:---|
| 8-bit | i8 | u8 |
| 16-bit | i16 | u16 |
| 32-bit | i32 | u32 |
| 64-bit | i64 | u64 |
| 128-bit | i128 | u128 |
| arch | isize | usize |

> isize 和 usize 两种整数类型是用来衡量数据大小的，它们的位长度取决于所运行的目标平台，如果是 32 位架构的处理器将使用 32 位位长度整型。

### 进制

| 进制 | 例如 |
|:---|:---|
| 十进制 | 98_222 |
| 十六进制 | 0xff |
| 八进制 | 0o77 |
| 二进制 | 0b1111_0000 |
| 字节(仅能表示u8型) | b'A' |

### 浮点数型（Floating-Point）
Rust 支持32位浮点数(f32)，和64为浮点数(f64)

```rust
fn main() {
    let x = 2.0; // f64
    let y: f32 = 3.0; // f32
}
```

### 数学运算
```rust
fn main() {
    let sum = 5 + 10; // 加
    let difference = 95.5 - 4.3; // 减
    let product = 4 * 30; // 乘
    let quotient = 56.7 / 32.2; // 除
    let remainder = 43 % 5; // 求余
}
```
> Rust 不支持 ++  和 --

### 布尔型

布尔型用 bool 表示，值只能为 true 或 false。

### 复合类型

元组用一对 ( ) 包括的一组数据，可以包含不同种类的数据：

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
// tup.0 等于 500
// tup.1 等于 6.4
// tup.2 等于 1
let (x, y, z) = tup;
// y 等于 6.4
```

### 数组用一对 [ ] 包括的同类型数据。

```rust
let a = [1, 2, 3, 4, 5];
// a 是一个长度为 5 的整型数组

let b = ["January", "February", "March"];
// b 是一个长度为 3 的字符串数组

let c: [i32; 5] = [1, 2, 3, 4, 5];
// c 是一个长度为 5 的 i32 数组

let d = [3; 5];
// 等同于 let d = [3, 3, 3, 3, 3];

let first = a[0];
let second = a[1];
// 数组访问

a[0] = 123; // 错误：数组 a 不可变
let mut a = [1, 2, 3];
a[0] = 4; // 正确
```


## 注释

```rust
// 这是第一种注释方式

/* 这是第二种注释方式 */

/*
* 多行注释
* 多行注释
* 多行注释
*/

/// 说明文档注释 
/// Adds one to the number given.
/// 
/// # Examples 
/// 
/// 


```


## 函数

Rust 函数的基本形式
```rust
fn <函数名> ( <参数> ) <函数体>
```

Rust 函数名称的命名风格是小写字母以下划线分割
```rust
fn main() {
    println!("Hello, world!");
    another_function();
}

fn another_function() {
    println!("Hello, runoob!");
}

// Hello, world!
// Hello, runoob!
```

函数参数
```rust
fn main() {
    another_function(5, 6);
}

fn another_function(x: i32, y: i32) {
    println!("x 的值为 : {}", x);
    println!("y 的值为 : {}", y);
}
```

Rust 中可以在一个用 {} 包括的块里编写一个较为复杂的表达式：
```rust
fn main() {
    let x = 5;

    let y = {
        let x = 3;
        x + 1
    };

    println!("x 的值为 : {}", x);
    println!("y 的值为 : {}", y);
}

```

函数返回值
```rust
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
```
> Rust 不支持自动返回值类型判断！如果没有明确声明函数返回值的类型，函数将被认为是"纯过程"，不允许产生返回值，return 后面不能有返回值表达式。这样做的目的是为了让公开的函数能够形成可见的公报。
> 函数体表达式并不能等同于函数体，它不能使用 return 关键字。


## 条件语句

条件表达式 number < 5 不需要用小括号（但语法允许），条件表达式必须是 bool 类型
```rust
fn main() {
    let number = 3;
    if number < 5 {
        println!("条件为 true");
    } else {
        println!("条件为 false");
    }
}

```
```rust
fn main() {
    let a = 12;
    let b;
    if a > 0 {
        b = 1;
    }  
    else if a < 0 {
        b = -1;
    }  
    else {
        b = 0;
    }
    println!("b is {}", b);
}
```

类似于三元条件运算表达式 (A ? B : C) 的效果
```rust
fn main() {
    let a = 3;
    let number = if a > 0 { 1 } else { -1 };
    println!("number 为 {}", number);
}
```


## 循环

### while 循环
```rust
fn main() {
    let mut number = 1;
    while number != 4 {
        println!("{}", number);
        number += 1;
    }
    println!("EXIT");
}

```

### for 循环
```rust
fn main() {
    let a = [10, 20, 30, 40, 50];
    for i in a.iter() {
        println!("值为 : {}", i);
    }
}
```
> a.iter() 代表 a 的迭代器。

通过下标访问数组
```rust
fn main() {
let a = [10, 20, 30, 40, 50];
    for i in 0..5 {
        println!("a[{}] = {}", i, a[i]);
    }
}
```

### loop 循环

Rust 语言原生的无限循环结构 —— loop
```rust
fn main() {
    let s = ['R', 'U', 'N', 'O', 'O', 'B'];
    let mut i = 0;
    loop {
        let ch = s[i];
        if ch == 'O' {
            break;
        }
        println!("\'{}\'", ch);
        i += 1;
    }
}
```
可以用来当做查找工具，return 会退出 loop 循环，并返回给外部一个返回值
```rust
fn main() {
    let s = ['R', 'U', 'N', 'O', 'O', 'B'];
    let mut i = 0;
    let location = loop {
        let ch = s[i];
        if ch == 'O' {
            break i;
        }
        i += 1;
    };
    println!(" \'O\' 的索引为 {}", location);
}
```


## 所有权

### 所有权规则
- Rust 中的每个值都有一个变量，称为其所有者。 
- 一次只能有一个所有者。 
- 当所有者不在程序运行范围时，该值将被删除。

```rust
// 举例
{
    // 在声明以前，变量 s 无效
    let s = "runoob";
    // 这里是变量 s 的可用范围
}
// 变量范围已经结束，变量 s 无效

```

基本数据类型的数据存储在栈中，仅在栈中的数据的"移动"方式是直接复制，基本数据类型有：
- 所有整数类型，例如 i32 、 u32 、 i64 等。 
- 布尔类型 bool，值为 true 或 false 。 
- 所有浮点类型，f32 和 f64。 
- 字符类型 char。 
- 仅包含以上类型数据的元组（Tuples）。

```rust
let x = 5;
let y = x;
```

**s1 的值赋给 s2 以后 s1 将不可用**
```rust
let s1 = String::from("hello");
let s2 = s1; 
println!("{}, world!", s1); // 错误！s1 已经失效
```

### 克隆
```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();
    println!("s1 = {}, s2 = {}", s1, s2);
}
```

### 涉及函数的所有权机制

如果将变量当作参数传入函数，那么它和移动的效果是一样的。
```rust
fn main() {
    let s = String::from("hello");
    // s 被声明有效

    takes_ownership(s);
    // s 的值被当作参数传入函数
    // 所以可以当作 s 已经被移动，从这里开始已经无效

    let x = 5;
    // x 被声明有效

    makes_copy(x);
    // x 的值被当作参数传入函数
    // 但 x 是基本类型，依然有效
    // 在这里依然可以使用 x 却不能使用 s

} // 函数结束, x 无效, 然后是 s. 但 s 已被移动, 所以不用被释放


fn takes_ownership(some_string: String) {
    // 一个 String 参数 some_string 传入，有效
    println!("{}", some_string);
} // 函数结束, 参数 some_string 在这里释放

fn makes_copy(some_integer: i32) {
    // 一个 i32 参数 some_integer 传入，有效
    println!("{}", some_integer);
} // 函数结束, 参数 some_integer 是基本类型, 无需释放
```

### 函数返回值的所有权机制

被当作函数返回值的变量所有权将会被移动出函数并返回到调用函数的地方，而不会直接被无效释放。
```rust
fn main() {
    let s1 = gives_ownership();
    // gives_ownership 移动它的返回值到 s1

    let s2 = String::from("hello");
    // s2 被声明有效

    let s3 = takes_and_gives_back(s2);
    // s2 被当作参数移动, s3 获得返回值所有权
} // s3 无效被释放, s2 被移动, s1 无效被释放.

fn gives_ownership() -> String {
    let some_string = String::from("hello");
    // some_string 被声明有效

    return some_string;
    // some_string 被当作返回值移动出函数
}

fn takes_and_gives_back(a_string: String) -> String { 
    // a_string 被声明有效

    a_string  // a_string 被当作返回值移出函数
}
```

### 引用与租借

引用（Reference）可以理解为一种指针
```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = &s1;
    println!("s1 is {}, s2 is {}", s1, s2);
}

// s1 is hello, s2 is hello
```

函数参数传递的道理一样
```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

// The length of 'hello' is 5.
```

引用不会获得值的所有权。

引用只能租借（Borrow）值的所有权。

引用本身也是一个类型并具有一个值，这个值记录的是别的值所在的位置，但引用不具有所指值的所有权：

```rust
fn main() {
    let s1 = String::from("hello");
    let mut s2 = &s1;
    let s3 = s1;
    s2 = &s3; // 重新从 s3 租借所有权
    println!("{}", s2);
}
```

租借的数据不能被修改
```rust
fn main() {
    let mut s1 = String::from("run");
    // s1 是可变的

    let s2 = &mut s1;
    // s2 是可变的引用

    s2.push_str("oob");
    println!("{}", s2);
}
```

### 垂悬引用（Dangling References）

如果放在有指针概念的编程语言里它就指的是那种没有实际指向一个真正能访问的数据的指针（注意，不一定是空指针，还有可能是已经释放的资源）。它们就像失去悬挂物体的绳子，所以叫"垂悬引用"。"垂悬引用"在 Rust 语言里不允许出现，如果有，编译器会发现它。

```rust
// 错误示例
fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> &String {
    let s = String::from("hello");

    &s
}


// 输出
error[E0106]: missing lifetime specifier
 --> src/main.rs:5:16
  |
5 | fn dangle() -> &String {
  |                ^ expected named lifetime parameter
  |
  = help: this function's return type contains a borrowed value, but there is no value for it to be borrowed from
help: consider using the `'static` lifetime
  |
5 | fn dangle() -> &'static String {
  |                ~~~~~~~~

For more information about this error, try `rustc --explain E0106`.
error: could not compile `hello-rust` due to previous error

```


## 切片

切片（Slice）是对数据值的部分引用。

```rust
fn main() {
    let s = String::from("broadcast");

    let part1 = &s[0..5];
    let part2 = &s[5..9];

    println!("{}={}+{}", s, part1, part2);
}
```

> ..y 等价于 0..y
>
> x.. 等价于位置 x 到数据结束
>
> .. 等价于位置 0 到结束

被切片引用的字符串禁止更改其值

```rust
fn main() {
    let mut s = String::from("runoob");
    let slice = &s[0..3];
    s.push_str("yes!"); // 错误
    println!("slice = {}", slice);
}
```

> 在 Rust 中有两种常用的字符串类型：str 和 String。str 是 Rust 核心语言类型，就是本章一直在讲的字符串切片（String Slice），常常以引用的形式出现（&str）。 凡是用双引号包括的字符串常量整体的类型性质都是 &str

切片结果必须是引用类型，且要显示定义
```rust
let slice = &s[0..3];
```

String 转换成 &str：
```rust
let s1 = String::from("hello");
let s2 = &s1[..];

// 运行结果
// 1
// 3
// 5
```

### 非字符串切片
```rust
fn main() {
    let arr = [1, 3, 5, 7, 9];
    let part = &arr[0..3];
    for i in part.iter() {
        println!("{}", i);
    }
}
```


## 结构体

结构体定义：
```rust
struct Site {
    domain: String,
    name: String,
    nation: String,
    found: u32
}
```

结构体实例
```rust
let runoob = Site {
    domain: String::from("www.runoob.com"),
    name: String::from("RUNOOB"),
    nation: String::from("China"),
    found: 2013
};
```

可以简化书写
```rust
let domain = String::from("www.runoob.com");
let name = String::from("RUNOOB");
let runoob = Site {
    domain,  // 等同于 domain : domain,
    name,    // 等同于 name : name,
    nation: String::from("China"),
    traffic: 2013
};
```

结构体更新语法：
```rust
let site = Site {
    domain: String::from("www.runoob.com"),
    name: String::from("RUNOOB"),
    ..runoob
};
```
> 至少重新设定一个字段的值才能引用其他实例的值。

### 元组结构体。

更简单的定义和使用结构体的方式：元组结构体。
```rust
struct Color(u8, u8, u8);
struct Point(f64, f64);

let black = Color(0, 0, 0);
let origin = Point(0.0, 0.0);

fn main() {
    struct Color(u8, u8, u8);
    struct Point(f64, f64);

    let black = Color(0, 0, 0);
    let origin = Point(0.0, 0.0);

    println!("black = ({}, {}, {})", black.0, black.1, black.2);
    println!("origin = ({}, {})", origin.0, origin.1);
}

// black = (0, 0, 0)
// origin = (0, 0)
```

### 结构体所有权

结构体必须掌握字段值所有权，因为结构体失效的时候会释放所有字段。

### 输出结构体
```rust
#[derive(Debug)]

struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };

    println!("rect1 is {:?}", rect1);
}
```

一定要导入调试库 #[derive(Debug)] ，之后在 println 和 print 宏中就可以用 {:?} 占位符输出一整个结构体：
```rust
rect1 is Rectangle { width: 30, height: 50 }
```

如果属性较多的话可以使用另一个占位符 {:#?} 。
```rust
rect1 is Rectangle {
    width: 30,
    height: 50
}
```

### 结构体方法

方法（Method）和函数（Function）类似，用来操作结构体实例
```rust
struct Rectangle {
    width: u32,
    height: u32,
}
   
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };
    println!("rect1's area is {}", rect1.area());
}

// rect1's area is 1500
```

多参数示例
```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn wider(&self, rect: &Rectangle) -> bool {
        self.width > rect.width
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };
    let rect2 = Rectangle { width: 40, height: 20 };

    println!("{}", rect1.wider(&rect2));
}

// false
```

### 结构体关联函数

之所以"结构体方法"不叫"结构体函数"是因为"函数"这个名字留给了这种函数：它在 impl 块中却没有 &self 参数。

这种函数不依赖实例，但是使用它需要声明是在哪个 impl 块中的。

一直使用的 String::from 函数就是一个"关联函数"。

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn create(width: u32, height: u32) -> Rectangle {
        Rectangle { width, height }
    }
}

fn main() {
    let rect = Rectangle::create(30, 50);
    println!("{:?}", rect);
}

// Rectangle { width: 30, height: 50 }
```
> 结构体 impl 块可以写几次，效果相当于它们内容的拼接！

### 单元结构体
没有身体的结构体为单元结构体（Unit Struct）
```rust
struct UnitStruct;
```


## 枚举类

```rust
#[derive(Debug)]

enum Book {
    Papery, Electronic
}

fn main() {
    let book = Book::Papery;
    println!("{:?}", book);
}

// Papery
```

```rust
// 枚举类
enum Book {
    Papery(u32),
    Electronic(String),
}

let book = Book::Papery(1001);
let ebook = Book::Electronic(String::from("url://..."));

// 结构体
enum Book {
    Papery { index: u32 },
    Electronic { url: String },
}
let book = Book::Papery{index: 1001};

```

### match 语法

```rust
fn main() {
    enum Book {
        Papery {index: u32},
        Electronic {url: String},
    }
   
    let book = Book::Papery{index: 1001};
    let ebook = Book::Electronic{url: String::from("url...")};
   
    match book {
        Book::Papery { index } => {
            println!("Papery book {}", index);
        },
        Book::Electronic { url } => {
            println!("E-book {}", url);
        }
    }
}

// Papery book 1001
```

match 块也可以当作函数表达式来对待，它可以有返回值
```rust
enum Book {
    Papery(u32),
    Electronic {url: String},
}
let book = Book::Papery(1001);

match book {
    Book::Papery(i) => {
        println!("{}", i);
    },
    Book::Electronic { url } => {
        println!("{}", url);
    }
}
```

> match 除了能够对枚举类进行分支选择以外，还可以对整数、浮点数、字符和字符串切片引用（&str）类型的数据进行分支选择。其中，浮点数类型被分支选择虽然合法，但不推荐这样使用，因为精度问题可能会导致分支错误。

> 对非枚举类进行分支选择时必须注意处理例外情况，即使在例外情况下没有任何要做的事 . 例外情况用下划线 _ 表示：

### Option 枚举类

Option 是 Rust 标准库中的枚举类，这个类用于填补 Rust 不支持 null 引用的空白。

Rust 在语言层面彻底不允许空值 null 的存在，但无奈null 可以高效地解决少量的问题，所以 Rust 引入了 Option 枚举类

```rust
enum Option<T> {
    Some(T),
    None,
}
```

定义一个可以为空值的类
```rust
let opt = Option::Some("Hello");
```

针对 opt 执行某些操作，你必须先判断它是否是 Option::None：
```rust
fn main() {
    let opt = Option::Some("Hello");
    match opt {
        Option::Some(something) => {
            println!("{}", something);
        },
        Option::None => {
            println!("opt is nothing");
        }
    }
}
```

初始值为空的 Option 必须明确类型
```rust
fn main() {
    let opt: Option<&str> = Option::None;
    match opt {
        Option::Some(something) => {
            println!("{}", something);
        },
        Option::None => {
            println!("opt is nothing");
        }
    }
}

// opt is nothing
```

Option 是一种特殊的枚举类，它可以含值分支选择
```rust
fn main() {
        let t = Some(64);
        match t {
                Some(64) => println!("Yes"),
                _ => println!("No"),
        }
}
```

### if let 语法
```rust
// match 语法
let i = 0;
match i {
    0 => println!("zero"),
    _ => {},
}

// 使用 if let 重写
let i = 0;
if let 0 = i {
    println!("zero");
}

// zero
```

if let 语法可以认为是只区分两种情况的 match 语句的"语法糖"（语法糖指的是某种语法的原理相同的便捷替代品）
```rust
fn main() {
    enum Book {
        Papery(u32),
        Electronic(String)
    }
    let book = Book::Electronic(String::from("url"));
    if let Book::Papery(index) = book {
        println!("Papery {}", index);
    } else {
        println!("Not papery book");
    }
}

```


## 泛型与特性

泛型示例

```rust
fn max<T>(array: &[T]) -> T {
    let mut max_index = 0;
    let mut i = 1;
    while i < array.len() {
        if array[i] > array[max_index] {
            max_index = i;
        }
        i += 1;
    }
    array[max_index]
}

```

结构体与枚举类中的泛型

```rust
struct Point<T> {
    x: T,
    y: T
}

let p1 = Point {x: 1, y: 2};
let p2 = Point {x: 1.0, y: 2.0};

let p = Point {x: 1, y: 2.0};


struct Point<T1, T2> {
    x: T1,
    y: T2
}


enum Option<T> {
    Some(T),
    None,
}

enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

结构体与枚举类都可以定义方法，那么方法也应该实现泛型的机制，否则泛型的类将无法被有效的方法操作。

```rust
struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

fn main() {
    let p = Point { x: 1, y: 2 };
    println!("p.x = {}", p.x());
}

// p.x = 1
```

impl 关键字的后方必须有 T，因为它后面的 T 是以之为榜样的。但我们也可以为其中的一种泛型添加方法

```rust
impl Point<f64> {
    fn x(&self) -> f64 {
        self.x
    }
}

impl<T, U> Point<T, U> {
    fn mixup<V, W>(self, other: Point<V, W>) -> Point<T, W> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}

```

### 特性

类似于 接口 的概念

```rust
trait Descriptive {
    fn describe(&self) -> String;
}
```

> Descriptive 规定了实现者必需有 describe(&self) -> String 方法。

```rust
struct Person {
    name: String,
    age: u8
}

impl Descriptive for Person {
    fn describe(&self) -> String {
        format!("{} {}", self.name, self.age)
    }
}
```

格式

```rust
impl <特性名> for <所实现的类型名>
```

### 默认特性
```rust
trait Descriptive {
    fn describe(&self) -> String {
        String::from("[Object]")
    }
}

struct Person {
    name: String,
    age: u8
}

impl Descriptive for Person {
    fn describe(&self) -> String {
        format!("{} {}", self.name, self.age)
    }
}

fn main() {
    let cali = Person {
        name: String::from("Cali"),
        age: 24
    };
    println!("{}", cali.describe());
}

// Cali 24
// 去掉 impl Descriptive for Person 输出： [Object]
```

### 特性做参数

```rust
fn output(object: impl Descriptive) {
    println!("{}", object.describe());
}

fn output<T: Descriptive>(object: T) {
    println!("{}", object.describe());
}

fn output_two<T: Descriptive>(arg1: T, arg2: T) {
    println!("{}", arg1.describe());
    println!("{}", arg2.describe());
}
```

特性作类型表示时如果涉及多个特性，可以用 + 符号表示
```rust
fn notify(item: impl Summary + Display)
fn notify<T: Summary + Display>(item: T)
```
> 仅用于表示类型的时候，并不意味着可以在 impl 块中使用

复杂的实现关系可以使用 where 关键字简化
```rust
fn some_function<T: Display + Clone, U: Clone + Debug>(t: T, u: U)

// 简写
fn some_function<T, U>(t: T, u: U) -> i32
    where T: Display + Clone,
          U: Clone + Debug
```

取最大值程序
```rust
trait Comparable {
    fn compare(&self, object: &Self) -> i8;
}

fn max<T: Comparable>(array: &[T]) -> &T {
    let mut max_index = 0;
    let mut i = 1;
    while i < array.len() {
        if array[i].compare(&array[max_index]) > 0 {
            max_index = i;
        }
        i += 1;
    }
    &array[max_index]
}

impl Comparable for f64 {
    fn compare(&self, object: &f64) -> i8 {
        if &self > &object { 1 }
        else if &self == &object { 0 }
        else { -1 }
    }
}

fn main() {
    let arr = [1.0, 3.0, 5.0, 4.0, 2.0];
    println!("maximum of arr is {}", max(&arr));
}

// maximum of arr is 5
```

### 特性做返回值
```rust
fn person() -> impl Descriptive {
    Person {
        name: String::from("Cali"),
        age: 24
    }
}
```

### 有条件实现方法
```rust
struct A<T> {}

impl<T: B + C> A<T> {
    fn d(&self) {}
}
```


## 错误处理

对于可恢复错误用 Result<T, E> 类来处理，对于不可恢复错误使用 panic! 宏来处理。

```rust
fn main() {
    panic!("error occured");
    println!("Hello, Rust");
}

// thread 'main' panicked at 'error occured', src\main.rs:3:5
// note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace.
```

设置环境变量
```rust
RUST_BACKTRACE=1 cargo run
```
输出
```rust
thread 'main' panicked at 'error occured', src\main.rs:3:5
stack backtrace:
  ...
  11: greeting::main
             at .\src\main.rs:3
  ...
```

> 回溯是不可恢复错误的另一种处理方式，它会展开运行的栈并输出所有的信息，然后程序依然会退出。上面的省略号省略了大量的输出信息，我们可以找到我们编写的 panic! 宏触发的错误。

### 可恢复的错误
```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

在 Rust 标准库中可能产生异常的函数的返回值都是 Result 类型的。例如：当我们尝试打开一个文件时：
```rust
use std::fs::File;

fn main() {
    let f = File::open("hello.txt");
    match f {
        Ok(file) => {
            println!("File opened successfully.");
        },
        Err(err) => {
            println!("Failed to open the file.");
        }
    }
}
```
如果 hello.txt 文件不存在，会打印 "Failed to open the file."。

### 可恢复的错误的传递
```rust
fn f(i: i32) -> Result<i32, bool> {
    if i >= 0 { Ok(i) }
    else { Err(false) }
}

fn main() {
    let r = f(10000);
    if let Ok(v) = r {
        println!("Ok: f(-1) = {}", v);
    } else {
        println!("Err");
    }
}

// Ok: f(-1) = 10000
```

```rust
fn f(i: i32) -> Result<i32, bool> {
    if i >= 0 { Ok(i) }
    else { Err(false) }
}

fn g(i: i32) -> Result<i32, bool> {
    let t = f(i)?;
    Ok(t) // 因为确定 t 不是 Err, t 在这里已经是 i32 类型
}

fn main() {
    let r = g(10000);
    if let Ok(v) = r {
        println!("Ok: g(10000) = {}", v);
    } else {
        println!("Err");
    }
}

// Ok: g(10000) = 10000
```

### kind 方法

判断 Result 的 Err 类型，获取 Err 类型的函数是 kind()
```rust
use std::io;
use std::io::Read;
use std::fs::File;

fn read_text_from_file(path: &str) -> Result<String, io::Error> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    f.read_to_string(&mut s)?;
    Ok(s)
}

fn main() {
    let str_file = read_text_from_file("hello.txt");
    match str_file {
        Ok(s) => println!("{}", s),
        Err(e) => {
            match e.kind() {
                io::ErrorKind::NotFound => {
                    println!("No such file");
                },
                _ => {
                    println!("Cannot read the file");
                }
            }
        }
    }
}

// No such file
```















## 参考资料
[菜鸟教程 Rust](https://www.runoob.com/rust/rust-tutorial.html)
