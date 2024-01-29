# QRCode Generator

使用 [qrcode](https://github.com/davidshimjs/qrcodejs) 和 [element-plus](https://element-plus.org/zh-CN/) 创建的简洁的二维码生成页面

---

### todo

* [x] 使用 [electron](https://www.electronjs.org/) 和 [electron-builder](https://www.electron.build/index.html) 打包应用到桌面程序
* [x] 抽离QRCodeOptions到独立组件
* [ ] 使用 [Awesome-qr.js](https://github.com/sumimakito/Awesome-qr.js) 替换 [qrcode](https://github.com/davidshimjs/qrcodejs)


---

### install electron && electron-builder

> 详参: [添加 Electron 和 electron-builder 到现有 Vite 项目](https://blog.csdn.net/liuliu123456790/article/details/135902415)

* 方法一：设置代理（已配置于[.npmrc](./.npmrc)）

```shell
$env:ELECTRON_GET_USE_PROXY=1
$env:GLOBAL_AGENT_HTTP_PROXY=http://127.0.0.1:52539
$env:GLOBAL_AGENT_HTTPS_PROXY=http://127.0.0.1:52539
```

* 方法二：设置淘宝镜像

```shell
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
ELECTRON_CUSTOM_DIR="{{ version }}"
```

* Install

```shell
npm install --verbose electron electron-builder --save-dev
```