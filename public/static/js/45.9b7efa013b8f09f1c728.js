webpackJsonp([45],{123:function(e,t,a){a(870);var i=a(5)(a(750),a(954),null,null);e.exports=i.exports},153:function(e,t,a){"use strict";function i(e){return e?n.b(new Date(e)):e}Object.defineProperty(t,"__esModule",{value:!0});var n=a(25),r=void 0;t.default={props:{title:String,start:{},end:{},change:Function},data:function(){return{timespan:[this.start,this.end],pickerOptionsStart:{disabledDate:function(e){return r.timespan[1]?e.getTime()-144e5>=new Date(r.timespan[1]).getTime()&&0!==n.c(e,new Date(r.timespan[0])):null}},pickerOptionsEnd:{disabledDate:function(e){return r.timespan[0]?e.getTime()<=new Date(r.timespan[0]).getTime()&&0!==n.c(e,new Date(r.timespan[0])):null}}}},watch:{start:function(e){i(this.timespan[0])!=e&&(this.timespan[0]=e,e||(this.$refs.start.$el.querySelector("input").value=""))},end:function(e){i(this.timespan[1])!=e&&(this.timespan[1]=e,e||(this.$refs.end.$el.querySelector("input").value=""))}},beforeCreate:function(){r=this},methods:{setCurrVal:function(e){var t=["changeStart","changeEnd"],a=i(this.timespan[e]);this.$emit(t[e],i(a)),this.change&&this.change()}}}},155:function(e,t,a){var i=a(5)(a(153),a(156),null,null);e.exports=i.exports},156:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("i",[e._v(e._s(e.title))]),e._v(" "),a("el-date-picker",{ref:"start",attrs:{editable:!1,clearable:"",align:"right",type:"date","picker-options":e.pickerOptionsStart,placeholder:"开始日期"},on:{change:function(t){e.setCurrVal(0)}},model:{value:e.timespan[0],callback:function(t){var a=e.timespan;Array.isArray(a)?a.splice(0,1,t):e.timespan[0]=t},expression:"timespan[0]"}}),e._v(" "),a("el-date-picker",{ref:"end",attrs:{clearable:"",editable:!1,align:"right",type:"date","picker-options":e.pickerOptionsEnd,placeholder:"结束日期"},on:{change:function(t){e.setCurrVal(1)}},model:{value:e.timespan[1],callback:function(t){var a=e.timespan;Array.isArray(a)?a.splice(1,1,t):e.timespan[1]=t},expression:"timespan[1]"}})],1)},staticRenderFns:[]}},254:function(e,t,a){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=a(14),r=a(1),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),s=r.a.apiHost+"/course/task",l=function(){function t(){i(this,t)}return o(t,[{key:"getCourseTaskList",value:function(e){var t=e.page,a=e.pagesize,i=e.title,r=e.stime,o=e.etime,l=e.type,c=e.status,u=e.deleted,d=s+"/lists";return n.b(d,{page:t,pagesize:a,title:i,stime:r,etime:o,type:l,status:c,deleted:u}).then(function(e){return e})}},{key:"submitTask",value:function(e){var t=e.title,a=void 0===t?void 0:t,i=e.image,r=void 0===i?void 0:i,o=e.description,l=void 0===o?void 0:o,c=e.sort,u=void 0===c?void 0:c,d=e.course_ids,p=void 0===d?void 0:d,A=e.gov_ids,m=void 0===A?void 0:A,g=e.user_ids,v=void 0===g?void 0:g,h=e.score,f=void 0===h?0:h,k=e.type,C=void 0===k?void 0:k,x=e.stime,b=void 0===x?"":x,y=e.etime,w=void 0===y?"":y,B=s+"/create";return n.a(B,{title:a,image:r,description:l,sort:u,course_ids:p,gov_ids:m,user_ids:v,score:f,type:C,stime:b,etime:w},!1).then(function(e){return e})}},{key:"editTask",value:function(e){var t=e.id,a=e.title,i=void 0===a?void 0:a,r=e.image,o=void 0===r?void 0:r,l=e.description,c=void 0===l?void 0:l,u=e.sort,d=void 0===u?void 0:u,p=e.course_ids,A=void 0===p?void 0:p,m=e.gov_ids,g=void 0===m?void 0:m,v=e.user_ids,h=void 0===v?void 0:v,f=e.score,k=void 0===f?0:f,C=e.type,x=void 0===C?void 0:C,b=e.stime,y=void 0===b?"":b,w=e.etime,B=void 0===w?"":w,D=s+"/edit/"+t;return n.a(D,{title:i,image:o,description:c,sort:d,course_ids:A,gov_ids:g,user_ids:h,score:k,type:x,stime:y,etime:B},!1).then(function(e){return e})}},{key:"getTask",value:function(e){var t=s+"/get/"+e;return n.b(t).then(function(e){return e})}},{key:"deleteCourseTask",value:function(e){var t=s+"/delete/"+e;return n.a(t,{})}},{key:"getCourseTaskTemplateEditDetail",value:function(e){var t=s+"/template/get/"+e;return n.b(t,{}).then(function(e){return e})}},{key:"getCourseTaskTemplateList",value:function(e){var t=e.category_id,a=e.title,i=e.deleted,r=void 0===i?"-1":i,o=e.status,l=void 0===o?"-1":o,c=e.page,u=e.pagesize,d=s+"/template/lists";return n.b(d,{category_id:t,title:a,deleted:r,status:l,page:c,pagesize:u}).then(function(e){return e})}},{key:"CourseTaskTemplateUploadUrl",value:function(e){var t=e.avatar,a=e.alias,i=s+"/template/cover";return n.a(i,{avatar:t,alias:a})}},{key:"addCourseTaskTemplate",value:function(t){var a=t.category_id,i=t.title,r=t.description,o=t.image,l=t.course_ids,c=t.sort,u=t.score,d=s+"/template/create";return n.a(d,{category_id:a,title:i,description:r,image:o,course_ids:l,sort:c,score:u}).then(function(t){if(t.code)return e.reject(t)})}},{key:"updateCourseTaskTemplate",value:function(t){var a=t.id,i=t.category_id,r=t.title,o=t.description,l=t.image,c=t.course_ids,u=t.sort,d=t.score,p=s+"/template/edit/"+a;return n.a(p,{category_id:i,title:r,description:o,image:l,course_ids:c,sort:u,score:d}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteCourseTaskTemplate",value:function(e){var t=s+"/template/delete/"+e;return n.a(t,{})}},{key:"publishCourseTaskTemplate",value:function(e){var t=s+"/template/"+e+"/publish";return n.a(t,{})}},{key:"revokeCourseTaskTemplate",value:function(e){var t=s+"/template/"+e+"/revoke";return n.a(t,{})}},{key:"getCategoryTree",value:function(e){var t=e.id,a=void 0===t?"tree":t,i=(e.type,e.filter,e.pid,e.level,e.pagesize),r=void 0===i?-1:i,o=s+"/template/category/lists";return n.b(o,{id:a,name:name,pagesize:r}).then(function(e){return e})}},{key:"create_cate",value:function(e){var t=(e.parent_id,e.name),a=(e.image,e.sort),i=s+"/template/category/create",r={name:t,sort:a};return n.a(i,r)}},{key:"update_cate",value:function(e){var t=e.name,a=(e.image,e.sort),i=e.id,r=s+"/template/category/edit/"+i;return n.a(r,{name:t,sort:a})}},{key:"delCategory",value:function(t){var a=t.id,i=s+"/template/category/delete/"+a;return n.a(i).then(function(t){if(t.code)return e.reject(t)})}},{key:"getCategoryImageUrl",value:function(){return s+"/template/category/image"}},{key:"moveCategory",value:function(e){var t=e.id,a=e.to,i=s+"/template/category/"+t+"/move";return n.a(i,{to:a})}},{key:"moveCategoryContent",value:function(e){var t=e.id,a=e.to,i=s+"/template/category/"+t+"/move/content";return n.a(i,{to:a})}},{key:"offline",value:function(e){var t=e.id,a=e.disabled,i=s+"/edit/"+t;return n.a(i,{disabled:a})}},{key:"online",value:function(e){var t=e.id,a=e.disabled,i=s+"/edit/"+t;return n.a(i,{disabled:a})}},{key:"getUploadUrl",value:function(e){var t=e.image,a=e.alias,i=s+"/upload";return n.a(i,{image:t,alias:a}).then(function(e){return e.data})}}]),t}();t.a=new l}).call(t,a(3))},750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(155),n=a.n(i),r=a(254),o=a(27);t.default={filters:{fillImgPath:o.fillImgPath},components:{DateRange:n.a},data:function(){return{currCategoryName:"",loading:!1,fetchParam:{title:"",category_id:""},itemName:"",coursetasktemplateData:[],total:0,currentPage:1,pagesize:15}},activated:function(){this.getData().then(function(){xmview.setContentLoading(!1)})},methods:{handleDelete:function(e,t){xmview.showDialog('你将要删除课程任务【<i style="color:red">'+(t.title||"")+"</i>】操作不可恢复确认吗？",this.deleteItem(t.id))},deleteItem:function(e){var t=this;return function(){r.a.deleteCourseTaskTemplate(e).then(function(e){xmview.showTip("success","删除成功"),t.getData()}).catch(function(e){xmview.showTip("error",e.message)})}},editItm:function(e){e.course=e.course||[],this.$router.push({name:"server-manage-add",query:{item:e}})},publishCourseTaskTemplate:function(e){xmview.showDialog('你将要上线课程任务【<i style="color:red">'+(e.title||"")+"</i>】吗？",this.publishItem(e.id))},publishItem:function(e){var t=this;return function(){r.a.publishCourseTaskTemplate(e).then(function(e){xmview.showTip("success","上线成功"),t.getData()}).catch(function(e){xmview.showTip("error",e.message)})}},revokeCourseTaskTemplate:function(e){xmview.showDialog('你将要下线课程任务【<i style="color:red">'+(e.title||"")+"</i>】吗？",this.revokeItem(e.id))},revokeItem:function(e){var t=this;return function(){r.a.revokeCourseTaskTemplate(e).then(function(e){xmview.showTip("success","下线成功"),t.getData()}).catch(function(e){xmview.showTip("error",e.message)})}},handleSizeChange:function(e){this.pagesize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},getData:function(){var e=this;return this.loading=!0,r.a.getCourseTaskList({title:this.fetchParam.title,page:this.currentPage,pagesize:this.pagesize}).then(function(t){e.coursetasktemplateData=t.data,e.total=t._exts.total}).then(function(){e.loading=!1})},handleImgUploaded:function(e){this.form.cover=e.data.url},ueReady:function(e){this.editor=e}}}},809:function(e,t,a){t=e.exports=a(88)(!0),t.push([e.i,'.course-task-template-index .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px}.course-task-template-index .search>section>span,.course-task-template-index .search>section i{margin-right:2px}.course-task-template-index .search>section>*{vertical-align:middle;display:inline-block}.course-task-template-index .search .el-input{width:auto}.keyword-container{width:90%;margin-left:5%;margin-bottom:5px}.course-task-template-index{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff}.course-task-template-index:after{content:"";clear:both;display:block}.course-task-template-index .pagin{float:right;margin-top:15px}.course-task-template-index .bottom-manage{margin-top:15px}.course-task-template-index .manage-container{position:absolute;right:0;top:-50px}.course-task-template-index .header-button.manage-container>.el-button i{margin-right:5px}.course-task-template-index .header-button.manage-container>.el-button i:before{position:relative;top:-1px}.text-blue{color:#20a0ff}.text-light-blue{color:#58b7ff}.text-dark-blue{color:#1d8ce0}.text-success{color:#13ce66}.text-warning{color:#f7ba2a}.text-danger{color:#ff4949}.course-task-template-index .block{text-align:right;margin-top:10px}.course-task-template-index .edui-editor{width:100%!important}.course-task-template-index .avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.course-task-template-index .avatar-uploader .el-upload:hover{border-color:#20a0ff}.course-task-template-index .avatar-uploader-icon{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.course-task-template-index .avatar{width:178px;height:178px;display:block}.course-task-template-index .img-wrap{margin-bottom:10px;width:150px!important;height:150px!important}.course-task-template-index .img-wrap img{width:100%;height:100%}.course-task-template-index .add{background:#ededed;padding:.2rem .4rem;border-bottom:1px solid #ededed}.course-task-template-index .desc{width:100%;height:100px}',"",{version:3,sources:["/Users/zhaoyicheng/Documents/Code/yxt/PC/sys_ui/assets/src/views/gov/courseTask/Coursetask.vue"],names:[],mappings:"AACA,4CAA4C,iBAAiB,mBAAmB,qBAAqB,iBAAiB,CACrH,AACD,+FAA+F,gBAAgB,CAC9G,AACD,8CAA8C,sBAAsB,oBAAoB,CACvF,AACD,8CAA8C,UAAU,CACvD,AACD,mBAAmB,UAAU,eAAe,iBAAiB,CAC5D,AACD,4BAA4B,aAAa,kBAAkB,yBAAyB,kBAAkB,eAAe,CACpH,AACD,kCAAkC,WAAW,WAAW,aAAa,CACpE,AACD,mCAAmC,YAAY,eAAe,CAC7D,AACD,2CAA2C,eAAe,CACzD,AACD,8CAA8C,kBAAkB,QAAQ,SAAS,CAChF,AACD,yEAAyE,gBAAgB,CACxF,AACD,gFAAgF,kBAAkB,QAAQ,CACzG,AACD,WAAW,aAAa,CACvB,AACD,iBAAiB,aAAa,CAC7B,AACD,gBAAgB,aAAa,CAC5B,AACD,cAAc,aAAa,CAC1B,AACD,cAAc,aAAa,CAC1B,AACD,aAAa,aAAa,CACzB,AACD,mCAAmC,iBAAiB,eAAe,CAClE,AACD,yCAAyC,oBAAqB,CAC7D,AACD,wDAAwD,0BAA0B,kBAAkB,eAAe,kBAAkB,eAAe,CACnJ,AACD,8DAA8D,oBAAoB,CACjF,AACD,kDAAkD,eAAe,cAAc,YAAY,aAAa,kBAAkB,iBAAiB,CAC1I,AACD,oCAAoC,YAAY,aAAa,aAAa,CACzE,AACD,sCAAsC,mBAAmB,sBAAuB,sBAAuB,CACtG,AACD,0CAA0C,WAAW,WAAW,CAC/D,AACD,iCAAiC,mBAAmB,oBAAoB,+BAA+B,CACtG,AACD,kCAAkC,WAAW,YAAY,CACxD",file:"Coursetask.vue",sourcesContent:["\n.course-task-template-index .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px\n}\n.course-task-template-index .search>section>span,.course-task-template-index .search>section i{margin-right:2px\n}\n.course-task-template-index .search>section>*{vertical-align:middle;display:inline-block\n}\n.course-task-template-index .search .el-input{width:auto\n}\n.keyword-container{width:90%;margin-left:5%;margin-bottom:5px\n}\n.course-task-template-index{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff\n}\n.course-task-template-index:after{content:'';clear:both;display:block\n}\n.course-task-template-index .pagin{float:right;margin-top:15px\n}\n.course-task-template-index .bottom-manage{margin-top:15px\n}\n.course-task-template-index .manage-container{position:absolute;right:0;top:-50px\n}\n.course-task-template-index .header-button.manage-container>.el-button i{margin-right:5px\n}\n.course-task-template-index .header-button.manage-container>.el-button i:before{position:relative;top:-1px\n}\n.text-blue{color:#20A0FF\n}\n.text-light-blue{color:#58B7FF\n}\n.text-dark-blue{color:#1D8CE0\n}\n.text-success{color:#13CE66\n}\n.text-warning{color:#F7BA2A\n}\n.text-danger{color:#FF4949\n}\n.course-task-template-index .block{text-align:right;margin-top:10px\n}\n.course-task-template-index .edui-editor{width:100% !important\n}\n.course-task-template-index .avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden\n}\n.course-task-template-index .avatar-uploader .el-upload:hover{border-color:#20a0ff\n}\n.course-task-template-index .avatar-uploader-icon{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center\n}\n.course-task-template-index .avatar{width:178px;height:178px;display:block\n}\n.course-task-template-index .img-wrap{margin-bottom:10px;width:150px !important;height:150px !important\n}\n.course-task-template-index .img-wrap img{width:100%;height:100%\n}\n.course-task-template-index .add{background:#ededed;padding:.2rem .4rem;border-bottom:1px solid #ededed\n}\n.course-task-template-index .desc{width:100%;height:100px\n}\n"],sourceRoot:""}])},870:function(e,t,a){var i=a(809);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(89)("17837437",i,!0)},954:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"course-task-template-index"},[a("section",{staticClass:"search"},[a("section",[a("i",[e._v("课程名称")]),e._v(" "),a("el-input",{staticClass:"name",nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.getData(t)}},model:{value:e.fetchParam.title,callback:function(t){e.fetchParam.title=t},expression:"fetchParam.title"}})],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.coursetasktemplateData}},[a("el-table-column",{attrs:{prop:"title",label:"课程任务"}}),e._v(" "),a("el-table-column",{attrs:{prop:"addate",label:"创建时间",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.status?a("el-tag",{attrs:{type:"success"}},[e._v("正常")]):e._e(),e._v(" "),1==t.row.status?a("el-tag",{attrs:{type:"gray"}},[e._v("草稿")]):e._e(),e._v(" "),2==t.row.status?a("el-tag",{attrs:{type:"gray"}},[e._v("下线")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"operate",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.editItm(t.row)}}},[e._v("\n                    修改\n                    ")]),e._v(" "),2==t.row.status||1==t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.publishCourseTaskTemplate(t.row)}}},[e._v("\n                    上线\n                    ")]):e._e(),e._v(" "),0==t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.revokeCourseTaskTemplate(t.row)}}},[a("i",[e._v("下线")])]):e._e(),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[a("i",[e._v("删除")])])]}}])})],1),e._v(" "),a("section",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,30,60,100],layout:"total, sizes, ->, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=45.9b7efa013b8f09f1c728.js.map