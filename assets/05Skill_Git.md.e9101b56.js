import{_ as s,o as n,c as a,d as l}from"./app.1aa9c4fb.js";const A=JSON.parse('{"title":"Git\u547D\u4EE4\u6C47\u603B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4"},{"level":2,"title":"\u9AD8\u7EA7\u547D\u4EE4","slug":"\u9AD8\u7EA7\u547D\u4EE4"}],"relativePath":"05Skill/Git.md","lastUpdated":1657612658000}'),p={name:"05Skill/Git.md"},e=l(`<h1 id="git\u547D\u4EE4\u6C47\u603B" tabindex="-1">Git\u547D\u4EE4\u6C47\u603B <a class="header-anchor" href="#git\u547D\u4EE4\u6C47\u603B" aria-hidden="true">#</a></h1><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u514B\u9686\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6587\u4EF6\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5168\u90E8\u6682\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u586B\u5199\u63D0\u4EA4\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commit_message</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u63A8\u9001\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5386\u53F2\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u8BE6\u7EC6\u5386\u53F2</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -p</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6240\u6709\u5386\u53F2\u8BB0\u5F55\uFF08\u5305\u542B\u56DE\u9000\u7684\u8BB0\u5F55\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5176\u4ED6\u5206\u652F\u7684 reflog</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u7B80\u8981\u7EDF\u8BA1</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --stat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5177\u4F53\u7684 commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git show</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u770B\u4EFB\u610F\u4E00\u4E2A commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git show 5e68b0d8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6307\u5B9A commit \u4E2D\u7684\u6307\u5B9A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git show 5e68b0d8 shopping\\ list.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u770B\u672A\u63D0\u4EA4\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6BD4\u5BF9\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u6761\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff --staged</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6BD4\u5BF9\u5DE5\u4F5C\u76EE\u5F55\u548C\u4E0A\u4E00\u6761\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff HEAD</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA feature1 \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch feature1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5207\u6362\u5230 feature1 \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout feature1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u5E76\u5207\u6362\u5230 feature1 \u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b feature1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u5206\u652F\uFF08\u672A\u5408\u5E76\u5230 master \u4E0A\u7684\u5206\u652F\u4F1A\u5931\u8D25\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d feature1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u5206\u652F\uFF08\u5F3A\u5236\u5220\u9664\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -D feature1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5408\u5E76\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge feature1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u653E\u5F03\u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge --abort</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><blockquote><p>\u8FDC\u7A0B\u4ED3\u5E93\u7684 HEAD \u662F\u6C38\u8FDC\u6307\u5411\u5B83\u7684\u9ED8\u8BA4\u5206\u652F\uFF08\u5373 master\uFF0C\u5982\u679C\u4E0D\u4FEE\u6539\u5B83\u7684\u540D\u79F0\u7684\u8BDD\uFF09</p></blockquote><h2 id="\u9AD8\u7EA7\u547D\u4EE4" tabindex="-1">\u9AD8\u7EA7\u547D\u4EE4 <a class="header-anchor" href="#\u9AD8\u7EA7\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># rebase</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout branch1</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u590D\u9519\u8BEF\u7684\u63D0\u4EA4\u8BB0\u5F55\u6587\u6848\uFF08\u9488\u5BF9\u6700\u8FD1\u7684\u4E00\u6761\u8BB0\u5F55\u5199\u9519\u7684\u60C5\u51B5\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">commit --amend</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u590D\u51E0\u4E2A\u7248\u672C\u4EE5\u524D\u7684\u9519\u8BEF\u63D0\u4EA4\u4FE1\u606F\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase -i HEAD^^</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u56DE\u6EDA\u524D\u4E00\u6761commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD^</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard \u76EE\u6807commit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u64A4\u9500\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase -i HEAD^^</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u64A4\u9500\u591A\u4E2A\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase --onto HEAD^^ HEAD^ branch1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6682\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u53D6\u51FA\u6682\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash pop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6682\u5B58\u5305\u542B\u672A\u8FFD\u8E2A\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash -u</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><blockquote><p>\u5728 Git \u4E2D\uFF0C\u6709\u4E24\u4E2A\u300C\u504F\u79FB\u7B26\u53F7\u300D\uFF1A ^ \u548C ~\u3002 ^ \u7684\u7528\u6CD5\uFF1A\u5728 commit \u7684\u540E\u9762\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A ^ \u53F7\uFF0C\u53EF\u4EE5\u628A commit \u5F80\u56DE\u504F\u79FB\uFF0C\u504F\u79FB\u7684\u6570\u91CF\u662F ^ \u7684\u6570\u91CF\u3002\u4F8B\u5982\uFF1Amaster^ \u8868\u793A master \u6307\u5411\u7684 commit \u4E4B\u524D\u7684\u90A3\u4E2A commit\uFF1B HEAD^^ \u8868\u793A HEAD \u6240\u6307\u5411\u7684 commit \u5F80\u524D\u6570\u4E24\u4E2A commit\u3002 ~ \u7684\u7528\u6CD5\uFF1A\u5728 commit \u7684\u540E\u9762\u52A0\u4E0A ~ \u53F7\u548C\u4E00\u4E2A\u6570\uFF0C\u53EF\u4EE5\u628A commit \u5F80\u56DE\u504F\u79FB\uFF0C\u504F\u79FB\u7684\u6570\u91CF\u662F ~ \u53F7\u540E\u9762\u7684\u6570\u3002\u4F8B\u5982\uFF1AHEAD~5 \u8868\u793A HEAD \u6307\u5411\u7684 commit\u5F80\u524D\u6570 5 \u4E2A commit\u3002</p></blockquote>`,7),c=[e];function i(r,t,o,b,m,u){return n(),a("div",null,c)}var C=s(p,[["render",i]]);export{A as __pageData,C as default};
