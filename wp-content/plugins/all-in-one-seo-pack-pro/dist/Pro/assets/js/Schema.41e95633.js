import{B as S}from"./Textarea.e4bb74d5.js";import{C as y}from"./SettingsRow.7db26b8a.js";import{r as a,o as _,c as g,g as i,w as l,a as v,C as b,y as P,d,b as m}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as $}from"./_plugin-vue_export-helper.d7c6d548.js";import{c as w}from"./links.138c5ae5.js";import{B as f}from"./RadioToggle.48072aa8.js";import{C as A}from"./Blur.718f6c18.js";import{C as k}from"./Index.a392ec8a.js";const C={components:{BaseTextarea:S,CoreSettingsRow:y},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0}},data(){return{strings:{customFields:this.$t.__("Custom Fields",this.$tdPro),customFieldsDescription:this.$t.__("List of custom field names to include as post content for tags and the SEO Page Analysis. Add one per line.",this.$tdPro)}}},methods:{getSchemaTypeOption(s){return this.schemaTypes.find(o=>o.value===s)}}},j={class:"aioseo-sa-ct-custom-fields"},B={class:"aioseo-description"},O=["innerHTML"];function V(s,o,e,h,t,r){const c=a("base-textarea"),n=a("core-settings-row");return _(),g("div",j,[i(n,{name:t.strings.customFields,align:""},{content:l(()=>[i(c,{modelValue:e.options.customFields,"onUpdate:modelValue":o[0]||(o[0]=p=>e.options.customFields=p),"min-height":200},null,8,["modelValue"]),v("div",B,[b(P(t.strings.customFieldsDescription)+" ",1),v("span",{innerHTML:s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"customFields",!0)},null,8,O)])]),_:1},8,["name"])])}const Y=$(C,[["render",V]]);const x={components:{BaseRadioToggle:f,CoreSettingsRow:y},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0}},data(){return{schemaTypes:{post:[{value:"none",label:this.$t.__("None",this.$tdPro)},{value:"Article",label:this.$t.__("Article",this.$tdPro)},{value:"Course",label:this.$t.__("Course",this.$tdPro)},{value:"Dataset",label:this.$t.__("Dataset",this.$tdPro)},{value:"Movie",label:this.$t.__("Movie",this.$tdPro)},{value:"Person",label:this.$t.__("Person",this.$tdPro)},{value:"Product",label:this.$t.__("Product",this.$tdPro)},{value:"Recipe",label:this.$t.__("Recipe",this.$tdPro)},{value:"Service",label:this.$t.__("Service",this.$tdPro)},{value:"SoftwareApplication",label:this.$t.__("Software Application",this.$tdPro)},{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)}],page:[{value:"none",label:this.$t.__("None",this.$tdPro)},{value:"Course",label:this.$t.__("Course",this.$tdPro)},{value:"Dataset",label:this.$t.__("Dataset",this.$tdPro)},{value:"Movie",label:this.$t.__("Movie",this.$tdPro)},{value:"Person",label:this.$t.__("Person",this.$tdPro)},{value:"Product",label:this.$t.__("Product",this.$tdPro)},{value:"Recipe",label:this.$t.__("Recipe",this.$tdPro)},{value:"Service",label:this.$t.__("Service",this.$tdPro)},{value:"SoftwareApplication",label:this.$t.__("Software Application",this.$tdPro)},{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)}],attachment:[{value:"none",label:this.$t.__("None",this.$tdPro)},{value:"ItemPage",label:this.$t.__("Item Page",this.$tdPro)}],cpt:[{value:"none",label:this.$t.__("None",this.$tdPro)},{value:"Article",label:this.$t.__("Article",this.$tdPro)},{value:"Course",label:this.$t.__("Course",this.$tdPro)},{value:"Dataset",label:this.$t.__("Dataset",this.$tdPro)},{value:"Movie",label:this.$t.__("Movie",this.$tdPro)},{value:"Person",label:this.$t.__("Person",this.$tdPro)},{value:"Product",label:this.$t.__("Product",this.$tdPro)},{value:"Recipe",label:this.$t.__("Recipe",this.$tdPro)},{value:"Service",label:this.$t.__("Service",this.$tdPro)},{value:"SoftwareApplication",label:this.$t.__("Software Application",this.$tdPro)},{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)}]},webPageTypes:{cpt:[{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)},{value:"CollectionPage",label:this.$t.__("Collection Page",this.$tdPro)},{value:"ProfilePage",label:this.$t.__("Profile Page",this.$tdPro)},{value:"ItemPage",label:this.$t.__("Item Page",this.$tdPro)},{value:"FAQPage",label:this.$t.__("FAQ Page",this.$tdPro)},{value:"RealEstateListing",label:this.$t.__("Real Estate Listing",this.$tdPro)}]},strings:{schemaType:this.$t.__("Schema Type",this.$tdPro),webPageType:this.$t.__("Web Page Type",this.$tdPro),articleType:this.$t.__("Article Type",this.$tdPro),article:this.$t.__("Article",this.$tdPro),blogPost:this.$t.__("Blog Post",this.$tdPro),newsArticle:this.$t.__("News Article",this.$tdPro)}}},methods:{getSelectOptions(s){return typeof this[s][this.object.name]<"u"?this[s][this.object.name]:this[s].cpt},getCurrentOption(s,o){return typeof this[s][this.object.name]<"u"?this[s][this.object.name].find(e=>e.value===o):this[s].cpt.find(e=>e.value===o)}}},N={class:"aioseo-sa-ct-schema"};function R(s,o,e,h,t,r){const c=a("base-select"),n=a("core-settings-row"),p=a("base-radio-toggle");return _(),g("div",N,[i(n,{name:t.strings.schemaType,align:""},{content:l(()=>[i(c,{size:"medium",class:"schema-type",options:r.getSelectOptions("schemaTypes"),modelValue:r.getCurrentOption("schemaTypes",e.options.schemaType),"onUpdate:modelValue":o[0]||(o[0]=u=>e.options.schemaType=u.value)},null,8,["options","modelValue"])]),_:1},8,["name"]),e.options.schemaType==="WebPage"?(_(),d(n,{key:0,name:t.strings.webPageType,align:""},{content:l(()=>[i(c,{size:"medium",class:"webpage-type",options:r.getSelectOptions("webPageTypes"),modelValue:r.getCurrentOption("webPageTypes",e.options.webPageType),"onUpdate:modelValue":o[1]||(o[1]=u=>e.options.webPageType=u.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):m("",!0),e.options.schemaType==="Article"?(_(),d(n,{key:1,name:t.strings.articleType,align:""},{content:l(()=>[i(p,{modelValue:e.options.articleType,"onUpdate:modelValue":o[2]||(o[2]=u=>e.options.articleType=u),name:`${e.object.name}articleType`,options:[{label:t.strings.article,value:"Article"},{label:t.strings.blogPost,value:"BlogPosting"},{label:t.strings.newsArticle,value:"NewsArticle"}]},null,8,["modelValue","name","options"])]),_:1},8,["name"])):m("",!0)])}const U=$(x,[["render",R]]);const D={components:{BaseRadioToggle:f,CoreBlur:A,CoreSettingsRow:y,Cta:k},props:{type:{type:String,required:!0},object:{type:Object,required:!0}},data(){return{schemaTypes:[{value:"none",label:this.$t.__("None",this.$td)},{value:"Article",label:this.$t.__("Article",this.$td)}],strings:{schemaType:this.$t.__("Schema Type",this.$td),articleType:this.$t.__("Article Type",this.$td),article:this.$t.__("Article",this.$td),blogPost:this.$t.__("Blog Post",this.$td),newsArticle:this.$t.__("News Article",this.$td),ctaDescription:this.$t.__("Easily generate unlimited schema markup for your content to help you rank higher in search results. Our schema validator ensures your schema works out of the box.",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Schema Generator",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Schema Generator is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},features:[this.$t.__("Unlimited Schema",this.$td),this.$t.__("Validate with Google",this.$td),this.$t.__("Increase Rankings",this.$td),this.$t.__("Additional Schema Types",this.$td)]}},methods:{getSchemaTypeOption(s){return this.schemaTypes.find(o=>o.value===s)}}},L={class:"aioseo-sa-ct-schema-lite"};function q(s,o,e,h,t,r){const c=a("base-select"),n=a("core-settings-row"),p=a("base-radio-toggle"),u=a("core-blur"),T=a("cta");return _(),g("div",L,[i(u,null,{default:l(()=>[i(n,{name:t.strings.schemaType,align:""},{content:l(()=>[i(c,{size:"medium",class:"schema-type",options:t.schemaTypes,modelValue:r.getSchemaTypeOption("Article")},null,8,["options","modelValue"])]),_:1},8,["name"]),i(n,{name:t.strings.articleType,align:""},{content:l(()=>[i(p,{name:`${e.object.name}articleType`,modelValue:"BlogPosting",options:[{label:t.strings.article,value:"Article"},{label:t.strings.blogPost,value:"BlogPosting"},{label:t.strings.newsArticle,value:"NewsArticle"}]},null,8,["name","options"])]),_:1},8,["name"])]),_:1}),i(T,{"cta-link":s.$links.getPricingUrl("schema-markup","schema-markup-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("schema-markup",null,"home"),"feature-list":t.features},{"header-text":l(()=>[b(P(t.strings.ctaHeader),1)]),description:l(()=>[b(P(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const F=$(D,[["render",q]]),W={setup(){return{licenseStore:w()}},components:{Schema:U,SchemaLite:F},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean}},M={class:"aioseo-sa-ct-schema-view"};function I(s,o,e,h,t,r){const c=a("schema",!0),n=a("schema-lite");return _(),g("div",M,[h.licenseStore.isUnlicensed?m("",!0):(_(),d(c,{key:0,type:e.type,object:e.object,options:e.options,"show-bulk":e.showBulk},null,8,["type","object","options","show-bulk"])),h.licenseStore.isUnlicensed?(_(),d(n,{key:1,type:e.type,object:e.object,options:e.options,"show-bulk":e.showBulk},null,8,["type","object","options","show-bulk"])):m("",!0)])}const Z=$(W,[["render",I]]);export{Y as C,Z as S};
