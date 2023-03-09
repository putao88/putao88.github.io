(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{399:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://react-typescript-cheatsheet.netlify.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-typescript-cheatsheets"),a("OutboundLink")],1),t._v("\nReact开发备忘单")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6990929456382607374",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint和prettier的npm包和vscode插件"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903606815064077",target:"_blank",rel:"noopener noreferrer"}},[t._v("优雅的提交你的 Git Commit Message"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/huangpb123/article/details/102690412?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-102690412-blog-124365505.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-102690412-blog-124365505.pc_relevant_default&utm_relevant_index=6",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 husky 进行提交前的代码规范校验和 commit 信息检查"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7038143752036155428",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"官方脚手架搭建-create-react-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方脚手架搭建-create-react-app"}},[t._v("#")]),t._v(" 官方脚手架搭建(create-react-app)")]),t._v(" "),a("ul",[a("li",[t._v("配置代码规范，使用的是(Eslint+prettier+husky+lint-staged+commitlint)")]),t._v(" "),a("li",[t._v("husky：Git hooks 工具\n"),a("ul",[a("li",[t._v("对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序")])])]),t._v(" "),a("li",[t._v("lint-staged：检测文件插件\n"),a("ul",[a("li",[t._v("只检测git add . 中暂存区的文件，对过滤出的文件执行脚本")])])]),t._v(" "),a("li",[t._v("eslint：插件化JavaScript代码检测工具\n"),a("ul",[a("li",[t._v("Js编码规范，检测并提示错误或警告信息")])])]),t._v(" "),a("li",[t._v("stylelint: 一个强大的，现代的代码检查工具，\n"),a("ul",[a("li",[t._v("可以帮助你在团队合作中强制执行样式约定。")])])]),t._v(" "),a("li",[t._v("prettier：代码格式化工具\n"),a("ul",[a("li",[t._v("代码风格管理，更好的代码风格效果")])])]),t._v(" "),a("li",[t._v("editorconfig：文件代码规范\n"),a("ul",[a("li",[t._v("保持多人开发一致编码样式")])])]),t._v(" "),a("li",[t._v("commitlint：代码提交检测\n"),a("ul",[a("li",[t._v("检测git commit 内容是否符合定义的规范,可以自定义commit message的提示信息")])])]),t._v(" "),a("li",[t._v("commitizen: 规范提交信息\n"),a("ul",[a("li",[t._v("可以根据标准的git commit 内容,选择合适的commit,给固定的选项,不让开发自定义提交内容")])])])]),t._v(" "),a("h3",{attrs:{id:"初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app\n# Creates an app called my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app\nnpx create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("typescript\ncd my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app\n# Adds the type definitions\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save typescript @types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node @types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("react @types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dom @types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jest\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good to go :tada:"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" ESLint")]),t._v(" "),a("ol",[a("li",[t._v("我们创建项目的时候已经自动帮我们下载好了eslint依赖，如果没有下载的话我们使用以下命令安装即可")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g eslint "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 建议全局安装")]),t._v("\nnpm install eslint @typescript"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("parser @typescript"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin\n# eslint：javascript代码检测工具，使用espree解析器\n# @typescript"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("parser：将 TypeScript 转换为 ESTree，使 eslint 可以识别\n# @typescript"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin：只是一个可以打开或关闭的规则列表\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("初始化eslint，使用命令")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("eslint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("init\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("有三种可选择的方式，检查语法错误，检出语法错误和问题，检查语法错误和强制代码规范，由于我们使用prettier来配置代码规范，所以我们选择第二项，其它的按照我们自己的需求进行配置，配置完后可能会要我们下载相关规则依赖，选择yes安装即可。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ae7cb39280c29211615b5e7bb39c4998.png",alt:"模式选择"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/445ed18017199a5b853e6b2085ae44be.png",alt:"eslint初始化"}})])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("安装完之后我们项目的根目录下面就会多出一个.eslintrc.js文件，我们配合本地的eslint就可以使用了。")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("eslint yourfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n# 命令行会返回出现 problems 的数量和相应行数。\neslint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("fix yourfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n# 直接修改文件\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" Prettier")]),t._v(" "),a("ul",[a("li",[t._v("Prettier 只是一个Formatting rules ，负责 enforce code style！，这也是为什么我们在选择eslint的作用时只选择第二项，因为prettier实在是太好用了。代码格式化的原理是将代码解析为抽象语法树（AST）来处理。")])]),t._v(" "),a("ol",[a("li",[t._v("安装prettier")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g prettier  # 只安装prettier\nnpm install prettier eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier\n# prettier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 格式化规则程序\n# eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 禁用所有和 Prettier 产生冲突的规则\n# eslint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 把 Prettier 应用到 Eslint，配合 rules "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/prettier"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v(" 实现 Eslint 提醒。实际上是把prettier变成插件，然后如果有错误就通过eslint抛出来\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("我们也可以在项目根目录下面创建两个文件，一个配置文件和一个忽视文件。.prettierrc.js配置文件（配置文件的后缀其实也可以是.json等多种更格式，但是.js的优先级最高，具体可以上官网查看）及.prettierignore忽略文件，具体规则我们可以去prettier官网去查找，或者去npm上下载别人已经写好的代码规范，然后导入到我们的项目中去。我们这个项目初始化的过程中使用prettier默认的规则就好，暂时不去自定义相关的规范。")]),t._v(" "),a("li",[t._v("使用")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("prettier yourfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n# 返回格式化后的文件内容\nprettier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("write yourfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n# 直接修改文件\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"husky-lint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky-lint"}},[t._v("#")]),t._v(" husky+lint")]),t._v(" "),a("ul",[a("li",[t._v("使用husky的好处，可以在代码提交之前执行触发.git/hooks下面的钩子函数，例如使用precommit，这样就可以在提交之前去执行一遍lint或者lint-staged,lint是会把项目的所有目录都跑一遍看有没有不符合eslint规范的，而lint-stage可以只看这一次改动的git暂存区中的代码是否符合规范。一般项目中的检查过程如下：")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("代码提交 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("发现问题")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("远程"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 修复问题 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 重新提交 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("通过检查")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("远程"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",[a("li",[t._v("下载husky")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" husky\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("下载完之后package.json下面会多出husky这个属性，会在pre-commit这个钩子函数之前执行npm run lint这个脚本，由于这个脚本创建项目的时候并没有给我们创建好，我们自己在scripts属性中添加这个命令。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/b75694ee0e32ab339db42f499adb5daf.png",alt:"husky+lint"}})])]),t._v(" "),a("h3",{attrs:{id:"husky-lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky-lint-staged"}},[t._v("#")]),t._v(" husky+lint-staged")]),t._v(" "),a("ul",[a("li",[t._v("但是这样每次提交lint都会对文件中的整个目录进行遍历，实在不好，所以我们使用lint-staged只对暂存区中的代码进行检查")])]),t._v(" "),a("ol",[a("li",[t._v("下载lint-staged")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" lint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("staged\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("更改husky配置(这个配置只适用于4.x版本的husky)")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pre-commit之前执行lint-staged")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix --ext .js,.tsx,.jsx,.ts ./src"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix --format=pretty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// lint-staged会对这些文件一次执行这些操作，如果只需要eslint检查的话也可以写成"eslint"，而不需要以数组形式表现出来')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不写成数组")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix --ext .js,.tsx,.jsx,.ts ./src"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"react-scripts-ts搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-scripts-ts搭建"}},[t._v("#")]),t._v(" react-scripts-ts搭建")]),t._v(" "),a("ul",[a("li",[t._v("参考文章: "),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("typescript-react-starter"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("react-scripts-ts快速搭建项目,在官方脚手架的基础上又集成了eslint,jest等功能")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app\n\ncreate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("scripts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("scripts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ts\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);