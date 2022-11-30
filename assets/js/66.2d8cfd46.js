(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{426:function(t,a,s){"use strict";s.r(a);var h=s(25),r=Object(h.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/Charissa2017/article/details/104779412",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端路由的两种模式"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),s("ul",[s("li",[t._v("前端路由实现方式:\nhash模式：监听浏览器地址hash值变化，执行相应的js切换网页；\nhistory模式：利用history API实现url地址改变，网页内容改变；")])]),t._v(" "),s("h3",{attrs:{id:"hash模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash模式"}},[t._v("#")]),t._v(" hash模式")]),t._v(" "),s("p",[t._v("使用window.location.hash属性及窗口的onhashchange事件，可以实现监听浏览器地址hash值变化，执行相应的js切换网页。下面具体介绍几个使用过程中必须理解的要点：")]),t._v(" "),s("ol",[s("li",[t._v("hash指的是地址中#号以及后面的字符，也称为散列值。hash也称作锚点，本身是用来做页面跳转定位的。如http://localhost/index.html#abc，这里的#abc就是hash；")]),t._v(" "),s("li",[t._v("散列值是不会随请求发送到服务器端的，所以改变hash，不会重新加载页面；")]),t._v(" "),s("li",[t._v("监听 window 的 hashchange 事件，当散列值改变时，可以通过 location.hash 来获取和设置hash值；")]),t._v(" "),s("li",[t._v("location.hash值的变化会直接反应到浏览器地址栏；")])]),t._v(" "),s("h4",{attrs:{id:"触发hashchange事件的几种情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发hashchange事件的几种情况"}},[t._v("#")]),t._v(" 触发hashchange事件的几种情况")]),t._v(" "),s("ul",[s("li",[t._v("浏览器地址栏散列值的变化（包括浏览器的前进、后退）会触发window.location.hash值的变化，从而触发onhashchange事件；\n当浏览器地址栏中URL包含哈希如 http://www.baidu.com/#home，这时按下输入，浏览器发送http://www.baidu.com/请求至服务器，请求完毕之后设置散列值为#home，进而触发onhashchange事件；")]),t._v(" "),s("li",[t._v("当只改变浏览器地址栏URL的哈希部分，这时按下回车，浏览器不会发送任何请求至服务器，这时发生的只是设置散列值新修改的哈希值，并触发onhashchange事件；")]),t._v(" "),s("li",[t._v("html中a标签的属性 href 可以设置为页面的元素ID如 #top，当点击该链接时页面跳转至该id元素所在区域，同时浏览器自动设置 window.location.hash 属性，地址栏中的哈希值也会发生改变，并触发onhashchange事件")])]),t._v(" "),s("h3",{attrs:{id:"history模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history模式"}},[t._v("#")]),t._v(" history模式")]),t._v(" "),s("h4",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("ul",[s("li",[t._v("window.history 属性指向 History 对象，它表示当前窗口的浏览历史。当发生改变时，只会改变页面的路径，不会刷新页面。")]),t._v(" "),s("li",[t._v("History 对象保存了当前窗口访问过的所有页面网址。通过 history.length 可以得出当前窗口一共访问过几个网址。")]),t._v(" "),s("li",[t._v("由于安全原因，浏览器不允许脚本读取这些地址，但是允许在地址之间导航。")]),t._v(" "),s("li",[t._v("浏览器工具栏的“前进”和“后退”按钮，其实就是对 History 对象进行操作。")])]),t._v(" "),s("h4",{attrs:{id:"history-对象主要有两个属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history-对象主要有两个属性"}},[t._v("#")]),t._v(" History 对象主要有两个属性")]),t._v(" "),s("ol",[s("li",[t._v("History.length：当前窗口访问过的网址数量（包括当前网页）")]),t._v(" "),s("li",[t._v("History.state：History 堆栈最上层的状态值（详见下文）")])]),t._v(" "),s("h4",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("ol",[s("li",[t._v("History.back()：移动到上一个网址，等同于点击浏览器的后退键。对于第一个访问的网址，该方法无效果。")]),t._v(" "),s("li",[t._v("History.forward()：移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，该方法无效果。")]),t._v(" "),s("li",[t._v("History.go()：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址。如果参数超过实际存在的网址范围，该方法无效果；如果不指定参数，默认参数为0，相当于刷新当前页面。")])]),t._v(" "),s("h4",{attrs:{id:"history-pushstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history-pushstate"}},[t._v("#")]),t._v(" History.pushState()")]),t._v(" "),s("p",[t._v("该方法用于在历史中添加一条记录。pushState()方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有变化。\n语法：history.pushState(object, title, url)\n该方法接受三个参数，依次为：\nobject：是一个对象，通过 pushState 方法可以将该对象内容传递到新页面中。如果不需要这个对象，此处可以填 null。\ntitle：指标题，几乎没有浏览器支持该参数，传一个空字符串比较安全。\nurl：新的网址，必须与当前页面处在同一个域。不指定的话则为当前的路径，如果设置了一个跨域网址，则会报错。")]),t._v(" "),s("h4",{attrs:{id:"popstate-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#popstate-事件"}},[t._v("#")]),t._v(" popstate 事件")]),t._v(" "),s("p",[t._v("每当 history 对象出现变化时，就会触发 popstate 事件。\n"),s("strong",[t._v("注意：")]),t._v("\n仅仅调用pushState()方法或replaceState()方法 ，并不会触发该事件;\n只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用History.back()、History.forward()、History.go()方法时才会触发。\n另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。\n页面第一次加载的时候，浏览器不会触发popstate事件。")])])}),[],!1,null,null,null);a.default=r.exports}}]);