import{S as e,i as t,s as o,e as a,t as n,k as r,c as s,a as i,g as c,d as l,n as h,b as d,H as m,f as p,E as f,h as u,v as b,j as g,m as y,o as w,r as k,w as v,B as I,u as L,I as A,J as S,O as x,l as E,K as $}from"../chunks/vendor-4738865b.js";function C(e,t,o){const a=e.slice();return a[1]=t[o],a[3]=o,a}function T(e){let t,o,n,r;return o=new S({props:{size:"1.5rem"}}),{c(){t=a("a"),g(o.$$.fragment),this.h()},l(e){t=s(e,"A",{class:!0,href:!0});var a=i(t);y(o.$$.fragment,a),a.forEach(l),this.h()},h(){d(t,"class","rounded-full flex justify-center items-center text-white visited:text-gray-100"),d(t,"href",n=e[1].codeLink)},m(e,a){p(e,t,a),w(o,t,null),r=!0},p(e,o){(!r||1&o&&n!==(n=e[1].codeLink))&&d(t,"href",n)},i(e){r||(b(o.$$.fragment,e),r=!0)},o(e){k(o.$$.fragment,e),r=!1},d(e){e&&l(t),v(o)}}}function j(e){let t,o,n,r;return o=new x({}),{c(){t=a("a"),g(o.$$.fragment),this.h()},l(e){t=s(e,"A",{class:!0,href:!0});var a=i(t);y(o.$$.fragment,a),a.forEach(l),this.h()},h(){d(t,"class","rounded-full p-2 flex justify-center items-center hover:bg-gray-900 text-white visited:text-gray-100"),d(t,"href",n=e[1].link)},m(e,a){p(e,t,a),w(o,t,null),r=!0},p(e,o){(!r||1&o&&n!==(n=e[1].link))&&d(t,"href",n)},i(e){r||(b(o.$$.fragment,e),r=!0)},o(e){k(o.$$.fragment,e),r=!1},d(e){e&&l(t),v(o)}}}function M(e){let t,o,g,y,w,v,A,S,x,E,$,C,M,P=e[1].name+"",D=e[1].description+"",V=e[1].codeLink&&T(e),N=e[1].link&&j(e);return{c(){t=a("div"),o=a("div"),g=a("div"),y=n(P),w=r(),v=a("div"),A=r(),V&&V.c(),S=r(),N&&N.c(),x=r(),E=a("div"),$=n(D),C=r(),this.h()},l(e){t=s(e,"DIV",{class:!0});var a=i(t);o=s(a,"DIV",{class:!0});var n=i(o);g=s(n,"DIV",{});var r=i(g);y=c(r,P),r.forEach(l),w=h(n),v=s(n,"DIV",{class:!0}),i(v).forEach(l),A=h(n),V&&V.l(n),S=h(n),N&&N.l(n),n.forEach(l),x=h(a),E=s(a,"DIV",{class:!0});var d=i(E);$=c(d,D),d.forEach(l),a.forEach(l),C=h(e),this.h()},h(){d(v,"class","flex-grow"),d(o,"class","text-xl flex"),d(E,"class","text-warmGray-400"),d(t,"class","p-4 text-warmGray-300 border-t border-warmGray-400"),m(t,"border-t",0!==e[3])},m(e,a){p(e,t,a),f(t,o),f(o,g),f(g,y),f(o,w),f(o,v),f(o,A),V&&V.m(o,null),f(o,S),N&&N.m(o,null),f(t,x),f(t,E),f(E,$),p(e,C,a),M=!0},p(e,t){(!M||1&t)&&P!==(P=e[1].name+"")&&u(y,P),e[1].codeLink?V?(V.p(e,t),1&t&&b(V,1)):(V=T(e),V.c(),b(V,1),V.m(o,S)):V&&(I(),k(V,1,1,(()=>{V=null})),L()),e[1].link?N?(N.p(e,t),1&t&&b(N,1)):(N=j(e),N.c(),b(N,1),N.m(o,null)):N&&(I(),k(N,1,1,(()=>{N=null})),L()),(!M||1&t)&&D!==(D=e[1].description+"")&&u($,D)},i(e){M||(b(V),b(N),M=!0)},o(e){k(V),k(N),M=!1},d(e){e&&l(t),V&&V.d(),N&&N.d(),e&&l(C)}}}function P(e){let t,o,n=e[0],r=[];for(let a=0;a<n.length;a+=1)r[a]=M(C(e,n,a));const c=e=>k(r[e],1,1,(()=>{r[e]=null}));return{c(){t=a("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=s(e,"DIV",{class:!0});var o=i(t);for(let t=0;t<r.length;t+=1)r[t].l(o);o.forEach(l),this.h()},h(){d(t,"class","my-3 border-warmGray-400 rounded border")},m(e,a){p(e,t,a);for(let o=0;o<r.length;o+=1)r[o].m(t,null);o=!0},p(e,[o]){if(1&o){let a;for(n=e[0],a=0;a<n.length;a+=1){const s=C(e,n,a);r[a]?(r[a].p(s,o),b(r[a],1)):(r[a]=M(s),r[a].c(),b(r[a],1),r[a].m(t,null))}for(I(),a=n.length;a<r.length;a+=1)c(a);L()}},i(e){if(!o){for(let e=0;e<n.length;e+=1)b(r[e]);o=!0}},o(e){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)k(r[t]);o=!1},d(e){e&&l(t),A(r,e)}}}function D(e,t,o){let{projects:a=[]}=t;return e.$$set=e=>{"projects"in e&&o(0,a=e.projects)},[a]}class V extends e{constructor(e){super(),t(this,e,D,P,o,{projects:0})}}function N(e,t,o){const a=e.slice();return a[2]=t[o],a}function H(e){let t,o,m,u,I,L=e[2]+"";return u=new V({props:{projects:e[0].filter((function(...t){return e[1](e[2],...t)}))}}),{c(){t=a("div"),o=n(L),m=r(),g(u.$$.fragment),this.h()},l(e){t=s(e,"DIV",{class:!0});var a=i(t);o=c(a,L),a.forEach(l),m=h(e),y(u.$$.fragment,e),this.h()},h(){d(t,"class","text-center text-sm")},m(e,a){p(e,t,a),f(t,o),p(e,m,a),w(u,e,a),I=!0},p(t,o){e=t},i(e){I||(b(u.$$.fragment,e),I=!0)},o(e){k(u.$$.fragment,e),I=!1},d(e){e&&l(t),e&&l(m),v(u,e)}}}function G(e){let t,o,m,u,g,y,w,v,S,x,C,T,j,M,P,D,V,G,J,z,K,O,R,W,_,q,F,Y,Q,U,X,Z,ee,te,oe,ae,ne,re,se,ie,ce,le,he=[...new Set(e[0].map(B))],de=[];for(let a=0;a<he.length;a+=1)de[a]=H(N(e,he,a));const me=e=>k(de[e],1,1,(()=>{de[e]=null}));return{c(){t=r(),o=a("div"),m=n("About Me"),u=r(),g=a("p"),y=n("Hello! I am a computer programmer. I know how to program in HTML, CSS, Javascript, and Typescript.\n\tI've used Svelte and Vuejs for creating websites (This site is made with SvelteKit). I'm not as\n\tgood at C/C++ and Python, but I've written programs with them. I've also experimented with Java,\n\tRust, and Haskell, but I would not really be able to use them to write a program."),w=r(),v=a("p"),S=n("I also have some experience with cybersecuity. I've done "),x=a("a"),C=n("Cyberstart"),T=n("\n\tand participated in the 2021 National Cyber Scholarship Competition, in which I scored\n\t"),j=a("a"),M=n("21st"),P=n("."),D=r(),V=a("p"),G=n("I'm also currently looking for web development contract work. I can create responsive websites,\n\tsimple web apps, or prototypes. Contact me for more information."),J=r(),z=a("p"),K=n("Lastly, I also write about random things "),O=a("a"),R=n("here"),W=r(),_=a("p"),q=a("a"),F=n("Linkedin"),Y=r(),Q=a("a"),U=n("Github"),X=r(),Z=a("a"),ee=n("me@anb.codes"),te=r(),oe=a("a"),ae=n("My younger brother's site"),ne=r(),re=a("div"),se=n("Personal Projects"),ie=r();for(let e=0;e<de.length;e+=1)de[e].c();ce=E(),this.h()},l(e){$('[data-svelte="svelte-15n6r49"]',document.head).forEach(l),t=h(e),o=s(e,"DIV",{class:!0});var a=i(o);m=c(a,"About Me"),a.forEach(l),u=h(e),g=s(e,"P",{});var n=i(g);y=c(n,"Hello! I am a computer programmer. I know how to program in HTML, CSS, Javascript, and Typescript.\n\tI've used Svelte and Vuejs for creating websites (This site is made with SvelteKit). I'm not as\n\tgood at C/C++ and Python, but I've written programs with them. I've also experimented with Java,\n\tRust, and Haskell, but I would not really be able to use them to write a program."),n.forEach(l),w=h(e),v=s(e,"P",{});var r=i(v);S=c(r,"I also have some experience with cybersecuity. I've done "),x=s(r,"A",{href:!0});var d=i(x);C=c(d,"Cyberstart"),d.forEach(l),T=c(r,"\n\tand participated in the 2021 National Cyber Scholarship Competition, in which I scored\n\t"),j=s(r,"A",{href:!0});var p=i(j);M=c(p,"21st"),p.forEach(l),P=c(r,"."),r.forEach(l),D=h(e),V=s(e,"P",{});var f=i(V);G=c(f,"I'm also currently looking for web development contract work. I can create responsive websites,\n\tsimple web apps, or prototypes. Contact me for more information."),f.forEach(l),J=h(e),z=s(e,"P",{});var b=i(z);K=c(b,"Lastly, I also write about random things "),O=s(b,"A",{href:!0});var k=i(O);R=c(k,"here"),k.forEach(l),b.forEach(l),W=h(e),_=s(e,"P",{});var I=i(_);q=s(I,"A",{href:!0,class:!0});var L=i(q);F=c(L,"Linkedin"),L.forEach(l),Y=h(I),Q=s(I,"A",{href:!0,class:!0});var A=i(Q);U=c(A,"Github"),A.forEach(l),X=h(I),Z=s(I,"A",{href:!0,class:!0});var N=i(Z);ee=c(N,"me@anb.codes"),N.forEach(l),te=h(I),oe=s(I,"A",{href:!0,class:!0});var H=i(oe);ae=c(H,"My younger brother's site"),H.forEach(l),I.forEach(l),ne=h(e),re=s(e,"DIV",{class:!0});var B=i(re);se=c(B,"Personal Projects"),B.forEach(l),ie=h(e);for(let t=0;t<de.length;t+=1)de[t].l(e);ce=E(),this.h()},h(){document.title="Anb.codes",d(o,"class","header-c"),d(x,"href","https://www.cyberstartamerica.org/"),d(j,"href","https://leaderboard.tomahawque.com/943e22be-870a-11eb-8e55-636337383761/359e5c0b1998ff3e19014cb3b9239f64/"),d(O,"href","/thoughts"),d(q,"href","https://www.linkedin.com/in/andrew-baumes-36242a216/"),d(q,"class","darklink"),d(Q,"href","https://github.com/anbcodes"),d(Q,"class","darklink"),d(Z,"href","mailto:me@anb.codes"),d(Z,"class","darklink"),d(oe,"href","https://jason1.page"),d(oe,"class","darklink"),d(re,"class","header-c")},m(e,a){p(e,t,a),p(e,o,a),f(o,m),p(e,u,a),p(e,g,a),f(g,y),p(e,w,a),p(e,v,a),f(v,S),f(v,x),f(x,C),f(v,T),f(v,j),f(j,M),f(v,P),p(e,D,a),p(e,V,a),f(V,G),p(e,J,a),p(e,z,a),f(z,K),f(z,O),f(O,R),p(e,W,a),p(e,_,a),f(_,q),f(q,F),f(_,Y),f(_,Q),f(Q,U),f(_,X),f(_,Z),f(Z,ee),f(_,te),f(_,oe),f(oe,ae),p(e,ne,a),p(e,re,a),f(re,se),p(e,ie,a);for(let t=0;t<de.length;t+=1)de[t].m(e,a);p(e,ce,a),le=!0},p(e,[t]){if(1&t){let o;for(he=[...new Set(e[0].map(B))],o=0;o<he.length;o+=1){const a=N(e,he,o);de[o]?(de[o].p(a,t),b(de[o],1)):(de[o]=H(a),de[o].c(),b(de[o],1),de[o].m(ce.parentNode,ce))}for(I(),o=he.length;o<de.length;o+=1)me(o);L()}},i(e){if(!le){for(let e=0;e<he.length;e+=1)b(de[e]);le=!0}},o(e){de=de.filter(Boolean);for(let t=0;t<de.length;t+=1)k(de[t]);le=!1},d(e){e&&l(t),e&&l(o),e&&l(u),e&&l(g),e&&l(w),e&&l(v),e&&l(D),e&&l(V),e&&l(J),e&&l(z),e&&l(W),e&&l(_),e&&l(ne),e&&l(re),e&&l(ie),A(de,e),e&&l(ce)}}}const B=e=>e.year;function J(e){return[[{name:"Time",link:"https://time.anb.codes",description:"A online stopwatch. (Cloud Stopwatch v2)",year:"2022",codeLink:"https://github.com/anbcodes/online-stopwatch"},{name:"Cloud Stopwatch",link:"https://cloud-watch.anb.codes",description:"This is a cloud stopwatch for keeping track of multiple stopwatches across devices.",year:"2022",codeLink:"https://github.com/anbcodes/cloud-watch"},{name:"Timeline",description:"This is a project allows you to interactivly work on a timeline.",year:"2022",codeLink:"https://github.com/anbcodes/timeline"},{name:"Gem",link:"https://deno.land/x/gem",description:"A gemini server similar to oak or koa, written in deno.",year:"2022",codeLink:"https://github.com/anbcodes/gem"},{name:"Yoda Sightings",link:"https://yoda.anb.codes",description:"My family has been hiding a lego baby yoda around the house. I post the pictures of where we find him here.",year:"2022",codeLink:"https://github.com/anbcodes/yoda-sightings"},{name:"NAND Adder",link:"https://nandadder.anb.codes",description:"A school project where I simulate a 8 bit adder using only NAND gates.",year:"2022",codeLink:"https://github.com/anbcodes/nandgateslogic"},{name:"anb.codes",link:"https://anb.codes",moreInfo:"anbcodes-site",description:"anb.codes is this website which was made with Sveltekit and Tailwindcss.",year:"2021",codeLink:"https://git.anb.codes/anbcodes/website"},{name:"Thoughts",link:"https://anb.codes/thoughts",moreInfo:"anbcodes-site",description:"Thoughts is the place where I write.",year:"2021",codeLink:"https://github.com/anbcodes/infosite/"},{name:"LED Light Strip Controller",link:null,moreInfo:"led-light-strips",description:"My code to control my led light strips with my Arduino",year:"2021",codeLink:"https://github.com/anbcodes/led-lights"},{name:"Air1 to Youtube Music",link:null,moreInfo:"air1-to-yt",description:"This tool watches for the songs that air1 has played and creates a youtube music playlist with them",year:"2021",codeLink:"https://github.com/anbcodes/air1-to-ytmusic"},{name:"3 Hour platformer",link:"https://3hr-platformer.anb.codes",moreInfo:"3hr-platformer",description:"My brother challenged me to write a game in three hours",year:"2021",codeLink:"https://github.com/anbcodes/3hr-platformer"},{name:"How The Market Works ad hider",link:"https://chrome.google.com/webstore/detail/htmw-ad-hider/boefgankmlgmcmebohglelhngipmmckm",moreInfo:"htmw-ad-hider",description:"HTMW had a lot of ads and my ad blocker was not really working so I made my own extension",year:"2021",codeLink:"https://github.com/anbcodes/htmw-ad-remover"},{name:"A Stopwatch",link:null,moreInfo:"htmw-ad-hider",description:"A Stopwatch which I made",year:"2020",codeLink:"https://github.com/anbcodes/timer"},{name:"Slide Advancer",link:"https://slide-advancer.anb.codes",moreInfo:"slide-advancer",description:"Slide Advancer is an app that allows you to advance slides (Lines of text) on a computer using your phone",year:"2021",codeLink:null},{name:"Some Cybersecuity Scripts",link:null,moreInfo:"cyberscripts",description:"Some scripts which I have used for capture the flag challenges",year:"2021",codeLink:"https://github.com/anbcodes/cyberscripts"},{name:"Advent of Code 2020",link:"https://adventofcode.com/2020",moreInfo:"advent-of-code-2020",description:"My solutions to the Advent of Code 2020",year:"2020",codeLink:"https://github.com/anbcodes/advent2020"},{name:"Google Docs ANI Chart Analyzer 2.0",link:"https://ani.anb.codes",moreInfo:"ani",description:"This tool takes a sorted ANI chart and reorders the items in it (So you can look at it in order)",year:"2020",codeLink:"https://github.com/anbcodes/ani-chart-analyzer-2.0"},{name:"School Planner",link:"https://school-planner.anb.codes",moreInfo:"school-planner",description:"This is a tool I made for planning out my weekly schedule for my school work",year:"2019",codeLink:"https://github.com/anbcodes/School_Planner/"},{name:"Advent of Code 2019",link:"https://adventofcode.com/2019",moreInfo:"advent-of-code-2019",description:"My solutions to the Advent of Code 2019",year:"2019",codeLink:"https://github.com/anbcodes/AdventOfCode2019"},{name:"Naughty or Nice List",link:"https://naughty-or-nice.anb.codes",moreInfo:"naughty-or-nice",description:"The app was a joke I made one christma, but I used it as an experiment for encrypting user data",year:"2019"},{name:"Lesson Planner",link:"https://lesson-planner.anb.codes",moreInfo:"lesson-planner",description:"This tool is pretty much a copy of the School Planner but for teachers (For my homeschool group)",year:"2019",codeLink:"https://github.com/anbcodes/Lesson_Planner"},{name:"Multiplication tables",link:"https://multiplication-tables.anb.codes",moreInfo:"multiplication-tables",description:"A game where you can review mulitplication facts",year:"2019"},{name:"Latin Vocabulary Review",link:"https://latin-review.anb.codes",moreInfo:"latin-review",description:"A game that asks what latin you want to review then creates random questions with multiple choice answers",year:"2019"},{name:"Latin Charts",link:"https://latin-charts.anb.codes",moreInfo:"latin-charts",description:"A app where you fill in the other side of a chart with latin or english words",year:"2019"},{name:"Latin Board",link:"https://latin-board.anb.codes",moreInfo:"latin-board",codeLink:"https://github.com/anbcodes/LatinBoard",description:"Latin Board generates a 6x6 grid of latin vocabulary which you can use to review vocabulary",year:"2019"},{name:"Simple Online Store",link:"https://simple-online-store.anb.codes",moreInfo:"simple-online-store",codeLink:"https://github.com/anbcodes/simpleonlinestore",description:"Simple online store is a app that I made for my younger bother so that he could set up a store in his room that had barcodes",year:"2019"},{name:"My First Website",link:"https://first_site.anb.codes",moreInfo:"first-website",description:"My first website I ever made (It looks pretty bad)",year:"2017",codeLink:"https://github.com/anbcodes/oldwebsite"}],(e,t)=>t.year===e]}export default class extends e{constructor(e){super(),t(this,e,J,G,o,{})}}