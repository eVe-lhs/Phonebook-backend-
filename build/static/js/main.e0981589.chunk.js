(this["webpackJsonpphone-book"]=this["webpackJsonpphone-book"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),c=t(14),o=t.n(c),r=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},p=function(e){var n=e.onChange,t=e.value;return u.a.createElement("div",null,"filter shown with",u.a.createElement("input",{onChange:n,value:t}))},v=function(e){var n=e.onNameChange,t=e.onPhoneChange,a=e.name,c=e.phone,o=e.onSubmit;return u.a.createElement("form",null,u.a.createElement("h3",null,"Add a new"),u.a.createElement("div",null,"name: ",u.a.createElement("input",{onChange:n,value:a})),u.a.createElement("div",null,"Phone: ",u.a.createElement("input",{onChange:t,value:c})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit",onClick:o},"add")))},E=function(e){var n=e.persons,t=e.onDel;return u.a.createElement("div",null,u.a.createElement("h2",null,"Numbers"),n.map((function(e){return u.a.createElement("div",{key:e.name},e.name," ",e.number,u.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))})))},g=function(e){var n=e.message,t=e.messageType;return null===n?null:u.a.createElement("div",{className:t},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],s=i[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),w=O[0],C=O[1],k=Object(a.useState)(),S=Object(l.a)(k,2),y=S[0],T=S[1],D=Object(a.useState)(),N=Object(l.a)(D,2),P=N[0],A=N[1];Object(a.useEffect)((function(){f().then((function(e){return c(e)}))}),[]);var I=Object(a.useState)(""),J=Object(l.a)(I,2),L=J[0],x=J[1],B=t;return""!==L&&(B=t.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}))),u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(g,{message:y,messageType:P}),u.a.createElement(p,{onChange:function(e){x(e.target.value)},value:L}),u.a.createElement(v,{onNameChange:function(e){s(e.target.value)},onPhoneChange:function(e){C(e.target.value)},name:m,phone:w,onSubmit:function(e){e.preventDefault();var n={name:m,number:w},a=t.find((function(e){return e.name===m})),u=Object(r.a)(Object(r.a)({},a),{},{number:w});t.includes(a)?a.name===m&&window.confirm("".concat(m," is already in the phonebook, replace the old number with a new one?"))&&h(a.id,u).then((function(e){return c(t.map((function(n){return n.id!==a.id?n:e})))})).then((function(){T("Updated ".concat(n.name)),A("success"),setTimeout((function(){T(null),A(null)}),5e3)})):d(n).then((function(e){return c(t.concat(e))})).then((function(){T("Added ".concat(n.name)),A("success"),setTimeout((function(){T(null),A(null)}),5e3)})),s(""),C("")}}),u.a.createElement(E,{persons:B,onDel:function(e){window.confirm("are you sure u want to delete?")&&b(e).then((function(){T("Deleted ".concat(t.find((function(n){return n.id===e})).name)),A("success"),setTimeout((function(){T(null),A(null)}),5e3)})).catch((function(n){T("Information of ".concat(t.find((function(n){return n.id===e})).name," has already been removed from server")),A("error"),setTimeout((function(){T(null),A(null)}),5e3)}))}}))};t(37);o.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e0981589.chunk.js.map