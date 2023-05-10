(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{831:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sver-compat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sver-compat"}},[s._v("#")]),s._v(" sver-compat")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://travis-ci.org/phated/sver-compat",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/phated/sver-compat.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Fork of @guybedford's "),a("a",{attrs:{href:"https://github.com/guybedford/sver",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sver"),a("OutboundLink")],1),s._v(" library. Adds compatibility for node <6.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install sver-compat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" Semver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sver-compat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Semver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" SemverRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sver-compat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SemverRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Static usage:")]),s._v("\nSemverRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.2.4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Class usage:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" range "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SemverRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.2.4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nversion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nrange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"range-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#range-support"}},[s._v("#")]),s._v(" Range support")]),s._v(" "),a("p",[s._v("Restricts version ranges to the simplified cases:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("*")]),s._v(": Wildcard range")]),s._v(" "),a("li",[a("code",[s._v("MAJOR")]),s._v(": Match exact major")]),s._v(" "),a("li",[a("code",[s._v("MAJOR.MINOR")]),s._v(" Match exact major and minor")]),s._v(" "),a("li",[a("code",[s._v("MAJOR.MINOR.PATCH[-PRE]")]),s._v(" Match exact semver")]),s._v(" "),a("li",[a("code",[s._v("~MAJOR.MINOR.PATCH[-PRE]")]),s._v(": Match patch bumps")]),s._v(" "),a("li",[a("code",[s._v("^MAJOR.MINOR.PATCH[-PRE]")]),s._v(": Match minor and patch bumps")])]),s._v(" "),a("p",[s._v("Invalid ranges will fallback to being detected as exact string matches.")]),s._v(" "),a("h3",{attrs:{id:"prerelease-matching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerelease-matching"}},[s._v("#")]),s._v(" Prerelease Matching")]),s._v(" "),a("p",[s._v("By default, as per convention, ranges like "),a("code",[s._v("^1.2.3-alpha")]),s._v(" only match prerelease ranges on the same patch ("),a("code",[s._v("1.2.3-alpha.4")]),s._v("), but\nnot prerelease ranges from further patches ("),a("code",[s._v("1.3.4-alpha")]),s._v(").")]),s._v(" "),a("p",[s._v("To alter this matching, a third boolean argument can be provided to the match function to support these unstable matches:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("SemverRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.5.6-beta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\nSemverRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.5.6-beta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"best-version-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-version-match"}},[s._v("#")]),s._v(" Best Version Match")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" versions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.3.4-alpha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.3.4-alpha.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.3.4-beta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" range "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SemverRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bestStableMatch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bestMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("versions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbestStableMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.2.3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bestUnstableMatch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bestMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("versions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbestUnstableMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.3.4-beta")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"version-and-range-sorting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-and-range-sorting"}},[s._v("#")]),s._v(" Version and Range Sorting")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" versions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.4.5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.3.4-alpha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.3.4-alpha.2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ranges "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.3.4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nversions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Semver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [1.2.3, 2.3.4-alpha, 2.3.4-alpha.2, 2.4.5]")]),s._v("\nranges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SemverRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [1.2, ^1.2.3, 2.3.4]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"conversion-from-node-semver-ranges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conversion-from-node-semver-ranges"}},[s._v("#")]),s._v(" Conversion from Node Semver Ranges")]),s._v(" "),a("p",[s._v("A utility function is included to convert Node Semver ranges into Semver ranges.")]),s._v(" "),a("p",[s._v("This requires "),a("code",[s._v("semver")]),s._v(" to be installed in the application running this process.")]),s._v(" "),a("p",[a("em",[s._v("Note this conversion is lossy by definition.")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" convertRange "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sver-compat/convert-range'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'>=2.3.4 <3.0.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ^2.3.4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1 || 2 || 3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ^3.0.0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"semver-and-semver-range-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semver-and-semver-range-validation"}},[s._v("#")]),s._v(" Semver and Semver Range Validation")]),s._v(" "),a("p",[s._v("When a version string fails semver validation it falls back to being treated as a tag, still as a "),a("code",[s._v("Semver")]),s._v(" instance.")]),s._v(" "),a("p",[s._v("For example:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x.y.z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nversion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x.y.z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\nversion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Semver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nversion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("major "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\nversion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("For validation, rather use "),a("code",[s._v("Semver.isValid")]),s._v(" and "),a("code",[s._v("SemverRange.isValid")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Semver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isValid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x.y.z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\nSemver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isValid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\nSemverRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isValid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^1.2.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),a("h3",{attrs:{id:"semver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semver"}},[s._v("#")]),s._v(" Semver")]),s._v(" "),a("p",[s._v("Static methods:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Semver.isValid(version: string): boolean")]),s._v(": Whether the given string is a valid semver.")]),s._v(" "),a("li",[a("code",[s._v("Semver.compare(v1: Semver|string, v2: Semver|string): number")]),s._v(": 1 if v1 > v2, -1 if v1 < v2, 0 if equal.")])]),s._v(" "),a("p",[s._v("For a given Semver instance "),a("code",[s._v("version = new Semver('X.Y.Z')")]),s._v(",")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("version.major")]),s._v(": The major version number.")]),s._v(" "),a("li",[a("code",[s._v("version.minor")]),s._v(": The minor version number.")]),s._v(" "),a("li",[a("code",[s._v("version.patch")]),s._v(": The patch version number.")]),s._v(" "),a("li",[a("code",[s._v("version.pre")]),s._v(": The prerelease identifer, as an array of strings ("),a("code",[s._v(".")]),s._v("-separated).")]),s._v(" "),a("li",[a("code",[s._v("version.build")]),s._v(": The build identifier, as a string.")]),s._v(" "),a("li",[a("code",[s._v("version.tag")]),s._v(": If not a valid semver, the full tag string.")]),s._v(" "),a("li",[a("code",[s._v("version.gt(otherVersion: Semver|string): bool")]),s._v(": Whether this version is greater than the other version.")]),s._v(" "),a("li",[a("code",[s._v("version.lt(otherVersion: Semver|string): bool")]),s._v(": Whether this version is less than the other version.")]),s._v(" "),a("li",[a("code",[s._v("version.eq(otherVerion: Semver|string): bool")]),s._v(": Whether this version equals the other version.")]),s._v(" "),a("li",[a("code",[s._v("version.matches(range: SemverRange|string, unstable?: bool): bool")]),s._v(": Whether this version matches the given version range.")]),s._v(" "),a("li",[a("code",[s._v("version.toString(): string")]),s._v(": Convert the version back to a string.")])]),s._v(" "),a("h3",{attrs:{id:"semverrange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semverrange"}},[s._v("#")]),s._v(" SemverRange")]),s._v(" "),a("p",[s._v("Static methods:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("SemverRange.match(range: SemverRange|string, version: Semver|string, unstable = false): bool")]),s._v(": Whether the version matches the range.")]),s._v(" "),a("li",[a("code",[s._v("SemverRange.isValid(range: string): bool")]),s._v(": Whether the given range string is a valid semver range (in this simplified grammar).")]),s._v(" "),a("li",[a("code",[s._v("SemverRange.compare(r1: SemverRange|string, r2: SemverRange|string): number")]),s._v(": 1 if r1 > r2, -1 if r1 < r2, 0 if equal.")])]),s._v(" "),a("p",[s._v("For a given SemverRange instance "),a("code",[s._v("range = new SemverRange('^X.Y.Z')")]),s._v(",")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("range.type: string")]),s._v(": Returns "),a("code",[s._v("'wildcard'")]),s._v(", "),a("code",[s._v("'major'")]),s._v(", "),a("code",[s._v("'stable'")]),s._v(" or "),a("code",[s._v("'exact'")]),s._v(".")]),s._v(" "),a("li",[a("code",[s._v("range.version: Smever")]),s._v(": Returns the "),a("code",[s._v("Semver")]),s._v(" instance corresponding to the range.")]),s._v(" "),a("li",[a("code",[s._v("range.isExact: string")]),s._v(": Returns true if the range is an exact version only.")]),s._v(" "),a("li",[a("code",[s._v("range.isStable: string")]),s._v(": Returns true if the range is a stable version range.")]),s._v(" "),a("li",[a("code",[s._v("range.isMajor: string")]),s._v(": Returns true if the range is a major version range.")]),s._v(" "),a("li",[a("code",[s._v("range.isWildcard: string")]),s._v(": Returns true if the range is the wildcard version range.")]),s._v(" "),a("li",[a("code",[s._v("range.gt(otherRange: SemverRange|string): bool")]),s._v(": Whether the range is greater than the other range.")]),s._v(" "),a("li",[a("code",[s._v("range.lt(otherRange: SemverRange|string): bool")]),s._v(": Whether the range is less than the other range.")]),s._v(" "),a("li",[a("code",[s._v("range.eq(otherRange: SemverRange|string): bool")]),s._v(": Whether the range is exactly the same as the other range.")]),s._v(" "),a("li",[a("code",[s._v("range.has(version: Semver|string, unstable = false): bool")]),s._v(": Whether the range includes the given version.")]),s._v(" "),a("li",[a("code",[s._v("range.contains(otherRange: SemverRange|string): bool")]),s._v(": Whether the range fully contains the other range.")]),s._v(" "),a("li",[a("code",[s._v("range.intersect(otherRange: SemverRange|string): SemverRange|undefined")]),s._v(": The intersection range, if any.")]),s._v(" "),a("li",[a("code",[s._v("range.bestMatch(versions: (Semver|string)[], unstable = false): Semver|undefined")]),s._v(": The intersection range, if any.")]),s._v(" "),a("li",[a("code",[s._v("range.toString()")]),s._v(": Convert the range back to a string.")])]),s._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),a("p",[s._v("MIT")])])}),[],!1,null,null,null);t.default=n.exports}}]);