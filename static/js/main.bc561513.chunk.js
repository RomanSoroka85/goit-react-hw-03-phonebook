(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),s=n(9),r=n.n(s),i=n(7),l=n(3),h=n(4),u=n(6),d=n(5),j=n(2),b=n.n(j),m=function(t){var e=t.contactList,n=t.deleteContact;return console.log(e),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:b.a.contacts,children:"Contacts"}),Object(a.jsx)("ul",{className:b.a.contacts,children:e.map((function(t){return console.log(t),Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:["name - ",t.name," number - ",t.number]}),Object(a.jsx)("button",{id:t.id,onClick:n,children:"Delete"})]},t.id)}))})]})},p=n(10),O=n(18),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={userName:"",userPhone:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),console.log("submit");var n={id:Object(O.a)(),name:t.state.userName,number:t.state.userPhone};console.log(n),console.log(t.props.x),t.props.x(n)},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:b.a.phone,onSubmit:this.handleSubmit,children:[Object(a.jsx)("h2",{children:"Phone book"}),Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{id:"name",name:"userName",type:"text",value:this.state.name,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(a.jsx)("input",{id:"phone",name:"userPhone",type:"tel",value:this.state.phone,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),g=function(t){var e=t.filter,n=t.onHandleChangeFilter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{htmlFor:"name",children:Object(a.jsx)("p",{className:b.a.contacts,children:"Search"})}),Object(a.jsx)("input",{className:b.a.search,id:"name",name:"userName",type:"text",value:e,onChange:n})]})},x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",filter:""},t.addNewContact=function(e){t.setState({contacts:[].concat(Object(i.a)(t.state.contacts),[e])})},t.deleteContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:Object(i.a)(t.contacts.filter((function(t){return t.id!==n})))}}))},t.onHandleChangeFilter=function(e){t.setState({filter:e.target.value})},t.getFiltredContacts=function(){return Object(i.a)(t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLocaleLowerCase())})))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{x:this.addNewContact}),Object(a.jsx)(g,{filter:this.state.filter,onHandleChangeFilter:this.onHandleChangeFilter}),Object(a.jsx)(m,{contactList:this.getFiltredContacts(),deleteContact:this.deleteContact})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={phone:"phoneEditor_phone__2vVW_",description:"phoneEditor_description__2u8ij",name:"phoneEditor_name__2zHN2",statistics:"phoneEditor_statistics__33mln",contacts:"phoneEditor_contacts__2au3A",search:"phoneEditor_search__2_fUH"}}},[[17,1,2]]]);
//# sourceMappingURL=main.bc561513.chunk.js.map