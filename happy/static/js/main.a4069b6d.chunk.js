(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){},36:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(30),o=n.n(c),u=n(16),i=n(17),s=n(20),p=n(18),l=n(21),m=n(13),d=n(34),f=n(6),h=n.n(f),v=n(11),b=n(35),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(b.a)({type:e},t)},y="text",j="pic",O="topic",E="totext",g=n(24),w=n(31),k=n.n(w),N=function(e){return new Promise(function(t){k.a.ajax({url:e,method:"GET",success:function(e){"string"==typeof e&&(e=JSON.parse(e)),t(e)}})})},_=function(){var e=Object(g.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("https://www.apiopen.top/satinGodApi?type=2&page=1");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("https://www.apiopen.top/satinGodApi?type=3&page=1");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),z=h.a.mark(R),H=h.a.mark(C),P=h.a.mark(G);function R(){var e;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(v.d)(y);case 3:return t.next=5,Object(v.a)(_);case 5:return e=t.sent,t.next=8,Object(v.c)({type:E,text:e.data});case 8:t.next=0;break;case 10:case"end":return t.stop()}},z,this)}function C(){var e;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(v.d)(j);case 3:return t.next=5,Object(v.a)(T);case 5:return e=t.sent,t.next=8,Object(v.c)({type:O,pic:e.data});case 8:t.next=0;break;case 10:case"end":return t.stop()}},H,this)}function G(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)(R);case 2:return e.next=4,Object(v.b)(C);case 4:case"end":return e.stop()}},P,this)}var J=[],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n=t.text;return e=e.concat(n);default:return e}},D=[],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n=t.pic;return e=e.concat(n);default:return e}},B=Object(m.c)({textRedux:A,picRedux:M}),I=Object(d.a)(),S=Object(m.d)(B,Object(m.a)(I));I.run(G);var q=S,F=n(19),K=(n(25),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getPic(),document.onscroll=function(){e.lazyload()}}},{key:"lazyload",value:function(){(document.documentElement.scrollTop||document.body.scrollTop)+document.documentElement.clientHeight+10>=document.documentElement.scrollHeight&&this.props.getPic()}},{key:"error",value:function(e){e.target.src="",e.target.parentNode.style.display="none"}},{key:"render",value:function(){var e=this,t=this.props.picRedux;console.log(t,"pic");var n=t.map(function(e){return e.text}),a=t.map(function(e){return e.image});return r.a.createElement("div",{className:"content"},a.map(function(t,a){return r.a.createElement("div",{className:"happy_box",key:t+a},r.a.createElement("p",{className:"happy_title happy_text"},n[a]),r.a.createElement("img",{onError:e.error.bind(e),src:t,alt:"",className:"happy_img"}))}))}}]),t}(a.Component)),L=function(){return x(j)},Q=Object(F.b)(function(e){return e},{getPic:L})(K),U=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getText(),document.onscroll=function(){e.lazyload()}}},{key:"lazyload",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight,n=document.documentElement.scrollHeight;console.log(e+t+10>=n),e+t+10>=n&&this.props.getText()}},{key:"render",value:function(){var e=this.props.textRedux;return r.a.createElement("div",{id:"div",className:"content"},e.map(function(e,t){return r.a.createElement("div",{className:"happy_box",key:e+t},r.a.createElement("p",{className:"happy_title"},e.text))}))}}]),t}(a.Component),V=function(){return x(y)},W=Object(F.b)(function(e){return e},{getText:V})(U),X=n(59),Y=n(56),Z=n(58),$=n(57),ee=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(F.a,{store:q},r.a.createElement(X.a,null,r.a.createElement("div",{style:{overflow:"hidden"}},r.a.createElement("div",{className:"tab_nav_a"},r.a.createElement(Y.a,{to:"/pic"},r.a.createElement("span",{className:"nav_l"},"\u56fe\u7247")),r.a.createElement(Y.a,{to:"/text"},r.a.createElement("span",{className:"nav_r"},"\u6bb5\u5b50"))),r.a.createElement(Z.a,{path:"/",exact:!0,render:function(){return r.a.createElement($.a,{to:"/text"})}}),r.a.createElement(Z.a,{path:"/text",exact:!0,component:W}),r.a.createElement(Z.a,{path:"/pic",exact:!0,component:Q}))))}}]),t}(a.Component);o.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.a4069b6d.chunk.js.map