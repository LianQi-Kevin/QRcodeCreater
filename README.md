# QRCode Generator

使用 [qrcode](https://github.com/davidshimjs/qrcodejs) 和 [element-plus](https://element-plus.org/zh-CN/) 创建的简洁的二维码生成页面

---

### todo

* [x] 使用 [electron](https://www.electronjs.org/) 和 [electron-builder](https://www.electron.build/index.html) 打包应用到桌面程序
* [x] 抽离QRCodeOptions到独立组件
* [ ] 使用 [Awesome-qr.js](https://github.com/sumimakito/Awesome-qr.js) 替换 [qrcode](https://github.com/davidshimjs/qrcodejs)


---

### requirements Install

#### electron && electron-builder

```shell
npm config set proxy=http://127.0.0.1:52539
npm config set registry=https://registry.npmjs.org
$env:ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
$env:ELECTRON_CUSTOM_DIR="{{ version }}"
$env:NODE_TLS_REJECT_UNAUTHORIZED=0
npm install --verbose electron electron-builder --save-dev
```