(this.webpackJsonpmiral=this.webpackJsonpmiral||[]).push([[38],{1067:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),o=t.n(s),u=t(856),i=t.n(u),m=t(857),b={children:o.a.node,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,size:o.a.string,tag:m.p,listTag:m.p,"aria-label":o.a.string},E=function(e){var a,t=e.className,r=e.listClassName,s=e.cssModule,o=e.size,u=e.tag,b=e.listTag,E=e["aria-label"],g=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),d=Object(m.l)(i()(t),s),p=Object(m.l)(i()(r,"pagination",((a={})["pagination-"+o]=!!o,a)),s);return c.a.createElement(u,{className:d,"aria-label":E},c.a.createElement(b,Object(l.a)({},g,{className:p})))};E.propTypes=b,E.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=E},1068:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),o=t.n(s),u=t(856),i=t.n(u),m=t(857),b={active:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,disabled:o.a.bool,tag:m.p},E=function(e){var a=e.active,t=e.className,r=e.cssModule,s=e.disabled,o=e.tag,u=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),b=Object(m.l)(i()(t,"page-item",{active:a,disabled:s}),r);return c.a.createElement(o,Object(l.a)({},u,{className:b}))};E.propTypes=b,E.defaultProps={tag:"li"},a.a=E},1069:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),o=t.n(s),u=t(856),i=t.n(u),m=t(857),b={"aria-label":o.a.string,children:o.a.node,className:o.a.string,cssModule:o.a.object,next:o.a.bool,previous:o.a.bool,first:o.a.bool,last:o.a.bool,tag:m.p},E=function(e){var a,t=e.className,r=e.cssModule,s=e.next,o=e.previous,u=e.first,b=e.last,E=e.tag,g=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),d=Object(m.l)(i()(t,"page-link"),r);o?a="Previous":s?a="Next":u?a="First":b&&(a="Last");var p,f=e["aria-label"]||a;o?p="\u2039":s?p="\u203a":u?p="\xab":b&&(p="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),g.href||"a"!==E||(E="button"),(o||s||u||b)&&(v=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||p),c.a.createElement("span",{className:"sr-only",key:"sr"},f)]),c.a.createElement(E,Object(l.a)({},g,{className:d,"aria-label":f}),v)};E.propTypes=b,E.defaultProps={tag:"a"},a.a=E},866:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),o=t.n(s),u=t(856),i=t.n(u),m=t(857),b={tag:m.p,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.body,o=e.inverse,u=e.outline,b=e.tag,E=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),d=Object(m.l)(i()(a,"card",!!o&&"text-white",!!s&&"card-body",!!r&&(u?"border":"bg")+"-"+r),t);return c.a.createElement(b,Object(l.a)({},g,{className:d,ref:E}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E},867:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),o=t.n(s),u=t(856),i=t.n(u),m=t(857),b={tag:m.p,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,s=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(m.l)(i()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},o,{className:u,ref:r}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E},868:function(e,a,t){"use strict";var l=t(35),n=t(97),r=t(3),c=t.n(r),s=t(107),o=t.n(s),u=t(856),i=t.n(u),m=t(857),b={tag:m.p,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),o=Object(m.l)(i()(a,"card-header"),t);return c.a.createElement(r,Object(l.a)({},s,{className:o}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E},971:function(e,a,t){"use strict";t.r(a);var l=t(221),n=t(222),r=t(224),c=t(223),s=t(3),o=t.n(s),u=t(866),i=t(868),m=t(867),b=t(1067),E=t(1068),g=t(1069),d=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(u.a,null,o.a.createElement(i.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Pagination"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/pagination/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(m.a,null,o.a.createElement(b.a,null,o.a.createElement(E.a,null,o.a.createElement(g.a,{previous:!0,tag:"button"})),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"1")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"2")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"3")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"4")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"5")),o.a.createElement(E.a,null,o.a.createElement(g.a,{next:!0,tag:"button"}))))),o.a.createElement(u.a,null,o.a.createElement(i.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Pagination"),o.a.createElement("small",null," disabled and active states")),o.a.createElement(m.a,null,o.a.createElement(b.a,null,o.a.createElement(E.a,{disabled:!0},o.a.createElement(g.a,{previous:!0,tag:"button"})),o.a.createElement(E.a,{active:!0},o.a.createElement(g.a,{tag:"button"},"1")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"2")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"3")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"4")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"5")),o.a.createElement(E.a,null,o.a.createElement(g.a,{next:!0,tag:"button"}))))),o.a.createElement(u.a,null,o.a.createElement(i.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Pagination"),o.a.createElement("small",null," sizing")),o.a.createElement(m.a,null,o.a.createElement(b.a,{size:"lg"},o.a.createElement(E.a,null,o.a.createElement(g.a,{previous:!0,tag:"button"})),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"1")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"2")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"3")),o.a.createElement(E.a,{className:"d-none d-sm-block"},o.a.createElement(g.a,{next:!0,tag:"button"}))),o.a.createElement(b.a,null,o.a.createElement(E.a,null,o.a.createElement(g.a,{previous:!0,tag:"button"})),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"1")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"2")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"3")),o.a.createElement(E.a,null,o.a.createElement(g.a,{next:!0,tag:"button"}))),o.a.createElement(b.a,{size:"sm"},o.a.createElement(E.a,null,o.a.createElement(g.a,{previous:!0,tag:"button"})),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"1")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"2")),o.a.createElement(E.a,null,o.a.createElement(g.a,{tag:"button"},"3")),o.a.createElement(E.a,null,o.a.createElement(g.a,{next:!0,tag:"button"}))))))}}]),t}(s.Component);a.default=d}}]);
//# sourceMappingURL=38.2b450414.chunk.js.map