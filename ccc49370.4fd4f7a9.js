(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{198:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(203),m=t(206),i=t(201);var c=function(e){var a=e.nextItem,t=e.prevItem;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous Post"),n.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Next Post"),n.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,r=a.metadata,i=r.title,s=r.description,o=r.nextItem,v=r.prevItem,g=r.editUrl;return n.a.createElement(l.a,{title:i,description:s},a&&n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(m.a,{frontMatter:t,metadata:r,isBlogPostPage:!0},n.a.createElement(a,null)),n.a.createElement("div",null,g&&n.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},n.a.createElement("g",null,n.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(o||v)&&n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(c,{nextItem:o,prevItem:v}))))))}},206:function(e,a,t){"use strict";t(70);var r=t(0),n=t.n(r),l=t(202),m=t.n(l),i=t(199),c=t(201),s=t(208),o=t(126),v=t.n(o),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,o,E=e.children,u=e.frontMatter,d=e.metadata,p=e.truncated,_=e.isBlogPostPage,h=void 0!==_&&_,N=d.date,b=d.permalink,f=d.tags,k=d.readingTime,w=u.author,x=u.title,I=u.author_url||u.authorURL,M=u.author_title||u.authorTitle,P=u.author_image_url||u.authorImageURL;return n.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=N.substring(0,10).split("-"),r=t[0],l=g[parseInt(t[1],10)-1],o=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:m()("margin-bottom--sm",v.a.blogPostTitle)},h?x:n.a.createElement(c.a,{to:b},x)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:N,className:v.a.blogPostDate},l," ",o,", ",r," ",k&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},P&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:I,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:P,alt:w})),n.a.createElement("div",{className:"avatar__intro"},w&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:I,target:"_blank",rel:"noreferrer noopener"},w)),n.a.createElement("small",{className:"avatar__subtitle"},M)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(i.a,{components:s.a},E)),(f.length>0||p)&&n.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),f.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(c.a,{to:d.permalink,"aria-label":"Read more about "+x},n.a.createElement("strong",null,"Read More")))))}}}]);