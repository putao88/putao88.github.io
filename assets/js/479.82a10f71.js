(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{839:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"to-regex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-regex"}},[t._v("#")]),t._v(" to-regex "),a("a",{attrs:{href:"https://www.npmjs.com/package/to-regex",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/to-regex.svg?style=flat",alt:"NPM version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/to-regex",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/to-regex.svg?style=flat",alt:"NPM monthly downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/to-regex",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dt/to-regex.svg?style=flat",alt:"NPM total downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/jonschlinkert/to-regex",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/jonschlinkert/to-regex.svg?style=flat&label=Travis",alt:"Linux Build Status"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Generate a regex from a string or array of strings.")])]),t._v(" "),a("p",[t._v("Please consider following this project's author, "),a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jon Schlinkert"),a("OutboundLink")],1),t._v(", and consider starring the project to show your ❤️ and support.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#install"}},[t._v("Install")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#usage"}},[t._v("Usage")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#options"}},[t._v("Options")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#optionscontains"}},[t._v("options.contains")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#optionsnegate"}},[t._v("options.negate")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#optionsnocase"}},[t._v("options.nocase")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#optionsflags"}},[t._v("options.flags")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#optionscache"}},[t._v("options.cache")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#optionssafe"}},[t._v("options.safe")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#about"}},[t._v("About")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#related-projects"}},[t._v("Related projects")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#author"}},[t._v("Author")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#license"}},[t._v("License")])])])])]),t._v(" "),a("p",[a("em",[t._v("(TOC generated by "),a("a",{attrs:{href:"https://github.com/verbose/verb",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb"),a("OutboundLink")],1),t._v(" using "),a("a",{attrs:{href:"https://github.com/jonschlinkert/markdown-toc",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-toc"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("Install with "),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save to-regex\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" toRegex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-regex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:foo)$/")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("negate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:(?:(?!^(?:foo)$).)*)$/")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("contains"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /(?:foo)/")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("negate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:(?:(?!^(?:(?:foo)|(?:bar))$).)*)$/")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("negate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:(?:(?!(?:(?:foo)|(?:bar))).)*)$/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"options-contains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-contains"}},[t._v("#")]),t._v(" options.contains")]),t._v(" "),a("p",[a("strong",[t._v("Type")]),t._v(": "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("Generate a regex that will match any string that "),a("em",[t._v("contains")]),t._v(" the given pattern. By default, regex is strict will only return true for exact matches.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" toRegex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-regex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("contains"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /(?:foo)/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"options-negate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-negate"}},[t._v("#")]),t._v(" options.negate")]),t._v(" "),a("p",[a("strong",[t._v("Type")]),t._v(": "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("Create a regex that will match everything except the given pattern.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" toRegex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-regex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("negate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:(?:(?!^(?:foo)$).)*)$/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"options-nocase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-nocase"}},[t._v("#")]),t._v(" options.nocase")]),t._v(" "),a("p",[a("strong",[t._v("Type")]),t._v(": "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("Adds the "),a("code",[t._v("i")]),t._v(" flag, to enable case-insensitive matching.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" toRegex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-regex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nocase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:foo)$/i")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Alternatively you can pass the flags you want directly on "),a("a",{attrs:{href:"#options.flags"}},[t._v("options.flags")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"options-flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-flags"}},[t._v("#")]),t._v(" options.flags")]),t._v(" "),a("p",[a("strong",[t._v("Type")]),t._v(": "),a("code",[t._v("String")])]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("Define the flags you want to use on the generated regex.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" toRegex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to-regex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:foo)$/gm")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gmi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nocase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//<= handles redundancy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:foo)$/gmi")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"options-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-cache"}},[t._v("#")]),t._v(" options.cache")]),t._v(" "),a("p",[a("strong",[t._v("Type")]),t._v(": "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("Generated regex is cached based on the provided string and options. As a result, runtime compilation only happens once per pattern (as long as options are also the same), which can result in dramatic speed improvements.")]),t._v(" "),a("p",[t._v("This also helps with debugging, since adding options and pattern are added to the generated regex.")]),t._v(" "),a("p",[a("strong",[t._v("Disable caching")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"options-safe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-safe"}},[t._v("#")]),t._v(" options.safe")]),t._v(" "),a("p",[a("strong",[t._v("Type")]),t._v(": "),a("code",[t._v("Boolean")])]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("undefined")])]),t._v(" "),a("p",[t._v("Check the generated regular expression with "),a("a",{attrs:{href:"https://github.com/substack/safe-regex",target:"_blank",rel:"noopener noreferrer"}},[t._v("safe-regex"),a("OutboundLink")],1),t._v(" and throw an error if the regex is potentially unsafe.")]),t._v(" "),a("p",[a("strong",[t._v("Examples")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(x+x+)+y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> /^(?:(x+x+)+y)$/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following would throw an error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRegex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(x+x+)+y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("safe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"about"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),a("details",[a("summary",[a("strong",[t._v("Contributing")])]),t._v(" "),a("p",[t._v("Pull requests and stars are always welcome. For bugs and feature requests, "),a("a",{attrs:{href:"../../issues/new"}},[t._v("please create an issue")]),t._v(".")])]),t._v(" "),a("details",[a("summary",[a("strong",[t._v("Running Tests")])]),t._v(" "),a("p",[t._v("Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("details",[a("summary",[a("strong",[t._v("Building docs")])]),t._v(" "),a("p",[a("em",[t._v("(This project's readme.md is generated by "),a("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb"),a("OutboundLink")],1),t._v(", please don't edit the readme directly. Any changes to the readme must be made in the "),a("RouterLink",{attrs:{to:"/Study/工程化/gulp 学习代码/gulp-project/node_modules/to-regex/.verb.html"}},[t._v(".verb.md")]),t._v(" readme template.)")],1)]),t._v(" "),a("p",[t._v("To generate the readme, run the following command:")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g verbose/verb"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#dev verb-generate-readme && verb")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("h3",{attrs:{id:"related-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-projects"}},[t._v("#")]),t._v(" Related projects")]),t._v(" "),a("p",[t._v("You might also be interested in these projects:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/has-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("has-glob"),a("OutboundLink")],1),t._v(": Returns "),a("code",[t._v("true")]),t._v(" if an array has a glob pattern. | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/has-glob",title:"Returns `true` if an array has a glob pattern.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/is-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("is-glob"),a("OutboundLink")],1),t._v(": Returns "),a("code",[t._v("true")]),t._v(" if the given string looks like a glob pattern or an extglob pattern… "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://github.com/jonschlinkert/is-glob",title:"Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a bet",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/path-regex",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-regex"),a("OutboundLink")],1),t._v(": Regular expression for matching the parts of a file path. | "),a("a",{attrs:{href:"https://github.com/regexps/path-regex",title:"Regular expression for matching the parts of a file path.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/to-regex-range",target:"_blank",rel:"noopener noreferrer"}},[t._v("to-regex-range"),a("OutboundLink")],1),t._v(": Pass two numbers, get a regex-compatible source string for matching ranges. Validated against more than… "),a("a",{attrs:{href:"https://github.com/micromatch/to-regex-range",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://github.com/micromatch/to-regex-range",title:"Pass two numbers, get a regex-compatible source string for matching ranges. Validated against more than 2.78 million test assertions.",target:"_blank",rel:"noopener noreferrer"}},[t._v("homepage"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),a("p",[a("strong",[t._v("Jon Schlinkert")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://linkedin.com/in/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("linkedin/in/jonschlinkert"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("github/jonschlinkert"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("twitter/jonschlinkert"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("Copyright © 2018, "),a("a",{attrs:{href:"https://github.com/jonschlinkert",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jon Schlinkert"),a("OutboundLink")],1),t._v(".\nReleased under the "),a("a",{attrs:{href:"LICENSE"}},[t._v("MIT License")]),t._v(".")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[t._v("This file was generated by "),a("a",{attrs:{href:"https://github.com/verbose/verb-generate-readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("verb-generate-readme"),a("OutboundLink")],1),t._v(", v0.6.0, on February 24, 2018.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);