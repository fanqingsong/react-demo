(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(45),o=n.n(c),l=n(10),i=n(6),s=n(12);var m=Object(l.b)(function(e){return{intl:e.intl}})(function(e){return r.a.createElement(s.b,e.intl,e.children)}),u=n(4),p=n(7),d=n(5),E=n(8),f=n(9);n(91);var h=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={bg:"transparent"},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(t){var n=(document.documentElement.scrollTop||document.body.scrollTop)/142*.8;n<=.8&&e.setState({bg:"rgba(234, 44, 44, ".concat(n,")")})}}},{key:"render",value:function(){var e=this.state.bg?this.state.bg:"transprent";return r.a.createElement("div",{id:"search",className:"pf",style:{background:e}},r.a.createElement("div",{className:"search pr"},r.a.createElement("div",{className:"sl pa"},r.a.createElement("i",null)),r.a.createElement("div",{className:"frc pr"},r.a.createElement("span",{className:"searchicon pa"}),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"\u5168\u573a\u7545\u996e\uff0c\u90e8\u5206\u4f4e\u81f399\u51cf50",type:"text"}))),r.a.createElement("div",{className:"sub pa"},r.a.createElement("span",null,"\u767b\u5f55"))))}}]),t}(r.a.Component);n(92),n(93),n(94);var g=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).call(this,e))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"nav-bar-container"},r.a.createElement("ul",{className:"nav-bar"},r.a.createElement(i.b,{activeStyle:{fontWeight:"bold",color:"red"},to:"/Header"},r.a.createElement("span",{className:"icon iconfont"},"\ue619"),r.a.createElement("div",null,r.a.createElement(s.a,{id:"home"}))),r.a.createElement(i.b,{activeStyle:{fontWeight:"bold",color:"red"},to:"/Otherapp"},r.a.createElement("span",{className:"icon iconfont"},"\ue699"),r.a.createElement("div",null,r.a.createElement(s.a,{id:"application"}))),r.a.createElement(i.b,{activeStyle:{fontWeight:"bold",color:"red"},to:"/Spike"},r.a.createElement("span",{className:"icon iconfont"},"\ue60e"),r.a.createElement("div",null,r.a.createElement(s.a,{id:"spike"}))),r.a.createElement(i.b,{activeStyle:{fontWeight:"bold",color:"red"},to:"/More"},r.a.createElement("span",{className:"icon iconfont"},"\ue738"),r.a.createElement("div",null,r.a.createElement(s.a,{id:"more"}))),r.a.createElement(i.b,{activeStyle:{fontWeight:"bold",color:"red"},to:"/Like"},r.a.createElement("span",{className:"icon iconfont"},"\ue687"),r.a.createElement("div",null,r.a.createElement(s.a,{id:"like"}))))),r.a.createElement("div",{className:"content"},this.props.children))}}]),t}(r.a.Component),v=function(e){return{type:"UPDATE_HEADER_IMAGE_URL",payload:e}},b=r.a.lazy(function(){return n.e(3).then(n.bind(null,123))}),y=Object(l.b)(function(e){return{headerImgs:e.headerImgs}},function(e){return{updateImgs:function(){return e({isDataMiddleware:!0,dataPath:"data/swiper",dataTransform:function(e){return e},syncAction:v})}}})(function(e){return r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(b,e)))});n(95);var I=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).call(this,e))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.updateImgs()}},{key:"render",value:function(){var e=0;return r.a.createElement("div",{id:"like"},r.a.createElement("p",null,"\u731c\u4f60\u559c\u6b22"),this.props.likeImgs.map(function(t){return r.a.createElement("div",{className:"like_content",key:"like"+e++},r.a.createElement("div",{className:"like_link"},r.a.createElement("a",{href:t.url},r.a.createElement("img",{src:t.icon,alt:""}))),r.a.createElement("div",{className:"like_desc"},r.a.createElement("span",null,t.desc)),r.a.createElement("div",{className:"like_price"},r.a.createElement("span",null,"\xa5",t.price),r.a.createElement("div",null,r.a.createElement("a",{href:t.more},"\u770b\u76f8\u4f3c"))))}))}}]),t}(r.a.Component),_=function(e){return{type:"UPDATE_LIKE_IMAGE_URL",payload:e}},k=Object(l.b)(function(e){return{likeImgs:e.likeImgs}},function(e){return{updateImgs:function(){return e({isDataMiddleware:!0,dataPath:"data/like",dataTransform:function(e){return e},syncAction:_})}}})(I);n(96);var O=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).call(this,e))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.updateImgs().then(function(){console.log("data update ok!")})}},{key:"render",value:function(){var e=0;return r.a.createElement("div",{className:"oapp"},r.a.createElement("ul",null,this.props.otherappImgs.map(function(t){return r.a.createElement("li",{key:"otherapp"+e++},r.a.createElement("a",{href:t.url},r.a.createElement("div",{className:"app_icon"},r.a.createElement("img",{src:t.icon,alt:""})),r.a.createElement("span",null,t.title)))})))}}]),t}(r.a.Component),j=function(e){return{type:"UPDATE_OTHERAPP_IMAGE_URL",payload:e}},A=Object(l.b)(function(e){return{otherappImgs:e.otherappImgs}},function(e){return{updateImgs:function(){return e({isDataMiddleware:!0,dataPath:"data/otherapp",dataTransform:function(e){return e},syncAction:j})}}})(O);n(97);var N,T=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).call(this,e))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.updateImgs(),this.props.startTimeRefresh()}},{key:"componentWillUnmount",value:function(){this.props.endTimeRefresh()}},{key:"render",value:function(){var e=this,t=0;return r.a.createElement("div",{id:"spike"},r.a.createElement("div",{className:"spike_header"},r.a.createElement("i",null),r.a.createElement("span",{className:"spike_title"},"\u638c\u4e0a\u65f6\u95f4"),r.a.createElement("div",{className:"spike_time"},r.a.createElement("div",null,r.a.createElement("span",null,e.props.spikeImgs.hour),":",r.a.createElement("span",null,e.props.spikeImgs.minutes),":",r.a.createElement("span",null,e.props.spikeImgs.second))),r.a.createElement("div",{className:"spike_more fr"},r.a.createElement("i",{className:"fr"}),r.a.createElement("a",{href:this.props.spikeImgs.more},r.a.createElement("span",null,"\u66f4\u591a\u79d2\u6740"))),r.a.createElement("div",{style:{clear:"both"}})),r.a.createElement("ul",{className:"spike_content"},this.props.spikeImgs.stores.map(function(e){return r.a.createElement("li",{key:"spike"+t++},r.a.createElement("a",{href:e.url},r.a.createElement("div",null,r.a.createElement("img",{src:e.icon,alt:""})),r.a.createElement("p",null,"\xa5",e.sprice),r.a.createElement("p",{className:"real-price"},"\xa5",e.price)))})))}}]),t}(r.a.Component),D=function(e){return{type:"UPDATE_SPIKE_IMAGE_URL",payload:e}},U=function(e,t){return console.log("enter !!!!!!!!!!!!!",e),{stores:e,more:t.more,times:t.times}},w=Object(l.b)(function(e){return{spikeImgs:e.spikeImgs}},function(e){return{updateImgs:function(){return e({isDataMiddleware:!0,dataPath:"data/spike",dataTransform:U,syncAction:D})},startTimeRefresh:function(){return e(function(e){clearInterval(N),N=setInterval(function(){},1e3)})},endTimeRefresh:function(){return e(function(e){clearInterval(N)})}}})(T),M=n(44);n(98),n(59);var P=function(e){function t(e){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).call(this,e))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log("-- updateImgs --"),this.props.updateImgs().then(function(){new M.a(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:1e3}})})}},{key:"render",value:function(){var e=0;return r.a.createElement("div",{id:"more"},r.a.createElement("div",{className:"more_top"},this.props.moreImgs.more1.map(function(t){return r.a.createElement("div",{className:"more_link",key:"more"+e++},r.a.createElement("a",{href:t.url},r.a.createElement("img",{src:t.icon,alt:""})))})),r.a.createElement("div",{className:"more_middle"},this.props.moreImgs.more2.map(function(t){return r.a.createElement("div",{className:"more_style",key:"more"+e++},r.a.createElement("a",{href:t.url},r.a.createElement("img",{src:t.icon,alt:""})))})),r.a.createElement("div",{className:"more_bottom"},r.a.createElement("div",{className:"swiper-container"},r.a.createElement("div",{className:"swiper-wrapper"},this.props.moreImgs.more3.map(function(t){return r.a.createElement("div",{className:"swiper-slide",key:"more"+e++},r.a.createElement("a",{href:t.url},r.a.createElement("img",{src:t.icon,alt:""})))})),r.a.createElement("div",{className:"swiper-pagination"}))))}}]),t}(r.a.Component),R=function(e){return{type:"UPDATE_MORE_IMAGE_URL",payload:e}},S=function(e){return console.log("enter !!!!!!!!!!!!!",e),{more1:e.slice(0,3),more2:e.slice(3,5),more3:e.slice(5,7)}},L=Object(l.b)(function(e){return{moreImgs:e.moreImgs}},function(e){return{updateImgs:function(){return e({isDataMiddleware:!0,dataPath:"data/more",dataTransform:S,syncAction:R})}}})(P),G=r.a.createElement(i.c,{path:"/",component:g},r.a.createElement(i.a,{to:"/Header"}),r.a.createElement(i.c,{path:"/Header",component:y}),r.a.createElement(i.c,{path:"/Like",component:k}),r.a.createElement(i.c,{path:"/Otherapp",component:A}),r.a.createElement(i.c,{path:"/Spike",component:w}),r.a.createElement(i.c,{path:"/More",component:L}));function H(e){return r.a.createElement(l.a,{store:e.store},r.a.createElement(m,null,r.a.createElement(i.d,{history:i.e},G)))}var C=n(15),K=n(51),W=n(58),x=n(24),F=n(23),J="SWITCH_LANGUAGE";var $=Object(x.a)({locale:"en",enabledLanguages:F.a},F.b.en||{}),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:t.type;var n=Object(W.a)(t,["type"]);return Object(x.a)({},e,n);default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LIKE_IMAGE_URL":return console.log("enter UPDATE_LIKE_IMAGE_URL"),console.log("header images:",t.payload),t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_HEADER_IMAGE_URL":return console.log("enter UPDATE_HEADER_IMAGE_URL"),console.log("header images:",t.payload),t.payload;default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_OTHERAPP_IMAGE_URL":return console.log("enter UPDATE_OTHERAPP_IMAGE_URL"),console.log("header images:",t.payload),t.payload;default:return e}},V={hour:"00",minutes:"00",second:"00",stores:[],more:""};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=0,n=0,a=0,r=/^\d{2}$/,c=/^(\d{1,2})\.?\d*$/;return(e=+e)/3600>=1&&(t=e/3600,e-=3600*(t=+c.exec(t.toString())[1]),t=r.test(t.toString())?t.toString():"0".concat(t)),e/60>=1&&(n=e/60,e-=60*(n=+c.exec(n.toString())[1]),n=r.test(n.toString())?n.toString():"0".concat(n)),a=e,{hour:t,minutes:n,second:a=r.test(a.toString())?a.toString():"0".concat(a)}}var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SPIKE_IMAGE_URL":console.log("enter UPDATE_SPIKE_IMAGE_URL"),console.log("header images:",t.payload);var n=Object.assign({},e,t.payload),a=X(+t.payload.times),r=a.hour,c=a.minutes,o=a.second;return n=Object.assign({},n,{hour:r,minutes:c,second:o});case"INCREASE_SPIKE_ONE_SECOND":var l=+t.payload.times,i=X(l+=1),s=i.hour,m=i.minutes,u=i.second;return Object.assign({},e,{hour:s,minutes:m,second:u,times:l});default:return e}},Z={more1:[],more2:[],more3:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MORE_IMAGE_URL":return console.log("enter UPDATE_MORE_IMAGE_URL"),console.log("header images:",t.payload),t.payload;default:return e}},te=Object(C.c)({intl:z,likeImgs:B,headerImgs:q,otherappImgs:Q,spikeImgs:Y,moreImgs:ee}),ne=n(57),ae=n.n(ne),re=function(e){return function(e){return function(t){var n=t.isDataMiddleware;if("undefined"===typeof n||!1===n)return e(t);var a=t.dataPath,r="http://localhost:8000/".concat(a),c=t.dataTransform,o=t.syncAction;return ae.a.get(r).then(function(e){return e.data}).then(function(t){if(console.log(t),t.status){var n=c(t.data,t);console.log("finalData=",n),e(o(n))}else console.log(t.msg)}).catch(function(){console.log("fetch encounter error!")})}}};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[Object(C.a)(K.a,re)];return Object(C.e)(te,e,C.d.apply(void 0,t))}(window.__INITIAL_STATE__);o.a.render(r.a.createElement(H,{store:ce}),document.getElementById("root"))},23:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return E}),n.d(t,"b",function(){return f});var a=n(12),r=n(30),c=n.n(r),o=n(56),l=n.n(o),i=(n(101),n(52)),s=n.n(i),m=n(53),u=(n(102),n(54)),p=n.n(u),d=n(55),E=["en","fr"],f={};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce(function(n,a){var r=e[a],c=t?"".concat(t,".").concat(a):a;return"string"===typeof r?n[c]=r:Object.assign(n,h(r,c)),n},{})}e.Intl?l()(E)||(e.Intl.NumberFormat=c.a.NumberFormat,e.Intl.DateTimeFormat=c.a.DateTimeFormat):e.Intl=c.a,Object(a.c)(s.a),f.en=m.a,f.en.messages=h(f.en.messages),Object(a.c)(p.a),f.fr=d.a,f.fr.messages=h(f.fr.messages)}).call(this,n(26))},50:function(e,t){},53:function(e,t,n){"use strict";t.a={locale:"en",messages:{home:"\u9996\u9875",application:"\u5e94\u7528",spike:"\u79d2\u6740",more:"\u66f4\u591a",like:"\u559c\u6b22"}}},55:function(e,t,n){"use strict";t.a={locale:"fr",messages:{home:"\u9996\u9875",application:"\u5e94\u7528",spike:"\u79d2\u6740",more:"\u66f4\u591a",like:"\u559c\u6b22"}}},60:function(e,t,n){e.exports=n(121)},84:function(e,t){},90:function(e,t){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[60,1,2]]]);
//# sourceMappingURL=main.55a66a82.chunk.js.map