# 原生JavaScript

## 计算DOM距离
```javascript
// 原生JS获取元素
var box=document.getElementById('box'); 

let botTop = box.getBoundingClientRect().top // 元素上边距离页面上边的距离
let botRight = box.getBoundingClientRect().right // 元素右边距离页面左边的距离
let botBottom = box.getBoundingClientRect().bottom // 元素下边距离页面上边的距离
let botLeft = box.getBoundingClientRect().left // 元素左边距离页面左边的距离

console.log('box', botTop, botRight, botBottom, botLeft)

// Vue
let refBox = this.$refs.getBoundingClientRect().top

```

## 判断：空对象 及 空数组
```javascript
if(JSON.stringify(obj) === '{}'){return true;}
if(JSON.stringify(obj) === '[]'){return true;}
```

## LocalStorage存取
```javascript
// 存储
let obj = {
    name: 'name',
    age: 'age',
}
window.localStorage.setItem('setKey', JSON.stringify(obj))
// 获取
let getObj = JSON.parse(window.localStorage.getItem('setKey'))


```

## 深拷贝、浅拷贝
```javascript
// 浅拷贝
this.showData = Object.assign({}, {a: 1, b: 2});

// 简单深拷贝
this.showData = JSON.parse(JSON.stringify([1,2,3]));

// 递归深拷贝
export function deepCopy (data) {
	//string,number,bool,null,undefined,symbol
	//object,array,date
	if (data && typeof data === "object") {
		//针对函数的拷贝
		if (typeof data === "function") {
			let tempFunc = data.bind(null);
			tempFunc.prototype = deepCopy(data.prototype);
			return tempFunc;
		}

		switch (Object.prototype.toString.call(data)) {
			case "[object String]":
				return data.toString();
			case "[object Number]":
				return Number(data.toString());
			case "[object Boolean]":
				return new Boolean(data.toString());
			case "[object Date]":
				return new Date(data.getTime());
			case "[object Array]":
				var arr = [];
				for (let i = 0; i < data.length; i++) {
					arr[i] = deepCopy(data[i]);
				}
				return arr;

			//js自带对象或用户自定义类实例
			case "[object Object]":
				var obj = {};
				for (let key in data) {
					//会遍历原型链上的属性方法，可以用hasOwnProperty来控制 （obj.hasOwnProperty(prop)
					obj[key] = deepCopy(data[key]);
				}
				return obj;
		}
	} else {
		//string,number,bool,null,undefined,symbol
		return data;
	}
}

```

## 锁定Body滚动
```javascript
lockBody (_boolean) {
  const _body = document.getElementsByTagName('body')[0];
  _boolean ? _body.style.overflow = 'hidden' : _body.style.overflow = '';
},
```

## 获取北京时间（跨时区也可用）
```javascript
const _time = new Date(xxx.replace(/\-/g, '/') + ' 00:00:00 CST').getDay();
console.log('_time', _time);
```

## 循环
```javascript
for (let [index,arrItem] of this.interfaceData.programmeList.entries()) {
	
}
```

