# 公共接口

## 获取IP地址接口(搜狐)
```bash
https://pv.sohu.com/cityjson?ie=utf-8

// 返回值
var returnCitySN = {"cip": "120.244.238.31", "cid": "CN", "cname": "CHINA"};
```

## 获取IP地址接口(IP API 接口)
```bash
http://ip-api.com/json/

// 返回值
{
  "status": "success",
  "country": "Japan",
  "countryCode": "JP",
  "region": "27",
  "regionName": "Ōsaka",
  "city": "Osaka",
  "zip": "",
  "lat": 34.6937,
  "lon": 135.5022,
  "timezone": "Asia/Tokyo",
  "isp": "OWL",
  "org": "Owl Limited",
  "as": "AS4785 xTom",
  "query": "103.88.46.103"
}
```
