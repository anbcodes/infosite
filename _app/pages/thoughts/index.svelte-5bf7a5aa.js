import{S as t,i as s,s as a,e,t as h,k as r,c as l,a as o,g as n,d as c,n as i,b as f,f as u,E as d,G as g,K as m,I as v}from"../../chunks/vendor-a6761340.js";import{t as I}from"../../chunks/thoughts-f42e3811.js";function p(t,s,a){const e=t.slice();return e[0]=s[a],e}function b(t){let s,a,m,v,I,p,b,E,x,y,k=t[0].id+"",D=t[0].title+"",T=t[0].date+"";return{c(){s=e("div"),a=e("div"),m=h(k),v=h("."),I=r(),p=e("a"),b=h(D),E=r(),x=e("div"),y=h(T),this.h()},l(t){s=l(t,"DIV",{class:!0});var e=o(s);a=l(e,"DIV",{class:!0});var h=o(a);m=n(h,k),v=n(h,"."),h.forEach(c),I=i(e),p=l(e,"A",{class:!0,href:!0});var r=o(p);b=n(r,D),r.forEach(c),e.forEach(c),E=i(t),x=l(t,"DIV",{class:!0});var f=o(x);y=n(f,T),f.forEach(c),this.h()},h(){f(a,"class","mr-4 text-stone-500"),f(p,"class","darklink"),f(p,"href","/thoughts/"+t[0].id),f(s,"class","flex"),f(x,"class","ml-8 mb-2 text-stone-500 text-sm")},m(t,e){u(t,s,e),d(s,a),d(a,m),d(a,v),d(s,I),d(s,p),d(p,b),u(t,E,e),u(t,x,e),d(x,y)},p:g,d(t){t&&c(s),t&&c(E),t&&c(x)}}}function E(t){let s,a,E,x,y,k,D,T,V=I,w=[];for(let e=0;e<V.length;e+=1)w[e]=b(p(t,V,e));return{c(){s=r(),a=e("div"),E=h("Thoughts"),x=r(),y=e("p"),k=h("This is basically my blog. I write about random things that interest me, thoughts that I have, or\n\texperiences that I want to share."),D=r(),T=e("div");for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){m('[data-svelte="svelte-y4bnyu"]',document.head).forEach(c),s=i(t),a=l(t,"DIV",{class:!0});var e=o(a);E=n(e,"Thoughts"),e.forEach(c),x=i(t),y=l(t,"P",{});var h=o(y);k=n(h,"This is basically my blog. I write about random things that interest me, thoughts that I have, or\n\texperiences that I want to share."),h.forEach(c),D=i(t),T=l(t,"DIV",{});var r=o(T);for(let s=0;s<w.length;s+=1)w[s].l(r);r.forEach(c),this.h()},h(){document.title="Thoughts",f(a,"class","header-c")},m(t,e){u(t,s,e),u(t,a,e),d(a,E),u(t,x,e),u(t,y,e),d(y,k),u(t,D,e),u(t,T,e);for(let s=0;s<w.length;s+=1)w[s].m(T,null)},p(t,[s]){if(0&s){let a;for(V=I,a=0;a<V.length;a+=1){const e=p(t,V,a);w[a]?w[a].p(e,s):(w[a]=b(e),w[a].c(),w[a].m(T,null))}for(;a<w.length;a+=1)w[a].d(1);w.length=V.length}},i:g,o:g,d(t){t&&c(s),t&&c(a),t&&c(x),t&&c(y),t&&c(D),t&&c(T),v(w,t)}}}export default class extends t{constructor(t){super(),s(this,t,null,E,a,{})}}
