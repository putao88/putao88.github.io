(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{369:function(t,a,e){"use strict";e.r(a);var s=e(25),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844903505983963143",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS盒模型详解"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000013069516",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS盒模型完整介绍"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"css盒模型基础使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css盒模型基础使用"}},[t._v("#")]),t._v(" CSS盒模型基础使用")]),t._v(" "),e("h3",{attrs:{id:"基本概念-标准模型-ie模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念-标准模型-ie模型"}},[t._v("#")]),t._v(" 基本概念：标准模型+IE模型")]),t._v(" "),e("ul",[e("li",[t._v("盒模型又称框模型（Box Model）,包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素")]),t._v(" "),e("li",[t._v("由于IE盒模型的怪异模式，IE模型和标准模型的内容计算方式不同")])]),t._v(" "),e("h3",{attrs:{id:"标准模型和ie模型的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准模型和ie模型的区别"}},[t._v("#")]),t._v(" 标准模型和IE模型的区别")]),t._v(" "),e("ul",[e("li",[t._v("IE模型元素宽度width=content+padding+border，高度计算相同")]),t._v(" "),e("li",[t._v("标准模型元素宽度width=content，高度计算相同")])]),t._v(" "),e("h3",{attrs:{id:"css如何设置获取这两种模型的宽和高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css如何设置获取这两种模型的宽和高"}},[t._v("#")]),t._v(" css如何设置获取这两种模型的宽和高")]),t._v(" "),e("ul",[e("li",[t._v("通过css3新增的属性 box-sizing: content-box | border-box分别设置盒模型为标准模型（content-box）和IE模型（border-box）")])]),t._v(" "),e("h3",{attrs:{id:"javascript如何设置获取盒模型对应的宽和高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript如何设置获取盒模型对应的宽和高"}},[t._v("#")]),t._v(" javascript如何设置获取盒模型对应的宽和高")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1. dom.style.width/height 只能取到行内样式的宽和高，style标签中和link外链的样式取不到。\n2. dom.currentStyle.width/height 取到的是最终渲染后的宽和高，只有IE支持此属性。\n3. window.getComputedStyle(dom).width/height 同（2）但是多浏览器支持，IE9以上支持。\n4. dom.getBoundingClientRect().width/height 也是得到渲染后的宽和高，大多浏览器支持。IE9以上支持，除此外还可以取到相对于视窗的上下左右的距离\n")])])]),e("h3",{attrs:{id:"外边距重叠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外边距重叠"}},[t._v("#")]),t._v(" 外边距重叠")]),t._v(" "),e("ul",[e("li",[t._v("当两个垂直外边距相遇时，他们将形成一个外边距，合并后的外边距高度等于两个发生合并的外边距的高度中的较大者。")]),t._v(" "),e("li",[t._v("注意：只有普通文档流中块框的垂直外边距才会发生外边距合并，行内框、浮动框或绝对定位之间的外边距不会合并。")])]),t._v(" "),e("h2",{attrs:{id:"position"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" Position")]),t._v(" "),e("h3",{attrs:{id:"介绍定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍定位"}},[t._v("#")]),t._v(" 介绍定位")]),t._v(" "),e("ul",[e("li",[t._v("static: 静态定位,默认值")]),t._v(" "),e("li",[t._v("relative: 相对定位,")]),t._v(" "),e("li",[t._v("absolute: 绝对定位")]),t._v(" "),e("li",[t._v("fixed: 固定定位,相对于窗口定位")])]),t._v(" "),e("h3",{attrs:{id:"定位上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定位上下文"}},[t._v("#")]),t._v(" 定位上下文")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("如果所有的父元素都没有显式地定义position属性，那么所有的父元素默认情况下position属性都是static。结果，绝对定位元素会被包含在初始块容器中。这个初始块容器有着和浏览器视口一样的尺寸，并且<html>元素也被包含在这个容器里面。简单来说，绝对定位元素会被放在<html>元素的外面，并且根据浏览器视口来定位。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);