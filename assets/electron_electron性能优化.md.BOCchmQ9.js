import{_ as l,c as e,o as s,ag as a}from"./chunks/framework.cqXd1Ucj.js";const c=JSON.parse('{"title":"Electron 性能优化","description":"","frontmatter":{},"headers":[],"relativePath":"electron/electron性能优化.md","filePath":"electron/electron性能优化.md"}'),t={name:"electron/electron性能优化.md"};function n(r,i,h,p,o,d){return s(),e("div",null,i[0]||(i[0]=[a(`<h1 id="electron-性能优化" tabindex="-1">Electron 性能优化 <a class="header-anchor" href="#electron-性能优化" aria-label="Permalink to &quot;Electron 性能优化&quot;">​</a></h1><h3 id="性能优化技巧" tabindex="-1">性能优化技巧 <a class="header-anchor" href="#性能优化技巧" aria-label="Permalink to &quot;性能优化技巧&quot;">​</a></h3><ol><li>引入第三方模块需谨慎 <ul><li>在 Web 服务上安装 Node.js 模块，我们一般不会关注 Node.js 模块的体积和加载该模块带来的损耗。但我们现在使用的是 Electron，不同于 Web 服务，我们开发的应用是要打包发布给客户的，体积庞大的 Node.js 包不利于我们应用程序的分发工作。</li><li>服务于 Web 的 Node.js 模块也不关注应用的启动效率，因此它们往往会在应用启动时做大量的初始化工作，但这在 Electron 应用中也是不可接受的，我们往往希望首屏加载时间尽量短。</li><li>非必要的Node.js模块尽量再使用时加载</li><li>子窗体采用web + electron preload注入的方式可以大幅度提示首屏加载性能</li></ul></li><li>避免进程等待 <ul><li>避免使用同步操作(如：读取文件、下载文件等)</li></ul></li><li>判断系统是否处于空闲状态，可以使用Electron提供的如下API <ul><li>powerMonitor.getSystemIdleState(idleThreshold);</li><li>getSystemIdleState可以获取当前系统是否处于空闲状态，idleThreshold是一个整型参数，代表系统处于空闲状态的时长</li></ul></li><li>尽量避免require方法，因为require是一项昂贵的操作，占用资源较多，这一点尤其体现在Windows系统中</li><li>你应该尽可能地把CSS和JavaScript合并到同一个文件中，以避免不必要的require和浏览器加载工作</li><li>调试工具</li></ol><ul><li>yarn add devtron --dev</li><li>require(&#39;devtron&#39;).install()</li></ul><ol start="6"><li><p>大量计算开启或者大文件下载上可以采用开启webwork线程</p></li><li><p>优化窗口启动（如预览图片、播放视频）预先创建一个通用窗口，通过路由跳转加载页面，达到秒开。</p></li><li><p>使用requestIdleCallback开启任务优先级队列</p></li></ol><h2 id="优化实践" tabindex="-1">优化实践 <a class="header-anchor" href="#优化实践" aria-label="Permalink to &quot;优化实践&quot;">​</a></h2><ul><li>减少第三方模块的加载，提示图片预览子窗体加载速度</li><li>allowRendererProcessReuse true</li><li>避免日志过度写入，非重要日志可以采用异步写入，或行开线程写入</li></ul><h2 id="禁用多线程" tabindex="-1">禁用多线程 <a class="header-anchor" href="#禁用多线程" aria-label="Permalink to &quot;禁用多线程&quot;">​</a></h2><p>(来自)：<a href="https://juejin.cn/post/7032524093183000589#heading-24" target="_blank" rel="noreferrer">https://juejin.cn/post/7032524093183000589#heading-24</a></p><ul><li>优点： <ul><li>减少内存占用</li><li>减少CPU占用</li></ul></li><li>缺点： <ul><li>禁用多线程后，Electron 应用程序将无法使用多线程来加速某些操作，例如网络请求和文件 I/O。这可能会导致应用程序的响应速度变慢。</li><li>由于安全性和稳定性问题，Chromium 和 Electron 的开发者通常不建议使用这种模式。</li><li>这种模式可能会增加应用崩溃的风险，因为一个页面的崩溃可能会导致整个应用程序崩溃。</li></ul></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;electron&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.commandLine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendSwitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;single-process&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="启用v8缓存" tabindex="-1">启用v8缓存 <a class="header-anchor" href="#启用v8缓存" aria-label="Permalink to &quot;启用v8缓存&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.commandLine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendSwitch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;js-flags&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;--use-code-cache&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,13)]))}const E=l(t,[["render",n]]);export{c as __pageData,E as default};
