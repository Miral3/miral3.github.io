(this["webpackJsonppotion-blog"]=this["webpackJsonppotion-blog"]||[]).push([[48],{1180:function(n,e,a){"use strict";a.r(e);var t=a(221),o=a(222),r=a(224),l=a(223),i=a(3),s=a.n(i),c=a(86),u=a(226),m=a(1025),p=a(892),b=a(897),d={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer",badge:{variant:"info",text:"NEW"}},{title:!0,name:"Theme",wrapper:{element:"",attributes:{}},class:""},{name:"Colors",url:"/theme/colors",icon:"icon-drop"},{name:"Typography",url:"/theme/typography",icon:"icon-pencil"},{title:!0,name:"Components",wrapper:{element:"",attributes:{}}},{name:"Base",url:"/base",icon:"icon-puzzle",children:[{name:"Breadcrumbs",url:"/base/breadcrumbs",icon:"icon-puzzle"},{name:"Cards",url:"/base/cards",icon:"icon-puzzle"},{name:"Carousels",url:"/base/carousels",icon:"icon-puzzle"},{name:"Collapses",url:"/base/collapses",icon:"icon-puzzle"},{name:"Dropdowns",url:"/base/dropdowns",icon:"icon-puzzle"},{name:"Forms",url:"/base/forms",icon:"icon-puzzle"},{name:"Jumbotrons",url:"/base/jumbotrons",icon:"icon-puzzle"},{name:"List groups",url:"/base/list-groups",icon:"icon-puzzle"},{name:"Navs",url:"/base/navs",icon:"icon-puzzle"},{name:"Paginations",url:"/base/paginations",icon:"icon-puzzle"},{name:"Popovers",url:"/base/popovers",icon:"icon-puzzle"},{name:"Progress Bar",url:"/base/progress-bar",icon:"icon-puzzle"},{name:"Switches",url:"/base/switches",icon:"icon-puzzle"},{name:"Tables",url:"/base/tables",icon:"icon-puzzle"},{name:"Tabs",url:"/base/tabs",icon:"icon-puzzle"},{name:"Tooltips",url:"/base/tooltips",icon:"icon-puzzle"}]},{name:"Buttons",url:"/buttons",icon:"icon-cursor",children:[{name:"Buttons",url:"/buttons/buttons",icon:"icon-cursor"},{name:"Button dropdowns",url:"/buttons/button-dropdowns",icon:"icon-cursor"},{name:"Button groups",url:"/buttons/button-groups",icon:"icon-cursor"},{name:"Brand Buttons",url:"/buttons/brand-buttons",icon:"icon-cursor"}]},{name:"Charts",url:"/charts",icon:"icon-pie-chart"},{name:"Icons",url:"/icons",icon:"icon-star",children:[{name:"CoreUI Icons",url:"/icons/coreui-icons",icon:"icon-star",badge:{variant:"info",text:"NEW"}},{name:"Flags",url:"/icons/flags",icon:"icon-star"},{name:"Font Awesome",url:"/icons/font-awesome",icon:"icon-star",badge:{variant:"secondary",text:"4.7"}},{name:"Simple Line Icons",url:"/icons/simple-line-icons",icon:"icon-star"}]},{name:"Notifications",url:"/notifications",icon:"icon-bell",children:[{name:"Alerts",url:"/notifications/alerts",icon:"icon-bell"},{name:"Badges",url:"/notifications/badges",icon:"icon-bell"},{name:"Modals",url:"/notifications/modals",icon:"icon-bell"}]},{name:"Widgets",url:"/widgets",icon:"icon-calculator",badge:{variant:"info",text:"NEW"}},{divider:!0},{title:!0,name:"Extras"},{name:"Pages",url:"/pages",icon:"icon-star",children:[{name:"Login",url:"/login",icon:"icon-star"},{name:"Register",url:"/register",icon:"icon-star"},{name:"Error 404",url:"/404",icon:"icon-star"},{name:"Error 500",url:"/500",icon:"icon-star"}]},{name:"Disabled",url:"/dashboard",icon:"icon-ban",attributes:{disabled:!0}},{name:"Download CoreUI",url:"https://coreui.io/react/",icon:"icon-cloud-download",class:"mt-auto",variant:"success",attributes:{target:"_blank",rel:"noopener"}},{name:"Try CoreUI PRO",url:"https://coreui.io/pro/react/",icon:"icon-layers",variant:"danger",attributes:{target:"_blank",rel:"noopener"}}]},h=a(913),f=s.a.lazy((function(){return a.e(5).then(a.bind(null,1168))})),g=s.a.lazy((function(){return a.e(8).then(a.bind(null,1169))})),z=s.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,1170))})),y=function(n){Object(r.a)(a,n);var e=Object(l.a)(a);function a(){var n;Object(t.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(n=e.call.apply(e,[this].concat(r))).loading=function(){return s.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n}return Object(o.a)(a,[{key:"signOut",value:function(n){n.preventDefault(),Object(p.c)(),window.location.reload()}},{key:"render",value:function(){var n=this;return s.a.createElement("div",{className:"app"},s.a.createElement(b.d,{fixed:!0},s.a.createElement(i.Suspense,{fallback:this.loading()},s.a.createElement(z,{onLogout:function(e){return n.signOut(e)}}))),s.a.createElement("div",{className:"app-body"},s.a.createElement(b.e,{fixed:!0,display:"lg"},s.a.createElement(b.h,null),s.a.createElement(b.g,null),s.a.createElement(i.Suspense,null,s.a.createElement(b.j,Object.assign({navConfig:d},this.props,{router:u}))),s.a.createElement(b.f,null),s.a.createElement(b.i,null)),s.a.createElement("main",{className:"main"},s.a.createElement(b.b,{appRoutes:h.a,router:u}),s.a.createElement(m.a,{fluid:!0},s.a.createElement(i.Suspense,{fallback:this.loading()},s.a.createElement(c.g,null,h.a.map((function(n,e){return n.component?s.a.createElement(c.d,{key:e,path:n.path,exact:n.exact,name:n.name,render:function(e){return s.a.createElement(n.component,e)}}):null})))))),s.a.createElement(b.a,{fixed:!0},s.a.createElement(i.Suspense,{fallback:this.loading()},s.a.createElement(f,null)))),s.a.createElement(b.c,null,s.a.createElement(i.Suspense,{fallback:this.loading()},s.a.createElement(g,null))))}}]),a}(i.Component);e.default=y},892:function(n,e,a){"use strict";function t(){return null!==sessionStorage.getItem("loggedInState")&&"undefined"!==sessionStorage.getItem("loggedInState")}function o(n,e){sessionStorage.setItem("account",n),sessionStorage.setItem("loggedInState",e)}function r(){sessionStorage.removeItem("account"),sessionStorage.removeItem("loggedInState")}a.d(e,"a",(function(){return t})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r}))},913:function(n,e,a){"use strict";var t=a(3),o=a.n(t),r=o.a.lazy((function(){return a.e(28).then(a.bind(null,958))})),l=o.a.lazy((function(){return a.e(29).then(a.bind(null,959))})),i=o.a.lazy((function(){return a.e(37).then(a.bind(null,1016))})),s=o.a.lazy((function(){return Promise.all([a.e(1),a.e(31)]).then(a.bind(null,960))})),c=o.a.lazy((function(){return Promise.all([a.e(1),a.e(46)]).then(a.bind(null,1012))})),u=o.a.lazy((function(){return Promise.all([a.e(1),a.e(27)]).then(a.bind(null,964))})),m=o.a.lazy((function(){return Promise.all([a.e(0),a.e(19),a.e(54)]).then(a.bind(null,965))})),p=o.a.lazy((function(){return Promise.all([a.e(1),a.e(0),a.e(12),a.e(55)]).then(a.bind(null,966))})),b=o.a.lazy((function(){return a.e(32).then(a.bind(null,1019))})),d=o.a.lazy((function(){return a.e(17).then(a.bind(null,1017))})),h=o.a.lazy((function(){return Promise.all([a.e(1),a.e(0),a.e(20),a.e(56)]).then(a.bind(null,969))})),f=o.a.lazy((function(){return Promise.all([a.e(0),a.e(21),a.e(57)]).then(a.bind(null,970))})),g=o.a.lazy((function(){return a.e(38).then(a.bind(null,971))})),z=o.a.lazy((function(){return Promise.all([a.e(1),a.e(0),a.e(50)]).then(a.bind(null,1014))})),y=o.a.lazy((function(){return a.e(41).then(a.bind(null,972))})),v=o.a.lazy((function(){return a.e(33).then(a.bind(null,973))})),E=o.a.lazy((function(){return a.e(23).then(a.bind(null,974))})),P=o.a.lazy((function(){return a.e(24).then(a.bind(null,975))})),w=o.a.lazy((function(){return Promise.all([a.e(1),a.e(0),a.e(51)]).then(a.bind(null,1018))})),x=o.a.lazy((function(){return a.e(34).then(a.bind(null,976))})),I=o.a.lazy((function(){return Promise.all([a.e(0),a.e(18),a.e(58)]).then(a.bind(null,977))})),B=o.a.lazy((function(){return Promise.all([a.e(0),a.e(13),a.e(59)]).then(a.bind(null,979))})),S=o.a.lazy((function(){return a.e(35).then(a.bind(null,980))})),C=o.a.lazy((function(){return Promise.all([a.e(2),a.e(52)]).then(a.bind(null,1020))})),k=o.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(7),a.e(14),a.e(60)]).then(a.bind(null,997))})),N=o.a.lazy((function(){return a.e(36).then(a.bind(null,999))})),T=o.a.lazy((function(){return a.e(39).then(a.bind(null,1e3))})),j=o.a.lazy((function(){return Promise.all([a.e(1),a.e(42)]).then(a.bind(null,1001))})),D=o.a.lazy((function(){return a.e(40).then(a.bind(null,1002))})),O=o.a.lazy((function(){return Promise.all([a.e(1),a.e(43)]).then(a.bind(null,1003))})),L=o.a.lazy((function(){return a.e(25).then(a.bind(null,1004))})),F=o.a.lazy((function(){return Promise.all([a.e(1),a.e(44)]).then(a.bind(null,1013))})),U=o.a.lazy((function(){return Promise.all([a.e(7),a.e(62)]).then(a.bind(null,1005))})),A=o.a.lazy((function(){return a.e(63).then(a.bind(null,1006))})),M=o.a.lazy((function(){return Promise.all([a.e(2),a.e(22)]).then(a.bind(null,1015))})),W=o.a.lazy((function(){return a.e(26).then(a.bind(null,1007))})),J=o.a.lazy((function(){return a.e(30).then(a.bind(null,1011))})),_=[{path:"/",exact:!0,name:"Home"},{path:"/home",exact:!0,name:"Home",component:o.a.lazy((function(){return a.e(61).then(a.bind(null,1008))}))},{path:"/algorithm/programmers/main_maker",exact:!0,name:"MainMaker",component:o.a.lazy((function(){return a.e(16).then(a.bind(null,1009))}))},{path:"/algorithm/java/class_maker",exact:!0,name:"ClassMaker",component:o.a.lazy((function(){return a.e(15).then(a.bind(null,1010))}))},{path:"/Page404",name:"Page404",component:r},{path:"/Page500",name:"Page500",component:l},{path:"/dashboard",name:"Dashboard",component:k},{path:"/theme",exact:!0,name:"Theme",component:U},{path:"/theme/colors",name:"Colors",component:U},{path:"/theme/typography",name:"Typography",component:A},{path:"/base",exact:!0,name:"Base",component:s},{path:"/base/cards",name:"Cards",component:s},{path:"/base/forms",name:"Forms",component:p},{path:"/base/switches",name:"Switches",component:v},{path:"/base/tables",name:"Tables",component:E},{path:"/base/tabs",name:"Tabs",component:P},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:i},{path:"/base/carousels",name:"Carousel",component:c},{path:"/base/collapses",name:"Collapse",component:u},{path:"/base/dropdowns",name:"Dropdowns",component:m},{path:"/base/jumbotrons",name:"Jumbotrons",component:b},{path:"/base/list-groups",name:"List Groups",component:d},{path:"/base/navbars",name:"Navbars",component:h},{path:"/base/navs",name:"Navs",component:f},{path:"/base/paginations",name:"Paginations",component:g},{path:"/base/popovers",name:"Popovers",component:z},{path:"/base/progress-bar",name:"Progress Bar",component:y},{path:"/base/tooltips",name:"Tooltips",component:w},{path:"/buttons",exact:!0,name:"Buttons",component:S},{path:"/buttons/buttons",name:"Buttons",component:S},{path:"/buttons/button-dropdowns",name:"Button Dropdowns",component:I},{path:"/buttons/button-groups",name:"Button Groups",component:B},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:x},{path:"/icons",exact:!0,name:"Icons",component:N},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:N},{path:"/icons/flags",name:"Flags",component:T},{path:"/icons/font-awesome",name:"Font Awesome",component:j},{path:"/icons/simple-line-icons",name:"Simple Line Icons",component:D},{path:"/notifications",exact:!0,name:"Notifications",component:O},{path:"/notifications/alerts",name:"Alerts",component:O},{path:"/notifications/badges",name:"Badges",component:L},{path:"/notifications/modals",name:"Modals",component:F},{path:"/widgets",name:"Widgets",component:M},{path:"/charts",name:"Charts",component:C},{path:"/users",exact:!0,name:"Users",component:W},{path:"/users/:id",exact:!0,name:"User Details",component:J}];e.a=_}}]);
//# sourceMappingURL=48.3ec18d9a.chunk.js.map