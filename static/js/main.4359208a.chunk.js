(this["webpackJsonpbaby-shopping-list"]=this["webpackJsonpbaby-shopping-list"]||[]).push([[0],{35:function(e,t,n){e.exports=n(68)},40:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),c=n.n(o),i=(n(40),n(14)),u=n(10),l=n(3),p=Object(l.b)((function(){return{root:{display:"flex",alignItems:"center",justifyContent:"center",padding:"0 20px",height:"104px",marginBottom:"30px"},logo:{userSelect:"none",cursor:"pointer",fontSize:"56px",color:"#7bc69f",textShadow:"1px -3px #000000"}}})),s=function(){var e=Object(u.f)(),t=Object(l.c)(),n=p({theme:t});return r.a.createElement("div",{className:"".concat(n.root," branded-background")},r.a.createElement("h1",{className:"logo-font ".concat(n.logo),onClick:function(){return e.push("/")}},"Wyprawka Melisski"))},m=n(9),d=n(25),h=n.n(d),f=n(32),b=n(34),x=n(33),v=n(11),g=n(12),j=function(){function e(t){Object(v.a)(this,e),this.url=void 0,this.url=t}return Object(g.a)(e,[{key:"makeArguments",value:function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat("object"===typeof e[1]?JSON.stringify(e[1]):e[1])})).join("&")}},{key:"execute",value:function(e){var t=this;return new Promise((function(n,a){var r=!1,o=e.exec[0],c=t.makeArguments(e.exec[1]),i="".concat(t.url).concat(o,"?").concat(c);fetch(i).then((function(e){return e.json()})).then((function(e){if(!r){r=!0;var t=e;console.log("\ud83d\udcf6",o,"=>",t),n(t)}})).catch(a)}))}}]),e}(),O=function(){function e(t){Object(v.a)(this,e),this.exec=void 0,this.status=void 0,this.exec=t,this.status=0}return Object(g.a)(e,[{key:"parse",value:function(e,t){return t}}]),e}(),y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Object(a.useRef)(null),c=w();if(null===o.current){var i=e.apply(void 0,n),u=function(e){o.current[0]=e,c()};o.current=[i,u]}return Object(a.useEffect)((function(){var t=e.apply(void 0,n);o.current[0]!==t&&o.current[1](t)}),[e,n]),o.current},E=0,w=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2)[1];return function(){t(E++)}},k="https://us-central1-baby-shopping-list.cloudfunctions.net/",I=new j(k),N=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Object(a.useRef)(null),c=w();if(null===o.current){o.current={status:102};var i=function(){var t=Object(x.a)(h.a.mark((function t(){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n||[],t.next=3,I.execute(Object(f.a)(e,Object(b.a)(a)));case 3:r=t.sent,o.current=r,c();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i()}return o.current},P=n(20),W=n(21),S=function(e){Object(P.a)(n,e);var t=Object(W.a)(n);function n(e){return Object(v.a)(this,n),t.call(this,["productInfo",{token:e}])}return Object(g.a)(n,[{key:"parse",value:function(e,t){return t}}]),n}(O),C=function(e){Object(P.a)(n,e);var t=Object(W.a)(n);function n(e){return Object(v.a)(this,n),t.call(this,["productList",{volume:e}])}return Object(g.a)(n,[{key:"parse",value:function(e,t){return t}}]),n}(O),R=function(e){Object(P.a)(n,e);var t=Object(W.a)(n);function n(e){return Object(v.a)(this,n),t.call(this,["productCreate",e])}return Object(g.a)(n,[{key:"parse",value:function(e,t){return t}}]),n}(O),T=function(e){return null!==e&&102!==e.status},_=n(19),z=n.n(_),A=Object(l.b)((function(e){return{root:{position:"relative",flexBasis:"30%",flexGrow:1,minWidth:"200px",borderRadius:"8px",margin:"0 10px 15px",background:"white",transition:"background 255ms ease","&:hover":{background:"#0000000a"}},image:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",minWidth:"100%",minHeight:"100%",width:"100%",height:"auto",filter:function(e){return e.available?"none":"grayscale(1)"},cursor:"pointer"},imageWrapper:{position:"relative",overflow:"hidden",width:"100%",minWidth:"inherit",height:"350px",background:"#eee",borderTopRightRadius:"8px",borderTopLeftRadius:"8px",boxShadow:"0 1px 2px 0 rgba(".concat(e.palette.primary.main,",.3), 0 2px 6px 2px rgba(60,64,67,.15)")},title:{cursor:"pointer",color:e.palette.primary.main},textWrapper:{padding:"16px"},"@media only screen and (max-width: 600px)":{root:{flexBasis:"99%"}},"@media only screen and (min-width: 601px) and (max-width: 960px)":{root:{flexBasis:"45%"}}}})),B=function(e){var t=e.data,n=Object(u.f)(),a=Object(l.c)(),o=A({available:t.available,theme:a}),c=function(){n.push("/product/".concat(t.token))};return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.imageWrapper,onClick:c},r.a.createElement("img",{className:o.image,src:t.media_url,alt:"media_url"})),r.a.createElement("div",{className:o.textWrapper},r.a.createElement("h2",{onClick:c,className:o.title},t.name),r.a.createElement("p",{style:{opacity:.5,fontSize:14}},t.description)))},D=Object(l.b)((function(e){return{root:{flex:1,minHeight:"calc(100vh - 110px)"},list:{display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"base-line",justifyContent:"flex-start",maxWidth:"1250px",margin:"120px auto 0"},bgWrapper:{position:"absolute",width:"100vw",maxWidth:"100%",maxHeight:"100%",top:0,left:0,height:"100vh",zIndex:-1,overflow:"hidden"}}})),H=function(){var e,t=N(C),n=y((function(e){return T(e)?e.data:null}),t),a=Object(m.a)(n,1)[0],o=Object(l.c)(),c=D({theme:o}),i=null===o||void 0===o||null===(e=o.palette)||void 0===e?void 0:e.primary.main;return r.a.createElement("div",{className:c.root},null===a&&r.a.createElement("div",{style:{position:"absolute",left:"50%",right:"50%",zIndex:999,width:"100px",height:"100px"}},r.a.createElement(z.a,{color:i,type:"TailSpin",height:100,width:100,timeout:999999})),null!==a&&r.a.createElement("div",{className:c.list},a.map((function(e){return r.a.createElement(B,{key:e.token+e.name,data:e})}))))},J=function(){var e,t,n=Object(u.g)().token,a=N(S,n),o=y((function(e){return T(e)?e.data:null}),a),c=Object(m.a)(o,1)[0],i=Object(l.c)();return c?a&&200!==a.status?r.a.createElement("p",null,"Product not found"):r.a.createElement("div",null,r.a.createElement("h2",null,c.name),r.a.createElement("p",{style:{opacity:.6}},c.description)):r.a.createElement(z.a,{color:null===i||void 0===i||null===(e=i.palette)||void 0===e||null===(t=e.primary)||void 0===t?void 0:t.main,type:"TailSpin",height:100,width:100,timeout:999999,style:{position:"absolute",left:"50%",right:"50%",zIndex:999}})},L=Object(l.b)((function(e){return{root:{flexGrow:1,flexBasis:function(e){return e.fluid?"100%":"40%"},width:function(e){return e.fluid?"100%":"40%"},position:"relative",marginBottom:"10px",padding:"0 6px"},input:{width:"calc(100% - 14px)",background:"transparent",outline:0,padding:"12px 6px",border:"1px solid #eee",borderRadius:"4px","&:focus":{borderColor:e.palette.primary.main}}}})),G=function(e){e.initialValue;var t=e.onChange,n=e.InputProps,o=e.fluid,c=void 0!==o&&o,i=Object(a.useRef)(null),u=Object(l.c)(),p=L({theme:u,fluid:c}),s=function(){var e=Object(a.useRef)(null);if(null===e.current){e.current=[void 0,function(t,n){e.current[0]&&clearTimeout(e.current[0]);var a=setTimeout(t,n);e.current[0]=a}]}return e.current}(),d=Object(m.a)(s,2)[1];return r.a.createElement("div",{className:p.root},r.a.createElement("input",Object.assign({className:p.input,onChange:function(e){e.preventDefault(),d((function(){return t&&t(e.currentTarget.value)}),2e3)},ref:i},n)))},M=Object(l.b)((function(e){return{root:{}}})),Z=function(e){var t=e.children,n=e.onSubmit,a=Object(l.c)(),o=M({theme:a});return r.a.createElement("form",{className:o.root,onSubmit:function(e){e.preventDefault(),n&&n(e)}},t)};Z.Input=G;var q=Z,V=Object(l.b)((function(e){return{root:{padding:"0 15px"},flex:{display:"flex",alignItems:"baseline",flexWrap:"wrap"}}})),$=function(){var e=Object(l.c)(),t=V({theme:e});return r.a.createElement("div",{className:t.root},r.a.createElement("h4",null,"Dodaj nowy produkt do wyprawki"),r.a.createElement(q,{onSubmit:function(e){e.preventDefault();var t=function(e){var t={};return["name","description","url","media_url"].forEach((function(n){t[n]=e.querySelector('input[name="product_'.concat(n,'"]')).value})),t}(e.target);new j(k).execute(new R(t))}},r.a.createElement("div",{className:t.flex},r.a.createElement(q.Input,{fluid:!0,InputProps:{placeholder:"Nazwa produktu",name:"product_name"},onChange:console.log}),r.a.createElement(q.Input,{fluid:!0,InputProps:{placeholder:"Opis produktu",name:"product_description"},onChange:console.log}),r.a.createElement(q.Input,{InputProps:{placeholder:" Link do produktu",name:"product_url"},onChange:console.log}),r.a.createElement(q.Input,{InputProps:{placeholder:"Zdj\u0119cie produktu",name:"product_media_url"},onChange:console.log})),r.a.createElement("button",{style:{margin:"0 6px"}},"Dodaj")))},F=Object.freeze([{id:"home-01",path:"/",pattern:new RegExp("/"),label:"Home",pathTree:["Home"],exact:!0,component:H,get routeProps(){return{path:this.path,exact:this.exact,component:this.component}}},{id:"product-01",exactPath:"/product",params:":token",pattern:/\/product\/[A-Z-a-z-0-9]*/,get path(){return this.exactPath+"/"+this.params},label:"Product",pathTree:["Home","Product"],exact:!1,component:J,get routeProps(){return{path:this.path,exact:this.exact,component:this.component}}},{id:"admin-01",path:"/admin",pattern:new RegExp("/admin"),exact:!0,label:"Admin Dashboard",pathTree:["Home","Admin"],component:$,get routeProps(){return{path:this.path,exact:this.exact,component:this.component}}}]),K={palette:{primary:{main:"#7bc69f"}}};var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{theme:K},r.a.createElement(i.a,null,r.a.createElement(s,null),r.a.createElement(u.c,null,F.map((function(e){return r.a.createElement(u.a,Object.assign({key:e.path+e.label},e.routeProps))})),r.a.createElement(u.a,{component:function(){return r.a.createElement("h4",null,"ErrorPage")}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(67);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4359208a.chunk.js.map