(this["webpackJsonppotion-blog"]=this["webpackJsonppotion-blog"]||[]).push([[13,18],{1070:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,"aria-label":c.a.string,className:c.a.string,cssModule:c.a.object,role:c.a.string,size:c.a.string,vertical:c.a.bool},f=function(e){var t=e.className,n=e.cssModule,s=e.size,i=e.vertical,c=e.tag,l=Object(o.a)(e,["className","cssModule","size","vertical","tag"]),d=Object(u.l)(p()(t,!!s&&"btn-group-"+s,i?"btn-group-vertical":"btn-group"),n);return r.a.createElement(c,Object(a.a)({},l,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div",role:"group"},t.a=f},1071:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,"aria-label":c.a.string,className:c.a.string,cssModule:c.a.object,role:c.a.string},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(u.l)(p()(t,"btn-toolbar"),n);return r.a.createElement(s,Object(a.a)({},i,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div",role:"toolbar"},t.a=f},859:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},861:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),o=n.n(a).a.createContext({})},862:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}n.d(t,"a",(function(){return o}))},863:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},f=function(e){var t=e.className,n=e.cssModule,s=e.noGutters,i=e.tag,c=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.l)(p()(t,s?"no-gutters":null,c?"form-row":"row"),n);return r.a.createElement(i,Object(a.a)({},l,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},864:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(859),r=n.n(s),i=n(3),c=n.n(i),l=n(107),p=n.n(l),u=n(856),d=n.n(u),f=n(857),h=p.a.oneOfType([p.a.number,p.a.string]),b=p.a.oneOfType([p.a.bool,p.a.number,p.a.string,p.a.shape({size:p.a.oneOfType([p.a.bool,p.a.number,p.a.string]),order:h,offset:h})]),g={tag:f.p,xs:b,sm:b,md:b,lg:b,xl:b,className:p.a.string,cssModule:p.a.object,widths:p.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},O=function(e){var t=e.className,n=e.cssModule,s=e.widths,i=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),p=[];s.forEach((function(t,a){var o=e[t];if(delete l[t],o||""===o){var s=!a;if(r()(o)){var i,c=s?"-":"-"+t+"-",u=v(s,t,o.size);p.push(Object(f.l)(d()(((i={})[u]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),n))}else{var h=v(s,t,o);p.push(h)}}})),p.length||p.push("col");var u=Object(f.l)(d()(t,p),n);return c.a.createElement(i,Object(a.a)({},l,{className:u}))};O.propTypes=g,O.defaultProps=m,t.a=O},866:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,n=e.cssModule,s=e.color,i=e.body,c=e.inverse,l=e.outline,d=e.tag,f=e.innerRef,h=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.l)(p()(t,"card",!!c&&"text-white",!!i&&"card-body",!!s&&(l?"border":"bg")+"-"+s),n);return r.a.createElement(d,Object(a.a)({},h,{className:b,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},867:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,n=e.cssModule,s=e.innerRef,i=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.l)(p()(t,"card-body"),n);return r.a.createElement(i,Object(a.a)({},c,{className:l,ref:s}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},868:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(u.l)(p()(t,"card-header"),n);return r.a.createElement(s,Object(a.a)({},i,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},870:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(858),r=n(62),i=n(3),c=n.n(i),l=n(107),p=n.n(l),u=n(879),d=n(856),f=n.n(d),h=n(861),b=n(857),g={disabled:p.a.bool,direction:p.a.oneOf(["up","down","left","right"]),group:p.a.bool,isOpen:p.a.bool,nav:p.a.bool,active:p.a.bool,addonType:p.a.oneOfType([p.a.bool,p.a.oneOf(["prepend","append"])]),size:p.a.string,tag:b.p,toggle:p.a.func,children:p.a.node,className:p.a.string,cssModule:p.a.object,inNavbar:p.a.bool,setActiveFromChild:p.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).addEvents=n.addEvents.bind(Object(s.a)(n)),n.handleDocumentClick=n.handleDocumentClick.bind(Object(s.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(s.a)(n)),n.removeEvents=n.removeEvents.bind(Object(s.a)(n)),n.toggle=n.toggle.bind(Object(s.a)(n)),n.containerRef=c.a.createRef(),n}Object(r.a)(t,e);var n=t.prototype;return n.getContextValue=function(){return{toggle:this.props.toggle,isOpen:this.props.isOpen,direction:"down"===this.props.direction&&this.props.dropup?"up":this.props.direction,inNavbar:this.props.inNavbar}},n.componentDidMount=function(){this.handleProps()},n.componentDidUpdate=function(e){this.props.isOpen!==e.isOpen&&this.handleProps()},n.componentWillUnmount=function(){this.removeEvents()},n.getContainer=function(){return this.containerRef.current},n.getMenuCtrl=function(){return this._$menuCtrl||(this._$menuCtrl=this.getContainer().querySelector("[aria-expanded]")),this._$menuCtrl},n.getMenuItems=function(){return[].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'))},n.addEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}))},n.removeEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)}))},n.handleDocumentClick=function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===b.k.tab)){var t=this.getContainer();(!t.contains(e.target)||t===e.target||"keyup"===e.type&&e.which!==b.k.tab)&&this.toggle(e)}},n.handleKeyDown=function(e){var t=this;if(!(/input|textarea/i.test(e.target.tagName)||b.k.tab===e.which&&"menuitem"!==e.target.getAttribute("role"))&&(e.preventDefault(),!this.props.disabled&&(this.getMenuCtrl()===e.target&&!this.props.isOpen&&[b.k.space,b.k.enter,b.k.up,b.k.down].indexOf(e.which)>-1&&(this.toggle(e),setTimeout((function(){return t.getMenuItems()[0].focus()}))),this.props.isOpen&&"menuitem"===e.target.getAttribute("role"))))if([b.k.tab,b.k.esc].indexOf(e.which)>-1)this.toggle(e),this.getMenuCtrl().focus();else if([b.k.space,b.k.enter].indexOf(e.which)>-1)e.target.click(),this.getMenuCtrl().focus();else if([b.k.down,b.k.up].indexOf(e.which)>-1||[b.k.n,b.k.p].indexOf(e.which)>-1&&e.ctrlKey){var n=this.getMenuItems(),a=n.indexOf(e.target);b.k.up===e.which||b.k.p===e.which&&e.ctrlKey?a=0!==a?a-1:n.length-1:(b.k.down===e.which||b.k.n===e.which&&e.ctrlKey)&&(a=a===n.length-1?0:a+1),n[a].focus()}else if(b.k.end===e.which){var o=this.getMenuItems();o[o.length-1].focus()}else if(b.k.home===e.which){this.getMenuItems()[0].focus()}else if(e.which>=48&&e.which<=90)for(var s=this.getMenuItems(),r=String.fromCharCode(e.which).toLowerCase(),i=0;i<s.length;i+=1){if((s[i].textContent&&s[i].textContent[0].toLowerCase())===r){s[i].focus();break}}},n.handleProps=function(){this.props.isOpen?this.addEvents():this.removeEvents()},n.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},n.render=function(){var e,t,n=Object(b.m)(this.props,["toggle","disabled","inNavbar"]),s=n.className,r=n.cssModule,i=n.direction,l=n.isOpen,p=n.group,d=n.size,g=n.nav,m=n.setActiveFromChild,v=n.active,O=n.addonType,j=n.tag,y=Object(o.a)(n,["className","cssModule","direction","isOpen","group","size","nav","setActiveFromChild","active","addonType","tag"]),N=j||(g?"li":"div"),w=!1;m&&c.a.Children.map(this.props.children[1].props.children,(function(e){e&&e.props.active&&(w=!0)}));var k=Object(b.l)(f()(s,"down"!==i&&"drop"+i,!(!g||!v)&&"active",!(!m||!w)&&"active",((e={})["input-group-"+O]=O,e["btn-group"]=p,e["btn-group-"+d]=!!d,e.dropdown=!p&&!O,e.show=l,e["nav-item"]=g,e)),r);return c.a.createElement(h.a.Provider,{value:this.getContextValue()},c.a.createElement(u.c,null,c.a.createElement(N,Object(a.a)({},y,((t={})["string"===typeof N?"ref":"innerRef"]=this.containerRef,t),{onKeyDown:this.handleKeyDown,className:k}))))},t}(c.a.Component);m.propTypes=g,m.defaultProps={isOpen:!1,direction:"down",nav:!1,active:!1,addonType:!1,inNavbar:!1,setActiveFromChild:!1},t.a=m},878:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(u.l)(p()(t,"input-group-text"),n);return r.a.createElement(s,Object(a.a)({},i,{className:c}))};f.propTypes=d,f.defaultProps={tag:"span"},t.a=f},888:function(e,t,n){"use strict";var a=n(35),o=n(862),s=n(97),r=n(62),i=n(3),c=n.n(i),l=n(107),p=n.n(l),u=n(856),d=n.n(u),f=n(1171),h=n(861),b=n(857),g={tag:b.p,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool},m={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},O=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,r=t.cssModule,i=t.right,l=t.tag,p=t.flip,u=t.modifiers,h=t.persist,g=Object(s.a)(t,["className","cssModule","right","tag","flip","modifiers","persist"]),O=Object(b.l)(d()(n,"dropdown-menu",{"dropdown-menu-right":i,show:this.context.isOpen}),r),j=l;if(h||this.context.isOpen&&!this.context.inNavbar){var y=(v[this.context.direction]||"bottom")+"-"+(i?"end":"start"),N=p?u:Object(o.a)({},u,m);return c.a.createElement(f.a,{placement:y,modifiers:N},(function(t){var n=t.ref,o=t.style,s=t.placement;return c.a.createElement(j,Object(a.a)({tabIndex:"-1",role:"menu",ref:n,style:o},g,{"aria-hidden":!e.context.isOpen,className:O,"x-placement":s}))}))}return c.a.createElement(j,Object(a.a)({tabIndex:"-1",role:"menu"},g,{"aria-hidden":!this.context.isOpen,className:O,"x-placement":g.placement}))},t}(c.a.Component);O.propTypes=g,O.defaultProps={tag:"div",flip:!0},O.contextType=h.a,t.a=O},889:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(858),r=n(62),i=n(3),c=n.n(i),l=n(107),p=n.n(l),u=n(856),d=n.n(u),f=n(861),h=n(857),b={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:h.p,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(s.a)(n)),n.getTabIndex=n.getTabIndex.bind(Object(s.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,n=Object(h.m)(this.props,["toggle"]),s=n.className,r=n.cssModule,i=n.divider,l=n.tag,p=n.header,u=n.active,f=Object(o.a)(n,["className","cssModule","divider","tag","header","active"]),b=Object(h.l)(d()(s,{disabled:f.disabled,"dropdown-item":!i&&!p,active:u,"dropdown-header":p,"dropdown-divider":i}),r);return"button"===l&&(p?l="h6":i?l="div":f.href&&(l="a")),c.a.createElement(l,Object(a.a)({type:"button"===l&&(f.onClick||this.props.toggle)?"button":void 0},f,{tabIndex:e,role:t,className:b,onClick:this.onClick}))},t}(c.a.Component);g.propTypes=b,g.defaultProps={tag:"button",toggle:!0},g.contextType=f.a,t.a=g},891:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(858),r=n(62),i=n(3),c=n.n(i),l=n(107),p=n.n(l),u=n(856),d=n.n(u),f=n(881),h=n.n(f),b=n(876),g=n.n(b),m=n(173),v=n.n(m),O=n(877),j=n.n(O),y=n(880),N=n.n(y),w=n(879),k=n(882),M=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,j()(g()(t),"refHandler",(function(e){Object(k.b)(t.props.innerRef,e),Object(k.a)(t.props.setReferenceNode,e)})),t}v()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){Object(k.b)(this.props.innerRef,null)},n.render=function(){return N()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(k.c)(this.props.children)({ref:this.refHandler})},t}(i.Component);function C(e){return i.createElement(w.b.Consumer,null,(function(t){return i.createElement(M,h()({setReferenceNode:t},e))}))}var x=n(861),E=n(857),T=n(869),R={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:E.p,nav:p.a.bool},P=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(s.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.render=function(){var e,t=this,n=this.props,s=n.className,r=n.color,i=n.cssModule,l=n.caret,p=n.split,u=n.nav,f=n.tag,h=Object(o.a)(n,["className","color","cssModule","caret","split","nav","tag"]),b=h["aria-label"]||"Toggle Dropdown",g=Object(E.l)(d()(s,{"dropdown-toggle":l||p,"dropdown-toggle-split":p,"nav-link":u}),i),m=h.children||c.a.createElement("span",{className:"sr-only"},b);return u&&!f?(e="a",h.href="#"):f?e=f:(e=T.a,h.color=r,h.cssModule=i),this.context.inNavbar?c.a.createElement(e,Object(a.a)({},h,{className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:m})):c.a.createElement(C,null,(function(n){var o,s=n.ref;return c.a.createElement(e,Object(a.a)({},h,((o={})["string"===typeof e?"ref":"innerRef"]=s,o),{className:g,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:m}))}))},t}(c.a.Component);P.propTypes=R,P.defaultProps={"aria-haspopup":!0,color:"secondary"},P.contextType=x.a;t.a=P},894:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(858),r=n(62),i=n(3),c=n.n(i),l=n(107),p=n.n(l),u=n(856),d=n.n(u),f=n(857),h={children:p.a.node,type:p.a.string,size:p.a.string,bsSize:p.a.string,valid:p.a.bool,invalid:p.a.bool,tag:f.p,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),plaintext:p.a.bool,addon:p.a.bool,className:p.a.string,cssModule:p.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(s.a)(n)),n.focus=n.focus.bind(Object(s.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.type,r=e.bsSize,i=e.valid,l=e.invalid,p=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),m=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),O=p||("select"===s||"textarea"===s?s:"input"),j="form-control";h?(j+="-plaintext",O=p||"input"):"file"===s?j+="-file":m&&(j=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var y=Object(f.l)(d()(t,l&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,j),n);return("input"===O||p&&"function"===typeof p)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(f.r)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(O,Object(a.a)({},g,{ref:b,className:y}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},902:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d={tag:u.p,size:c.a.string,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,i=e.size,c=Object(o.a)(e,["className","cssModule","tag","size"]),l=Object(u.l)(p()(t,"input-group",i?"input-group-"+i:null),n);return r.a.createElement(s,Object(a.a)({},c,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},903:function(e,t,n){"use strict";var a=n(35),o=n(97),s=n(3),r=n.n(s),i=n(107),c=n.n(i),l=n(856),p=n.n(l),u=n(857),d=n(878),f={tag:u.p,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,n=e.cssModule,s=e.tag,i=e.addonType,c=e.children,l=Object(o.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(u.l)(p()(t,"input-group-"+i),n);return"string"===typeof c?r.a.createElement(s,Object(a.a)({},l,{className:f}),r.a.createElement(d.a,{children:c})):r.a.createElement(s,Object(a.a)({},l,{className:f,children:c}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},978:function(e,t,n){"use strict";var a=n(35),o=n(3),s=n.n(o),r=n(107),i=n.n(r),c=n(870),l={children:i.a.node},p=function(e){return s.a.createElement(c.a,Object(a.a)({group:!0},e))};p.propTypes=l,t.a=p}}]);
//# sourceMappingURL=13.d13d43cc.chunk.js.map