(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{918:function(a,t,s){"use strict";s.r(t);var n=s(25),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"一、个人相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、个人相关"}},[a._v("#")]),a._v(" 一、个人相关")]),a._v(" "),s("h4",{attrs:{id:"_1-自我介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-自我介绍"}},[a._v("#")]),a._v(" 1.自我介绍")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("面试官好，我叫侯晓玲，17年毕业于湘潭大学计算机专业。因为兴趣加专业背景，从大学毕业开始做前端开发，目前已有4年工作经验。打算从华大基因离职。\n")])])]),s("h3",{attrs:{id:"_2-为什么从华大离职"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么从华大离职"}},[a._v("#")]),a._v(" 2.为什么从华大离职")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("从华大离职主要有2个原因：\n1.薪资过低，在华大工作2年，没有向上调整，低于市场水平\n2.项目成熟，一直在做重复的业务逻辑，前端技术得不到增长\n")])])]),s("h3",{attrs:{id:"二、项目介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、项目介绍"}},[a._v("#")]),a._v(" 二、项目介绍")]),a._v(" "),s("h4",{attrs:{id:"华大基因项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#华大基因项目"}},[a._v("#")]),a._v(" 华大基因项目")]),a._v(" "),s("p",[a._v("我在华大做的都是自研相系统，基本上每一个系统都可以关联起来，我可以从业务的角度来依次介绍这些系统。\n首先华大的主营业务是基因测序——就是通过华大自产的测序平台对用户送过来的样本进行测序，并将最终的测序结果返回给用户。\n整个产链其实主要涉及5大过程：\n1.填写送样信息-MYBGI系统\n2.接收样本——样本中心系统\n3.根据各产线生产实验——生产系统（因源系统，科服presap）\n4.生信分析\n5.出报告——报告系统")]),a._v(" "),s("h3",{attrs:{id:"三、项目难点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、项目难点"}},[a._v("#")]),a._v(" 三、项目难点")]),a._v(" "),s("h4",{attrs:{id:"_1-项目中遇到的难点-如何解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目中遇到的难点-如何解决"}},[a._v("#")]),a._v(" 1.项目中遇到的难点，如何解决？")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("在线填单功能的公共组件封装")])]),a._v(" "),s("li",[s("p",[a._v("antd上传功能Upload组件bug定位\n问题：使用upload组件时，上传完毕，我们可以点上传后的链接来下载相应文件，但是谷歌浏览器升级到最新版本之后，下载zip包的文件时，会存在跨域问题。因为\n下载功能实际上就是上传时后台会返回一个服务器链接，我们通过这个链接去下载我们的资源，但是服务器是返回的是http开头的链接（文件服务器和当前系统不是一个），而我们系统是https，这就会存在跨域问题，实际上定位这个问题也花费了一些时间，因为我本地跑项目是http，所以我上传后下载完全没问题，但是测试服务器是https，下载就会有问题，所以这个问题的难点是发现定位问题的所在。\n解决方案：如果当前上传的文件类型是压缩包，那么点击链接下载时自动调用后台提供的方法去访问文件")])]),a._v(" "),s("li",[s("p",[a._v("项目开发中又一个Excel导出功能，采用了js-sheet实现数据导出，xlsx-style实现导出表格的样式，\n问题：但是现有的xlsx-style插件直接引用会报错，需要修改某一段源码，如果仅仅是本地修改源码，打包到服务器后依然会报错，每次更新包时也会报错\n解决：将xlsx-style的源码从github拉下拉，然后修改源码，发布成自己的npm包，在项目中重新安装引用")])]),a._v(" "),s("li",[s("p",[a._v("使用vue做页面缓存不刷新时遇到多级路由问题\n问题：我们在定义路由时，根据产品需求，侧边栏最多有3层路由，引导用户更好的进入相应页面。同时我们每次点击一个页面，都需要将页面缓存起来。使用keep-alive实现页面缓存，但是由于路由设计为三层，因此keep-alive无法缓存多级页面（详细知识点还需再去学习），因此无法实现页面缓存\n解决：我们项目实际上只是侧边栏展示需要3级，实际我们系统布局就是一个后台管理系统，应用只需要做成2级，因此，拿到路由后，将多级路由摊平成2级，这样点击时就是2级路由，keep-alive就能将页面缓存\nhttps://blog.csdn.net/weixin_40119256/article/details/111475571")])]),a._v(" "),s("li",[s("p",[a._v("React开发的一个项目，npm和yarn都可以安装依赖包，有一次更新完一个包之后，发现控制台报了很多关于antd的用法错误，比如文本域的autosize，他提示我已经废除，要使用autoSize,而且文本域的展示样式和之前不同了，可是我没有更新antd的版本，一直都用得很好，这让我感到很疑惑，不明白为什么会这样。后来发现是其实我的依赖包安装的antd版本已经不是以前的版本了。\n问题：为什么没有更新版本，却引用了不一样的antd包呢，后来我发现，我在安装包时使用的是npm install,我的antd版本指定的是：^3.7.2，那就意味着我安装时，npm会随机安装3.X.X中的最新版本，但是其实我的项目里还有一个yarn.lock文件，他锁定了antd版本为：v3.12.4,之前安装依赖包都是用yarn，所以我的antd版本一直是v3.12.4,autosize的写法也是可以的，还未被废除。\n解决办法：删除依赖包，用yarn重新装一遍依赖，然后保持一致用yarn来安装项目依赖，这样可以锁定版本，避免这些问题。\n扩展：npm 其实也有办法实现处处使用相同版本的 packages，但需要开发者执行 npm shrinkwrap 命令。这个命令将会生成一个锁定文件，在执行 npm install 的时候，该锁定文件会先被读取，和 Yarn 读取 yarn.lock 文件一个道理。")])])]),a._v(" "),s("h3",{attrs:{id:"三、项目亮点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、项目亮点"}},[a._v("#")]),a._v(" 三、项目亮点")]),a._v(" "),s("ol",[s("li",[a._v("用虚拟列表解决大数据量问题")])])])}),[],!1,null,null,null);t.default=e.exports}}]);