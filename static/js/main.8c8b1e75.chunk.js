(this["webpackJsonpempdir-app"]=this["webpackJsonpempdir-app"]||[]).push([[0],{25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(12),s=n.n(c),l=n(17),i=n(13),o=n(14),h=n(15),u=n(19),j=n(18),m=n(0);var d=function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsx)("img",{alt:e.nameFirst,src:e.picture})}),Object(m.jsx)("td",{children:e.nameFirst}),Object(m.jsx)("td",{children:e.nameLast}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.phone})]})};var p=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"form-grp",style:{display:"flex"},children:[Object(m.jsx)("label",{htmlFor:"search"}),Object(m.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search By Name",id:"Search"}),Object(m.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})};n(25);var b=function(e){return Object(m.jsx)("div",{className:"Wrapper",children:e.children})},O=n(16),f=n.n(O),x={search:function(){return f.a.get("https://randomuser.me/api/?results=16&nat=us")}},v=(n(44),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],search:""},e.searchEmployee=function(t){console.log("Search",t);var n=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));e.setState({employees:n})},e.handleInputChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value)),console.log("Handle",e.state.search)},e.handleFormSubmit=function(t){t.preventDefault(),console.log("Button Clicked",e.state.search,t),e.searchEmployee(e.state.search)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.search().then((function(t){console.log(t),e.setState({employees:t.data.results.map((function(e,t){return{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,picture:e.picture.large,key:t}}))})})).catch((function(e){return console.log(e)}))}},{key:"refreshPage",value:function(){window.location.reload(!1)}},{key:"render",value:function(){return Object(m.jsx)(b,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h3",{children:"Employee Directory"}),Object(m.jsx)(p,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Picture"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Phone"}),Object(m.jsx)("th",{children:"Email"})]}),Object(l.a)(this.state.employees).map((function(e){return Object(m.jsx)(d,{picture:e.picture,firstName:e.firstName,lastName:e.lastName,phone:e.phone,email:e.email},e.key)}))]})})]})})}}]),n}(r.a.Component));s.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8c8b1e75.chunk.js.map