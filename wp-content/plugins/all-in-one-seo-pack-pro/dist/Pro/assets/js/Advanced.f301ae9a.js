import{d as k,u as R}from"./links.138c5ae5.js";import{B as V}from"./Checkbox.349747c9.js";import{B as O}from"./RadioToggle.48072aa8.js";import{B as D}from"./Textarea.e4bb74d5.js";import{C as B,a as N}from"./index.63c9ec9d.js";import{C as I}from"./Card.c35b3a6c.js";import{C as P}from"./ExcludePosts.8f04d65e.js";import{C as U}from"./HtmlTagsEditor.1ba1c91b.js";import{C as M}from"./PostTypeOptions.9daaec29.js";import{C as $}from"./RobotsMeta.ae240276.js";import{C as K}from"./SettingsRow.7db26b8a.js";import{C as Q}from"./Tooltip.f932ed03.js";import{S as E}from"./External.a8a08ac9.js";import{r as g,c as _,g as t,w as r,o as c,a as i,y as l,d as m,b as p,C as h}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as z}from"./_plugin-vue_export-helper.d7c6d548.js";import"./default-i18n.cb62c1e5.js";import"./isArrayLikeObject.7cab3d31.js";import"./Checkmark.f214118b.js";import"./Caret.833cbb47.js";import"./Slide.b264e916.js";/* empty css                                            *//* empty css                                              */import"./constants.3cff9bad.js";import"./JsonValues.870a4901.js";/* empty css                                              */import"./AddPlus.c4e409c7.js";import"./tags.8f0eae2d.js";import"./Editor.2cae2b86.js";import"./UnfilteredHtml.8734f76e.js";import"./HighlightToggle.8b034f4a.js";import"./Radio.4c8191fb.js";import"./Row.eead99c7.js";const H={setup(){return{optionsStore:k(),rootStore:R()}},components:{BaseCheckbox:V,BaseRadioToggle:O,BaseTextarea:D,CoreAlert:B,CoreCard:I,CoreExcludePosts:P,CoreHtmlTagsEditor:U,CorePostTypeOptions:M,CoreRobotsMeta:$,CoreSettingsRow:K,CoreTooltip:Q,SvgCircleQuestionMark:N,SvgExternal:E},data(){return{emptyString:"",strings:{advanced:this.$t.__("Advanced Settings",this.$td),globalRobotsMeta:this.$t.__("Global Robots Meta",this.$td),noIndexEmptyCat:this.$t.__("Noindex Empty Category and Tag Archives",this.$td),removeStopWords:this.$t.__("Remove Stopwords from Permalinks",this.$td),autogenerateDescriptions:this.$t.__("Autogenerate Descriptions",this.$td),useContentForAutogeneratedDescriptions:this.$t.__("Use Content for Autogenerated Descriptions",this.$td),runShortcodes:this.$t.__("Run Shortcodes",this.$td),runShortcodesDescription:this.$t.sprintf(this.$t.__("This option allows you to control whether %1$s should parse shortcodes when generating data such as the SEO title/meta description. Enabling this setting may cause conflicts with third-party plugins/themes. %2$s",this.$td),"AIOSEO",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"runningShortcodes",!0)),runShortcodesWarning:this.$t.sprintf(this.$t.__("NOTE: Enabling this setting may cause conflicts with third-party plugins/themes. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"runningShortcodes",!0)),noPaginationForCanonical:this.$t.__("No Pagination for Canonical URLs",this.$td),useKeywords:this.$t.__("Use Meta Keywords",this.$td),useKeywordsDescription:this.$t.__("This option allows you to toggle the use of Meta Keywords throughout the whole of the site.",this.$td),useCategoriesForMetaKeywords:this.$t.__("Use Categories for Meta Keywords",this.$td),useCategoriesDescription:this.$t.__("Check this if you want your categories for a given post used as the Meta Keywords for this post (in addition to any keywords you specify on the Edit Post screen).",this.$td),useTagsForMetaKeywords:this.$t.__("Use Tags for Meta Keywords",this.$td),removeUnrecognizedQueryArgs:this.$t.__("Remove Query Args",this.$td),removeUnrecognizedQueryArgsDescription:this.$t.__("Enable this option to remove any unrecognized query args from your site.",this.$td),removeUnrecognizedQueryArgsAlert:this.$t.__("This will help prevent search engines from crawling every variation of your pages with all the unrecognized query arguments. Only enable this if you understand exactly what it does as it can have a significant impact on your site.",this.$td),allowedQueryArgs:this.$t.__("Allowed Query Args",this.$td),allowedQueryArgsDescription:this.$t.sprintf(this.$t.__('Add any query args that you want to allow, one per line. You can also use regular expressions here for advanced use. All query args that are used by WordPress Core (e.g. "s" for search pages) are automatically whitelisted by default. %1$s',this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0)),useTagsDescription:this.$t.__("Check this if you want your tags for a given post used as the Meta Keywords for this post (in addition to any keywords you specify on the Edit Post screen).",this.$td),dynamicallyGenerateKeywords:this.$t.__("Dynamically Generate Meta Keywords",this.$td),dynamicallyGenerateDescription:this.$t.__("Check this if you want your keywords on your Posts page (set in WordPress under Settings, Reading, Front Page Displays) and your archive pages to be dynamically generated from the keywords of the posts showing on that page. If unchecked, it will use the keywords set in the edit page screen for the posts page.",this.$td),pagedFormat:this.$t.__("Paged Format",this.$td),pagedFormatDescription:this.$t.__("This string gets appended to the titles and descriptions of paginated pages (like term or archive pages).",this.$td),descriptionFormat:this.$t.__("Description Format",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),sitelinks:this.$t.__("Enable Sitelinks Search Box",this.$td),sitelinksDescription:this.$t.sprintf(this.$t.__("Choose whether %1$s should output the required schema markup that Google needs to generate a sitelinks search box.",this.$td),"AIOSEO"),descriptionTagRequired:this.$t.__("A Description tag is required in order to properly display your meta descriptions on your site.",this.$td),crawlCleanup:this.$t.__("Crawl Cleanup",this.$td),crawlCleanupDescription:this.$t.__("Removing unrecognized query arguments from URLs and disabling unnecessary RSS feeds can help save search engine crawl quota and speed up content indexing for larger sites. If you choose to disable any feeds, those feed links will automatically redirect to your homepage or applicable archive page.",this.$td),globalFeed:this.$t.__("Global RSS Feed",this.$td),globalFeedDescription:this.$t.__("The global RSS feed is how users subscribe to any new content that has been created on your site.",this.$td),openYourRssFeed:this.$t.__("Open Your RSS Feed",this.$td),disableGlobalFeedAlert:this.$t.__("Disabling the global RSS feed is NOT recommended. This will prevent users from subscribing to your content and can hurt your SEO rankings.",this.$td),globalCommentsFeed:this.$t.__("Global Comments RSS Feed",this.$td),globalCommentsFeedDescription:this.$t.__("The global comments feed allows users to subscribe to any new comments added to your site.",this.$td),openYourCommentsRssFeed:this.$t.__("Open Your Comments RSS Feed",this.$td),staticBlogPageFeed:this.$t.__("Static Posts Page Feed",this.$td),staticBlogPageFeedDescription:this.$t.__("The static posts page feed allows users to subscribe to any new content added to your blog page.",this.$td),openYourStaticBlogPageFeed:this.$t.__("Open Your Static Posts Page RSS Feed",this.$td),authorsFeed:this.$t.__("Author Feeds",this.$td),authorsFeedDescription:this.$t.__("The authors feed allows your users to subscribe to any new content written by a specific author.",this.$td),postCommentsFeed:this.$t.__("Post Comment Feeds",this.$td),postCommentsFeedDescription:this.$t.__("The post comments feed allows your users to subscribe to any new comments on a specific page or post.",this.$td),searchFeed:this.$t.__("Search Feed",this.$td),searchFeedDescription:this.$t.__("The search feed allows visitors to subscribe to your content based on a specific search term.",this.$td),attachmentsFeed:this.$t.__("Attachments Feed",this.$td),attachmentsFeedDescription:this.$t.__("The attachments feed allows users to subscribe to any changes to your site made to media file categories.",this.$td),postTypesFeed:this.$t.__("Post Type Archive Feeds",this.$td),includeAllPostTypes:this.$t.__("Include All Post Type Archives",this.$td),selectPostTypes:this.$t.__("Select which post type archives should include an RSS feed. This only applies to post types that include an archive page.",this.$td),taxonomiesFeed:this.$t.__("Taxonomy Feeds",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies should include an RSS feed.",this.$td),atomFeed:this.$t.__("Atom Feed",this.$td),atomFeedDescription:this.$t.sprintf(this.$t.__("This is a global feed of your site output in the Atom format. %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,"http://www.atomenabled.org/",!0)),openYourAtomFeed:this.$t.__("Open Your Atom Feed",this.$td),rdfFeed:this.$t.__("RDF/RSS 1.0 Feed",this.$td),rdfFeedDescription:this.$t.sprintf(this.$t.__("This is a global feed of your site output in the RDF/RSS 1.0 format. %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,"https://web.resource.org/rss/1.0/",!0)),openYourRdfFeed:this.$t.__("Open Your RDF Feed",this.$td),paginatedFeed:this.$t.__("Paginated RSS Feeds",this.$td),paginatedFeedDescription:this.$t.__("The paginated RSS feeds are for any posts or pages that are paginated.",this.$td)}}}},Y={class:"aioseo-search-appearance-advanced"},q={class:"aioseo-description"},x={class:"aioseo-description"},W={class:"aioseo-description"},j={class:"aioseo-description"},J={class:"aioseo-description"},X=["innerHTML"],Z={class:"aioseo-description"},ee=["innerHTML"],oe={class:"aioseo-settings-row aioseo-section-description"},te=["innerHTML"],se={key:0,class:"aioseo-description"},ne=["innerHTML"],ae={key:0,class:"aioseo-description"},re={class:"rss-link"},ie=["href"],le=["href"],de={class:"aioseo-description"},ce={key:0,class:"aioseo-description"},pe=["href"],ue=["href"],me={class:"aioseo-description"},he={key:0,class:"aioseo-description"},ge=["href"],_e=["href"],Se={class:"aioseo-description"},ve={class:"aioseo-description"},fe={class:"aioseo-description"},ye={class:"aioseo-description"},Ae={class:"aioseo-description"},be={class:"aioseo-description"},we={class:"aioseo-description"},Ce=["innerHTML"],Le={key:0,class:"aioseo-description"},Fe=["href"],Te=["href"],Ge=["innerHTML"],ke={key:0,class:"aioseo-description"},Re=["href"],Ve=["href"];function Oe(a,s,De,e,o,Be){const C=g("core-robots-meta"),d=g("core-settings-row"),u=g("base-radio-toggle"),f=g("core-html-tags-editor"),v=g("core-alert"),y=g("core-exclude-posts"),A=g("core-card"),L=g("base-toggle"),F=g("svg-circle-question-mark"),T=g("core-tooltip"),G=g("base-textarea"),S=g("svg-external"),b=g("base-checkbox"),w=g("core-post-type-options");return c(),_("div",Y,[t(A,{slug:"searchAdvanced","header-text":o.strings.advanced},{default:r(()=>[t(d,{name:o.strings.globalRobotsMeta},{content:r(()=>[t(C,{options:e.optionsStore.options.searchAppearance.advanced.globalRobotsMeta,global:""},null,8,["options"])]),_:1},8,["name"]),t(d,{name:o.strings.sitelinks,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.sitelinks,"onUpdate:modelValue":s[0]||(s[0]=n=>e.optionsStore.options.searchAppearance.advanced.sitelinks=n),name:o.strings.sitelinks,options:[{label:a.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","name","options"]),i("div",q,l(o.strings.sitelinksDescription),1)]),_:1},8,["name"]),e.optionsStore.internalOptions.internal.deprecatedOptions.includes("autogenerateDescriptions")?(c(),m(d,{key:0,name:o.strings.autogenerateDescriptions,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.deprecated.searchAppearance.advanced.autogenerateDescriptions,"onUpdate:modelValue":s[1]||(s[1]=n=>e.optionsStore.options.deprecated.searchAppearance.advanced.autogenerateDescriptions=n),name:"autogenerateDescriptions",options:[{label:a.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):p("",!0),e.optionsStore.internalOptions.internal.deprecatedOptions.includes("useContentForAutogeneratedDescriptions")&&(!e.optionsStore.internalOptions.internal.deprecatedOptions.includes("autogenerateDescriptions")||e.optionsStore.options.deprecated.searchAppearance.advanced.autogenerateDescriptions)?(c(),m(d,{key:1,name:o.strings.useContentForAutogeneratedDescriptions,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.deprecated.searchAppearance.advanced.useContentForAutogeneratedDescriptions,"onUpdate:modelValue":s[2]||(s[2]=n=>e.optionsStore.options.deprecated.searchAppearance.advanced.useContentForAutogeneratedDescriptions=n),name:"useContentForAutogeneratedDescriptions",options:[{label:a.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):p("",!0),t(d,{name:o.strings.noPaginationForCanonical,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.noPaginationForCanonical,"onUpdate:modelValue":s[3]||(s[3]=n=>e.optionsStore.options.searchAppearance.advanced.noPaginationForCanonical=n),name:"noPaginationForCanonical",options:[{label:a.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"]),t(d,{name:o.strings.useKeywords,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.useKeywords,"onUpdate:modelValue":s[4]||(s[4]=n=>e.optionsStore.options.searchAppearance.advanced.useKeywords=n),name:"useKeywords",options:[{label:a.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),i("div",x,l(o.strings.useKeywordsDescription),1)]),_:1},8,["name"]),e.optionsStore.options.searchAppearance.advanced.useKeywords?(c(),m(d,{key:2,name:o.strings.useCategoriesForMetaKeywords,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.useCategoriesForMetaKeywords,"onUpdate:modelValue":s[5]||(s[5]=n=>e.optionsStore.options.searchAppearance.advanced.useCategoriesForMetaKeywords=n),name:"useCategoriesForMetaKeywords",options:[{label:a.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),i("div",W,l(o.strings.useCategoriesDescription),1)]),_:1},8,["name"])):p("",!0),e.optionsStore.options.searchAppearance.advanced.useKeywords?(c(),m(d,{key:3,name:o.strings.useTagsForMetaKeywords,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.useTagsForMetaKeywords,"onUpdate:modelValue":s[6]||(s[6]=n=>e.optionsStore.options.searchAppearance.advanced.useTagsForMetaKeywords=n),name:"useTagsForMetaKeywords",options:[{label:a.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),i("div",j,l(o.strings.useTagsDescription),1)]),_:1},8,["name"])):p("",!0),e.optionsStore.options.searchAppearance.advanced.useKeywords?(c(),m(d,{key:4,name:o.strings.dynamicallyGenerateKeywords,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.dynamicallyGenerateKeywords,"onUpdate:modelValue":s[7]||(s[7]=n=>e.optionsStore.options.searchAppearance.advanced.dynamicallyGenerateKeywords=n),name:"dynamicallyGenerateKeywords",options:[{label:a.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),i("div",J,l(o.strings.dynamicallyGenerateDescription),1)]),_:1},8,["name"])):p("",!0),e.optionsStore.internalOptions.internal.deprecatedOptions.includes("descriptionFormat")?(c(),m(d,{key:5,id:"description-format",name:o.strings.descriptionFormat,align:""},{content:r(()=>[t(f,{class:"description-format",modelValue:e.optionsStore.options.deprecated.searchAppearance.global.descriptionFormat,"onUpdate:modelValue":s[8]||(s[8]=n=>e.optionsStore.options.deprecated.searchAppearance.global.descriptionFormat=n),"line-numbers":!1,single:"","show-tags-description":!1,"tags-context":"descriptionFormat","default-tags":["description","site_title","tagline"],"show-all-tags-link":!0},{"tags-description":r(()=>[h(l(o.emptyString),1)]),_:1},8,["modelValue"]),e.optionsStore.options.deprecated.searchAppearance.global.descriptionFormat.includes("#description")?p("",!0):(c(),m(v,{key:0,class:"description-notice",type:"red"},{default:r(()=>[h(l(o.strings.descriptionTagRequired),1)]),_:1}))]),_:1},8,["name"])):p("",!0),t(d,{name:o.strings.runShortcodes,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.runShortcodes,"onUpdate:modelValue":s[9]||(s[9]=n=>e.optionsStore.options.searchAppearance.advanced.runShortcodes=n),name:"runShortcodes",options:[{label:a.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","options"]),e.optionsStore.options.searchAppearance.advanced.runShortcodes?(c(),m(v,{key:0,class:"run-shortcodes-alert",type:"yellow",innerHTML:o.strings.runShortcodesWarning},null,8,["innerHTML"])):p("",!0),i("div",{class:"aioseo-description",innerHTML:o.strings.runShortcodesDescription},null,8,X)]),_:1},8,["name"]),t(d,{name:o.strings.pagedFormat,align:""},{content:r(()=>[t(f,{class:"paged-format",modelValue:e.optionsStore.options.searchAppearance.advanced.pagedFormat,"onUpdate:modelValue":s[10]||(s[10]=n=>e.optionsStore.options.searchAppearance.advanced.pagedFormat=n),"line-numbers":!1,single:"","tags-context":"pagedFormat","default-tags":["page_number"],"show-all-tags-link":!1},{"tags-description":r(()=>[h(l(o.emptyString),1)]),_:1},8,["modelValue"]),i("div",Z,l(o.strings.pagedFormatDescription),1)]),_:1},8,["name"]),e.optionsStore.internalOptions.internal.deprecatedOptions.includes("excludePosts")?(c(),m(d,{key:6,name:o.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:r(()=>[t(y,{options:e.optionsStore.options.deprecated.searchAppearance.advanced,type:"posts"},null,8,["options"])]),_:1},8,["name"])):p("",!0),e.optionsStore.internalOptions.internal.deprecatedOptions.includes("excludeTerms")?(c(),m(d,{key:7,name:o.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:r(()=>[t(y,{options:e.optionsStore.options.deprecated.searchAppearance.advanced,type:"terms"},null,8,["options"])]),_:1},8,["name"])):p("",!0)]),_:1},8,["header-text"]),t(A,{class:"aioseo-rss-content-advanced",slug:"searchAdvancedCrawlCleanup",toggles:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable},{header:r(()=>[t(L,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable,"onUpdate:modelValue":s[11]||(s[11]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable=n)},null,8,["modelValue"]),i("span",null,l(o.strings.crawlCleanup),1),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable?p("",!0):(c(),m(T,{key:0},{tooltip:r(()=>[h(l(o.strings.crawlCleanupDescription)+" ",1),i("span",{innerHTML:a.$links.getDocLink(a.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0)},null,8,ee)]),default:r(()=>[t(F)]),_:1}))]),default:r(()=>[i("div",oe,[h(l(o.strings.crawlCleanupDescription)+" ",1),i("span",{innerHTML:a.$links.getDocLink(a.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0)},null,8,te)]),t(d,{name:o.strings.removeUnrecognizedQueryArgs,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs,"onUpdate:modelValue":s[12]||(s[12]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs=n),name:"removeUnrecognizedQueryArgs",options:[{label:a.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?p("",!0):(c(),_("div",se,l(o.strings.removeUnrecognizedQueryArgsDescription)+" "+l(o.strings.removeUnrecognizedQueryArgsAlert),1)),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?(c(),m(v,{key:1,type:"yellow"},{default:r(()=>[h(l(o.strings.removeUnrecognizedQueryArgsAlert),1)]),_:1})):p("",!0)]),_:1},8,["name"]),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?(c(),m(d,{key:0,name:o.strings.allowedQueryArgs},{content:r(()=>[t(G,{minHeight:200,maxHeight:200,modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.allowedQueryArgs,"onUpdate:modelValue":s[13]||(s[13]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.allowedQueryArgs=n)},null,8,["modelValue"]),i("div",{class:"aioseo-description",innerHTML:o.strings.allowedQueryArgsDescription},null,8,ne)]),_:1},8,["name"])):p("",!0),t(d,{id:"crawl-content-global-feed",name:o.strings.globalFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global,"onUpdate:modelValue":s[14]||(s[14]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global=n),name:"global",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global?(c(),_("div",ae,[h(l(o.strings.globalFeedDescription)+" "+l(o.strings.disableGlobalFeedAlert)+" ",1),i("div",re,[i("a",{href:e.rootStore.aioseo.urls.feeds.global,target:"_blank"},l(o.strings.openYourRssFeed),9,ie),i("a",{class:"no-underline",href:e.rootStore.aioseo.urls.feeds.global,target:"_blank"},[h(" "),t(S)],8,le)])])):p("",!0),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global?p("",!0):(c(),m(v,{key:1,type:"red"},{default:r(()=>[h(l(o.strings.disableGlobalFeedAlert),1)]),_:1}))]),_:1},8,["name"]),t(d,{name:o.strings.globalCommentsFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.globalComments,"onUpdate:modelValue":s[15]||(s[15]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.globalComments=n),name:"globalComments",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",de,l(o.strings.globalCommentsFeedDescription),1),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.globalComments?(c(),_("div",ce,[i("a",{href:e.rootStore.aioseo.urls.feeds.globalComments,target:"_blank"},l(o.strings.openYourCommentsRssFeed),9,pe),i("a",{class:"no-underline",href:e.rootStore.aioseo.urls.feeds.globalComments,target:"_blank"},[h(" "),t(S)],8,ue)])):p("",!0)]),_:1},8,["name"]),e.rootStore.aioseo.data.staticBlogPage?(c(),m(d,{key:1,name:o.strings.staticBlogPageFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage,"onUpdate:modelValue":s[16]||(s[16]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage=n),name:"staticBlogPage",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",me,l(o.strings.staticBlogPageFeedDescription),1),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage?(c(),_("div",he,[i("a",{href:e.rootStore.aioseo.urls.feeds.staticBlogPage,target:"_blank"},l(o.strings.openYourStaticBlogPageFeed),9,ge),i("a",{class:"no-underline",href:e.rootStore.aioseo.urls.feeds.staticBlogPage,target:"_blank"},[h(" "),t(S)],8,_e)])):p("",!0)]),_:1},8,["name"])):p("",!0),t(d,{name:o.strings.authorsFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.authors,"onUpdate:modelValue":s[17]||(s[17]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.authors=n),name:"authors",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",Se,l(o.strings.authorsFeedDescription),1)]),_:1},8,["name"]),t(d,{name:o.strings.postCommentsFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.postComments,"onUpdate:modelValue":s[18]||(s[18]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.postComments=n),name:"postComments",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",ve,l(o.strings.postCommentsFeedDescription),1)]),_:1},8,["name"]),t(d,{name:o.strings.searchFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.search,"onUpdate:modelValue":s[19]||(s[19]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.search=n),name:"search",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",fe,l(o.strings.searchFeedDescription),1)]),_:1},8,["name"]),t(d,{name:o.strings.attachmentsFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.attachments,"onUpdate:modelValue":s[20]||(s[20]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.attachments=n),name:"attachments",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",ye,l(o.strings.attachmentsFeedDescription),1)]),_:1},8,["name"]),t(d,{name:o.strings.paginatedFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.paginated,"onUpdate:modelValue":s[21]||(s[21]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.paginated=n),name:"paginated",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",Ae,l(o.strings.paginatedFeedDescription),1)]),_:1},8,["name"]),e.rootStore.aioseo.postData.archives.length?(c(),m(d,{key:2,name:o.strings.postTypesFeed},{content:r(()=>[t(b,{size:"medium",modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.archives.all,"onUpdate:modelValue":s[22]||(s[22]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.archives.all=n)},{default:r(()=>[h(l(o.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.archives.all?p("",!0):(c(),m(w,{key:0,options:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds,type:"archives"},null,8,["options"])),i("div",be,l(o.strings.selectPostTypes),1)]),_:1},8,["name"])):p("",!0),t(d,{name:o.strings.taxonomiesFeed},{content:r(()=>[t(b,{size:"medium",modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all,"onUpdate:modelValue":s[23]||(s[23]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all=n)},{default:r(()=>[h(l(o.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all?p("",!0):(c(),m(w,{key:0,options:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds,type:"taxonomies"},null,8,["options"])),i("div",we,l(o.strings.selectTaxonomies),1)]),_:1},8,["name"]),t(d,{name:o.strings.atomFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.atom,"onUpdate:modelValue":s[24]||(s[24]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.atom=n),name:"atom",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",{class:"aioseo-description",innerHTML:o.strings.atomFeedDescription},null,8,Ce),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.atom?(c(),_("div",Le,[i("a",{href:e.rootStore.aioseo.urls.feeds.atom,target:"_blank"},l(o.strings.openYourAtomFeed),9,Fe),i("a",{class:"no-underline",href:e.rootStore.aioseo.urls.feeds.atom,target:"_blank"},[h(" "),t(S)],8,Te)])):p("",!0)]),_:1},8,["name"]),t(d,{name:o.strings.rdfFeed,align:""},{content:r(()=>[t(u,{modelValue:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.rdf,"onUpdate:modelValue":s[25]||(s[25]=n=>e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.rdf=n),name:"rdf",options:[{label:a.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),i("div",{class:"aioseo-description",innerHTML:o.strings.rdfFeedDescription},null,8,Ge),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.rdf?(c(),_("div",ke,[i("a",{href:e.rootStore.aioseo.urls.feeds.rdf,target:"_blank"},l(o.strings.openYourRdfFeed),9,Re),i("a",{class:"no-underline",href:e.rootStore.aioseo.urls.feeds.rdf,target:"_blank"},[h(" "),t(S)],8,Ve)])):p("",!0)]),_:1},8,["name"])]),_:1},8,["toggles"])])}const ho=z(H,[["render",Oe]]);export{ho as default};
