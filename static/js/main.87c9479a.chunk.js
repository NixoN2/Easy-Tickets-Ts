(this["webpackJsonpeasy-tickets-typescript-recoil-antd"]=this["webpackJsonpeasy-tickets-typescript-recoil-antd"]||[]).push([[0],{37:function(e,t,c){},62:function(e,t){},63:function(e,t){},64:function(e,t){},65:function(e,t){},66:function(e,t){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c(13),r=c.n(l),a=c(5),o=(c(37),c(38),c(3)),s=c.p+"static/media/github.c1c26463.svg",i=c(7),d=Object(a.b)({key:"ticketList",default:{id:"",title:"",tickets:[]}}),u=Object(a.b)({key:"Lists",default:null===JSON.parse(localStorage.getItem("lists"))?[]:Object(i.a)(JSON.parse(localStorage.getItem("lists")))}),b=Object(a.b)({key:"Pdf",default:""}),j=Object(a.b)({key:"Show",default:!1}),h=Object(a.b)({key:"Pages",default:[]}),m=Object(a.c)({key:"infoValue",get:function(e){var t=e.get;return{total:t(d).tickets.length,completed:t(d).tickets.filter((function(e){return e.completed})).length}}}),x=c(2),f=function(){var e=Object(a.d)(u),t=Object(o.a)(e,2),c=t[0],n=(t[1],Object(a.d)(d)),l=Object(o.a)(n,2),r=(l[0],l[1]),i=c.map((function(e){return e.title}));return Object(x.jsxs)("div",{className:"bg-haiti w-screen h-20 flex justify-between",children:[Object(x.jsx)("h1",{className:"text-french-mauve text-5xl mt-4 ml-5",children:"Easy Tickets"}),Object(x.jsxs)("select",{id:"list-name",defaultValue:"default",onChange:function(e){for(var t=0;t<c.length;++t)e.target.value===c[t].title&&r(c[t])},className:"mt-5 mr-10 focus:outline-none  w-96 h-10 text-lg text-valhalla rounded-md pl-2 bg-french-mauve",children:[Object(x.jsx)("option",{disabled:!0,value:"default",hidden:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a"},"default-option"),i?i.map((function(e,t){return Object(x.jsx)("option",{className:"text-lg text-valhalla",children:e},"".concat(e,"-").concat(t,"}"))})):null]}),Object(x.jsx)("a",{href:"https://github.com/NixoN2",children:Object(x.jsx)("img",{className:"mt-2 mr-16 w-16 h-16",src:s,alt:"github"})})]})},p=c(6),O=c.n(p),v=c(17),g=c(70),k=function(){var e=Object(a.d)(d),t=Object(o.a)(e,2),c=t[0],l=(t[1],Object(n.useState)([])),r=Object(o.a)(l,2),s=r[0],i=r[1],j=Object(a.d)(b),h=Object(o.a)(j,2),m=h[0],f=h[1],p=Object(a.d)(u),k=Object(o.a)(p,2),w=k[0],N=k[1],y=Object(n.useState)(""),C=Object(o.a)(y,2),S=C[0],L=C[1],B=Object(n.useState)(!1),I=Object(o.a)(B,2),E=I[0],D=I[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{onChange:function(e){L(e.target.value)},className:"focus:outline-none  bg-french-mauve ml-5 mt-5 w-96 h-9 pl-2 text-lg rounded-lg text-valhalla placeholder-valhalla placeholder-opacity-85",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430:",id:"name"}),E?Object(x.jsxs)("label",{className:"bg-french-mauve ml-3 rounded-xl text-valhalla text-lg text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve outline p-1.5 pl-5 pr-5",htmlFor:"txt",children:["\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 txt-\u0444\u0430\u0439\u043b ",Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 pb-1 bg-french-mauve inline-block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})]}):Object(x.jsx)("label",{className:"bg-french-mauve ml-3 rounded-xl text-valhalla text-lg text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve outline p-1.5 pl-5 pr-5",htmlFor:"txt",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 txt-\u0444\u0430\u0439\u043b "}),Object(x.jsx)("input",{onChange:function(e){e.preventDefault();var t=new FileReader;t.onload=function(e){D(!0);var t=e.target.result.split(";"),c=[];t.forEach((function(e){var t=e.split("|")[0].split(" "),n=e.split("|")[1].split(","),l=[];n.forEach((function(e){if(1===e.split("-").length)l.push(Number(e));else for(var t=e.split("-"),c=Number(t[0]),n=Number(t[1]),r=c;r<=n;++r)l.push(r)}));var r={id:t[0].match(/\d+/g)[0],title:t.slice(1).join(" "),completed:!1,pages:l};c.push(r)})),i(c)},e.target.files[0]instanceof Blob&&t.readAsText(e.target.files[0],"windows-1251")},className:"w-0 h-0",type:"file",id:"txt"}),""===m?Object(x.jsx)("label",{className:"bg-french-mauve ml-3 rounded-xl text-valhalla text-lg text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve p-1.5 pl-5 pr-5",htmlFor:"pdf",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 pdf-\u0444\u0430\u0439\u043b"}):Object(x.jsxs)("label",{htmlFor:"pdf",className:"bg-french-mauve ml-3 rounded-xl text-valhalla text-lg text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve p-1.5 pl-5 pr-5",children:["\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 pdf-\u0444\u0430\u0439\u043b ",Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 pb-1 bg-french-mauve inline-block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})]}),Object(x.jsx)("input",{onChange:function(e){e.preventDefault();var t=new FileReader;t.onload=function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(t.target.result);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.target.files[0]instanceof Blob&&t.readAsDataURL(e.target.files[0])},className:"w-0 h-0",type:"file",id:"pdf"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),""!==S&&c.tickets!==[]&&(N(w.concat({id:Object(g.a)(),title:S,tickets:s})),localStorage.setItem("lists",JSON.stringify(w.concat({id:Object(g.a)(),title:S,tickets:s}))),document.getElementById("name").value="",document.getElementById("txt").value="",document.getElementById("pdf").value="",D(!1))},className:"focus:outline-none bg-french-mauve ml-3 rounded-xl text-valhalla text-lg text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-10 w-32",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},w=function(e){var t=e.id,c=e.title,n=e.completed,l=e.pages,r=Object(a.d)(d),s=Object(o.a)(r,2),u=s[0],b=s[1],m=Object(a.d)(j),f=Object(o.a)(m,2),p=(f[0],f[1]),O=Object(a.f)(h),v=function(e){b({id:u.id,title:u.title,tickets:[].concat(Object(i.a)(u.tickets.slice(0,Number(t)-1)),[{id:t,title:c,completed:!n,pages:l}],Object(i.a)(u.tickets.slice(Number(t))))})};return Object(x.jsxs)("div",{className:"flex mt-3 ml-5",children:[Object(x.jsxs)("p",{className:"text-french-mauve text-2xl max-w-7xl",children:[t,":  ",c]}),n?Object(x.jsx)("button",{onClick:v,className:"w-5 h-5 ml-2 mt-1.5 focus:outline-none bg-french-mauve rounded-sm"}):Object(x.jsx)("button",{onClick:v,className:"w-5 h-5 ml-2 mt-1.5 focus:outline-none bg-white rounded-sm"}),Object(x.jsx)("button",{onClick:function(e){O(l),p(!0)},className:"focus:outline-none bg-french-mauve ml-4 rounded-xl text-valhalla text-lg text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-8 w-32",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})]})},N=function(){var e=Object(a.d)(d),t=Object(o.a)(e,2),c=t[0],n=t[1],l=Object(a.d)(u),r=Object(o.a)(l,2),s=r[0],b=r[1],j=Object(a.e)(m);return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"flex mb-5",children:[""!==c.title?Object(x.jsx)("h1",{className:" ml-4 mt-4 rounded-xl text-french-mauve text-2xl text-center border-2 border-french-mauve outline p-1.5 pl-10 pr-10",children:c.title}):null,""!==c.title?Object(x.jsx)("button",{onClick:function(e){for(var t=c.id,l=0;l<s.length;++l)s[l].id===t&&(b([].concat(Object(i.a)(s.slice(0,l)),Object(i.a)(s.slice(l+1)))),localStorage.setItem("lists",JSON.stringify([].concat(Object(i.a)(s.slice(0,l)),Object(i.a)(s.slice(l+1))))),n({id:"",title:"",tickets:[]}))},className:"focus:outline-none bg-french-mauve ml-4 mt-4 rounded-xl text-valhalla text-2xl text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-12 w-40",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}):null]}),Object(x.jsx)("div",{children:""!==c.title?Object(x.jsxs)("p",{className:"text-french-mauve text-2xl ml-4 border-2 border-french-mauve w-80 h-12 text-center pt-2 rounded-xl",children:[j.completed,"/",j.total," \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438\u0437\u0443\u0447\u0435\u043d\u043e"]}):null}),c.tickets.map((function(e){return Object(x.jsx)(w,{id:e.id,title:e.title,completed:e.completed,pages:e.pages},Object(g.a)())}))]})},y=c(18);y.c.GlobalWorkerOptions.workerSrc="/pdf.worker.min.js";var C=function(){var e=Object(a.d)(j),t=Object(o.a)(e,2),c=t[0],l=t[1],r=Object(a.d)(h),s=Object(o.a)(r,2),i=s[0],d=(s[1],Object(a.d)(b)),u=Object(o.a)(d,2),m=u[0],f=(u[1],Object(n.useState)(1.7)),p=Object(o.a)(f,2),O=p[0],v=p[1],g=c?"fixed top-0 left-0 w-screen h-screen block":"fixed top-0 left-0 w-screen h-screen hidden";return Object(x.jsx)("div",{onClick:function(e){(e.clientY<80||e.clientY>900||e.clientX<480||e.clientX>1440)&&l(!1)},className:g,children:Object(x.jsxs)("div",{className:"bg-ebony bg-opacity-75 w-screen h-screen pt-20",children:[Object(x.jsxs)("div",{className:"h-20 bg-white w-3/6 mx-auto",children:[Object(x.jsx)("button",{type:"button",className:"float-right mr-5 mt-5",onClick:function(e){l(!1)},children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 opacity-40",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(x.jsx)("div",{className:"flex justify-around pt-5",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),v(O+.1)},className:"mr-6 w-8 h-8 bg-ebony text-french-mauve text-2xl rounded-xl",children:"+"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),v(O-.1)},className:"w-8 h-8 bg-ebony text-french-mauve text-2xl rounded-xl",children:"-"})]})})]}),Object(x.jsx)("section",{className:"bg-white w-3/6 h-5/6 overflow-auto mx-auto",children:i!==[]?Object(x.jsx)(y.a,{file:m,options:{workerSrc:"/pdf.worker.js"},children:i.map((function(e,t){return Object(x.jsx)(y.b,{pageNumber:e,scale:O},"page_".concat(t+1))}))}):null})]})})},S=function(){return Object(x.jsxs)("div",{className:"bg-ebony w-screen h-screen overflow-x-hidden overflow-y-scroll",children:[Object(x.jsx)(C,{}),Object(x.jsx)(f,{}),Object(x.jsx)(k,{}),Object(x.jsx)(N,{})]})};r.a.render(Object(x.jsx)(a.a,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.87c9479a.chunk.js.map