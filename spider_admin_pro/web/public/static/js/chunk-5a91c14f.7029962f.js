(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a91c14f"],{"24bc":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-select",t._b({attrs:{placeholder:"选择项目"},model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-select",t.$attrs,!1),t._l(t.list,(function(t){return r("el-option",{attrs:{label:t.project,value:t.project}})})),1)},i=[],o=(r("96cf"),r("1da1")),a={name:"",props:{value:{type:String}},components:{},data:function(){return{list:[]}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydListProjects();case 2:e=t.sent,this.list=e.data,this.$emit("on-init",e.data);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},s=a,c=r("2877"),l=Object(c["a"])(s,n,i,!1,null,"54ef52cb",null);e["a"]=l.exports},3629:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-autocomplete",t._g(t._b({attrs:{"fetch-suggestions":t.querySearch,placeholder:"搜索Spider名",clearable:""},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[r("span",[t._v(t._s(n.spider))])]}}]),model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-autocomplete",t.$attrs,!1),t.$listeners))},i=[],o=(r("96cf"),r("1da1")),a={name:"",props:{value:{type:String},project:{type:String}},components:{},data:function(){return{list:[]}},watch:{project:{handler:function(t){t?this.getData():this.list=[]},immediate:!0}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{querySearch:function(t,e){var r=t?this.filterItem(t):this.list;e(r)},filterItem:function(t){return this.list.filter((function(e){return 0==e.spider.toLowerCase().indexOf(t.toLowerCase())}))},handleSelect:function(t){this._value=t.spider,this.$emit("change",t.spider)},getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.list=[],t.next=3,this.$Http.scrapydlistSpiders({project:this.project});case 3:e=t.sent,this.list=e.data,this.$emit("on-init",e.data);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){}},s=a,c=r("2877"),l=Object(c["a"])(s,n,i,!1,null,"8565e4cc",null);e["a"]=l.exports},"479c":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-button",t._b({attrs:{size:"mini",icon:"el-icon-video-play"},on:{click:t.handleSchedule}},"el-button",t.$attrs,!1))},i=[],o=(r("96cf"),r("1da1")),a={name:"",props:{spider:{type:String},project:{type:String},options:{type:String}},components:{},data:function(){return{}},computed:{},methods:{handleSchedule:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydSchedule({project:this.project,spider:this.spider,options:this.options});case 2:e=t.sent,0==e.code?this.$message.success("运行成功"):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){}},s=a,c=r("2877"),l=Object(c["a"])(s,n,i,!1,null,"7097e7d0",null);e["a"]=l.exports},"63d3":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{},[t.job_id?r("el-button",t._b({attrs:{size:"mini",icon:"el-icon-edit-outline"},on:{click:t.handleDialogVisibleClick}},"el-button",t.$attrs,!1)):r("el-button",t._b({attrs:{size:"mini",icon:"el-icon-document-add"},on:{click:t.handleDialogVisibleClick}},"el-button",t.$attrs,!1),[t._v("添加")]),t._v(" "),r("el-dialog",{attrs:{title:t.btnText+"任务",visible:t.dialogVisible,width:"500px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{ref:"form",attrs:{model:t.form,"status-icon":"","label-width":"100px",size:"small",rules:t.rules}},[r("el-form-item",{attrs:{label:"项目名称",prop:"project",width:"300px"}},[r("ProjectSelect",{staticStyle:{width:"300px"},attrs:{value:t.form.project,disabled:null!=t.project||null!=t.job_id},on:{"update:value":function(e){return t.$set(t.form,"project",e)},"on-init":t.handleProjectSelectInit}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Spider名称",prop:"spider",width:"300px"}},[r("SpiderSearch",{staticStyle:{width:"300px"},attrs:{project:t.form.project,value:t.form.spider,disabled:null!=t.spider||null!=t.job_id},on:{"update:value":function(e){return t.$set(t.form,"spider",e)},"on-init":t.handleSpiderSearchInit}})],1),t._v(" "),r("el-form-item",{attrs:{label:"cron表达式",prop:"cron"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"分 时 日 月 周"},model:{value:t.form.cron,callback:function(e){t.$set(t.form,"cron",e)},expression:"form.cron"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"其他参数",prop:"options"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:"3",placeholder:'any parameter is passed as spider args eg:{"setting": "DOWNLOAD_DELAY=2"}'},model:{value:t.form.options,callback:function(e){t.$set(t.form,"options",e)},expression:"form.options"}})],1)],1),t._v(" "),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},i=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),a=(r("96cf"),r("1da1")),s=(r("28a5"),r("24bc")),c=r("3629");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"",props:{job_id:{type:String,default:null},project:{type:String,default:null},spider:{type:String,default:null}},components:{ProjectSelect:s["a"],SpiderSearch:c["a"]},data:function(){var t=function(t,e,r){if(!e)return r(new Error("cron表达式不能为空"));var n=e.split(" ").filter((function(t){return""!=t.trim()}));if(5!=n.length)return r(new Error("cron表达式不正确"));r()},e=function(t,e,r){if(e)try{JSON.parse(e)}catch(n){return r(new Error("参数不是json字符串"))}r()};return{dialogVisible:!1,form:{project:"",spider:"",cron:"* * * * *",options:""},rules:{project:{required:!0,message:"项目名称必须填写",trigger:"blur"},spider:{required:!0,message:"Spider名称必须填写",trigger:"change"},cron:{required:!0,validator:t,trigger:"blur"},options:{required:!1,validator:e,trigger:"blur"}}}},computed:{btnText:function(){return this.job_id?"修改":"添加"},icon:function(){return this.job_id?"el-icon-edit-outline":"el-icon-document-add"}},watch:{dialogVisible:function(t){}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scheduleJobDetail({job_id:this.job_id});case 2:e=t.sent,this.form=e.data.kwargs;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),submit:function(){var t=this;this.$refs.form.validate((function(e){e&&t.addVersion()}))},addVersion:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scheduleAddJob(u({job_id:this.job_id},this.form));case 2:e=t.sent,0==e.code?(this.$message.success("添加成功"),this.$emit("success"),this.$refs.form.resetFields(),this.dialogVisible=!1):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleDialogVisibleClick:function(){this.dialogVisible=!0,this.project&&(this.form.project=this.project),this.spider&&(this.form.spider=this.spider),this.job_id&&this.getData(),this.$refs.form&&this.$refs.form.clearValidate()},handleProjectSelectInit:function(t){this.form.project||t&&t.length>0&&(this.form.project=t[0].project)},handleSpiderSearchInit:function(t){this.form.spider||t&&t.length>0&&(this.form.spider=t[0].spider)}},created:function(){}},d=p,f=r("2877"),h=Object(f["a"])(d,n,i,!1,null,"b893f71c",null);e["a"]=h.exports},f96b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("SpiderTool",{attrs:{project:t.project},on:{"update:project":function(e){t.project=e},"project-change":t.handleProjcetChange,"on-init":t.handleSpiderToolInit}}),t._v(" "),r("div",{staticStyle:{height:"20px"}}),t._v(" "),r("SpiderTable",{attrs:{data:t.list,project:t.project}})],1)},i=[],o=(r("96cf"),r("1da1")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mo-table",t._g(t._b({},"mo-table",t.$attrs,!1),t.$listeners),[r("el-table-column",{attrs:{align:"center",label:"序号",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.$index+1)+"\n    ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Spider名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.spider)+"\n    ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"调度日志",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{attrs:{to:{name:"schedule-log-list",query:{project:t.project,spider:e.row.spider}},target:"_blank"}},[r("i",{staticClass:"el-icon-document"}),t._v(" 日志")])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"运行统计",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{attrs:{to:{name:"stats-list",query:{project:t.project,spider:e.row.spider}},target:"_blank"}},[r("i",{staticClass:"el-icon-document"}),t._v(" 统计")])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"运行日志",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{attrs:{to:{name:"logs-project-spider",params:{project:t.project,spider:e.row.spider}},target:"_blank"}},[r("i",{staticClass:"el-icon-document"}),t._v(" 日志")])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"添加任务",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("ScheduleAdd",{attrs:{spider:e.row.spider,project:t.project}})]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"运行Spider",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("SpiderSchedule",{attrs:{spider:e.row.spider,project:t.project}})]}}])})],1)},s=[],c=r("479c"),l=r("63d3"),u={name:"",props:{project:{type:String,default:""}},components:{SpiderSchedule:c["a"],ScheduleAdd:l["a"]},data:function(){return{}},computed:{},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},p=u,d=r("2877"),f=Object(d["a"])(p,a,s,!1,null,"22c42797",null),h=f.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("ProjectSelect",{attrs:{size:"small",value:t._project},on:{"update:value":function(e){t._project=e},"on-init":t.handleProjectSelectInit}})],1)},b=[],j=r("24bc"),g={name:"",components:{ProjectSelect:j["a"]},props:{project:{type:String,default:""}},data:function(){return{}},computed:{_project:{get:function(){return this.project},set:function(t){this.$emit("update:project",t),this.$emit("project-change",t)}}},methods:{handleProjectSelectInit:function(t){this.$emit("on-init",t)}},created:function(){}},v=g,_=Object(d["a"])(v,m,b,!1,null,"2fc9a4ca",null),S=_.exports,w={name:"",props:[],components:{SpiderTable:h,SpiderTool:S},data:function(){return{project:"",list:[]}},computed:{},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydlistSpiders({project:this.project});case 2:e=t.sent,this.list=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleProjcetChange:function(t){t&&(this.project=t,localStorage.setItem("project",t),this.getData())},handleSpiderToolInit:function(t){this.project||(this.project=localStorage.getItem("project")),this.project||t&&t.length>0&&(this.project=t[0].project),this.project&&this.getData()}},created:function(){this.project=this.$route.query.project}},y=w,x=Object(d["a"])(y,n,i,!1,null,"20c12097",null);e["default"]=x.exports}}]);