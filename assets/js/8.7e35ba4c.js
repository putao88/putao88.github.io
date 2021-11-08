(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{371:function(t,r,i){"use strict";i.r(r);var a=i(45),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"资源"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[t._v("#")]),t._v(" 资源")]),t._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"https://juejin.cn/post/6844903689702866952",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git内部原理"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://marklodato.github.io/visual-git-guide/index-zh-cn.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解Git"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://juejin.cn/post/6974184935804534815#heading-16",target:"_blank",rel:"noopener noreferrer"}},[t._v("工作中git常用方法"),i("OutboundLink")],1)])]),t._v(" "),i("h2",{attrs:{id:"git创建新的分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git创建新的分支"}},[t._v("#")]),t._v(" git创建新的分支")]),t._v(" "),i("h3",{attrs:{id:"_1-创建步骤"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建步骤"}},[t._v("#")]),t._v(" 1.创建步骤")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("1. 新建一个本地分支\n\t1. git checkout -b 新分支名称\n2. 查看一下现在的分支状态\n\t1. git branch\n3. 把新建的本地分支push到远程服务器，远程分支与本地分支同名（当然可以随意起名）\n\t1. git push origin 新分支名称: 新分支名称\n4. 使用git branch -a查看所有分支，会看到remotes/origin/dbg_lichen_star这个远程分支，说明新建远程分支成功。\n")])])]),i("h3",{attrs:{id:"_2-新分支提交报错"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-新分支提交报错"}},[t._v("#")]),t._v(" 2.新分支提交报错")]),t._v(" "),i("h4",{attrs:{id:"_1-git-pull报错-there-is-no-tracking-information-for-the-current-branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-pull报错-there-is-no-tracking-information-for-the-current-branch"}},[t._v("#")]),t._v(" 1. git pull报错:There is no tracking information for the current branch")]),t._v(" "),i("p",[t._v("是因为本地分支和远程分支没有建立联系 (使用git branch -vv 可以查看本地分支和远程分支的关联关系) .根据命令行提示只需要执行以下命令即可\ngit branch --set-upstream-to=origin/远分支的名字  本地分支的名字")]),t._v(" "),i("h4",{attrs:{id:"_2-删除分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除分支"}},[t._v("#")]),t._v(" 2.删除分支")]),t._v(" "),i("p",[t._v("1、删除本地分：git branch -d <分支名>\n2、删除远程分支：git push origin --delete <分支名>")]),t._v(" "),i("h2",{attrs:{id:"创建一个新的远程仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的远程仓库"}},[t._v("#")]),t._v(" 创建一个新的远程仓库")]),t._v(" "),i("h3",{attrs:{id:"_1-本地没有仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地没有仓库"}},[t._v("#")]),t._v(" 1.本地没有仓库")]),t._v(" "),i("p",[t._v('echo "# dream-blog" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\ngit remote add origin https://github.com/putao88/dream-blog.git（https的连接方式）\ngit push -u origin master')]),t._v(" "),i("h3",{attrs:{id:"_2-本地已有项目"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-本地已有项目"}},[t._v("#")]),t._v(" 2.本地已有项目")]),t._v(" "),i("p",[t._v("git remote add origin https://github.com/putao88/dream-blog.git")]),t._v(" "),i("h2",{attrs:{id:"解决git仓库从http转为ssh所要处理的问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#解决git仓库从http转为ssh所要处理的问题"}},[t._v("#")]),t._v(" 解决git仓库从http转为ssh所要处理的问题")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v('1、切换协议：\n1. 查看当前remote\ngit remote -v\n2. 协议之间的切换http和ssh：\n1）先增加新的协议:\ngit remote set-url --add origin 协议url \n2)删除原先的协议\ngit remote set-url --delete origin 原协议url\n3）push新的协议\ngit remote set-url --push origin 新协议url\n2、git已设置用户名和邮箱\ngit config --global user.name "YourName"\ngit config --global user.email email@mail.com\n3、你的home目录下是否已经生成过ssh-key，没生成，就创建一个\n\tsh-keygen -t rsa -C "email@mail.com"\n4、远程git仓库加入你的公钥(注：gitea、gitlab、github一般在用户的设置页面添加，如果远程是通过git init初始化的项目，请追加到远程机器的~/.ssh/authorized_keys 文件中)\n\tat .~/ssh/id_rsa.pub\n')])])]),i("h2",{attrs:{id:"git迁移仓库地址"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git迁移仓库地址"}},[t._v("#")]),t._v(" git迁移仓库地址")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("最近迁移git 项目地址。\n想保留原有分支和提交\n网上搜索了好多步骤都很繁琐。最后发现了最优的解决方案。\n1.先克隆老项目的镜像\ngit clone --mirror old.git (old.git 为老项目的git地址)\n2.进入老项目的目录\ncd old.git\n3.移除老项目的地址替换成新项目\ngit remote set-url --push origin  new.git (new.git 为新项目的git地址)\n4.将镜像推到远程\ngit push --mirror  //这一步需要输入新的git的账号和密码\n")])])]),i("h2",{attrs:{id:"git各种报错合集"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git各种报错合集"}},[t._v("#")]),t._v(" git各种报错合集")]),t._v(" "),i("h3",{attrs:{id:"_1-git-push报错-error-failed-to-push-some-refs-to-git-github-com-xxx-xxx-git-解决方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-push报错-error-failed-to-push-some-refs-to-git-github-com-xxx-xxx-git-解决方法"}},[t._v("#")]),t._v(" 1. git push报错： error: failed to push some refs to ‘git@github.com:xxx/xxx.git‘解决方法")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("解决方案： 由于github 中的 README.md文件 不在本地代码目录中，这时候可以通过 git pull --rebase origin master 把README.md文件克隆到本地库。此时再执行 git push origin master 就可以完成上传到远程仓库的操作了\n")])])]),i("h3",{attrs:{id:"_2-gitignore-不生效的解决方案"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-gitignore-不生效的解决方案"}},[t._v("#")]),t._v(" 2..gitignore 不生效的解决方案")]),t._v(" "),i("p",[t._v("当我们将 .gitignore 文件配置好后，却往往不能失效。这是因为 .gitignore 只能忽略那些没有被追踪(track)的文件，因为 git 存在本地缓存，如果文件已经纳入了版本管理，那么修改 .gitignore 是不能失效的。那么解决方案就是要将 git 的本地缓存删除，然后重新提交")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v('git rm -r --cached .\ngit add .\ngit commit -m "update .gitignore"\n')])])]),i("h2",{attrs:{id:"合并远程分支commit记录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#合并远程分支commit记录"}},[t._v("#")]),t._v(" 合并远程分支commit记录")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("git reset xxx(commit码) --soft\ngit add .\ngit commit\ngit push -f\n")])])]),i("h2",{attrs:{id:"更新同步远程、本地分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#更新同步远程、本地分支"}},[t._v("#")]),t._v(" 更新同步远程、本地分支")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("git remote update origin --prune\n")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);