(this["webpackJsonpstream-adventure"]=this["webpackJsonpstream-adventure"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(12),a(4)),s=a(6),u=a(5),i=a(1),d=(a(13),a(14),a(15),function(){return c.a.createElement(h.Consumer,null,(function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("span",{id:"title"},e.streamerName.toUpperCase()))}))}),m=(a(16),function(){return c.a.createElement(C.Consumer,null,(function(e){return c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"player",onClick:function(){return e.addFame()}}))}))}),f=(a(17),function(){return c.a.createElement(h.Consumer,null,(function(e){return c.a.createElement("div",{className:"counter"},c.a.createElement("p",null,Math.floor(e.fame)," Fame"),c.a.createElement("p",{id:"f_per_second"},e.famePerSecond.toString().substr(0,4)," per second"))}))}),b=(a(18),function(){return c.a.createElement(C.Consumer,null,(function(e){return c.a.createElement(h.Consumer,null,(function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{onClick:e.addFollower,label:"Follower",cost:t.follower.cost,count:t.follower.count,enabled:t.fame>=t.follower.cost,perSec:e.addFame}),c.a.createElement(E,{onClick:e.addSubscriber,label:"Subscriber",cost:t.subscriber.cost,count:t.subscriber.count,enabled:t.fame>=t.subscriber.cost}),c.a.createElement(E,{onClick:e.addEmbedded,label:"Embedded",cost:t.embedded.cost,count:t.embedded.count,enabled:t.fame>=t.embedded.cost}))}))}))}),E=function(e){return c.a.createElement("div",{className:"action_box ".concat(e.enabled?"enabled":"disabled"),onClick:function(){return e.enabled?e.onClick():null}},c.a.createElement("div",{className:"count"},c.a.createElement("span",null,e.count)),c.a.createElement("div",{className:"title"},c.a.createElement("span",null,e.label)),c.a.createElement("div",{className:"cost"},c.a.createElement("span",null,e.cost)))},v=function(e){return c.a.createElement("div",{className:"action_box ".concat(e.enabled?"enabled":"disabled"),onClick:function(){return e.enabled?e.onClick():null}},c.a.createElement("div",{className:"count"},c.a.createElement("span",null,e.count)),c.a.createElement("div",{className:"title"},c.a.createElement("span",null,e.label)),c.a.createElement("div",{className:"cost"},c.a.createElement("span",null,e.cost)))},w=function(){return c.a.createElement("div",{className:"user_interface"},c.a.createElement(d,null),c.a.createElement(b,null),c.a.createElement(f,null),c.a.createElement(m,null))},p=function(e){return Object(i.a)(Object(i.a)({},e),{},{cost:Math.ceil(e.cost*e.coefficient),count:e.count+1})},S={fame:0,famePerSecond:0,streamerName:"GwaDoush",follower:{coefficient:1.07,cost:10,count:0,baseReward:1},subscriber:{coefficient:1.1,cost:20,count:0,baseReward:.5},embedded:{coefficient:1.13,cost:5e3,count:0,baseReward:200}},N={save:setInterval((function(){}),0),addFamePerSec:setInterval((function(){}),1e3),addSubscriber:function(){},addFame:function(){},addFollower:function(){},addEmbedded:function(){}},O=function(){var e=localStorage.getItem("new_state_2");return e||localStorage.clear(),e?Object(i.a)({},JSON.parse(e)):S},h=c.a.createContext(S),C=c.a.createContext(N),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=O(),e.action={save:setInterval((function(){localStorage.setItem("new_state_2",JSON.stringify(e.state))}),1e3),addFamePerSec:setInterval((function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{fame:e.state.fame+e.state.famePerSecond/10}))}),100),addSubscriber:function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{fame:e.state.fame-e.state.subscriber.cost,famePerSecond:e.state.famePerSecond+e.state.subscriber.baseReward,subscriber:p(e.state.subscriber)}))},addFame:function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{fame:e.state.fame+1+e.state.follower.count}))},addFollower:function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{fame:e.state.fame-e.state.follower.cost,follower:p(e.state.follower)}))},addEmbedded:function(){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{famePerSecond:e.state.famePerSecond+e.state.embedded.baseReward,embedded:p(e.state.embedded)}))}},e.render=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(C.Provider,{value:e.action},c.a.createElement(h.Provider,{value:e.state},c.a.createElement(w,null))))},e}return a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ac5f7f78.chunk.js.map