(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-078ae77a"],{"0160":function(t,e,s){},"0339":function(t,e,s){"use strict";s("8c5e")},"1e06":function(t,e,s){"use strict";var i=s("5530"),n=(s("c96a"),s("58df")),a=s("9d26"),o=s("7560"),r=s("a9ad"),l=Object(n["a"])(r["a"],o["a"]);e["a"]=l.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(a["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(i["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(i["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}})},"20c5":function(t,e,s){t.exports=s.p+"img/music.f8a43b92.gif"},"3c93":function(t,e,s){t.exports=s.p+"img/program.995a68cf.gif"},"7da9":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"about"},[s("index")],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.is_screen_small?s("mobile",{attrs:{stuffDatas:t.stuffDatas}}):t.is_screen_large?s("desktop",{attrs:{stuffDatas:t.stuffDatas}}):s("pad",{attrs:{stuffDatas:t.stuffDatas}})],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{display:"block",height:"90px"}}),s("v-container",{staticClass:"pa-2",attrs:{fluid:""}},[s("timeline",{attrs:{cols:3,stuffDatas:t.stuffDatas,lines:2}})],1),s("div",{staticStyle:{display:"block",height:"90px"}})],1)},l=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.cols?s("v-row",{attrs:{justify:"center",align:"start"}},t._l(t.datas,(function(e,i){return s("v-col",{key:i,attrs:{cols:t.cols}},[s("v-timeline",{attrs:{reverse:""}},t._l(e,(function(e,i){return s("v-timeline-item",{key:i,attrs:{color:"secondary",small:"",icon:"mdi-eye"}},[s("v-card-title",{staticClass:"text-center pa-0 ma-0",staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(e.job)+" "),e.subjob?s("small",[t._v(" | "+t._s(e.subjob))]):t._e()]),s("v-img",{attrs:{src:e.src}}),t._l(e.profile,(function(e){return s("v-card-subtitle",{key:e,staticClass:"text-center pa-0 ma-0",staticStyle:{"white-space":"nowrap"}},[s("br"),t._v(t._s(e)),s("br")])}))],2)})),1)],1)})),1):t._e()],1)},u=[],f={props:["cols","stuffDatas","lines"],data:function(){return{datas:[]}},components:{},computed:{},mounted:function(){for(var t=this.lines,e=this.stuffDatas.length,s=e/t,i=0;i<t;i++){for(var n=[],a=i*s;a<i*s+s;a++)n.push(this.stuffDatas[a]);this.datas.push(n)}}},m=f,d=s("2877"),p=s("6544"),v=s.n(p),h=s("99d9"),b=s("62ad"),_=s("adda"),g=s("0fd9"),D=s("8414"),y=s("1e06"),C=Object(d["a"])(m,c,u,!1,null,null,null),j=C.exports;v()(C,{VCardSubtitle:h["b"],VCardTitle:h["d"],VCol:b["a"],VImg:_["a"],VRow:g["a"],VTimeline:D["a"],VTimelineItem:y["a"]});var x={props:["stuffDatas"],components:{timeline:j},computed:{},mounted:function(){}},$=x,k=s("a523"),w=Object(d["a"])($,r,l,!1,null,null,null),V=w.exports;v()(w,{VContainer:k["a"]});var E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{display:"block",height:"70px"}}),s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"9"}},t._l(t.stuffDatas,(function(e,i){return s("v-card",{key:i,attrs:{flat:"",color:"black"}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-card-subtitle",{staticClass:"text-center pa-0 ma-0"},[t._v(" "+t._s(e.job)+" "),e.subjob?s("small",[t._v(" | "+t._s(e.subjob))]):t._e()])],1),s("v-col",{attrs:{cols:"6"}},[s("v-img",{staticStyle:{position:"relative",top:"-20px"},attrs:{src:e.src}}),t._l(e.profile,(function(e){return s("v-card-subtitle",{key:e,staticClass:"text-center pa-0 ma-0",staticStyle:{position:"relative",top:"-30px"}},[s("br"),t._v(t._s(e)),s("br")])})),s("hr")],2)],1)],1)})),1)],1)],1),s("div",{staticStyle:{display:"block",height:"70px"}})],1)},S=[],O={props:["stuffDatas"],data:function(){return{}},components:{},computed:{},mounted:function(){}},B=O,I=s("b0af"),T=Object(d["a"])(B,E,S,!1,null,null,null),A=T.exports;v()(T,{VCard:I["a"],VCardSubtitle:h["b"],VCol:b["a"],VContainer:k["a"],VImg:_["a"],VRow:g["a"]});var J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{display:"block",height:"90px"}}),s("v-container",{attrs:{fluid:""}},[s("timeline",{attrs:{cols:5,stuffDatas:t.stuffDatas,lines:2}})],1)],1)},M=[],R={props:["stuffDatas"],components:{timeline:j},computed:{},mounted:function(){}},G=R,P=Object(d["a"])(G,J,M,!1,null,null,null),q=P.exports;v()(P,{VContainer:k["a"]});var z={components:{desktop:V,mobile:A,pad:q},data:function(){return{stuffDatas:[{job:"Director",subjob:"Artist",profile:["李予棠"],src:s("9e92")},{job:"Music",profile:["陳向琥"],src:s("20c5")},{job:"Game Developer",profile:["崔元煜"],src:s("3c93")},{job:"Programming",profile:["薛賀升"],src:s("3c93")}]}},computed:{is_screen_small:function(){return this.$vuetify.breakpoint.xs},is_screen_large:function(){return this.$vuetify.breakpoint.lg}},mounted:function(){}},F=z,H=Object(d["a"])(F,a,o,!1,null,null,null),K=H.exports,L={name:"About",metaInfo:{title:"About"},components:{index:K},mounted:function(){document.dispatchEvent(new Event("render-event")),this.$store.commit("setDrawerModel",1)}},N=L,Q=(s("0339"),s("7496")),U=Object(d["a"])(N,i,n,!1,null,null,null);e["default"]=U.exports;v()(U,{VApp:Q["a"]})},8414:function(t,e,s){"use strict";var i=s("5530"),n=(s("0160"),s("58df")),a=s("7560");e["a"]=Object(n["a"])(a["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(i["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})},"8c5e":function(t,e,s){},"9d26":function(t,e,s){"use strict";var i=s("132d");e["a"]=i["a"]},"9e92":function(t,e,s){t.exports=s.p+"img/art.73753fd4.gif"}}]);
//# sourceMappingURL=chunk-078ae77a.6a25167e.js.map