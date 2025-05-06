import{_ as a,c as n,o as p,ag as i}from"./chunks/framework.cqXd1Ucj.js";const k=JSON.parse('{"title":"npm、yarn 包管理工具常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"web/包管理工具.md","filePath":"web/包管理工具.md"}'),l={name:"web/包管理工具.md"};function e(t,s,o,r,h,c){return p(),n("div",null,s[0]||(s[0]=[i(`<h1 id="npm、yarn-包管理工具常用命令" tabindex="-1">npm、yarn 包管理工具常用命令 <a class="header-anchor" href="#npm、yarn-包管理工具常用命令" aria-label="Permalink to &quot;npm、yarn 包管理工具常用命令&quot;">​</a></h1><h2 id="换源" tabindex="-1">换源 <a class="header-anchor" href="#换源" aria-label="Permalink to &quot;换源&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn config get registry</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn config set registry https://registry.npm.taobao.org/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm config get registry</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm config set registry https://registry.npm.taobao.org/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 要恢复搜索功能，请使用删除：</span></span>
<span class="line"><span>yarn config delete registry</span></span>
<span class="line"><span>npm config delete registry</span></span></code></pre></div><h2 id="清理缓存" tabindex="-1">清理缓存 <a class="header-anchor" href="#清理缓存" aria-label="Permalink to &quot;清理缓存&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn cache clean</span></span>
<span class="line"><span>npm cache clean --force</span></span></code></pre></div><h2 id="nvm-设置nvm国内镜像的方法" tabindex="-1">nvm 设置nvm国内镜像的方法 <a class="header-anchor" href="#nvm-设置nvm国内镜像的方法" aria-label="Permalink to &quot;nvm 设置nvm国内镜像的方法&quot;">​</a></h2><ol><li>阿里云</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span># 设置npm_mirror:</span></span>
<span class="line"><span>nvm npm_mirror https://npmmirror.com/mirrors/npm/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置node_mirror:</span></span>
<span class="line"><span>nvm node_mirror https://npmmirror.com/mirrors/node/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2. 腾讯云</span></span>
<span class="line"><span># 设置npm_mirror:</span></span>
<span class="line"><span>nvm npm_mirror http://mirrors.cloud.tencent.com/npm/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置node_mirror:</span></span>
<span class="line"><span>nvm node_mirror http://mirrors.cloud.tencent.com/nodejs-release/</span></span></code></pre></div><h3 id="npmrc" tabindex="-1">.npmrc <a class="header-anchor" href="#npmrc" aria-label="Permalink to &quot;.npmrc&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// .npmrc</span></span>
<span class="line"><span>registry=https://registry.npm.taobao.org/</span></span>
<span class="line"><span>sass_binary_site=https://npm.taobao.org/mirrors/node-sass/</span></span>
<span class="line"><span>chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver/</span></span>
<span class="line"><span>phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/</span></span>
<span class="line"><span>electron_mirror=https://npm.taobao.org/mirrors/electron/</span></span></code></pre></div><h2 id="pnpm" tabindex="-1"><a href="https://www.pnpm.cn/" target="_blank" rel="noreferrer">pnpm</a> <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;[pnpm](https://www.pnpm.cn/)&quot;">​</a></h2><p>基本命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如我们需要在@packages/components安装lodash，命令如下：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @packages/components</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lodash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># packageA中引用packageB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @packages/components</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @packages/utils@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span></code></pre></div><ol><li><strong>pnpm + workspace + changesets 构建你的 monorepo 工程</strong></li></ol><ul><li>什么是 monorepo？以及和 multirepo 的区别是什么? <ol><li>monorepo 就是把多个工程放到一个 git 仓库中进行管理，因此他们可以共享同一套构建流程、代码规范也可以做到统一，特别是如果存在模块间的相互引用的情况，查看代码、修改bug、调试等会更加方便。</li><li>multirepo 多仓库架构</li></ol></li><li></li></ul><h2 id="volta" tabindex="-1"><a href="https://volta.sh/" target="_blank" rel="noreferrer">volta</a> <a class="header-anchor" href="#volta" aria-label="Permalink to &quot;[volta](https://volta.sh/)&quot;">​</a></h2><ol><li>基础命令</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>volta fetch        将工具缓存到本地，方便使用，下次不用重新下载</span></span>
<span class="line"><span>volta install      下载一个工具例如 volta install node@14(自动下载稳定版本, 切换node版本也可以使用此命令)</span></span>
<span class="line"><span>volta uninstall    卸载一个工具，指定详细名称如node/npm/cnpm/yarn</span></span>
<span class="line"><span>volta pin          将使用的工具版本固定到json中</span></span>
<span class="line"><span>volta list         查看当前使用工具的版本,后面加上工具名称如node/npm/cnpm/yarn都可以</span></span>
<span class="line"><span>volta list all     产看已安装的node版本</span></span>
<span class="line"><span>volta completions  不知道有啥用</span></span>
<span class="line"><span>volta which        查看volta安装目录</span></span>
<span class="line"><span>volta setup        切换当前使用的用户,没啥用</span></span>
<span class="line"><span>volta help         没啥用</span></span></code></pre></div><ol start="2"><li>volta install</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装指定版本的node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node@14.17.3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装特定版本中的稳定的node版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node@14</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装LTS版本的node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  node</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装最新版本的node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node@latest</span></span></code></pre></div><ol start="3"><li>volta pin</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># node版本固定</span></span>
<span class="line"><span>$ volta pin node@14.17</span></span>
<span class="line"><span></span></span>
<span class="line"><span># npm版本固定</span></span>
<span class="line"><span>$ volta pin npm@6.14</span></span>
<span class="line"><span># or volta pin yarn@1.19</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://juejin.cn/post/7102627615172722702#heading-6</span></span></code></pre></div><h2 id="windows-choco" tabindex="-1">windows choco <a class="header-anchor" href="#windows-choco" aria-label="Permalink to &quot;windows choco&quot;">​</a></h2><p>choco install 软件包名称 choco install 软件包名称 choco install 软件包名称</p><p>// 安装 choco install chocolateygui // 安装之后输入 chocolateygui 打开图形界面安装你想安装的软件即可</p>`,26)]))}const g=a(l,[["render",e]]);export{k as __pageData,g as default};
