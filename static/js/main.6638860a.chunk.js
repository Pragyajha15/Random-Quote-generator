(this.webpackJsonpthisapp=this.webpackJsonpthisapp||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(13),s=c.n(i),o=c(14),r=c(15),d=c(18),h=c(17),l=c(16),v=c.n(l),p=(c(42),c(1)),u=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={advice:""},e.fetchAdvice=function(){v.a.get("https://api.adviceslip.com/advice").then((function(t){var c=t.data.slip.advice;e.setState({advice:c})})).catch((function(e){console.log(e)}))},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h1",{className:"heading",children:e}),Object(p.jsx)("button",{className:"button",onClick:this.fetchAdvice,children:Object(p.jsx)("span",{children:"Give me Advice !!"})})]})})}}]),c}(a.a.Component);s.a.render(Object(p.jsx)(u,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6638860a.chunk.js.map