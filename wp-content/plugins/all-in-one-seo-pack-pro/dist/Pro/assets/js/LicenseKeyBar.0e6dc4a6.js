import{S as o}from"./LogoGear.486c3049.js";import{r as n,o as r,c as i,a as t,g as a}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as c}from"./_plugin-vue_export-helper.d7c6d548.js";import{c as p,u as g}from"./links.138c5ae5.js";const $={components:{SvgAioseoLogoGear:o},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO",this.$isPro?"Pro":""),linkText:this.$t.__("Click here to learn more",this.$td)}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a></strong>',this.$links.getDocUrl("restApi"),this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("%1$s relies on the WordPress Rest API and your site might have it disabled. %2$s.",this.$td),this.strings.boldText,this.link)}},mounted(){document.body.classList.add("aioseo-has-bar")},beforeUnmount(){document.body.classList.remove("aioseo-has-bar")}},m={class:"aioseo-api-bar"},f={class:"upgrade-text"},x=["innerHTML"];function k(l,u,_,d,h,s){const e=n("svg-aioseo-logo-gear");return r(),i("div",m,[t("div",f,[a(e),t("div",{innerHTML:s.upgradeText},null,8,x)])])}const B=c($,[["render",k]]);const y={setup(){return{licenseStore:p(),rootStore:g()}},components:{SvgAioseoLogoGear:o},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO","Pro"),linkText:this.$t.__("license key now",this.$tdPro),renewLinkText:this.$t.__("Renew your license now",this.$tdPro)}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" class="text-white">%2$s</a></strong>',this.rootStore.aioseo.data.isNetworkAdmin?this.rootStore.aioseo.urls.aio.networkSettings:this.rootStore.aioseo.urls.aio.settings,this.strings.linkText)},renewLink(){return this.$t.sprintf('<strong><a href="%1$s" class="text-white" target="_blank">%2$s</a></strong>',this.$links.utmUrl("expired-license-key-bar","","https://aioseo.com/account/downloads/"),this.strings.renewLinkText)},upgradeText(){return this.licenseStore.license.isExpired?this.$t.sprintf(this.$t.__("You're using %1$s but your license has expired. %2$s.",this.$tdPro),this.strings.boldText,this.renewLink):this.$t.sprintf(this.$t.__("You're using %1$s but no license key has been entered. Add your %2$s.",this.$tdPro),this.strings.boldText,this.link)}},mounted(){document.body.classList.add("aioseo-has-bar")},beforeUnmount(){document.body.classList.remove("aioseo-has-bar")}},b={class:"aioseo-license-key-bar"},v={class:"upgrade-text"},T=["innerHTML"];function L(l,u,_,d,h,s){const e=n("svg-aioseo-logo-gear");return r(),i("div",b,[t("div",v,[a(e),t("div",{innerHTML:s.upgradeText},null,8,T)])])}const C=c(y,[["render",L]]);export{B as C,C as a};
