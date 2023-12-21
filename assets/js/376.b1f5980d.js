(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{738:function(s,t,e){"use strict";e.r(t);var a=e(25),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"parse-passwd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parse-passwd"}},[s._v("#")]),s._v(" parse-passwd "),e("a",{attrs:{href:"https://www.npmjs.com/package/parse-passwd",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/parse-passwd.svg?style=flat",alt:"NPM version"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/parse-passwd",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dm/parse-passwd.svg?style=flat",alt:"NPM downloads"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://travis-ci.org/doowb/parse-passwd",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/travis/doowb/parse-passwd.svg?style=flat&label=Travis",alt:"Linux Build Status"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://ci.appveyor.com/project/doowb/parse-passwd",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/appveyor/ci/doowb/parse-passwd.svg?style=flat&label=AppVeyor",alt:"Windows Build Status"}}),e("OutboundLink")],1)]),s._v(" "),e("blockquote",[e("p",[s._v("Parse a passwd file into a list of users.")])]),s._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),e("p",[s._v("Install with "),e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),e("OutboundLink")],1),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save parse-passwd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" parse "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'parse-passwd'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),e("p",[e("strong",[s._v("Example")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// assuming '/etc/passwd' contains:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// doowb:*:123:123:Brian Woodward:/Users/doowb:/bin/bash")]),s._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFileSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc/passwd'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=> [")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>   {")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>     username: 'doowb',")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>     password: '*',")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>     uid: '123',")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>     gid: '123',")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>     gecos: 'Brian Woodward',")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>     homedir: '/Users/doowb',")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>     shell: '/bin/bash'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=>   }")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//=> ]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[e("strong",[s._v("Params")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("content")]),s._v(" "),e("strong",[s._v("{String}")]),s._v(": Content of a passwd file to parse.")]),s._v(" "),e("li",[e("code",[s._v("returns")]),s._v(" "),e("strong",[s._v("{Array}")]),s._v(": Array of user objects parsed from the content.")])]),s._v(" "),e("h2",{attrs:{id:"about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[s._v("#")]),s._v(" About")]),s._v(" "),e("h3",{attrs:{id:"contributing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[s._v("#")]),s._v(" Contributing")]),s._v(" "),e("p",[s._v("Pull requests and stars are always welcome. For bugs and feature requests, "),e("a",{attrs:{href:"../../issues/new"}},[s._v("please create an issue")]),s._v(".")]),s._v(" "),e("p",[s._v("Please read the "),e("RouterLink",{attrs:{to:"/Study/工程化/gulp 学习代码/gulp-project/node_modules/parse-passwd/contributing.html"}},[s._v("contributing guide")]),s._v(" for avice on opening issues, pull requests, and coding standards.")],1),s._v(" "),e("h3",{attrs:{id:"building-docs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-docs"}},[s._v("#")]),s._v(" Building docs")]),s._v(" "),e("p",[e("em",[s._v("(This document was generated by "),e("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("verb-generate-readme"),e("OutboundLink")],1),s._v(" (a "),e("a",{attrs:{href:"https://github.com/verbose/verb",target:"_blank",rel:"noopener noreferrer"}},[s._v("verb"),e("OutboundLink")],1),s._v(" generator), please don't edit the readme directly. Any changes to the readme must be made in "),e("RouterLink",{attrs:{to:"/Study/工程化/gulp 学习代码/gulp-project/node_modules/parse-passwd/.verb.html"}},[s._v(".verb.md")]),s._v(".)")],1)]),s._v(" "),e("p",[s._v("To generate the readme and API documentation with "),e("a",{attrs:{href:"https://github.com/verbose/verb",target:"_blank",rel:"noopener noreferrer"}},[s._v("verb"),e("OutboundLink")],1),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g verb verb-generate-readme "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" verb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"running-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[s._v("#")]),s._v(" Running tests")]),s._v(" "),e("p",[s._v("Install dev dependencies:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"author"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[s._v("#")]),s._v(" Author")]),s._v(" "),e("p",[e("strong",[s._v("Brian Woodward")])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/doowb",target:"_blank",rel:"noopener noreferrer"}},[s._v("github/doowb"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"http://twitter.com/doowb",target:"_blank",rel:"noopener noreferrer"}},[s._v("twitter/doowb"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),e("p",[s._v("Copyright © 2016, "),e("a",{attrs:{href:"https://github.com/doowb",target:"_blank",rel:"noopener noreferrer"}},[s._v("Brian Woodward"),e("OutboundLink")],1),s._v(".\nReleased under the "),e("a",{attrs:{href:"LICENSE"}},[s._v("MIT license")]),s._v(".")]),s._v(" "),e("hr"),s._v(" "),e("p",[e("em",[s._v("This file was generated by "),e("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("verb-generate-readme"),e("OutboundLink")],1),s._v(", v0.2.0, on October 19, 2016.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);