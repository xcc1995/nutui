import{e as s,o as a,G as n}from"./vendor.ab88405c.js";const t={class:"markdown-body"},l=[n('<h1>Switch 开关</h1><h3>介绍</h3><p>用来打开或关闭选项。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Switch);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> checked = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre><h3>禁用状态</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disable</span> /&gt;</span>\n</code></pre><h3>change事件</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref, getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">let</span> { proxy } = getCurrentInstance() <span class="hljs-keyword">as</span> any;\n    <span class="hljs-keyword">const</span> checked = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value: boolean, event: Event</span>) =&gt;</span> {\n      proxy.$toast.text(<span class="hljs-string">`触发了change事件，开关状态：<span class="hljs-subst">${value}</span>`</span>);\n    };\n    <span class="hljs-keyword">return</span> {\n      checked,\n      change\n    };\n  }\n};\n</code></pre><h3>异步控制</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;checkedAsync&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeAsync&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref, getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">let</span> { proxy } = getCurrentInstance() <span class="hljs-keyword">as</span> any;\n    <span class="hljs-keyword">const</span> checkedAsync = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> changeAsync = <span class="hljs-function">(<span class="hljs-params">value: boolean, event: Event</span>) =&gt;</span> {\n      proxy.$toast.text(<span class="hljs-string">`2秒后异步触发 <span class="hljs-subst">${value}</span>`</span>);\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        checkedAsync.value = value;\n      }, <span class="hljs-number">2000</span>);\n    };\n    \n    <span class="hljs-keyword">return</span> {\n      checkedAsync,\n      changeAsync\n    };\n  }\n};\n</code></pre><h3>自定义颜色</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;switchChange&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;blue&quot;</span> /&gt;</span>\n</code></pre><h3>支持文字</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;switchChange&quot;</span> <span class="hljs-attr">active-text</span>=<span class="hljs-string">&quot;开&quot;</span> <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">&quot;关&quot;</span> /&gt;</span>\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>开关状态</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disable</td><td>禁用状态</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>active-color</td><td>打开时的背景颜色</td><td>String</td><td><code>#fa2c19</code></td></tr><tr><td>inactive-color</td><td>关闭时的背景颜色</td><td>String</td><td><code>#ebebeb</code></td></tr><tr><td>active-text</td><td>打开时文字描述</td><td>String</td><td>-</td></tr><tr><td>inactive-text</td><td>关闭时文字描述</td><td>String</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换开关时触发</td><td>(value: boolean,event: Event)</td></tr></tbody></table>',26)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",t,l)))};export{p as default};