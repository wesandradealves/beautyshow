var it=Object.defineProperty;var rt=(t,e,n)=>e in t?it(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(rt(t,typeof e!="symbol"?e+"":e,n),n);import{b as y,c as v,i as m,s as o,d as A,e as k,j as b}from"./index.c7acbe5b.js";import{d as j}from"./Caret.e5d23aaa.js";import{d as C,g as w}from"./cleanForSlug.a98315ee.js";import{c as D,d as O}from"./html.5f1b4643.js";import{d as ct,C as lt}from"./helpers.73050afe.js";const ut=()=>{const t=window.elementor.documents.getCurrent(),e=[];return t.$element?(t.$element.find(".elementor-widget-container").each((n,s)=>{let a=s.innerHTML.trim();a=a.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(D(a)===""&&O(a).length===0)&&e.push(a)}),e.join(" ")):""},_=()=>{var t;return{content:ut(),title:window.elementor.settings.page.model.get("post_title"),excerpt:window.elementor.settings.page.model.get("post_excerpt")||"",slug:C(window.elementor.settings.page.model.get("post_title")),permalink:window.elementor.config.document.urls.permalink||"",featuredImage:((t=window.elementor.settings.page.model.get("post_featured_image"))==null?void 0:t.url)||""}},dt=()=>{const t=w(ET_Builder,"Frames.app.frameElement",document.querySelector("iframe#et-fb-app-frame"));if(!t)return document.createElement("div");let e=t.contentWindow.document.querySelectorAll("#et-fb-app");return 1<e.length&&(e=[...e].filter(n=>n.classList.contains("et-fb-root-ancestor"))),e[0]||document.createElement("div")},pt=()=>{const t=[],e=dt().querySelectorAll(".et_pb_section"),n=new RegExp(["<style.*?</style>","\\[object Object\\]"].join("|"),"gi");for(let s=0;s<e.length;s++){let a=e[s].innerHTML;a=e[s].innerHTML.replace(n,""),a=a.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),!(D(a)===""&&O(a).length===0)&&t.push(a)}return t.join(" ")},mt=()=>{const t=new URL(w(ETBuilderBackendDynamic,"currentPage.permalink",""));return t.searchParams.delete("PageSpeed"),t.href},M=()=>({content:pt(),title:w(ETBuilderBackendDynamic,"postTitle",""),excerpt:w(ETBuilderBackendDynamic,"postMeta.post_excerpt",""),slug:w(ETBuilderBackendDynamic,"postMeta.post_name",""),permalink:mt(),featuredImage:w(ETBuilderBackendDynamic,"currentPage.thumbnailUrl","")}),gt=t=>{let e;switch(t.type){case"header":e=document.createElement(t.settings.tag),e.innerHTML=t.settings.headerTxt.trim();break;case"image":const n=document.createElement("img");t.settings.altTxt&&n.setAttribute("alt",t.settings.altTxt),t.settings.src&&n.setAttribute("src",t.settings.src),t.settings.noFollow&&n.setAttribute("rel","nofollow"),e=n,t.settings.link&&(e=document.createElement("a"),e.setAttribute("href",t.settings.link),e.innerHTML=n.outerHTML,t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank"));break;case"video":t.settings.type==="youtube"?(e=document.createElement("iframe"),e.setAttribute("src",t.settings.youtubeUrl)):(e=document.createElement("div"),e.innerHTML=t.settings.code);break;case"text":e=document.createElement("div"),e.innerHTML=t.settings.txt.trim();break;case"button":e=document.createElement("a"),e.appendChild(document.createTextNode(t.settings.btnTxt+" "+t.settings.btnSubTxt)),t.settings.link&&e.setAttribute("href",t.settings.link),t.settings.altTxt&&e.setAttribute("alt",t.settings.altTxt),t.settings.src&&e.setAttribute("src",t.settings.src),t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank");break;case"bullet-list":e=document.createElement("ul"),t.settings.items.forEach(s=>{const a=document.createElement("li");a.innerHTML=s.txt,e.appendChild(a)});break;case"custom-html":e=document.createElement("div"),e.innerHTML=t.settings.code;break}return e},ft=()=>{const t=[];return JSON.parse(JSON.stringify(w(seedprod_data,"settings.document.sections",[]))).forEach(n=>{n.rows.forEach(s=>{s.cols.forEach(a=>{a.blocks.forEach(c=>{const r=gt(c);r&&(D(r)===""&&O(r).length===0||t.push(r.outerHTML))})})})}),t.join(" ")},wt=()=>{const t=w(seedprod_data,"home_url",""),e=w(seedprod_data,"settings.post_name","");return`${t}/${e}/`},q=()=>({content:ft(),title:w(seedprod_data,"settings.post_title",""),excerpt:"",slug:w(seedprod_data,"settings.post_name",""),permalink:wt()}),W=()=>{let t="";return A()&&(t=_().permalink),k()&&(t=M().permalink),b()&&(t=q().permalink),t},yt=()=>{if(o.state["live-tags"].liveTags.permalink)return o.state["live-tags"].liveTags.permalink;let t;if(y()||v){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return m()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=W()),t&&o.commit("live-tags/updatePermalink",t),t},T=()=>{let t;if(y()||v){const e=document.querySelector("#edit-slug-box a");e&&e.href&&(t=e.href)}return m()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=W()),t},vt=async(t=!0)=>{let e=yt();const n=T();e!==n&&(e=n,e&&(o.commit("live-tags/updatePermalink",e),t&&new h().runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:P(),slug:T()})))},z=()=>{let t="";return A()&&(t=_().title),k()&&(t=M().title),b()&&(t=q().title),t},ht=()=>{if(o.state["live-tags"].liveTags.post_title)return o.state["live-tags"].liveTags.post_title;let t;if(y()||v()){const e=document.querySelector("#post input#title");t=e?e.value:""}return m()&&(t=window.wp.data.select("core/editor").getCurrentPost().title),t||(t=z()),t&&o.commit("live-tags/updatePostTitle",t),t},R=()=>{let t;if(y()||v()){const e=document.querySelector("#post input#title");t=e?e.value:""}return m()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("title")),t||(t=z()),t},Et=async(t=!0)=>{let e=ht();const n=R();e!==n&&(e=n,o.commit("live-tags/updatePostTitle",e),t&&new h().runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:P(),slug:T()}))},G=t=>{if(!t)return"";const e=[/\[.*?\]/g,/<\/?[a-z][^>]*?>/gi,/<!--[\s\S]*?-->/g,/(\r\n|\n|\r)/g];return t=t.replaceAll(/\n\n/g," "),e.forEach(n=>{t=t.replace(n,"")}),t.trim()},J=()=>{let t="";return A()&&(t=_().excerpt),k()&&(t=M().excerpt),b()&&(t=q().excerpt),t},Pt=()=>{if(o.state["live-tags"].liveTags.post_excerpt)return o.state["live-tags"].liveTags.post_excerpt;let t;return(y()||v())&&(t=V()),m()&&(t=window.wp.data.select("core/editor").getCurrentPost().excerpt),t||(t=J()),t||(t=G(nt())),t&&o.commit("live-tags/updatePostExcerpt",t),t},Tt=()=>{let t;return(y()||v())&&(t=V()),m()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("excerpt")),t||(t=J()),t||(t=G(P())),t},xt=async(t=!0)=>{let e=Pt();const n=Tt();e!==n&&(e=n,o.commit("live-tags/updatePostExcerpt",e),t&&new h().runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:P(),slug:T()}))},V=()=>{let t="";const e=document.querySelector("#postexcerpt textarea#excerpt");if(t=e?e.value:"",document.querySelector("#wp-excerpt-wrap.tmce-active")){const n=window.tinyMCE?window.tinyMCE.get("excerpt"):"";n&&(t=n.getContent({format:"raw"}))}return t},Z=()=>{let t="";return A()&&(t=_().slug),k()&&(t=M().slug),b()&&(t=q().slug),t},St=()=>{if(o.state["live-tags"].permalinkSlug)return o.state["live-tags"].permalinkSlug;let t="";if(y()||v()){const e=document.querySelector("#post_name");e&&(t=C(e.value))}return m()&&(t=window.wp.data.select("core/editor").getCurrentPost().slug),t||(t=Z()),t&&o.commit("live-tags/updatePermalinkSlug",t),t},At=()=>{let t="";if(y()||v()){const e=document.querySelector("#post_name");e&&(t=C(e.value))}if(m()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("slug")),A()){const e=window.elementor.settings.page.model.get("post_title");e&&(t=C(e))}return t||(t=Z()),t},Ct=async(t=!0)=>{let e=St();const n=At();e!==n&&(e=n,o.commit("live-tags/updatePermalinkSlug",e),t&&new h().runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:P(),slug:T()}))};let p="",E="";const kt=(t=!0)=>{var e;if(y()||v()){const n=document.querySelectorAll('#post input[name="post_category[]"]:checked');n.length?(p!==n[0].parentNode.innerText&&(p=n[0].parentNode.innerText,o.commit("live-tags/updateTaxonomyTitle",p)),E=Array.from(n).map(s=>s.parentNode.innerText).join(", "),o.commit("live-tags/updateCategories",E)):p!==""&&(p=E="",o.commit("live-tags/updateTaxonomyTitle",p),o.commit("live-tags/updateCategories",E))}if(m()){let n=[],s=[];if((e=window.aioseo.user.data.allcaps)!=null&&e.manageCategories&&(n=window.wp.data.select("core").getEntityRecords("taxonomy","category"),s=window.wp.data.select("core/editor").getEditedPostAttribute("categories")),s&&s.length&&n){const a=n.find(c=>c.id===s[0]);a&&p!==a.name&&(p=a.name,o.commit("live-tags/updateTaxonomyTitle",p)),E=n.filter(c=>s.includes(c.id)).map(c=>c.name).join(", "),o.commit("live-tags/updateCategories",E)}else p!==""&&(p=E="",o.commit("live-tags/updateTaxonomyTitle",p),o.commit("live-tags/updateCategories",E))}t&&new h().runAnalysis({postId:o.state.currentPost.id})},bt=(t=!1)=>{if(o.state.currentPost.context!=="term")return;const e=document.querySelector("#edittag input#name");e&&(o.commit("live-tags/updateTaxonomyTitle",e.value),e.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyTitle",e.value)}));const n=document.querySelector("#edittag textarea#description");n&&(o.commit("live-tags/updateTaxonomyDescription",n.value),n.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyDescription",n.value)}));const s=document.querySelector("#edittag input#slug");if(s){const a=C(s.value);o.commit("live-tags/updatePermalinkSlug",a),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${a.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`)),s.addEventListener("input",()=>{o.commit("live-tags/updatePermalinkSlug",a),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${a.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`))})}o.dispatch("savePostState"),t&&h.runAnalysis({postId:o.state.currentPost.id})},_t=(t=!1)=>{if(o.state.currentPost.postType!=="attachment")return;const e=document.querySelector("textarea#attachment_caption");e&&(o.commit("live-tags/updateAttachmentCaption",e.value),e.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentCaption",r.target.value)}));const n=document.querySelector("textarea#attachment-details-caption");n&&(o.commit("live-tags/updateAttachmentCaption",n.value),n.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentCaption",r.target.value)}));const s=document.querySelector("textarea#attachment_content");s&&(o.commit("live-tags/updateAttachmentDescription",s.value),s.addEventListener("input",r=>{o.commit("live-tags/updateAttachmentDescription",r.target.value)}));const a=document.querySelector("input#attachment_alt");a&&(o.commit("live-tags/updateAltTag",a.value),a.addEventListener("input",r=>{o.commit("live-tags/updateAltTag",r.target.value)}));const c=document.querySelector("input#attachment-details-alt-text");c&&(o.commit("live-tags/updateAltTag",a.value),c.addEventListener("input",r=>{o.commit("live-tags/updateAltTag",r.target.value)})),t&&new h().runAnalysis({postId:o.state.currentPost.id})},Mt=()=>!window.aioseo.currentPost||!window.aioseo.currentPost.id?!1:window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&!window.aioseo.currentPost.isSpecialPage&&window.aioseo.currentPost.postType!=="attachment"&&F(),Ht=()=>!window.aioseo.screen||!window.aioseo.screen.postType?!1:!!(window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&F(window.aioseo.screen.postType)),F=(t=null)=>{if(t)return!!(window.aioseo.dynamicOptions.searchAppearance.postTypes[t]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced.showMetaBox);if(!window.aioseo.currentPost||!window.aioseo.currentPost.id)return!1;const e=window.aioseo.currentPost.postType,n=window.aioseo.currentPost.termType,s=!!(e&&window.aioseo.currentPost.context==="post"&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced.showMetaBox),a=!!(n&&window.aioseo.currentPost.context==="term"&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n]&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced.showMetaBox);return s||a},S=async(t=900,e=!0)=>{j(async()=>{await Et(!1),await It(!1),await xt(!1),await Ct(!1),await vt(!1),kt(!1),bt(!1),_t(!1),e&&new h().runAnalysis({postId:o.state.currentPost.id})},t)};function qt(){return new Worker(""+window.__aioseoDynamicImportPreload__("main-2e836f0a.js"))}class h{constructor(){f(this,"postId",null);f(this,"postTitle",null);f(this,"postParsedTitle",null);f(this,"postParsedDescription",null);f(this,"postDescription",null);f(this,"keyphrases",null);f(this,"postContent",null);f(this,"postSlug",null);f(this,"isAnalyzing",!1);f(this,"worker",null)}async runAnalysis({postId:e,postData:n={...o.state.currentPost},content:s=P(),slug:a=T()}){if(!o.state.options.advanced||!o.state.options.advanced.truSeo||!o.state.currentPost.page_analysis||this.isAnalyzing)return;this.worker&&this.worker.terminate();const c={separator:ct(window.aioseo.options.searchAppearance.global.separator)},r=JSON.parse(JSON.stringify({postId:e,postData:n,content:s,slug:a,postEditedTitle:R(),aioseo:window.aioseo,aioseoGlobals:c}));let l=[];this.worker=new qt,this.worker.addEventListener("message",i=>{i.data.event==="tru-seo-analysis-complete"&&(l=i.data.analysis,this.dispatchActions(l,r),this.worker.terminate())}),this.worker.postMessage({event:"tru-seo-analysis",analysisData:r})}setSidebarButtonScore(e){const n=document.getElementById("aioseo-post-settings-sidebar-button"),s=document.getElementById("aioseo-post-score");!n||!s||(n.className=80<e?"score-green":50<e?"score-orange":"score-red",m()||(n.classList.add("aioseo-score-button","classic-editor"),e=`${e}/100`),s.textContent=e)}dispatchActions(e,n){e.forEach(s=>{s.action==="updateState"&&window.aioseo.currentPost.postType!=="attachment"&&n.postEditedTitle&&this.setSidebarButtonScore(s.data.seo_score),o.dispatch(s.action,s.data)})}}const X=()=>{if(!window.aioseo.currentPost||!window.aioseo.currentPost.postType)return"";const t=window.aioseo.currentPost.postType,e=window.aioseo.dynamicOptions.searchAppearance.postTypes[t].customFields;if(!e||!Mt)return"";const n=()=>{S(500)},s=e.replace(/\n/g,",").split(","),a=[],c=["INPUT","TEXTAREA","IMG"],r=i=>{try{document.createDocumentFragment().querySelector(i)}catch{return!1}return!0};s.forEach(i=>{i=i.trim();const u=r(`#${i}`)?document.querySelector(`#${i}`):!1,B=document.querySelectorAll("#the-list > tr"),ot=document.querySelectorAll(".acf-field");c.includes(u==null?void 0:u.tagName)&&!(u!=null&&u.closest(".acf-field"))?a.push(u):B.forEach(d=>{const g=d.querySelector(`#${d.id}-key`),x=d.querySelector(`#${d.id}-value`);c.includes(x==null?void 0:x.tagName)&&s.includes(g==null?void 0:g.value)&&a.push(x)}),ot.forEach(d=>{if(i!==d.dataset.name)return"";let g=d.querySelector(`[id^="acf"][name$="[${d.dataset.key}]"]`);if(d.dataset.type==="image"&&(g=d.querySelector(".has-value img")),d.dataset.type==="gallery"&&(g=d.querySelector(".acf-gallery-attachment img")),!g||g.type&&g.type==="hidden")return"";if(d.dataset.type==="wysiwyg"){const x=window.setInterval(()=>{var I,L;(L=(I=window.tinyMCE)==null?void 0:I.activeEditor)!=null&&L.acf&&(window.clearInterval(x),window.tinyMCE.activeEditor.on("keyup",function(){S(500)}),window.tinyMCE.activeEditor.on("PostProcess",function(){j(()=>{S(500)},10)}))},50),st=function(I){I.forEach(L=>{var U;if(L.attributeName==="class"&&d.querySelector(".wp-editor-wrap.tmce-active")&&((U=window.tinyMCE)!=null&&U.activeEditor)){window.tinyMCE.activeEditor.on("keyup",function(){S(500)});const N=d.querySelector(`[name="acf[${d.dataset.key}]"]`);N&&(N.addEventListener("keyup",()=>{S(500)}),N.addEventListener("paste",()=>{S(500)}))}})},at=new MutationObserver(st),H=d.querySelector(".wp-editor-wrap");H&&at.observe(H,{attributes:!0})}c.includes(g.tagName)&&a.push(g)})});let l="";return a.forEach(i=>{let u="";if(c.includes(i.tagName)&&i.addEventListener("keyup",n),i.value&&(u=i.value),i.tagName==="IMG"&&i.src){const B=i.alt?`alt="${i.alt}"`:"";u=`<img src="${i.src}" ${B}>`}i.value&&i.type&&i.type==="url"&&(u=`<a href="${u}">${u}</a>`),u&&(l+=`${u} `)}),l},Ut=(t,e=["INPUT","TEXTAREA","IMG"])=>{if(!t)return"";const n=document.querySelector(`#${t}`),s=document.querySelectorAll("#the-list > tr"),a=document.querySelectorAll(".acf-field");let c="";return n&&e.indexOf(n.tagName)!==-1&&(n.closest(".acf-field")||(c=n.tagName==="IMG"?n.getAttribute("src"):n.value)),s.length&&s.forEach(r=>{const l=r.querySelector(`#${r.id}-key`),i=r.querySelector(`#${r.id}-value`);i&&e.indexOf(i.tagName)!==-1&&l.value===t&&(c=i.tagName==="IMG"?i.getAttribute("src"):i.value)}),a.length&&a.forEach(r=>{if(t!==r.dataset.name)return;let l;e.forEach(i=>{const u=i.toLowerCase();l=r.querySelector(`[data-key="${r.dataset.key}"] ${u}`)||l}),l&&(c=l.tagName==="IMG"?l.getAttribute("src"):l.value)}),c},Q=/base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/g,Y=["acf","aioseo"],K=()=>{let t="";return A()&&(t=_().content),k()&&(t=M().content),b()&&(t=q().content),t},tt=t=>{var s;if(!t.includes('<!-- wp:block {"ref":'))return t;const e=(s=window.wp.blocks)==null?void 0:s.rawHandler({HTML:t});return lt(e).forEach(a=>{var c,r,l;if(a.name==="core/block"){const i=window.wp.data.select("core").getEntityRecord("postType","wp_block",(c=a.attributes)==null?void 0:c.ref);(r=i==null?void 0:i.content)!=null&&r.raw&&(t=t.replace(`<!-- wp:block {"ref":${(l=a.attributes)==null?void 0:l.ref}} /-->`,i.content.raw))}}),t},et=(t,e)=>(window.wp.data.select("core/block-editor").getBlocks().forEach(s=>{if(e.includes(s.name.split("/")[0])){const a=document.getElementById("block-"+s.clientId);if(a&&a.innerHTML){const c=`<!-- wp:${s.name}.*?-->`;t=t.replace(new RegExp(c),a.innerHTML)}}}),t),nt=()=>{if(o.state["live-tags"].liveTags.post_content)return o.state["live-tags"].liveTags.post_content;let t="";if(y())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=$();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=$())},50)}return m()&&(t=window.wp.data.select("core/editor").getCurrentPost().content,t=tt(t),t=et(t,Y)),t||(t=K()),window.aioseo.currentPost.descriptionIncludeCustomFields&&(t=t+X()),t=t.replace(Q,""),t&&o.commit("live-tags/updatePostContent",t),t},P=()=>{let t="";if(y())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=$();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=$())},50)}return m()&&(t=window.wp.data.select("core/editor").getEditedPostContent(),t=tt(t),t=et(t,Y)),t||(t=K()),window.aioseo.currentPost.descriptionIncludeCustomFields&&(t=t+X()),t=t.replace(Q,""),t},It=async(t=!0)=>{let e=nt();const n=P();e!==n&&(e=n,o.commit("live-tags/updatePostContent",e),t&&new h().runAnalysis({postId:o.state.currentPost.id,postData:{...o.state.currentPost},content:P(),slug:T()}))},$=()=>{let t="";const e=window.tinyMCE?window.tinyMCE.get("content"):"";if(document.querySelector("#wp-content-wrap.tmce-active")&&e)t=e.getContent({format:"raw"});else{const n=document.querySelector("textarea#content");t=n?n.value:""}return t};export{h as T,M as a,P as b,Ut as c,kt as d,bt as e,_t as f,_ as g,Ht as h,At as i,S as m,F as s,Mt as t};