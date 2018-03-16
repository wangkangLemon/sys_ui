webpackJsonp([10],{165:function(e,t,a){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=a(6),o=a(3),n=a(1),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=n.a.apiHost+"/course",l=function(){function t(){r(this,t)}return s(t,[{key:"getCategoryTree",value:function(e){var t=e.id,a=void 0===t?"tree":t,r=e.type,o=e.filter,n=void 0===o||o,s=e.pid,l=void 0===s?-1:s,u=e.level,d=void 0===u?-1:u,m=e.pagesize,p=void 0===m?-1:m,f=c+"/category/lists";return i.b(f,{id:a,filter:n,type:r,pid:l,level:d,pagesize:p}).then(function(e){return e})}},{key:"search_cate",value:function(t){var a=t.id,r=t.name,o=t.category_type,n=t.pid,s=t.level,l=t.ended,u=t.disabled,d=t.page,m=t.pagesize,p=c+"/category/lists";return i.b(p,{id:a,name:r,category_type:o,pid:n,level:s,ended:l,disabled:u,page:d,pagesize:m},!1).then(function(t){return 0==t.code?t:e.reject(t)})}},{key:"create_cate",value:function(t){var a=t.name,r=t.sort,o=t.sort_type,n=t.category_type,s=t.pid,l=t.ended,u=t.image,d=t.category_subject_num,m=t.course_sort,p={name:a,sort:r,sort_type:o,category_type:n,pid:s,ended:l,image:u,category_subject_num:d,course_sort:m};0===s&&delete p.pid;var f=c+"/category/create";return i.a(f,p).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"update_cate",value:function(t){var a=t.id,r=t.name,o=t.image,n=t.category_type,s=t.sort,l=t.sort_type,u=t.ended,d=t.disabled,m=t.pid,p=t.category_subject_num,f=t.course_sort,_=c+"/category/edit/"+a;return i.a(_,{name:r,image:o,category_type:n,sort:s,sort_type:l,ended:u,disabled:d,pid:m,category_subject_num:p,course_sort:f}).then(function(t){if(t.code)return e.reject(t)})}},{key:"updateCategory",value:function(e){var t=e.govid,a=e.type,r=e.name,s=e.image,c=e.sort,l=e.id;t=t||o.a.getUserInfo().company_id;var u=n.a.apiHost+"/com/"+t+"/course/category/"+l;return i.a(u,{type:a,name:r,image:s,sort:c})}},{key:"moveCategory",value:function(e){var t=e.id,a=e.to,r=n.a.apiHost+"/course/category/"+t+"/move";return i.a(r,{to:a})}},{key:"moveCategoryContent",value:function(e){var t=e.id,a=e.to,r=n.a.apiHost+"/course/category/"+t+"/move/content";return i.a(r,{to:a})}},{key:"getUploadCategoryImgUrl",value:function(){return n.a.apiHost+"/common/upload/file"}},{key:"delete_cate",value:function(t){var a=c+"/category/delete/"+t;return i.b(a,{}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"courseList",value:function(e,t,a){var r=c+"/search/name";return i.b(r,{keyword:e,page:t,pagesize:a}).then(function(e){return e.data})}},{key:"getPublicCourselist",value:function(t){var a=t.course_name,r=void 0===a?"":a,o=t.status,n=t.category_id,s=t.need_testing,l=t.create_start,u=t.create_end,d=t.page,m=t.pagesize,p=c+"/lists";return i.b(p,{course_name:r,status:o,category_id:n,need_testing:s,create_start:l,create_end:u,page:d,pagesize:m},!1).then(function(t){return 0==t.code?t:e.reject(t)})}},{key:"addCourse",value:function(t){var a=t.category_id,r=t.experts_id,o=t.course_name,n=t.image,s=t.description,l=t.tags,u=t.type,d=t.material_type,m=t.material_id,p=t.need_testing,f=(t.status,t.sort),_=t.share,v=c+"/create";return i.a(v,{category_id:a,experts_id:r,course_name:o,image:n,description:s,tags:l,type:u,material_type:d,material_id:m,need_testing:p,sort:f,share:_}).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"getCourseInfo",value:function(e){var t=e.course_id,a=(o.a.getUserInfo().company_id,n.a.apiHost+"/course/get/"+t);return i.b(a).then(function(e){return e.data})}},{key:"editCourse",value:function(e){var t=e.govid,a=e.contentid,r=e.category_id,s=e.experts_id,c=e.course_name,l=e.image,u=e.tags,d=e.type,m=e.material_type,p=e.material_id,f=e.description,_=e.need_testing,v=e.status,g=e.limit_time,y=e.limit_repeat,h=e.score_pass,b=e.sort,A=e.share;t=t||o.a.getUserInfo().company_id;var C=n.a.apiHost+"/course/edit/"+a;return i.a(C,{category_id:r,experts_id:s,course_name:c,image:l,tags:u,type:d,material_type:m,material_id:p,description:f,need_testing:_,limit_time:g,status:v,limit_repeat:y,score_pass:h,sort:b,share:A}).then(function(e){return e.data})}},{key:"offlineCourse",value:function(e){var t=e.govid,a=e.course_id,r=e.status;t=t||o.a.getUserInfo().company_id;var s=n.a.apiHost+"/course/edit/"+a;return i.a(s,{status:r})}},{key:"commonUploadImage",value:function(){return n.a.apiHost+"/common/upload/file"}},{key:"commonUploadImageBase",value:function(e){var t=e.image,a=e.alias,r=void 0===a?Date.now()+".jpg":a,o=e.biz,s=void 0===o?"course":o,c=e.extpath,l=n.a.apiHost+"/common/upload/base64";return i.a(l,{image:t,alias:r,biz:s,extpath:c}).then(function(e){return xmview.showTip("success",e.message),e.data})}},{key:"commonUploadImageBaseSection",value:function(e){var t=e.image,a=e.alias,r=void 0===a?Date.now()+".jpg":a,o=e.biz,s=void 0===o?"section":o,c=e.extpath,l=n.a.apiHost+"/common/upload/base64";return i.a(l,{image:t,alias:r,biz:s,extpath:c}).then(function(e){return xmview.showTip("success",e.message),e.data})}},{key:"uploadCover4addCourse",value:function(e){var t=e.image,a=e.alias,r=void 0===a?Date.now()+".jpg":a,o=n.a.apiHost+"/course/subject/image";return i.a(o,{image:t,alias:r}).then(function(e){return e.data})}},{key:"deleteCourse",value:function(e){var t=e.govid,a=e.course_id;t=t||o.a.getUserInfo().company_id;var r=n.a.apiHost+"/course/delete/"+a;return i.a(r,{})}},{key:"deleteCourseMulty",value:function(e){var t=e.govid,a=e.id;t=t||o.a.getUserInfo().company_id;var r=n.a.apiHost+"/com/"+t+"/course/batchdel";return i.a(r,{id:a})}},{key:"deleteVideoMulty",value:function(e){var t=e.id,a=c+"/video/batchdel";return i.a(a,{id:t})}},{key:"moveCourseToCategoryMulty",value:function(e){var t=e.govid,a=e.id,r=e.catid;t=t||o.a.getUserInfo().company_id;var s=n.a.apiHost+"/com/"+t+"/course/batchmove";return i.a(s,{id:a,catid:r})}},{key:"getCourseDocUploadUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.govid;return t=t||o.a.getUserInfo().company_id,n.a.apiHost+"/course/doc/upload"}},{key:"getTestingInfo",value:function(e){var t=e.course_id,a=n.a.apiHost+"/course/subject/listoptions";return i.b(a,{course_id:t}).then(function(e){return e.data})}},{key:"addOrEditTesting",value:function(t){var a=t.govid,r=t.course_id,s=t.subjects;a=a||o.a.getUserInfo().company_id;var c=n.a.apiHost+"/course/subject/updates/"+r;return i.a(c,s).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"delCourse",value:function(e){var t=e.course_id,a=e.id,r=n.a.apiHost+"/course/subject/delete/"+t+"/"+a;return i.a(r,{}).then(function(e){return e.data})}},{key:"getAlbumList",value:function(e){var t=e.govid,a=e.page,r=e.pagesize,s=e.keyword,c=e.create_start,l=e.create_end;t=t||o.a.getUserInfo().company_id;var u=n.a.apiHost+"/com/"+t+"/course/album/search";return i.b(u,{page:a,pagesize:r,keyword:s,create_start:c,create_end:l}).then(function(e){return e.data})}},{key:"deleteAlbum",value:function(e){var t=e.govid,a=e.id;t=t||o.a.getUserInfo().company_id;var r=n.a.apiHost+"/com/"+t+"/course/album/"+a;return i.a(r,{})}},{key:"deleteAlbumMulty",value:function(e){var t=e.govid,a=e.ids;t=t||o.a.getUserInfo().company_id;var r=n.a.apiHost+"/com/"+t+"/course/album/batchdel";return i.a(r,{id:a.join(",")})}},{key:"addAlbum",value:function(e){var t=e.govid,a=e.course_id,r=e.name;t=t||o.a.getUserInfo().company_id;var s=n.a.apiHost+"/com/"+t+"/course/album/add";return i.a(s,{course_id:a.join(","),name:r})}},{key:"editAlbum",value:function(e){var t=e.govid,a=e.course_id,r=e.name;t=t||o.a.getUserInfo().company_id;var s=n.a.apiHost+"/com/"+t+"/course/album/edit";return i.a(s,{course_id:a.join(","),name:r})}},{key:"getCourseSubject",value:function(e){var t=e.id,a=c+"/"+t+"/subject/stat";return i.b(a).then(function(e){return e.data})}},{key:"getSubjectAnswer",value:function(e){var t=e.c_id,a=e.s_id,r=c+"/"+t+"/subject/"+a+"/stat";return i.b(r).then(function(e){return e.data.stat})}}]),t}();t.a=new l}).call(t,a(2))},205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:Array,closable:{type:Boolean,default:!0}},data:function(){return{currVal:this.value||[],inputVisible:!1,inputValue:void 0}},created:function(){},activated:function(){},watch:{value:function(e){(e!=this.currVal||e&&e.length!=this.currVal.length)&&(this.currVal=e)},currVal:function(e){e.length==this.currVal&&e==this.currVal||this.$emit("input",e)}},methods:{handleClose:function(e){this.currVal.splice(this.currVal.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&this.currVal.push(e),this.inputVisible=!1,this.inputValue=""}},components:{}}},208:function(e,t,a){t=e.exports=a(98)(!0),t.push([e.i,"#component-form-tags{display:inline-block}#component-form-tags .el-tag{margin-right:5px}#component-form-tags .input-new-tag{display:inline-block;width:80px!important}","",{version:3,sources:["/Users/zhaoyicheng/Documents/Code/yxt/PC-old/sys_ui/assets/src/views/component/form/Tags.vue"],names:[],mappings:"AACA,qBAAqB,oBAAoB,CACxC,AACD,6BAA6B,gBAAgB,CAC5C,AACD,oCAAoC,qBAAqB,oBAAqB,CAC7E",file:"Tags.vue",sourcesContent:["\n#component-form-tags{display:inline-block\n}\n#component-form-tags .el-tag{margin-right:5px\n}\n#component-form-tags .input-new-tag{display:inline-block;width:80px !important\n}\n"],sourceRoot:""}])},215:function(e,t,a){var r=a(208);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(99)("0f7a44a6",r,!0)},217:function(e,t,a){a(215);var r=a(5)(a(205),a(219),null,null);e.exports=r.exports},219:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{attrs:{id:"component-form-tags"}},[e._l(e.currVal,function(t){return a("el-tag",{key:t,attrs:{closable:e.closable,"close-transition":!1},on:{close:function(a){e.handleClose(t)}}},[a("i",[e._v(e._s(t))])])}),e._v(" "),e.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{placeholder:"输入标签",size:"mini"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):a("el-button",{attrs:{size:"small"},on:{click:e.showInput}},[e._v("添加标签")])],2)},staticRenderFns:[]}},33:function(e,t,a){a(896);var r=a(5)(a(755),a(981),null,null);e.exports=r.exports},755:function(e,t,a){"use strict";function r(){return{id:0,name:"",remark:"",sort:0,category_type:"",pid:"",ended:"",disabled:""}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(165),o=a(217),n=a.n(o);t.default={name:"sys-form",components:{vTags:n.a},data:function(){return{imgUrl:"",loadingData:!1,currentData:{data:{},pindex:-1,index:-1},fetchParam:r(),rules:{name:{required:!0,message:"请输入栏目名称"}},resultData:[],role_list:[],courseTags:[]}},activated:function(){var e=this;xmview.setContentLoading(!1),void 0!=this.$route.params.course_id?i.a.getCourseInfo(this.$route.params.course_id).then(function(t){e.fetchParam=t}):this.fetchParam=r(),this.loadingData=!1},methods:{btnNextClick:function(){var e=this;this.$refs.form.validate(function(t){if(t){var a=i.a.create_cate;e.$route.params.course_id&&(a=i.a.update_cate),a(e.fetchParam).then(function(t){xmview.showTip("success","数据提交成功"),e.$refs.form.resetFields(),e.currentData={data:[],pindex:-1,index:-1},e.courseTags=[],e.fetchParam.id||(e.fetchParam.id=t.id)})}})}}}},829:function(e,t,a){t=e.exports=a(98)(!0),t.push([e.i,'#sys-form{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff}#sys-form:after{content:"";clear:both;display:block}#sys-form .pagin{float:right;margin-top:15px}#sys-form .bottom-manage{margin-top:15px}.text-blue{color:#20a0ff}.text-light-blue{color:#58b7ff}.text-dark-blue{color:#1d8ce0}.text-success{color:#13ce66}.text-warning{color:#f7ba2a}.text-danger{color:#ff4949}#sys-form .el-form{max-width:700px}#sys-form .submit-form{width:40%;padding:20px}#sys-form .submit-form .subButton{text-align:center}',"",{version:3,sources:["/Users/zhaoyicheng/Documents/Code/yxt/PC-old/sys_ui/assets/src/views/course/category/Form.vue"],names:[],mappings:"AACA,UAAU,aAAa,kBAAkB,yBAAyB,kBAAkB,eAAe,CAClG,AACD,gBAAgB,WAAW,WAAW,aAAa,CAClD,AACD,iBAAiB,YAAY,eAAe,CAC3C,AACD,yBAAyB,eAAe,CACvC,AACD,WAAW,aAAa,CACvB,AACD,iBAAiB,aAAa,CAC7B,AACD,gBAAgB,aAAa,CAC5B,AACD,cAAc,aAAa,CAC1B,AACD,cAAc,aAAa,CAC1B,AACD,aAAa,aAAa,CACzB,AACD,mBAAmB,eAAe,CACjC,AACD,uBAAuB,UAAU,YAAY,CAC5C,AACD,kCAAkC,iBAAiB,CAClD",file:"Form.vue",sourcesContent:["\n#sys-form{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff\n}\n#sys-form:after{content:'';clear:both;display:block\n}\n#sys-form .pagin{float:right;margin-top:15px\n}\n#sys-form .bottom-manage{margin-top:15px\n}\n.text-blue{color:#20A0FF\n}\n.text-light-blue{color:#58B7FF\n}\n.text-dark-blue{color:#1D8CE0\n}\n.text-success{color:#13CE66\n}\n.text-warning{color:#F7BA2A\n}\n.text-danger{color:#FF4949\n}\n#sys-form .el-form{max-width:700px\n}\n#sys-form .submit-form{width:40%;padding:20px\n}\n#sys-form .submit-form .subButton{text-align:center\n}\n"],sourceRoot:""}])},896:function(e,t,a){var r=a(829);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(99)("fa685404",r,!0)},981:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{attrs:{id:"sys-form"}},[a("section",{staticClass:"upload-avatar"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:e.imgUrl}})])]),e._v(" "),a("section",{staticClass:"submit-form"},[a("el-form",{ref:"form",attrs:{"label-width":"120px",rules:e.rules,model:e.fetchParam}},[a("el-form-item",{attrs:{label:"栏目名称",prop:"name"}},[a("el-input",{model:{value:e.fetchParam.name,callback:function(t){e.fetchParam.name=t},expression:"fetchParam.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{model:{value:e.fetchParam.remark,callback:function(t){e.fetchParam.remark=t},expression:"fetchParam.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{type:"number"},model:{value:e.fetchParam.sort,callback:function(t){e.fetchParam.sort=t},expression:"fetchParam.sort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"父级栏目id",prop:"pid"}},[a("el-input",{model:{value:e.fetchParam.pid,callback:function(t){e.fetchParam.pid=t},expression:"fetchParam.pid"}})],1),e._v(" "),a("div",{staticClass:"el-form-item"},[a("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"},attrs:{for:"category_type"}},[e._v("\n                    \t栏目分类\n                ")]),e._v(" "),a("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"120px"}},[a("label",{staticClass:"el-radio radio"},[a("span",{class:{"el-radio__input":!0,"is-checked":1==e.fetchParam.category_type}},[a("span",{staticClass:"el-radio__inner"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.category_type,expression:"fetchParam.category_type"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"1",name:"category_type"},domProps:{checked:e._q(e.fetchParam.category_type,"1")},on:{__c:function(t){e.fetchParam.category_type="1"}}})]),e._v(" "),a("span",{staticClass:"el-radio__label"},[e._v("课程栏目")])]),e._v(" "),a("label",{staticClass:"el-radio radio"},[a("span",{class:{"el-radio__input":!0,"is-checked":2==e.fetchParam.category_type}},[a("span",{staticClass:"el-radio__inner"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.category_type,expression:"fetchParam.category_type"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"2",name:"category_type"},domProps:{checked:e._q(e.fetchParam.category_type,"2")},on:{__c:function(t){e.fetchParam.category_type="2"}}})]),e._v(" "),a("span",{staticClass:"el-radio__label"},[e._v("应试课程栏目")])])])]),e._v(" "),a("div",{staticClass:"el-form-item"},[a("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"},attrs:{for:"ended"}},[e._v("\n                    是否与引用同步\n                ")]),e._v(" "),a("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"120px"}},[a("label",{staticClass:"el-radio radio"},[a("span",{class:{"el-radio__input":!0,"is-checked":1==e.fetchParam.ended}},[a("span",{staticClass:"el-radio__inner"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.ended,expression:"fetchParam.ended"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"1",name:"ended"},domProps:{checked:e._q(e.fetchParam.ended,"1")},on:{__c:function(t){e.fetchParam.ended="1"}}})]),e._v(" "),a("span",{staticClass:"el-radio__label"},[e._v("是")])]),e._v(" "),a("label",{staticClass:"el-radio radio"},[a("span",{class:{"el-radio__input":!0,"is-checked":0==e.fetchParam.ended}},[a("span",{staticClass:"el-radio__inner"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.ended,expression:"fetchParam.ended"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"0",name:"ended"},domProps:{checked:e._q(e.fetchParam.ended,"0")},on:{__c:function(t){e.fetchParam.ended="0"}}})]),e._v(" "),a("span",{staticClass:"el-radio__label"},[e._v("否")])])])]),e._v(" "),a("div",{staticClass:"el-form-item"},[a("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"},attrs:{for:"disabled"}},[e._v("\n                    \t是否禁用\n                ")]),e._v(" "),a("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"120px"}},[a("label",{staticClass:"el-radio radio"},[a("span",{class:{"el-radio__input":!0,"is-checked":1==e.fetchParam.disabled}},[a("span",{staticClass:"el-radio__inner"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.disabled,expression:"fetchParam.disabled"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"1",name:"disabled"},domProps:{checked:e._q(e.fetchParam.disabled,"1")},on:{__c:function(t){e.fetchParam.disabled="1"}}})]),e._v(" "),a("span",{staticClass:"el-radio__label"},[e._v("是")])]),e._v(" "),a("label",{staticClass:"el-radio radio"},[a("span",{class:{"el-radio__input":!0,"is-checked":0==e.fetchParam.disabled}},[a("span",{staticClass:"el-radio__inner"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fetchParam.disabled,expression:"fetchParam.disabled"}],staticClass:"el-radio__original",attrs:{type:"radio",value:"0",name:"disabled"},domProps:{checked:e._q(e.fetchParam.disabled,"0")},on:{__c:function(t){e.fetchParam.disabled="0"}}})]),e._v(" "),a("span",{staticClass:"el-radio__label"},[e._v("否")])])])]),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{on:{click:function(t){e.$router.push({name:"sys-index"})}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.btnNextClick}},[e._v("确认")])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=10.2a6367296b257883fb39.js.map