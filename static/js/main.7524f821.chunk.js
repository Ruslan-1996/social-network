(this["webpackJsonpfirst-js-project"]=this["webpackJsonpfirst-js-project"]||[]).push([[0],{113:function(e,t,s){e.exports={blockFriends:"FriendsSideBar_blockFriends__2iMJn",buttonFriends:"FriendsSideBar_buttonFriends__1IB2K"}},116:function(e,t,s){e.exports={profile:"Profile_profile__13nXA",preloaderBox:"Profile_preloaderBox__s-cO5"}},117:function(e,t,s){e.exports={posts:"MyPosts_posts__223X8",posts_title:"MyPosts_posts_title__3tsFr",newPost:"MyPosts_newPost__1RZDe",newPost_textarea:"MyPosts_newPost_textarea__2G1bL",newPost_button:"MyPosts_newPost_button__DKrux"}},118:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1qLjX",dialogs_items:"Dialogs_dialogs_items__3JY44",messages:"Dialogs_messages__1yubI",blockMessage:"Dialogs_blockMessage__1tLBT"}},119:function(e,t,s){e.exports={message:"Message_message__16buQ",messageInto:"Message_messageInto__dBjVq"}},12:function(e,t,s){e.exports={nav:"NavBar_nav__1ZsFP",item_first:"NavBar_item_first__MOfNm",item:"NavBar_item__2oFxI",active:"NavBar_active__1EKNC",item_setting:"NavBar_item_setting__3YL6_"}},13:function(e,t,s){"use strict";s.d(t,"c",(function(){return a})),s.d(t,"b",(function(){return o})),s.d(t,"a",(function(){return c}));var n=s(111),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3588cd03-a8ff-4f0d-9d81-9d9c39c14fdb"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/"+e)},unfollow:function(e){return r.delete("follow/"+e)},getUserProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),o.getUserProfile(e)}},o={getUserProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:s})},logout:function(){return r.delete("auth/login")}}},177:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return u}));var n=s(4),r=s(0),a=s(47),o=(s(1),s(72)),c=s.n(o),i=function(e){var t=e.input,s=e.meta,o=Object(a.a)(e,["input","meta"]),i=s.error&&s.touched;return Object(r.jsx)("div",{className:"".concat(c.a.formControl," ").concat(i&&c.a.errorInput),children:Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({},t),o))})},u=function(e){var t=e.input,s=e.meta,o=Object(a.a)(e,["input","meta"]),i=s.error&&s.touched;return Object(r.jsx)("div",{className:"".concat(c.a.formControl," ").concat(i&&c.a.errorInput),children:Object(r.jsx)("input",Object(n.a)(Object(n.a)({},t),o))})}},182:function(e,t,s){e.exports={news:"News_news__3SN8l"}},183:function(e,t,s){e.exports={music:"Music_music__SNPKr"}},184:function(e,t,s){e.exports={setting:"Setting_setting__3dyKB"}},185:function(e,t,s){e.exports={wrapper:"PreloaderUsers_wrapper__1HebR"}},186:function(e,t,s){e.exports={blockMessage:"BlockMessage_blockMessage__Ql4Pd"}},187:function(e,t,s){e.exports={dialogs_items:"BlockDialogsItem_dialogs_items__1Ilm8"}},190:function(e,t,s){},20:function(e,t,s){e.exports={user:"User_user__10vDW",avatarBlock:"User_avatarBlock__12Mle",avatarUser:"User_avatarUser__1CpwV",buttonFollow:"User_buttonFollow__1CNQl",profileUser:"User_profileUser__1tSXC",aboutUser:"User_aboutUser__1t7mg",nameUser:"User_nameUser__2Op41",blockCountry:"User_blockCountry__jcTk-",countyUser:"User_countyUser__3341w"}},31:function(e,t,s){e.exports={header:"Header_header__1GvhD",header_logo:"Header_header_logo__-GRmH",loginBlock:"Header_loginBlock__2MFl8",blockPhoto:"Header_blockPhoto__2jnVz",photo:"Header_photo__63AOT",photoNull:"Header_photoNull__19x9a",active:"Header_active__SB70v",buttonLogout:"Header_buttonLogout__2dCym"}},42:function(e,t,s){e.exports={profile_logo:"ProfileInfo_profile_logo__1gGmI",descriptions:"ProfileInfo_descriptions__3FOxw",descriptions_logo:"ProfileInfo_descriptions_logo__v86Dv",descriptions_text:"ProfileInfo_descriptions_text__1Bk_o",descriptions_name:"ProfileInfo_descriptions_name__22uMQ",descriptions_about:"ProfileInfo_descriptions_about__7Fcjm",contacts:"ProfileInfo_contacts__2uQFH"}},49:function(e,t,s){e.exports={post:"Post_post__1cgbX",post_content:"Post_post_content__22nR6",post_logo:"Post_post_logo__3iji_",post_text:"Post_post_text__1m5Mt",post_like:"Post_post_like__NnLKi",post_likes:"Post_post_likes__ZRgdt"}},503:function(e,t,s){},508:function(e,t,s){},509:function(e,t,s){},510:function(e,t,s){},511:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),a=s.n(r),o=function(e){e&&e instanceof Function&&s.e(5).then(s.bind(null,518)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),a(e),o(e)}))},c=(s(190),s(41)),i=s(34),u=s(4),l=s(13),d="ADD-POST",j="DELETE_POST",b="SET_USERS_PROFILE",p="TOGGLE_PRELOADER",f="SET_USER_STATUS",h={postData:[{id:1,message:"Hi, How are you?",likesCount:"189"},{id:2,message:"I'm Happy",likesCount:"95"}],newPostText:"",profile:null,isPreloader:!0,status:""},g=function(e){return{type:b,profile:e}},_=function(e){return{type:f,status:e}},m=function(e){return{type:p,preloader:e}};window.initialState=h;var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var s={id:1,message:t.newPostText,likesCount:"0"};return Object(u.a)(Object(u.a)({},e),{},{postData:[].concat(Object(i.a)(e.postData),[s]),newPostText:""});case j:return Object(u.a)(Object(u.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postId}))});case b:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case p:return Object(u.a)(Object(u.a)({},e),{},{isPreloader:t.preloader});case f:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}},x=s(30),v=s.n(x),P=s(57),w="SET_SIDE_BAR_USERS",N="PRELOADER_SIDE_BAR",U={users:[],isPreloader:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(u.a)(Object(u.a)({},e),{},{users:Object(i.a)(t.users)});case N:return Object(u.a)(Object(u.a)({},e),{},{isPreloader:t.isPreloader});default:return e}},S=(s(208),"ADD-NEW-MESSAGE"),I={messageData:[{id:1,message:"Hi"},{id:1,message:"How are you?"},{id:1,message:"Bye"}],dialogsData:[{id:1,name:"Sun",avatarUser:"https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png"},{id:2,name:"Teacher",avatarUser:"https://ikeacity.by/UserFiles/products/images2/large/903/684/47/doska-molbert-ikea-mola-0.jpg"},{id:3,name:"Nikitka",avatarUser:"https://www.meme-arsenal.com/memes/5608fd17a92284aa78fdf6ec089a3c97.jpg"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var s={id:1,message:t.message};return Object(u.a)(Object(u.a)({},e),{},{messageData:[].concat(Object(i.a)(e.messageData),[s])});default:return e}},C="ruslnetwork/usersReducer/FOLLOW",D="ruslnetwork/usersReducer/UNFOLLOW",R="ruslnetwork/usersReducer/SET-USERS",E="ruslnetwork/usersReducer/SET_USERS_CURRENT_PAGE",M="ruslnetwork/usersReducer/SET_TOTAL_USERS_COUNT",F="ruslnetwork/usersReducer/TOGGLE_PRELOADER",T="ruslnetwork/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS",A={usersData:[],pageSize:20,totalUsersCount:11,currentPage:1,isPreloader:!0,followingInProgress:[]},L=function(e){return{type:C,userId:e}},B=function(e){return{type:D,userId:e}},z=function(e){return{type:R,userId:e}},H=function(e){return{type:M,totalUsersCount:e}},W=function(e){return{type:F,preloader:e}},G=function(e,t){return{type:T,preloader:e,userId:t}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(u.a)(Object(u.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case D:return Object(u.a)(Object(u.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case R:return Object(u.a)(Object(u.a)({},e),{},{usersData:Object(i.a)(t.userId)});case E:return Object(u.a)(Object(u.a)({},e),{},{currentPage:+t.numberPage});case M:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.totalUsersCount});case F:return Object(u.a)(Object(u.a)({},e),{},{isPreloader:t.preloader});case T:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.preloader?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},K=s(55),Q=s(180),X="ruslnetwork/appReducer/INITIALIZED_SUCCESS",V={initialized:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}},q=Object(c.c)({profileReducer:O,dialogsReducer:y,sideBarReducer:k,usersReducer:J,auth:K.a,app:Z}),Y=Object(c.e)(q,Object(c.a)(Q.a));window.store=Y;var $=Y,ee=s(23),te=s.n(ee),se=s(37),ne=s(38),re=s(40),ae=s(39),oe=s(6),ce=s(8),ie=(s(503),s(12)),ue=s.n(ie),le=s(113),de=s.n(le),je=s(86),be=s.n(je),pe=s.p+"static/media/user.affd02bf.png",fe=function(e){return Object(n.jsxs)(oe.b,{to:"/profile/".concat(e.id),className:be.a.friendItem,children:[Object(n.jsx)("img",{src:e.avatarUser?e.avatarUser:pe,alt:"avatar",className:be.a.avatarUser}),Object(n.jsx)("span",{className:be.a.name,children:e.name})]})},he=function(e){var t=e.nameUserElement.map((function(t){return Object(n.jsx)(fe,{name:t.name,avatarUser:t.photos.small,id:t.id,isPreloader:e.isPreloader},t.id)}));return Object(n.jsxs)("nav",{children:[Object(n.jsx)(oe.b,{to:"/users",className:de.a.buttonFriends,children:"Friends"}),Object(n.jsx)("div",{className:de.a.blockFriends,children:t})]})},ge=s(7),_e=Object(ge.b)((function(e){return{nameUserElement:e.sideBarReducer.users,isPreloader:e.sideBarReducer.users}}))(he),me=function(e){return Object(n.jsxs)("nav",{className:ue.a.nav,children:[Object(n.jsx)("div",{className:"".concat(ue.a.item," ").concat(ue.a.item_first),children:Object(n.jsx)(oe.b,{to:"/profile",activeClassName:ue.a.active,children:"Profile"})}),Object(n.jsx)("div",{className:ue.a.item,children:Object(n.jsx)(oe.b,{to:"/dialog",activeClassName:ue.a.active,children:"Message"})}),Object(n.jsx)("div",{className:ue.a.item,children:Object(n.jsx)(oe.b,{to:"/news",activeClassName:ue.a.active,children:"News"})}),Object(n.jsx)("div",{className:ue.a.item,children:Object(n.jsx)(oe.b,{to:"/music",activeClassName:ue.a.active,children:"Music"})}),Object(n.jsx)("div",{className:ue.a.item,children:Object(n.jsx)(oe.b,{to:"/users",activeClassName:ue.a.active,children:"Users"})}),Object(n.jsx)("div",{className:"".concat(ue.a.item," ").concat(ue.a.item_setting),children:Object(n.jsx)(oe.b,{to:"/setting",activeClassName:ue.a.active,children:"Setting"})}),Object(n.jsx)(_e,{})]})},Oe=s(182),xe=s.n(Oe),ve=function(){return Object(n.jsx)("div",{className:xe.a.news,children:"News"})},Pe=s(183),we=s.n(Pe),Ne=function(e){return Object(n.jsx)("div",{className:we.a.music,children:"Music"})},Ue=s(184),ke=s.n(Ue),Se=function(){return Object(n.jsx)("div",{className:ke.a.setting,children:"Setting"})},Ie=s(87),ye=s.n(Ie),Ce=s(47),De=s(20),Re=s.n(De),Ee=(s(508),function(e){return Object(n.jsxs)("div",{className:"lds-ellipsis",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})}),Me=function(e){var t=e.user,s=Object(Ce.a)(e,["user"]);return Object(n.jsxs)("div",{className:Re.a.user,children:[Object(n.jsxs)("div",{className:Re.a.avatarBlock,children:[Object(n.jsx)(oe.b,{to:"/profile/".concat(t.id),children:Object(n.jsx)("img",{className:Re.a.avatarUser,src:null!=t.photos.large?t.photos.large:pe,alt:"avatar"})}),t.followed?Object(n.jsx)("button",{disabled:s.followingInProgress.some((function(e){return e===t.id})),onClick:function(){s.unfollow(t.id)},className:Re.a.buttonFollow,children:s.followingInProgress.some((function(e){return e===t.id}))?Object(n.jsx)(Ee,{}):"Unfollow"}):Object(n.jsx)("button",{disabled:s.followingInProgress.some((function(e){return e===t.id})),onClick:function(){s.follow(t.id)},className:Re.a.buttonFollow,children:s.followingInProgress.some((function(e){return e===t.id}))?Object(n.jsx)(Ee,{}):"Follow"})]}),Object(n.jsxs)("div",{className:Re.a.profileUser,children:[Object(n.jsxs)("div",{className:Re.a.aboutUser,children:[Object(n.jsx)("div",{className:Re.a.nameUser,children:t.name}),Object(n.jsx)("div",{className:Re.a.bio,children:t.status})]}),Object(n.jsxs)("div",{className:Re.a.blockCountry,children:[Object(n.jsx)("div",{className:Re.a.countyUser,children:"user.country"}),Object(n.jsx)("div",{className:Re.a.cityUser,children:"user.city"})]})]})]})},Fe=s(67),Te=s(70),Ae=s.n(Te),Le=function(e){for(var t=e.portionSize,s=void 0===t?20:t,a=Object(Ce.a)(e,["portionSize"]),o=Math.ceil(a.totalItemsCount/a.pageSize),c=[],i=1;i<=o;i++)c.push(i);var u=Math.ceil(o/s),l=Object(r.useState)(Math.ceil(a.currentPage/s)),d=Object(Fe.a)(l,2),j=d[0],b=d[1],p=(j-1)*s+1,f=j*s;return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{disabled:1===j&&!0,className:Ae.a.buttonChangeList,onClick:function(){b(j-1)},children:"Last"}),c.filter((function(e){return e>=p&&e<=f})).map((function(e){return Object(n.jsx)("button",{onClick:function(){return a.onPageChanged(e)},className:"".concat(Ae.a.numbersPage," ").concat(a.currentPage===e&&Ae.a.selectedPage),children:e})})),Object(n.jsx)("button",{disabled:j===u&&!0,className:Ae.a.buttonChangeList,onClick:function(){b(j+1)},children:"Next"})]})},Be=function(e){for(var t=e.usersData.map((function(t){return Object(n.jsx)(Me,{follow:e.follow,unfollow:e.unfollow,user:t,currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,followingInProgress:e.followingInProgress})})),s=Math.ceil(e.totalUsersCount/e.pageSize),r=[],a=1;a<=s;a++)r.push(a);return Object(n.jsxs)("div",{className:ye.a.wrapper,children:[Object(n.jsx)("select",{onChange:function(t){e.onPageChanged(t.target.value)},value:e.currentPage,className:ye.a.selectPage,children:r.map((function(e){return Object(n.jsxs)("option",{className:ye.a.optionPage,children:[e," "]})}))}),t,Object(n.jsx)(Le,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged})]})},ze=s(185),He=s.n(ze),We=(s(509),function(e){return Object(n.jsxs)("div",{className:"lds-ring",children:[Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}}),Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}}),Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}}),Object(n.jsx)("div",{style:{height:"".concat(e.height),width:"".concat(e.width),borderWidth:"".concat(e.borderWidth)}})]})}),Ge=function(e){return Object(n.jsx)("div",{className:He.a.wrapper,children:Object(n.jsx)(We,{height:"500px",width:"500px",borderWidth:"40px"})})},Je=function(e){Object(re.a)(s,e);var t=Object(ae.a)(s);function s(){var e;Object(se.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setUsersCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(ne.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:this.props.isPreloader?Object(n.jsx)(Ge,{}):Object(n.jsx)(Be,{follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,usersData:this.props.usersData,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,followingInProgress:this.props.followingInProgress})})}}]),s}(a.a.Component),Ke=Object(ge.b)((function(e){return{usersData:e.usersReducer.usersData,pageSize:e.usersReducer.pageSize,totalUsersCount:e.usersReducer.totalUsersCount,currentPage:e.usersReducer.currentPage,isPreloader:e.usersReducer.isPreloader,followingInProgress:e.usersReducer.followingInProgress}}),{follow:function(e){return function(){var t=Object(P.a)(v.a.mark((function t(s){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(G(!0,e)),t.next=3,l.c.follow(e);case 3:0===t.sent.data.resultCode&&s(L(e)),s(G(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(v.a.mark((function t(s){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(G(!0,e)),t.next=3,l.c.unfollow(e);case 3:0===t.sent.data.resultCode&&s(B(e)),s(G(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:z,setUsersCurrentPage:function(e){return{type:E,numberPage:e}},setTotalUsersCount:H,setPreloaderToggle:W,toggleFollowingProgress:G,getUsers:function(e,t){return function(){var s=Object(P.a)(v.a.mark((function s(n){var r;return v.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n(W(!0)),s.next=3,l.c.getUsers(e,t);case 3:r=s.sent,n(W(!1)),n(z(r.items)),n(H(r.totalCount));case 7:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})(Je),Qe=s(116),Xe=s.n(Qe),Ve=s(42),Ze=s.n(Ve),qe=(s(510),function(e){var t=Object(r.useState)(!1),s=Object(Fe.a)(t,2),a=s[0],o=s[1],c=Object(r.useState)(e.status),i=Object(Fe.a)(c,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){l(e.status)}),[e.status]),Object(n.jsx)("div",{children:a?Object(n.jsxs)("div",{className:"StatusProfile_inputBlock",children:[Object(n.jsx)("input",{autoFocus:!0,onChange:function(e){l(e.target.value)},value:u,type:"text",className:"StatusProfile_input"}),Object(n.jsx)("button",{onClick:function(){o(!1),e.updateUserStatus(u)},className:"StatusProfile_inputButton",children:Object(n.jsx)("i",{className:"check"})})]}):Object(n.jsx)("div",{onDoubleClick:function(){o(!0)},className:"StatusProfile_status",children:u||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"})})}),Ye=function(e){return Object(n.jsx)("img",{className:Ze.a.profile_logo,src:e.image,alt:""})},$e=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Ye,{image:"https://www.komandirovka.ru/upload/save_file33/bf5/bf5c6f100d3d620c48787b3714cb4fea.jpg"}),Object(n.jsxs)("div",{className:Ze.a.descriptions,children:[Object(n.jsx)("img",{className:Ze.a.descriptions_logo,src:null!=e.profile.photos.large?e.profile.photos.large:pe}),!e.isOwner&&Object(n.jsx)("input",{type:"file"}),Object(n.jsxs)("div",{className:Ze.a.descriptions_text,children:[Object(n.jsx)("div",{className:Ze.a.descriptions_name,children:e.profile.fullName}),Object(n.jsx)(qe,{status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsxs)("div",{className:Ze.a.descriptions_about,children:[Object(n.jsxs)("p",{children:["\u0418\u0449\u0435\u0448\u044c \u0440\u0430\u0431\u043e\u0442\u0443: ",e.profile.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"]}),e.profile.lookingForAJobDescription?Object(n.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: ",e.profile.lookingForAJobDescription]}):null,Object(n.jsx)("p",{className:Ze.a.contacts,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),e.profile.contacts.facebook?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 facebook: ",e.profile.contacts.facebook]}):null,e.profile.contacts.website?Object(n.jsxs)("p",{children:["\u041c\u043e\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442: ",e.profile.contacts.website]}):null,e.profile.contacts.vk?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435: ",e.profile.contacts.vk]}):null,e.profile.contacts.twitter?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 twitter: ",e.profile.contacts.twitter]}):null,e.profile.contacts.instagram?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 instagram: ",e.profile.contacts.instagram]}):null,e.profile.contacts.youtube?Object(n.jsxs)("p",{children:["\u041c\u043e\u0439 \u043a\u0430\u043d\u0430\u043b \u043d\u0430 youtube: ",e.profile.contacts.youtube]}):null,e.profile.contacts.github?Object(n.jsxs)("p",{children:["\u041c\u043e\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430 github: ",e.profile.contacts.github]}):null,e.profile.contacts.mainLink?Object(n.jsxs)("p",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 mainLink: ",e.profile.contacts.mainLink]}):null]})]})]})]})},et=s(117),tt=s.n(et),st=s(49),nt=s.n(st),rt=function(e){return Object(n.jsxs)("div",{className:nt.a.post,children:[Object(n.jsxs)("div",{className:nt.a.post_content,children:[Object(n.jsx)("img",{className:nt.a.post_logo,src:e.photos?e.photos:pe,alt:"avatar"}),Object(n.jsx)("p",{className:nt.a.post_text,children:e.message})]}),Object(n.jsx)("button",{id:"button",className:nt.a.post_like,children:"like"}),Object(n.jsx)("div",{className:nt.a.post_likes,id:"like",children:e.likes})]})},at=s(71),ot=s.n(at),ct=s(56),it=function(e){if(!e)return"Field is required"},ut=s(177),lt=function(e){var t=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return function(e){return t.reduce((function(t,s){return t||s(e)}),void 0)}};return Object(n.jsx)(ct.b,{onSubmit:function(t){e.addPost(t.inputNewPost)},children:function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,className:ot.a.newPost,children:[Object(n.jsx)(ct.a,{component:ut.b,name:"inputNewPost",className:ot.a.newPost_textarea,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430",validate:t(it,(s=10,function(e){if(e&&e.length>s)return"Max length is ".concat(s," symbols")}))}),Object(n.jsx)("button",{disabled:e.hasValidationErrors&&!0,className:"".concat(ot.a.newPost_button," \n                    ").concat(e.hasValidationErrors&&ot.a.disabled),children:"Send"})]});var s}})},dt=function(e){return Object(n.jsx)(lt,{addPost:e.addPost})},jt=Object(ge.b)((function(e){return{newPostText:e.profileReducer.newPostText}}),{addPost:function(e){return{type:d,newPostText:e}}})(dt),bt=function(e){var t=e.postData.map((function(t){return Object(n.jsx)(rt,{message:t.message,likes:t.likesCount,photos:e.photos})}));return Object(n.jsxs)("div",{className:tt.a.posts,children:[Object(n.jsx)("div",{className:tt.a.posts_title,children:"My Posts"}),Object(n.jsx)(jt,{}),t]})},pt=function(e){return e.profile?Object(n.jsxs)("div",{className:Xe.a.profile,children:[Object(n.jsx)($e,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsx)(bt,{photos:e.profile.photos.small,postData:e.postData})]}):Object(n.jsx)("div",{className:Xe.a.preloaderBox,children:Object(n.jsx)(Ge,{})})},ft=function(e){Object(re.a)(s,e);var t=Object(ae.a)(s);function s(){return Object(se.a)(this,s),t.apply(this,arguments)}return Object(ne.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e&&(this.props.getUserProfile(e),this.props.getUserStatus(e))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Number(this.props.match.params.userId)===this.props.authorizedUserId?Object(n.jsx)(ce.a,{to:"/profile"}):Object(n.jsx)(pt,Object(u.a)({isOwner:!!this.props.match.params.userId},this.props))}}]),s}(a.a.Component),ht=Object(c.d)(Object(ge.b)((function(e){return{profile:e.profileReducer.profile,postData:e.profileReducer.postData,status:e.profileReducer.status,authorizedUserId:e.auth.id}}),{getUserProfile:function(e){return function(t){t(g(null)),t(m(!0)),l.c.getUserProfile(e).then((function(e){t(m(!1)),t(g(e.data))}))}},getUserStatus:function(e){return function(t){l.b.getStatus(e).then((function(e){t(_(e.data))}))}},updateUserStatus:function(e){return function(t){l.b.updateStatus(e).then((function(s){0===s.data.resultCode&&t(_(e))}))}}}),ce.f)(ft),gt=s(31),_t=s.n(gt),mt=(s(111),function(e){return Object(n.jsxs)("header",{className:_t.a.header,children:[Object(n.jsx)("div",{className:_t.a.header_logo,children:"RUSLNETWORK"}),e.isAuth?Object(n.jsxs)(oe.b,{to:"/profile",className:_t.a.loginBlock,children:[Object(n.jsx)("span",{children:Object(n.jsx)("div",{className:_t.a.blockPhoto,children:e.userPhoto?Object(n.jsx)("img",{src:e.userPhoto,alt:"",className:_t.a.photo}):Object(n.jsx)("img",{src:pe,alt:"",className:_t.a.photoNull})})}),Object(n.jsx)("span",{children:e.login}),Object(n.jsx)("button",{onClick:e.logout,className:_t.a.buttonLogout,children:"Logout"})]}):Object(n.jsx)(oe.b,{to:"/login",className:_t.a.loginBlock,activeClassName:_t.a.active,children:"Login"})]})}),Ot=function(e){Object(re.a)(s,e);var t=Object(ae.a)(s);function s(){return Object(se.a)(this,s),t.apply(this,arguments)}return Object(ne.a)(s,[{key:"render",value:function(){return Object(n.jsx)(mt,Object(u.a)({},this.props))}}]),s}(a.a.Component),xt=Object(ge.b)((function(e){return{login:e.auth.login,email:e.auth.email,isAuth:e.auth.isAuth}}),{logout:K.d})(Ot),vt=s(118),Pt=s.n(vt),wt=s(73),Nt=s.n(wt),Ut=function(e){return Object(n.jsx)(ct.b,{onSubmit:function(t){e.addNewMessage(t.textAreaMessage)},render:function(e){var t=e.handleSubmit;e.form;return Object(n.jsxs)("form",{onSubmit:t,className:Nt.a.inputMessage,children:[Object(n.jsx)(ct.a,{component:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",name:"textAreaMessage",className:Nt.a.textMessage}),Object(n.jsx)("button",{className:Nt.a.buttonSend,children:Object(n.jsx)("img",{className:Nt.a.buttonImg,src:"https://img.icons8.com/plumpy/96/000000/filled-sent.png",alt:""})})]})}})},kt=function(e){return Object(n.jsx)(Ut,{addNewMessage:e.addNewMessage})},St=Object(ge.b)((function(e){return{newMessageText:e.dialogsReducer.newMessageText}}),{addNewMessage:function(e){return{type:S,message:e}}})(kt),It=s(186),yt=s.n(It),Ct=s(119),Dt=s.n(Ct),Rt=function(e){return Object(n.jsx)("div",{className:Dt.a.message,children:Object(n.jsx)("div",{className:Dt.a.messageInto,children:e.message})})},Et=function(e){var t=e.messageElement.map((function(e){return Object(n.jsx)(Rt,{message:e.message})}));return Object(n.jsx)("div",{className:yt.a.blockMessage,children:t})},Mt=Object(ge.b)((function(e){return{messageElement:e.dialogsReducer.messageData}}))(Et),Ft=s(187),Tt=s.n(Ft),At=s(74),Lt=s.n(At),Bt=function(e){var t="/dialog/"+e.id;return Object(n.jsx)("div",{className:Lt.a.dialog,children:Object(n.jsxs)(oe.b,{to:t,activeClassName:Lt.a.active,children:[Object(n.jsx)("img",{className:Lt.a.avatarUser,src:e.avatarUser,alt:"avatar"}),Object(n.jsx)("span",{className:Lt.a.nameUser,children:e.name})]})})},zt=function(e){var t=e.dialogElement.map((function(e){return Object(n.jsx)(Bt,{name:e.name,id:e.id,avatarUser:e.avatarUser})}));return Object(n.jsx)("div",{className:Tt.a.dialogs_items,children:t})},Ht=Object(ge.b)((function(e){return{dialogElement:e.dialogsReducer.dialogsData}}))(zt),Wt=function(e){return{isAuth:e.auth.isAuth}},Gt=function(e){return Object(ge.b)(Wt)((function(t){return t.isAuth?Object(n.jsx)(e,Object(u.a)({},t)):Object(n.jsx)(ce.a,{to:"login"})}))}((function(e){return Object(n.jsxs)("div",{className:Pt.a.dialogs,children:[Object(n.jsx)(Ht,{}),Object(n.jsxs)("div",{className:Pt.a.messages,children:[Object(n.jsx)(Mt,{}),Object(n.jsx)(St,{})]})]})})),Jt=function(e){return function(t){return Object(n.jsx)(a.a.Suspense,{fallback:Object(n.jsx)("div",{className:"preloaderSuspense",children:Object(n.jsx)(We,{height:"500px",width:"500px",borderWidth:"40px"})}),children:Object(n.jsx)(e,Object(u.a)({},t))})}},Kt=a.a.lazy((function(){return Promise.all([s.e(3),s.e(4)]).then(s.bind(null,519))})),Qt=function(e){Object(re.a)(s,e);var t=Object(ae.a)(s);function s(){return Object(se.a)(this,s),t.apply(this,arguments)}return Object(ne.a)(s,[{key:"componentDidMount",value:function(){this.props.initializeApp(this.props.id)}},{key:"render",value:function(){return this.props.initialize?Object(n.jsx)(oe.a,{children:Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(xt,{}),Object(n.jsx)(me,{}),Object(n.jsxs)("div",{className:"app-content",children:[Object(n.jsx)(ce.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(ht,{})}}),Object(n.jsx)(ce.b,{path:"/dialog",render:function(){return Object(n.jsx)(Gt,{})}}),Object(n.jsx)(ce.b,{path:"/news",render:function(){return Object(n.jsx)(ve,{})}}),Object(n.jsx)(ce.b,{path:"/music",render:function(){return Object(n.jsx)(Ne,{})}}),Object(n.jsx)(ce.b,{path:"/setting",render:function(){return Object(n.jsx)(Se,{})}}),Object(n.jsx)(ce.b,{path:"/users",render:function(){return Object(n.jsx)(Ke,{})}}),Object(n.jsx)(ce.b,{path:"/login",render:Jt(Kt)})]})]})}):Object(n.jsx)("div",{className:"preloader",children:Object(n.jsx)(We,{height:"500px",width:"500px",borderWidth:"40px"})})}}]),s}(a.a.Component),Xt=Object(ge.b)((function(e){return{id:e.auth.id,initialize:e.app.initialized}}),{initializeApp:function(e){return function(t){var s=t(Object(K.b)(e)),n=t(function(){var e=Object(P.a)(v.a.mark((function e(t){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,l.c.getUsers(1,3);case 3:s=e.sent,t((n=s.items,{type:w,users:n}));case 5:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}());Promise.all([s,n]).then((function(){t({type:X})}))}}})(Qt);te.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ge.a,{store:$,children:Object(n.jsx)(Xt,{})})}),document.getElementById("root")),o()},55:function(e,t,s){"use strict";s.d(t,"c",(function(){return d})),s.d(t,"d",(function(){return j})),s.d(t,"b",(function(){return b}));var n=s(4),r=s(13),a="ruslnetwork/authReducer/SET_USER_DATA",o="ruslnetwork/authReducer/ADD_USER_PHOTO",c="ruslnetwork/authReducer/ERROR_AUTH",i={id:null,login:null,email:null,isFetching:!1,isAuth:!1,userPhoto:"",errorAuth:null},u=function(e,t,s,n){return{type:a,payload:{id:e,login:t,email:s,isAuth:n}}},l=function(e){return{type:c,message:e}},d=function(e,t,s){return function(n){r.a.login(e,t,s).then((function(e){0===e.data.resultCode?(n(b()),n(l(null))):n(l(e.data.messages[0]))}))}},j=function(){return function(e){r.a.logout().then((function(t){e(u(null,null,null,!1))}))}},b=function(e){return function(t){return r.a.me().then((function(s){0===s.data.resultCode&&t(u(s.data.data.id,s.data.data.login,s.data.data.email,!0)),e&&r.c.getUserProfile(e).then((function(e){var s;t((s=e.data.photos.small,{type:o,userPhoto:s}))}))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(n.a)(Object(n.a)({},e),t.payload);case o:return Object(n.a)(Object(n.a)({},e),{},{userPhoto:t.userPhoto});case c:return Object(n.a)(Object(n.a)({},e),{},{errorAuth:t.message});default:return e}}},70:function(e,t,s){e.exports={buttonChangeList:"Paginator_buttonChangeList__2Pcro",numbersPage:"Paginator_numbersPage__2dMmH",selectedPage:"Paginator_selectedPage__3N0Wc"}},71:function(e,t,s){e.exports={newPost:"NewPost_newPost__gckab",newPost_textarea:"NewPost_newPost_textarea__2Eb51",newPost_button:"NewPost_newPost_button__3EsHI",disabled:"NewPost_disabled__3z2-l"}},72:function(e,t,s){e.exports={formControl:"FormsControls_formControl__1eqP1",errorInput:"FormsControls_errorInput__Filto",errorTextarea:"FormsControls_errorTextarea__stxTP"}},73:function(e,t,s){e.exports={inputMessage:"InputMessage_inputMessage__lnSYt",textMessage:"InputMessage_textMessage__2TeLS",buttonSend:"InputMessage_buttonSend__3RzUJ",buttonImg:"InputMessage_buttonImg__PPXw-"}},74:function(e,t,s){e.exports={dialog:"DialogsItem_dialog__1uTuI",active:"DialogsItem_active__1jgbh",avatarUser:"DialogsItem_avatarUser__3Dwfb",nameUser:"DialogsItem_nameUser__1JDz-"}},86:function(e,t,s){e.exports={friendItem:"NavFriendItem_friendItem__3tREF",avatarUser:"NavFriendItem_avatarUser__2Q4fg",name:"NavFriendItem_name__2_AbB"}},87:function(e,t,s){e.exports={wrapper:"Users_wrapper__2IDO-",selectPage:"Users_selectPage__3xoGZ",optionPage:"Users_optionPage__ikGdl"}}},[[511,1,2]]]);
//# sourceMappingURL=main.7524f821.chunk.js.map