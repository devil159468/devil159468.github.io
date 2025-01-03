import{_ as s,o as n,c as a,d as l}from"./app.1aa9c4fb.js";const b=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS \u89C4\u8303","slug":"css-\u89C4\u8303"},{"level":3,"title":"\u5C5E\u6027\u4E66\u5199\u987A\u5E8F","slug":"\u5C5E\u6027\u4E66\u5199\u987A\u5E8F"},{"level":3,"title":"\u54CD\u5E94\u5F0F","slug":"\u54CD\u5E94\u5F0F"},{"level":3,"title":"\u7F29\u8FDB","slug":"\u7F29\u8FDB"},{"level":3,"title":"\u884C\u957F\u5EA6","slug":"\u884C\u957F\u5EA6"},{"level":3,"title":"\u9009\u62E9\u5668","slug":"\u9009\u62E9\u5668"},{"level":2,"title":"\u9009\u62E9\u5668\u7684\u6743\u91CD\u548C\u4F18\u5148\u7EA7","slug":"\u9009\u62E9\u5668\u7684\u6743\u91CD\u548C\u4F18\u5148\u7EA7"},{"level":2,"title":"\u76D2\u6A21\u578B","slug":"\u76D2\u6A21\u578B"},{"level":2,"title":"\u5782\u76F4\u8FB9\u8DDD\u584C\u9677","slug":"\u5782\u76F4\u8FB9\u8DDD\u584C\u9677"},{"level":3,"title":"BFC(Block Formatting Context)","slug":"bfc-block-formatting-context"},{"level":2,"title":"CSS Reset","slug":"css-reset"},{"level":2,"title":"CSS\u8FC7\u5EA6","slug":"css\u8FC7\u5EA6"},{"level":2,"title":"CSS\u52A8\u753B","slug":"css\u52A8\u753B"},{"level":3,"title":"@keyframes\u7684\u4E24\u79CD\u65B9\u5F0F","slug":"keyframes\u7684\u4E24\u79CD\u65B9\u5F0F"},{"level":3,"title":"animation\u76F8\u5173\u5C5E\u6027","slug":"animation\u76F8\u5173\u5C5E\u6027"},{"level":2,"title":"CSS\u7279\u6B8A\u6548\u679C\u5E93(\u5E7D\u7075\u6309\u94AE\u53CA\u7279\u6548\u7C7B\u6574\u5408)","slug":"css\u7279\u6B8A\u6548\u679C\u5E93-\u5E7D\u7075\u6309\u94AE\u53CA\u7279\u6548\u7C7B\u6574\u5408"}],"relativePath":"01FE/CSS.md","lastUpdated":1664535963000}'),e={name:"01FE/CSS.md"},p=l(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>\u57FA\u7840\u77E5\u8BC6\u4E00\u89C8</summary><ul><li>\u9009\u62E9\u5668\u7684\u6743\u91CD\u548C\u4F18\u5148\u7EA7</li><li>\u76D2\u6A21\u578B <ul><li>\u76D2\u5B50\u5927\u5C0F\u8BA1\u7B97</li><li>margin \u7684\u91CD\u53E0\u8BA1\u7B97</li></ul></li><li>\u6D6E\u52A8float <ul><li>\u6D6E\u52A8\u5E03\u5C40\u6982\u5FF5</li><li>\u6E05\u7406\u6D6E\u52A8</li></ul></li><li>\u5B9A\u4F4Dposition <ul><li>\u6587\u6863\u6D41\u6982\u5FF5</li><li>\u5B9A\u4F4D\u5206\u7C7B</li><li>fixed \u5B9A\u4F4D\u7279\u70B9</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u8BA1\u7B97\u65B9\u5F0F</li></ul></li><li>flex\u5E03\u5C40</li><li>\u5982\u4F55\u5B9E\u73B0\u5C45\u4E2D\u5BF9\u9F50\uFF1F</li><li>\u7406\u89E3\u8BED\u4E49\u5316</li><li>CSS3 \u52A8\u753B</li><li>\u91CD\u7ED8\u548C\u56DE\u6D41</li></ul></details><h2 id="css-\u89C4\u8303" tabindex="-1">CSS \u89C4\u8303 <a class="header-anchor" href="#css-\u89C4\u8303" aria-hidden="true">#</a></h2><p><a href="https://github.com/ecomfe/spec/blob/master/css-style-guide.md#user-content-32-%E5%B1%9E%E6%80%A7%E7%BC%A9%E5%86%99" target="_blank" rel="noopener noreferrer">CSS\u89C4\u8303\u53C2\u8003</a></p><h3 id="\u5C5E\u6027\u4E66\u5199\u987A\u5E8F" tabindex="-1">\u5C5E\u6027\u4E66\u5199\u987A\u5E8F <a class="header-anchor" href="#\u5C5E\u6027\u4E66\u5199\u987A\u5E8F" aria-hidden="true">#</a></h3><ul><li>Formatting Model \u76F8\u5173\u5C5E\u6027\u5305\u62EC\uFF1Aposition / top / right / bottom / left / float / display / overflow \u7B49</li><li>Box Model \u76F8\u5173\u5C5E\u6027\u5305\u62EC\uFF1Aborder / margin / padding / width / height \u7B49</li><li>Typographic \u76F8\u5173\u5C5E\u6027\u5305\u62EC\uFF1Afont / line-height / text-align / word-wrap \u7B49</li><li>Visual \u76F8\u5173\u5C5E\u6027\u5305\u62EC\uFF1Abackground / color / transition / list-style \u7B49</li></ul><div class="language-css line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">sidebar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* formatting model: positioning schemes / offsets / z-indexes / display / ...  */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow-x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* box model: sizes / margins / paddings / borders / ...  */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ddd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* typographic: font / aligns / text styles / ... */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* visual: colors / shadows / gradients / ... */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f5f5f5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">333</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> color </span><span style="color:#F78C6C;">1s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">-moz-transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> color </span><span style="color:#F78C6C;">1s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> color </span><span style="color:#F78C6C;">1s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u54CD\u5E94\u5F0F" tabindex="-1">\u54CD\u5E94\u5F0F <a class="header-anchor" href="#\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h3><div class="language-css line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* header styles */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* header styles */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* main styles */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* main styles */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* footer styles */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* footer styles */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u7F29\u8FDB" tabindex="-1">\u7F29\u8FDB <a class="header-anchor" href="#\u7F29\u8FDB" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u56DB\u4E2A\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB</p><p>\u9009\u62E9\u5668 \u4E0E { \u4E4B\u95F4\u5FC5\u987B\u5305\u542B\u7A7A\u683C\u3002</p><div class="language-css line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">selector</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u884C\u957F\u5EA6" tabindex="-1">\u884C\u957F\u5EA6 <a class="header-anchor" href="#\u884C\u957F\u5EA6" aria-hidden="true">#</a></h3><div class="language-css line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* \u4E0D\u540C\u5C5E\u6027\u503C\u6309\u903B\u8F91\u5206\u7EC4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">background:</span></span>
<span class="line"><span style="color:#A6ACCD;">    transparent url(aVeryVeryVeryLongUrlIsPlacedHere)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">no-repeat</span><span style="color:#A6ACCD;"> 0 0;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u53EF\u91CD\u590D\u591A\u6B21\u7684\u5C5E\u6027\uFF0C\u6BCF\u6B21\u91CD\u590D\u4E00\u884C */</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    url(aVeryVeryVeryLongUrlIsPlacedHere)</span></span>
<span class="line"><span style="color:#A6ACCD;">    url(anotherVeryVeryVeryLongUrlIsPlacedHere);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u7C7B\u4F3C\u51FD\u6570\u7684\u5C5E\u6027\u503C\u53EF\u4EE5\u6839\u636E\u51FD\u6570\u8C03\u7528\u7684\u7F29\u8FDB\u8FDB\u884C */</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: -webkit-gradient(</span></span>
<span class="line"><span style="color:#A6ACCD;">    linear</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    left bottom</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    left top</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    color-stop(0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">04</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> rgb(88</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">94</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">124)),</span></span>
<span class="line"><span style="color:#A6ACCD;">    color-stop(0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">52</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> rgb(115</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">123</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">162))</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u9009\u62E9\u5668" tabindex="-1">\u9009\u62E9\u5668 <a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a></h3><div class="language-css line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">post</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">page</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">comment</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u9009\u62E9\u5668\u7684\u6743\u91CD\u548C\u4F18\u5148\u7EA7" tabindex="-1">\u9009\u62E9\u5668\u7684\u6743\u91CD\u548C\u4F18\u5148\u7EA7 <a class="header-anchor" href="#\u9009\u62E9\u5668\u7684\u6743\u91CD\u548C\u4F18\u5148\u7EA7" aria-hidden="true">#</a></h2><ul><li>\u4EE3\u8868\u5185\u8054\u6837\u5F0F\uFF0C\u5982style=&quot;xxx&quot;\uFF0C\u6743\u503C\u4E3A 1000\uFF1B</li><li>\u4EE3\u8868 ID \u9009\u62E9\u5668\uFF0C\u5982#content\uFF0C\u6743\u503C\u4E3A 100\uFF1B</li><li>\u4EE3\u8868\u7C7B\u3001\u4F2A\u7C7B\u548C\u5C5E\u6027\u9009\u62E9\u5668\uFF0C\u5982.content\u3001:hover\u3001[attribute]\uFF0C\u6743\u503C\u4E3A 10\uFF1B</li><li>\u4EE3\u8868\u5143\u7D20\u9009\u62E9\u5668\u548C\u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u5982div\u3001p\uFF0C\u6743\u503C\u4E3A 1\u3002</li></ul><blockquote><p>\u901A\u7528\u9009\u62E9\u5668\uFF08*\uFF09\u3001\u5B50\u9009\u62E9\u5668\uFF08&gt;\uFF09\u548C\u76F8\u90BB\u540C\u80DE\u9009\u62E9\u5668\uFF08+\uFF09\u5E76\u4E0D\u5728\u8FD9\u56DB\u4E2A\u7B49\u7EA7\u4E2D\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u7684\u6743\u503C\u90FD\u4E3A 0\u3002</p></blockquote><blockquote><p>\u6743\u91CD\u503C\u5927\u7684\u9009\u62E9\u5668\u5176\u4F18\u5148\u7EA7\u4E5F\u9AD8\uFF0C\u76F8\u540C\u6743\u91CD\u7684\u4F18\u5148\u7EA7\u53C8\u9075\u5FAA\u540E\u5B9A\u4E49\u8986\u76D6\u524D\u9762\u5B9A\u4E49\u7684\u60C5\u51B5\u3002</p></blockquote><h2 id="\u76D2\u6A21\u578B" tabindex="-1">\u76D2\u6A21\u578B <a class="header-anchor" href="#\u76D2\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u901A\u7528\u76D2\u6A21\u578B\u8BBE\u7F6E</p><div class="language-css line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">border-box</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5782\u76F4\u8FB9\u8DDD\u584C\u9677" tabindex="-1">\u5782\u76F4\u8FB9\u8DDD\u584C\u9677 <a class="header-anchor" href="#\u5782\u76F4\u8FB9\u8DDD\u584C\u9677" aria-hidden="true">#</a></h2><blockquote><p>\u5782\u76F4\u8FB9\u8DDD\u584C\u9677\uFF1A\u5757\u7EA7\u5143\u7D20\u7684\u5916\u8FB9\u8DDD(margin)\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u7684\u8FB9\u8DDD\u4F1A\u91CD\u53E0</p></blockquote><h3 id="bfc-block-formatting-context" tabindex="-1">BFC(Block Formatting Context) <a class="header-anchor" href="#bfc-block-formatting-context" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u90FD\u80FD\u521B\u5EFA BFC</p><ol><li>float \u7684\u503C\u4E0D\u662F none\u3002</li><li>position \u7684\u503C\u4E0D\u662F static \u6216\u8005 relative\u3002</li><li>display \u7684\u503C\u662F inline-block\u3001table-cell\u3001flex\u3001table-caption \u6216\u8005inline-flex</li><li>overflow \u7684\u503C\u4E0D\u662F visible</li></ol><h2 id="css-reset" tabindex="-1">CSS Reset <a class="header-anchor" href="#css-reset" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Reset\u65B9\u6848</th><th style="text-align:left;">\u7B80\u4ECB</th><th>\u89E3\u91CA/\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">reset.css</td><td style="text-align:left;">CSS Tools: Reset CSS</td><td>\u65E7\u9879\u76EE</td></tr><tr><td style="text-align:left;">normalize.css</td><td style="text-align:left;">CSS Reset \u7684\u73B0\u4EE3\u66FF\u4EE3\u65B9\u6848</td><td>\u63A8\u8350(\u65B0\u9879\u76EE)</td></tr><tr><td style="text-align:left;">reseter.css</td><td style="text-align:left;">Normalize.css \u548C CSS Reset \u7684\u672A\u6765\u66FF\u4EE3\u65B9\u6848</td><td>\u63A8\u8350(\u65B0\u9879\u76EE)</td></tr></tbody></table><h2 id="css\u8FC7\u5EA6" tabindex="-1">CSS\u8FC7\u5EA6 <a class="header-anchor" href="#css\u8FC7\u5EA6" aria-hidden="true">#</a></h2><h2 id="css\u52A8\u753B" tabindex="-1">CSS\u52A8\u753B <a class="header-anchor" href="#css\u52A8\u753B" aria-hidden="true">#</a></h2><h3 id="keyframes\u7684\u4E24\u79CD\u65B9\u5F0F" tabindex="-1">@keyframes\u7684\u4E24\u79CD\u65B9\u5F0F <a class="header-anchor" href="#keyframes\u7684\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a></h3><ul><li>from\u2026to\u2026</li><li>\u6BCF\u4E2A\u9636\u6BB5\u767E\u5206\u6BD4</li></ul><h3 id="animation\u76F8\u5173\u5C5E\u6027" tabindex="-1">animation\u76F8\u5173\u5C5E\u6027 <a class="header-anchor" href="#animation\u76F8\u5173\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u5C5E\u6027\u540D\u79F0</th><th style="text-align:left;">\u89E3\u91CA</th></tr></thead><tbody><tr><td style="text-align:left;">animation-name</td><td style="text-align:left;">\u52A8\u753B\u540D\u79F0</td></tr><tr><td style="text-align:left;">animation-duration</td><td style="text-align:left;">\u52A8\u753B\u7684\u6301\u7EED\u65F6\u95F4</td></tr><tr><td style="text-align:left;">animation-timing-function</td><td style="text-align:left;">\u52A8\u753B\u7684\u8FC7\u6E21\u7C7B\u578B</td></tr><tr><td style="text-align:left;">animation-delay</td><td style="text-align:left;">\u52A8\u753B\u5EF6\u8FDF\u7684\u65F6\u95F4</td></tr><tr><td style="text-align:left;">animation-iteration-count</td><td style="text-align:left;">\u52A8\u753B\u7684\u5FAA\u73AF\u6B21\u6570</td></tr><tr><td style="text-align:left;">animation-direction</td><td style="text-align:left;">\u52A8\u753B\u5728\u5FAA\u73AF\u4E2D\u662F\u5426\u53CD\u5411\u8FD0\u52A8</td></tr><tr><td style="text-align:left;">animation-fill-mode</td><td style="text-align:left;">\u52A8\u753B\u65F6\u95F4\u4E4B\u5916\u7684\u72B6\u6001</td></tr><tr><td style="text-align:left;">animation-play-state</td><td style="text-align:left;">\u5BF9\u8C61\u52A8\u753B\u7684\u72B6\u6001</td></tr></tbody></table><h2 id="css\u7279\u6B8A\u6548\u679C\u5E93-\u5E7D\u7075\u6309\u94AE\u53CA\u7279\u6548\u7C7B\u6574\u5408" tabindex="-1">CSS\u7279\u6B8A\u6548\u679C\u5E93(\u5E7D\u7075\u6309\u94AE\u53CA\u7279\u6548\u7C7B\u6574\u5408) <a class="header-anchor" href="#css\u7279\u6B8A\u6548\u679C\u5E93-\u5E7D\u7075\u6309\u94AE\u53CA\u7279\u6548\u7C7B\u6574\u5408" aria-hidden="true">#</a></h2>`,38),t=[p];function o(r,c,i,y,C,d){return n(),a("div",null,t)}var F=s(e,[["render",o]]);export{b as __pageData,F as default};
