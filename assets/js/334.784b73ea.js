(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{697:function(n,s,a){"use strict";a.r(s);var t=a(25),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"object-wrappers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-wrappers"}},[n._v("#")]),n._v(" Object Wrappers")]),n._v(" "),a("p",[n._v("The "),a("code",[n._v("ObjectWrap")]),n._v(" class can be used to make wrapped C++ objects and a factory of wrapped objects.")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#api_nan_object_wrap"}},[a("b",[a("code",[n._v("Nan::ObjectWrap")])])])])]),n._v(" "),a("p",[a("a",{attrs:{name:"api_nan_object_wrap"}})]),n._v(" "),a("h3",{attrs:{id:"nan-objectwrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan-objectwrap"}},[n._v("#")]),n._v(" Nan::ObjectWrap()")]),n._v(" "),a("p",[n._v("A reimplementation of "),a("code",[n._v("node::ObjectWrap")]),n._v(" that adds some API not present in older versions of Node. Should be preferred over "),a("code",[n._v("node::ObjectWrap")]),n._v(" in all cases for consistency.")]),n._v(" "),a("p",[n._v("Definition:")]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('class ObjectWrap {\n public:\n  ObjectWrap();\n\n  virtual ~ObjectWrap();\n\n  template <class T>\n  static inline T* Unwrap(v8::Local<v8::Object> handle);\n\n  inline v8::Local<v8::Object> handle();\n\n  inline Nan::Persistent<v8::Object>& persistent();\n\n protected:\n  inline void Wrap(v8::Local<v8::Object> handle);\n\n  inline void MakeWeak();\n\n  /* Ref() marks the object as being attached to an event loop.\n   * Refed objects will not be garbage collected, even if\n   * all references are lost.\n   */\n  virtual void Ref();\n\n  /* Unref() marks an object as detached from the event loop.  This is its\n   * default state.  When an object with a "weak" reference changes from\n   * attached to detached state it will be freed. Be careful not to access\n   * the object after making this call as it might be gone!\n   * (A "weak reference" means an object that only has a\n   * persistent handle.)\n   *\n   * DO NOT CALL THIS FROM DESTRUCTOR\n   */\n  virtual void Unref();\n\n  int refs_;  // ro\n};\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br")])]),a("p",[n._v("See the Node documentation on "),a("a",{attrs:{href:"https://nodejs.org/api/addons.html#addons_wrapping_c_objects",target:"_blank",rel:"noopener noreferrer"}},[n._v("Wrapping C++ Objects"),a("OutboundLink")],1),n._v(" for more details.")]),n._v(" "),a("h3",{attrs:{id:"this-vs-holder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-vs-holder"}},[n._v("#")]),n._v(" This vs. Holder")]),n._v(" "),a("p",[n._v("When calling "),a("code",[n._v("Unwrap")]),n._v(", it is important that the argument is indeed some JavaScript object which got wrapped by a "),a("code",[n._v("Wrap")]),n._v(" call for this class or any derived class.\nThe "),a("code",[n._v("Signature")]),n._v(" installed by "),a("RouterLink",{attrs:{to:"/Study/工程化/gulp 学习代码/gulp-project/node_modules/nan/doc/methods.html#api_nan_set_prototype_method"}},[a("code",[n._v("Nan::SetPrototypeMethod()")])]),n._v(" does ensure that "),a("code",[n._v("info.Holder()")]),n._v(" is just such an instance.\nIn Node 0.12 and later, "),a("code",[n._v("info.This()")]),n._v(" will also be of such a type, since otherwise the invocation will get rejected.\nHowever, in Node 0.10 and before it was possible to invoke a method on a JavaScript object which just had the extension type in its prototype chain.\nIn such a situation, calling "),a("code",[n._v("Unwrap")]),n._v(" on "),a("code",[n._v("info.This()")]),n._v(" will likely lead to a failed assertion causing a crash, but could lead to even more serious corruption.")],1),n._v(" "),a("p",[n._v("On the other hand, calling "),a("code",[n._v("Unwrap")]),n._v(" in an "),a("RouterLink",{attrs:{to:"/Study/工程化/gulp 学习代码/gulp-project/node_modules/nan/doc/methods.html#api_nan_set_accessor"}},[n._v("accessor")]),n._v(" should not use "),a("code",[n._v("Holder()")]),n._v(" if the accessor is defined on the prototype.\nSo either define your accessors on the instance template,\nor use "),a("code",[n._v("This()")]),n._v(" after verifying that it is indeed a valid object.")],1),n._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[n._v("#")]),n._v(" Examples")]),n._v(" "),a("h4",{attrs:{id:"basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[n._v("#")]),n._v(" Basic")]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('class MyObject : public Nan::ObjectWrap {\n public:\n  static NAN_MODULE_INIT(Init) {\n    v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);\n    tpl->SetClassName(Nan::New("MyObject").ToLocalChecked());\n    tpl->InstanceTemplate()->SetInternalFieldCount(1);\n\n    Nan::SetPrototypeMethod(tpl, "getHandle", GetHandle);\n    Nan::SetPrototypeMethod(tpl, "getValue", GetValue);\n\n    constructor().Reset(Nan::GetFunction(tpl).ToLocalChecked());\n    Nan::Set(target, Nan::New("MyObject").ToLocalChecked(),\n      Nan::GetFunction(tpl).ToLocalChecked());\n  }\n\n private:\n  explicit MyObject(double value = 0) : value_(value) {}\n  ~MyObject() {}\n\n  static NAN_METHOD(New) {\n    if (info.IsConstructCall()) {\n      double value = info[0]->IsUndefined() ? 0 : Nan::To<double>(info[0]).FromJust();\n      MyObject *obj = new MyObject(value);\n      obj->Wrap(info.This());\n      info.GetReturnValue().Set(info.This());\n    } else {\n      const int argc = 1;\n      v8::Local<v8::Value> argv[argc] = {info[0]};\n      v8::Local<v8::Function> cons = Nan::New(constructor());\n      info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());\n    }\n  }\n\n  static NAN_METHOD(GetHandle) {\n    MyObject* obj = Nan::ObjectWrap::Unwrap<MyObject>(info.Holder());\n    info.GetReturnValue().Set(obj->handle());\n  }\n\n  static NAN_METHOD(GetValue) {\n    MyObject* obj = Nan::ObjectWrap::Unwrap<MyObject>(info.Holder());\n    info.GetReturnValue().Set(obj->value_);\n  }\n\n  static inline Nan::Persistent<v8::Function> & constructor() {\n    static Nan::Persistent<v8::Function> my_constructor;\n    return my_constructor;\n  }\n\n  double value_;\n};\n\nNODE_MODULE(objectwrapper, MyObject::Init)\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br")])]),a("p",[n._v("To use in Javascript:")]),n._v(" "),a("div",{staticClass:"language-Javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" objectwrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'bindings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'objectwrapper'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("objectwrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("MyObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'Should be 5: '")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h4",{attrs:{id:"factory-of-wrapped-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factory-of-wrapped-objects"}},[n._v("#")]),n._v(" Factory of wrapped objects")]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('class MyFactoryObject : public Nan::ObjectWrap {\n public:\n  static NAN_MODULE_INIT(Init) {\n    v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);\n    tpl->InstanceTemplate()->SetInternalFieldCount(1);\n\n    Nan::SetPrototypeMethod(tpl, "getValue", GetValue);\n\n    constructor().Reset(Nan::GetFunction(tpl).ToLocalChecked());\n  }\n\n  static NAN_METHOD(NewInstance) {\n    v8::Local<v8::Function> cons = Nan::New(constructor());\n    double value = info[0]->IsNumber() ? Nan::To<double>(info[0]).FromJust() : 0;\n    const int argc = 1;\n    v8::Local<v8::Value> argv[1] = {Nan::New(value)};\n    info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());\n  }\n\n  // Needed for the next example:\n  inline double value() const {\n    return value_;\n  }\n\n private:\n  explicit MyFactoryObject(double value = 0) : value_(value) {}\n  ~MyFactoryObject() {}\n\n  static NAN_METHOD(New) {\n    if (info.IsConstructCall()) {\n      double value = info[0]->IsNumber() ? Nan::To<double>(info[0]).FromJust() : 0;\n      MyFactoryObject * obj = new MyFactoryObject(value);\n      obj->Wrap(info.This());\n      info.GetReturnValue().Set(info.This());\n    } else {\n      const int argc = 1;\n      v8::Local<v8::Value> argv[argc] = {info[0]};\n      v8::Local<v8::Function> cons = Nan::New(constructor());\n      info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());\n    }\n  }\n\n  static NAN_METHOD(GetValue) {\n    MyFactoryObject* obj = ObjectWrap::Unwrap<MyFactoryObject>(info.Holder());\n    info.GetReturnValue().Set(obj->value_);\n  }\n\n  static inline Nan::Persistent<v8::Function> & constructor() {\n    static Nan::Persistent<v8::Function> my_constructor;\n    return my_constructor;\n  }\n\n  double value_;\n};\n\nNAN_MODULE_INIT(Init) {\n  MyFactoryObject::Init(target);\n  Nan::Set(target,\n    Nan::New<v8::String>("newFactoryObjectInstance").ToLocalChecked(),\n    Nan::GetFunction(\n      Nan::New<v8::FunctionTemplate>(MyFactoryObject::NewInstance)).ToLocalChecked()\n  );\n}\n\nNODE_MODULE(wrappedobjectfactory, Init)\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br")])]),a("p",[n._v("To use in Javascript:")]),n._v(" "),a("div",{staticClass:"language-Javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" wrappedobjectfactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'bindings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'wrappedobjectfactory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" wrappedobjectfactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("newFactoryObjectInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'Should be 10: '")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h4",{attrs:{id:"passing-wrapped-objects-around"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passing-wrapped-objects-around"}},[n._v("#")]),n._v(" Passing wrapped objects around")]),n._v(" "),a("p",[n._v("Use the "),a("code",[n._v("MyFactoryObject")]),n._v(" class above along with the following:")]),n._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('static NAN_METHOD(Sum) {\n  Nan::MaybeLocal<v8::Object> maybe1 = Nan::To<v8::Object>(info[0]);\n  Nan::MaybeLocal<v8::Object> maybe2 = Nan::To<v8::Object>(info[1]);\n\n  // Quick check:\n  if (maybe1.IsEmpty() || maybe2.IsEmpty()) {\n    // return value is undefined by default\n    return;\n  }\n\n  MyFactoryObject* obj1 =\n    Nan::ObjectWrap::Unwrap<MyFactoryObject>(maybe1.ToLocalChecked());\n  MyFactoryObject* obj2 =\n    Nan::ObjectWrap::Unwrap<MyFactoryObject>(maybe2.ToLocalChecked());\n\n  info.GetReturnValue().Set(Nan::New<v8::Number>(obj1->value() + obj2->value()));\n}\n\nNAN_MODULE_INIT(Init) {\n  MyFactoryObject::Init(target);\n  Nan::Set(target,\n    Nan::New<v8::String>("newFactoryObjectInstance").ToLocalChecked(),\n    Nan::GetFunction(\n      Nan::New<v8::FunctionTemplate>(MyFactoryObject::NewInstance)).ToLocalChecked()\n  );\n  Nan::Set(target,\n    Nan::New<v8::String>("sum").ToLocalChecked(),\n    Nan::GetFunction(Nan::New<v8::FunctionTemplate>(Sum)).ToLocalChecked()\n  );\n}\n\nNODE_MODULE(myaddon, Init)\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br")])]),a("p",[n._v("To use in Javascript:")]),n._v(" "),a("div",{staticClass:"language-Javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" myaddon "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'bindings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'myaddon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" myaddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("newFactoryObjectInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("var")]),n._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" myaddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("newFactoryObjectInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'sum of object values: '")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" myaddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);