(this["webpackJsonpfirst-js-project"]=this["webpackJsonpfirst-js-project"]||[]).push([[4],{512:function(e,t,n){e.exports={login:"Login_login__C84rM",input:"Login_input__2YEHv",inputPassword:"Login_inputPassword__ZVvzH",passwordIcon:"Login_passwordIcon__1zSmr",button:"Login_button__2J8ft",errorAuth:"Login_errorAuth__3mbJC"}},519:function(e,t,n){"use strict";n.r(t);var s=n(4),o=n(0),r=n(67),c=n(512),a=n.n(c),i=n(56),u=n(176),j=n(7),b=n(55),l=n(8),p=n(1),d=n(513),h=n(517),m=function(e){var t=Object(p.useState)(!0),n=Object(r.a)(t,2),s=n[0],c=n[1],j=function(){c(!s)};return Object(o.jsx)(i.b,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)},render:function(t){var n=t.handleSubmit;return Object(o.jsxs)("form",{action:"",onSubmit:n,children:[Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{component:u.a,name:"email",type:"text",placeholder:"Email",className:a.a.input})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,{component:u.a,className:"".concat(a.a.input," ").concat(a.a.inputPassword),type:s?"password":"text",name:"password",placeholder:"Password"}),s?Object(o.jsx)(d.a,{icon:h.a,onClick:j,className:a.a.passwordIcon}):Object(o.jsx)(d.a,{icon:h.b,onClick:j,className:a.a.passwordIcon})]}),e.errorAuth&&Object(o.jsx)("span",{className:a.a.errorAuth,children:e.errorAuth}),Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,{component:"input",type:"checkbox",name:"rememberMe"})," remember me"]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:a.a.button,children:"Login"})})]})}})};t.default=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,errorAuth:e.auth.errorAuth}}),{login:b.c})((function(e){return e.isAuth?Object(o.jsx)(l.a,{to:"/profile"}):Object(o.jsxs)("div",{className:a.a.login,children:[Object(o.jsx)("h1",{children:"Login"}),Object(o.jsx)(m,Object(s.a)({},e))]})}))}}]);
//# sourceMappingURL=4.7a633e0e.chunk.js.map