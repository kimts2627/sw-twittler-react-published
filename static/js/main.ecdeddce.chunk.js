(this["webpackJsonptwittler-react"]=this["webpackJsonptwittler-react"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},8:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),s=n.n(i);n(8);class d extends r.a.Component{constructor(e){super(e),this.state={tweets:[{uuid:1,writer:"\uae40\ucf54\ub529",date:"2020-10-10",content:"\uc548\ub155 \ub9ac\uc561\ud2b8"},{uuid:2,writer:"\ubc15\ud574\ucee4",date:"2020-10-12",content:"\uc88b\uc544 \ucf54\ub4dc\uc2a4\ud14c\uc774\uce20!"}],newTweetContent:""},this.onTextChange=this.onTextChange.bind(this),this.addNewTweet=this.addNewTweet.bind(this)}onTextChange(e){this.setState({newTweetContent:e.target.value})}addNewTweet(e){var t={uuid:this.state.tweets.length+1,writer:"\uae40\ucf54\ub529",date:(new Date).toISOString().substring(0,10),content:this.state.newTweetContent};this.setState(e=>({tweets:[...e.tweets,t]}))}render(){return r.a.createElement("div",null,r.a.createElement("div",null,"\uc791\uc131\uc790: ","\uae40\ucf54\ub529"),r.a.createElement("div",{id:"writing-area"},r.a.createElement("textarea",{id:"new-tweet-content",onChange:this.onTextChange}),r.a.createElement("button",{id:"submit-new-tweet",onClick:this.addNewTweet},"\uc0c8 \uae00 \uc4f0\uae30")),r.a.createElement("ul",{id:"tweets"},this.state.tweets.map(e=>r.a.createElement(w,{key:e.uuid,writer:e.writer,date:e.date},e.content))))}}function w({writer:e,date:t,children:n}){return r.a.createElement("li",{className:"tweet"},r.a.createElement("div",{className:"writer"},e),r.a.createElement("div",{className:"date"},t),r.a.createElement("div",null,n))}var c=d,l=document.getElementById("root");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c,null)),l)}},[[3,1,2]]]);
//# sourceMappingURL=main.ecdeddce.chunk.js.map