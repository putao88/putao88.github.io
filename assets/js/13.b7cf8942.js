(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{433:function(t,e,a){"use strict";a.r(e);var n=a(25),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解CSS中的层叠上下文和层叠顺序"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"层叠上下文基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文基础"}},[t._v("#")]),t._v(" 层叠上下文基础")]),t._v(" "),a("p",[a("img",{attrs:{src:"/%E5%B1%82%E5%8F%A0%E4%B8%8A%E4%B8%8B%E6%96%87.jpg",alt:"层叠上下文"}})]),t._v(" "),a("h3",{attrs:{id:"层叠准则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠准则"}},[t._v("#")]),t._v(" 层叠准则")]),t._v(" "),a("ul",[a("li",[t._v("谁大谁上：当具有明显的层叠水平标示的时候，如识别的z-indx值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。通俗讲就是官大的压死官小的。")]),t._v(" "),a("li",[t._v("后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。")])]),t._v(" "),a("h3",{attrs:{id:"层叠上下文的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文的特性"}},[t._v("#")]),t._v(" 层叠上下文的特性")]),t._v(" "),a("ul",[a("li",[t._v("层叠上下文的层叠水平要比普通元素高（原因后面会说明）；")]),t._v(" "),a("li",[t._v("层叠上下文可以阻断元素的混合模式（见此文第二部分说明）；")]),t._v(" "),a("li",[t._v("层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的层叠上下文。")]),t._v(" "),a("li",[t._v("每个层叠上下文和兄弟元素独立，也就是当进行层叠变化或渲染的时候，只需要考虑后代元素。")]),t._v(" "),a("li",[t._v("每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中。")])]),t._v(" "),a("h3",{attrs:{id:"层叠上下文的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文的创建"}},[t._v("#")]),t._v(" 层叠上下文的创建")]),t._v(" "),a("ul",[a("li",[t._v("根层叠上下文\n指的是页面根元素，也就是滚动条的默认的始作俑者html元素。这就是为什么，绝对定位元素在left/top等值定位的时候，如果没有其他定位元素限制，会相对浏览器窗口定位的原因。")]),t._v(" "),a("li",[t._v("定位元素与传统层叠上下文\n对于包含有position:relative/position:absolute的定位元素，以及FireFox/IE浏览器（不包括Chrome等webkit内核浏览器）（目前，也就是2016年初是这样）下含有position:fixed声明的定位元素，当其z-index值不是auto的时候，会创建层叠上下文。")]),t._v(" "),a("li",[t._v("CSS3与新时代的层叠上下文\nz-index值不为auto的flex项(父元素display:flex|inline-flex).\n元素的opacity值不是1.\n元素的transform值不是none.\n元素mix-blend-mode值不是normal.\n元素的filter值不是none.\n元素的isolation值是isolate.\nwill-change指定的属性值为上面任意一个。\n元素的-webkit-overflow-scrolling设为touch.")])]),t._v(" "),a("h3",{attrs:{id:"层叠上下文顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文顺序"}},[t._v("#")]),t._v(" 层叠上下文顺序")]),t._v(" "),a("ul",[a("li",[t._v("如果层叠上下文元素不依赖z-index数值，则其层叠顺序是z-index:auto可看成z:index:0级别；")]),t._v(" "),a("li",[t._v("如果层叠上下文元素依赖z-index数值，则其层叠顺序由z-index值决定。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);