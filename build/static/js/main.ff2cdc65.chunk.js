(this["webpackJsonpphone-book"]=this["webpackJsonpphone-book"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),u=t(14),r=t.n(u),c=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(s,"/").concat(e))},b=function(e){var n=e.onChange,t=e.value;return o.a.createElement("div",null,"filter shown with",o.a.createElement("input",{onChange:n,value:t}))},v=function(e){var n=e.onNameChange,t=e.onPhoneChange,a=e.name,u=e.phone,r=e.onSubmit;return o.a.createElement("form",null,o.a.createElement("h3",null,"Add a new"),o.a.createElement("div",null,"name: ",o.a.createElement("input",{onChange:n,value:a})),o.a.createElement("div",null,"Phone: ",o.a.createElement("input",{onChange:t,value:u})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",onClick:r},"add")))},E=function(e){var n=e.persons,t=e.onDel;return o.a.createElement("div",null,o.a.createElement("h2",null,"Numbers"),n.map((function(e){return o.a.createElement("div",{key:e.name},e.name," ",e.phoneNumber,o.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))})))},g=function(e){var n=e.message,t=e.messageType;return null===n?null:o.a.createElement("div",{className:t},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),m=i[0],s=i[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),w=O[0],C=O[1],k=Object(a.useState)(),S=Object(l.a)(k,2),y=S[0],T=S[1],N=Object(a.useState)(),D=Object(l.a)(N,2),P=D[0],A=D[1];Object(a.useEffect)((function(){f().then((function(e){return u(e)}))}),[]);var I=Object(a.useState)(""),J=Object(l.a)(I,2),L=J[0],x=J[1],B=t;return""!==L&&(B=t.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}))),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(g,{message:y,messageType:P}),o.a.createElement(b,{onChange:function(e){x(e.target.value)},value:L}),o.a.createElement(v,{onNameChange:function(e){s(e.target.value)},onPhoneChange:function(e){C(e.target.value)},name:m,phone:w,onSubmit:function(e){e.preventDefault();var n={name:m,phoneNumber:w},a=t.find((function(e){return e.name===m})),o=Object(c.a)(Object(c.a)({},a),{},{phoneNumber:w});t.includes(a)?a.name===m&&window.confirm("".concat(m," is already in the phonebook, replace the old number with a new one?"))&&h(a.id,o).then((function(e){return u(t.map((function(n){return n.id!==a.id?n:e})))})).then((function(){T("Updated ".concat(n.name)),A("success"),setTimeout((function(){T(null),A(null)}),5e3)})).catch((function(e){T(e.response.data.error),A("error"),setTimeout((function(){T(null),A(null)}),5e3)})):d(n).then((function(e){return u(t.concat(e))})).then((function(){T("Added ".concat(n.name)),A("success"),setTimeout((function(){T(null),A(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),T(e.response.data.error),A("error"),setTimeout((function(){T(null),A(null)}),5e3)})),s(""),C("")}}),o.a.createElement(E,{persons:B,onDel:function(e){window.confirm("are you sure u want to delete?")&&p(e).then((function(){T("Deleted ".concat(t.find((function(n){return n.id===e})).name)),A("success"),setTimeout((function(){T(null),A(null)}),5e3)})).catch((function(n){T("Information of ".concat(t.find((function(n){return n.id===e})).name," has already been removed from server")),A("error"),setTimeout((function(){T(null),A(null)}),5e3)}))}}))};t(37);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ff2cdc65.chunk.js.map