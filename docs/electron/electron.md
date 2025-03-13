# Electron 开发总结

### Electron进程通信

1.  ipcRenderer.sendTo()

```js
// webContentsId  窗口ID
ipcRenderer.sendTo(webContentsId, channel, ...args)
```

2. 使用全局共享属性

3. 利用主进程中转

4. ipcRenderer.invoke、ipcMain.handle

```js
// 主进程
ipcMain.handle('test', async (event, args) => {
  const result = await somePromise()
  return result
})
// 渲染进程
ipcRenderer.invoke('test', data).then((result) => {
  console.log(result)
  return result
})
```

### webview 注入 js，开启 contextIsolation js 采用 file://协议

```html
<webview
  :id="'webviewid' + page.openTime"
  :ref="page.activeUrl+page.openTime"
  :key="page.activeUrl+page.openTime"
  v-for="page in pages"
  :class="{active:(activePageUrl+activePageOpenTime)===(page.activeUrl+page.openTime)}"
  class="web-content"
  :src="page.activeUrl"
  :params="page.params"
  :useragent="useragent"
  :preload="preloadFile"
  webpreferences="contextIsolation"
  v-show="((activePageUrl+activePageOpenTime)===(page.activeUrl+page.openTime)) && pageReady"
  @did-start-navigation="handleLoadstart"
  @load-commit="handleLoadCommit(page)"
  @new-window="handleNewWindow"
  @dialog="handleDialog"
  @dom-ready="handlecomplete(page)"
></webview>
<!-- 开启contextIsolation：  webpreferences="contextIsolation" -->

```

```js
// webview 需要使用file协议
const preloadFile = `file://${path.resolve(__dirname, 'preload.js')}`
// preload.js
const { contextBridge, ipcRenderer } = require('electron')
const { remote } = require('electron')
const processGlobal = remote.getGlobal('shareObject')

contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    // whitelist channels
    const validChannels = ['toMain']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive: (channel, func) => {
    const validChannels = ['fromMain']
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  },
  getUser() {
    return processGlobal.store
  },
})
window.addEventListener('DOMContentLoaded', () => {
  console.log('加载')
  // setInterval(() => {
  //   console.log('加载成功')
  // }, 2000)
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
})
```

### electron 进程挂起或者奔溃

- process.crash() // 让进程奔溃
- process.hang() // 让进程挂起

1. 进程奔溃

```js
// 进程奔溃捕获
app.on('render-process-gone', async (event, webContents, details) => {
  if (details) {
    log.info('render-process-gone进程崩溃或被杀死', details.reason)
    winLog.writeInfo('render-process-gone进程崩溃或被杀死', details.reason)
    // 捕获渲染进程崩溃
    if (details.reason === 'crashed') {
      const win = Array.from(windowPool.activeWindows).find(win => win.id === webContents.id)
      // 主窗体重新加载页面
      console.log('窗口id', webContents.id)
      if (win.name === 'web_main') {
        win.close()
        const res = await dialog.showMessageBox(win, {
          type: 'error',
          title: '进程崩溃了',
          message: '这个进程已经崩溃.',
          buttons: ['重新加载', '退出'],
        })
        if (res.response === 0) {
          // webContents.id === windowPool.mainWindow.id
          // webContents.reload()
          app.relaunch()
          app.exit(0)
        }
        else {
          app.exit(0)
        }
      }
      else {
        win.close()
      }
    }
  }
  else {
    log.info('render-process-gone details进程崩溃或被杀死', details)
    winLog.writeInfo('render-process-gone details进程崩溃或被杀死', details)
  }
})
```

1. 进程挂起

```js
win.on('unresponsive', () => {
  const options = {
    type: 'info',
    title: '渲染器进程挂起',
    message: '这个进程已经被挂起.',
    buttons: ['重载', '关闭']
  }
  dialog.showMessageBox(options, (index) => {
    if (index === 0)
      win.reload()
    else win.close()
  })
})
```

### electron-builder 配置

electron-builder.yml

```yml
{
  "appId": "YourAppID",
  "asar": true, // 是否开启asar
  "asarUnpack": ["node_modules/ffmpeg-static/bin/${os}/${arch}/ffmpeg"] // 不用打包成asar的文件
  "icon": "public/favicon.ico",
  "directories": {
    "output": "release/${version}"
  },
  "files": [
    "dist-electron",
    "dist"
  ],
  "mac": {
    "artifactName": "${productName}_${version}.${ext}",
    "target": [
      "dmg"
    ]
  },
  "win": {
    "target": [
      {
        "target": "nsis",
        "arch": [
          "x64"
        ]
      }
    ],
    "artifactName": "${productName}_${version}.${ext}"
  },
  "nsis": {
    "oneClick": false,
    "perMachine": false,
    "allowToChangeInstallationDirectory": true,
    "deleteAppDataOnUninstall": false
  }
}

