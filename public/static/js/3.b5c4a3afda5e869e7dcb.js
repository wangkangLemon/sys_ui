webpackJsonp([3],{167:function(e,a,t){"use strict";(function(e){function r(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var i=t(22),n=t(4),o=t(3),s=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),c=o.a.apiHost+"/course",l=function(){function a(){r(this,a)}return s(a,[{key:"getCategoryTree",value:function(e){var a=e.id,t=void 0===a?"tree":a,r=e.type,n=e.filter,o=void 0===n||n,s=e.pid,l=void 0===s?-1:s,d=e.level,u=void 0===d?-1:d,m=c+"/category/lists";return i.b(m,{id:t,filter:o,type:r,pid:l,level:u}).then(function(e){return e})}},{key:"search_cate",value:function(a){var t=a.id,r=a.name,n=a.category_type,o=a.pid,s=a.level,l=a.ended,d=a.disabled,u=a.page,m=a.pagesize,p=c+"/category/lists";return i.b(p,{id:t,name:r,category_type:n,pid:o,level:s,ended:l,disabled:d,page:u,pagesize:m},!1).then(function(a){return 0==a.code?a.data:e.reject(a)})}},{key:"create_cate",value:function(a){var t=a.name,r=a.sort,n=a.category_type,o=a.pid,s=a.ended,l=a.image,d={name:t,sort:r,category_type:n,pid:o,ended:s,image:l};0===o&&delete d.pid;var u=c+"/category/create";return i.a(u,d).then(function(a){return 0==a.code?(xmview.showTip("success",a.message),a.data):(xmview.showTip("error",a.message),e.reject(a))})}},{key:"update_cate",value:function(a){var t=a.id,r=a.name,n=a.image,o=a.category_type,s=a.sort,l=a.ended,d=a.disabled,u=a.pid,m=c+"/category/edit/"+t;return i.a(m,{name:r,image:n,category_type:o,sort:s,ended:l,disabled:d,pid:u}).then(function(a){if(a.code)return e.reject(a)})}},{key:"updateCategory",value:function(e){var a=e.govid,t=e.type,r=e.name,s=e.image,c=e.sort,l=e.id;a=a||n.a.getUserInfo().company_id;var d=o.a.apiHost+"/com/"+a+"/course/category/"+l;return i.a(d,{type:t,name:r,image:s,sort:c})}},{key:"moveCategory",value:function(e){var a=e.id,t=e.to,r=o.a.apiHost+"/course/category/"+a+"/move";return i.a(r,{to:t})}},{key:"moveCategoryContent",value:function(e){var a=e.id,t=e.to,r=o.a.apiHost+"/course/category/"+a+"/move/content";return i.a(r,{to:t})}},{key:"getUploadCategoryImgUrl",value:function(){return o.a.apiHost+"/common/upload/file"}},{key:"delete_cate",value:function(a){var t=c+"/category/delete/"+a;return i.b(t,{}).then(function(a){return 0==a.code?(xmview.showTip("success",a.message),a.data):(xmview.showTip("error",a.message),e.reject(a))})}},{key:"courseList",value:function(e,a,t){var r=c+"/search/name";return i.b(r,{keyword:e,page:a,pagesize:t}).then(function(e){return e.data})}},{key:"getPublicCourselist",value:function(a){var t=a.course_name,r=void 0===t?"":t,n=a.status,o=a.category_id,s=a.time_start,l=a.time_end,d=a.page,u=a.pagesize,m=c+"/lists";return i.b(m,{course_name:r,status:n,category_id:o,time_start:s,time_end:l,page:d,pagesize:u},!1).then(function(a){return 0==a.code?a.data:e.reject(a)})}},{key:"addCourse",value:function(a){var t=a.category_id,r=a.course_name,n=a.image,o=a.description,s=a.tags,l=a.type,d=a.material_type,u=a.material_id,m=a.need_testing,p=a.status,f=c+"/create";return i.a(f,{category_id:t,course_name:r,image:n,description:o,tags:s,type:l,material_type:d,material_id:u,need_testing:m,status:p}).then(function(a){return 0==a.code?a.data:e.reject(a)})}},{key:"getCourseInfo",value:function(e){var a=e.course_id,t=(n.a.getUserInfo().company_id,o.a.apiHost+"/course/get/"+a);return i.b(t).then(function(e){return e.data})}},{key:"editCourse",value:function(e){var a=e.govid,t=e.contentid,r=e.category_id,s=e.course_name,c=e.image,l=e.tags,d=e.type,u=e.material_type,m=e.material_id,p=e.description,f=e.need_testing,v=e.status,_=e.limit_time,g=e.limit_repeat,y=e.score_pass;a=a||n.a.getUserInfo().company_id;var h=o.a.apiHost+"/course/edit/"+t;return i.a(h,{category_id:r,course_name:s,image:c,tags:l,type:d,material_type:u,material_id:m,description:p,need_testing:f,limit_time:_,status:v,limit_repeat:g,score_pass:y}).then(function(e){return e.data})}},{key:"offlineCourse",value:function(e){var a=e.govid,t=e.course_id,r=e.disabled;a=a||n.a.getUserInfo().company_id;var s=o.a.apiHost+"/sys/course/"+t+"/disable";return i.a(s,{disabled:r})}},{key:"commonUploadImage",value:function(){return o.a.apiHost+"/common/upload/file"}},{key:"commonUploadImageBase",value:function(e){var a=e.image,t=e.alias,r=void 0===t?Date.now()+".jpg":t,n=e.biz,s=void 0===n?"course":n,c=e.extpath,l=o.a.apiHost+"/common/upload/base64";return i.a(l,{image:a,alias:r,biz:s,extpath:c}).then(function(e){return xmview.showTip("success",e.message),e.data})}},{key:"uploadCover4addCourse",value:function(e){var a=e.image,t=e.alias,r=void 0===t?Date.now()+".jpg":t,n=o.a.apiHost+"/course/subject/image";return i.a(n,{image:a,alias:r}).then(function(e){return e.data})}},{key:"deleteCourse",value:function(e){var a=e.govid,t=e.course_id;a=a||n.a.getUserInfo().company_id;var r=o.a.apiHost+"/com/"+a+"/course/"+t;return i.d(r,{})}},{key:"deleteCourseMulty",value:function(e){var a=e.govid,t=e.id;a=a||n.a.getUserInfo().company_id;var r=o.a.apiHost+"/com/"+a+"/course/batchdel";return i.a(r,{id:t})}},{key:"deleteVideoMulty",value:function(e){var a=e.id,t=c+"/video/batchdel";return i.a(t,{id:a})}},{key:"moveCourseToCategoryMulty",value:function(e){var a=e.govid,t=e.id,r=e.catid;a=a||n.a.getUserInfo().company_id;var s=o.a.apiHost+"/com/"+a+"/course/batchmove";return i.a(s,{id:t,catid:r})}},{key:"getCourseDocUploadUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.govid;return a=a||n.a.getUserInfo().company_id,o.a.apiHost+"/course/doc/upload"}},{key:"getTestingInfo",value:function(e){var a=e.course_id,t=o.a.apiHost+"/course/subject/listoptions";return i.b(t,{course_id:a}).then(function(e){return e.data})}},{key:"addOrEditTesting",value:function(a){var t=a.govid,r=a.course_id,s=a.subjects;t=t||n.a.getUserInfo().company_id;var c=o.a.apiHost+"/course/subject/updates/"+r;return i.a(c,s).then(function(a){return 0==a.code?(xmview.showTip("success",a.message),a.data):(xmview.showTip("error",a.message),e.reject(a))})}},{key:"getAlbumList",value:function(e){var a=e.govid,t=e.page,r=e.pagesize,s=e.keyword,c=e.time_start,l=e.time_end;a=a||n.a.getUserInfo().company_id;var d=o.a.apiHost+"/com/"+a+"/course/album/search";return i.b(d,{page:t,pagesize:r,keyword:s,time_start:c,time_end:l}).then(function(e){return e.data})}},{key:"deleteAlbum",value:function(e){var a=e.govid,t=e.id;a=a||n.a.getUserInfo().company_id;var r=o.a.apiHost+"/com/"+a+"/course/album/"+t;return i.d(r,{})}},{key:"deleteAlbumMulty",value:function(e){var a=e.govid,t=e.ids;a=a||n.a.getUserInfo().company_id;var r=o.a.apiHost+"/com/"+a+"/course/album/batchdel";return i.a(r,{id:t.join(",")})}},{key:"addAlbum",value:function(e){var a=e.govid,t=e.course_id,r=e.name;a=a||n.a.getUserInfo().company_id;var s=o.a.apiHost+"/com/"+a+"/course/album/add";return i.a(s,{course_id:t.join(","),name:r})}},{key:"editAlbum",value:function(e){var a=e.govid,t=e.course_id,r=e.name;a=a||n.a.getUserInfo().company_id;var s=o.a.apiHost+"/com/"+a+"/course/album/edit";return i.a(s,{course_id:t.join(","),name:r})}},{key:"getCourseSubject",value:function(e){var a=e.id,t=c+"/"+a+"/subject/stat";return i.b(t).then(function(e){return e.data})}},{key:"getSubjectAnswer",value:function(e){var a=e.c_id,t=e.s_id,r=c+"/"+a+"/subject/"+t+"/stat";return i.b(r).then(function(e){return e.data.stat})}}]),a}();a.a=new l}).call(a,t(9))},171:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{value:Array,closable:{type:Boolean,default:!0}},data:function(){return{currVal:this.value||[],inputVisible:!1,inputValue:void 0}},created:function(){},activated:function(){},watch:{value:function(e){(e!=this.currVal||e&&e.length!=this.currVal.length)&&(this.currVal=e)},currVal:function(e){e.length==this.currVal&&e==this.currVal||this.$emit("input",e)}},methods:{handleClose:function(e){this.currVal.splice(this.currVal.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(a){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&this.currVal.push(e),this.inputVisible=!1,this.inputValue=""}},components:{}}},172:function(e,a,t){a=e.exports=t(132)(!0),a.push([e.i,"#component-form-tags{display:inline-block}#component-form-tags .el-tag{margin-right:5px}#component-form-tags .input-new-tag{display:inline-block;width:80px!important}","",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/component/form/Tags.vue"],names:[],mappings:"AACA,qBAAqB,oBAAoB,CACxC,AACD,6BAA6B,gBAAgB,CAC5C,AACD,oCAAoC,qBAAqB,oBAAqB,CAC7E",file:"Tags.vue",sourcesContent:["\n#component-form-tags{display:inline-block\n}\n#component-form-tags .el-tag{margin-right:5px\n}\n#component-form-tags .input-new-tag{display:inline-block;width:80px !important\n}\n"],sourceRoot:""}])},173:function(e,a,t){var r=t(172);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(133)("0db94868",r,!0)},174:function(e,a,t){t(173);var r=t(10)(t(171),t(175),null,null);e.exports=r.exports},175:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("article",{attrs:{id:"component-form-tags"}},[e._l(e.currVal,function(a){return t("el-tag",{key:a,attrs:{closable:e.closable,"close-transition":!1},on:{close:function(t){e.handleClose(a)}}},[t("i",[e._v(e._s(a))])])}),e._v(" "),e.inputVisible?t("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{placeholder:"输入标签",size:"mini"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13))return null;e.handleInputConfirm(a)}},model:{value:e.inputValue,callback:function(a){e.inputValue=a},expression:"inputValue"}}):t("el-button",{attrs:{size:"small"},on:{click:e.showInput}},[e._v("添加标签")])],2)},staticRenderFns:[]}},239:function(e,a,t){"use strict";function r(){return{id:0,name:"",remark:"",sort:0,category_type:"",pid:"",ended:"",disabled:""}}Object.defineProperty(a,"__esModule",{value:!0});var i=t(167),n=t(174),o=t.n(n);a.default={name:"sys-form",components:{vTags:o.a},data:function(){return{imgUrl:"",loadingData:!1,currentData:{data:{},pindex:-1,index:-1},fetchParam:r(),rules:{name:{required:!0,message:"请输入栏目名称"}},resultData:[],role_list:[],courseTags:[]}},activated:function(){var e=this;xmview.setContentLoading(!1),void 0!=this.$route.params.course_id?i.a.getCourseInfo(this.$route.params.course_id).then(function(a){e.fetchParam=a}):this.fetchParam=r(),this.loadingData=!1},methods:{btnNextClick:function(){var e=this;this.$refs.form.validate(function(a){if(a){var t=i.a.create_cate;e.$route.params.course_id&&(t=i.a.update_cate),t(e.fetchParam).then(function(a){xmview.showTip("success","数据提交成功"),e.$refs.form.resetFields(),e.currentData={data:[],pindex:-1,index:-1},e.courseTags=[],e.fetchParam.id||(e.fetchParam.id=a.id)})}})}}}},284:function(e,a,t){a=e.exports=t(132)(!0),a.push([e.i,'#sys-form{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff}#sys-form:after{content:"";clear:both;display:block}#sys-form .pagin{float:right;margin-top:15px}#sys-form .bottom-manage{margin-top:15px}.text-blue{color:#20a0ff}.text-light-blue{color:#58b7ff}.text-dark-blue{color:#1d8ce0}.text-success{color:#13ce66}.text-warning{color:#f7ba2a}.text-danger{color:#ff4949}#sys-form .el-form{max-width:700px}#sys-form .submit-form{width:40%;padding:20px}#sys-form .submit-form .subButton{text-align:center}',"",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/course/category/Form.vue"],names:[],mappings:"AACA,UAAU,aAAa,kBAAkB,yBAAyB,kBAAkB,eAAe,CAClG,AACD,gBAAgB,WAAW,WAAW,aAAa,CAClD,AACD,iBAAiB,YAAY,eAAe,CAC3C,AACD,yBAAyB,eAAe,CACvC,AACD,WAAW,aAAa,CACvB,AACD,iBAAiB,aAAa,CAC7B,AACD,gBAAgB,aAAa,CAC5B,AACD,cAAc,aAAa,CAC1B,AACD,cAAc,aAAa,CAC1B,AACD,aAAa,aAAa,CACzB,AACD,mBAAmB,eAAe,CACjC,AACD,uBAAuB,UAAU,YAAY,CAC5C,AACD,kCAAkC,iBAAiB,CAClD",file:"Form.vue",sourcesContent:["\n#sys-form{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff\n}\n#sys-form:after{content:'';clear:both;display:block\n}\n#sys-form .pagin{float:right;margin-top:15px\n}\n#sys-form .bottom-manage{margin-top:15px\n}\n.text-blue{color:#20A0FF\n}\n.text-light-blue{color:#58B7FF\n}\n.text-dark-blue{color:#1D8CE0\n}\n.text-success{color:#13CE66\n}\n.text-warning{color:#F7BA2A\n}\n.text-danger{color:#FF4949\n}\n#sys-form .el-form{max-width:700px\n}\n#sys-form .submit-form{width:40%;padding:20px\n}\n#sys-form .submit-form .subButton{text-align:center\n}\n"],sourceRoot:""}])},321:function(e,a,t){var r=t(284);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(133)("2ee7891d",r,!0)},369:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{attrs:{id:"sys-form"}},[t("section",{staticClass:"upload-avatar"},[t("div",{staticClass:"img-container"},[t("img",{attrs:{src:e.imgUrl}})])]),e._v(" "),t("section",{staticClass:"submit-form"},[t("el-form",{ref:"form",attrs:{"label-width":"120px",rules:e.rules,model:e.fetchParam}},[t("el-form-item",{attrs:{label:"栏目名称",prop:"name"}},[t("el-input",{model:{value:e.fetchParam.name,callback:function(a){e.fetchParam.name=a},expression:"fetchParam.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{model:{value:e.fetchParam.remark,callback:function(a){e.fetchParam.remark=a},expression:"fetchParam.remark"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序",prop:"sort"}},[t("el-input",{attrs:{type:"number"},model:{value:e.fetchParam.sort,callback:function(a){e.fetchParam.sort=a},expression:"fetchParam.sort"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"父级栏目id",prop:"pid"}},[t("el-input",{model:{value:e.fetchParam.pid,callback:function(a){e.fetchParam.pid=a},expression:"fetchParam.pid"}})],1),e._v(" "),t("div",{staticClass:"el-form-item"},[t("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"},attrs:{for:"category_type"}},[e._v("\n                    \t栏目分类\n                ")]),e._v(" "),t("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"120px"}},[t("label",{staticClass:"el-radio radio"},[t("span",{class:{"el-radio__input":!0,"is-checked":1==e.fetchParam.category_type}},[t("span",{staticClass:"el-radio__inner"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.category_type,expression:"fetchParam.category_type"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"1",name:"category_type"},domProps:{checked:e._q(e.fetchParam.category_type,"1")},on:{__c:function(a){e.fetchParam.category_type="1"}}})]),e._v(" "),t("span",{staticClass:"el-radio__label"},[e._v("课程栏目")])]),e._v(" "),t("label",{staticClass:"el-radio radio"},[t("span",{class:{"el-radio__input":!0,"is-checked":2==e.fetchParam.category_type}},[t("span",{staticClass:"el-radio__inner"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.category_type,expression:"fetchParam.category_type"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"2",name:"category_type"},domProps:{checked:e._q(e.fetchParam.category_type,"2")},on:{__c:function(a){e.fetchParam.category_type="2"}}})]),e._v(" "),t("span",{staticClass:"el-radio__label"},[e._v("应试课程栏目")])])])]),e._v(" "),t("div",{staticClass:"el-form-item"},[t("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"},attrs:{for:"ended"}},[e._v("\n                    是否与引用同步\n                ")]),e._v(" "),t("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"120px"}},[t("label",{staticClass:"el-radio radio"},[t("span",{class:{"el-radio__input":!0,"is-checked":1==e.fetchParam.ended}},[t("span",{staticClass:"el-radio__inner"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.ended,expression:"fetchParam.ended"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"1",name:"ended"},domProps:{checked:e._q(e.fetchParam.ended,"1")},on:{__c:function(a){e.fetchParam.ended="1"}}})]),e._v(" "),t("span",{staticClass:"el-radio__label"},[e._v("是")])]),e._v(" "),t("label",{staticClass:"el-radio radio"},[t("span",{class:{"el-radio__input":!0,"is-checked":0==e.fetchParam.ended}},[t("span",{staticClass:"el-radio__inner"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.ended,expression:"fetchParam.ended"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"0",name:"ended"},domProps:{checked:e._q(e.fetchParam.ended,"0")},on:{__c:function(a){e.fetchParam.ended="0"}}})]),e._v(" "),t("span",{staticClass:"el-radio__label"},[e._v("否")])])])]),e._v(" "),t("div",{staticClass:"el-form-item"},[t("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"},attrs:{for:"disabled"}},[e._v("\n                    \t是否禁用\n                ")]),e._v(" "),t("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"120px"}},[t("label",{staticClass:"el-radio radio"},[t("span",{class:{"el-radio__input":!0,"is-checked":1==e.fetchParam.disabled}},[t("span",{staticClass:"el-radio__inner"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.disabled,expression:"fetchParam.disabled"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"1",name:"disabled"},domProps:{checked:e._q(e.fetchParam.disabled,"1")},on:{__c:function(a){e.fetchParam.disabled="1"}}})]),e._v(" "),t("span",{staticClass:"el-radio__label"},[e._v("是")])]),e._v(" "),t("label",{staticClass:"el-radio radio"},[t("span",{class:{"el-radio__input":!0,"is-checked":0==e.fetchParam.disabled}},[t("span",{staticClass:"el-radio__inner"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.disabled,expression:"fetchParam.disabled"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"0",name:"disabled"},domProps:{checked:e._q(e.fetchParam.disabled,"0")},on:{__c:function(a){e.fetchParam.disabled="0"}}})]),e._v(" "),t("span",{staticClass:"el-radio__label"},[e._v("否")])])])]),e._v(" "),t("el-form-item",{attrs:{label:""}},[t("el-button",{on:{click:function(a){e.$router.push({name:"sys-index"})}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.btnNextClick}},[e._v("确认")])],1)],1)],1)])},staticRenderFns:[]}},45:function(e,a,t){t(321);var r=t(10)(t(239),t(369),null,null);e.exports=r.exports}});
//# sourceMappingURL=3.b5c4a3afda5e869e7dcb.js.map