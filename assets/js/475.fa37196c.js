(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{838:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"to-absolute-glob"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-absolute-glob"}},[t._v("#")]),t._v(" to-absolute-glob "),a("a",{attrs:{href:"https://www.npmjs.com/package/to-absolute-glob",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/to-absolute-glob.svg?style=flat",alt:"NPM version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/to-absolute-glob",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/to-absolute-glob.svg?style=flat",alt:"NPM downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/jonschlinkert/to-absolute-glob",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/jonschlinkert/to-absolute-glob.svg?style=flat&label=Travis",alt:"Linux Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://ci.appveyor.com/project/jonschlinkert/to-absolute-glob",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/appveyor/ci/jonschlinkert/to-absolute-glob.svg?style=flat&label=AppVeyor",alt:"Windows Build Status"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Make a glob pattern absolute, ensuring that negative globs and patterns with trailing slashes are correctly handled.")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("Install with "),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save to-absolute-glob\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" toAbsGlob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-absolute-glob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Given the current project folder (cwd) is "),a("code",[t._v("/dev/foo/")]),t._v(":")]),t._v(" "),a("p",[a("strong",[t._v("makes a path absolute")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/a'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("makes a glob absolute")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("retains trailing slashes")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a/*/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/a/*/'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("retains trailing slashes with cwd")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./fixtures/whatsgoingon/*/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("makes a negative glob absolute")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '!/dev/foo/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("from a cwd")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/foo/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("makes a negative glob absolute from a cwd")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '!/dev/foo/foo/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("from a root path")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/baz/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("from a root slash")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/dev/foo/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("from a negative root path")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!/a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '!/dev/foo/baz/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("from a negative root slash")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAbsGlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!/a/*.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '!/dev/foo/a/*.js'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"about"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),a("h3",{attrs:{id:"related-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-projects"}},[t._v("#")]),t._v(" Related projects")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/has-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("has-glob"),a("OutboundLink")],1),t._v(": Returns "),a("code",[t._v("true")]),t._v(" if an array has a glob pattern. | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/has-glob",title:"Returns `true` if an array has a glob pattern.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-glob"),a("OutboundLink")],1),t._v(": Returns "),a("code",[t._v("true")]),t._v(" if the given string looks like a glob pattern or an extglob pattern… "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-glob",title:"Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a bet",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-valid-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-valid-glob"),a("OutboundLink")],1),t._v(": Return true if a value is a valid glob pattern or patterns. | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-valid-glob",title:"Return true if a value is a valid glob pattern or patterns.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),a("p",[t._v("Pull requests and stars are always welcome. For bugs and feature requests, "),a("a",{attrs:{href:"../../issues/new"}},[t._v("please create an issue")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Commits")])]),t._v(" "),a("th",[a("strong",[t._v("Contributor")]),a("br")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("16")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/doowb",target:"_blank",rel:"noopener noreferrer"}},[t._v("doowb"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("15")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("jonschlinkert"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/phated",target:"_blank",rel:"noopener noreferrer"}},[t._v("phated"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/erikkemperman",target:"_blank",rel:"noopener noreferrer"}},[t._v("erikkemperman"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"building-docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-docs"}},[t._v("#")]),t._v(" Building docs")]),t._v(" "),a("p",[a("em",[t._v("(This document was generated by "),a("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb-generate-readme"),a("OutboundLink")],1),t._v(" (a "),a("a",{attrs:{href:"https://github.com/verbose/verb",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb"),a("OutboundLink")],1),t._v(" generator), please don't edit the readme directly. Any changes to the readme must be made in "),a("RouterLink",{attrs:{to:"/Study/工程化/gulp 学习代码/gulp-project/node_modules/to-absolute-glob/.verb.html"}},[t._v(".verb.md")]),t._v(".)")],1)]),t._v(" "),a("p",[t._v("To generate the readme and API documentation with "),a("a",{attrs:{href:"https://github.com/verbose/verb",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g verb verb-generate-readme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" verb\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"running-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[t._v("#")]),t._v(" Running tests")]),t._v(" "),a("p",[t._v("Install dev dependencies:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),a("p",[a("strong",[t._v("Jon Schlinkert")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("github/jonschlinkert"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://twitter.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("twitter/jonschlinkert"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("Copyright © 2016, "),a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jon Schlinkert"),a("OutboundLink")],1),t._v(".\nReleased under the "),a("a",{attrs:{href:"https://github.com/jonschlinkert/to-absolute-glob/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT license"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[t._v("This file was generated by "),a("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb-generate-readme"),a("OutboundLink")],1),t._v(", v0.2.0, on October 17, 2016.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);