(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{369:function(e,v,l){"use strict";l.r(v);var t=l(25),_=Object(t.a)({},(function(){var e=this,v=e.$createElement,l=e._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"参考资源"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#参考资源"}},[e._v("#")]),e._v(" 参考资源")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://developer.chrome.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://blog.csdn.net/qianyu6200430/article/details/107679089",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools 面板全攻略"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://juejin.cn/post/6844904162602254350",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools中的这些骚操作"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://www.cnblogs.com/onesea/p/13453828.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome开发者工具详解-Network面板"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://blog.csdn.net/qq_38128179/article/details/104491149",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome Devtool — Performance"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://www.cnblogs.com/caixw/p/referrer-policy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Referrer Policy"),l("OutboundLink")],1)])]),e._v(" "),l("h2",{attrs:{id:"流程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[e._v("#")]),e._v(" 流程")]),e._v(" "),l("ol",[l("li",[e._v("Chrome Devtools 的用处")]),e._v(" "),l("li",[e._v("常用命令及打开方式(只讲mac)")]),e._v(" "),l("li",[e._v("基础结构及面板介绍")]),e._v(" "),l("li",[e._v("主要面板介绍...(lighthouse面板可以打开plutus)")]),e._v(" "),l("li",[e._v("其他面板介绍")])]),e._v(" "),l("h2",{attrs:{id:"前言"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),l("ul",[l("li",[e._v("这次分享的内容比较基础,适用于对chrome devtools不太了解的,但是也有很多实用但是又没有用过的技巧,比较适用于专业前端")])]),e._v(" "),l("h2",{attrs:{id:"chrome-devtools-的用处"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#chrome-devtools-的用处"}},[e._v("#")]),e._v(" Chrome Devtools 的用处")]),e._v(" "),l("ul",[l("li",[e._v("只要是做Web开发的，就离不开浏览器的调试工具，作为开发常用并且好用的浏览器有Chrome,firefox。今天我们要讲的就是Chrome浏览器的DevTools.")]),e._v(" "),l("li",[e._v("前端开发：开发预览、远程调试、性能调优、bug跟踪、断点调试等")]),e._v(" "),l("li",[e._v("后端开发：网络抓包、开发调试Response")]),e._v(" "),l("li",[e._v("测试：服务端API数据是否正确、审查页面元素样式及布局、页面加载性能分析、自动化测试")]),e._v(" "),l("li",[e._v("其他：安装扩展插件，如AdBlock、Gliffy、Axure等")])]),e._v(" "),l("h2",{attrs:{id:"打开方式及常用命令-只讲mac"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#打开方式及常用命令-只讲mac"}},[e._v("#")]),e._v(" 打开方式及常用命令(只讲mac)")]),e._v(" "),l("h3",{attrs:{id:"打开devtools方式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#打开devtools方式"}},[e._v("#")]),e._v(" 打开Devtools方式")]),e._v(" "),l("ul",[l("li",[e._v("菜单>更多工具>开发者工具")]),e._v(" "),l("li",[e._v("打开console面板: Command+Option+J")]),e._v(" "),l("li",[e._v("打开Elements面板: Command+Option+C")]),e._v(" "),l("li",[e._v("打开上一次打开过的面板: Command+Option+I")])]),e._v(" "),l("h3",{attrs:{id:"常用指令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[e._v("#")]),e._v(" 常用指令")]),e._v(" "),l("ul",[l("li",[e._v("Command Menu(命令菜单): 可以使用快捷命令打开面板,访问文件")]),e._v(" "),l("li",[e._v('在Devtools打开的情况下，键入Command + p打开命令菜单，然后开始在栏中键入要查找的命令或输入"?"号以查看所有可用命令\n'),l("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/10/16db4e8a7474c77f~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"命令菜单"}})])]),e._v(" "),l("h4",{attrs:{id:"命令菜单基础命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#命令菜单基础命令"}},[e._v("#")]),e._v(" 命令菜单基础命令")]),e._v(" "),l("ul",[l("li",[e._v("...: 打开文件")]),e._v(" "),l("li",[e._v(":: 前往文件的某个位置")]),e._v(" "),l("li",[e._v("@: 前往标识符（函数，类名等）")]),e._v(" "),l("li",[e._v("!: 运行脚本文件")]),e._v(" "),l("li",[l("blockquote",[l("p",[e._v(": 运行某个命令")])])])]),e._v(" "),l("h4",{attrs:{id:"示例-在命令菜单中输入相应的命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例-在命令菜单中输入相应的命令"}},[e._v("#")]),e._v(" 示例(在命令菜单中输入相应的命令)")]),e._v(" "),l("ul",[l("li",[e._v("修改Devtools主题颜色:\n"),l("blockquote",[l("p",[e._v("dark theme    (主题改为黑色)\nlight theme   (主题改为白色)")])])]),e._v(" "),l("li",[e._v("截屏:\n"),l("blockquote",[l("p",[e._v("screenshot     (打开截图工具,可任意选择截屏方式)")])])])]),e._v(" "),l("h2",{attrs:{id:"基础结构及面板介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基础结构及面板介绍"}},[e._v("#")]),e._v(" 基础结构及面板介绍")]),e._v(" "),l("ul",[l("li",[e._v("箭头: 快速选中要调试的元素")]),e._v(" "),l("li",[e._v("手机: 选中后即可变为移动设备模式,调试移动端")]),e._v(" "),l("li",[e._v("主要面板,会介绍常用的功能\n"),l("ul",[l("li",[e._v("Elements 面板")]),e._v(" "),l("li",[e._v("Console 面板")]),e._v(" "),l("li",[e._v("Source 面板")]),e._v(" "),l("li",[e._v("Network 面板")]),e._v(" "),l("li",[e._v("Performance 面板")]),e._v(" "),l("li",[e._v("Application 面板")])])])]),e._v(" "),l("h2",{attrs:{id:"elements面板"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#elements面板"}},[e._v("#")]),e._v(" Elements面板")]),e._v(" "),l("ul",[l("li",[e._v("styles:\n"),l("ul",[l("li",[e._v("样式调试")]),e._v(" "),l("li",[e._v("伪类的调试")]),e._v(" "),l("li",[e._v("flex调试的快捷方式以及展示技巧")])])]),e._v(" "),l("li",[e._v("computd:\n"),l("ul",[l("li",[e._v("盒模型")]),e._v(" "),l("li",[e._v("样式总览")])])]),e._v(" "),l("li",[e._v("Layut:\n"),l("ul",[l("li",[e._v("grid: grid布局的元素")]),e._v(" "),l("li",[e._v("flex: flex布局的元素")])])]),e._v(" "),l("li",[e._v("Event listeners:\n"),l("ul",[l("li",[e._v("绑定在元素上的监听事件查看")]),e._v(" "),l("li",[e._v("remove: 可以手动去掉这些监听事件")])])]),e._v(" "),l("li",[e._v("DOM Breakpoints\n"),l("ul",[l("li",[e._v("dom断点(放在后面和js断点一起着重讲一下)")])])]),e._v(" "),l("li",[e._v("Propertise\n"),l("ul",[l("li",[e._v("当前node节点的属性")])])]),e._v(" "),l("li",[e._v("Accessibiity\n"),l("ul",[l("li",[e._v("用来支持h5的视听障碍功能,这个不太常用")])])])]),e._v(" "),l("h2",{attrs:{id:"console-面板"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#console-面板"}},[e._v("#")]),e._v(" Console 面板")]),e._v(" "),l("h3",{attrs:{id:"基础功能-打开plutus项目"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基础功能-打开plutus项目"}},[e._v("#")]),e._v(" 基础功能(打开plutus项目)")]),e._v(" "),l("ul",[l("li",[e._v("眼睛图标:实时监控变量")]),e._v(" "),l("li",[e._v("filter功能")]),e._v(" "),l("li",[e._v("Log级别筛选")])]),e._v(" "),l("h3",{attrs:{id:"执行语句"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#执行语句"}},[e._v("#")]),e._v(" 执行语句")]),e._v(" "),l("ul",[l("li",[e._v("执行js语句\n"),l("ul",[l("li",[e._v("keys(), values(): 跟 ES6 对象扩展方法， Object.keys() 和 Object.values() 相同")])])]),e._v(" "),l("li",[e._v("选择器:\n"),l("ul",[l("li",[e._v("$_: 可以记录上次计算的结果，直接用于代码执行")]),e._v(" "),l("li",[e._v("$0,$1...$4: 代表最近 5 个审查元素选中过的 DOM 节点")]),e._v(" "),l("li",[e._v("$和$$: $(selector)是原生 document.querySelector() 的封装。$$(selector)返回的是所有满足选择条件的元素的一个集合，是 document.querySelectorAll() 的封装")])])]),e._v(" "),l("li",[e._v("console.log(error warn group time table):\n"),l("ul",[l("li",[e._v("console.group(), groupEnd(): 分组输出信息，可以用鼠标折叠/展开")]),e._v(" "),l("li",[e._v("console.time(), timeEnd(),time 和 timeEnd 一般放在一起用，传入一个参数用来标识起始位置用于统计时间:"),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("console.time('t')\nArray(900000).fill({}).forEach((v, index) => v.index = index)\nconsole.timeEnd('t')\n")])]),e._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[e._v("1")]),l("br"),l("span",{staticClass:"line-number"},[e._v("2")]),l("br"),l("span",{staticClass:"line-number"},[e._v("3")]),l("br")])])]),e._v(" "),l("li",[e._v("console.table()方法可以将复合类型的数据转为表格显示"),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("var arr = [\n{ name: '梅西', qq: 10 },\n{ name: 'C 罗', qq: 7 },\n{ name: '内马尔', qq: 11 },\n]\nconsole.table(arr)\n")])]),e._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[e._v("1")]),l("br"),l("span",{staticClass:"line-number"},[e._v("2")]),l("br"),l("span",{staticClass:"line-number"},[e._v("3")]),l("br"),l("span",{staticClass:"line-number"},[e._v("4")]),l("br"),l("span",{staticClass:"line-number"},[e._v("5")]),l("br"),l("span",{staticClass:"line-number"},[e._v("6")]),l("br")])])])])])]),e._v(" "),l("h2",{attrs:{id:"source-面板"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#source-面板"}},[e._v("#")]),e._v(" Source 面板")]),e._v(" "),l("ul",[l("li",[e._v("page: 页面资源文件目录树")]),e._v(" "),l("li",[e._v("中间: 代码预览区域")]),e._v(" "),l("li",[e._v("右侧:\n"),l("ul",[l("li",[e._v("Debug工具栏图标（从左到右功能依次为：暂停（继续）/ 单步跳过 / 进入函数 / 跳出函数 / 单步执行 / 激活（关闭）所有断点 / 代码执行异常处自动停止")]),e._v(" "),l("li",[e._v("Watch：监测表达式，可以添加多个表达式，在调试运行时，会监测该表达式的结果")]),e._v(" "),l("li",[e._v("Breakpoints: 当前断点")]),e._v(" "),l("li",[e._v("Scope: 作用域")]),e._v(" "),l("li",[e._v("Call Stack：函数调用堆栈，展示了断点处代码被调用的详细路径")]),e._v(" "),l("li",[e._v("XHR/fetch breakpoints: 当页面有请求时触发该断点（多用于线上页面）")]),e._v(" "),l("li",[e._v("DOM Breakpoints: DOM断点")]),e._v(" "),l("li",[e._v("Global Listener:\n"),l("ul",[l("li",[e._v("全局监听，在这里可以看到全局有哪些事件监听被注册绑定了什么函数，还可移除（Remove）对应的全局事件监听")])])]),e._v(" "),l("li",[e._v("Event Listener Breakpoints：事件断点监听，此处可以添加对事件的断点监听")]),e._v(" "),l("li",[e._v("CSP violation breakpoints\n"),l("ul",[l("li",[e._v("对可信类型（Trusted Types）的调试支持")]),e._v(" "),l("li",[e._v("可信类型（Trusted Types） API 有助于防止基于 DOM 的跨站脚本攻击（XSS)")]),e._v(" "),l("li",[e._v("在异常发生时暂停 script 运行")])])])])])]),e._v(" "),l("h2",{attrs:{id:"network-面板"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#network-面板"}},[e._v("#")]),e._v(" Network 面板")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("网络设置")]),e._v(" "),l("ul",[l("li",[e._v("Preserve log : 记录Network所有请求,即便是页面跳转,请求记录也不会消失")]),e._v(" "),l("li",[e._v("Disable cashe: 禁用缓存")]),e._v(" "),l("li",[e._v("No throtting: 节流器")]),e._v(" "),l("li",[e._v("wifi图标: 网络设置,客户端设置")]),e._v(" "),l("li",[e._v("上传/下载按钮: 上传/下载当前网络请求")])])]),e._v(" "),l("li",[l("p",[e._v("Filters: 控制Requests Table具体显示哪些内容")])]),e._v(" "),l("li",[l("p",[e._v("Overview:显示获取到资源的时间轴信息。")])]),e._v(" "),l("li",[l("p",[e._v("Requests Table:按资源获取的前后顺序显示所有获取到的资源信息，点击资源名可以查看该资源的详细信息")]),e._v(" "),l("ul",[l("li",[e._v("Name 资源名称，点击名称可以查看资源的详情情况，包括Headers、Preview、Response、Cookies、Timing。")]),e._v(" "),l("li",[e._v("Status HTTP状态码。")]),e._v(" "),l("li",[e._v("type 请求的资源MIME类型。")]),e._v(" "),l("li",[e._v("Initiator 标记请求是由哪个对象或进程发起的（请求源）。\n"),l("ul",[l("li",[e._v("Parser： 请求由Chrome的HTML解析器时发起的。")]),e._v(" "),l("li",[e._v("Redirect：请求是由HTTP页面重定向发起的。")]),e._v(" "),l("li",[e._v("Script：请求是由Script脚本发起的。")]),e._v(" "),l("li",[e._v("Other：请求是由其他进程发起的，比如用户点击一个链接跳转到另一个页面或者在地址栏输入URL地址。")])])]),e._v(" "),l("li",[e._v("Size 从服务器下载的文件和请求的资源大小。如果是从缓存中取得的资源则该列会显示(from cache)")]),e._v(" "),l("li",[e._v("Time 请求或下载的时间，从发起Request到获取到Response所用的总时间。")]),e._v(" "),l("li",[e._v("Waterfall: 分析资源在请求的生命周期内各部分时间花费信息\n"),l("ul",[l("li",[e._v("Queuing 排队的时间花费。可能由于该请求被渲染引擎认为是优先级比较低的资源（图片）、服务器不可用、超过浏览器的并发请求的最大连接数（Chrome的最大并发连接数为6）.")]),e._v(" "),l("li",[e._v("Stalled 从HTTP连接建立到请求能够被发出送出去(真正传输数据)之间的时间花费。包含用于处理代理的时间，如果有已经建立好的连接，这个时间还包括等待已建立连接被复用的时间。")]),e._v(" "),l("li",[e._v("Proxy Negotiation 与代理服务器连接的时间花费。")]),e._v(" "),l("li",[e._v("DNS Lookup 执行DNS查询的时间。网页上每一个新的域名都要经过一个DNS查询。第二次访问浏览器有缓存的话，则这个时间为0。")]),e._v(" "),l("li",[e._v("Initial Connection / Connecting 建立连接的时间花费，包含了TCP握手及重试时间。")]),e._v(" "),l("li",[e._v("SSL 完成SSL握手的时间花费。")]),e._v(" "),l("li",[e._v("Request sent 发起请求的时间。")]),e._v(" "),l("li",[e._v("Waiting (Time to first byte (TTFB)) 是最初的网络请求被发起到从服务器接收到第一个字节这段时间，它包含了TCP连接时间，发送HTTP请求时间和获得响应消息第一个字节的时间。")]),e._v(" "),l("li",[e._v("Content Download 获取Response响应数据的时间花费。")])])])])]),e._v(" "),l("li",[l("p",[e._v("Summary:显示总的请求数、数据传输量、加载时间信息。")])])]),e._v(" "),l("h2",{attrs:{id:"performance-面板"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#performance-面板"}},[e._v("#")]),e._v(" Performance 面板")]),e._v(" "),l("ul",[l("li",[e._v("运行时性能表现（解析 JS、计算样式、重绘等）")]),e._v(" "),l("li",[e._v("网页性能监控,跟性能挂钩的几个方面:\n"),l("ul",[l("li",[e._v("网络链路")]),e._v(" "),l("li",[e._v("服务器资源")]),e._v(" "),l("li",[e._v("前端资源渲染效率")]),e._v(" "),l("li",[e._v("用户端硬件")])])]),e._v(" "),l("li",[e._v("页面功能介绍\n"),l("img",{attrs:{src:"/performance.png",alt:"performance.png"}})]),e._v(" "),l("li",[e._v("浏览器渲染过程\n"),l("img",{attrs:{src:"/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93.webp",alt:"浏览器渲染步骤.png"}})])]),e._v(" "),l("h2",{attrs:{id:"其余面板"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#其余面板"}},[e._v("#")]),e._v(" 其余面板")]),e._v(" "),l("ul",[l("li",[e._v("Application 面板\n"),l("ul",[l("li",[e._v("Local storage")]),e._v(" "),l("li",[e._v("Cookies")]),e._v(" "),l("li",[e._v("Session storage")])])]),e._v(" "),l("li",[e._v("Memory面板 : 内存分配查看,可以产生快照来查看当前的内存分配")]),e._v(" "),l("li",[e._v("Security面板: 检测当前页面的安全性\n"),l("ul",[l("li",[e._v("该面板可以区分两种类型的不安全的页面：")]),e._v(" "),l("li",[e._v("如果被请求的页面通过 HTTP 提供服务，那么这个主源就会被标记为不安全。")]),e._v(" "),l("li",[e._v("如果被请求的页面是通过 HTTPS 获取的，但这个页面接着通过 HTTP 继续从其他来源检索内容，那么这个页面仍然被标记为不安全。这就是所谓的混合内容页面,混合内容页面只是部分受到保护,因为 HTTP 内容(非加密的内容通信使用明文)可能会被窃听,容易受到中间人攻击。如 163，虽然证书是有效的，但是页面有一部分 http 资源")])])]),e._v(" "),l("li",[e._v("lighthouse面板: 页面审核工具\n"),l("ul",[l("li",[e._v("目的:它识别和修复影响你网站性能、可访问性和用户体验的常见问题。")]),e._v(" "),l("li",[e._v("点击Generate report")])])]),e._v(" "),l("li",[e._v("Recorder 面板: 记录操作过程")]),e._v(" "),l("li",[e._v("coverage面板: 覆盖率面板\n"),l("ul",[l("li",[e._v("打开调试面板，通过命令菜单输入 Show Coverage 调出面板,点击 reload 按钮开始检测")]),e._v(" "),l("li",[e._v("点击相应文件即可查看具体的覆盖情况（蓝色的为用到的代码，红色表示没有用到的代码）")])])])])])}),[],!1,null,null,null);v.default=_.exports}}]);