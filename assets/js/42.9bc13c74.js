(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{402:function(s,a,t){"use strict";t.r(a);var _=t(25),r=Object(_.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1-小程序与普通网页的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序与普通网页的区别"}},[s._v("#")]),s._v(" 1.小程序与普通网页的区别")]),s._v(" "),t("ul",[t("li",[s._v("1.网页开发渲染现成和脚本线程是互斥的，小程序是分别运行在不同的线程中")]),s._v(" "),t("li",[s._v("2.小程序的逻辑层运行在JSCore中，没有一个完整的浏览器对象，因此缺少相关DOM API和BOM API")]),s._v(" "),t("li",[s._v("3.网页开发者面对的是各种浏览器，小程序需要面对操作系统，IOS和Android,以及小程序开发者工具")])]),s._v(" "),t("h3",{attrs:{id:"_1-小程序代码构成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序代码构成"}},[s._v("#")]),s._v(" 1.小程序代码构成")]),s._v(" "),t("p",[s._v("1.json 后缀的 JSON 配置文件\n2.wxml 后缀的 WXML 模板文件\n3.wxss 后缀的 WXSS 样式文件\n4.js 后缀的 JS 脚本逻辑文件")]),s._v(" "),t("h3",{attrs:{id:"_2-json配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-json配置"}},[s._v("#")]),s._v(" 2.JSON配置")]),s._v(" "),t("h4",{attrs:{id:"_1-小程序配置-app-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序配置-app-json"}},[s._v("#")]),s._v(" 1.小程序配置 app.json")]),s._v(" "),t("p",[s._v("app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等\n1.pages字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前你的小程序页面定义在哪个目录。\n2.window字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。")]),s._v(" "),t("h4",{attrs:{id:"_2-工具配置-project-config-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-工具配置-project-config-json"}},[s._v("#")]),s._v(" 2.工具配置 project.config.json")]),s._v(" "),t("p",[s._v("小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，你在工具上做的任何配置都会写入到这个文件，当你重新安装工具或者换电脑工作时，你只要载入同一个项目的代码包，开发者工具就自动会帮你恢复到当时你开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。")]),s._v(" "),t("h4",{attrs:{id:"_3-页面配置-page-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-页面配置-page-json"}},[s._v("#")]),s._v(" 3.页面配置 page.json")]),s._v(" "),t("p",[s._v("这里的 page.json 其实用来表示 pages/logs 目录下的 logs.json 这类和小程序页面相关的配置。")]),s._v(" "),t("h3",{attrs:{id:"_3-wxml-模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-wxml-模板"}},[s._v("#")]),s._v(" 3.WXML 模板")]),s._v(" "),t("p",[s._v("和 HTML 非常相似，WXML 由标签、属性等等构成。但是也有很多不一样的地方，我们来一一阐述一下：")]),s._v(" "),t("p",[s._v("1.标签名字有点不一样\n往往写 HTML 的时候，经常会用到的标签是 div, p, span，开发者在写一个页面的时候可以根据这些基础的标签组合出不一样的组件，例如日历、弹窗等等。换个思路，既然大家都需要这些组件，为什么我们不能把这些常用的组件包装起来，大大提高我们的开发效率。\n从上边的例子可以看到，小程序的 WXML 用的标签是 view, button, text 等等，这些标签就是小程序给开发者包装好的基本能力，我们还提供了地图、视频、音频等等组件能力。\n2.多了一些 wx:if 这样的属性以及 "+s._s()+" 这样的表达式")]),s._v(" "),t("p",[s._v("在网页的一般开发流程中，我们通常会通过 JS 操作 DOM (对应 HTML 的描述产生的树)，以引起界面的一些变化响应用户的行为。例如，用户点击某个按钮的时候，JS 会记录一些状态到 JS 变量里边，同时通过 DOM API 操控 DOM 的属性或者行为，进而引起界面一些变化。当项目越来越大的时候，你的代码会充斥着非常多的界面交互逻辑和程序的各种状态变量，显然这不是一个很好的开发模式，因此就有了 MVVM 的开发模式（例如 React, Vue），提倡把渲染和逻辑分离。简单来说就是不要再让 JS 直接操控 DOM，JS 只需要管理状态即可，然后再通过一种模板语法来描述状态和界面结构的关系即可。")]),s._v(" "),t("h2",{attrs:{id:"_4-wxss-样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-wxss-样式"}},[s._v("#")]),s._v(" 4.WXSS 样式")]),s._v(" "),t("p",[s._v("WXSS 具有 CSS 大部分的特性，小程序在 WXSS 也做了一些扩充和修改。")]),s._v(" "),t("p",[s._v("新增了尺寸单位。在写 CSS 样式时，开发者需要考虑到手机设备的屏幕会有不同的宽度和设备像素比，采用一些技巧来换算一些像素单位。WXSS 在底层支持新的尺寸单位 rpx ，开发者可以免去换算的烦恼，只要交给小程序底层来换算即可，由于换算采用的浮点数运算，所以运算结果会和预期结果有一点点偏差。")]),s._v(" "),t("p",[s._v("提供了全局的样式和局部样式。和前边 app.json, page.json 的概念相同，你可以写一个 app.wxss 作为全局样式，会作用于当前小程序的所有页面，局部页面样式 page.wxss 仅对当前页面生效。")]),s._v(" "),t("p",[s._v("此外 WXSS 仅支持部分 CSS 选择器")]),s._v(" "),t("h3",{attrs:{id:"_5-js-逻辑交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-js-逻辑交互"}},[s._v("#")]),s._v(" 5.JS 逻辑交互")]),s._v(" "),t("p",[s._v("一个服务仅仅只有界面展示是不够的，还需要和用户做交互：响应用户的点击、获取用户的位置等等。在小程序里边，我们就通过编写 JS 脚本文件来处理用户的操作")])])}),[],!1,null,null,null);a.default=r.exports}}]);