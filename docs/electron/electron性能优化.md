# Electron 性能优化

<!-- powerMonitor 模块 -->

### 性能优化技巧

1. 引入第三方模块需谨慎
   - 在 Web 服务上安装 Node.js 模块，我们一般不会关注 Node.js 模块的体积和加载该模块带来的损耗。但我们现在使用的是 Electron，不同于 Web 服务，我们开发的应用是要打包发布给客户的，体积庞大的 Node.js 包不利于我们应用程序的分发工作。
   - 服务于 Web 的 Node.js 模块也不关注应用的启动效率，因此它们往往会在应用启动时做大量的初始化工作，但这在 Electron 应用中也是不可接受的，我们往往希望首屏加载时间尽量短。
   - 非必要的Node.js模块尽量再使用时加载
   - 子窗体采用web + electron preload注入的方式可以大幅度提示首屏加载性能
2. 避免进程等待
   - 避免使用同步操作(如：读取文件、下载文件等)
3. 判断系统是否处于空闲状态，可以使用Electron提供的如下API
   - powerMonitor.getSystemIdleState(idleThreshold);
   - getSystemIdleState可以获取当前系统是否处于空闲状态，idleThreshold是一个整型参数，代表系统处于空闲状态的时长
4. 尽量避免require方法，因为require是一项昂贵的操作，占用资源较多，这一点尤其体现在Windows系统中
5. 你应该尽可能地把CSS和JavaScript合并到同一个文件中，以避免不必要的require和浏览器加载工作
6. 调试工具

- yarn add devtron --dev
- require('devtron').install()

6. 大量计算开启或者大文件下载上可以采用开启webwork线程
7. 优化窗口启动（如预览图片、播放视频）预先创建一个通用窗口，通过路由跳转加载页面，达到秒开。

8. 使用requestIdleCallback开启任务优先级队列

## 优化实践

- 减少第三方模块的加载，提示图片预览子窗体加载速度
- allowRendererProcessReuse true
- 避免日志过度写入，非重要日志可以采用异步写入，或行开线程写入

## 禁用多线程

(来自)：https://juejin.cn/post/7032524093183000589#heading-24

- 优点：
  - 减少内存占用
  - 减少CPU占用
- 缺点：
  - 禁用多线程后，Electron 应用程序将无法使用多线程来加速某些操作，例如网络请求和文件 I/O。这可能会导致应用程序的响应速度变慢。
  - 由于安全性和稳定性问题，Chromium 和 Electron 的开发者通常不建议使用这种模式。
  - 这种模式可能会增加应用崩溃的风险，因为一个页面的崩溃可能会导致整个应用程序崩溃。

```js
const { app } = require('electron')

app.commandLine.appendSwitch('single-process')
```

## 启用v8缓存

```js
app.commandLine.appendSwitch('js-flags', '--use-code-cache')
```
