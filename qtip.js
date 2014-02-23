/*! qtip2 v2.0.0 | http://craigsworks.com/projects/qtip2/ | Licensed MIT, GPL */
(function(e,t,n){(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(r){function _(n){E={pageX:n.pageX,pageY:n.pageY,type:"mousemove",scrollX:e.pageXOffset||t.body.scrollLeft||t.documentElement.scrollLeft,scrollY:e.pageYOffset||t.body.scrollTop||t.documentElement.scrollTop}}function D(e){var t=function(e){return e===o||"object"!=typeof e},n=function(e){return!r.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"==typeof e&&!e.jquery&&!e.then)};if(!e||"object"!=typeof e)return s;t(e.metadata)&&(e.metadata={type:e.metadata});if("content"in e){if(t(e.content)||e.content.jquery)e.content={text:e.content};n(e.content.text||s)&&(e.content.text=s),"title"in e.content&&(t(e.content.title)&&(e.content.title={text:e.content.title}),n(e.content.title.text||s)&&(e.content.title.text=s))}return"position"in e&&t(e.position)&&(e.position={my:e.position,at:e.position}),"show"in e&&t(e.show)&&(e.show=e.show.jquery?{target:e.show}:{event:e.show}),"hide"in e&&t(e.hide)&&(e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}),"style"in e&&t(e.style)&&(e.style={classes:e.style}),r.each(w,function(){this.sanitize&&this.sanitize(e)}),e}function P(u,a,f,l){function q(e){var t=0,n,r=a,i=e.split(".");while(r=r[i[t++]])t<i.length&&(n=r);return[n||a,i.pop()]}function R(e){return T.concat("").join(e?"-"+e+" ":" ")}function U(){var e=a.style.widget,t=H.hasClass(j);H.removeClass(j),j=e?"ui-state-disabled":"qtip-disabled",H.toggleClass(j,t),H.toggleClass("ui-helper-reset "+R(),e).toggleClass(C,a.style.def&&!e),F.content&&F.content.toggleClass(R("content"),e),F.titlebar&&F.titlebar.toggleClass(R("header"),e),F.button&&F.button.toggleClass(S+"-icon",!e)}function z(e){F.title&&(F.titlebar.remove(),F.titlebar=F.title=F.button=o,e!==s&&m.reposition())}function W(){var e=a.content.title.button,t=typeof e=="string",n=t?e:"Close tooltip";F.button&&F.button.remove(),e.jquery?F.button=e:F.button=r("<a />",{"class":"qtip-close "+(a.style.widget?"":S+"-icon"),title:n,"aria-label":n}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),F.button.appendTo(F.titlebar||H).attr("role","button").click(function(e){return H.hasClass(j)||m.hide(e),s})}function X(){var e=y+"-title";F.titlebar&&z(),F.titlebar=r("<div />",{"class":S+"-titlebar "+(a.style.widget?R("header"):"")}).append(F.title=r("<div />",{id:e,"class":S+"-title","aria-atomic":i})).insertBefore(F.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(e){r(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(e){r(this).toggleClass("ui-state-hover",e.type==="mouseover")}),a.content.title.button&&W()}function V(e){var t=F.button;if(!m.rendered)return s;e?W():t.remove()}function J(e,t){var n=F.title;if(!m.rendered||!e)return s;r.isFunction(e)&&(e=e.call(u,I.event,m));if(e===s||!e&&e!=="")return z(s);e.jquery&&e.length>0?n.empty().append(e.css({display:"block"})):n.html(e),t!==s&&m.rendered&&H[0].offsetWidth>0&&m.reposition(I.event)}function K(e){e&&r.isFunction(e.done)&&e.done(function(e){Q(e,null,s)})}function Q(e,t,i){function f(e){function a(n){n&&(delete u[n.src],clearTimeout(m.timers.img[n.src]),r(n).unbind(B)),r.isEmptyObject(u)&&(t!==s&&m.reposition(I.event),e())}var i,u={};if((i=o.find("img[src]:not([height]):not([width])")).length===0)return a();i.each(function(e,t){if(u[t.src]!==n)return;var i=0,s=3;(function o(){if(t.height||t.width||i>s)return a(t);i+=1,m.timers.img[t.src]=setTimeout(o,700)})(),r(t).bind("error"+B+" load"+B,function(){a(this)}),u[t.src]=t})}var o=F.content;return!m.rendered||!e?s:(r.isFunction(e)&&(e=e.call(u,I.event,m)||""),i!==s&&K(a.content.deferred),e.jquery&&e.length>0?o.empty().append(e.css({display:"block"})):o.html(e),m.rendered<0?H.queue("fx",f):(P=0,f(r.noop)),m)}function G(){function h(e){if(H.hasClass(j))return s;clearTimeout(m.timers.show),clearTimeout(m.timers.hide);var t=function(){m.toggle(i,e)};a.show.delay>0?m.timers.show=setTimeout(t,a.show.delay):t()}function p(e){if(H.hasClass(j)||A||P)return s;var t=r(e.relatedTarget||e.target),i=t.closest(N)[0]===H[0],u=t[0]===o.show[0];clearTimeout(m.timers.show),clearTimeout(m.timers.hide);if(n.target==="mouse"&&i||a.hide.fixed&&/mouse(out|leave|move)/.test(e.type)&&(i||u)){try{e.preventDefault(),e.stopImmediatePropagation()}catch(f){}return}a.hide.delay>0?m.timers.hide=setTimeout(function(){m.hide(e)},a.hide.delay):m.hide(e)}function d(e){if(H.hasClass(j))return s;clearTimeout(m.timers.inactive),m.timers.inactive=setTimeout(function(){m.hide(e)},a.hide.inactive)}function v(e){m.rendered&&H[0].offsetWidth>0&&m.reposition(e)}var n=a.position,o={show:a.show.target,hide:a.hide.target,viewport:r(n.viewport),document:r(t),body:r(t.body),window:r(e)},l={show:r.trim(""+a.show.event).split(" "),hide:r.trim(""+a.hide.event).split(" ")},c=r.browser.msie&&parseInt(r.browser.version,10)===6;H.bind("mouseenter"+B+" mouseleave"+B,function(e){var t=e.type==="mouseenter";t&&m.focus(e),H.toggleClass(L,t)}),/mouse(out|leave)/i.test(a.hide.event)&&a.hide.leave==="window"&&o.window.bind("mouseout"+B+" blur"+B,function(e){!/select|option/.test(e.target.nodeName)&&!e.relatedTarget&&m.hide(e)}),a.hide.fixed?(o.hide=o.hide.add(H),H.bind("mouseover"+B,function(){H.hasClass(j)||clearTimeout(m.timers.hide)})):/mouse(over|enter)/i.test(a.show.event)&&o.hide.bind("mouseleave"+B,function(e){clearTimeout(m.timers.show)}),(""+a.hide.event).indexOf("unfocus")>-1&&n.container.closest("html").bind("mousedown"+B+" touchstart"+B,function(e){var t=r(e.target),n=m.rendered&&!H.hasClass(j)&&H[0].offsetWidth>0,i=t.parents(N).filter(H[0]).length>0;t[0]!==u[0]&&t[0]!==H[0]&&!i&&!u.has(t[0]).length&&!t.attr("disabled")&&m.hide(e)}),"number"==typeof a.hide.inactive&&(o.show.bind("qtip-"+f+"-inactive",d),r.each(b.inactiveEvents,function(e,t){o.hide.add(F.tooltip).bind(t+B+"-inactive",d)})),r.each(l.hide,function(e,t){var n=r.inArray(t,l.show),i=r(o.hide);n>-1&&i.add(o.show).length===i.length||t==="unfocus"?(o.show.bind(t+B,function(e){H[0].offsetWidth>0?p(e):h(e)}),delete l.show[n]):o.hide.bind(t+B,p)}),r.each(l.show,function(e,t){o.show.bind(t+B,h)}),"number"==typeof a.hide.distance&&o.show.add(H).bind("mousemove"+B,function(e){var t=I.origin||{},n=a.hide.distance,r=Math.abs;(r(e.pageX-t.pageX)>=n||r(e.pageY-t.pageY)>=n)&&m.hide(e)}),n.target==="mouse"&&(o.show.bind("mousemove"+B,_),n.adjust.mouse&&(a.hide.event&&(H.bind("mouseleave"+B,function(e){(e.relatedTarget||e.target)!==o.show[0]&&m.hide(e)}),F.target.bind("mouseenter"+B+" mouseleave"+B,function(e){I.onTarget=e.type==="mouseenter"})),o.document.bind("mousemove"+B,function(e){m.rendered&&I.onTarget&&!H.hasClass(j)&&H[0].offsetWidth>0&&m.reposition(e||E)}))),(n.adjust.resize||o.viewport.length)&&(r.event.special.resize?o.viewport:o.window).bind("resize"+B,v),o.window.bind("scroll"+B,v)}function Y(){var n=[a.show.target[0],a.hide.target[0],m.rendered&&F.tooltip[0],a.position.container[0],a.position.viewport[0],a.position.container.closest("html")[0],e,t];m.rendered?r([]).pushStack(r.grep(n,function(e){return typeof e=="object"})).unbind(B):a.show.target.unbind(B+"-create")}var m=this,g=t.body,y=S+"-"+f,A=0,P=0,H=r(),B=".qtip-"+f,j="qtip-disabled",F,I;m.id=f,m.rendered=s,m.destroyed=s,m.elements=F={target:u},m.timers={img:{}},m.options=a,m.checks={},m.plugins={},m.cache=I={event:{},target:r(),disabled:s,attr:l,onTarget:s,lastClass:""},m.checks.builtin={"^id$":function(e,t,n){var o=n===i?b.nextid:n,u=S+"-"+o;o!==s&&o.length>0&&!r("#"+u).length&&(H[0].id=u,F.content[0].id=u+"-content",F.title[0].id=u+"-title")},"^content.text$":function(e,t,n){Q(a.content.text)},"^content.deferred$":function(e,t,n){K(a.content.deferred)},"^content.title.text$":function(e,t,n){if(!n)return z();!F.title&&n&&X(),J(n)},"^content.title.button$":function(e,t,n){V(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new w.Corner(n))},"^position.container$":function(e,t,n){m.rendered&&H.appendTo(n)},"^show.ready$":function(){m.rendered?m.toggle(i):m.render(1)},"^style.classes$":function(e,t,n){H.attr("class",S+" qtip "+n)},"^style.width|height":function(e,t,n){H.css(t,n)},"^style.widget|content.title":U,"^events.(render|show|move|hide|focus|blur)$":function(e,t,n){H[(r.isFunction(n)?"":"un")+"bind"]("tooltip"+t,n)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=a.position;H.attr("tracking",e.target==="mouse"&&e.adjust.mouse),Y(),G()}},r.extend(m,{_triggerEvent:function(e,t,n){var i=r.Event("tooltip"+e);return i.originalEvent=(n?r.extend({},n):o)||I.event||o,H.trigger(i,[m].concat(t||[])),!i.isDefaultPrevented()},render:function(e){if(m.rendered)return m;var t=a.content.text,n=a.content.title,o=a.position;return r.attr(u[0],"aria-describedby",y),H=F.tooltip=r("<div/>",{id:y,"class":[S,C,a.style.classes,S+"-pos-"+a.position.my.abbrev()].join(" "),width:a.style.width||"",height:a.style.height||"",tracking:o.target==="mouse"&&o.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":y+"-content","aria-hidden":i}).toggleClass(j,I.disabled).data("qtip",m).appendTo(a.position.container).append(F.content=r("<div />",{"class":S+"-content",id:y+"-content","aria-atomic":i})),m.rendered=-1,A=1,n.text?(X(),r.isFunction(n.text)||J(n.text,s)):n.button&&W(),(!r.isFunction(t)||t.then)&&Q(t,s),m.rendered=i,U(),r.each(a.events,function(e,t){r.isFunction(t)&&H.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}),r.each(w,function(){this.initialize==="render"&&this(m)}),G(),H.queue("fx",function(t){m._triggerEvent("render"),A=0,(a.show.ready||e)&&m.toggle(i,I.event,s),t()}),m},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:H.outerHeight(s),width:H.outerWidth(s)};break;case"offset":t=w.offset(H,a.position.container);break;default:n=q(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(e,t){function h(e,t){var n,r,i;for(n in l)for(r in l[n])if(i=(new RegExp(r,"i")).exec(e))t.push(i),l[n][r].apply(m,t)}var n=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,u=/^content\.(title|attr)|style/i,f=s,l=m.checks,c;return"string"==typeof e?(c=e,e={},e[c]=t):e=r.extend(i,{},e),r.each(e,function(t,i){var s=q(t.toLowerCase()),o;o=s[0][s[1]],s[0][s[1]]="object"==typeof i&&i.nodeType?r(i):i,e[t]=[s[0],s[1],i,o],f=n.test(t)||f}),D(a),A=1,r.each(e,h),A=0,m.rendered&&H[0].offsetWidth>0&&f&&m.reposition(a.position.target==="mouse"?o:I.event),m},toggle:function(e,n){function b(){e?(r.browser.msie&&H[0].style.removeAttribute("filter"),H.css("overflow",""),"string"==typeof u.autofocus&&r(u.autofocus,H).focus(),u.target.trigger("qtip-"+f+"-inactive")):H.css({display:"",visibility:"",opacity:"",left:"",top:""}),m._triggerEvent(e?"visible":"hidden")}if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(I.event.type)&&a.show.target.add(n.target).length===a.show.target.length&&H.has(n.relatedTarget).length)return m;I.event=r.extend({},n)}if(!m.rendered)return e?m.render(1):m;var o=e?"show":"hide",u=a[o],l=a[e?"hide":"show"],c=a.position,h=a.content,p=H[0].offsetWidth>0,d=e||u.target.length===1,v=!n||u.target.length<2||I.target[0]===n.target,g,y;return(typeof e).search("boolean|number")&&(e=!p),!H.is(":animated")&&p===e&&v?m:m._triggerEvent(o,[90])?(r.attr(H[0],"aria-hidden",!e),e?(I.origin=r.extend({},E),m.focus(n),r.isFunction(h.text)&&Q(h.text,s),r.isFunction(h.title.text)&&J(h.title.text,s),!M&&c.target==="mouse"&&c.adjust.mouse&&(r(t).bind("mousemove.qtip",_),M=i),m.reposition(n,arguments[2]),!u.solo||r(N,u.solo).not(H).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(m.timers.show),delete I.origin,M&&!r(N+'[tracking="true"]:visible',u.solo).not(H).length&&(r(t).unbind("mousemove.qtip"),M=s),m.blur(n)),u.effect===s||d===s?(H[o](),b.call(H)):r.isFunction(u.effect)?(H.stop(1,1),u.effect.call(H,m),H.queue("fx",function(e){b(),e()})):H.fadeTo(90,e?1:0,b),e&&u.target.trigger("qtip-"+f+"-inactive"),m):m},show:function(e){return m.toggle(i,e)},hide:function(e){return m.toggle(s,e)},focus:function(e){if(!m.rendered)return m;var t=r(N),n=parseInt(H[0].style.zIndex,10),i=b.zindex+t.length,s=r.extend({},e),o;return H.hasClass(k)||m._triggerEvent("focus",[i],s)&&(n!==i&&(t.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+k).qtip("blur",s)),H.addClass(k)[0].style.zIndex=i),m},blur:function(e){return H.removeClass(k),m._triggerEvent("blur",[H.css("zIndex")],e),m},reposition:function(n,i){if(!m.rendered||A)return m;A=1;var o=a.position.target,u=a.position,f=u.my,l=u.at,g=u.adjust,y=g.method.split(" "),b=H.outerWidth(s),S=H.outerHeight(s),x=0,T=0,N=H.css("position"),C=u.viewport,k={left:0,top:0},L=u.container,O=H[0].offsetWidth>0,M=n&&n.type==="scroll",_=r(e),D,P;if(r.isArray(o)&&o.length===2)l={x:h,y:c},k={left:o[0],top:o[1]};else if(o==="mouse"&&(n&&n.pageX||I.event.pageX))l={x:h,y:c},n=E&&E.pageX&&(g.mouse||!n||!n.pageX)?{pageX:E.pageX,pageY:E.pageY}:(!n||n.type!=="resize"&&n.type!=="scroll"?n&&n.pageX&&n.type==="mousemove"?n:!g.mouse&&I.origin&&I.origin.pageX&&a.show.distance?I.origin:n:I.event)||n||I.event||E||{},N!=="static"&&(k=L.offset()),k={left:n.pageX-k.left,top:n.pageY-k.top},g.mouse&&M&&(k.left-=E.scrollX-_.scrollLeft(),k.top-=E.scrollY-_.scrollTop());else{o==="event"&&n&&n.target&&n.type!=="scroll"&&n.type!=="resize"?I.target=r(n.target):o!=="event"&&(I.target=r(o.jquery?o:F.target)),o=I.target,o=r(o).eq(0);if(o.length===0)return m;o[0]===t||o[0]===e?(x=w.iOS?e.innerWidth:o.width(),T=w.iOS?e.innerHeight:o.height(),o[0]===e&&(k={top:(C||o).scrollTop(),left:(C||o).scrollLeft()})):w.imagemap&&o.is("area")?D=w.imagemap(m,o,l,w.viewport?y:s):w.svg&&o[0].ownerSVGElement?D=w.svg(m,o,l,w.viewport?y:s):(x=o.outerWidth(s),T=o.outerHeight(s),k=w.offset(o,L)),D&&(x=D.width,T=D.height,P=D.offset,k=D.position);if(w.iOS>3.1&&w.iOS<4.1||w.iOS>=4.3&&w.iOS<4.33||!w.iOS&&N==="fixed")k.left-=_.scrollLeft(),k.top-=_.scrollTop();k.left+=l.x===d?x:l.x===v?x/2:0,k.top+=l.y===p?T:l.y===v?T/2:0}return k.left+=g.x+(f.x===d?-b:f.x===v?-b/2:0),k.top+=g.y+(f.y===p?-S:f.y===v?-S/2:0),w.viewport?(k.adjusted=w.viewport(m,k,u,x,T,b,S),P&&k.adjusted.left&&(k.left+=P.left),P&&k.adjusted.top&&(k.top+=P.top)):k.adjusted={left:0,top:0},m._triggerEvent("move",[k,C.elem||C],n)?(delete k.adjusted,i===s||!O||isNaN(k.left)||isNaN(k.top)||o==="mouse"||!r.isFunction(u.effect)?H.css(k):r.isFunction(u.effect)&&(u.effect.call(H,m,r.extend({},k)),H.queue(function(e){r(this).css({opacity:"",height:""}),r.browser.msie&&this.style.removeAttribute("filter"),e()})),A=0,m):m},disable:function(e){return"boolean"!=typeof e&&(e=!H.hasClass(j)&&!I.disabled),m.rendered?(H.toggleClass(j,e),r.attr(H[0],"aria-disabled",e)):I.disabled=!!e,m},enable:function(){return m.disable(s)},destroy:function(){var e=u[0],t=r.attr(e,O),n=u.data("qtip");m.destroyed=i,m.rendered&&(H.stop(1,0).remove(),r.each(m.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(m.timers.show),clearTimeout(m.timers.hide),Y();if(!n||m===n)r.removeData(e,"qtip"),a.suppress&&t&&(r.attr(e,"title",t),u.removeAttr(O)),u.removeAttr("aria-describedby");return u.unbind(".qtip-"+f),delete x[m.id],u}})}function H(e,n){var u,a,f,l,c,h=r(this),p=r(t.body),d=this===t?p:h,v=h.metadata?h.metadata(n.metadata):o,m=n.metadata.type==="html5"&&v?v[n.metadata.name]:o,g=h.data(n.metadata.name||"qtipopts");try{g=typeof g=="string"?r.parseJSON(g):g}catch(y){}l=r.extend(i,{},b.defaults,n,typeof g=="object"?D(g):o,D(m||v)),a=l.position,l.id=e;if("boolean"==typeof l.content.text){f=h.attr(l.content.attr);if(l.content.attr===s||!f)return s;l.content.text=f}a.container.length||(a.container=p),a.target===s&&(a.target=d),l.show.target===s&&(l.show.target=d),l.show.solo===i&&(l.show.solo=a.container.closest("body")),l.hide.target===s&&(l.hide.target=d),l.position.viewport===i&&(l.position.viewport=a.container),a.container=a.container.eq(0),a.at=new w.Corner(a.at),a.my=new w.Corner(a.my);if(r.data(this,"qtip"))if(l.overwrite)h.qtip("destroy");else if(l.overwrite===s)return s;return l.suppress&&(c=r.attr(this,"title"))&&r(this).removeAttr("title").attr(O,c).attr("title",""),u=new P(h,l,e,!!f),r.data(this,"qtip",u),h.bind("remove.qtip-"+e+" removeqtip.qtip-"+e,function(){u.destroy()}),u}function B(e){var t=this,n=e.elements.tooltip,o=e.options.content.ajax,u=b.defaults.content.ajax,a=".qtip-ajax",f=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,l=i,c=s,h;e.checks.ajax={"^content.ajax":function(e,r,i){r==="ajax"&&(o=i),r==="once"?t.init():o&&o.url?t.load():n.unbind(a)}},r.extend(t,{init:function(){return o&&o.url&&n.unbind(a)[o.once?"one":"bind"]("tooltipshow"+a,t.load),t},load:function(n){function g(){var t;if(e.destroyed)return;l=s,v&&(c=i,e.show(n.originalEvent)),(t=u.complete||o.complete)&&r.isFunction(t)&&t.apply(o.context||e,arguments)}function y(t,n,i){var s;if(e.destroyed)return;d&&"string"==typeof t&&(t=r("<div/>").append(t.replace(f,"")).find(d)),(s=u.success||o.success)&&r.isFunction(s)?s.call(o.context||e,t,n,i):e.set("content.text",t)}function b(t,n,r){if(e.destroyed||t.status===0)return;e.set("content.text",n+": "+r)}if(c){c=s;return}var a=o.url.lastIndexOf(" "),p=o.url,d,v=!o.loading&&l;if(v)try{n.preventDefault()}catch(m){}else if(n&&n.isDefaultPrevented())return t;h&&h.abort&&h.abort(),a>-1&&(d=p.substr(a),p=p.substr(0,a)),h=r.ajax(r.extend({error:u.error||b,context:e},o,{url:p,success:y,complete:g}))},destroy:function(){h&&h.abort&&h.abort(),e.destroyed=i}}),t.init()}function j(e,t,n){var r=Math.ceil(t/2),i=Math.ceil(n/2),s={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[r,0],[t,n]],bottomcenter:[[0,0],[t,0],[r,n]],rightcenter:[[0,0],[t,i],[0,n]],leftcenter:[[t,0],[t,n],[0,i]]};return s.lefttop=s.bottomright,s.righttop=s.bottomleft,s.leftbottom=s.topright,s.rightbottom=s.topleft,s[e.string()]}function F(e,t){function A(e){var t=E.is(":visible");E.show(),e(),E.toggle(t)}function O(){x.width=g.height,x.height=g.width}function M(){x.width=g.width,x.height=g.height}function _(t,r,o,f){if(!b.tip)return;var l=m.corner.clone(),w=o.adjusted,E=e.options.position.adjust.method.split(" "),x=E[0],T=E[1]||E[0],N={left:s,top:s,x:0,y:0},C,k={},L;m.corner.fixed!==i&&(x===y&&l.precedance===u&&w.left&&l.y!==v?l.precedance=l.precedance===u?a:u:x!==y&&w.left&&(l.x=l.x===v?w.left>0?h:d:l.x===h?d:h),T===y&&l.precedance===a&&w.top&&l.x!==v?l.precedance=l.precedance===a?u:a:T!==y&&w.top&&(l.y=l.y===v?w.top>0?c:p:l.y===c?p:c),l.string()!==S.corner.string()&&(S.top!==w.top||S.left!==w.left)&&m.update(l,s)),C=m.position(l,w),C[l.x]+=P(l,l.x),C[l.y]+=P(l,l.y),C.right!==n&&(C.left=-C.right),C.bottom!==n&&(C.top=-C.bottom),C.user=Math.max(0,g.offset);if(N.left=x===y&&!!w.left)l.x===v?k["margin-left"]=N.x=C["margin-left"]:(L=C.right!==n?[w.left,-C.left]:[-w.left,C.left],(N.x=Math.max(L[0],L[1]))>L[0]&&(o.left-=w.left,N.left=s),k[C.right!==n?d:h]=N.x);if(N.top=T===y&&!!w.top)l.y===v?k["margin-top"]=N.y=C["margin-top"]:(L=C.bottom!==n?[w.top,-C.top]:[-w.top,C.top],(N.y=Math.max(L[0],L[1]))>L[0]&&(o.top-=w.top,N.top=s),k[C.bottom!==n?p:c]=N.y);b.tip.css(k).toggle(!(N.x&&N.y||l.x===v&&N.y||l.y===v&&N.x)),o.left-=C.left.charAt?C.user:x!==y||N.top||!N.left&&!N.top?C.left:0,o.top-=C.top.charAt?C.user:T!==y||N.left||!N.left&&!N.top?C.top:0,S.left=w.left,S.top=w.top,S.corner=l.clone()}function D(){var t=g.corner,n=e.options.position,r=n.at,o=n.my.string?n.my.string():n.my;return t===s||o===s&&r===s?s:(t===i?m.corner=new w.Corner(o):t.string||(m.corner=new w.Corner(t),m.corner.fixed=i),S.corner=new w.Corner(m.corner.string()),m.corner.string()!=="centercenter")}function P(e,t,n){t=t?t:e[e.precedance];var r=b.titlebar&&e.y===c,i=r?b.titlebar:E,s="border-"+t+"-width",o=function(e){return parseInt(e.css(s),10)},u;return A(function(){u=(n?o(n):o(b.content)||o(i)||o(E))||0}),u}function H(e){var t=b.titlebar&&e.y===c,n=t?b.titlebar:b.content,i=r.browser.mozilla,s=i?"-moz-":r.browser.webkit?"-webkit-":"",o="border-radius-"+e.y+e.x,u="border-"+e.y+"-"+e.x+"-radius",a=function(e){return parseInt(n.css(e),10)||parseInt(E.css(e),10)},f;return A(function(){f=a(u)||a(s+u)||a(s+o)||a(o)||0}),f}function B(e){function N(e,t,n){var r=e.css(t)||p;return n&&r===e.css(n)?s:f.test(r)?s:r}var t,n,o,u=b.tip.css("cssText",""),a=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,l="border-"+a[a.precedance]+"-color",h="background-color",p="transparent",d=" !important",y=b.titlebar,w=y&&(a.y===c||a.y===v&&u.position().top+x.height/2+g.offset<y.outerHeight(i)),S=w?y:b.content;A(function(){T.fill=N(u,h)||N(S,h)||N(b.content,h)||N(E,h)||u.css(h),T.border=N(u,l,"color")||N(S,l,"color")||N(b.content,l,"color")||N(E,l,"color")||E.css(l),r("*",u).add(u).css("cssText",h+":"+p+d+";border:0"+d+";")})}function F(e){var t=e.precedance===a,n=x[t?f:l],r=x[t?l:f],i=e.string().indexOf(v)>-1,s=n*(i?.5:1),o=Math.pow,u=Math.round,c,h,p,d=Math.sqrt(o(s,2)+o(r,2)),m=[N/s*d,N/r*d];return m[2]=Math.sqrt(o(m[0],2)-o(N,2)),m[3]=Math.sqrt(o(m[1],2)-o(N,2)),c=d+m[2]+m[3]+(i?0:m[0]),h=c/d,p=[u(h*r),u(h*n)],{height:p[t?0:1],width:p[t?1:0]}}function I(e,t,n){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}var m=this,g=e.options.style.tip,b=e.elements,E=b.tooltip,S={top:0,left:0},x={width:g.width,height:g.height},T={},N=g.border||0,C=".qtip-tip",k=!!(r("<canvas />")[0]||{}).getContext,L;m.corner=o,m.mimic=o,m.border=N,m.offset=g.offset,m.size=x,e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){m.init()||m.destroy(),e.reposition()},"^style.tip.(height|width)$":function(){x={width:g.width,height:g.height},m.create(),m.update(),e.reposition()},"^content.title.text|style.(classes|widget)$":function(){b.tip&&b.tip.length&&m.update()}},r.extend(m,{init:function(){var e=D()&&(k||r.browser.msie);return e&&(m.create(),m.update(),E.unbind(C).bind("tooltipmove"+C,_)),e},create:function(){var e=x.width,t=x.height,n;b.tip&&b.tip.remove(),b.tip=r("<div />",{"class":"qtip-tip"}).css({width:e,height:t}).prependTo(E),k?r("<canvas />").appendTo(b.tip)[0].getContext("2d").save():(n=I("shape",'coordorigin="0,0"',"position:absolute;"),b.tip.html(n+n),r("*",b.tip).bind("click mousedown",function(e){e.stopPropagation()}))},update:function(e,t){var n=b.tip,f=n.children(),l=x.width,y=x.height,C=g.mimic,L=Math.round,A,_,D,H,q;e||(e=S.corner||m.corner),C===s?C=e:(C=new w.Corner(C),C.precedance=e.precedance,C.x==="inherit"?C.x=e.x:C.y==="inherit"?C.y=e.y:C.x===C.y&&(C[e.precedance]=e[e.precedance])),A=C.precedance,e.precedance===u?O():M(),b.tip.css({width:l=x.width,height:y=x.height}),B(e),T.border!=="transparent"?(N=P(e,o),g.border===0&&N>0&&(T.fill=T.border),m.border=N=g.border!==i?g.border:N):m.border=N=0,D=j(C,l,y),m.size=q=F(e),n.css(q).css("line-height",q.height+"px"),e.precedance===a?H=[L(C.x===h?N:C.x===d?q.width-l-N:(q.width-l)/2),L(C.y===c?q.height-y:0)]:H=[L(C.x===h?q.width-l:0),L(C.y===c?N:C.y===p?q.height-y-N:(q.height-y)/2)],k?(f.attr(q),_=f[0].getContext("2d"),_.restore(),_.save(),_.clearRect(0,0,3e3,3e3),_.fillStyle=T.fill,_.strokeStyle=T.border,_.lineWidth=N*2,_.lineJoin="miter",_.miterLimit=100,_.translate(H[0],H[1]),_.beginPath(),_.moveTo(D[0][0],D[0][1]),_.lineTo(D[1][0],D[1][1]),_.lineTo(D[2][0],D[2][1]),_.closePath(),N&&(E.css("background-clip")==="border-box"&&(_.strokeStyle=T.fill,_.stroke()),_.strokeStyle=T.border,_.stroke()),_.fill()):(D="m"+D[0][0]+","+D[0][1]+" l"+D[1][0]+","+D[1][1]+" "+D[2][0]+","+D[2][1]+" xe",H[2]=N&&/^(r|b)/i.test(e.string())?parseFloat(r.browser.version,10)===8?2:1:0,f.css({coordsize:l+N+" "+(y+N),antialias:""+(C.string().indexOf(v)>-1),left:H[0],top:H[1],width:l+N,height:y+N}).each(function(e){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:l+N+" "+(y+N),path:D,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!N||!!e),!e&&t.html()===""&&t.html(I("stroke",'weight="'+N*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))})),t!==s&&m.position(e)},position:function(e){var t=b.tip,n={},i=Math.max(0,g.offset),o,p,d;return g.corner===s||!t?s:(e=e||m.corner,o=e.precedance,p=F(e),d=[e.x,e.y],o===u&&d.reverse(),r.each(d,function(t,r){var s,u,d;r===v?(s=o===a?h:c,n[s]="50%",n["margin-"+s]=-Math.round(p[o===a?f:l]/2)+i):(s=P(e,r),u=P(e,r,b.content),d=H(e),n[r]=t?u:i+(d>s?d:-s))}),n[e[o]]-=p[o===u?f:l],t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(n),n)},destroy:function(){b.tip&&b.tip.remove(),b.tip=!1,E.unbind(C)}}),m.init()}function I(n){function y(){m=r(v,f).not("[disabled]").map(function(){return typeof this.focus=="function"?this:null})}function b(e){m.length<1&&e.length?e.not("body").blur():m.first().focus()}function E(e){var t=r(e.target),n=t.closest(".qtip"),i;i=n.length<1?s:parseInt(n[0].style.zIndex,10)>parseInt(f[0].style.zIndex,10),!i&&r(e.target).closest(N)[0]!==f[0]&&b(t)}var o=this,u=n.options.show.modal,a=n.elements,f=a.tooltip,l="#qtip-overlay",c=".qtipmodal",h=c+n.id,p="is-modal-qtip",d=r(t.body),v=w.modal.focusable.join(","),m={},g;n.checks.modal={"^show.modal.(on|blur)$":function(){o.init(),a.overlay.toggle(f.is(":visible"))},"^content.text$":function(){y()}},r.extend(o,{init:function(){return u.on?(g=o.create(),f.attr(p,i).css("z-index",w.modal.zindex+r(N+"["+p+"]").length).unbind(c).unbind(h).bind("tooltipshow"+c+" tooltiphide"+c,function(e,t,n){var i=e.originalEvent;if(e.target===f[0])if(i&&e.type==="tooltiphide"&&/mouse(leave|enter)/.test(i.type)&&r(i.relatedTarget).closest(g[0]).length)try{e.preventDefault()}catch(s){}else(!i||i&&!i.solo)&&o[e.type.replace("tooltip","")](e,n)}).bind("tooltipfocus"+c,function(e){if(e.isDefaultPrevented()||e.target!==f[0])return;var t=r(N).filter("["+p+"]"),n=w.modal.zindex+t.length,i=parseInt(f[0].style.zIndex,10);g[0].style.zIndex=n-2,t.each(function(){this.style.zIndex>i&&(this.style.zIndex-=1)}),t.end().filter("."+k).qtip("blur",e.originalEvent),f.addClass(k)[0].style.zIndex=n;try{e.preventDefault()}catch(s){}}).bind("tooltiphide"+c,function(e){e.target===f[0]&&r("["+p+"]").filter(":visible").not(f).last().qtip("focus",e)}),u.escape&&r(t).unbind(h).bind("keydown"+h,function(e){e.keyCode===27&&f.hasClass(k)&&n.hide(e)}),u.blur&&a.overlay.unbind(h).bind("click"+h,function(e){f.hasClass(k)&&n.hide(e)}),y(),o):o},create:function(){function i(){g.css({height:n.height(),width:n.width()})}var t=r(l),n=r(e);return t.length?a.overlay=t.insertAfter(r(N).last()):(g=a.overlay=r("<div />",{id:l.substr(1),html:"<div></div>",mousedown:function(){return s}}).hide().insertAfter(r(N).last()),n.unbind(c).bind("resize"+c,i),i(),g)},toggle:function(e,t,n){if(e&&e.isDefaultPrevented())return o;var a=u.effect,l=t?"show":"hide",c=g.is(":visible"),v=r("["+p+"]").filter(":visible").not(f),m;return g||(g=o.create()),g.is(":animated")&&c===t&&g.data("toggleState")!==s||!t&&v.length?o:(t?(g.css({left:0,top:0}),g.toggleClass("blurs",u.blur),u.stealfocus!==s&&(d.bind("focusin"+h,E),b(r("body :focus")))):d.unbind("focusin"+h),g.stop(i,s).data("toggleState",t),r.isFunction(a)?a.call(g,t):a===s?g[l]():g.fadeTo(parseInt(n,10)||90,t?1:0,function(){t||r(this).hide()}),t||g.queue(function(e){g.css({left:"",top:""}).removeData("toggleState"),e()}),o)},show:function(e,t){return o.toggle(e,i,t)},hide:function(e,t){return o.toggle(e,s,t)},destroy:function(){var e=g;return e&&(e=r("["+p+"]").not(f).length<1,e?(a.overlay.remove(),r(t).unbind(c)):a.overlay.unbind(c+n.id),d.unbind("focusin"+h)),f.removeAttr(p).unbind(c)}}),o.init()}function q(n){var o=this,u=n.elements,a=n.options,c=u.tooltip,h=".ie6-"+n.id,p=r("select, object").length<1,d=0,v=s,m;n.checks.ie6={"^content|style$":function(e,t,n){redraw()}},r.extend(o,{init:function(){var n=r(e),s;p&&(u.bgiframe=r('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),u.bgiframe.appendTo(c),c.bind("tooltipmove"+h,o.adjustBGIFrame)),m=r("<div/>",{id:"qtip-rcontainer"}).appendTo(t.body),o.redraw(),u.overlay&&!v&&(s=function(){u.overlay[0].style.top=n.scrollTop()+"px"},n.bind("scroll.qtip-ie6, resize.qtip-ie6",s),s(),u.overlay.addClass("qtipmodal-ie6fix"),v=i)},adjustBGIFrame:function(){var e=n.get("dimensions"),t=n.plugins.tip,r=u.tip,i,s;s=parseInt(c.css("border-left-width"),10)||0,s={left:-s,top:-s},t&&r&&(i=t.corner.precedance==="x"?["width","left"]:["height","top"],s[i[1]]-=r[i[0]]()),u.bgiframe.css(s).css(e)},redraw:function(){if(n.rendered<1||d)return o;var e=a.style,t=a.position.container,r,i,s,u;return d=1,e.height&&c.css(l,e.height),e.width?c.css(f,e.width):(c.css(f,"").appendTo(m),i=c.width(),i%2<1&&(i+=1),s=c.css("max-width")||"",u=c.css("min-width")||"",r=(s+u).indexOf("%")>-1?t.width()/100:0,s=(s.indexOf("%")>-1?r:1)*parseInt(s,10)||i,u=(u.indexOf("%")>-1?r:1)*parseInt(u,10)||0,i=s+u?Math.min(Math.max(i,u),s):i,c.css(f,Math.round(i)).appendTo(t)),d=0,o},destroy:function(){p&&u.bgiframe.remove(),c.unbind(h)}}),o.init()}var i=!0,s=!1,o=null,u="x",a="y",f="width",l="height",c="top",h="left",p="bottom",d="right",v="center",m="flip",g="flipinvert",y="shift",b,w,E,S="qtip",x={},T=["ui-widget","ui-tooltip"],N="div.qtip."+S,C=S+"-default",k=S+"-focus",L=S+"-hover",A="_replacedByqTip",O="oldtitle",M;b=r.fn.qtip=function(e,t,u){var a=(""+e).toLowerCase(),f=o,l=r.makeArray(arguments).slice(1),c=l[l.length-1],h=this[0]?r.data(this[0],"qtip"):o;if(!arguments.length&&h||a==="api")return h;if("string"==typeof e)return this.each(function(){var e=r.data(this,"qtip");if(!e)return i;c&&c.timeStamp&&(e.cache.event=c);if(a!=="option"&&a!=="options"||!t)e[a]&&e[a].apply(e[a],l);else{if(!r.isPlainObject(t)&&u===n)return f=e.get(t),s;e.set(t,u)}}),f!==o?f:this;if("object"==typeof e||!arguments.length)return h=D(r.extend(i,{},e)),b.bind.call(this,h,c)},b.bind=function(e,t){return this.each(function(o){function p(e){function t(){c.render(typeof e=="object"||u.show.ready),a.show.add(a.hide).unbind(l)}if(c.cache.disabled)return s;c.cache.event=r.extend({},e),c.cache.target=e?r(e.target):[n],u.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(t,u.show.delay),f.show!==f.hide&&a.hide.bind(f.hide,function(){clearTimeout(c.timers.show)})):t()}var u,a,f,l,c,h;h=r.isArray(e.id)?e.id[o]:e.id,h=!h||h===s||h.length<1||x[h]?b.nextid++:x[h]=h,l=".qtip-"+h+"-create",c=H.call(this,h,e);if(c===s)return i;u=c.options,r.each(w,function(){this.initialize==="initialize"&&this(c)}),a={show:u.show.target,hide:u.hide.target},f={show:r.trim(""+u.show.event).replace(/ /g,l+" ")+l,hide:r.trim(""+u.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)&&(f.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(e){_(e),c.cache.onTarget=i}),a.show.bind(f.show,p),(u.show.ready||u.prerender)&&p(t)}).attr("data-hasqtip",i)},w=b.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,v).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance=t==="t"||t==="b"?a:u,this.string=function(){return this.precedance===a?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===a?t+e:e+t},this.invertx=function(e){this.x=this.x===h?d:this.x===d?h:e||this.x},this.inverty=function(e){this.y=this.y===c?p:this.y===p?c:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,n){function c(e,t){i.left+=t*e.scrollLeft(),i.top+=t*e.scrollTop()}var i=e.offset(),s=e.closest("body"),o=r.browser.msie&&t.compatMode!=="CSS1Compat",u=n,a,f,l;if(u){do u.css("position")!=="static"&&(f=u.position(),i.left-=f.left+(parseInt(u.css("borderLeftWidth"),10)||0)+(parseInt(u.css("marginLeft"),10)||0),i.top-=f.top+(parseInt(u.css("borderTopWidth"),10)||0)+(parseInt(u.css("marginTop"),10)||0),!a&&(l=u.css("overflow"))!=="hidden"&&l!=="visible"&&(a=u));while((u=r(u[0].offsetParent)).length);(a&&a[0]!==s[0]||o)&&c(a||s,1)}return i},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s,fn:{attr:function(e,t){if(this.length){var n=this[0],i="title",s=r.data(n,"qtip");if(e===i&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?r.attr(n,O):(s&&s.options.content.attr===i&&s.cache.attr&&s.set("content.text",t),this.attr(O,t))}return r.fn["attr"+A].apply(this,arguments)},clone:function(e){var t=r([]),n="title",i=r.fn["clone"+A].apply(this,arguments);return e||i.filter("["+O+"]").attr("title",function(){return r.attr(this,O)}).removeAttr(O),i}}},r.each(w.fn,function(e,t){if(!t||r.fn[e+A])return i;var n=r.fn[e+A]=r.fn[e];r.fn[e]=function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),r.ui||(r["cleanData"+A]=r.cleanData,r.cleanData=function(e){for(var t=0,i;(i=e[t])!==n;t++)try{r(i).triggerHandler("removeqtip")}catch(s){}r["cleanData"+A](e)}),b.version="2.0.0-nightly-15f5c6bc20",b.nextid=0,b.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),b.zindex=15e3,b.defaults={prerender:s,id:s,overwrite:i,suppress:i,content:{text:i,attr:"title",deferred:s,title:{text:s,button:s}},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:i,resize:i,method:"flipinvert flipinvert"},effect:function(e,t,n){r(this).animate(t,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:i,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:i,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:i},events:{render:o,move:o,show:o,hide:o,toggle:o,visible:o,hidden:o,focus:o,blur:o}},w.svg=function(e,n,i,s){var o=r(t),u=n[0],a={width:0,height:0,position:{top:1e10,left:1e10}},f,l,c,h,p;while(!u.getBBox)u=u.parentNode;if(u.getBBox&&u.parentNode){f=u.getBBox(),l=u.getScreenCTM(),c=u.farthestViewportElement||u;if(!c.createSVGPoint)return a;h=c.createSVGPoint(),h.x=f.x,h.y=f.y,p=h.matrixTransform(l),a.position.left=p.x,a.position.top=p.y,h.x+=f.width,h.y+=f.height,p=h.matrixTransform(l),a.width=p.x-a.position.left,a.height=p.y-a.position.top,a.position.left+=o.scrollLeft(),a.position.top+=o.scrollTop()}return a},w.ajax=function(e){var t=e.plugins.ajax;return"object"==typeof t?t:e.plugins.ajax=new B(e)},w.ajax.initialize="render",w.ajax.sanitize=function(e){var t=e.content,n;t&&"ajax"in t&&(n=t.ajax,typeof n!="object"&&(n=e.content.ajax={url:n}),"boolean"!=typeof n.once&&n.once&&(n.once=!!n.once))},r.extend(i,b.defaults,{content:{ajax:{loading:i,once:i}}}),w.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new F(e)},w.tip.initialize="render",w.tip.sanitize=function(e){var t=e.style,n;t&&"tip"in t&&(n=e.style.tip,typeof n!="object"&&(e.style.tip={corner:n}),/string|boolean/i.test(typeof n.corner)||(n.corner=i),typeof n.width!="number"&&delete n.width,typeof n.height!="number"&&delete n.height,typeof n.border!="number"&&n.border!==i&&delete n.border,typeof n.offset!="number"&&delete n.offset)},r.extend(i,b.defaults,{style:{tip:{corner:i,mimic:s,width:6,height:6,border:i,offset:0}}}),w.modal=function(e){var t=e.plugins.modal;return"object"==typeof t?t:e.plugins.modal=new I(e)},w.modal.initialize="render",w.modal.sanitize=function(e){e.show&&(typeof e.show.modal!="object"?e.show.modal={on:!!e.show.modal}:typeof e.show.modal.on=="undefined"&&(e.show.modal.on=i))},w.modal.zindex=b.zindex-200,w.modal.focusable=["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"],r.extend(i,b.defaults,{show:{modal:{on:s,effect:i,blur:i,stealfocus:i,escape:i}}}),w.viewport=function(n,r,i,s,o,m,b){function j(e,t,n,i,s,o,u,a,f){var l=r[s],c=x[e],h=T[e],p=n===y,d=-O.offset[s]+A.offset[s]+A["scroll"+s],m=c===s?f:c===o?-f:-f/2,b=h===s?a:h===o?-a:-a/2,w=_&&_.size?_.size[u]||0:0,E=_&&_.corner&&_.corner.precedance===e&&!p?w:0,S=d-l+E,N=l+f-A[u]-d+E,C=m-(x.precedance===e||c===x[t]?b:0)-(h===v?a/2:0);return p?(E=_&&_.corner&&_.corner.precedance===t?w:0,C=(c===s?1:-1)*m-E,r[s]+=S>0?S:N>0?-N:0,r[s]=Math.max(-O.offset[s]+A.offset[s]+(E&&_.corner[e]===v?_.offset:0),l-C,Math.min(Math.max(-O.offset[s]+A.offset[s]+A[u],l+C),r[s]))):(i*=n===g?2:0,S>0&&(c!==s||N>0)?(r[s]-=C+i,H["invert"+e](s)):N>0&&(c!==o||S>0)&&(r[s]-=(c===v?-C:C)+i,H["invert"+e](o)),r[s]<d&&-r[s]>N&&(r[s]=l,H=x.clone())),r[s]-l}var w=i.target,E=n.elements.tooltip,x=i.my,T=i.at,N=i.adjust,C=N.method.split(" "),k=C[0],L=C[1]||C[0],A=i.viewport,O=i.container,M=n.cache,_=n.plugins.tip,D={left:0,top:0},P,H,B;if(!A.jquery||w[0]===e||w[0]===t.body||N.method==="none")return D;P=E.css("position")==="fixed",A={elem:A,height:A[(A[0]===e?"h":"outerH")+"eight"](),width:A[(A[0]===e?"w":"outerW")+"idth"](),scrollleft:P?0:A.scrollLeft(),scrolltop:P?0:A.scrollTop(),offset:A.offset()||{left:0,top:0}},O={elem:O,scrollLeft:O.scrollLeft(),scrollTop:O.scrollTop(),offset:O.offset()||{left:0,top:0}};if(k!=="shift"||L!=="shift")H=x.clone();return D={left:k!=="none"?j(u,a,k,N.x,h,d,f,s,m):0,top:L!=="none"?j(a,u,L,N.y,c,p,l,o,b):0},H&&M.lastClass!==(B=S+"-pos-"+H.abbrev())&&E.removeClass(n.cache.lastClass).addClass(n.cache.lastClass=B),D},w.imagemap=function(e,t,n,i){function E(e,t,n){var r=0,i=1,s=1,o=0,u=0,a=e.width,f=e.height;while(a>0&&f>0&&i>0&&s>0){a=Math.floor(a/2),f=Math.floor(f/2),n.x===h?i=a:n.x===d?i=e.width-a:i+=Math.floor(a/2),n.y===c?s=f:n.y===p?s=e.height-f:s+=Math.floor(f/2),r=t.length;while(r--){if(t.length<2)break;o=t[r][0]-e.position.left,u=t[r][1]-e.position.top,(n.x===h&&o>=i||n.x===d&&o<=i||n.x===v&&(o<i||o>e.width-i)||n.y===c&&u>=s||n.y===p&&u<=s||n.y===v&&(u<s||u>e.height-s))&&t.splice(r,1)}}return{left:t[0][0],top:t[0][1]}}t.jquery||(t=r(t));var s=e.cache.areas={},o=(t[0].shape||t.attr("shape")).toLowerCase(),u=t[0].coords||t.attr("coords"),a=u.split(","),f=[],l=r('img[usemap="#'+t.parent("map").attr("name")+'"]'),m=l.offset(),g={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},y=0,b=0,w;m.left+=Math.ceil((l.outerWidth()-l.width())/2),m.top+=Math.ceil((l.outerHeight()-l.height())/2);if(o==="poly"){y=a.length;while(y--)b=[parseInt(a[--y],10),parseInt(a[y+1],10)],b[0]>g.position.right&&(g.position.right=b[0]),b[0]<g.position.left&&(g.position.left=b[0]),b[1]>g.position.bottom&&(g.position.bottom=b[1]),b[1]<g.position.top&&(g.position.top=b[1]),f.push(b)}else{y=-1;while(y++<a.length)f.push(parseInt(a[y],10))}switch(o){case"rect":g={width:Math.abs(f[2]-f[0]),height:Math.abs(f[3]-f[1]),position:{left:Math.min(f[0],f[2]),top:Math.min(f[1],f[3])}};break;case"circle":g={width:f[2]+2,height:f[2]+2,position:{left:f[0],top:f[1]}};break;case"poly":g.width=Math.abs(g.position.right-g.position.left),g.height=Math.abs(g.position.bottom-g.position.top),n.abbrev()==="c"?g.position={left:g.position.left+g.width/2,top:g.position.top+g.height/2}:(s[n+u]||(g.position=E(g,f.slice(),n),i&&(i[0]==="flip"||i[1]==="flip")&&(g.offset=E(g,f.slice(),{x:n.x===h?d:n.x===d?h:v,y:n.y===c?p:n.y===p?c:v}),g.offset.left-=g.position.left,g.offset.top-=g.position.top),s[n+u]=g),g=s[n+u]),g.width=g.height=0}return g.position.left+=m.left,g.position.top+=m.top,g},w.ie6=function(e){var t=r.browser,n=e.plugins.ie6;return!t.msie||(""+t.version).charAt(0)!=="6"?s:"object"==typeof n?n:e.plugins.ie6=new q(e)},w.ie6.initialize="render"})})(window,document);