(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),l=a.n(c),i=a(2),o=a(7),s=a(6);a(16);var m=Object(s.a)(({item:e})=>{return r.a.createElement("div",null,r.a.createElement("input",{value:e.name,onChange:({target:{value:t}})=>{e.changeName(t)}}),r.a.createElement("input",{value:e.price,onChange:({target:{value:t}})=>{const a=Number(t);isNaN(a)||e.changePrice(a)}}))});var u=({item:e})=>{const t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useMemo)(()=>Object(i.c)(e),[e]),u=()=>{l(!1)},p=()=>{Object(i.b)(e,Object(i.g)(s)),l(!1)};return c?r.a.createElement("li",null,r.a.createElement(m,{item:s}),r.a.createElement("button",{onClick:u},"\u53d6\u6d88"),r.a.createElement("button",{onClick:p},"\u4fdd\u5b58")):r.a.createElement("li",null,"name: ",e.name,r.a.createElement("div",null,"price: ",e.price),r.a.createElement("span",null,r.a.createElement("button",{onClick:()=>{l(!0)}},"\u4fee\u6539"),r.a.createElement("button",{onClick:e.remove},"\u522a\u9664")))};var p=i.i.model({name:i.i.string,price:i.i.number}).actions(e=>({changeName(t){e.name=t},changePrice(t){e.price=t},remove(){Object(i.f)(e,2).remove(e)}}));var d=({list:e})=>{const t=p.create({name:"",price:0});return r.a.createElement("div",null,r.a.createElement(m,{item:t}),r.a.createElement("button",{onClick:()=>{e.addItem(t)}},"\u65b0\u589e"))};var g=Object(s.a)(({list:e})=>r.a.createElement("div",null,r.a.createElement("h3",null,"WishLists"),r.a.createElement("ul",null,e.items.map((e,t)=>r.a.createElement(u,{key:t,item:e}))),"total price\uff1a ",e.totalPrice,r.a.createElement(d,{list:e.wishList})));var b=({group:e})=>{const t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.reload},"\u5237\u65b0"),r.a.createElement("br",null),r.a.createElement("select",{onChange:t=>{l(e.users.get(t.target.value))}},r.a.createElement("option",null,"- select user -"),Array.from(e.users.values()).map(e=>r.a.createElement("option",{key:e.id,value:e.id},e.name))),c&&r.a.createElement(g,{list:c.wishList}),c&&r.a.createElement("button",{onClick:c.getSuggestions},"\u5efa\u8bae\u6570\u636e"))},v=a(4),E=a.n(v);var h=i.i.model({items:i.i.optional(i.i.array(p),[])}).actions(e=>({addItem(t){e.items.push(t)},remove(e){Object(i.d)(e)}})).views(e=>({get totalPrice(){return e.items.reduce((e,t)=>e+t.price,0)}}));const w=i.i.model({id:i.i.identifier,name:i.i.string,gender:i.i.enumeration("gender",["f","m"]),wishList:i.i.optional(h,{}),recipient:i.i.maybe(i.i.reference(i.i.late(()=>j)))}),f=i.i.model({}).actions(e=>({getSuggestions:Object(i.e)(E.a.mark(function t(){var a,n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.fetch("http://localhost:3001/suggestions_".concat(e.gender));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.wishList.items.push(...n);case 7:case"end":return t.stop()}},t)}))})),j=i.i.compose(w,f);var O=j;var k=i.i.model({users:i.i.map(O)}).actions(e=>{let t;return{afterCreate(){e.load()},load:Object(i.e)(E.a.mark(function a(){var n,r,c;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=window.AbortController&&new window.AbortController,a.prev=1,a.next=4,window.fetch("http://localhost:3001/users",{signal:null===(n=t)||void 0===n?void 0:n.signal});case 4:return r=a.sent,a.next=7,r.json();case 7:c=a.sent,Object(i.b)(e.users,c),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),console.log("\u8bf7\u6c42\u7ec8\u6b62\u4e86");case 14:case"end":return a.stop()}},a,null,[[1,11]])})),reload(){t&&t.abort(),e.load()},beforeDestroy(){t&&t.abort()}}});let C={users:{}};if(localStorage.getItem("wishListApp")){const e=JSON.parse(localStorage.getItem("wishListApp"));k.is(e)&&(C=e)}let S=k.create(C);Object(i.a)(S,(e,t)=>(console.log("[".concat(e.type,"] ").concat(e.name)),t(e)));const y=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,{group:S})),y),Object(i.h)(S,e=>{localStorage.setItem("wishListApp",JSON.stringify(e))})}},[[11,1,2]]]);
//# sourceMappingURL=main.01e2b373.chunk.js.map