(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{621:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"is-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-absolute"}},[t._v("#")]),t._v(" is-absolute "),a("a",{attrs:{href:"https://www.npmjs.com/package/is-absolute",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/is-absolute.svg?style=flat",alt:"NPM version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/is-absolute",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/is-absolute.svg?style=flat",alt:"NPM monthly downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/is-absolute",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dt/is-absolute.svg?style=flat",alt:"NPM total downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/jonschlinkert/is-absolute",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/jonschlinkert/is-absolute.svg?style=flat&label=Travis",alt:"Linux Build Status"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Returns true if a file path is absolute. Does not rely on the path module and can be used as a polyfill for node.js native "),a("code",[t._v("path.isAbolute")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("Install with "),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save is-absolute\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Originally based on the "),a("code",[t._v("isAbsolute")]),t._v(" utility method in "),a("a",{attrs:{href:"https://github.com/visionmedia/express",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isAbsolute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'is-absolute'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAbsolute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a/b/c.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 'false'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAbsolute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a/b/c.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 'true'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("strong",[t._v("Explicitly test windows paths")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("isAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("posix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo/bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("posix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/docs/Letter.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true")]),t._v("\n\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("posix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo/bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("strong",[t._v("Explicitly test windows paths")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isAbsolute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'is-absolute'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c:\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//C://user\\\\docs\\\\Letter.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\unc\\\\share'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\unc\\\\share\\\\foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\unc\\\\share\\\\foo\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\unc\\\\share\\\\foo\\\\bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\unc\\\\share\\\\foo\\\\bar\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\unc\\\\share\\\\foo\\\\bar\\\\baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> true")]),t._v("\n\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a:foo/a/b/c/d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo\\\\bar\\\\baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nisAbsolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("win32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo\\\\bar\\\\baz\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h2",{attrs:{id:"about"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),a("h3",{attrs:{id:"related-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-projects"}},[t._v("#")]),t._v(" Related projects")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-dotfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-dotfile"),a("OutboundLink")],1),t._v(": Return true if a file path is (or has) a dotfile. Returns false if the… "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-dotfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-dotfile",title:"Return true if a file path is (or has) a dotfile. Returns false if the path is a dot directory.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-glob"),a("OutboundLink")],1),t._v(": Returns "),a("code",[t._v("true")]),t._v(" if the given string looks like a glob pattern or an extglob pattern… "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-glob",title:"Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a bet",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-relative",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-relative"),a("OutboundLink")],1),t._v(": Returns "),a("code",[t._v("true")]),t._v(" if the path appears to be relative. | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-relative",title:"Returns `true` if the path appears to be relative.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-unc-path",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-unc-path"),a("OutboundLink")],1),t._v(": Returns true if a filepath is a windows UNC file path. | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-unc-path",title:"Returns true if a filepath is a windows UNC file path.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-valid-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-valid-glob"),a("OutboundLink")],1),t._v(": Return true if a value is a valid glob pattern or patterns. | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-valid-glob",title:"Return true if a value is a valid glob pattern or patterns.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),a("p",[t._v("Pull requests and stars are always welcome. For bugs and feature requests, "),a("a",{attrs:{href:"../../issues/new"}},[t._v("please create an issue")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Commits")])]),t._v(" "),a("th",[a("strong",[t._v("Contributor")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("35")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("jonschlinkert"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/es128",target:"_blank",rel:"noopener noreferrer"}},[t._v("es128"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/shinnn",target:"_blank",rel:"noopener noreferrer"}},[t._v("shinnn"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/Sobak",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sobak"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"building-docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-docs"}},[t._v("#")]),t._v(" Building docs")]),t._v(" "),a("p",[a("em",[t._v("(This project's readme.md is generated by "),a("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb"),a("OutboundLink")],1),t._v(", please don't edit the readme directly. Any changes to the readme must be made in the "),a("RouterLink",{attrs:{to:"/Study/工程化/gulp 学习代码/gulp-project/node_modules/is-absolute/.verb.html"}},[t._v(".verb.md")]),t._v(" readme template.)")],1)]),t._v(" "),a("p",[t._v("To generate the readme, run the following command:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g verbose/verb"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#dev verb-generate-readme && verb")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"running-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[t._v("#")]),t._v(" Running tests")]),t._v(" "),a("p",[t._v("Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),a("p",[a("strong",[t._v("Jon Schlinkert")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("github/jonschlinkert"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("twitter/jonschlinkert"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("Copyright © 2017, "),a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jon Schlinkert"),a("OutboundLink")],1),t._v(".\nReleased under the "),a("a",{attrs:{href:"LICENSE"}},[t._v("MIT License")]),t._v(".")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[t._v("This file was generated by "),a("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb-generate-readme"),a("OutboundLink")],1),t._v(", v0.6.0, on July 13, 2017.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);