(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={list:"Statistics_list__HxPB-",item:"Statistics_item__3ESS_"}},,,,function(e,t,n){e.exports={container:"Container_container__2MMyw"}},function(e,t,n){e.exports={buttons:"FeedbackOptions_buttons__3TzCa"}},function(e,t,n){e.exports={title:"Section_title__le80j"}},function(e,t,n){e.exports={message:"Notification_message__37lQQ"}},function(e,t,n){e.exports=n(23)},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),s=n(9),o=n(1),u=n(2),l=n(4),p=n(3),b=n(10),f=n.n(b),h=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:f.a.container},e)}}]),n}(a.Component),m=n(11),v=n.n(m),d=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return r.a.createElement("div",{className:v.a.buttons},t.map((function(e){return r.a.createElement("button",{key:e,type:"button",onClick:function(){return n(e)}},e)})))}}]),n}(a.Component),O=n(5),j=n.n(O),k=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.value;return r.a.createElement(r.a.Fragment,null,t," : ","positive feedback"===t?n+"%":n)}}]),n}(a.Component),y=n(6),E=n.n(y),_=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.statistics;return r.a.createElement("ul",{className:E.a.list},e.map((function(e,t){return r.a.createElement("li",{className:E.a.item,key:t},r.a.createElement(k,{name:e[0],value:e[1]}))})))}}]),n}(a.Component);_.props={statistics:j.a.arrayOf(j.a.array.isRequired).isRequired};var g=_,C=n(12),F=n.n(C),S=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return r.a.createElement("section",null,r.a.createElement("h2",{className:F.a.title},t),n)}}]),n}(a.Component),N=n(13),x=n.n(N),w=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.message;return r.a.createElement("p",{className:x.a.message},e)}}]),n}(a.Component),P=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleChangeStatistics=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"options",value:function(){return Object.keys(this.state)}},{key:"statisticsData",value:function(){var e=Object.entries(this.state);return e.push(["total",this.countTotalFeedback()],["positive feedback",this.countPositiveFeedbackPercentage()]),e}},{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}))}},{key:"countPositiveFeedbackPercentage",value:function(){return this.state.good?Math.round(this.state.good/this.countTotalFeedback()*100):0}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(S,{title:"Please leave feedback"},r.a.createElement(d,{options:this.options(),onLeaveFeedback:this.handleChangeStatistics})),r.a.createElement(S,{title:"Statistics"},this.countTotalFeedback()>0?r.a.createElement(g,{statistics:this.statisticsData()}):r.a.createElement(w,{message:"No feedback given"})))}}]),n}(a.Component);n(21),n(22);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.b981189e.chunk.js.map