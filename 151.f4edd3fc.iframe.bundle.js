"use strict";(self.webpackChunk_eightfold_ai_octuple=self.webpackChunk_eightfold_ai_octuple||[]).push([[151],{84151:function(e,r,t){t.r(r),t.d(r,{ColorControl:function(){return Qe},default:function(){return Qe}}),t(19601),t(47941),t(69600),t(57327),t(41539),t(9653),t(74916),t(39714),t(15306),t(66992),t(51532),t(78783),t(33948),t(4723),t(21249),t(23123),t(54747),t(47042),t(92222),t(26833),t(23157),t(68309),t(82526),t(41817),t(32165),t(91038);var n,a,o=t(2779),l=t(67294),u=t(65316);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(e){u=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}function v(e){var r=(0,l.useRef)(e),t=(0,l.useRef)((function(e){r.current&&r.current(e)}));return r.current=e,t.current}t(35032);var g=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},b=function(e){return"touches"in e},p=function(e){return e&&e.ownerDocument.defaultView||self},m=function(e,r,t){var n=e.getBoundingClientRect(),a=b(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:g((a.pageX-(n.left+p(e).pageXOffset))/n.width),top:g((a.pageY-(n.top+p(e).pageYOffset))/n.height)}},y=function(e){!b(e)&&e.preventDefault()},w=l.memo((function(e){var r=e.onMove,t=e.onKey,n=d(e,["onMove","onKey"]),a=(0,l.useRef)(null),o=v(r),u=v(t),c=(0,l.useRef)(null),i=(0,l.useRef)(!1),s=(0,l.useMemo)((function(){var e=function(e){y(e),(b(e)?e.touches.length>0:e.buttons>0)&&a.current?o(m(a.current,e,c.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=i.current,o=p(a.current),l=t?o.addEventListener:o.removeEventListener;l(n?"touchmove":"mousemove",e),l(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=a.current;if(n&&(y(r),!function(e,r){return r&&!b(e)}(r,i.current)&&n)){if(b(r)){i.current=!0;var l=r.changedTouches||[];l.length&&(c.current=l[0].identifier)}n.focus(),o(m(n,r,c.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),u({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[u,o]),f=s[0],g=s[1],w=s[2];return(0,l.useEffect)((function(){return w}),[w]),l.createElement("div",h({},n,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:a,onKeyDown:g,tabIndex:0,role:"slider"}))})),k=function(e){return e.filter(Boolean).join(" ")},x=function(e){var r=e.color,t=e.left,n=e.top,a=void 0===n?.5:n,o=k(["react-colorful__pointer",e.className]);return l.createElement("div",{className:o,style:{top:100*a+"%",left:100*t+"%"}},l.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},M=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},_={grad:.9,turn:360,rad:360/(2*Math.PI)},E=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},C=function(e,r){return void 0===r&&(r="deg"),Number(e)*(_[r]||1)},S=function(e){var r=e.s,t=e.v,n=e.a,a=(200-r)*t/100;return{h:M(e.h),s:M(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:M(a/2),a:M(n,2)}},O=function(e){var r=S(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},N=function(e){var r=S(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},j=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var o=Math.floor(r),l=n*(1-t),u=n*(1-(r-o)*t),c=n*(1-(1-r+o)*t),i=o%6;return{r:M(255*[n,u,l,l,c,n][i]),g:M(255*[c,n,n,u,l,l][i]),b:M(255*[l,l,c,n,n,u][i]),a:M(a,2)}},H=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},z=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=Math.max(r,t,n),l=o-Math.min(r,t,n),u=l?o===r?(t-n)/l:o===t?2+(n-r)/l:4+(r-t)/l:0;return{h:M(60*(u<0?u+6:u)),s:M(o?l/o*100:0),v:M(o/255*100),a:a}},I=l.memo((function(e){var r=e.hue,t=e.onChange,n=k(["react-colorful__hue",e.className]);return l.createElement("div",{className:n},l.createElement(w,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:g(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":M(r)},l.createElement(x,{className:"react-colorful__hue-pointer",left:r/360,color:O({h:r,s:100,v:100,a:1})})))})),R=l.memo((function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:O({h:r.h,s:100,v:100,a:1})};return l.createElement("div",{className:"react-colorful__saturation",style:n},l.createElement(w,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:g(r.s+100*e.left,0,100),v:g(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+M(r.s)+"%, Brightness "+M(r.v)+"%"},l.createElement(x,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:O(r)})))})),L=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},B=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function q(e,r,t){var n=v(t),a=(0,l.useState)((function(){return e.toHsva(r)})),o=a[0],u=a[1],c=(0,l.useRef)({color:r,hsva:o});(0,l.useEffect)((function(){if(!e.equal(r,c.current.color)){var t=e.toHsva(r);c.current={hsva:t,color:r},u(t)}}),[r,e]),(0,l.useEffect)((function(){var r;L(o,c.current.hsva)||e.equal(r=e.fromHsva(o),c.current.color)||(c.current={hsva:o,color:r},n(r))}),[o,e,n]);var i=(0,l.useCallback)((function(e){u((function(r){return Object.assign({},r,e)}))}),[]);return[o,i]}for(var T="undefined"!=typeof window?l.useLayoutEffect:l.useEffect,X=new Map,A=function(e){T((function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!X.has(r)){var n=r.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',X.set(r,n);var a=t.nc;a&&n.setAttribute("nonce",a),r.head.appendChild(n)}}),[])},P=function(e){var r=e.className,t=e.colorModel,n=e.color,a=void 0===n?t.defaultColor:n,o=e.onChange,u=d(e,["className","colorModel","color","onChange"]),c=(0,l.useRef)(null);A(c);var i=q(t,a,o),s=i[0],f=i[1],v=k(["react-colorful",r]);return l.createElement("div",h({},u,{ref:c,className:v}),l.createElement(R,{hsva:s,onChange:f}),l.createElement(I,{hue:s.h,onChange:f,className:"react-colorful__last-control"}))},W={defaultColor:"000",toHsva:function(e){return z(E(e))},fromHsva:function(e){return t=(r=j(e)).g,n=r.b,"#"+H(r.r)+H(t)+H(n);var r,t,n},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||L(E(e),E(r))}},$=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+N(Object.assign({},t,{a:0}))+", "+N(Object.assign({},t,{a:1}))+")"},o=k(["react-colorful__alpha",r]);return l.createElement("div",{className:o},l.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),l.createElement(w,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:g(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":M(100*t.a)+"%"},l.createElement(x,{className:"react-colorful__alpha-pointer",left:t.a,color:N(t)})))},D=function(e){var r=e.className,t=e.colorModel,n=e.color,a=void 0===n?t.defaultColor:n,o=e.onChange,u=d(e,["className","colorModel","color","onChange"]),c=(0,l.useRef)(null);A(c);var i=q(t,a,o),s=i[0],f=i[1],v=k(["react-colorful",r]);return l.createElement("div",h({},u,{ref:c,className:v}),l.createElement(R,{hsva:s,onChange:f}),l.createElement(I,{hue:s.h,onChange:f}),l.createElement($,{hsva:s,onChange:f,className:"react-colorful__last-control"}))},G={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}}({h:C(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:N,equal:B},F={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?z({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){var r=j(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:B},K={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},V={},U=0,Y=Object.keys(K);U<Y.length;U++){var J=Y[U];V[K[J]]=J}for(var Q={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},Z=Q,ee=0,re=Object.keys(Q);ee<re.length;ee++){var te=re[ee];if(!("channels"in Q[te]))throw new Error("missing channels property: "+te);if(!("labels"in Q[te]))throw new Error("missing channel labels property: "+te);if(Q[te].labels.length!==Q[te].channels)throw new Error("channel and label counts mismatch: "+te);var ne=Q[te],ae=ne.channels,oe=ne.labels;delete Q[te].channels,delete Q[te].labels,Object.defineProperty(Q[te],"channels",{value:ae}),Object.defineProperty(Q[te],"labels",{value:oe})}function le(e,r){return Math.pow(e[0]-r[0],2)+Math.pow(e[1]-r[1],2)+Math.pow(e[2]-r[2],2)}Q.rgb.hsl=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.min(t,n,a),l=Math.max(t,n,a),u=l-o;l===o?r=0:t===l?r=(n-a)/u:n===l?r=2+(a-t)/u:a===l&&(r=4+(t-n)/u),(r=Math.min(60*r,360))<0&&(r+=360);var c=(o+l)/2;return[r,100*(l===o?0:c<=.5?u/(l+o):u/(2-l-o)),100*c]},Q.rgb.hsv=function(e){var r,t,n,a,o,l=e[0]/255,u=e[1]/255,c=e[2]/255,i=Math.max(l,u,c),s=i-Math.min(l,u,c),f=function(e){return(i-e)/6/s+.5};return 0===s?(a=0,o=0):(o=s/i,r=f(l),t=f(u),n=f(c),l===i?a=n-t:u===i?a=1/3+r-n:c===i&&(a=2/3+t-r),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*i]},Q.rgb.hwb=function(e){var r=e[0],t=e[1],n=e[2];return[Q.rgb.hsl(e)[0],1/255*Math.min(r,Math.min(t,n))*100,100*(n=1-1/255*Math.max(r,Math.max(t,n)))]},Q.rgb.cmyk=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.min(1-r,1-t,1-n);return[100*((1-r-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},Q.rgb.keyword=function(e){var r=V[e];if(r)return r;for(var t,n=1/0,a=0,o=Object.keys(K);a<o.length;a++){var l=o[a],u=le(e,K[l]);u<n&&(n=u,t=l)}return t},Q.keyword.rgb=function(e){return K[e]},Q.rgb.xyz=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*r+.7152*t+.0722*n),100*(.0193*r+.1192*t+.9505*n)]},Q.rgb.lab=function(e){var r=Q.rgb.xyz(e),t=r[0],n=r[1],a=r[2];return n/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},Q.hsl.rgb=function(e){var r,t,n,a=e[0]/360,o=e[1]/100,l=e[2]/100;if(0===o)return[n=255*l,n,n];for(var u=2*l-(r=l<.5?l*(1+o):l+o-l*o),c=[0,0,0],i=0;i<3;i++)(t=a+1/3*-(i-1))<0&&t++,t>1&&t--,n=6*t<1?u+6*(r-u)*t:2*t<1?r:3*t<2?u+(r-u)*(2/3-t)*6:u,c[i]=255*n;return c},Q.hsl.hsv=function(e){var r=e[0],t=e[1]/100,n=e[2]/100,a=t,o=Math.max(n,.01);return t*=(n*=2)<=1?n:2-n,a*=o<=1?o:2-o,[r,100*(0===n?2*a/(o+a):2*t/(n+t)),(n+t)/2*100]},Q.hsv.rgb=function(e){var r=e[0]/60,t=e[1]/100,n=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),l=255*n*(1-t),u=255*n*(1-t*o),c=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,c,l];case 1:return[u,n,l];case 2:return[l,n,c];case 3:return[l,u,n];case 4:return[c,l,n];case 5:return[n,l,u]}},Q.hsv.hsl=function(e){var r,t,n=e[0],a=e[1]/100,o=e[2]/100,l=Math.max(o,.01);t=(2-a)*o;var u=(2-a)*l;return r=a*l,[n,100*(r=(r/=u<=1?u:2-u)||0),100*(t/=2)]},Q.hwb.rgb=function(e){var r,t=e[0]/360,n=e[1]/100,a=e[2]/100,o=n+a;o>1&&(n/=o,a/=o);var l=Math.floor(6*t),u=1-a;r=6*t-l,0!=(1&l)&&(r=1-r);var c,i,s,f=n+r*(u-n);switch(l){default:case 6:case 0:c=u,i=f,s=n;break;case 1:c=f,i=u,s=n;break;case 2:c=n,i=u,s=f;break;case 3:c=n,i=f,s=u;break;case 4:c=f,i=n,s=u;break;case 5:c=u,i=n,s=f}return[255*c,255*i,255*s]},Q.cmyk.rgb=function(e){var r=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},Q.xyz.rgb=function(e){var r,t,n,a=e[0]/100,o=e[1]/100,l=e[2]/100;return t=-.9689*a+1.8758*o+.0415*l,n=.0557*a+-.204*o+1.057*l,r=(r=3.2406*a+-1.5372*o+-.4986*l)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},Q.xyz.lab=function(e){var r=e[0],t=e[1],n=e[2];return t/=100,n/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},Q.lab.xyz=function(e){var r,t,n,a=e[0];r=e[1]/500+(t=(a+16)/116),n=t-e[2]/200;var o=Math.pow(t,3),l=Math.pow(r,3),u=Math.pow(n,3);return t=o>.008856?o:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,[r*=95.047,t*=100,n*=108.883]},Q.lab.lch=function(e){var r,t=e[0],n=e[1],a=e[2];return(r=360*Math.atan2(a,n)/2/Math.PI)<0&&(r+=360),[t,Math.sqrt(n*n+a*a),r]},Q.lch.lab=function(e){var r=e[0],t=e[1],n=e[2]/360*2*Math.PI;return[r,t*Math.cos(n),t*Math.sin(n)]},Q.rgb.ansi16=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=s(e,3),n=t[0],a=t[1],o=t[2],l=null===r?Q.rgb.hsv(e)[2]:r;if(0===(l=Math.round(l/50)))return 30;var u=30+(Math.round(o/255)<<2|Math.round(a/255)<<1|Math.round(n/255));return 2===l&&(u+=60),u},Q.hsv.ansi16=function(e){return Q.rgb.ansi16(Q.hsv.rgb(e),e[2])},Q.rgb.ansi256=function(e){var r=e[0],t=e[1],n=e[2];return r===t&&t===n?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},Q.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var t=.5*(1+~~(e>50));return[(1&r)*t*255,(r>>1&1)*t*255,(r>>2&1)*t*255]},Q.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},Q.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},Q.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var t=r[0];3===r[0].length&&(t=t.split("").map((function(e){return e+e})).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},Q.rgb.hcg=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.max(Math.max(t,n),a),l=Math.min(Math.min(t,n),a),u=o-l;return r=u<=0?0:o===t?(n-a)/u%6:o===n?2+(a-t)/u:4+(t-n)/u,r/=6,[360*(r%=1),100*u,100*(u<1?l/(1-u):0)]},Q.hsl.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=t<.5?2*r*t:2*r*(1-t),a=0;return n<1&&(a=(t-.5*n)/(1-n)),[e[0],100*n,100*a]},Q.hsv.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=r*t,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},Q.hcg.rgb=function(e){var r=e[0]/360,t=e[1]/100,n=e[2]/100;if(0===t)return[255*n,255*n,255*n];var a,o=[0,0,0],l=r%1*6,u=l%1,c=1-u;switch(Math.floor(l)){case 0:o[0]=1,o[1]=u,o[2]=0;break;case 1:o[0]=c,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=u;break;case 3:o[0]=0,o[1]=c,o[2]=1;break;case 4:o[0]=u,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=c}return a=(1-t)*n,[255*(t*o[0]+a),255*(t*o[1]+a),255*(t*o[2]+a)]},Q.hcg.hsv=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r),n=0;return t>0&&(n=r/t),[e[0],100*n,100*t]},Q.hcg.hsl=function(e){var r=e[1]/100,t=e[2]/100*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},Q.hcg.hwb=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},Q.hwb.hcg=function(e){var r=e[1]/100,t=1-e[2]/100,n=t-r,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},Q.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},Q.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},Q.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},Q.gray.hsl=function(e){return[0,0,e[0]]},Q.gray.hsv=Q.gray.hsl,Q.gray.hwb=function(e){return[0,100,e[0]]},Q.gray.cmyk=function(e){return[0,0,0,e[0]]},Q.gray.lab=function(e){return[e[0],0,0]},Q.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},Q.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};var ue=Z;function ce(e,r){return function(t){return r(e(t))}}function ie(e,r){for(var t=[r[e].parent,e],n=ue[r[e].parent][e],a=r[e].parent;r[a].parent;)t.unshift(r[a].parent),n=ce(ue[r[a].parent][a],n),a=r[a].parent;return n.conversion=t,n}var se=Z,fe=function(e){for(var r=function(e){var r=function(){for(var e={},r=Object.keys(ue),t=r.length,n=0;n<t;n++)e[r[n]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;)for(var n=t.pop(),a=Object.keys(ue[n]),o=a.length,l=0;l<o;l++){var u=a[l],c=r[u];-1===c.distance&&(c.distance=r[n].distance+1,c.parent=n,t.unshift(u))}return r}(e),t={},n=Object.keys(r),a=n.length,o=0;o<a;o++){var l=n[o];null!==r[l].parent&&(t[l]=ie(l,r))}return t},he={};Object.keys(se).forEach((function(e){he[e]={},Object.defineProperty(he[e],"channels",{value:se[e].channels}),Object.defineProperty(he[e],"labels",{value:se[e].labels});var r=fe(e);Object.keys(r).forEach((function(t){var n=r[t];he[e][t]=function(e){var r=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var a=t[0];if(null==a)return a;a.length>1&&(t=a);var o=e(t);if("object"===i(o))for(var l=o.length,u=0;u<l;u++)o[u]=Math.round(o[u]);return o};return"conversion"in e&&(r.conversion=e.conversion),r}(n),he[e][t].raw=function(e){var r=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var a=t[0];return null==a?a:(a.length>1&&(t=a),e(t))};return"conversion"in e&&(r.conversion=e.conversion),r}(n)}))}));var de,ve=he,ge=o.x,be=/\s/,pe=/^\s+/,me=function(e){return e?e.slice(0,function(e){for(var r=e.length;r--&&be.test(e.charAt(r)););return r}(e)+1).replace(pe,""):e},ye=o.y,we=o.z,ke=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,Me=/^0o[0-7]+$/i,_e=parseInt,Ee=o.y,Ce=function(){return ge.Date.now()},Se=function(e){if("number"==typeof e)return e;if(we(e))return NaN;if(ye(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ye(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var t=xe.test(e);return t||Me.test(e)?_e(e.slice(2),t?2:8):ke.test(e)?NaN:+e},Oe=Math.max,Ne=Math.min,je=function(e,r,t){var n,a,o,l,u,c,i=0,s=!1,f=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(r){var t=n,o=a;return n=a=void 0,i=r,l=e.apply(o,t)}function v(e){return i=e,u=setTimeout(b,r),s?d(e):l}function g(e){var t=e-c;return void 0===c||t>=r||t<0||f&&e-i>=o}function b(){var e=Ce();if(g(e))return p(e);u=setTimeout(b,function(e){var t=r-(e-c);return f?Ne(t,o-(e-i)):t}(e))}function p(e){return u=void 0,h&&n?d(e):(n=a=void 0,l)}function m(){var e=Ce(),t=g(e);if(n=arguments,a=this,c=e,t){if(void 0===u)return v(c);if(f)return clearTimeout(u),u=setTimeout(b,r),d(c)}return void 0===u&&(u=setTimeout(b,r)),l}return r=Se(r)||0,Ee(t)&&(s=!!t.leading,o=(f="maxWait"in t)?Oe(Se(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),m.cancel=function(){void 0!==u&&clearTimeout(u),i=0,n=c=a=u=void 0},m.flush=function(){return void 0===u?l:p(Ce())},m},He=o.y,ze=u.zo.div({position:"relative",maxWidth:250}),Ie=(0,u.zo)(o.W)({position:"absolute",zIndex:1,top:4,left:4}),Re=u.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Le=(0,u.zo)(o.T)((function(e){return{fontFamily:e.theme.typography.fonts.base}})),Be=u.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),qe=u.zo.div((function(e){var r=e.theme;return{width:16,height:16,boxShadow:e.active?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}})),Te=function(e){var r=e.value,t=e.active,n=e.onClick,a=e.style,u=(0,o.e)(e,["value","active","onClick","style"]),c="linear-gradient(".concat(r,", ").concat(r,"), ").concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',", linear-gradient(#fff, #fff)");return l.createElement(qe,Object.assign({},u,{active:t,onClick:n},{style:Object.assign(Object.assign({},a),{backgroundImage:c})}))},Xe=(0,u.zo)(o.F.Input)((function(e){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.theme.typography.fonts.base}})),Ae=(0,u.zo)(o.I)((function(e){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.theme.input.color}}));!function(e){e.RGB="rgb",e.HSL="hsl",e.HEX="hex"}(de||(de={}));var Pe=Object.values(de),We=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,$e=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,De=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Ge=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Fe=/^\s*#?([0-9a-f]{3})\s*$/i,Ke=(c(n={},de.HEX,(function(e){return l.createElement(P,h({},e,{colorModel:W}))})),c(n,de.RGB,(function(e){return l.createElement(D,h({},e,{colorModel:F}))})),c(n,de.HSL,(function(e){return l.createElement(D,h({},e,{colorModel:G}))})),n),Ve=(c(a={},de.HEX,"transparent"),c(a,de.RGB,"rgba(0, 0, 0, 0)"),c(a,de.HSL,"hsla(0, 0%, 0%, 0)"),a),Ue=function(e){var r=null==e?void 0:e.match(We);if(!r)return[0,0,0,1];var t=s(r,5),n=t[1],a=t[2],o=t[3],l=t[4];return[n,a,o,void 0===l?1:l].map(Number)},Ye=function(e){var r;if(e){var t=!0;if($e.test(e)){var n,a=s(Ue(e),4),o=a[0],l=a[1],u=a[2],i=a[3],f=s(ve.rgb.hsl([o,l,u])||[0,0,0],3),h=f[0],d=f[1],v=f[2];return c(n={valid:t,value:e,keyword:ve.rgb.keyword([o,l,u]),colorSpace:de.RGB},de.RGB,e),c(n,de.HSL,"hsla(".concat(h,", ").concat(d,"%, ").concat(v,"%, ").concat(i,")")),c(n,de.HEX,"#".concat(ve.rgb.hex([o,l,u]).toLowerCase())),n}if(De.test(e)){var g,b=s(Ue(e),4),p=b[0],m=b[1],y=b[2],w=b[3],k=s(ve.hsl.rgb([p,m,y])||[0,0,0],3),x=k[0],M=k[1],_=k[2];return c(g={valid:t,value:e,keyword:ve.hsl.keyword([p,m,y]),colorSpace:de.HSL},de.RGB,"rgba(".concat(x,", ").concat(M,", ").concat(_,", ").concat(w,")")),c(g,de.HSL,e),c(g,de.HEX,"#".concat(ve.hsl.hex([p,m,y]).toLowerCase())),g}var E=e.replace("#",""),C=ve.keyword.rgb(E)||ve.hex.rgb(E),S=ve.rgb.hsl(C),O=e;if(/[^#a-f0-9]/i.test(e)?O=E:Ge.test(e)&&(O="#".concat(E)),O.startsWith("#"))t=Ge.test(O);else try{ve.keyword.hex(O)}catch(e){t=!1}return c(r={valid:t,value:O,keyword:ve.rgb.keyword(C),colorSpace:de.HEX},de.RGB,"rgba(".concat(C[0],", ").concat(C[1],", ").concat(C[2],", 1)")),c(r,de.HSL,"hsla(".concat(S[0],", ").concat(S[1],"%, ").concat(S[2],"%, 1)")),c(r,de.HEX,O),r}},Je=function(e){return e.replace(/\s*/,"").toLowerCase()},Qe=function(e){var r=e.name,t=e.value,n=e.onChange,a=e.onFocus,u=e.onBlur,c=e.presetColors,i=e.startOpen,f=function(e,r){var t=s((0,l.useState)(e||""),2),n=t[0],a=t[1],o=s((0,l.useState)((function(){return Ye(n)})),2),u=o[0],c=o[1],i=s((0,l.useState)((null==u?void 0:u.colorSpace)||de.HEX),2),f=i[0],h=i[1];(0,l.useEffect)((function(){void 0===e&&(a(""),c(void 0),h(de.HEX))}),[e]);var d=(0,l.useMemo)((function(){return function(e,r,t){if(!e||!(null==r?void 0:r.valid))return Ve[t];if(t!==de.HEX)return(null==r?void 0:r[t])||Ve[t];if(!r.hex.startsWith("#"))try{return"#".concat(ve.keyword.hex(r.hex))}catch(e){return Ve.hex}var n=r.hex.match(Fe);if(!n)return Ge.test(r.hex)?r.hex:Ve.hex;var a=s(n[1].split(""),3),o=a[0],l=a[1],u=a[2];return"#".concat(o).concat(o).concat(l).concat(l).concat(u).concat(u)}(n,u,f).toLowerCase()}),[n,u,f]),v=(0,l.useCallback)((function(e){var t=Ye(e);a((null==t?void 0:t.value)||e||""),t&&(c(t),h(t.colorSpace),r(t.value))}),[r]),g=(0,l.useCallback)((function(){var e=Pe.indexOf(f)+1;e>=Pe.length&&(e=0),h(Pe[e]);var t=(null==u?void 0:u[Pe[e]])||"";a(t),r(t)}),[u,f,r]);return{value:n,realValue:d,updateValue:v,color:u,colorSpace:f,cycleColorSpace:g}}(t,function(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return He(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),je(e,r,{leading:n,maxWait:r,trailing:a})}(n,200)),h=f.value,d=f.realValue,v=f.updateValue,g=f.color,b=f.colorSpace,p=f.cycleColorSpace,m=function(e,r,t){var n=s((0,l.useState)((null==r?void 0:r.valid)?[r]:[]),2),a=n[0],o=n[1];(0,l.useEffect)((function(){void 0===r&&o([])}),[r]);var u=(0,l.useMemo)((function(){return(e||[]).map((function(e){return"string"==typeof e?Ye(e):e.title?Object.assign(Object.assign({},Ye(e.color)),{keyword:e.title}):Ye(e.color)})).concat(a).filter(Boolean).slice(-27)}),[e,a]),c=(0,l.useCallback)((function(e){(null==e?void 0:e.valid)&&(u.some((function(r){return Je(r[t])===Je(e[t])}))||o((function(r){return r.concat(e)})))}),[t,u]);return{presets:u,addPreset:c}}(c,g,b),y=m.presets,w=m.addPreset,k=Ke[b];return l.createElement(ze,null,l.createElement(Ie,{trigger:"click",startOpen:i,closeOnClick:!0,onVisibilityChange:function(){return w(g)},tooltip:l.createElement(Re,null,l.createElement(k,Object.assign({color:"transparent"===d?"#000000":d},{onChange:v,onFocus:a,onBlur:u})),y.length>0&&l.createElement(Be,null,y.map((function(e,r){return l.createElement(o.W,{key:"".concat(e.value,"-").concat(r),hasChrome:!1,tooltip:l.createElement(Le,{note:e.keyword||e.value})},l.createElement(Te,{value:e[b],active:g&&Je(e[b])===Je(g[b]),onClick:function(){return v(e.value)}}))}))))},l.createElement(Te,{value:d,style:{margin:4}})),l.createElement(Xe,{id:(0,o.B)(r),value:h,onChange:function(e){return v(e.target.value)},onFocus:function(e){return e.target.select()},placeholder:"Choose color..."}),h?l.createElement(Ae,{icon:"markup",onClick:p}):null)}}}]);