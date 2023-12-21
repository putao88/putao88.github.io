(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{650:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery"}},[t._v("#")]),t._v(" jQuery")]),t._v(" "),a("blockquote",[a("p",[t._v("jQuery is a fast, small, and feature-rich JavaScript library.")])]),t._v(" "),a("p",[t._v("For information on how to get started and how to use jQuery, please see "),a("a",{attrs:{href:"https://api.jquery.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery's documentation"),a("OutboundLink")],1),t._v(".\nFor source files and issues, please visit the "),a("a",{attrs:{href:"https://github.com/jquery/jquery",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery repo"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("If upgrading, please see the "),a("a",{attrs:{href:"https://blog.jquery.com/2023/03/06/jquery-3-6-4-released-selector-forgiveness/",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog post for 3.6.4"),a("OutboundLink")],1),t._v(". This includes notable differences from the previous version and a more readable changelog.")]),t._v(" "),a("h2",{attrs:{id:"including-jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#including-jquery"}},[t._v("#")]),t._v(" Including jQuery")]),t._v(" "),a("p",[t._v("Below are some of the most common ways to include jQuery.")]),t._v(" "),a("h3",{attrs:{id:"browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser"}},[t._v("#")]),t._v(" Browser")]),t._v(" "),a("h4",{attrs:{id:"script-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-tag"}},[t._v("#")]),t._v(" Script tag")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://code.jquery.com/jquery-3.6.4.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"webpack-browserify-babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-browserify-babel"}},[t._v("#")]),t._v(" Webpack / Browserify / Babel")]),t._v(" "),a("p",[t._v("There are several ways to use "),a("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"http://browserify.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserify"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),a("OutboundLink")],1),t._v(". For more information on using these tools, please refer to the corresponding project's documentation. In the script, including jQuery will usually look like this:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("If you need to use jQuery in a file that's not an ECMAScript module, you can use the CommonJS syntax:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"amd-asynchronous-module-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd-asynchronous-module-definition"}},[t._v("#")]),t._v(" AMD (Asynchronous Module Definition)")]),t._v(" "),a("p",[t._v("AMD is a module format built for the browser. For more information, we recommend "),a("a",{attrs:{href:"https://requirejs.org/docs/whyamd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("require.js' documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),a("p",[t._v("To include jQuery in "),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node"),a("OutboundLink")],1),t._v(", first install with npm.")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jquery\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("For jQuery to work in Node, a window with a document is required. Since no such window exists natively in Node, one can be mocked by tools such as "),a("a",{attrs:{href:"https://github.com/jsdom/jsdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsdom"),a("OutboundLink")],1),t._v(". This can be useful for testing purposes.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSDOM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsdom"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JSDOM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);