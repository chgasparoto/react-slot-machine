(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,e,t){n.exports=t.p+"static/media/strawberry.d77cb177.png"},26:function(n,e,t){n.exports=t.p+"static/media/banana.abf2234f.png"},27:function(n,e,t){n.exports=t.p+"static/media/orange.7b3e3f1c.png"},28:function(n,e,t){n.exports=t.p+"static/media/monkey.0208eeab.png"},29:function(n,e,t){n.exports=t.p+"static/media/win.5419a33c.wav"},30:function(n,e,t){n.exports=t.p+"static/media/fail.05c73073.wav"},31:function(n,e,t){n.exports=t.p+"static/media/coin.e0f2b0be.wav"},33:function(n,e,t){n.exports=t(89)},38:function(n,e,t){},89:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(7),o=t.n(r),c=(t(38),t(1)),u=t(2),s=t(8),l=t(9),p=t(11),m=t(10),d=t(12),f=t(22),h=t.n(f);function g(){var n=Object(c.a)(["\n  width: 80px;\n  height: 80px;\n  border: 1px solid #eaeaea;\n  padding: 10px;\n"]);return g=function(){return n},n}var v=u.a.img(g()),b=function(n){var e=n.image;return i.a.createElement(v,{src:e,alt:e,"data-testid":"wheel"})},w=t(25),x=t.n(w),S=t(26),E=t.n(S),j=t(27),y=t.n(j),O=t(28),k=t.n(O),z=function(n){function e(){var n,t;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(i)))).state={spinning:!1,wheels:[]},t.images=[x.a,E.a,y.a,k.a],t.randomImage=function(){return t.images[Math.floor(Math.random()*t.images.length)]},t.spin=function(){return t.setState({wheels:[t.randomImage(),t.randomImage(),t.randomImage()]})},t.tick=function(){return t.isSpinning=setInterval(t.spin,50)},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setState({wheels:[this.randomImage(),this.randomImage(),this.randomImage()]})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.spinning;t&&t!==e.spinning&&this.tick(),t||t===e.spinning||(clearInterval(this.isSpinning),this.props.onStop(this.state.wheels))}},{key:"render",value:function(){var n=this.state.wheels;return i.a.createElement(i.a.Fragment,null,n.map(function(n,e){return i.a.createElement(b,{key:"".concat(e,"_").concat(n),image:n})}))}}],[{key:"getDerivedStateFromProps",value:function(n,e){return{spinning:n.spin}}}]),e}(i.a.Component),I=t(29),R=t.n(I),D=t(30),M=t.n(D),C=t(31),F=t.n(C),T={win:R.a,fail:M.a,coin:F.a},Y=function(n){var e=n.audio;return i.a.createElement("audio",{autoPlay:"autoplay",preload:"false"},i.a.createElement("source",{src:T[e]}))};function A(){var n=Object(c.a)(["\nmargin: 20px auto;\nfont-size: 25px;\ncolor: red;\n"]);return A=function(){return n},n}function J(){var n=Object(c.a)(["\n  margin: 20px auto;\n  font-size: 25px;\n  color: green;\n"]);return J=function(){return n},n}function P(){var n=Object(c.a)(["\n  font-size: 20px;\n  margin: 0 10px;\n  padding: 10px;\n"]);return P=function(){return n},n}function U(){var n=Object(c.a)(["\n  margin: 10px auto;\n"]);return U=function(){return n},n}function B(){var n=Object(c.a)(["\n  font-size: 35px;\n"]);return B=function(){return n},n}var $=u.a.h1(B()),_=u.a.div(U()),q=u.a.button(P()),G=u.a.div(J()),H=u.a.div(A()),K=100,L=20,N=10,Q=function(n){function e(){var n,t;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(i)))).state={isRunning:!1,winner:!1,prize:0},t.handleStart=function(){t.setState({isRunning:!0,winner:!1,lose:!1,prize:0}),clearTimeout(t.start)},t.handleStop=function(){t.setState({isRunning:!1}),clearTimeout(t.stop)},t.handleResult=function(n){var e=n.map(function(n){return n.split("/").pop()}),a=h()(e);3!==a.length?1!==a.length?e[0]!==e[1]&&e[1]!==e[2]?t.setState({winner:!0,lose:!1,prize:N}):t.setState({winner:!0,lose:!1,prize:L}):t.setState({winner:!0,lose:!1,prize:K}):t.setState({winner:!1,lose:!0,prize:0})},t}return Object(d.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this;this.start=setTimeout(function(){n.handleStart()},5e3)}},{key:"componentDidUpdate",value:function(){var n=this;this.state.isRunning&&(this.stop=setTimeout(function(){n.handleStop()},1e4))}},{key:"render",value:function(){var n=this.state,e=n.isRunning,t=n.winner,a=n.lose,r=n.prize;return i.a.createElement(i.a.Fragment,null,i.a.createElement($,null,"React Slot Machine"),i.a.createElement(z,{spin:e,onStop:this.handleResult}),i.a.createElement(_,null,i.a.createElement(q,{onClick:this.handleStart,disabled:e},"Start"),i.a.createElement(q,{onClick:this.handleStop,disabled:!e},"Stop")),i.a.createElement("div",{"data-testid":"prize"},t&&i.a.createElement(G,null,"You win! Your prize: $",r,".00"),t&&r===K&&i.a.createElement(Y,{audio:"win"}),a&&i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null,"You lose"),i.a.createElement(Y,{audio:"fail"}))))}}]),e}(i.a.Component);function V(){var n=Object(c.a)(["\n  width: 600px;\n  margin: 10px auto;\n  text-align: center;\n"]);return V=function(){return n},n}var W=u.a.div(V()),X=function(n){return i.a.createElement(W,null,i.a.createElement(Q,null))};o.a.render(i.a.createElement(X,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.21f7baf7.chunk.js.map