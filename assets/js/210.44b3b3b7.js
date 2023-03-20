(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{574:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"http://gulpjs.com"}},[a("img",{attrs:{height:"257",width:"114",src:"https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"}})])]),t._v(" "),a("h1",{attrs:{id:"fined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fined"}},[t._v("#")]),t._v(" fined")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/fined",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/npm/v/fined.svg",alt:"NPM version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/fined",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/npm/dm/fined.svg",alt:"Downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/gulpjs/fined",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/travis/gulpjs/fined.svg?label=travis-ci",alt:"Travis Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://ci.appveyor.com/project/gulpjs/fined",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/appveyor/ci/gulpjs/fined.svg?label=appveyor",alt:"AppVeyor Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/gulpjs/fined",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/coveralls/gulpjs/fined/master.svg",alt:"Coveralls Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://gitter.im/gulpjs/gulp",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badges.gitter.im/gulpjs/gulp.svg",alt:"Gitter chat"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Find a file given a declaration of locations.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fined "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { path: '/absolute/path/to/file.js', extension: '.js' }  (if file exists)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => null  (if file does not exist)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" opts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  extensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rc'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default-rc-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.yml'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default-yml-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { path: '/absolute/of/cwd/.app.yml', extension: { '.yml': 'default-yml-loader' } }")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rc'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-special-rc-loader'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { path: '/User/home/.apprc', extension: { 'rc': 'some-special-rc-loader' } }")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"fined-pathobj-opts-object-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fined-pathobj-opts-object-null"}},[t._v("#")]),t._v(" fined(pathObj, opts) => object | null")]),t._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("pathObj")]),t._v(" [string | object] : a path setting for finding a file.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("opts")]),t._v(" [object] : a plain object supplements "),a("code",[t._v("pathObj")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("pathObj")]),t._v(" and "),a("code",[t._v("opts")]),t._v(" can have same properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("path")]),t._v(" [string] : a path string.")]),t._v(" "),a("li",[a("strong",[t._v("name")]),t._v(" [string] : a basename.")]),t._v(" "),a("li",[a("strong",[t._v("extensions")]),t._v(": [string | array | object] : extensions.")]),t._v(" "),a("li",[a("strong",[t._v("cwd")]),t._v(": a base directory of "),a("code",[t._v("path")]),t._v(" and for finding up.")]),t._v(" "),a("li",[a("strong",[t._v("findUp")]),t._v(": [boolean] : a flag to find up.")])])])]),t._v(" "),a("h4",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[t._v("#")]),t._v(" Return:")]),t._v(" "),a("p",[t._v("This function returns a plain object which consists of following properties if a file exists otherwise null.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("path")]),t._v(" : an absolute path")]),t._v(" "),a("li",[a("strong",[t._v("extension")]),t._v(" : a string or a plain object of extension.")])]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("MIT")])])}),[],!1,null,null,null);s.default=e.exports}}]);