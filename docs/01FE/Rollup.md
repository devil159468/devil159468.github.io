# Rollup

- 解析
- 源码及实现

```javascript
// rollup.config.js
export default {
	input: './src/main.js', // 入口文件
    output: {
		file: './dist/bundle.js', // 导报后的存放文件
        format: 'cjs', // 输出格式 amd es6 iife umd cjd
        name: 'bundleName' // 如果是 iife，umd 需要指定一个全局变量
    }
}
```
