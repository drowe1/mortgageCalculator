const $e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};$e();function X(){}function Ye(e){return e()}function Be(){return Object.create(null)}function ee(e){e.forEach(Ye)}function Le(e){return typeof e=="function"}function et(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function tt(e){return Object.keys(e).length===0}function ve(e){return e&&Le(e.destroy)?e.destroy:X}function i(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function M(){return p(" ")}function E(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return e===""?null:+e}function nt(e){return Array.from(e.childNodes)}function S(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t){e.value=t==null?"":t}function K(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let Te;function ne(e){Te=e}const x=[],ze=[];let $=[];const Ve=[],lt=Promise.resolve();let Ee=!1;function rt(){Ee||(Ee=!0,lt.then(Ze))}function Ie(e){$.push(e)}const Me=new Set;let Z=0;function Ze(){if(Z!==0)return;const e=Te;do{try{for(;Z<x.length;){const t=x[Z];Z++,ne(t),it(t.$$)}}catch(t){throw x.length=0,Z=0,t}for(ne(null),x.length=0,Z=0;ze.length;)ze.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];Me.has(n)||(Me.add(n),n())}$.length=0}while(x.length);for(;Ve.length;)Ve.pop()();Ee=!1,Me.clear(),ne(e)}function it(e){if(e.fragment!==null){e.update(),ee(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ie)}}function ot(e){const t=[],n=[];$.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),$=t}const ut=new Set;function st(e,t){e&&e.i&&(ut.delete(e),e.i(t))}function ft(e,t,n,l){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),l||Ie(()=>{const s=e.$$.on_mount.map(Ye).filter(Le);e.$$.on_destroy?e.$$.on_destroy.push(...s):ee(s),e.$$.on_mount=[]}),o.forEach(Ie)}function at(e,t){const n=e.$$;n.fragment!==null&&(ot(n.after_update),ee(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,t){e.$$.dirty[0]===-1&&(x.push(e),rt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pt(e,t,n,l,r,o,s,w=[-1]){const _=Te;ne(e);const a=e.$$={fragment:null,ctx:[],props:o,update:X,not_equal:r,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:Be(),dirty:w,skip_bound:!1,root:t.target||_.$$.root};s&&s(a.root);let L=!1;if(a.ctx=n?n(e,t.props||{},(c,g,...d)=>{const k=d.length?d[0]:g;return a.ctx&&r(a.ctx[c],a.ctx[c]=k)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](k),L&&ct(e,c)),g}):[],a.update(),L=!0,ee(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const c=nt(t.target);a.fragment&&a.fragment.l(c),c.forEach(A)}else a.fragment&&a.fragment.c();t.intro&&st(e.$$.fragment),ft(e,t.target,t.anchor,t.customElement),Ze()}ne(_)}class dt{$destroy(){at(this,1),this.$destroy=X}$on(t,n){if(!Le(n))return X;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!tt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const we=(e,t)=>{function n(l){e.value=t(e.value)}return e.addEventListener("input",n),e.addEventListener("paste",n),e.value=t(e.value),{destroy(){e.removeEventListener("input",n),e.removeEventListener("paste",n)}}},v=e=>"$"+String(e).replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","),mt=(e,t,n,l,r)=>{r=typeof r=="undefined"?0:r,l=typeof l=="undefined"?0:l;const o=t*(1+e*r)-l*e,s=n*e+t*(1+e*r);return Math.log(o/s)/Math.log(1+e)},ht=(e,t,n,l,r)=>{if(l||(l=0),r||(r=0),e==0)return-(n+l)/t;const o=Math.pow(1+e,t);let s=e/(o-1)*-(n*o+l);return r==1&&(s/=1+e),s};function qe(e){let t,n,l=(e[3]*100).toFixed(2)+"",r,o;return{c(){t=m("p"),n=p("PMI Rate: "),r=p(l),o=p("%"),u(t,"class","svelte-nhimro")},m(s,w){N(s,t,w),i(t,n),i(t,r),i(t,o)},p(s,w){w&8&&l!==(l=(s[3]*100).toFixed(2)+"")&&S(r,l)},d(s){s&&A(t)}}}function Ke(e){let t,n,l;return{c(){t=m("input"),u(t,"type","range"),u(t,"class","slider svelte-nhimro"),u(t,"min","0.002"),u(t,"max","0.025"),u(t,"step","0.0005")},m(r,o){N(r,t,o),D(t,e[3]),n||(l=[E(t,"change",e[24]),E(t,"input",e[24])],n=!0)},p(r,o){o&8&&D(t,r[3])},d(r){r&&A(t),n=!1,ee(l)}}}function _t(e){let t;return{c(){t=m("p"),t.textContent="Down payment cannot be larger than purchase price",K(t,"color","red"),u(t,"class","svelte-nhimro")},m(n,l){N(n,t,l)},p:X,d(n){n&&A(t)}}}function gt(e){let t,n=v(Math.round(e[13]))+"",l,r,o,s,w,_=v(Math.round(e[8]))+"",a,L,c,g,d,k=v(Math.round(e[7]/12))+"",I,F,T,y=e[6]<.2&&Ge(e),P=e[6]<.2&&Je(e);return{c(){t=m("h1"),l=p(n),r=M(),y&&y.c(),o=M(),s=m("h2"),w=p("Principal & Interest: "),a=p(_),L=M(),P&&P.c(),c=M(),g=m("h2"),d=p("Taxes: "),I=p(k),F=M(),T=m("h2"),T.textContent=`Insurance: ${v(Math.round(xe/12))}`,K(t,"text-align","center"),K(s,"margin-top","0"),K(s,"margin-bottom","0"),K(g,"margin-top","0"),K(g,"margin-bottom","0"),K(T,"margin-top","0"),K(T,"margin-bottom","0")},m(f,b){N(f,t,b),i(t,l),N(f,r,b),y&&y.m(f,b),N(f,o,b),N(f,s,b),i(s,w),i(s,a),N(f,L,b),P&&P.m(f,b),N(f,c,b),N(f,g,b),i(g,d),i(g,I),N(f,F,b),N(f,T,b)},p(f,b){b&8192&&n!==(n=v(Math.round(f[13]))+"")&&S(l,n),f[6]<.2?y?y.p(f,b):(y=Ge(f),y.c(),y.m(o.parentNode,o)):y&&(y.d(1),y=null),b&256&&_!==(_=v(Math.round(f[8]))+"")&&S(a,_),f[6]<.2?P?P.p(f,b):(P=Je(f),P.c(),P.m(c.parentNode,c)):P&&(P.d(1),P=null),b&128&&k!==(k=v(Math.round(f[7]/12))+"")&&S(I,k)},d(f){f&&A(t),f&&A(r),y&&y.d(f),f&&A(o),f&&A(s),f&&A(L),P&&P.d(f),f&&A(c),f&&A(g),f&&A(F),f&&A(T)}}}function Ge(e){let t,n=v(Math.round(e[13]-e[5]))+"",l;return{c(){t=m("h1"),l=p(n)},m(r,o){N(r,t,o),i(t,l)},p(r,o){o&8224&&n!==(n=v(Math.round(r[13]-r[5]))+"")&&S(l,n)},d(r){r&&A(t)}}}function Je(e){let t,n,l=v(Math.round(e[5]))+"",r,o,s=Xe(e[14])+"",w,_,a=v(Math.round(e[5]*e[14]))+"",L,c;return{c(){t=m("h2"),n=p("PMI: "),r=p(l),o=p(` for
				`),w=p(s),_=p(`
				(Total PMI `),L=p(a),c=p(")"),K(t,"margin-top","0"),K(t,"margin-bottom","0")},m(g,d){N(g,t,d),i(t,n),i(t,r),i(t,o),i(t,w),i(t,_),i(t,L),i(t,c)},p(g,d){d&32&&l!==(l=v(Math.round(g[5]))+"")&&S(r,l),d&16384&&s!==(s=Xe(g[14])+"")&&S(w,s),d&16416&&a!==(a=v(Math.round(g[5]*g[14]))+"")&&S(L,a)},d(g){g&&A(t)}}}function yt(e){let t,n,l,r=v(Math.round(e[1]*5))+"",o,s,w,_,a,L,c,g,d,k,I,F,T=(e[6]*100).toFixed(1)+"",y,P,f=v(Math.round(e[0]*.2))+"",b,le,re,V,Q,ie,H,oe,U,ue,G,W,J=(e[2]*100).toFixed(1)+"",se,fe,ae,ce,B,Ce,ge,te,Ae,Y,Ne,pe=(e[4]*100).toFixed(2)+"",ye,Fe,He,de,z,Oe,me,Re,he,j,Se,be,je,O=e[6]<.2&&qe(e),R=e[6]<.2&&Ke(e);function De(h,C){return h[12]?gt:_t}let _e=De(e),q=_e(e);return{c(){t=m("main"),n=m("p"),l=p("Purchase Price ("),o=p(r),s=p(")"),w=M(),_=m("div"),a=m("button"),a.textContent="-",L=M(),c=m("input"),g=M(),d=m("button"),d.textContent="+",k=M(),I=m("p"),F=p("Down Payment ("),y=p(T),P=p(`%) 
		(`),b=p(f),le=p(")"),re=M(),V=m("div"),Q=m("button"),Q.textContent="-",ie=M(),H=m("input"),oe=M(),U=m("button"),U.textContent="+",ue=M(),G=m("p"),W=p("Interest Rate: "),se=p(J),fe=p("%"),ae=M(),ce=m("div"),B=m("input"),Ce=M(),O&&O.c(),ge=M(),te=m("div"),R&&R.c(),Ae=M(),Y=m("p"),Ne=p("Tax Rate: "),ye=p(pe),Fe=p("%"),He=M(),de=m("div"),z=m("input"),Oe=M(),me=m("p"),me.textContent="HOA",Re=M(),he=m("div"),j=m("input"),Se=M(),q.c(),u(n,"class","svelte-nhimro"),u(a,"class","incrementer svelte-nhimro"),u(c,"class","money svelte-nhimro"),u(c,"inputmode","numeric"),u(c,"maxlength","12"),u(d,"class","incrementer svelte-nhimro"),u(_,"class","incrementerHolder svelte-nhimro"),u(I,"class","svelte-nhimro"),u(Q,"class","incrementer svelte-nhimro"),u(H,"class","money svelte-nhimro"),u(H,"inputmode","numeric"),u(H,"maxlength","12"),u(U,"class","incrementer svelte-nhimro"),u(V,"class","incrementerHolder svelte-nhimro"),u(G,"class","svelte-nhimro"),u(B,"type","range"),u(B,"class","slider svelte-nhimro"),u(B,"min","0.05"),u(B,"max","0.09"),u(B,"step","0.001"),u(ce,"class","sliderHolder svelte-nhimro"),u(te,"class","sliderHolder svelte-nhimro"),u(Y,"class","svelte-nhimro"),u(z,"type","range"),u(z,"class","slider svelte-nhimro"),u(z,"min","0.0075"),u(z,"max","0.020"),u(z,"step","0.0001"),u(de,"class","sliderHolder svelte-nhimro"),u(me,"class","svelte-nhimro"),u(j,"class","money svelte-nhimro"),u(j,"inputmode","numeric"),u(j,"maxlength","12"),u(he,"class","incrementerHolder svelte-nhimro"),u(t,"class","svelte-nhimro")},m(h,C){N(h,t,C),i(t,n),i(n,l),i(n,o),i(n,s),i(t,w),i(t,_),i(_,a),i(_,L),i(_,c),D(c,e[11]),i(_,g),i(_,d),i(t,k),i(t,I),i(I,F),i(I,y),i(I,P),i(I,b),i(I,le),i(t,re),i(t,V),i(V,Q),i(V,ie),i(V,H),D(H,e[10]),i(V,oe),i(V,U),i(t,ue),i(t,G),i(G,W),i(G,se),i(G,fe),i(t,ae),i(t,ce),i(ce,B),D(B,e[2]),i(t,Ce),O&&O.m(t,null),i(t,ge),i(t,te),R&&R.m(te,null),i(t,Ae),i(t,Y),i(Y,Ne),i(Y,ye),i(Y,Fe),i(t,He),i(t,de),i(de,z),D(z,e[4]),i(t,Oe),i(t,me),i(t,Re),i(t,he),i(he,j),D(j,e[9]),i(t,Se),q.m(t,null),be||(je=[E(a,"click",e[17]),ve(we.call(null,c,v)),E(c,"input",e[18]),E(c,"keyup",e[15]),E(c,"focus",Pe),E(d,"click",e[19]),E(Q,"click",e[20]),ve(we.call(null,H,v)),E(H,"input",e[21]),E(H,"keyup",e[15]),E(H,"focus",Pe),E(U,"click",e[22]),E(B,"change",e[23]),E(B,"input",e[23]),E(z,"change",e[25]),E(z,"input",e[25]),ve(we.call(null,j,v)),E(j,"input",e[26]),E(j,"keyup",e[15]),E(j,"focus",Pe)],be=!0)},p(h,[C]){C&2&&r!==(r=v(Math.round(h[1]*5))+"")&&S(o,r),C&2048&&c.value!==h[11]&&D(c,h[11]),C&64&&T!==(T=(h[6]*100).toFixed(1)+"")&&S(y,T),C&1&&f!==(f=v(Math.round(h[0]*.2))+"")&&S(b,f),C&1024&&H.value!==h[10]&&D(H,h[10]),C&4&&J!==(J=(h[2]*100).toFixed(1)+"")&&S(se,J),C&4&&D(B,h[2]),h[6]<.2?O?O.p(h,C):(O=qe(h),O.c(),O.m(t,ge)):O&&(O.d(1),O=null),h[6]<.2?R?R.p(h,C):(R=Ke(h),R.c(),R.m(te,null)):R&&(R.d(1),R=null),C&16&&pe!==(pe=(h[4]*100).toFixed(2)+"")&&S(ye,pe),C&16&&D(z,h[4]),C&512&&j.value!==h[9]&&D(j,h[9]),_e===(_e=De(h))&&q?q.p(h,C):(q.d(1),q=_e(h),q&&(q.c(),q.m(t,null)))},i:X,o:X,d(h){h&&A(t),O&&O.d(),R&&R.d(),q.d(),be=!1,ee(je)}}}let xe=2e3,Qe=30,Ue=5e3,We=1500;function Pe(e){e.target.setSelectionRange(1,e.target.value.length)}function Xe(e){let t=Math.floor(e/12),n=e%12,l="";return t>0&&(t==1?l+=t+" year":l+=t+" years"),n>0&&(n==1?l+=" "+n+" month":l+=" "+n+" months"),l}function bt(e,t,n){let l,r,o,s,w,_,a,L,c,g,d=275e3,k=60500,I=0,F=.072,T=.0075,y=.014;function P(){n(0,d=parseInt(l.replace("$","").replaceAll(",",""))),n(1,k=parseInt(r.replace("$","").replaceAll(",",""))),n(16,I=parseInt(o.replace("$","").replaceAll(",","")))}function f(G,W,J){if(W/J<.2)return 0;let fe=ht(G/12,360,W-J,0),ae=mt(G/12,fe,W-J,W*-.8);return Math.ceil(ae)}const b=()=>n(0,d-=Ue);function le(){l=this.value,n(11,l),n(0,d)}const re=()=>n(0,d+=Ue),V=()=>n(1,k-=We);function Q(){r=this.value,n(10,r),n(1,k)}const ie=()=>n(1,k+=We);function H(){F=ke(this.value),n(2,F)}function oe(){T=ke(this.value),n(3,T)}function U(){y=ke(this.value),n(4,y)}function ue(){o=this.value,n(9,o),n(16,I)}return e.$$.update=()=>{e.$$.dirty&1&&n(11,l=v(d)),e.$$.dirty&2&&n(10,r=v(k)),e.$$.dirty&65536&&n(9,o=v(I)),e.$$.dirty&3&&n(6,s=k/d),e.$$.dirty&17&&n(7,w=d*y),e.$$.dirty&11&&n(5,_=(d-k)*T/12),e.$$.dirty&7&&n(14,a=f(F,d,k)),e.$$.dirty&7&&n(8,L=(d-k)*(F/12*(1+F/12)**Qe*12)/((1+F/12)**Qe*12-1)),e.$$.dirty&66016&&n(13,c=L+I+w/12+xe/12+(s<.2?_:0)),e.$$.dirty&3&&n(12,g=d>=k)},[d,k,F,T,y,_,s,w,L,o,r,l,g,c,a,P,I,b,le,re,V,Q,ie,H,oe,U,ue]}class vt extends dt{constructor(t){super(),pt(this,t,bt,yt,et,{})}}new vt({target:document.getElementById("app")});