import{_ as s,c as i,o as e,ag as t}from"./chunks/framework.cqXd1Ucj.js";const c=JSON.parse('{"title":"webpack","description":"","frontmatter":{},"headers":[],"relativePath":"web/webpack.md","filePath":"web/webpack.md"}'),n={name:"web/webpack.md"};function l(p,a,h,k,r,o){return e(),i("div",null,a[0]||(a[0]=[t(`<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h1><h2 id="相关文章" tabindex="-1">相关文章 <a class="header-anchor" href="#相关文章" aria-label="Permalink to &quot;相关文章&quot;">​</a></h2><p><a href="https://segmentfault.com/a/1190000021494964?utm_source=tag-newest" target="_blank" rel="noreferrer">webpack 打包原理 ? 看完这篇你就懂了 !</a></p><h2 id="什么是webpack" tabindex="-1">什么是webpack <a class="header-anchor" href="#什么是webpack" aria-label="Permalink to &quot;什么是webpack&quot;">​</a></h2><p>webpack是一个现代的JavaScript应用程序静态模块打包器。当webpack处理应用程序时，他会递归构建一个依赖关系图，其中包含应用程序需要的每个模块</p><h2 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-label="Permalink to &quot;entry&quot;">​</a></h2><p>入口起点(entry point)指示 webpack 应该使用哪个模块,来作为构建其内部依赖图的开始。</p><p>进入入口起点后,webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。</p><p>每个依赖项随即被处理,最后输出到称之为 bundles 的文件中。</p><h2 id="output" tabindex="-1">output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;output&quot;">​</a></h2><p>output 属性告诉 webpack 在哪里输出它所创建的 bundles,以及如何命名这些文件,默认值为 ./dist。基本上,整个应用程序结构,都会被编译到你指定的输出路径的文件夹中。</p><h2 id="loader" tabindex="-1">loader <a class="header-anchor" href="#loader" aria-label="Permalink to &quot;loader&quot;">​</a></h2><p>loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。</p><p>loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。</p><p>本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。</p><h2 id="手写一个loader" tabindex="-1">手写一个loader <a class="header-anchor" href="#手写一个loader" aria-label="Permalink to &quot;手写一个loader&quot;">​</a></h2><h2 id="plugin" tabindex="-1">plugin <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;plugin&quot;">​</a></h2><p>loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。</p><p>插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。</p><h2 id="手写一个插件" tabindex="-1">手写一个插件 <a class="header-anchor" href="#手写一个插件" aria-label="Permalink to &quot;手写一个插件&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  同步loader</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loaderUtils</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;loader-utils&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 利用loader-utils获取loader options里面的配置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loaderUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  source </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options.message</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 可以传递更详细的信息</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, source)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="webpack-优化" tabindex="-1">webpack 优化 <a class="header-anchor" href="#webpack-优化" aria-label="Permalink to &quot;webpack 优化&quot;">​</a></h2><h2 id="webpack-打包原理" tabindex="-1">webpack 打包原理 <a class="header-anchor" href="#webpack-打包原理" aria-label="Permalink to &quot;webpack 打包原理&quot;">​</a></h2><h2 id="构建原理" tabindex="-1">构建原理 <a class="header-anchor" href="#构建原理" aria-label="Permalink to &quot;构建原理&quot;">​</a></h2>`,24)]))}const b=s(n,[["render",l]]);export{c as __pageData,b as default};
