webpackJsonp([70],{1013:function(e,t,a){t=e.exports=a(109)(!0),t.push([e.i,'#course-task-template-category{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff}#course-task-template-category:after{content:"";clear:both;display:block}#course-task-template-category .pagin{float:right;margin-top:15px}#course-task-template-category .bottom-manage{margin-top:15px}#course-task-template-category .manage-container{position:absolute;right:0;top:-50px}#course-task-template-category .header-button.manage-container>.el-button i{margin-right:5px}#course-task-template-category .header-button.manage-container>.el-button i:before{position:relative;top:-1px}.text-blue{color:#20a0ff}.text-light-blue{color:#58b7ff}.text-dark-blue{color:#1d8ce0}.text-success{color:#13ce66}.text-warning{color:#f7ba2a}.text-danger{color:#ff4949}#course-task-template-category>section{display:inline-block;vertical-align:top}#course-task-template-category .left-container{min-width:300px;border-right:1px solid #ededed}#course-task-template-category .right-container{margin-left:15px}#course-task-template-category .right-container .edit-content{margin:10px 0 0}#course-task-template-category .right-container .btn-selected{background:#20a0ff;color:#fff}#course-task-template-category .el-dialog__wrapper{padding-top:15px;background:rgba(0,0,0,.5);z-index:1000}',"",{version:3,sources:["/Users/zhaoyicheng/Documents/Code/yxt/PC-old/sys_ui/assets/src/views/gov/examTask/Coursetasktemplatecategory.vue"],names:[],mappings:"AACA,+BAA+B,aAAa,kBAAkB,yBAAyB,kBAAkB,eAAe,CACvH,AACD,qCAAqC,WAAW,WAAW,aAAa,CACvE,AACD,sCAAsC,YAAY,eAAe,CAChE,AACD,8CAA8C,eAAe,CAC5D,AACD,iDAAiD,kBAAkB,QAAQ,SAAS,CACnF,AACD,4EAA4E,gBAAgB,CAC3F,AACD,mFAAmF,kBAAkB,QAAQ,CAC5G,AACD,WAAW,aAAa,CACvB,AACD,iBAAiB,aAAa,CAC7B,AACD,gBAAgB,aAAa,CAC5B,AACD,cAAc,aAAa,CAC1B,AACD,cAAc,aAAa,CAC1B,AACD,aAAa,aAAa,CACzB,AACD,uCAAuC,qBAAqB,kBAAkB,CAC7E,AACD,+CAA+C,gBAAgB,8BAA8B,CAC5F,AACD,gDAAgD,gBAAgB,CAC/D,AACD,8DAA8D,eAAe,CAC5E,AACD,8DAA8D,mBAAmB,UAAU,CAC1F,AACD,mDAAmD,iBAAiB,0BAA2B,YAAY,CAC1G",file:"Coursetasktemplatecategory.vue",sourcesContent:["\n#course-task-template-category{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff\n}\n#course-task-template-category:after{content:'';clear:both;display:block\n}\n#course-task-template-category .pagin{float:right;margin-top:15px\n}\n#course-task-template-category .bottom-manage{margin-top:15px\n}\n#course-task-template-category .manage-container{position:absolute;right:0;top:-50px\n}\n#course-task-template-category .header-button.manage-container>.el-button i{margin-right:5px\n}\n#course-task-template-category .header-button.manage-container>.el-button i:before{position:relative;top:-1px\n}\n.text-blue{color:#20A0FF\n}\n.text-light-blue{color:#58B7FF\n}\n.text-dark-blue{color:#1D8CE0\n}\n.text-success{color:#13CE66\n}\n.text-warning{color:#F7BA2A\n}\n.text-danger{color:#FF4949\n}\n#course-task-template-category>section{display:inline-block;vertical-align:top\n}\n#course-task-template-category .left-container{min-width:300px;border-right:1px solid #ededed\n}\n#course-task-template-category .right-container{margin-left:15px\n}\n#course-task-template-category .right-container .edit-content{margin:10px 0 0\n}\n#course-task-template-category .right-container .btn-selected{background:#20A0FF;color:#fff\n}\n#course-task-template-category .el-dialog__wrapper{padding-top:15px;background:rgba(0,0,0,0.5);z-index:1000\n}\n"],sourceRoot:""}])},1111:function(e,t,a){var o=a(1013);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(110)("192be150",o,!0)},1243:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{attrs:{id:"course-task-template-category"}},[a("section",{staticClass:"left-container"},[a("CourseTaskTemplateCategoryTree",{ref:"courseTaskTemplateCategory",attrs:{treeType:e.treeType,onNodeClick:e.treeNodeClick.bind(this,1)},model:{value:e.treeData,callback:function(t){e.treeData=t},expression:"treeData"}})],1),e._v(" "),a("section",{staticClass:"right-container"},[a("div",[a("el-button",{class:{"btn-selected":"edit"==e.activeTab},on:{click:function(t){e.activeTab="edit"}}},[e._v("修改分类")]),e._v(" "),a("el-button",{class:{"btn-selected":"root"==e.activeTab},on:{click:e.addRootCategory}},[e._v("新建分类")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.deleteCategory}},[e._v("删除分类")])],1),e._v(" "),a("el-card",{staticClass:"edit-content"},[a("el-form",{ref:"form",attrs:{"label-position":"right","label-width":"90px",rules:e.rules,model:e.fetchParam}},[a("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[a("el-input",{model:{value:e.fetchParam.name,callback:function(t){e.fetchParam.name=t},expression:"fetchParam.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分类排序",prop:"sort"}},[a("el-input",{attrs:{type:"number",placeholder:e.placeholder},model:{value:e.fetchParam.sort,callback:function(t){e.fetchParam.sort=t},expression:"fetchParam.sort"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"info"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"操作提示",size:"tiny"},model:{value:e.dialogConfirm.isShow,callback:function(t){e.dialogConfirm.isShow=t},expression:"dialogConfirm.isShow"}},[a("span",{domProps:{innerHTML:e._s(e.dialogConfirm.msg)}}),e._v(" "),a("span",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogConfirm.isShow=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.dialogConfirm.confirmClick}},[e._v("确 定")])],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogTree.isShow,expression:"dialogTree.isShow"}],staticClass:"el-dialog__wrapper"},[a("article",{staticClass:"el-dialog el-dialog--tiny"},[a("section",{staticClass:"el-dialog__header"},[e._v("\n                移动分类【\n                "),a("span",{staticStyle:{color:"red"}},[e._v("\n                    "+e._s(e.nodeSelected&&e.nodeSelected.label)+"\n                ")]),e._v(" "),a("i",[e._v("】到")])]),e._v(" "),a("section",{staticClass:"el-dialog__body"},[a("CourseTaskTemplateCategoryTree",{attrs:{"node-key":"id",onNodeClick:e.treeNodeClick.bind(this,2)},model:{value:e.treeData,callback:function(t){e.treeData=t},expression:"treeData"}})],1),e._v(" "),a("section",{staticClass:"el-dialog__footer"},[a("span",{staticClass:"dialog-footer"},[a("el-button",{on:{click:function(t){e.dialogTree.isShow=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.dialogTree.confirmClick}},[e._v("确 定")])],1)])])])],1)},staticRenderFns:[]}},160:function(e,t,a){a(1111);var o=a(5)(a(878),a(1243),null,null);e.exports=o.exports},276:function(e,t,a){"use strict";(function(e){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=a(6),i=a(1),n=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=i.a.apiHost+"/course/task",c=function(){function t(){o(this,t)}return n(t,[{key:"getCourseTaskList",value:function(e){var t=e.page,a=e.pagesize,o=e.title,i=e.stime,n=e.etime,c=e.type,l=e.status,d=e.deleted,u=s+"/lists";return r.b(u,{page:t,pagesize:a,title:o,stime:i,etime:n,type:c,status:l,deleted:d}).then(function(e){return e})}},{key:"submitTask",value:function(e){var t=e.title,a=void 0===t?void 0:t,o=e.image,i=void 0===o?void 0:o,n=e.description,c=void 0===n?void 0:n,l=e.sort,d=void 0===l?void 0:l,u=e.course_ids,m=void 0===u?void 0:u,p=e.gov_ids,g=void 0===p?void 0:p,v=e.user_ids,f=void 0===v?void 0:v,h=e.score,A=void 0===h?0:h,C=e.type,y=void 0===C?void 0:C,k=e.stime,b=void 0===k?"":k,_=e.etime,T=void 0===_?"":_,x=s+"/create";return r.a(x,{title:a,image:i,description:c,sort:d,course_ids:m,gov_ids:g,user_ids:f,score:A,type:y,stime:b,etime:T},!1).then(function(e){return e})}},{key:"editTask",value:function(e){var t=e.id,a=e.title,o=void 0===a?void 0:a,i=e.image,n=void 0===i?void 0:i,c=e.description,l=void 0===c?void 0:c,d=e.sort,u=void 0===d?void 0:d,m=e.course_ids,p=void 0===m?void 0:m,g=e.gov_ids,v=void 0===g?void 0:g,f=e.user_ids,h=void 0===f?void 0:f,A=e.score,C=void 0===A?0:A,y=e.type,k=void 0===y?void 0:y,b=e.stime,_=void 0===b?"":b,T=e.etime,x=void 0===T?"":T,D=s+"/edit/"+t;return r.a(D,{title:o,image:n,description:l,sort:u,course_ids:p,gov_ids:v,user_ids:h,score:C,type:k,stime:_,etime:x},!1).then(function(e){return e})}},{key:"getTask",value:function(e){var t=s+"/get/"+e;return r.b(t).then(function(e){return e})}},{key:"deleteCourseTask",value:function(e){var t=s+"/delete/"+e;return r.a(t,{})}},{key:"getCourseTaskTemplateEditDetail",value:function(e){var t=s+"/template/get/"+e;return r.b(t,{}).then(function(e){return e})}},{key:"getCourseTaskTemplateStudyCheck",value:function(e){var t=s+"/template/study/check";return r.b(t,e).then(function(e){return e.data})}},{key:"getCourseTaskTemplateList",value:function(e){var t=e.category_id,a=e.category_type,o=e.title,i=e.deleted,n=void 0===i?"-1":i,c=e.status,l=void 0===c?"-1":c,d=e.page,u=e.task_type,m=e.pagesize,p=s+"/template/lists";return r.b(p,{category_id:t,category_type:a,title:o,deleted:n,status:l,page:d,task_type:u,pagesize:m}).then(function(e){return e})}},{key:"CourseTaskTemplateUploadUrl",value:function(e){var t=e.avatar,a=e.alias,o=s+"/template/cover";return r.a(o,{avatar:t,alias:a})}},{key:"getCategoryCheck",value:function(e){var t=s+"/template/category/check";return r.b(t,e).then(function(e){return e.data})}},{key:"addCourseTaskTemplate",value:function(t){var a=s+"/template/create";return r.a(a,t).then(function(t){if(t.code)return e.reject(t)})}},{key:"updateCourseTaskTemplate",value:function(t){var a=t.id,o=t.category_id,i=t.title,n=t.description,c=t.image,l=t.course_ids,d=t.sort,u=t.score,m=t.study_duration,p=s+"/template/edit/"+a;return r.a(p,{category_id:o,title:i,description:n,image:c,course_ids:l,sort:d,score:u,study_duration:m}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteCourseTaskTemplate",value:function(e){var t=s+"/template/delete/"+e;return r.a(t,{})}},{key:"publishCourseTaskTemplate",value:function(e){var t=s+"/template/"+e+"/publish";return r.a(t,{})}},{key:"revokeCourseTaskTemplate",value:function(e){var t=s+"/template/"+e+"/revoke";return r.a(t,{})}},{key:"getCategoryTree",value:function(e){var t=e.id,a=void 0===t?"tree":t,o=e.type,i=(e.filter,e.pid,e.level,e.pagesize),n=void 0===i?-1:i,c=s+"/template/category/lists";return r.b(c,{id:a,name:name,pagesize:n,type:o}).then(function(e){return e})}},{key:"create_cate",value:function(e){var t=(e.parent_id,e.name),a=(e.image,e.sort),o=e.type,i=s+"/template/category/create",n={name:t,sort:a,type:o};return r.a(i,n)}},{key:"update_cate",value:function(e){var t=e.name,a=(e.image,e.sort),o=e.id,i=s+"/template/category/edit/"+o;return r.a(i,{name:t,sort:a})}},{key:"delCategory",value:function(t){var a=t.id,o=s+"/template/category/delete/"+a;return r.a(o).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"getCategoryImageUrl",value:function(){return s+"/template/category/image"}},{key:"moveCategory",value:function(e){var t=e.id,a=e.to,o=s+"/template/category/"+t+"/move";return r.a(o,{to:a})}},{key:"moveCategoryContent",value:function(e){var t=e.id,a=e.to,o=s+"/template/category/"+t+"/move/content";return r.a(o,{to:a})}},{key:"offline",value:function(e){var t=e.id,a=e.disabled,o=s+"/edit/"+t;return r.a(o,{disabled:a})}},{key:"online",value:function(e){var t=e.id,a=e.disabled,o=s+"/edit/"+t;return r.a(o,{disabled:a})}},{key:"getUploadUrl",value:function(e){var t=e.image,a=e.alias,o=s+"/upload";return r.a(o,{image:t,alias:a}).then(function(e){return e.data})}}]),t}();t.a=new c}).call(t,a(2))},364:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(276);a(15);t.default={props:{onNodeClick:Function,value:Array,treeType:String},data:function(){return{data:this.value,loading:!1,selectable:!0}},created:function(){if(void 0==this.treeType)return!1;this.getData(this.treeType),xmview.setContentLoading(!1)},watch:{treeType:function(){this.getData(this.treeType)}},methods:{getData:function(e){var t=this,a=void 0;"course"==e?a={id:"",name:name,pagesize:-1,type:1}:"exam"==e&&(a={id:"",name:name,pagesize:-1,type:2}),a&&o.a.getCategoryTree(a).then(function(e){t.data=e.data.map(function(e){return e.data=e,e.label=e.name,e.value=e.id,e}),t.loading=!1,xmview.setContentLoading(!1)})},handleNodeClick:function(e,t,a){this.$emit("onNodeClick",{data:e,node:t,store:a}),this.onNodeClick&&this.onNodeClick(1,e,t,a),0!=e.value&&(this.selectable=!0)},clearSelected:function(){this.selectable=!1},removeItem:function(e,t){t.data.children?(t.data.children=t.data.children.filter(function(t){return t.value!=e.value}),t.data.children.length<1&&(t.data.children=null)):this.data=this.data.filter(function(t){return t.value!=e.value}),this.$emit("input",this.data)},setCurrVal:function(e){e!==this.data&&(this.data=e,this.$emit("input",e))}}}},431:function(e,t,a){var o=a(5)(a(364),a(436),null,null);e.exports=o.exports},436:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.data,"expand-on-click-node":!1,"highlight-current":e.selectable},on:{"node-click":e.handleNodeClick}})},staticRenderFns:[]}},878:function(e,t,a){"use strict";function o(){return{parent_id:void 0,name:void 0,image:void 0,sort:"",id:0,type:2}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(276),i=(a(15),a(431)),n=a.n(i);t.default={data:function(){return{activeTab:"add",uploadImgUrl:void 0,nodeSelected:void 0,nodeParentSelected:void 0,moveToNode:void 0,treeData:[],dialogConfirm:{isShow:!1,msg:"",confirmClick:{}},dialogTree:{isShow:!1,confirmClick:{}},placeholder:"最小的排在前面",fetchParam:o(),rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},treeType:""}},watch:{activeTab:function(e){"add"!==e&&"root"!==e||this.resetForm()}},activated:function(){this.fetchParam=o(),this.treeType="exam",this.uploadImgUrl=r.a.getCategoryImageUrl(),xmview.setContentLoading(!1)},methods:{deleteCategory:function(){var e=this,t=this.nodeSelected;if(t&&t.children)return void xmview.showTip("warning","该分类下还有子分类,不能被删除");this.dialogConfirm.isShow=!0,this.dialogConfirm.msg='是否确认删除分类 <i style="color:red">'+t.label+"</i> 吗？",this.dialogConfirm.confirmClick=function(){r.a.delCategory({id:t.value}).then(function(){e.dialogConfirm.isShow=!1,e.$refs.courseTaskTemplateCategory.removeItem(t,e.nodeParentSelected),t=null,e.resetForm(),e.fetchParam=o()})}},treeNodeClick:function(e,t,a,o){1==e?(this.nodeParentSelected=a.parent,this.nodeSelected=a,this.fetchParam=Object.assign({},a.data),this.activeTab="edit"):2==e&&(this.moveToNode=a)},handleImgUploaded:function(e){this.fetchParam.image=e.data.url},removeImg:function(e,t){},addRootCategory:function(){this.activeTab="root",this.$refs.courseTaskTemplateCategory.clearSelected(),this.fetchParam.pid=0},clearSelected:function(){this.selectable=!1},submitForm:function(){var e=this;this.$refs.form.validate(function(t){if(t){var a=void 0;"add"===e.activeTab?(e.fetchParam.pid=e.fetchParam.id,a=r.a.create_cate(e.fetchParam)):a="root"===e.activeTab?r.a.create_cate(e.fetchParam):r.a.update_cate(e.fetchParam),a.then(function(t){if(xmview.showTip("success","操作成功!"),"edit"===e.activeTab)e.nodeSelected.label=e.fetchParam.name,e.nodeSelected.item=e.fetchParam,e.$forceUpdate();else{e.fetchParam.id=t.data.id;var a={label:e.fetchParam.name,value:e.fetchParam.id,item:e.fetchParam};e.resetForm(),e.fetchParam=o(),e.$forceUpdate(),"root"===e.activeTab?e.treeData.push(a):e.nodeSelected.children?e.nodeSelected.children[0].value&&e.nodeSelected.children.push(a):e.nodeSelected.children=[{label:"加载中..."}]}})}})},resetForm:function(){this.$refs.form.resetFields()}},components:{CourseTaskTemplateCategoryTree:n.a}}}});
//# sourceMappingURL=70.13b4de7eb3a5b31e6dcf.js.map