(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{349:function(t,a,l){"use strict";l.r(a);var i=l(33),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"对javascript中apply、call、和bind方法的理解"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#对javascript中apply、call、和bind方法的理解"}},[t._v("#")]),t._v(" 对JavaScript中apply、call、和bind方法的理解")]),t._v(" "),l("h3",{attrs:{id:"一、三者的异同"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#一、三者的异同"}},[t._v("#")]),t._v(" 一、三者的异同")]),t._v(" "),l("ul",[l("li",[t._v("apply、call、bind都是函数对象的实例方法")]),t._v(" "),l("li",[t._v("都可以改变this的指向")]),t._v(" "),l("li",[t._v("表现形式\n"),l("ul",[l("li",[t._v("fn.apply(thisArg[, arg1[, arg2[, ...]]])， 第一参数thisArg表示this对象，第二及之后的参数表示传参给fn的参数序列")]),t._v(" "),l("li",[t._v("fn.call(thisArg[, args*[]])")]),t._v(" "),l("li",[t._v("fn.bind(thisArg[, arg1[, arg2[, ...]]])")])])]),t._v(" "),l("li",[t._v("语法\n"),l("ul",[l("li",[t._v("参数thisArg表示，当绑定函数被调用是，该参数会作为this的指向。")]),t._v(" "),l("li",[t._v("后面的参数序列表示，当绑定被调用时，这些参数将置于参数之前传递给被绑定的方法fn。")])])]),t._v(" "),l("li",[t._v("执行结果\n"),l("ul",[l("li",[t._v("apply、call立即调用fn")]),t._v(" "),l("li",[t._v("bind创建一个新函数（绑定函数）返回")])])]),t._v(" "),l("li",[t._v("其他\n"),l("ul",[l("li",[t._v("bind是es5的方法")])])])]),t._v(" "),l("p",[l("img",{attrs:{src:"https://octodex.github.com/images/dojocat.jpg",alt:"alt",title:"title"}})]),t._v(" "),l("h3",{attrs:{id:"二、应用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#二、应用"}},[t._v("#")]),t._v(" 二、应用")]),t._v(" "),l("p",[l("strong",[t._v("bind 的应用")])]),t._v(" "),l("ul",[l("li",[t._v("可以对一个函数预设初始参数")])]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("  function a() {\n    return Array.prototype.slice.call(arguments);\n  }\n  \n  var b = a.bind(this, 1, 2);\n  alert(b()); // 弹出 1, 2\n  \n  var s = b(10, 10);\n  alert(s); // 弹出 1, 2, 10, 10\n")])])]),l("hr")])}),[],!1,null,null,null);a.default=r.exports}}]);