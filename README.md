# anydoor

Tiny NodeJS Static Web Server

## 安装
```
npm i -g anydoor
```

## 使用方法

```
anydoor # 将当前文件夹作为静态服务器根目录

anydoor -p 8080 # 设置端口号为8080

anydoor -h localhost # 设置host为localhost

anydoor -d /usr # 设置根目录为 /usr
```

## 项目目录说明
- index.js 配置可使用参数进行设置
- app.js 服务器的主入口
- config/defaultConfig.js 配置信息
- helper/cache.js 缓存相关,检测缓存和设置缓存
- helper/compress.js 使用gzip和deflate压缩
- helper/mime.js 拿到文件的类型
- helper/range.js 设置内容的大小
- helper/route.js 主处理路径
- helper/openUrl.js 浏览器自动打开链接
- template/dir.tpl 模版文件
