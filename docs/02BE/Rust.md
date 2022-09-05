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














































## 
