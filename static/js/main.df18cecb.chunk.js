(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/mostoski.87f15cfa.png"},20:function(n,e,t){n.exports=t.p+"static/media/windows.2f377511.png"},21:function(n,e,t){n.exports=t.p+"static/media/salon.8f34ff7d.png"},22:function(n,e,t){n.exports=t.p+"static/media/haku.1975deb5.jpg"},23:function(n,e,t){n.exports=t.p+"static/media/usamo.497c505d.jpg"},26:function(n,e,t){n.exports=t(37)},37:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),a=t(16),i=t.n(a),c=t(3),l=t(2);function u(){var n=Object(c.a)(["\n@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap&subset=latin-ext'); @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: 'Montserrat', sans-serif;\n    margin: 0;\n    padding: 0;\n  }\n  a{\n    text-decoration: none;\n  }\n  html {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n  }\n  body {\n    font-size: 1.6rem;\n  }\n  ","{\n    html {\n      font-size: 90%;\n    }\n  } \n  ","{\n    html {\n      font-size: 100%;\n    }\n  } \n  ","{\n    html {\n        font-size: 110%;\n    }\n  } \n"]);return u=function(){return n},n}var d=Object(l.b)(u(),function(n){return n.theme.devicePort.tablet},function(n){return n.theme.deviceLand.laptop},function(n){return n.theme.deviceLand.laptopL}),f={widthCon:"90%",marginContent:"15px",marginBox:"30px",bColor:"#003783",gColor:"#f8bf2c",fontColor:"white",flexCon:"display: flex; flex-direction: column; align-items: center;",padding:"15px 0",fontSize:{xs:"1.2rem",s:"1.5rem",m:"1.75rem",l:"2rem",xl:"3rem",xxl:"4rem",xxxl:"5rem"},devicePort:{mobileS:"@media (min-width: 360px) and (orientation: portrait)",mobileM:"@media (min-width: 640px) and (orientation: portrait)",tablet:"@media(min-width: 768px) and (orientation: portrait)",laptop:"@media (min-width: 1024px) and (orientation: portrait)",laptopL:"@media (min-width: 1280px) and (orientation: portrait)",desktop:"@media (min-width: 1600px) and (orientation: portrait)"},deviceLand:{mobileM:"@media (min-width: 640px) and (orientation: landscape)",tablet:"@media(min-width: 768px) and (orientation: landscape)",laptop:"@media (min-width: 1024px) and (orientation: landscape)",laptopL:"@media (min-width: 1280px) and (orientation: landscape)",desktop:"@media (min-width: 1600px) and (orientation: landscape)"}};function s(){var n=Object(c.a)(["\n  height: 100%;\n  position: absolute;\n  ",";\n  width: 10px;\n  top: 0;\n  ","\n"]);return s=function(){return n},n}var m=l.d.div(s(),function(n){var e=n.theme;return"border-left: 2px solid ".concat(e.bColor,"; border-right: 2px solid ").concat(e.bColor)},function(n){return"l"===n.side?"left: calc(5% - 10px)":"right: calc(5% - 10px)"}),p=function(n){var e=n.side;return o.a.createElement(m,{side:e})},h=t(6),b=t(7),v=t(9),g=t(8),w=t(4),x=t(10),y=t(5);function E(){var n=Object(c.a)(["\n  height: 5rem;\n  width: 5rem;\n  transform-origin: top right;\n  overflow: hidden;\n  position: relative;\n  ","\n  background-color: ","\n    "," {\n    height: 6rem;\n    width: 6rem;\n  }\n  "," {\n    height: 7rem;\n    width: 7rem;\n  }\n"]);return E=function(){return n},n}function j(){var n=Object(c.a)(["\n  font-size: ",";\n  color: white;\n  text-transform: uppercase;\n  opacity: 0;\n  margin-right: 20px;\n  transform: ","\n    "," {\n    font-size: ",";\n  }\n  "," {\n    font-size: ",";\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(c.a)(["\n  width: 95%;\n  margin-left: 2.5%;\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ",";\n"]);return O=function(){return n},n}var k=l.d.section(O(),function(n){return n.dir?"row-reverse":"row"},function(n){return n.theme.marginContent}),C=l.d.h1(j(),function(n){return n.theme.fontSize.xl},function(n){return n.dir?"translateX(100%);":"translateX(-100%);"},function(n){return n.theme.devicePort.tablet},function(n){return n.theme.fontSize.xxl},function(n){return n.theme.devicePort.laptop},function(n){return n.theme.fontSize.xxxl}),L=l.d.div(E(),function(n){return n.dir?"clip-path: polygon(100% 0, 0% 100%, 0 0);":"clip-path: polygon(100% 0, 0% 100%, 100% 100%);"},function(n){return n.theme.bColor},function(n){return n.theme.devicePort.tablet},function(n){return n.theme.devicePort.laptop}),S=function(n){function e(){var n,t;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(v.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={active:!1},t.container=o.a.createRef(),t.title=o.a.createRef(),t.triangle=o.a.createRef(),t.animate=function(){var n=Object(w.a)(t),e=n.triangle,r=n.title,o=t.props.direction,a=t.state.active,i=new y.a,c=e.current,l=r.current;a||(o?(i.addLabel("show").to(l,.5,{x:"-20px",opacity:1}).addLabel("move").to(c,.3,{rotation:20}).to(c,.3,{rotation:0}).to(l,.3,{x:"0px",rotation:-10}),t.setState({active:!0})):(i.addLabel("show").to(l,.5,{x:"40px",opacity:1}).addLabel("move").to(c,.3,{rotation:-20}).to(c,.3,{rotation:0}).to(l,.3,{x:"0px",rotation:-10}),t.setState({active:!0})))},t.handleScroll=function(){var n=window.scrollY,e=Object(w.a)(t),r=e.container,o=e.animate;void 0!==r.current&&null!==r.current&&(r.current.offsetTop<n+window.innerHeight-r.current.offsetHeight&&o())},t}return Object(x.a)(e,n),Object(b.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var n=this.container,e=this.title,t=this.triangle,r=this.props,a=r.children,i=r.direction;return o.a.createElement(k,{ref:n,dir:i},o.a.createElement(C,{dir:i,ref:e},a),o.a.createElement(L,{ref:t,dir:i}))}}]),e}(o.a.Component);function z(){var n=Object(c.a)(["\n  margin-top: ",";\n  font-size: ",";\n  width: 100%;\n  text-align: justify;\n  transform: translateY(100%);\n  opacity: 0;\n  "," {\n    font-size: ",";\n  }\n"]);return z=function(){return n},n}var A=l.d.p(z(),function(n){return n.theme.marginContent},function(n){var e=n.theme,t=n.fontS;return t||e.fontSize.m},function(n){return n.theme.devicePort.tablet},function(n){var e=n.theme,t=n.fontS;return t||e.fontSize.l}),I=function(n){function e(){var n,t;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(v.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={active:!1},t.ref=o.a.createRef(),t.animate=function(){var n=Object(w.a)(t).ref,e=t.state.active,r=new y.a,o=n.current;e||r.addLabel("show").to(o,.5,{y:"-20px",opacity:1}).addLabel("move").to(o,.2,{y:"0px"}),t.setState({active:!0})},t.handleScroll=function(){var n=window.scrollY,e=Object(w.a)(t),r=e.ref,o=e.animate;void 0!==r.current&&null!==r.current&&(r.current.offsetTop<n+window.innerHeight-r.current.offsetHeight&&o())},t}return Object(x.a)(e,n),Object(b.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var n=this.ref,e=this.props,t=e.children,r=e.fontS;return o.a.createElement(A,{fontS:r,ref:n},t)}}]),e}(o.a.Component);function M(){var n=Object(c.a)(["\n  margin-bottom: 10px;\n  color: white;\n"]);return M=function(){return n},n}function W(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0;\n  flex-basis: 100%;\n"]);return W=function(){return n},n}function P(){var n=Object(c.a)(["\n  background-color: gray;\n  ","\n"]);return P=function(){return n},n}function B(){var n=Object(c.a)(["\n  background-color: ",";\n  ","\n\n  &:hover {\n    background-color: #face5c;\n    transition: 0.5s;\n  }\n"]);return B=function(){return n},n}function F(){var n=Object(c.a)(["\n  width: 100%;\n"]);return F=function(){return n},n}function R(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n  color: white;\n"]);return R=function(){return n},n}function H(){var n=Object(c.a)(['\n  position: relative;\n  width: 100%;\n  height: 100%;\n  &:after {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    background: linear-gradient(\n      155deg,\n      rgba(2, 0, 36, 1) 71%,\n      rgba(255, 255, 255, 1) 94%\n    );\n    opacity: 0.5;\n  }\n']);return H=function(){return n},n}function T(){var n=Object(c.a)(["\n  margin-top: ",";\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: translateY(",");\n  opacity: 0;\n  background-color: ",";\n  @media (orientation: landscape) {\n    width: 48%;\n  }\n"]);return T=function(){return n},n}function D(){var n=Object(c.a)(["\n  display: block;\n  margin-right: 5px;\n  padding: 10px;\n  color: black;\n  font-size: ",";\n"]);return D=function(){return n},n}var U=Object(l.c)(D(),function(n){return n.theme.fontSize.xs}),Y=l.d.div(T(),function(n){return n.theme.marginContent},function(n){return n.transform},function(n){var e=n.color,t=n.theme;return"w"===e?"white":t.bColor}),_=l.d.div(H()),X=l.d.h2(R()),G=l.d.img(F()),J=l.d.a(B(),function(n){return n.theme.gColor},U),K=l.d.div(P(),U),N=l.d.div(W()),V=l.d.p(M()),$=function(n){function e(){var n,t;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(v.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={active:!1},t.ref=o.a.createRef(),t.animate=function(){var n=Object(w.a)(t).ref,e=t.state.active,r=new y.a,o=n.current;e||r.addLabel("show").to(o,.5,{y:"20px",opacity:1}).addLabel("move").to(o,.2,{y:"0px"}),t.setState({active:!0})},t.handleScroll=function(){var n=window.scrollY,e=Object(w.a)(t),r=e.ref,o=e.animate;void 0!==r.current&&null!==r.current&&(r.current.offsetTop<n+window.innerHeight-r.current.offsetHeight&&o())},t}return Object(x.a)(e,n),Object(b.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var n=this.ref,e=this.props,t=e.title,r=e.color,a=e.img,i=e.transform,c=e.link,l=e.live,u=e.blocked;return o.a.createElement(Y,{transform:i,ref:n,color:r},o.a.createElement(_,null,o.a.createElement(X,{color:r},t),o.a.createElement(G,{src:a})),o.a.createElement(N,null,u?o.a.createElement(K,null,"Live"):o.a.createElement(J,{target:"_blank",rel:"noopener noreferrer",href:l},"Live"),o.a.createElement(J,{target:"_blank",rel:"noopener noreferrer",href:c},"Github/code")),u&&o.a.createElement(V,null,"Web page is not actually hosted."))}}]),e}(o.a.Component);function q(){var n=Object(c.a)(["\n  width: 90%;\n"]);return q=function(){return n},n}function Q(){var n=Object(c.a)(["\n  width: 100%;\n  padding-bottom: 15px;\n  display: flex;\n  justify-content: center;\n"]);return Q=function(){return n},n}var Z=l.d.footer(Q()),nn=l.d.section(q()),en=function(){return o.a.createElement(Z,null,o.a.createElement(nn,null,o.a.createElement(I,{fontS:"3rem"},"Created and designed by Adrian Mostowski in 2019")))};function tn(){var n=Object(c.a)(["\n  width: 80%;\n  min-height: 90vh;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  gap: 10px;\n  "," {\n    width: 60%;\n  }\n  @media (orientation: landscape) {\n    min-height: 140vh;\n    width: 40%;\n  }\n  "," {\n    width: 30%;\n  }\n  "," {\n    width: 50%;\n  }\n  "," {\n    width: 40%;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  @media (orientation: landscape) {\n    height: 150vh;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  background-color: ",";\n  color: ",";\n  animation: "," 10s "," infinite;\n"]);return on=function(){return n},n}function an(){var n=Object(c.a)(["\n  height: 60%;\n  width: 60%;\n  background-color: ",";\n"]);return an=function(){return n},n}function cn(){var n=Object(c.a)(["\n  height: 200%;\n  transform-origin: center;\n  ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n"]);return cn=function(){return n},n}function ln(){var n=Object(c.a)(["\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  position: absolute;\n  background-color: ","\n    ",";\n"]);return ln=function(){return n},n}function un(){var n=Object(c.a)(["\n  20% { opacity: 1}\n  50% { opacity: 1; }\n  70% {opacity: 0;}\n  100% { opacity: 0; }\n"]);return un=function(){return n},n}var dn=Object(l.e)(un()),fn=l.d.div(ln(),function(n){return n.theme.gColor},function(n){return"l"===n.side?"left: 50%;":"right: 50%;"}),sn=l.d.div(cn(),function(n){var e=n.theme,t=n.orientation;return"transform: translate(-50%,-50%) ".concat("v"===t?"":"rotate(90deg)",";border: 1px solid ").concat(e.gColor,";")}),mn=l.d.div(an(),function(n){return n.theme.gColor}),pn=l.d.p(on(),function(n){var e=n.color,t=n.theme;return"w"===e?t.bColor:"white"},function(n){var e=n.color,t=n.theme;return"w"!==e?t.bColor:t.gColor},dn,function(n){return n.delay?"5s":""}),hn=l.d.section(rn()),bn=l.d.div(tn(),function(n){return n.theme.devicePort.tablet},function(n){return n.theme.deviceLand.tablet},function(n){return n.theme.deviceLand.laptop},function(n){return n.theme.deviceLand.laptopL}),vn=[{content:"M",color:"w",delay:"0.1"},{content:"O",color:"b",delay:"0.2",start:"true"},{content:"S",color:"w",delay:"0.3"},{content:"T",color:"w",delay:"0.4"},{content:"O",color:"w",delay:"0.5"},{content:"W",color:"w",delay:"0.6"},{content:"S",color:"w",delay:"0.7"},{content:"K",color:"b",delay:"0.8"},{content:"I",color:"w",delay:"0.9"},{content:o.a.createElement(fn,{side:"l"}),color:"b",delay:"2",side:"left"},{content:o.a.createElement(mn,null),color:"w",delay:"1"},{content:o.a.createElement(fn,{side:"r"}),color:"b",delay:"2",side:"right"},{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(pn,null,"W"),o.a.createElement(pn,{color:"w",delay:!0},"D")),color:"w",delay:"1.1"},{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(pn,{color:"w"},"E"),o.a.createElement(pn,{delay:!0},"E")),color:"b",delay:"1.2",start:"true"},{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(pn,null,"B"),o.a.createElement(pn,{color:"w",delay:!0},"S")),color:"w",delay:"1.3"},{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(pn,null,"D"),o.a.createElement(pn,{color:"w",delay:!0},"I")),color:"w",delay:"1.4"},{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(pn,null,"E"),o.a.createElement(pn,{color:"w",delay:!0},"G")),color:"w",delay:"1.5"},{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(pn,null,"V"),o.a.createElement(pn,{color:"w",delay:!0},"N")),color:"w",delay:"1.6"},{content:o.a.createElement(sn,null),color:"w",delay:"2",side:"left"},{content:o.a.createElement(sn,{orientation:"v"}),color:"b",delay:"1.7"},{content:o.a.createElement(sn,null),color:"w",delay:"2",side:"right"}],gn=function(){var n=vn.map(function(n,e){return o.a.createElement(yn,{key:e,side:n.side,delay:n.delay,color:n.color,content:n.content})});return o.a.createElement(hn,null,o.a.createElement(bn,null,n))};function wn(){var n=Object(c.a)(["\n  position: relative;\n  overflow: hidden;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  ","\n"]);return wn=function(){return n},n}var xn=l.d.div(wn(),function(n){var e=n.theme,t=n.bg;return"font-size: ".concat(e.fontSize.l,"; background-color: ").concat("w"===t?"white":e.bColor,";  color: ").concat("w"!==t?e.gColor:e.bColor,";}")}),yn=function(n){var e=n.color,t=n.content,a=n.delay,i=n.side,c=Object(r.useRef)(null),l=Object(r.useCallback)(function(){var n=c.current,e=new y.a;"left"===i?e.addLabel("hide").to(n,.1,{x:"-100%",delay:"".concat(a)}).addLabel("show").to(n,.5,{x:"0%",opacity:1}):"right"===i?e.addLabel("hide").to(n,.1,{x:"100%",delay:"".concat(a)}).addLabel("show").to(n,.5,{x:"0%",opacity:1}):e.addLabel("hide").to(n,.1,{y:"100%",delay:"".concat(a)}).addLabel("show").to(n,.5,{y:"0%",opacity:1})},[a,c,i]);return Object(r.useEffect)(function(){var n=setTimeout(l,100);return function(){return clearTimeout(n)}},[l]),o.a.createElement(xn,{ref:c,bg:e},t)};function En(){var n=Object(c.a)(["\n  width: 90%;\n  "," {\n    width: 60%;\n  }\n  @media (orientation: landscape) {\n    width: 48%;\n  }\n  "," {\n    width: 30%;\n  }\n"]);return En=function(){return n},n}function jn(){var n=Object(c.a)(["\n  width: 90%;\n\n  @media (orientation: landscape) {\n    width: 50%;\n  }\n  "," {\n    width: 68%;\n  }\n"]);return jn=function(){return n},n}function On(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media (orientation: landscape) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: space-between;\n    align-items: center;\n    width: 90%;\n  }\n"]);return On=function(){return n},n}function kn(){var n=Object(c.a)(["\n  width: 100%;\n  padding: "," 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return kn=function(){return n},n}var Cn=l.d.section(kn(),function(n){return n.theme.marginBox}),Ln=l.d.section(On()),Sn=l.d.section(jn(),function(n){return n.theme.deviceLand.laptopL}),zn=l.d.img(En(),function(n){return n.theme.devicePort.tablet},function(n){return n.theme.deviceLand.laptopL}),An=t(19),In=t.n(An),Mn=function(){return o.a.createElement(Cn,null,o.a.createElement(S,null,"Who am I?"),o.a.createElement(Ln,null,o.a.createElement(zn,{src:In.a}),o.a.createElement(Sn,null,o.a.createElement(I,null,"I'm Adrian, I'm 20 and I'm passionate of web development and desing. Doing this since '18, however I had tried earlier some other things like C++."),o.a.createElement(I,null,"As web developer I'm trying to keep my code clean and readable for every developer. For most of my projects I'm using React (It's my favourite tool)."),o.a.createElement(I,null,"Actually I'm studying Applied Computer Science at Warsaw University of Technology. In most of my free time I'm creating new pages and developing new skill in web development."))))};function Wn(){var n=Object(c.a)(["\n  display: block;\n  color: black;\n  text-decoration: underline;\n  ","\n  transition: 0.5s;\n  &:hover:nth-of-type(even) {\n    transform: translateX(-30px);\n  }\n  &:hover:nth-of-type(odd) {\n    transform: translateX(30px);\n  }\n"]);return Wn=function(){return n},n}function Pn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return Pn=function(){return n},n}function Bn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border-top: 2px solid ",";\n  border-bottom: 2px solid ",";\n  width: 90%;\n  padding-bottom: 15px;\n"]);return Bn=function(){return n},n}function Fn(){var n=Object(c.a)(["\n  list-style-type: none;\n  font-size: ",";\n  width: 90%;\n  padding: 15px 0;\n  margin-top: ",";\n  border-top: 2px solid ",";\n"]);return Fn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n"]);return Rn=function(){return n},n}var Hn=l.d.section(Rn()),Tn=l.d.ul(Fn(),function(n){return n.theme.fontSize.l},function(n){return n.theme.marginContent},function(n){return n.theme.bColor}),Dn=l.d.section(Bn(),function(n){return n.theme.bColor},function(n){return n.theme.bColor}),Un=l.d.li(Pn()),Yn=l.d.a(Wn(),function(n){return n.flexEnd?"align-self: flex-end":""}),_n=function(){return o.a.createElement(Hn,null,o.a.createElement(S,null,"Contact"),o.a.createElement(Tn,null,o.a.createElement(Un,null,o.a.createElement("span",null,"Author:"),o.a.createElement("span",null,"Adrian Mostowski")),o.a.createElement(Un,null,o.a.createElement("span",null,"E-mail:"),"a.k.mostowski@gmail.com")),o.a.createElement(Dn,null,o.a.createElement(Yn,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Adaxelx"},o.a.createElement(I,{fontS:"4rem"},"Github")),o.a.createElement(Yn,{target:"_blank",rel:"noopener noreferrer",flexEnd:!0,href:"https://linkedin.com/in/adrian-mostowski-712b28192/"},o.a.createElement(I,{fontS:"4rem"},"Linked In"))))},Xn=t(20),Gn=t.n(Xn),Jn=t(21),Kn=t.n(Jn),Nn=t(22),Vn=t.n(Nn),$n=t(23),qn=[{title:"Usamodzielnieni",img:t.n($n).a,transform:"-100%",blocked:!0,link:"https://github.com/Salabim-mb/Usamodzielnieni",live:"https://usamodzielnieni-frontend.herokuapp.com/"},{title:"Hair salon",img:Kn.a,transform:"-100%",link:"https://github.com/Adaxelx/strona-salonu",live:"http://pfbpatejuk.pl/"},{title:"Business website",img:Vn.a,transform:"-100%",link:"https://github.com/Adaxelx/Business-page",live:"https://adaxelx.github.io/Business-page/"},{title:"Windows",img:Gn.a,transform:"-100%",link:"https://github.com/Adaxelx/windows",live:"https://adaxelx.github.io/windows/"}];function Qn(){var n=Object(c.a)(["\n  width: 100%;\n\n  @media (orientation: landscape) {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(c.a)(["\n  width: 90%;\n  margin-left: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: "," 0;\n"]);return Zn=function(){return n},n}var ne=l.d.section(Zn(),function(n){return n.theme.marginBox}),ee=l.d.section(Qn()),te=function(){var n=qn.map(function(n){return o.a.createElement($,n)});return o.a.createElement(ne,null,o.a.createElement(S,{direction:!0},"Projects"),o.a.createElement(ee,null,n),o.a.createElement(I,{fontS:"3rem"},"And much more on:"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Adaxelx"},"github")))},re=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(gn,null),o.a.createElement(Mn,null),o.a.createElement(te,null),o.a.createElement(_n,null))};function oe(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 1500px;\n  position: relative;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  background-color: ",";\n"]);return oe=function(){return n},n}function ae(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: ",";\n"]);return ae=function(){return n},n}var ie=l.d.div(ae(),function(n){return n.theme.gColor}),ce=l.d.main(oe(),function(n){return n.theme.gColor}),le=function(){return o.a.createElement(l.a,{theme:f},o.a.createElement(ie,null,o.a.createElement(ce,null,o.a.createElement(d,null),o.a.createElement(p,{side:"l"}),o.a.createElement(p,{side:"r"}),o.a.createElement(re,null),o.a.createElement(en,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.df18cecb.chunk.js.map