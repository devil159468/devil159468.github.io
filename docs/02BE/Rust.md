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
