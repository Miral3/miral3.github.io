(this["webpackJsonppotion-blog"]=this["webpackJsonppotion-blog"]||[]).push([[26],{1007:function(e,a,t){"use strict";t.r(a);var r=t(221),s=t(222),n=t(224),o=t(223),i=t(3),l=t.n(i),c=t(226),d=t(875),u=t(863),m=t(864),f=t(866),g=t(868),b=t(867),p=t(906),v=t(934);function h(e){var a,t=e.user,r="/users/".concat(t.id);return l.a.createElement("tr",{key:t.id.toString()},l.a.createElement("th",{scope:"row"},l.a.createElement(c.Link,{to:r},t.id)),l.a.createElement("td",null,l.a.createElement(c.Link,{to:r},t.name)),l.a.createElement("td",null,t.registered),l.a.createElement("td",null,t.role),l.a.createElement("td",null,l.a.createElement(c.Link,{to:r},l.a.createElement(d.a,{color:(a=t.status,"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary")},t.status))))}var E=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=v.a.filter((function(e){return e.id<10}));return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(u.a,null,l.a.createElement(m.a,{xl:6},l.a.createElement(f.a,null,l.a.createElement(g.a,null,l.a.createElement("i",{className:"fa fa-align-justify"})," Users ",l.a.createElement("small",{className:"text-muted"},"example")),l.a.createElement(b.a,null,l.a.createElement(p.a,{responsive:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"id"),l.a.createElement("th",{scope:"col"},"name"),l.a.createElement("th",{scope:"col"},"registered"),l.a.createElement("th",{scope:"col"},"role"),l.a.createElement("th",{scope:"col"},"status"))),l.a.createElement("tbody",null,e.map((function(e,a){return l.a.createElement(h,{key:a,user:e})})))))))))}}]),t}(i.Component);a.default=E},859:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},863:function(e,a,t){"use strict";var r=t(35),s=t(97),n=t(3),o=t.n(n),i=t(107),l=t.n(i),c=t(856),d=t.n(c),u=t(857),m={tag:u.p,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},f=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,l=e.form,c=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(u.l)(d()(a,n?"no-gutters":null,l?"form-row":"row"),t);return o.a.createElement(i,Object(r.a)({},c,{className:m}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},864:function(e,a,t){"use strict";var r=t(35),s=t(97),n=t(859),o=t.n(n),i=t(3),l=t.n(i),c=t(107),d=t.n(c),u=t(856),m=t.n(u),f=t(857),g=d.a.oneOfType([d.a.number,d.a.string]),b=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),order:g,offset:g})]),p={tag:f.p,xs:b,sm:b,md:b,lg:b,xl:b,className:d.a.string,cssModule:d.a.object,widths:d.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),d=[];n.forEach((function(a,r){var s=e[a];if(delete c[a],s||""===s){var n=!r;if(o()(s)){var i,l=n?"-":"-"+a+"-",u=h(n,a,s.size);d.push(Object(f.l)(m()(((i={})[u]=s.size||""===s.size,i["order"+l+s.order]=s.order||0===s.order,i["offset"+l+s.offset]=s.offset||0===s.offset,i)),t))}else{var g=h(n,a,s);d.push(g)}}})),d.length||d.push("col");var u=Object(f.l)(m()(a,d),t);return l.a.createElement(i,Object(r.a)({},c,{className:u}))};E.propTypes=p,E.defaultProps=v,a.a=E},866:function(e,a,t){"use strict";var r=t(35),s=t(97),n=t(3),o=t.n(n),i=t(107),l=t.n(i),c=t(856),d=t.n(c),u=t(857),m={tag:u.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,i=e.body,l=e.inverse,c=e.outline,m=e.tag,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.l)(d()(a,"card",!!l&&"text-white",!!i&&"card-body",!!n&&(c?"border":"bg")+"-"+n),t);return o.a.createElement(m,Object(r.a)({},g,{className:b,ref:f}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},867:function(e,a,t){"use strict";var r=t(35),s=t(97),n=t(3),o=t.n(n),i=t(107),l=t.n(i),c=t(856),d=t.n(c),u=t(857),m={tag:u.p,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,i=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.l)(d()(a,"card-body"),t);return o.a.createElement(i,Object(r.a)({},l,{className:c,ref:n}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},868:function(e,a,t){"use strict";var r=t(35),s=t(97),n=t(3),o=t.n(n),i=t(107),l=t.n(i),c=t(856),d=t.n(c),u=t(857),m={tag:u.p,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(u.l)(d()(a,"card-header"),t);return o.a.createElement(n,Object(r.a)({},i,{className:l}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},875:function(e,a,t){"use strict";var r=t(35),s=t(97),n=t(3),o=t.n(n),i=t(107),l=t.n(i),c=t(856),d=t.n(c),u=t(857),m={color:l.a.string,pill:l.a.bool,tag:u.p,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.color,i=e.innerRef,l=e.pill,c=e.tag,m=Object(s.a)(e,["className","cssModule","color","innerRef","pill","tag"]),f=Object(u.l)(d()(a,"badge","badge-"+n,!!l&&"badge-pill"),t);return m.href&&"span"===c&&(c="a"),o.a.createElement(c,Object(r.a)({},m,{className:f,ref:i}))};f.propTypes=m,f.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=f},906:function(e,a,t){"use strict";var r=t(35),s=t(97),n=t(3),o=t.n(n),i=t(107),l=t.n(i),c=t(856),d=t.n(c),u=t(857),m={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.p,responsiveTag:u.p,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},f=function(e){var a=e.className,t=e.cssModule,n=e.size,i=e.bordered,l=e.borderless,c=e.striped,m=e.dark,f=e.hover,g=e.responsive,b=e.tag,p=e.responsiveTag,v=e.innerRef,h=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(u.l)(d()(a,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!f&&"table-hover"),t),j=o.a.createElement(b,Object(r.a)({},h,{ref:v,className:E}));if(g){var M=Object(u.l)(!0===g?"table-responsive":"table-responsive-"+g,t);return o.a.createElement(p,{className:M},j)}return j};f.propTypes=m,f.defaultProps={tag:"table",responsiveTag:"div"},a.a=f},934:function(e,a,t){"use strict";a.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]}}]);
//# sourceMappingURL=26.7b91916b.chunk.js.map