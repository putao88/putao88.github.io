(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{476:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"color-support"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#color-support"}},[t._v("#")]),t._v(" color-support")]),t._v(" "),n("p",[t._v("A module which will endeavor to guess your terminal's level of color\nsupport.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://travis-ci.org/isaacs/color-support",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://travis-ci.org/isaacs/color-support.svg?branch=master",alt:"Build Status"}}),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://coveralls.io/github/isaacs/color-support?branch=master",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://coveralls.io/repos/github/isaacs/color-support/badge.svg?branch=master",alt:"Coverage Status"}}),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("This is similar to "),n("code",[t._v("supports-color")]),t._v(", but it does not read\n"),n("code",[t._v("process.argv")]),t._v(".")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("If not in a node environment, not supported.")])]),t._v(" "),n("li",[n("p",[t._v("If stdout is not a TTY, not supported, unless the "),n("code",[t._v("ignoreTTY")]),t._v("\noption is set.")])]),t._v(" "),n("li",[n("p",[t._v("If the "),n("code",[t._v("TERM")]),t._v(" environ is "),n("code",[t._v("dumb")]),t._v(", not supported, unless the\n"),n("code",[t._v("ignoreDumb")]),t._v(" option is set.")])]),t._v(" "),n("li",[n("p",[t._v("If on Windows, then support 16 colors.")])]),t._v(" "),n("li",[n("p",[t._v("If using Tmux, then support 256 colors.")])]),t._v(" "),n("li",[n("p",[t._v("Handle continuous-integration servers.  If "),n("code",[t._v("CI")]),t._v(" or\n"),n("code",[t._v("TEAMCITY_VERSION")]),t._v(" are set in the environment, and "),n("code",[t._v("TRAVIS")]),t._v(" is not\nset, then color is not supported, unless "),n("code",[t._v("ignoreCI")]),t._v(" option is set.")])]),t._v(" "),n("li",[n("p",[t._v("Guess based on the "),n("code",[t._v("TERM_PROGRAM")]),t._v(" environ.  These terminals support\n16m colors:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("iTerm.app")]),t._v(" version 3.x supports 16m colors, below support 256")]),t._v(" "),n("li",[n("code",[t._v("MacTerm")]),t._v(" supports 16m colors")]),t._v(" "),n("li",[n("code",[t._v("Apple_Terminal")]),t._v(" supports 256 colors")]),t._v(" "),n("li",[t._v("Have more things that belong on this list?  Send a PR!")])])]),t._v(" "),n("li",[n("p",[t._v("Make a guess based on the "),n("code",[t._v("TERM")]),t._v(" environment variable.  Any\n"),n("code",[t._v("xterm-256color")]),t._v(" will get 256 colors.  Any screen, xterm, vt100,\ncolor, ansi, cygwin, or linux "),n("code",[t._v("TERM")]),t._v(" will get 16 colors.")])]),t._v(" "),n("li",[n("p",[t._v("If "),n("code",[t._v("COLORTERM")]),t._v(" environment variable is set, then support 16 colors.")])]),t._v(" "),n("li",[n("p",[t._v("At this point, we assume that color is not supported.")])])]),t._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" USAGE")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" testColorSupport "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color-support'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorSupport "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("testColorSupport")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options object */")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("colorSupport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color is not supported'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colorSupport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has16m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x1b[38;2;102;194;255m16m colors\\x1b[0m'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colorSupport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has256"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x1b[38;5;119m256 colors\\x1b[0m'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colorSupport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasBasic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x1b[31mbasic colors\\x1b[0m'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is impossible, but colors are not supported'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("If you don't have any options to set, you can also just look at the\nflags which will all be set on the test function itself.  (Of course,\nthis doesn't return a falsey value when colors aren't supported, and\ndoesn't allow you to set options.)")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorSupport "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color-support'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colorSupport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has16m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x1b[38;2;102;194;255m16m colors\\x1b[0m'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colorSupport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has256"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x1b[38;5;119m256 colors\\x1b[0m'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colorSupport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasBasic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x1b[31mbasic colors\\x1b[0m'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'colors are not supported'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h2",{attrs:{id:"options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),n("p",[t._v("You can pass in the following options.")]),t._v(" "),n("ul",[n("li",[t._v("ignoreTTY - default false.  Ignore the "),n("code",[t._v("isTTY")]),t._v(" check.")]),t._v(" "),n("li",[t._v("ignoreDumb - default false.  Ignore "),n("code",[t._v("TERM=dumb")]),t._v(" environ check.")]),t._v(" "),n("li",[t._v("ignoreCI - default false.  Ignore "),n("code",[t._v("CI")]),t._v(" environ check.")]),t._v(" "),n("li",[t._v("env - Object for environment vars. Defaults to "),n("code",[t._v("process.env")]),t._v(".")]),t._v(" "),n("li",[t._v("stream - Stream for "),n("code",[t._v("isTTY")]),t._v(" check. Defaults to "),n("code",[t._v("process.stdout")]),t._v(".")]),t._v(" "),n("li",[t._v("term - String for "),n("code",[t._v("TERM")]),t._v(" checking. Defaults to "),n("code",[t._v("env.TERM")]),t._v(".")]),t._v(" "),n("li",[t._v("alwaysReturn - default false.  Return an object when colors aren't\nsupported (instead of returning "),n("code",[t._v("false")]),t._v(").")]),t._v(" "),n("li",[t._v("level - A number from 0 to 3.  This will return a result for the\nspecified level.  This is useful if you want to be able to set the\ncolor support level explicitly as a number in an environment\nvariable or config, but then use the object flags in your program.\nExcept for "),n("code",[t._v("alwaysReturn")]),t._v(" to return an object for level 0, all other\noptions are ignored, since no checking is done if a level is\nexplicitly set.")])]),t._v(" "),n("h2",{attrs:{id:"return-value"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#return-value"}},[t._v("#")]),t._v(" Return Value")]),t._v(" "),n("p",[t._v("If no color support is available, then "),n("code",[t._v("false")]),t._v(" is returned by default,\nunless the "),n("code",[t._v("alwaysReturn")]),t._v(" flag is set to "),n("code",[t._v("true")]),t._v('.  This is so that the\nsimple question of "can I use colors or not" can treat any truthy\nreturn as "yes".')]),t._v(" "),n("p",[t._v("Otherwise, the return object has the following fields:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("level")]),t._v(" - A number from 0 to 3\n"),n("ul",[n("li",[n("code",[t._v("0")]),t._v(" - No color support")]),t._v(" "),n("li",[n("code",[t._v("1")]),t._v(" - Basic (16) color support")]),t._v(" "),n("li",[n("code",[t._v("2")]),t._v(" - 256 color support")]),t._v(" "),n("li",[n("code",[t._v("3")]),t._v(" - 16 million (true) color support")])])]),t._v(" "),n("li",[n("code",[t._v("hasBasic")]),t._v(" - Boolean")]),t._v(" "),n("li",[n("code",[t._v("has256")]),t._v(" - Boolean")]),t._v(" "),n("li",[n("code",[t._v("has16m")]),t._v(" - Boolean")])]),t._v(" "),n("h2",{attrs:{id:"cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),n("p",[t._v("You can run the "),n("code",[t._v("color-support")]),t._v(" bin from the command line which will\njust dump the values as this module calculates them in whatever env\nit's run.  It takes no command line arguments.")]),t._v(" "),n("h2",{attrs:{id:"credits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[t._v("#")]),t._v(" Credits")]),t._v(" "),n("p",[t._v("This is a spiritual, if not actual, fork of\n"),n("a",{attrs:{href:"http://npm.im/supports-color",target:"_blank",rel:"noopener noreferrer"}},[t._v("supports-color"),n("OutboundLink")],1),t._v(" by the ever prolific\n"),n("a",{attrs:{href:"http://npm.im/~sindresorhus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sindre Sorhus"),n("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);