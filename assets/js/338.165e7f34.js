(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{703:function(e,n,a){"use strict";a.r(n);var s=a(25),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"strings-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strings-bytes"}},[e._v("#")]),e._v(" Strings & Bytes")]),e._v(" "),a("p",[e._v("Miscellaneous string & byte encoding and decoding functionality provided for compatibility across supported versions of V8 and Node. Implemented by NAN to ensure that all encoding types are supported, even for older versions of Node where they are missing.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#api_nan_encoding"}},[a("b",[a("code",[e._v("Nan::Encoding")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#api_nan_encode"}},[a("b",[a("code",[e._v("Nan::Encode()")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#api_nan_decode_bytes"}},[a("b",[a("code",[e._v("Nan::DecodeBytes()")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#api_nan_decode_write"}},[a("b",[a("code",[e._v("Nan::DecodeWrite()")])])])])]),e._v(" "),a("p",[a("a",{attrs:{name:"api_nan_encoding"}})]),e._v(" "),a("h3",{attrs:{id:"nan-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan-encoding"}},[e._v("#")]),e._v(" Nan::Encoding")]),e._v(" "),a("p",[e._v("An enum representing the supported encoding types. A copy of "),a("code",[e._v("node::encoding")]),e._v(" that is consistent across versions of Node.")]),e._v(" "),a("p",[e._v("Definition:")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("enum Nan::Encoding { ASCII, UTF8, BASE64, UCS2, BINARY, HEX, BUFFER }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("a",{attrs:{name:"api_nan_encode"}})]),e._v(" "),a("h3",{attrs:{id:"nan-encode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan-encode"}},[e._v("#")]),e._v(" Nan::Encode()")]),e._v(" "),a("p",[e._v("A wrapper around "),a("code",[e._v("node::Encode()")]),e._v(" that provides a consistent implementation across supported versions of Node.")]),e._v(" "),a("p",[e._v("Signature:")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("v8::Local<v8::Value> Nan::Encode(const void *buf,\n                                 size_t len,\n                                 enum Nan::Encoding encoding = BINARY);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("a",{attrs:{name:"api_nan_decode_bytes"}})]),e._v(" "),a("h3",{attrs:{id:"nan-decodebytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan-decodebytes"}},[e._v("#")]),e._v(" Nan::DecodeBytes()")]),e._v(" "),a("p",[e._v("A wrapper around "),a("code",[e._v("node::DecodeBytes()")]),e._v(" that provides a consistent implementation across supported versions of Node.")]),e._v(" "),a("p",[e._v("Signature:")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssize_t Nan::DecodeBytes(v8::Local<v8::Value> val,\n                         enum Nan::Encoding encoding = BINARY);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[a("a",{attrs:{name:"api_nan_decode_write"}})]),e._v(" "),a("h3",{attrs:{id:"nan-decodewrite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan-decodewrite"}},[e._v("#")]),e._v(" Nan::DecodeWrite()")]),e._v(" "),a("p",[e._v("A wrapper around "),a("code",[e._v("node::DecodeWrite()")]),e._v(" that provides a consistent implementation across supported versions of Node.")]),e._v(" "),a("p",[e._v("Signature:")]),e._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssize_t Nan::DecodeWrite(char *buf,\n                         size_t len,\n                         v8::Local<v8::Value> val,\n                         enum Nan::Encoding encoding = BINARY);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);