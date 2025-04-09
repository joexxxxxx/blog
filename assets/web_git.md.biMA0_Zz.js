import{_ as a,c as i,o as n,ag as p}from"./chunks/framework.cqXd1Ucj.js";const d=JSON.parse('{"title":"git","description":"","frontmatter":{},"headers":[],"relativePath":"web/git.md","filePath":"web/git.md"}'),t={name:"web/git.md"};function l(h,s,e,k,r,E){return n(),i("div",null,s[0]||(s[0]=[p(`<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h1><h3 id="git-基本操作命令" tabindex="-1">Git 基本操作命令 <a class="header-anchor" href="#git-基本操作命令" aria-label="Permalink to &quot;Git 基本操作命令&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global user.name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xuhaiyan&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global user.email </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;haiyan.xu.vip@gmail.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生成秘钥：ssh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">keygen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t rsa </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> “haiyan.xu.vip@gmail.com”</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">查看秘钥： cat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ssh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id_rsa.pub</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">切换分支：git checkout 分支名称  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">移除文件：git rm 文件名  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">提交到本地仓库：git commit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;描述&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">提交到远程仓库：git push orgin 分支名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">合并代码：git merge 分支名称 git push origin 分支名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">指定回到某一个版本：git rest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hard 版本号</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 删除本地分支</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: git push origin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 分支名</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 删除远程分支</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d 分支名</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用远程分支覆盖本地分支： git reset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hard origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(分支名)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 创建本地分支： git checkout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(分支名)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch test   			</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 新建分支（test）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d test 			</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除分支（test）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> test			</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 强制删除分支（test）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git checkout test			</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 切换到test分支（test）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch				    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查看本地分支</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r 				</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查看服务器远程分支 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a				</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查看本地和远程分支</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git branch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b develop</span></span></code></pre></div><h3 id="git-stash" tabindex="-1">Git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;Git stash&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.git stash: 现在想要切换分支，但是还不想要提交之前的工作；所以储藏修改。 将新的储藏推送到栈上，运行 git stash 或 git stash save</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.git stash list: 查看缓存列表</span></span>
<span class="line"><span>$ git stash list</span></span>
<span class="line"><span>stash@{0}: WIP on master: 049d078 added the index file</span></span>
<span class="line"><span>stash@{1}: WIP on master: c264051 Revert &quot;added file_size&quot;</span></span>
<span class="line"><span>stash@{2}: WIP on master: 21d80a5 added number to log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.git stash apply 、git stash apply index(git stash apply stash@{2})</span></span>
<span class="line"><span> 可以通过原来 stash 命令的帮助提示中的命令将你刚刚储藏的工作重新应用：git stash apply。 如果想要应用其中一个更旧的储藏，可以通过名字指定它，像这样：git stash apply stash@{2}。 如果不指定一个储藏，Git 认为指定的是最近的储藏：</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>4. git stash drop、git stash pop</span></span>
<span class="line"><span>应用选项只会尝试应用暂存的工作——在堆栈上还有它。 可以运行 git stash drop 加上将要移除的储藏的名字来移除它</span></span>
<span class="line"><span>也可以运行 git stash pop 来应用储藏然后立即从栈上扔掉它。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.git stash clear ：删除所有缓存的stash</span></span></code></pre></div><h3 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-label="Permalink to &quot;提交规范&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>feat: 一个新特性</span></span>
<span class="line"><span>fix: 修复bug</span></span>
<span class="line"><span>docs: 文档修改</span></span>
<span class="line"><span>style: 不影响代码含义的更改（空格、格式、缺少分号等）</span></span>
<span class="line"><span>refactor: 代码重构</span></span>
<span class="line"><span>perf: 优化性能</span></span>
<span class="line"><span>test: 测试用例修改</span></span>
<span class="line"><span>chore: 对构建过程或辅助工具和库的更改，例如文档生成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;feat&#39;,</span></span>
<span class="line"><span>&#39;fix&#39;,</span></span>
<span class="line"><span>&#39;perf&#39;,</span></span>
<span class="line"><span>&#39;style&#39;,</span></span>
<span class="line"><span>&#39;docs&#39;,</span></span>
<span class="line"><span>&#39;test&#39;,</span></span>
<span class="line"><span>&#39;refactor&#39;,</span></span>
<span class="line"><span>&#39;build&#39;,</span></span>
<span class="line"><span>&#39;ci&#39;,</span></span>
<span class="line"><span>&#39;chore&#39;,</span></span>
<span class="line"><span>&#39;revert&#39;,</span></span>
<span class="line"><span>&#39;wip&#39;,</span></span>
<span class="line"><span>&#39;workflow&#39;,</span></span>
<span class="line"><span>&#39;types&#39;,</span></span>
<span class="line"><span>&#39;release&#39;,</span></span></code></pre></div>`,7)]))}const c=a(t,[["render",l]]);export{d as __pageData,c as default};