```

### electron 视频编解码问题

1. 采用FFmpeg 推流

```js
const path = require('node:path')
const mp4 = path.join(__dirname, './test.mp4')
const { on } = require('node:events')
const http = require('node:http')
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(path.join(__dirname, './src/libs/ffmpeg/bin/ffmpeg.exe'))
ffmpeg.setFfprobePath(path.join(__dirname, './src/libs/ffmpeg/bin/ffprobe.exe'))

const url = '/8ce8fec4a2f9775178ec2f55320006ac.mp4'
const url1 = '/e06f40fe86213da8d53a9a34fb5b1b0d.mp4'
const bigurl = './big.mp4'
// 查看视频信息，判断浏览器是否支持
ffmpeg.ffprobe(url1, (err, data) => {
  console.log(data)
})
// 启动node媒体服务
const NodeMediaServer = require('node-media-server')

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
}
// rtmp://localhost:1935/live/STREAM_NAME
const nms = new NodeMediaServer(config)
nms.run()

// 向媒体服务推流
ffmpeg({
  source: url1,
  preset: 'superfast'
  // preset: 'fast'
})
  .seekInput(0) // 设置视频开始播放的时间 可以通过点击进度条控制播放的进度
  .on('end', () => {
    console.log('结束')
  // console.timeEnd("transcoding");
  })
  .format('flv')
  .output('rtmp://localhost:1935/live/STREAM_NAME', {
    end: true
  })
// .size('50%')
// Intel QSV进行H.264转码
  .outputOptions(['-pix_fmt nv12', `-c:v h264_qsv`, '-threads 2', '-bufsize 50k', '-an', '-y'])

  .run()
```

2. 采用文件流的形式，启动一个http服务解析视频
   '-threads', '2' 开启两个线程CUP约占用50%

```js
const path = require('node:path')
const mp4 = path.join(__dirname, './test.mp4')
const { on } = require('node:events')
const http = require('node:http')
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(path.join(__dirname, './src/libs/ffmpeg/bin/ffmpeg.exe'))
ffmpeg.setFfprobePath(path.join(__dirname, './src/libs/ffmpeg/bin/ffprobe.exe'))

const url = '/8ce8fec4a2f9775178ec2f55320006ac.mp4'
const url1 = '/e06f40fe86213da8d53a9a34fb5b1b0d.mp4'
const bigurl = './big.mp4'
// 查看视频信息，判断浏览器是否支持
ffmpeg.ffprobe(url1, (err, data) => {
  console.log(data)
})
function getParam(url, key) {
  const param = new Object()
  let item = new Array()
  const urlList = url.split('?')
  let req
  if (urlList.length == 1) {
    req = urlList[0]
  }
  else {
    req = urlList[1]
  }
  const list = req.split('&')
  for (let i = 0; i < list.length; i++) {
    item = list[i].split('=')
    param[item[0]] = item[1]
  }
  return param[key] ? param[key] : null
}

// 流解决方案
let _ffmpegCommand
function killFfmpegCommand() {
  if (_ffmpegCommand) {
    _ffmpegCommand.kill()
  }
}
const _videoServer = http.createServer((request, response) => {
  console.log('on request', request.url)
  const startTime = Number.parseInt(getParam(request.url, 'startTime'))

  // this.killFfmpegCommand();
  _ffmpegCommand = ffmpeg({
    source: url1,
    preset: 'ultrafast'
  })
  // .nativeFramerate()
  // .videoCodec('libx264')
  // .audioCodec('aac')
    .format('mp4')
    .size('30%')
    .seekInput(startTime)
  // .outputOptions([  '-pix_fmt nv12', `-c:v h264_qsv`, '-threads 2', '-bufsize 50k', '-an', '-y'])
    .outputOptions(
      '-movflags',
      'frag_keyframe+empty_moov+faststart',
      '-g',
      '18',
      '-threads',
      '2'
    )
    .on('progress', (progress) => {
      console.log(`time: ${progress.timemark}`)
    })
    .on('error', (err) => {
      console.log(`An error occurred: ${err.message}`)
    })
    .on('end', () => {
      console.log('Processing finished !')
    })
  const videoStream = _ffmpegCommand.pipe()
  videoStream.pipe(response)
}).listen(8888)

```

### electron 奔溃日志

奔溃分析工具

1. electron-minidump

```js
// 获取奔溃日志路径
app.getPath('crashDumps')
```

## 自定义协议

```js
import { app, BrowserWindow, crashReporter, ipcMain, protocol, shell } from 'electron'
// 一定要加上 supportFetchAPI
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true, supportFetchAPI: true, corsEnabled: true } },
])
// 在whenReady注册协议
app.whenReady().then(() => {
  const res = protocol.registerBufferProtocol('app', (request, callback) => {
    console.log('出发')
    const json = { a: 2 }
    callback({ mimeType: 'application/json', data: Buffer.from(JSON.stringify(json), 'utf-8') })
  })
  console.log('registerBufferProtocol', res)
  createWindow()
})
```
