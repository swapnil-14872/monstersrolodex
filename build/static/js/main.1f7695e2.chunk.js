(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),r=t(7),a=t.n(r),o=(t(12),t(2)),i=t(3),h=t(5),u=t(4),l=(t(13),t(14),t(15),t(0)),j=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.mons.id+4,"?set=set2")}),Object(l.jsx)("h1",{children:e.mons.name}),Object(l.jsx)("p",{children:e.mons.email})]})},d=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(o.a)(this,t),n.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"card-list",children:this.props.mons.map((function(e){return Object(l.jsx)(j,{mons:e},e.id)}))})}}]),t}(c.Component);t(17);var f=function(e){var n=e.placeholder,t=e.handlechange;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})})},b=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).handlechange=function(n){e.setState({searchfield:n.target.value})},e.state={mons:[],searchfield:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({mons:n})}))}},{key:"render",value:function(){var e=this.state,n=e.mons,t=e.searchfield,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:" Monsters Exhibition "}),Object(l.jsx)(f,{placeholder:"Search Monsters",handlechange:this.handlechange}),Object(l.jsx)(d,{mons:c})]})}}]),t}(c.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.1f7695e2.chunk.js.map