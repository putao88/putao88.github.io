(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{828:function(t,s,r){"use strict";r.r(s);var a=r(25),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"strip-bom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strip-bom"}},[t._v("#")]),t._v(" strip-bom "),r("a",{attrs:{href:"https://travis-ci.org/sindresorhus/strip-bom",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://travis-ci.org/sindresorhus/strip-bom.svg?branch=master",alt:"Build Status"}}),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("Strip UTF-8 "),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Byte_order_mark#UTF-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("byte order mark"),r("OutboundLink")],1),t._v(" (BOM) from a string/buffer")])]),t._v(" "),r("p",[t._v("From Wikipedia:")]),t._v(" "),r("blockquote",[r("p",[t._v("The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.")])]),t._v(" "),r("h2",{attrs:{id:"install"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ npm install --save strip-bom\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h2",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stripBom "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'strip-bom'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("stripBom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\uFEFFunicorn'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 'unicorn'")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("stripBom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorn.txt'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 'unicorn'")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br")])]),r("h2",{attrs:{id:"related"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related"}},[t._v("#")]),t._v(" Related")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/sindresorhus/strip-bom-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("strip-bom-cli"),r("OutboundLink")],1),t._v(" - CLI for this module")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/sindresorhus/strip-bom-stream",target:"_blank",rel:"noopener noreferrer"}},[t._v("strip-bom-stream"),r("OutboundLink")],1),t._v(" - Stream version of this module")])]),t._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),r("p",[t._v("MIT © "),r("a",{attrs:{href:"http://sindresorhus.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sindre Sorhus"),r("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);