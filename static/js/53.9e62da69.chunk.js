(this.webpackJsonpmiral=this.webpackJsonpmiral||[]).push([[53],{1167:function(e,a,t){"use strict";t.r(a);var n=t(939),r=t.n(n),s=t(940),l=t(941),o=t(221),c=t(222),i=t(224),m=t(223),u=t(3),p=t.n(u),d=t(1025),h=t(863),w=t(864),f=t(866),b=t(867),E=t(914),g=t(902),v=t(903),N=t(878),C=t(894),y=t(869),j=t(895),_=t(942),O=t.n(_),k=/^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/,x=/^[a-zA-Z0-9_]+[a-zA-Z0-9_]*[@]{1}[a-zA-Z0-9_]*[.][A-Za-z]{1,3}$/,R=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={username:"",password:"",repeate_password:"",phone_num:"",email:""},e.handleChange=function(a){e.setState(Object(l.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault(),e.setState({username:"",password:"",repeate_password:"",phone_num:"",email:""})},e.register=Object(s.a)(r.a.mark((function a(){var t,n,s,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.state.password,n=e.state.repeate_password,s=e.state.phone_num,l=e.state.email,k.test(s)){a.next=8;break}return alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ud578\ub4dc\ud3f0\ubc88\ud638 \uc785\ub2c8\ub2e4."),window.location.reload(),a.abrupt("return");case 8:if(x.test(l)){a.next=12;break}return alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c \uc785\ub2c8\ub2e4."),window.location.reload(),a.abrupt("return");case 12:if(t===n){a.next=16;break}return alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),window.location.reload(),a.abrupt("return");case 16:O.a.post("http://localhost:3001/account/register",{username:e.state.username,password:e.state.password,email:e.state.email,phone_num:e.state.phone_num}).then((function(e){var a=e.data;if(console.log(a),a.error)switch(a.errorCode){case 6:return alert("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),void window.location.reload();case 7:return alert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),void window.location.reload();case 8:return alert("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),void window.location.reload();case 9:return alert("\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),void window.location.reload();case 10:return alert("\uc874\uc7ac\ud558\ub294 \uc544\uc774\ub514 \uc785\ub2c8\ub2e4."),void window.location.reload();case 11:return alert("DB\uc5f0\uacb0 \uc5d0\ub7ec."),void window.location.reload();default:return alert("\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4."),void window.location.reload()}else alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),window.location.replace("/")})).catch((function(e){console.log("failed",e)}));case 17:case"end":return a.stop()}}),a)}))),e}return Object(c.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"app flex-row align-items-center"},p.a.createElement(d.a,null,p.a.createElement(h.a,{className:"justify-content-center"},p.a.createElement(w.a,{md:"9",lg:"7",xl:"6"},p.a.createElement(f.a,{className:"mx-4"},p.a.createElement(b.a,{className:"p-4"},p.a.createElement(E.a,{onSubmit:this.handleSubmit},p.a.createElement("h1",null,"Register"),p.a.createElement("p",{className:"text-muted"},"Create your account"),p.a.createElement(g.a,{className:"mb-3"},p.a.createElement(v.a,{addonType:"prepend"},p.a.createElement(N.a,null,p.a.createElement("i",{className:"icon-user"}))),p.a.createElement(C.a,{type:"text",value:this.state.username,onChange:this.handleChange,placeholder:"Username",autoComplete:"username",name:"username"})),p.a.createElement(g.a,{className:"mb-3"},p.a.createElement(v.a,{addonType:"prepend"},p.a.createElement(N.a,null,p.a.createElement("i",{className:"icon-lock"}))),p.a.createElement(C.a,{type:"password",id:"pwd1",value:this.state.password,onChange:this.handleChange,placeholder:"Password",autoComplete:"new-password",name:"password"})),p.a.createElement(g.a,{className:"mb-3"},p.a.createElement(v.a,{addonType:"prepend"},p.a.createElement(N.a,null,p.a.createElement("i",{className:"icon-check"}))),p.a.createElement(C.a,{type:"password",id:"pwd2",value:this.state.repeate_password,onChange:this.handleChange,placeholder:"Repeat password",autoComplete:"new-password",name:"repeate_password"})),p.a.createElement(g.a,{className:"mb-3"},p.a.createElement(v.a,{addonType:"prepend"},p.a.createElement(N.a,null,"@")),p.a.createElement(C.a,{type:"text",value:this.state.email,onChange:this.handleChange,placeholder:"Email",autoComplete:"email",name:"email"})),p.a.createElement(g.a,{className:"mb-3"},p.a.createElement(v.a,{addonType:"prepend"},p.a.createElement(N.a,null,p.a.createElement("i",{className:"icon-phone"}))),p.a.createElement(C.a,{type:"text",value:this.state.phone_num,onChange:this.handleChange,placeholder:"Phone_num",autoComplete:"phone_num",name:"phone_num"})),p.a.createElement(y.a,{type:"submit",color:"success",onClick:this.register},"Create Account"))),p.a.createElement(j.a,{className:"p-4"},p.a.createElement(h.a,null,p.a.createElement(w.a,{xs:"12",sm:"6"},p.a.createElement(y.a,{className:"btn-facebook mb-1",block:!0},p.a.createElement("span",null,"facebook"))),p.a.createElement(w.a,{xs:"12",sm:"6"},p.a.createElement(y.a,{className:"btn-twitter mb-1",block:!0},p.a.createElement("span",null,"twitter"))))))))))}}]),t}(u.Component);a.default=R},895:function(e,a,t){"use strict";var n=t(35),r=t(97),s=t(3),l=t.n(s),o=t(107),c=t.n(o),i=t(856),m=t.n(i),u=t(857),p={tag:u.p,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.l)(m()(a,"card-footer"),t);return l.a.createElement(s,Object(n.a)({},o,{className:c}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},914:function(e,a,t){"use strict";var n=t(35),r=t(97),s=t(858),l=t(62),o=t(3),c=t.n(o),i=t(107),m=t.n(i),u=t(856),p=t.n(u),d=t(857),h={children:m.a.node,inline:m.a.bool,tag:d.p,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},w=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(d.l)(p()(a,!!s&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);w.propTypes=h,w.defaultProps={tag:"form"},a.a=w}}]);
//# sourceMappingURL=53.9e62da69.chunk.js.map