import{S as z,i as A,s as B,e as E,t as v,c as d,a as b,g as P,d as n,f as o,E as R,h as N,k as S,l as C,n as j,G}from"./chunks/vendor-4cd5d097.js";function H(r){let f,t=r[1].frame+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(n)},m(l,s){o(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&N(a,t)},d(l){l&&n(f)}}}function w(r){let f,t=r[1].stack+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(n)},m(l,s){o(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&N(a,t)},d(l){l&&n(f)}}}function D(r){let f,t,a,l,s=r[1].message+"",c,k,_,p,i=r[1].frame&&H(r),u=r[1].stack&&w(r);return{c(){f=E("h1"),t=v(r[0]),a=S(),l=E("pre"),c=v(s),k=S(),i&&i.c(),_=S(),u&&u.c(),p=C()},l(e){f=d(e,"H1",{});var m=b(f);t=P(m,r[0]),m.forEach(n),a=j(e),l=d(e,"PRE",{});var q=b(l);c=P(q,s),q.forEach(n),k=j(e),i&&i.l(e),_=j(e),u&&u.l(e),p=C()},m(e,m){o(e,f,m),R(f,t),o(e,a,m),o(e,l,m),R(l,c),o(e,k,m),i&&i.m(e,m),o(e,_,m),u&&u.m(e,m),o(e,p,m)},p(e,[m]){m&1&&N(t,e[0]),m&2&&s!==(s=e[1].message+"")&&N(c,s),e[1].frame?i?i.p(e,m):(i=H(e),i.c(),i.m(_.parentNode,_)):i&&(i.d(1),i=null),e[1].stack?u?u.p(e,m):(u=w(e),u.c(),u.m(p.parentNode,p)):u&&(u.d(1),u=null)},i:G,o:G,d(e){e&&n(f),e&&n(a),e&&n(l),e&&n(k),i&&i.d(e),e&&n(_),u&&u.d(e),e&&n(p)}}}function J({error:r,status:f}){return{props:{error:r,status:f}}}function F(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class K extends z{constructor(f){super();A(this,f,F,D,B,{status:0,error:1})}}export{K as default,J as load};
