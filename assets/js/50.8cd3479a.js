(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{410:function(t,r,e){"use strict";e.r(r);var n=e(25),a=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/chenqf/p/6386163.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP缓存机制及原理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844903763665240072",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器缓存"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"基础知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),e("p",[e("strong",[t._v("浏览器缓存规则表查看地址")]),t._v("：chrome://net-internals/#httpCache\n"),e("strong",[t._v("注意")]),t._v("：")]),t._v(" "),e("blockquote",[e("p",[t._v("1.协商缓存无论如何，都要向服务端发请求的，只不过，资源未更改时，返回的只是header信息，所以size很小；而资源有更改时，还要返回body数据，所以size会大\n2.强制缓存>协商缓存：当强制缓存命中，且过期了，才执行协商缓存；当强制缓存未过期，直接调用缓存数据，不实用协商缓存")])]),t._v(" "),e("p",[e("strong",[t._v("浏览器缓存策略:")]),t._v(" "),e("img",{attrs:{src:"/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.image",alt:"浏览器缓存策略"}})]),t._v(" "),e("p",[e("strong",[t._v("强缓存和协商缓存状态码:")]),t._v(" "),e("img",{attrs:{src:"/%E5%BC%BA%E7%BC%93%E5%AD%98%E5%92%8C%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98%E7%8A%B6%E6%80%81%E7%A0%81.image",alt:"强缓存和协商缓存状态码.png"}})]),t._v(" "),e("p",[e("strong",[t._v("用户行为对缓存的影响:")]),t._v(" "),e("img",{attrs:{src:"/%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%AF%B9%E7%BC%93%E5%AD%98%E7%9A%84%E5%BD%B1%E5%93%8D.image",alt:"用户行为对缓存的影响.png"}}),t._v("\n即：F5 会 跳过强缓存规则，直接走协商缓存；；；Ctrl+F5 ，跳过所有缓存规则，和第一次请求一样，重新获取资源")])])}),[],!1,null,null,null);r.default=a.exports}}]);