(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{565:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"http://gulpjs.com"}},[a("img",{attrs:{height:"257",width:"114",src:"https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"}})])]),t._v(" "),a("h1",{attrs:{id:"fancy-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fancy-log"}},[t._v("#")]),t._v(" fancy-log")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/fancy-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/npm/v/fancy-log.svg",alt:"NPM version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/fancy-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/npm/dm/fancy-log.svg",alt:"Downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/gulpjs/fancy-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/travis/gulpjs/fancy-log.svg?label=travis-ci",alt:"Travis Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://ci.appveyor.com/project/gulpjs/fancy-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/appveyor/ci/gulpjs/fancy-log.svg?label=appveyor",alt:"AppVeyor Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/gulpjs/fancy-log",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://img.shields.io/coveralls/gulpjs/fancy-log/master.svg",alt:"Coveralls Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://gitter.im/gulpjs/gulp",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badges.gitter.im/gulpjs/gulp.svg",alt:"Gitter chat"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Log things, prefixed with a timestamp.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fancy-log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [16:27:02] a message")]),t._v("\n\nlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oh no!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [16:27:02] oh no!")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"log-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-msg"}},[t._v("#")]),t._v(" "),a("code",[t._v("log(msg...)")])]),t._v(" "),a("p",[t._v("Logs the message as if you called "),a("code",[t._v("console.log")]),t._v(" but prefixes the output with the\ncurrent time in HH:MM:ss format.")]),t._v(" "),a("h3",{attrs:{id:"log-error-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-error-msg"}},[t._v("#")]),t._v(" "),a("code",[t._v("log.error(msg...)")])]),t._v(" "),a("p",[t._v("Logs the message as if you called "),a("code",[t._v("console.error")]),t._v(" but prefixes the output with the\ncurrent time in HH:MM:ss format.")]),t._v(" "),a("h3",{attrs:{id:"log-warn-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-warn-msg"}},[t._v("#")]),t._v(" "),a("code",[t._v("log.warn(msg...)")])]),t._v(" "),a("p",[t._v("Logs the message as if you called "),a("code",[t._v("console.warn")]),t._v(" but prefixes the output with the\ncurrent time in HH:MM:ss format.")]),t._v(" "),a("h3",{attrs:{id:"log-info-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-info-msg"}},[t._v("#")]),t._v(" "),a("code",[t._v("log.info(msg...)")])]),t._v(" "),a("p",[t._v("Logs the message as if you called "),a("code",[t._v("console.info")]),t._v(" but prefixes the output with the\ncurrent time in HH:MM:ss format.")]),t._v(" "),a("h3",{attrs:{id:"log-dir-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-dir-msg"}},[t._v("#")]),t._v(" "),a("code",[t._v("log.dir(msg...)")])]),t._v(" "),a("p",[t._v("Logs the message as if you called "),a("code",[t._v("console.dir")]),t._v(" but prefixes the output with the\ncurrent time in HH:MM:ss format.")]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("MIT")])])}),[],!1,null,null,null);s.default=r.exports}}]);