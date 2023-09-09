import{_ as k}from"./js/_plugin-vue_export-helper.d7c6d548.js";import{r as h,o as a,c as m,a as s,g as d,b as p,f as c,y as u,K as w,P as T,e as B,n as C,d as P,w as O,C as f,G as I,p as y}from"./js/vue.runtime.esm-bundler.a2ae84e1.js";import{l as j}from"./js/index.8a6e85a4.js";import{l as M}from"./js/index.63c9ec9d.js";import{l as z}from"./js/index.0b123ab1.js";import{n as E,t as b,l as G}from"./js/links.138c5ae5.js";import{h as K,t as R,T as F}from"./js/postContent.93cffc0f.js";import{e as x}from"./js/elemLoaded.9a6eb745.js";import{a as H}from"./js/allowed.a1bd54e7.js";import"./js/default-i18n.cb62c1e5.js";import{u as S,T as D}from"./js/TruSeoScore.5da2419b.js";import{a as A,c as N}from"./js/Caret.833cbb47.js";/* empty css                                               *//* empty css                                                 */import"./js/constants.3cff9bad.js";import{t as q}from"./js/html.7b614668.js";/* empty css                                                 */import{C as J}from"./js/ScoreButton.897fb37d.js";import{S as Q,a as W,b as X,c as Y}from"./js/Affiliate.0dd91887.js";import"./js/translations.2cd8c3d1.js";import"./js/isArrayLikeObject.7cab3d31.js";import"./js/cleanForSlug.e0a12587.js";import"./js/toString.55d4b1ab.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/deburr.7ab38f88.js";import"./js/get.3ac6bf22.js";const Z={setup(){const{strings:e}=S();return{composableStrings:e}},components:{CoreScoreButton:J,SvgCircleCheck:A,SvgCircleClose:N},mixins:[D],props:{post:Object,posts:Array,index:Number},data(){return{allowed:H,postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,strings:E(this.composableStrings,{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),imageTitle:this.$t.__("Image Title:",this.$td),imageAltTag:this.$t.__("Image Alt Tag:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)})}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,b.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.post.titleParsed=e.body.title,this.post.descriptionParsed=e.body.description,this.$root._data.screen.base!=="upload"&&this.runAnalysis(this.post.id)}).catch(e=>{console.error(`Unable to update post with ID ${this.post.id}: ${e}`)})},saveImage(){this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,b.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then(()=>{}).catch(e=>{console.error(`Unable to update attachment with ID ${this.post.id}: ${e}`)})},cancel(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},editImageTitle(){this.showEditImageTitle=!0},editImageAlt(){this.showEditImageAltTag=!0},truncate:q,updatePostTitle(e,i){const l=document.getElementById(`post-${e}`);if(!l)return;const v=l.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(!v)return;const t=v.getElementsByTagName("span")[0];v.innerText=i,v.prepend(t)}},mounted(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed},async created(){this.showTruSeo=K()}},$={key:0,class:"edit-row"},tt={key:1,class:"edit-row edit-title"},et=["title"],it=["id"],st={key:2,class:"edit-row"},ot=["title"],nt=["title"],lt={key:3,class:"edit-row edit-description"},rt=["title"],at=["id"],ct={key:4,class:"edit-row"},dt=["title"],ut=["title"],mt={key:5,class:"edit-row edit-image-title"},pt=["title"],ht=["id"],_t={key:6,class:"edit-row"},gt=["title"],vt=["title"],wt={key:7,class:"edit-row edit-image-alt"},Tt=["title"],kt=["id"],ft={key:8,class:"edit-row"},Pt=["title"],bt=["title"];function Ct(e,i,l,v,t,o){const g=h("core-score-button"),_=h("svg-circle-check"),r=h("svg-circle-close");return a(),m("div",{class:C(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}])},[s("div",null,[e.$root._data.screen.base==="edit"&&t.showTruSeo&&t.allowed("aioseo_page_analysis")&&!t.isSpecialPage?(a(),m("div",$,[d(g,{score:l.post.value,postId:t.postId},null,8,["score","postId"])])):p("",!0),t.allowed("aioseo_page_general_settings")?(a(),m("div",tt,[s("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[0]||(i[0]=c((...n)=>o.editTitle&&o.editTitle(...n),["prevent"]))},null,8,et),s("strong",null,u(t.strings.title)+" ",1),s("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},u(o.truncate(t.titleParsed,100)),9,it)])):p("",!0),t.showEditTitle?(a(),m("div",st,[w(s("textarea",{"onUpdate:modelValue":i[1]||(i[1]=n=>t.title=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.title]]),s("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[2]||(i[2]=c((...n)=>o.save&&o.save(...n),["prevent"])),title:t.strings.save},[d(_,{width:"20"})],8,ot),s("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[3]||(i[3]=c((...n)=>o.cancel&&o.cancel(...n),["prevent"])),title:t.strings.cancel},[d(r,{width:"20"})],8,nt)])):p("",!0),t.allowed("aioseo_page_general_settings")?(a(),m("div",lt,[s("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[4]||(i[4]=c((...n)=>o.editDescription&&o.editDescription(...n),["prevent"]))},null,8,rt),s("strong",null,u(t.strings.description)+" ",1),s("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},u(o.truncate(t.descriptionParsed)),9,at)])):p("",!0),t.showEditDescription?(a(),m("div",ct,[w(s("textarea",{"onUpdate:modelValue":i[5]||(i[5]=n=>t.postDescription=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.postDescription]]),s("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[6]||(i[6]=c((...n)=>o.save&&o.save(...n),["prevent"])),title:t.strings.save},[d(_,{width:"20"})],8,dt),s("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[7]||(i[7]=c((...n)=>o.cancel&&o.cancel(...n),["prevent"])),title:t.strings.cancel},[d(r,{width:"20"})],8,ut)])):p("",!0),B(e.$slots,"default"),e.$root._data.screen.base==="upload"&&l.post.showMedia?(a(),m("div",mt,[s("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[8]||(i[8]=c((...n)=>o.editImageTitle&&o.editImageTitle(...n),["prevent"]))},null,8,pt),s("strong",null,u(t.strings.imageTitle),1),s("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},u(t.imageTitle),9,ht)])):p("",!0),t.showEditImageTitle?(a(),m("div",_t,[w(s("textarea",{"onUpdate:modelValue":i[9]||(i[9]=n=>t.imageTitle=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.imageTitle]]),s("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[10]||(i[10]=c((...n)=>o.saveImage&&o.saveImage(...n),["prevent"])),title:t.strings.save},[d(_,{width:"20"})],8,gt),s("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[11]||(i[11]=c((...n)=>o.cancel&&o.cancel(...n),["prevent"])),title:t.strings.cancel},[d(r,{width:"20"})],8,vt)])):p("",!0),e.$root._data.screen.base==="upload"&&l.post.showMedia?(a(),m("div",wt,[s("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[12]||(i[12]=c((...n)=>o.editImageAlt&&o.editImageAlt(...n),["prevent"]))},null,8,Tt),s("strong",null,u(t.strings.imageAltTag),1),s("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},u(t.imageAltTag),9,kt)])):p("",!0),t.showEditImageAltTag?(a(),m("div",ft,[w(s("textarea",{"onUpdate:modelValue":i[13]||(i[13]=n=>t.imageAltTag=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.imageAltTag]]),s("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[14]||(i[14]=c((...n)=>o.saveImage&&o.saveImage(...n),["prevent"])),title:t.strings.save},[d(_,{width:"20"})],8,Pt),s("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[15]||(i[15]=c((...n)=>o.cancel&&o.cancel(...n),["prevent"])),title:t.strings.cancel},[d(r,{width:"20"})],8,bt)])):p("",!0)])],2)}const L=k(Z,[["render",Ct]]);const It={components:{CorePostColumn:L,SvgLinkAffiliate:Q,SvgLinkExternal:W,SvgLinkInternalInbound:X,SvgLinkInternalOutbound:Y},props:{post:Object,index:Number},data(){return{strings:{links:this.$t.__("Links:",this.$tdPro)}}}},yt={key:0,class:"links"},Et={class:"header"};function xt(e,i,l,v,t,o){const g=h("svg-link-internal-inbound"),_=h("svg-link-internal-outbound"),r=h("svg-link-affiliate"),n=h("svg-link-external"),V=h("core-post-column");return a(),P(V,{post:l.post,index:l.index},{default:O(()=>[s("template",null,[l.post.linkCounts&&l.post.postType!=="attachment"?(a(),m("div",yt,[s("strong",Et,u(t.strings.links),1),s("span",null,[d(g),f(u(l.post.linkCounts.inboundInternal),1)]),s("span",null,[d(_),f(u(l.post.linkCounts.outboundInternal),1)]),s("span",null,[d(r),f(u(l.post.linkCounts.affiliate),1)]),s("span",null,[d(n),f(u(l.post.linkCounts.external),1)])])):p("",!0)])]),_:1},8,["post","index"])}const St=k(It,[["render",xt]]),Dt={components:{CorePostColumn:L},props:{post:Object,index:Number}};function At(e,i,l,v,t,o){const g=h("core-post-column");return a(),P(g,{post:l.post,index:l.index},null,8,["post","index"])}const Nt=k(Dt,[["render",At]]),qt={components:{PostColumn:St,PostColumnLite:Nt},props:{post:Object,index:Number}};function Lt(e,i,l,v,t,o){const g=h("PostColumn"),_=h("PostColumnLite");return a(),m("div",null,[e.$isPro?(a(),P(g,{key:0,post:l.post,index:l.index},null,8,["post","index"])):p("",!0),e.$isPro?p("",!0):(a(),P(_,{key:1,post:l.post,index:l.index},null,8,["post","index"]))])}const Ut=k(qt,[["render",Lt]]);const Vt={setup(){const{strings:e}=S();return{composableStrings:e}},components:{SvgCircleCheck:A,SvgCircleClose:N},mixins:[D],props:{term:Object,terms:Array,index:Number},data(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,strings:E(this.composableStrings,{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)})}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,b.post(this.$links.restUrl("termscreen")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.term.titleParsed=e.body.title,this.term.descriptionParsed=e.body.description}).catch(e=>{console.error(`Unable to update term with ID ${this.term.id}: ${e}`)})},cancel(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},truncate:q},mounted(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed},async created(){this.showTruSeo=R()}},Bt={class:"edit-row edit-title"},Ot=["title"],jt=["id"],Mt={key:0,class:"edit-row"},zt=["title"],Gt=["title"],Kt={class:"edit-row edit-description"},Rt=["title"],Ft=["id"],Ht={key:1,class:"edit-row"},Jt=["title"],Qt=["title"];function Wt(e,i,l,v,t,o){const g=h("svg-circle-check"),_=h("svg-circle-close");return a(),m("div",{class:C(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription}])},[s("div",null,[s("div",Bt,[s("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[0]||(i[0]=c((...r)=>o.editTitle&&o.editTitle(...r),["prevent"]))},null,8,Ot),s("strong",null,u(t.strings.title),1),s("span",{id:`aioseo-${t.columnName}-${t.termId}-value`},u(o.truncate(t.titleParsed,100)),9,jt)]),t.showEditTitle?(a(),m("div",Mt,[w(s("textarea",{"onUpdate:modelValue":i[1]||(i[1]=r=>t.title=r),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.title]]),s("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[2]||(i[2]=c((...r)=>o.save&&o.save(...r),["prevent"])),title:t.strings.save},[d(g,{width:"20"})],8,zt),s("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[3]||(i[3]=c((...r)=>o.cancel&&o.cancel(...r),["prevent"])),title:t.strings.cancel},[d(_,{width:"20"})],8,Gt)])):p("",!0),s("div",Kt,[s("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[4]||(i[4]=c((...r)=>o.editDescription&&o.editDescription(...r),["prevent"]))},null,8,Rt),s("strong",null,u(t.strings.description),1),s("span",{id:`aioseo-${t.columnName}-${t.termId}-value`},u(o.truncate(t.descriptionParsed)),9,Ft)]),t.showEditDescription?(a(),m("div",Ht,[w(s("textarea",{"onUpdate:modelValue":i[5]||(i[5]=r=>t.termDescription=r),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.termDescription]]),s("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[6]||(i[6]=c((...r)=>o.save&&o.save(...r),["prevent"])),title:t.strings.save},[d(g,{width:"20"})],8,Jt),s("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[7]||(i[7]=c((...r)=>o.cancel&&o.cancel(...r),["prevent"])),title:t.strings.cancel},[d(_,{width:"20"})],8,Qt)])):p("",!0)])],2)}const Xt=k(Vt,[["render",Wt]]),U=e=>(e=j(e),e=M(e),e=z(e),G(e),e.config.globalProperties.$truSeo=new F,e),Yt=(e,i)=>{U(I({name:"Standalone/PostsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>y(Ut)},{post:e,index:i})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.posts&&window.aioseo.posts.forEach((e,i)=>{x(`#${e.columnName}-${e.id}`,`aioseoPostsTable-${e.id}`),document.addEventListener("animationstart",function(l){`aioseoPostsTable-${e.id}`===l.animationName&&Yt(e,i)},{passive:!0})});const Zt=(e,i)=>{U(I({name:"Standalone/TermsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>y(Xt)},{term:e,index:i})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.terms&&window.aioseo.posts.length===0&&window.aioseo.terms.forEach((e,i)=>{x(`#${e.columnName}-${e.id}`,`aioseoTermsTable-${e.id}`),document.addEventListener("animationstart",function(l){`aioseoTermsTable-${e.id}`===l.animationName&&Zt(e,i)},{passive:!0})});
