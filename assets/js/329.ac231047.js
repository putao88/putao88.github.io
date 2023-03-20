(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{691:function(e,a,n){"use strict";n.r(a);var s=n(25),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[e._v("#")]),e._v(" JSON")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("JSON")]),e._v(" object provides the C++ versions of the methods offered by the "),n("code",[e._v("JSON")]),e._v(" object in javascript. V8 exposes these methods via the "),n("code",[e._v("v8::JSON")]),e._v(" object.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#api_nan_json_parse"}},[n("b",[n("code",[e._v("Nan::JSON.Parse")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#api_nan_json_stringify"}},[n("b",[n("code",[e._v("Nan::JSON.Stringify")])])])])]),e._v(" "),n("p",[e._v("Refer to the V8 JSON object in the "),n("a",{attrs:{href:"https://v8docs.nodesource.com/node-8.16/da/d6f/classv8_1_1_j_s_o_n.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("V8 documentation"),n("OutboundLink")],1),e._v(" for more information about these methods and their arguments.")]),e._v(" "),n("p",[n("a",{attrs:{name:"api_nan_json_parse"}})]),e._v(" "),n("h3",{attrs:{id:"nan-json-parse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nan-json-parse"}},[e._v("#")]),e._v(" Nan::JSON.Parse")]),e._v(" "),n("p",[e._v("A simple wrapper around "),n("a",{attrs:{href:"https://v8docs.nodesource.com/node-8.16/da/d6f/classv8_1_1_j_s_o_n.html#a936310d2540fb630ed37d3ee3ffe4504",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("v8::JSON::Parse")]),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Definition:")]),e._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Nan::MaybeLocal<v8::Value> Nan::JSON::Parse(v8::Local<v8::String> json_string);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Use "),n("code",[e._v("JSON.Parse(json_string)")]),e._v(" to parse a string into a "),n("code",[e._v("v8::Value")]),e._v(".")]),e._v(" "),n("p",[e._v("Example:")]),e._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('v8::Local<v8::String> json_string = Nan::New("{ \\"JSON\\": \\"object\\" }").ToLocalChecked();\n\nNan::JSON NanJSON;\nNan::MaybeLocal<v8::Value> result = NanJSON.Parse(json_string);\nif (!result.IsEmpty()) {\n  v8::Local<v8::Value> val = result.ToLocalChecked();\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[n("a",{attrs:{name:"api_nan_json_stringify"}})]),e._v(" "),n("h3",{attrs:{id:"nan-json-stringify"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nan-json-stringify"}},[e._v("#")]),e._v(" Nan::JSON.Stringify")]),e._v(" "),n("p",[e._v("A simple wrapper around "),n("a",{attrs:{href:"https://v8docs.nodesource.com/node-8.16/da/d6f/classv8_1_1_j_s_o_n.html#a44b255c3531489ce43f6110209138860",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("v8::JSON::Stringify")]),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Definition:")]),e._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Nan::MaybeLocal<v8::String> Nan::JSON::Stringify(v8::Local<v8::Object> json_object, v8::Local<v8::String> gap = v8::Local<v8::String>());\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Use "),n("code",[e._v("JSON.Stringify(value)")]),e._v(" to stringify a "),n("code",[e._v("v8::Object")]),e._v(".")]),e._v(" "),n("p",[e._v("Example:")]),e._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// using `v8::Local<v8::Value> val` from the `JSON::Parse` example\nv8::Local<v8::Object> obj = Nan::To<v8::Object>(val).ToLocalChecked();\n\nNan::JSON NanJSON;\nNan::MaybeLocal<v8::String> result = NanJSON.Stringify(obj);\nif (!result.IsEmpty()) {\n  v8::Local<v8::String> stringified = result.ToLocalChecked();\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);