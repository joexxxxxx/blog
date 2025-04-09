import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.cqXd1Ucj.js";const t="/blog/images/img/1546010431.png",e="/blog/images/img/1546011014.png",p="/blog/images/img/1546011061.png",h="/blog/images/img/1546012885.png",u=JSON.parse('{"title":"你可能不知道 console","description":"","frontmatter":{},"headers":[],"relativePath":"web/console.md","filePath":"web/console.md"}'),k={name:"web/console.md"};function o(E,s,r,c,d,g){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="你可能不知道-console" tabindex="-1">你可能不知道 console <a class="header-anchor" href="#你可能不知道-console" aria-label="Permalink to &quot;你可能不知道 console&quot;">​</a></h1><p><em>原文链接 <a href="https://segmentfault.com/a/1190000017333162?utm_source=tag-newest" target="_blank" rel="noreferrer">被忽略的 console.log</a></em><em>原文链接 <a href="https://www.cnblogs.com/liyunhua/p/4529079.html" target="_blank" rel="noreferrer">你可能不知道 console 强大</a></em></p><h3 id="console-log" tabindex="-1">console.log() <a class="header-anchor" href="#console-log" aria-label="Permalink to &quot;console.log()&quot;">​</a></h3><p>console.log()的几种使用方法，大多数人只知道 console.log（obj）这一种，console.log（object，otherObject，string）、console.log（msg，values）这两种方式</p><p>常见的占位符是％o（这是一个字母 o，而不是零），它接受一个对象，％s 接受一个字符串，％d 是一个十进制或整数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I like %s but I do not like %s.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Skittles&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 I like Skittles but I do not like pus.</span></span></code></pre></div><p>另一个有趣的是％c， 它实际上是 CSS 值的占位符。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(&#39;I am a %cbutton&#39;, &#39;color: white; background-color: orange; padding: 2px 5px; border-radius: 2px&#39;);</span></span></code></pre></div><p>输出结果</p><p><img src="`+t+'" alt="avatar"></p><h3 id="console-dir" tabindex="-1">console.dir() <a class="header-anchor" href="#console-dir" aria-label="Permalink to &quot;console.dir()&quot;">​</a></h3><p>这是一种更加客观的方式来查看元素。 有时候这就是你真正想要的东西，更像是检查元素。</p><p>普通 console.log(element) <img src="'+e+'" alt="avatar"></p><p>console.dir(element) <img src="'+p+`" alt="avatar"></p><h3 id="console-warn" tabindex="-1">console.warn() <a class="header-anchor" href="#console-warn" aria-label="Permalink to &quot;console.warn()&quot;">​</a></h3><p>可能是最明显的直接替换 log()，你可以用完全相同的方式使用 console.warn()。 唯一真正的区别是输出有点黄。 具体来说，输出处于警告级别而不是信息级别，因此浏览器将稍微区别对待它。 这具有使其在杂乱输出中更明显的效果。</p><p>但是，有一个更大的优势。 因为输出是警告而不是信息，所以您可以过滤掉所有 console.log 并仅保留 console.warn。 这对于偶尔会在浏览器中输出大量无用废话的偶尔繁琐的应用程序尤其有用。 清除噪音可以让您更轻松地看到输出。</p><h3 id="console-table" tabindex="-1">console.table() <a class="header-anchor" href="#console-table" aria-label="Permalink to &quot;console.table()&quot;">​</a></h3><p>令人惊讶的是，这并不是更为人所知，但是 console.table()函数旨在以比抛出原始对象数组更简洁的方式显示表格数据。 例如，这是一个数据列表。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transactions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7cb1-e041b126-f3b8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    seller: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WAL0412&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    buyer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WAL3023&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    price: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">203450</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1539688433</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1d4c-31f8f14b-1571&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    seller: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WAL0452&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    buyer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WAL3023&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    price: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">348299</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1539688433</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b12c-b3adf58f-809f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    seller: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WAL0012&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    buyer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WAL2025&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    price: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">59240</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1539688433</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tabl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(transactions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(transactions, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;price&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span></code></pre></div><p>输出结果 <img src="`+h+'" alt="avatar"></p>',21)]))}const F=i(k,[["render",o]]);export{u as __pageData,F as default};
