(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{134:function(t,e,s){"use strict";var n=s(50);s.n(n).a},179:function(t,e,s){"use strict";var n=s(61);s.n(n).a},181:function(t,e,s){"use strict";var n=s(63);s.n(n).a},188:function(t,e,s){"use strict";var n=s(70),i=s(105),a={components:{NavLink:n.a,DropdownTransition:i.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},o=(s(179),s(0)),r=Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[s("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[s("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),s("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),s("DropdownTransition",[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,n){return s("li",{key:e.link||n,staticClass:"dropdown-item"},["links"===e.type?s("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?s("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return s("li",{key:t.link,staticClass:"dropdown-subitem"},[s("NavLink",{attrs:{item:t}})],1)}),0):s("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null);e.a=r.exports},193:function(t,e,s){"use strict";s.r(e);var n=s(190),i=s(124),a=(s(82),s(128),s(129),s(130),s(131),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,s=this.$localePath,n=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],a=0;a<e.length&&!(i.length>=5);a++){var o=e[a];if(this.getPageLocalePath(o)===s&&this.isSearchable(o))if(n(o))i.push(o);else if(o.headers)for(var r=0;r<o.headers.length&&!(i.length>=5);r++){var l=o.headers[r];n(l)&&i.push(Object.assign({},o,{path:o.path+"#"+l.slug,header:l}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),o=(s(134),s(0)),r=Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?s("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,n){return s("li",{staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[s("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[s("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?s("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports,l=s(192),u=s(104);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var h={components:{SidebarButton:l.a,NavLinks:u.a,SearchBox:r,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),s=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};s(),window.addEventListener("resize",s,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},d=(s(181),Object(o.a)(h,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"navbar"},[s("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),s("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?s("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?s("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),s("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?s("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?s("SearchBox"):t._e(),t._v(" "),s("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports),f=s(189),g=s(191),p=s(19),m={components:{Home:n.a,Page:f.a,Sidebar:g.a,Navbar:d},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(p.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},v=(s(186),Object(o.a)(m,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),s("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?s("Home"):s("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=v.exports},50:function(t,e,s){},61:function(t,e,s){},63:function(t,e,s){}}]);