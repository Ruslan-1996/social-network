(this["webpackJsonpfirst-js-project"]=this["webpackJsonpfirst-js-project"]||[]).push([[0],{111:function(e,t,s){e.exports={blockFriends:"FriendsSideBar_blockFriends__2iMJn",buttonFriends:"FriendsSideBar_buttonFriends__1IB2K"}},112:function(e,t,s){e.exports={friendItem:"NavFriendItem_friendItem__3tREF",avatarUser:"NavFriendItem_avatarUser__2Q4fg"}},115:function(e,t,s){e.exports={profile:"Profile_profile__13nXA",preloaderBox:"Profile_preloaderBox__s-cO5"}},116:function(e,t,s){e.exports={posts:"MyPosts_posts__223X8",posts_title:"MyPosts_posts_title__3tsFr",newPost:"MyPosts_newPost__1RZDe",newPost_textarea:"MyPosts_newPost_textarea__2G1bL",newPost_button:"MyPosts_newPost_button__DKrux"}},117:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1qLjX",dialogs_items:"Dialogs_dialogs_items__3JY44",messages:"Dialogs_messages__1yubI",blockMessage:"Dialogs_blockMessage__1tLBT"}},118:function(e,t,s){e.exports={message:"Message_message__16buQ",messageInto:"Message_messageInto__dBjVq"}},12:function(e,t,s){"use strict";s.d(t,"c",(function(){return a})),s.d(t,"b",(function(){return o})),s.d(t,"a",(function(){return c}));var n=s(177),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3588cd03-a8ff-4f0d-9d81-9d9c39c14fdb"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/"+e)},unfollow:function(e){return r.delete("follow/"+e)},getUserProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),o.getUserProfile(e)}},o={getUserProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:s})},logout:function(){return r.delete("auth/login")}}},13:function(e,t,s){e.exports={nav:"NavBar_nav__1ZsFP",item_first:"NavBar_item_first__MOfNm",item:"NavBar_item__2oFxI",active:"NavBar_active__1EKNC",item_setting:"NavBar_item_setting__3YL6_"}},176:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return u}));var n=s(4),r=s(0),a=s(47),o=(s(1),s(72)),c=s.n(o),i=function(e){var t=e.input,s=e.meta,o=Object(a.a)(e,["input","meta"]),i=s.error&&s.touched;return Object(r.jsx)("div",{className:"".concat(c.a.formControl," ").concat(i&&c.a.errorInput),children:Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({},t),o))})},u=function(e){var t=e.input,s=e.meta,o=Object(a.a)(e,["input","meta"]),i=s.error&&s.touched;return Object(r.jsx)("div",{className:"".concat(c.a.formControl," ").concat(i&&c.a.errorInput),children:Object(r.jsx)("input",Object(n.a)(Object(n.a)({},t),o))})}},182:function(e,t,s){e.exports={news:"News_news__3SN8l"}},183:function(e,t,s){e.exports={music:"Music_music__SNPKr"}},184:function(e,t,s){e.exports={setting:"Setting_setting__3dyKB"}},185:function(e,t,s){e.exports={wrapper:"PreloaderUsers_wrapper__1HebR"}},186:function(e,t,s){e.exports={blockMessage:"BlockMessage_blockMessage__Ql4Pd"}},187:function(e,t,s){e.exports={dialogs_items:"BlockDialogsItem_dialogs_items__1Ilm8"}},190:function(e,t,s){},20:function(e,t,s){e.exports={user:"User_user__10vDW",avatarBlock:"User_avatarBlock__12Mle",avatarUser:"User_avatarUser__1CpwV",buttonFollow:"User_buttonFollow__1CNQl",profileUser:"User_profileUser__1tSXC",aboutUser:"User_aboutUser__1t7mg",nameUser:"User_nameUser__2Op41",blockCountry:"User_blockCountry__jcTk-",countyUser:"User_countyUser__3341w"}},31:function(e,t,s){e.exports={header:"Header_header__1GvhD",header_logo:"Header_header_logo__-GRmH",loginBlock:"Header_loginBlock__2MFl8",blockPhoto:"Header_blockPhoto__2jnVz",photo:"Header_photo__63AOT",photoNull:"Header_photoNull__19x9a",active:"Header_active__SB70v",buttonLogout:"Header_buttonLogout__2dCym"}},42:function(e,t,s){e.exports={profile_logo:"ProfileInfo_profile_logo__1gGmI",descriptions:"ProfileInfo_descriptions__3FOxw",descriptions_logo:"ProfileInfo_descriptions_logo__v86Dv",descriptions_text:"ProfileInfo_descriptions_text__1Bk_o",descriptions_name:"ProfileInfo_descriptions_name__22uMQ",descriptions_about:"ProfileInfo_descriptions_about__7Fcjm",contacts:"ProfileInfo_contacts__2uQFH"}},49:function(e,t,s){e.exports={post:"Post_post__1cgbX",post_content:"Post_post_content__22nR6",post_logo:"Post_post_logo__3iji_",post_text:"Post_post_text__1m5Mt",post_like:"Post_post_like__NnLKi",post_likes:"Post_post_likes__ZRgdt"}},503:function(e,t,s){},508:function(e,t,s){},509:function(e,t,s){},510:function(e,t,s){},511:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),a=s.n(r),o=function(e){e&&e instanceof Function&&s.e(5).then(s.bind(null,518)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),a(e),o(e)}))},c=(s(190),s(41)),i=s(34),u=s(4),l=s(12),d="ADD-POST",j="DELETE_POST",b="SET_USERS_PROFILE",p="TOGGLE_PRELOADER",f="SET_USER_STATUS",g={postData:[{id:1,message:"Hi, How are you?",likesCount:"189"},{id:2,message:"I'm Happy",likesCount:"95"}],newPostText:"",profile:null,isPreloader:!0,status:""},h=function(e){return{type:b,profile:e}},_=function(e){return{type:f,status:e}},m=function(e){return{type:p,preloader:e}};window.initialState=g;var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var s={id:1,message:t.newPostText,likesCount:"0"};return Object(u.a)(Object(u.a)({},e),{},{postData:[].concat(Object(i.a)(e.postData),[s]),newPostText:""});case j:return Object(u.a)(Object(u.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postId}))});case b:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case p:return Object(u.a)(Object(u.a)({},e),{},{isPreloader:t.preloader});case f:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}},x=s(30),v=s.n(x),P=s(57),w="SET_SIDE_BAR_USERS",N="PRELOADER_SIDE_BAR",U={users:[],isPreloader:!1},S=function(e){return{type:N,isPreloader:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(u.a)(Object(u.a)({},e),{},{users:Object(i.a)(t.users)});case N:return Object(u.a)(Object(u.a)({},e),{},{isPreloader:t.isPreloader});default:return e}},C=(s(208),"ADD-NEW-MESSAGE"),y={messageData:[{id:1,message:"Hi"},{id:1,message:"How are you?"},{id:1,message:"Bye"}],dialogsData:[{id:1,name:"Sun",avatarUser:"https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png"},{id:2,name:"Teacher",avatarUser:"https://ikeacity.by/UserFiles/products/images2/large/903/684/47/doska-molbert-ikea-mola-0.jpg"},{id:3,name:"Nikitka",avatarUser:"https://www.meme-arsenal.com/memes/5608fd17a92284aa78fdf6ec089a3c97.jpg"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var s={id:1,message:t.message};return Object(u.a)(Object(u.a)({},e),{},{messageData:[].concat(Object(i.a)(e.messageData),[s])});default:return e}},D="ruslnetwork/usersReducer/FOLLOW",R="ruslnetwork/usersReducer/UNFOLLOW",E="ruslnetwork/usersReducer/SET-USERS",M="ruslnetwork/usersReducer/SET_USERS_CURRENT_PAGE",F="ruslnetwork/usersReducer/SET_TOTAL_USERS_COUNT",T="ruslnetwork/usersReducer/TOGGLE_PRELOADER",A="ruslnetwork/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS",B={usersData:[],pageSize:20,totalUsersCount:11,currentPage:1,isPreloader:!0,followingInProgress:[]},L=function(e){return{type:D,userId:e}},z=function(e){return{type:R,userId:e}},H=function(e){return{type:E,userId:e}},W=function(e){return{type:F,totalUsersCount:e}},G=function(e){return{type:T,preloader:e}},J=function(e,t){return{type:A,preloader:e,userId:t}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(u.a)(Object(u.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case R:return Object(u.a)(Object(u.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case E:return Object(u.a)(Object(u.a)({},e),{},{usersData:Object(i.a)(t.userId)});case M:return Object(u.a)(Object(u.a)({},e),{},{currentPage:+t.numberPage});case F:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.totalUsersCount});case T:return Object(u.a)(Object(u.a)({},e),{},{isPreloader:t.preloader});case A:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.preloader?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Q=s(55),X=s(180),V="ruslnetwork/appReducer/INITIALIZED_SUCCESS",Z={initialized:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}},Y=Object(c.c)({profileReducer:O,dialogsReducer:I,sideBarReducer:k,usersReducer:K,auth:Q.a,app:q}),$=Object(c.e)(Y,Object(c.a)(X.a));window.store=$;var ee=$,te=s(23),se=s.n(te),ne=s(37),re=s(38),ae=s(40),oe=s(39),ce=s(6),ie=s(8),ue=(s(503),s(13)),le=s.n(ue),de=s(111),je=s.n(de),be=s(112),pe=s.n(be),fe=s.p+"static/media/user.affd02bf.png",ge=function(e){return Object(n.jsxs)(ce.b,{disabled:e.isPreloader&&!0,onClick:function(){e.getUserProfileSideBar(e.id)},to:"/profile/".concat(e.id),className:pe.a.friendItem,children:[Object(n.jsx)("img",{src:e.avatarUser?e.avatarUser:fe,alt:"avatar",className:pe.a.avatarUser}),e.name]})},he=function(e){var t=e.nameUserElement.map((function(t){return Object(n.jsx)(ge,{name:t.name,avatarUser:t.photos.small,id:t.id,isPreloader:e.isPreloader,getUserProfileSideBar:e.getUserProfileSideBar},t.id)}));return Object(n.jsxs)("nav",{children:[Object(n.jsx)(ce.b,{to:"/users",className:je.a.buttonFriends,children:"Friends"}),Object(n.jsx)("div",{className:je.a.blockFriends,children:t})]})},_e=s(7),me=Object(_e.b)((function(e){return{nameUserElement:e.sideBarReducer.users,isPreloader:e.sideBarReducer.users}}),{getUserProfileSideBar:function(e){return function(t){t(h(null)),t(S(!0)),t(m(!0)),l.c.getUserProfile(e).then((function(e){t(m(!1)),t(S(!1)),t(h(e.data))}))}}})(he),Oe=function(e){return Object(n.jsxs)("nav",{className:le.a.nav,children:[Object(n.jsx)("div",{className:"".concat(le.a.item," ").concat(le.a.item_first),children:Object(n.jsx)(ce.b,{to:"/profile",activeClassName:le.a.active,children:"Profile"})}),Object(n.jsx)("div",{className:le.a.item,children:Object(n.jsx)(ce.b,{to:"/dialog",activeClassName:le.a.active,children:"Message"})}),Object(n.jsx)("div",{className:le.a.item,children:Object(n.jsx)(ce.b,{to:"/news",activeClassName:le.a.active,children:"News"})}),Object(n.jsx)("div",{className:le.a.item,children:Object(n.jsx)(ce.b,{to:"/music",activeClassName:le.a.active,children:"Music"})}),Object(n.jsx)("div",{className:le.a.item,children:Object(n.jsx)(ce.b,{to:"/users",activeClassName:le.a.active,children:"Users"})}),Object(n.jsx)("div",{className:"".concat(le.a.item," ").concat(le.a.item_setting),children:Object(n.jsx)(ce.b,{to:"/setting",activeClassName:le.a.active,children:"Setting"})}),Object(n.jsx)(me,{})]})},xe=s(182),ve=s.n(xe),Pe=function(){return Object(n.jsx)("div",{className:ve.a.news,children:"News"})},we=s(183),Ne=s.n(we),Ue=function(e){return Object(n.jsx)("div",{className:Ne.a.music,children:"Music"})},Se=s(184),ke=s.n(Se),Ce=function(){return Object(n.jsx)("div",{className:ke.a.setting,children:"Setting"})},ye=s(86),Ie=s.n(ye),De=s(47),Re=s(20),Ee=s.n(Re),Me=(s(508),function(e){return Object(n.jsxs)("div",{className:"lds-ellipsis",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})}),Fe=function(e){var t=e.user,s=Object(De.a)(e,["user"]);return Object(n.jsxs)("div",{className:Ee.a.user,children:[Object(n.jsxs)("div",{className:Ee.a.avatarBlock,children:[Object(n.jsx)(ce.b,{to:"/profile/".concat(t.id),children:Object(n.jsx)("img",{className:Ee.a.avatarUser,src:null!=t.photos.large?t.photos.large:fe,alt:"avatar"})}),t.followed?Object(n.jsx)("button",{disabled:s.followingInProgress.some((function(e){return e===t.id})),onClick:function(){s.unfollow(t.id)},className:Ee.a.buttonFollow,children:s.followingInProgress.some((function(e){return e===t.id}))?Object(n.jsx)(Me,{}):"Unfollow"}):Object(n.jsx)("button",{disabled:s.followingInProgress.some((function(e){return e===t.id})),onClick:function(){s.follow(t.id)},className:Ee.a.buttonFollow,children:s.followingInProgress.some((function(e){return e===t.id}))?Object(n.jsx)(Me,{}):"Follow"})]}),Object(n.jsxs)("div",{className:Ee.a.profileUser,children:[Object(n.jsxs)("div",{className:Ee.a.aboutUser,children:[Object(n.jsx)("div",{className:Ee.a.nameUser,children:t.name}),Object(n.jsx)("div",{className:Ee.a.bio,children:t.status})]}),Object(n.jsxs)("div",{className:Ee.a.blockCountry,children:[Object(n.jsx)("div",{className:Ee.a.countyUser,children:"user.country"}),Object(n.jsx)("div",{className:Ee.a.cityUser,children:"user.city"})]})]})]})},Te=s(67),Ae=s(70),Be=s.n(Ae),Le=function(e){for(var t=e.portionSize,s=void 0===t?20:t,a=Object(De.a)(e,["portionSize"]),o=Math.ceil(a.totalItemsCount/a.pageSize),c=[],i=1;i<=o;i++)c.push(i);var u=Math.ceil(o/s),l=Object(r.useState)(Math.ceil(a.currentPage/s)),d=Object(Te.a)(l,2),j=d[0],b=d[1],p=(j-1)*s+1,f=j*s;return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{disabled:1===j&&!0,className:Be.a.buttonChangeList,onClick:function(){b(j-1)},children:"Last"}),c.filter((function(e){return e>=p&&e<=f})).map((function(e){return Object(n.jsx)("button",{onClick:function(){return a.onPageChanged(e)},className:"".concat(Be.a.numbersPage," ").concat(a.currentPage===e&&Be.a.selectedPage),children:e})})),Object(n.jsx)("button",{disabled:j===u&&!0,className:Be.a.buttonChangeList,onClick:function(){b(j+1)},children:"Next"})]})},ze=function(e){for(var t=e.usersData.map((function(t){return Object(n.jsx)(Fe,{follow:e.follow,unfollow:e.unfollow,user:t,currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,followingInProgress:e.followingInProgress})})),s=Math.ceil(e.totalUsersCount/e.pageSize),r=[],a=1;a<=s;a++)r.push(a);return Object(n.jsxs)("div",{className:Ie.a.wrapper,children:[Object(n.jsx)("select",{onChange:function(t){e.onPageChanged(t.target.value)},value:e.currentPage,className:Ie.a.selectPage,children:r.map((function(e){return Object(n.jsxs)("option",{className:Ie.a.optionPage,children:[e," "]})}))}),t,Object(n.jsx)(Le,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged})]})},He=s(185),We=s.n(He),Ge=(s(509),function(e){return Object(n.jsxs)("div",{className:"lds-ring",children:[Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}}),Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}}),Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}}),Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}})]})}),Je=function(e){return Object(n.jsx)("div",{className:We.a.wrapper,children:Object(n.jsx)(Ge,{height:"500px",width:"500px",borderWidth:"40px"})})},Ke=function(e){Object(ae.a)(s,e);var t=Object(oe.a)(s);function s(){var e;Object(ne.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setUsersCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(re.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:this.props.isPreloader?Object(n.jsx)(Je,{}):Object(n.jsx)(ze,{follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,usersData:this.props.usersData,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,followingInProgress:this.props.followingInProgress})})}}]),s}(a.a.Component),Qe=Object(_e.b)((function(e){return{usersData:e.usersReducer.usersData,pageSize:e.usersReducer.pageSize,totalUsersCount:e.usersReducer.totalUsersCount,currentPage:e.usersReducer.currentPage,isPreloader:e.usersReducer.isPreloader,followingInProgress:e.usersReducer.followingInProgress}}),{follow:function(e){return function(){var t=Object(P.a)(v.a.mark((function t(s){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(J(!0,e)),t.next=3,l.c.follow(e);case 3:0===t.sent.data.resultCode&&s(L(e)),s(J(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(v.a.mark((function t(s){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(J(!0,e)),t.next=3,l.c.unfollow(e);case 3:0===t.sent.data.resultCode&&s(z(e)),s(J(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:H,setUsersCurrentPage:function(e){return{type:M,numberPage:e}},setTotalUsersCount:W,setPreloaderToggle:G,toggleFollowingProgress:J,getUsers:function(e,t){return function(){var s=Object(P.a)(v.a.mark((function s(n){var r;return v.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n(G(!0)),s.next=3,l.c.getUsers(e,t);case 3:r=s.sent,n(G(!1)),n(H(r.items)),n(W(r.totalCount));case 7:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})(Ke),Xe=s(115),Ve=s.n(Xe),Ze=s(42),qe=s.n(Ze),Ye=(s(510),function(e){var t=Object(r.useState)(!1),s=Object(Te.a)(t,2),a=s[0],o=s[1],c=Object(r.useState)(e.status),i=Object(Te.a)(c,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){l(e.status)}),[e.status]),Object(n.jsx)("div",{children:a?Object(n.jsxs)("div",{className:"StatusProfile_inputBlock",children:[Object(n.jsx)("input",{autoFocus:!0,onChange:function(e){l(e.target.value)},value:u,type:"text",className:"StatusProfile_input"}),Object(n.jsx)("button",{onClick:function(){o(!1),e.updateUserStatus(u)},className:"StatusProfile_inputButton",children:Object(n.jsx)("i",{className:"check"})})]}):Object(n.jsx)("div",{onDoubleClick:function(){o(!0)},className:"StatusProfile_status",children:u||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"})})}),$e=function(e){return Object(n.jsx)("img",{className:qe.a.profile_logo,src:e.image,alt:""})},et=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)($e,{image:"https://www.komandirovka.ru/upload/save_file33/bf5/bf5c6f100d3d620c48787b3714cb4fea.jpg"}),Object(n.jsxs)("div",{className:qe.a.descriptions,children:[Object(n.jsx)("img",{className:qe.a.descriptions_logo,src:null!=e.profile.photos.large?e.profile.photos.large:fe}),Object(n.jsxs)("div",{className:qe.a.descriptions_text,children:[Object(n.jsx)("div",{className:qe.a.descriptions_name,children:e.profile.fullName}),Object(n.jsx)(Ye,{status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsxs)("div",{className:qe.a.descriptions_about,children:[Object(n.jsxs)("p",{children:["\u0418\u0449\u0435\u0448\u044c \u0440\u0430\u0431\u043e\u0442\u0443: ",e.profile.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"]}),e.profile.lookingForAJobDescription?Object(n.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: ",e.profile.lookingForAJobDescription]}):null,Object(n.jsx)("p",{className:qe.a.contacts,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),e.profile.contacts.facebook?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 facebook: ",e.profile.contacts.facebook]}):null,e.profile.contacts.website?Object(n.jsxs)("p",{children:["\u041c\u043e\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442: ",e.profile.contacts.website]}):null,e.profile.contacts.vk?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435: ",e.profile.contacts.vk]}):null,e.profile.contacts.twitter?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 twitter: ",e.profile.contacts.twitter]}):null,e.profile.contacts.instagram?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 instagram: ",e.profile.contacts.instagram]}):null,e.profile.contacts.youtube?Object(n.jsxs)("p",{children:["\u041c\u043e\u0439 \u043a\u0430\u043d\u0430\u043b \u043d\u0430 youtube: ",e.profile.contacts.youtube]}):null,e.profile.contacts.github?Object(n.jsxs)("p",{children:["\u041c\u043e\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430 github: ",e.profile.contacts.github]}):null,e.profile.contacts.mainLink?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 mainLink: ",e.profile.contacts.mainLink]}):null]})]})]})]})},tt=s(116),st=s.n(tt),nt=s(49),rt=s.n(nt),at=function(e){return Object(n.jsxs)("div",{className:rt.a.post,children:[Object(n.jsxs)("div",{className:rt.a.post_content,children:[Object(n.jsx)("img",{className:rt.a.post_logo,src:e.photos?e.photos:fe,alt:"avatar"}),Object(n.jsx)("p",{className:rt.a.post_text,children:e.message})]}),Object(n.jsx)("button",{id:"button",className:rt.a.post_like,children:"like"}),Object(n.jsx)("div",{className:rt.a.post_likes,id:"like",children:e.likes})]})},ot=s(71),ct=s.n(ot),it=s(56),ut=function(e){if(!e)return"Field is required"},lt=s(176),dt=function(e){var t=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return function(e){return t.reduce((function(t,s){return t||s(e)}),void 0)}};return Object(n.jsx)(it.b,{onSubmit:function(t){e.addPost(t.inputNewPost)},children:function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,className:ct.a.newPost,children:[Object(n.jsx)(it.a,{component:lt.b,name:"inputNewPost",className:ct.a.newPost_textarea,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430",validate:t(ut,(s=10,function(e){if(e&&e.length>s)return"Max length is ".concat(s," symbols")}))}),Object(n.jsx)("button",{disabled:e.hasValidationErrors&&!0,className:"".concat(ct.a.newPost_button," \n                    ").concat(e.hasValidationErrors&&ct.a.disabled),children:"Send"})]});var s}})},jt=function(e){return Object(n.jsx)(dt,{addPost:e.addPost})},bt=Object(_e.b)((function(e){return{newPostText:e.profileReducer.newPostText}}),{addPost:function(e){return{type:d,newPostText:e}}})(jt),pt=function(e){var t=e.postData.map((function(t){return Object(n.jsx)(at,{message:t.message,likes:t.likesCount,photos:e.photos})}));return Object(n.jsxs)("div",{className:st.a.posts,children:[Object(n.jsx)("div",{className:st.a.posts_title,children:"My Posts"}),Object(n.jsx)(bt,{}),t]})},ft=function(e){return e.profile?Object(n.jsxs)("div",{className:Ve.a.profile,children:[Object(n.jsx)(et,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsx)(pt,{photos:e.profile.photos.small,postData:e.postData})]}):Object(n.jsx)("div",{className:Ve.a.preloaderBox,children:Object(n.jsx)(Je,{})})},gt=function(e){Object(ae.a)(s,e);var t=Object(oe.a)(s);function s(){return Object(ne.a)(this,s),t.apply(this,arguments)}return Object(re.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e&&(this.props.getUserProfile(e),this.props.getUserStatus(e))}},{key:"componentDidUpdate",value:function(e,t,s){}},{key:"render",value:function(){return Object(n.jsx)(ft,Object(u.a)({},this.props))}}]),s}(a.a.Component),ht=Object(c.d)(Object(_e.b)((function(e){return{profile:e.profileReducer.profile,postData:e.profileReducer.postData,status:e.profileReducer.status,authorizedUserId:e.auth.id}}),{getUserProfile:function(e){return function(t){t(h(null)),t(m(!0)),l.c.getUserProfile(e).then((function(e){t(m(!1)),t(h(e.data))}))}},getUserStatus:function(e){return function(t){l.b.getStatus(e).then((function(e){t(_(e.data))}))}},updateUserStatus:function(e){return function(t){l.b.updateStatus(e).then((function(s){0===s.data.resultCode&&t(_(e))}))}}}),ie.f)(gt),_t=s(31),mt=s.n(_t),Ot=function(e){return Object(n.jsxs)("header",{className:mt.a.header,children:[Object(n.jsx)("div",{className:mt.a.header_logo,children:"RUSLNETWORK"}),e.isAuth?Object(n.jsxs)(ce.b,{to:"/profile",className:mt.a.loginBlock,children:[Object(n.jsx)("span",{children:Object(n.jsx)("div",{className:mt.a.blockPhoto,children:e.userPhoto?Object(n.jsx)("img",{src:e.userPhoto,alt:"",className:mt.a.photo}):Object(n.jsx)("img",{src:fe,alt:"",className:mt.a.photoNull})})}),Object(n.jsx)("span",{children:e.login}),Object(n.jsx)("button",{onClick:e.logout,className:mt.a.buttonLogout,children:"Logout"})]}):Object(n.jsx)(ce.b,{to:"/login",className:mt.a.loginBlock,activeClassName:mt.a.active,children:"Login"})]})},xt=function(e){Object(ae.a)(s,e);var t=Object(oe.a)(s);function s(){return Object(ne.a)(this,s),t.apply(this,arguments)}return Object(re.a)(s,[{key:"render",value:function(){return Object(n.jsx)(Ot,Object(u.a)({},this.props))}}]),s}(a.a.Component),vt=Object(_e.b)((function(e){return{login:e.auth.login,email:e.auth.email,isAuth:e.auth.isAuth}}),{logout:Q.d})(xt),Pt=s(117),wt=s.n(Pt),Nt=s(73),Ut=s.n(Nt),St=function(e){return Object(n.jsx)(it.b,{onSubmit:function(t){e.addNewMessage(t.textAreaMessage)},render:function(e){var t=e.handleSubmit;e.form;return Object(n.jsxs)("form",{onSubmit:t,className:Ut.a.inputMessage,children:[Object(n.jsx)(it.a,{component:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",name:"textAreaMessage",className:Ut.a.textMessage}),Object(n.jsx)("button",{className:Ut.a.buttonSend,children:Object(n.jsx)("img",{className:Ut.a.buttonImg,src:"https://img.icons8.com/plumpy/96/000000/filled-sent.png",alt:""})})]})}})},kt=function(e){return Object(n.jsx)(St,{addNewMessage:e.addNewMessage})},Ct=Object(_e.b)((function(e){return{newMessageText:e.dialogsReducer.newMessageText}}),{addNewMessage:function(e){return{type:C,message:e}}})(kt),yt=s(186),It=s.n(yt),Dt=s(118),Rt=s.n(Dt),Et=function(e){return Object(n.jsx)("div",{className:Rt.a.message,children:Object(n.jsx)("div",{className:Rt.a.messageInto,children:e.message})})},Mt=function(e){var t=e.messageElement.map((function(e){return Object(n.jsx)(Et,{message:e.message})}));return Object(n.jsx)("div",{className:It.a.blockMessage,children:t})},Ft=Object(_e.b)((function(e){return{messageElement:e.dialogsReducer.messageData}}))(Mt),Tt=s(187),At=s.n(Tt),Bt=s(74),Lt=s.n(Bt),zt=function(e){var t="/dialog/"+e.id;return Object(n.jsx)("div",{className:Lt.a.dialog,children:Object(n.jsxs)(ce.b,{to:t,activeClassName:Lt.a.active,children:[Object(n.jsx)("img",{className:Lt.a.avatarUser,src:e.avatarUser,alt:"avatar"}),Object(n.jsx)("span",{className:Lt.a.nameUser,children:e.name})]})})},Ht=function(e){var t=e.dialogElement.map((function(e){return Object(n.jsx)(zt,{name:e.name,id:e.id,avatarUser:e.avatarUser})}));return Object(n.jsx)("div",{className:At.a.dialogs_items,children:t})},Wt=Object(_e.b)((function(e){return{dialogElement:e.dialogsReducer.dialogsData}}))(Ht),Gt=function(e){return{isAuth:e.auth.isAuth}},Jt=function(e){return Object(_e.b)(Gt)((function(t){return t.isAuth?Object(n.jsx)(e,Object(u.a)({},t)):Object(n.jsx)(ie.a,{to:"login"})}))}((function(e){return Object(n.jsxs)("div",{className:wt.a.dialogs,children:[Object(n.jsx)(Wt,{}),Object(n.jsxs)("div",{className:wt.a.messages,children:[Object(n.jsx)(Ft,{}),Object(n.jsx)(Ct,{})]})]})})),Kt=function(e){return function(t){return Object(n.jsx)(a.a.Suspense,{fallback:Object(n.jsx)("div",{className:"preloaderSuspense",children:Object(n.jsx)(Ge,{height:"500px",width:"500px",borderWidth:"40px"})}),children:Object(n.jsx)(e,Object(u.a)({},t))})}},Qt=a.a.lazy((function(){return Promise.all([s.e(3),s.e(4)]).then(s.bind(null,519))})),Xt=function(e){Object(ae.a)(s,e);var t=Object(oe.a)(s);function s(){return Object(ne.a)(this,s),t.apply(this,arguments)}return Object(re.a)(s,[{key:"componentDidMount",value:function(){this.props.initializeApp(this.props.id)}},{key:"render",value:function(){return this.props.initialize?Object(n.jsx)(ce.a,{children:Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(vt,{}),Object(n.jsx)(Oe,{}),Object(n.jsxs)("div",{className:"app-content",children:[Object(n.jsx)(ie.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(ht,{})}}),Object(n.jsx)(ie.b,{path:"/dialog",render:function(){return Object(n.jsx)(Jt,{})}}),Object(n.jsx)(ie.b,{path:"/news",render:function(){return Object(n.jsx)(Pe,{})}}),Object(n.jsx)(ie.b,{path:"/music",render:function(){return Object(n.jsx)(Ue,{})}}),Object(n.jsx)(ie.b,{path:"/setting",render:function(){return Object(n.jsx)(Ce,{})}}),Object(n.jsx)(ie.b,{path:"/users",render:function(){return Object(n.jsx)(Qe,{})}}),Object(n.jsx)(ie.b,{path:"/login",render:Kt(Qt)})]})]})}):Object(n.jsx)("div",{className:"preloader",children:Object(n.jsx)(Ge,{height:"500px",width:"500px",borderWidth:"40px"})})}}]),s}(a.a.Component),Vt=Object(_e.b)((function(e){return{id:e.auth.id,initialize:e.app.initialized}}),{initializeApp:function(e){return function(t){var s=t(Object(Q.b)(e)),n=t(function(){var e=Object(P.a)(v.a.mark((function e(t){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,l.c.getUsers(1,3);case 3:s=e.sent,t((n=s.items,{type:w,users:n}));case 5:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all([s,n]).then((function(){t({type:V})}))}}})(Xt);se.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(_e.a,{store:ee,children:Object(n.jsx)(Vt,{})})}),document.getElementById("root")),o()},55:function(e,t,s){"use strict";s.d(t,"c",(function(){return d})),s.d(t,"d",(function(){return j})),s.d(t,"b",(function(){return b}));var n=s(4),r=s(12),a="ruslnetwork/authReducer/SET_USER_DATA",o="ruslnetwork/authReducer/ADD_USER_PHOTO",c="ruslnetwork/authReducer/ERROR_AUTH",i={id:null,login:null,email:null,isFetching:!1,isAuth:!1,userPhoto:"",errorAuth:null},u=function(e,t,s,n){return{type:a,payload:{id:e,login:t,email:s,isAuth:n}}},l=function(e){return{type:c,message:e}},d=function(e,t,s){return function(n){r.a.login(e,t,s).then((function(e){0===e.data.resultCode?(n(b()),n(l(null))):n(l(e.data.messages[0]))}))}},j=function(){return function(e){r.a.logout().then((function(t){e(u(null,null,null,!1))}))}},b=function(e){return function(t){return r.a.me().then((function(s){0===s.data.resultCode&&t(u(s.data.data.id,s.data.data.login,s.data.data.email,!0)),e&&r.c.getUserProfile(e).then((function(e){var s;t((s=e.data.photos.small,{type:o,userPhoto:s}))}))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(n.a)(Object(n.a)({},e),t.payload);case o:return Object(n.a)(Object(n.a)({},e),{},{userPhoto:t.userPhoto});case c:return Object(n.a)(Object(n.a)({},e),{},{errorAuth:t.message});default:return e}}},70:function(e,t,s){e.exports={buttonChangeList:"Paginator_buttonChangeList__2Pcro",numbersPage:"Paginator_numbersPage__2dMmH",selectedPage:"Paginator_selectedPage__3N0Wc"}},71:function(e,t,s){e.exports={newPost:"NewPost_newPost__gckab",newPost_textarea:"NewPost_newPost_textarea__2Eb51",newPost_button:"NewPost_newPost_button__3EsHI",disabled:"NewPost_disabled__3z2-l"}},72:function(e,t,s){e.exports={formControl:"FormsControls_formControl__1eqP1",errorInput:"FormsControls_errorInput__Filto",errorTextarea:"FormsControls_errorTextarea__stxTP"}},73:function(e,t,s){e.exports={inputMessage:"InputMessage_inputMessage__lnSYt",textMessage:"InputMessage_textMessage__2TeLS",buttonSend:"InputMessage_buttonSend__3RzUJ",buttonImg:"InputMessage_buttonImg__PPXw-"}},74:function(e,t,s){e.exports={dialog:"DialogsItem_dialog__1uTuI",active:"DialogsItem_active__1jgbh",avatarUser:"DialogsItem_avatarUser__3Dwfb",nameUser:"DialogsItem_nameUser__1JDz-"}},86:function(e,t,s){e.exports={wrapper:"Users_wrapper__2IDO-",selectPage:"Users_selectPage__3xoGZ",optionPage:"Users_optionPage__ikGdl"}}},[[511,1,2]]]);
//# sourceMappingURL=main.944ba365.chunk.js.map