## 运行环境检测
```typescript
/**
 * 运行环境检测，并将识别成功的标识更新到 body 的 class 中。
 *
 * @namespace app.$browser
 *
 * 桌面操作系统：
 * @property {boolean} linux
 * @property {boolean} mac
 * @property {boolean} windows
 *
 * 手机操作系统：
 * @property {boolean} android
 * @property {boolean} ios
 *
 * 浏览器：
 * @property {boolean} chrome
 * @property {boolean} ie
 * @property {boolean} firefox
 *
 * 简单心理 App：
 * @property {boolean} app - 是否为简单心理 App
 * @property {number|null} appVersion - 简单心理 App 版本号
 *
 * 微信：
 * @property {boolean} wechat - 是否为微信浏览器
 * @property {number|null} wechatVersion - 微信版本号
 * @property {boolean} miniprogram - 是否为微信小程序
 *
 * 设备：
 * @property {boolean} mobile - 是否为移动设备，包括平板
 * @property {boolean} desktop - 是否为桌面设备
 * @property {boolean} iphoneX - 是否为支持有安全区域的设备，如 iPhone X
 *
 * 操作系统：
 * @property {string|null} os - 操作系统
 * @property {number|null} osVersion - 操作系统版本号，仅取大版本号
 */

/* 声明window注入变量 */
declare let __wxjs_environment: any;

export default (ctx: any, inject: any) => {
  const $browser = Object.create(null);

  const userAgent: any = navigator.userAgent;

  // 桌面操作系统
  $browser.linux = userAgent.includes('Linux');
  $browser.mac = userAgent.includes('Macintosh');
  $browser.windows = userAgent.includes('Windows');

  // 手机操作系统
  $browser.android = userAgent.includes('Android');
  $browser.ios = /(iPhone|iPad|iPod)/i.test(userAgent);

  // 浏览器
  $browser.chrome = userAgent.includes('Chrome');
  $browser.ie = userAgent.includes('MSIE');
  $browser.firefox = userAgent.includes('Firefox');
  $browser.safari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);

  // App 内浏览器
  $browser.app = userAgent.includes('SmileBack') || userAgent.includes('CONSULTANT');
  $browser.appUser = userAgent.includes('SmileBack');
  $browser.appCoun = userAgent.includes('CONSULTANT');

  $browser.wechat = userAgent.includes('MicroMessenger') && !userAgent.includes('wxwork');
  $browser.weibo = userAgent.toLowerCase().includes('weibo');
  // iphoneX
  $browser.iphoneX = $browser.ios && ((window.screen.width === 375 && window.screen.height === 812) || (window.screen.width === 414 && window.screen.height === 896) || (window.screen.width === 414 && window.screen.height === 896) || (window.screen.width === 390 && window.screen.height === 844));

  // 微信
  if ($browser.wechat) {
    // 微信版本
    $browser.wechatVersion = ctx.app.$match(userAgent, /MicroMessenger\/(\d+.\d+.\d+)/, 1);
    // 微信小程序
    /* global __wxjs_environment */
    // eslint-disable-next-line camelcase
    $browser.miniprogram = $browser.wechat && typeof __wxjs_environment !== 'undefined' && __wxjs_environment === 'miniprogram' || userAgent.includes('miniProgram');
  } else {
    $browser.wechatVersion = null;
    $browser.miniprogram = false;
  }

  // 移动端和桌面端
  $browser.mobile = $browser.android || $browser.ios;
  $browser.desktop = !$browser.mobile;

  // App
  $browser.ios_app = $browser.app && $browser.ios;

  if ($browser.app) {
    if (/smileback\/[\d.]+/i.test(userAgent)) {
      $browser.appVersion = Number(userAgent.match(/smileback\/([\d.]+)/i)[1].replace(/\./g, ''));
      $browser.originalAppVersion = userAgent.match(/smileback\/([\d.]+)/i)[1];
    } else if (/consultant\/[\d.]+/i.test(userAgent)) {
      $browser.appVersion = userAgent.match(/consultant\/([\d.]+)/i)[1];
      $browser.originalAppVersion = userAgent.match(/consultant\/([\d.]+)/i)[1];
    }
  } else {
    $browser.appVersion = null;
    $browser.originalAppVersion = null;
  }

  // os
  if ($browser.android) {
    $browser.os = 'Android';
    $browser.osVersion = ctx.app.$match(userAgent, /Android (\d+)/, 1, (r) => {
      return Number(r);
    });
  } else if ($browser.ios) {
    $browser.os = 'iOS';
    $browser.osVersion = ctx.app.$match(userAgent, /OS (\d+)/, 1, (r) => {
      return Number(r);
    });
  } else if ($browser.windows) {
    $browser.os = 'Windows';
    $browser.osVersion = ctx.app.$match(userAgent, /Windows NT (\d+)/, 1, (r) => {
      return Number(r);
    });
  } else if ($browser.mac) {
    $browser.os = 'Mac';
    $browser.osVersion = ctx.app.$match(userAgent, /Mac OS X (\d+)/, 1, (r) => {
      return Number(r);
    });
  } else if ($browser.linux) {
    $browser.os = 'Linux';
    $browser.osVersion = null;
  } else {
    $browser.os = null;
    $browser.osVersion = null;
  }

  // 存储channel PC、h5、微博、微信、小程序
  let channel = 'h5';
  if ($browser.desktop) {
    channel = 'desktop';
  }
  if ($browser.weibo) {
    channel = 'weibo';
  }
  if ($browser.wechat) {
    channel = 'wechat';
  }
  if ($browser.miniprogram) {
    channel = 'miniprogram';
  }
  localStorage.setItem('channel', channel);


  // 将计算出的终端添加到body标签的Class中
  $browser.classList = Object.keys($browser).filter((k) => $browser[k] === true);
  const body = document.querySelector('body');
  if (body)
    body.className = body.className
      .split(' ')
      .concat($browser.classList)
      .filter((x, i, a) => a.indexOf(x) === i)
      .join(' ');

  $browser.layout = $browser.desktop ? 'desktop' : 'mobile';
  if ($browser.app) $browser.layout = 'app';

  // 注入变量
  inject('browser', $browser);
};

```

## 终端判断
```javascript
this.$browser.desktop // PC 端
this.$browser.mobile // 移动端(包含 APP)
this.$browser.app // 仅限于APP端
this.$browser.ios, // IOS系统
this.$browser.android, // 安卓系统
this.$browser.mobile && !this.$browser.app // 仅H5
```

## 生成二维码
```typescript
/**
 * 生成二维码
 *
 * 使用第三方库 https://github.com/kazuhikoarase/qrcode-generator/tree/master/js
 */
let sdkLoaded = false;
declare let qrcode: any;
/**
 * @param {string} content 内容
 *
 * @returns {promise}
 *
 * @example Vue.prototype.$qrcode('text').then(function(qr){ document.getElementById('qr_img').src = qr.createDataURL(); })
 */
export default (ctx: any, inject: any) => {
  const $qrcode = function (content) {
    if (!sdkLoaded) {
      const url = 'https://assets-1251943848.file.myqcloud.com/qrcode.min.js';
      return ctx.app.$loadScript(url).then(function () {
        sdkLoaded = true;
        return ctx.app.$qrcode(content);
      });
    } else {
      return new Promise(function (resolve) {
        /* global qrcode */
        const qr = qrcode(0, 'M');
        qr.addData(content);
        qr.make();
        resolve(qr);
      });
    }
  };

  inject('qrcode', $qrcode);
};
```
