import{_ as i,q as l,o as c,c as p,z as u,A as m}from"./js/_plugin-vue_export-helper.299eda55.js";import{l as d}from"./js/index.ca21de53.js";import{C as _,l as f}from"./js/index.f123d27f.js";import{l as h}from"./js/index.0b123ab1.js";import{S as A}from"./js/Standalone.cea75ea6.js";import{s as r}from"./js/index.c7acbe5b.js";import"./js/client.e7a26247.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/vuex.esm-bundler.f966fce5.js";import"./js/default-i18n.0e8bc810.js";import"./js/helpers.73050afe.js";import"./js/constants.d64d7051.js";import"./js/Caret.e5d23aaa.js";const y=window.aioseo.urls.aio.searchAppearance,b={components:{CoreAlert:_},mixins:[A],data(){return{strings:{alert:this.$t.sprintf(this.$t.__("The options below are disabled because you are using %1$s to manage your SEO. They can be changed in the %2$sSearch Appearance menu%3$s.",this.$td),"All in One SEO",`<a href="${y}" target="_blank">`,"</a>")}}}},g={class:"aioseo-divi-seo-admin-notice-container"};function w(n,t,o,e,s,E){const a=l("core-alert");return c(),p("div",g,[u(a,{innerHTML:s.strings.alert},null,8,["innerHTML"])])}const v=i(b,[["render",w]]),x=()=>{const n=document.querySelectorAll("#wrap-seo .et-tab-content");for(let t=0;t<n.length;t++){const o=document.createElement("div");o.setAttribute("id",`aioseo-divi-seo-admin-notice-container-${t}`),n[t].insertBefore(o,n[t].firstChild);let e=m(v);e=d(e),e=f(e),e=h(e),e.use(r),r._vm=e,e.mount(`#${o.getAttribute("id")}`)}},S=()=>{const n=document.querySelectorAll('#wrap-seo input[type="text"], #wrap-seo textarea');for(let e=0;e<n.length;e++)n[e].style.pointerEvents="none",n[e].setAttribute("readonly",!0);const t=document.querySelectorAll("#wrap-seo select");for(let e=0;e<t.length;e++)t[e].style.pointerEvents="none",t[e].setAttribute("disabled",!0);const o=document.querySelectorAll("#wrap-seo .et-checkbox");for(let e=0;e<o.length;e++)o[e].setAttribute("disabled",!0),o[e].nextElementSibling.style.pointerEvents="none"},$=()=>{const n=window.aioseo.urls.aio.searchAppearance,t=document.querySelector('a[href="#wrap-seo"]');if(!n||!t)return;const o=t.cloneNode(!0);o.setAttribute("href",n),t.parentNode.replaceChild(o,t)};window.addEventListener("load",()=>{x(),S(),$()});
