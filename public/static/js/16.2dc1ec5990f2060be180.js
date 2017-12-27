webpackJsonp([16],{164:function(e,t,a){a(430);var n=a(10)(a(302),a(502),null,null);e.exports=n.exports},184:function(e,t,a){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=a(23),r=a(4),o=a(3),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=o.a.apiHost+"/course",l=function(){function t(){n(this,t)}return s(t,[{key:"getCategoryTree",value:function(e){var t=e.id,a=void 0===t?"tree":t,n=e.type,r=e.filter,o=void 0===r||r,s=e.pid,l=void 0===s?-1:s,d=e.level,u=void 0===d?-1:d,p=c+"/category/lists";return i.b(p,{id:a,filter:o,type:n,pid:l,level:u}).then(function(e){return e})}},{key:"search_cate",value:function(t){var a=t.id,n=t.name,r=t.category_type,o=t.pid,s=t.level,l=t.ended,d=t.disabled,u=t.page,p=t.pagesize,v=c+"/category/lists";return i.b(v,{id:a,name:n,category_type:r,pid:o,level:s,ended:l,disabled:d,page:u,pagesize:p},!1).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"create_cate",value:function(t){var a=t.name,n=t.sort,r=t.category_type,o=t.pid,s=t.ended,l=t.image,d={name:a,sort:n,category_type:r,pid:o,ended:s,image:l};0===o&&delete d.pid;var u=c+"/category/create";return i.a(u,d).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"update_cate",value:function(t){var a=t.id,n=t.name,r=t.image,o=t.category_type,s=t.sort,l=t.ended,d=t.disabled,u=t.pid,p=c+"/category/edit/"+a;return i.a(p,{name:n,image:r,category_type:o,sort:s,ended:l,disabled:d,pid:u}).then(function(t){if(t.code)return e.reject(t)})}},{key:"updateCategory",value:function(e){var t=e.govid,a=e.type,n=e.name,s=e.image,c=e.sort,l=e.id;t=t||r.a.getUserInfo().company_id;var d=o.a.apiHost+"/com/"+t+"/course/category/"+l;return i.a(d,{type:a,name:n,image:s,sort:c})}},{key:"moveCategory",value:function(e){var t=e.id,a=e.to,n=o.a.apiHost+"/course/category/"+t+"/move";return i.a(n,{to:a})}},{key:"moveCategoryContent",value:function(e){var t=e.id,a=e.to,n=o.a.apiHost+"/course/category/"+t+"/move/content";return i.a(n,{to:a})}},{key:"getUploadCategoryImgUrl",value:function(){return o.a.apiHost+"/common/upload/file"}},{key:"delete_cate",value:function(t){var a=c+"/category/delete/"+t;return i.b(a,{}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"courseList",value:function(e,t,a){var n=c+"/search/name";return i.b(n,{keyword:e,page:t,pagesize:a}).then(function(e){return e.data})}},{key:"getPublicCourselist",value:function(t){var a=t.course_name,n=void 0===a?"":a,r=t.status,o=t.category_id,s=t.time_start,l=t.time_end,d=t.page,u=t.pagesize,p=c+"/lists";return i.b(p,{course_name:n,status:r,category_id:o,time_start:s,time_end:l,page:d,pagesize:u},!1).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"addCourse",value:function(t){var a=t.category_id,n=t.course_name,r=t.image,o=t.description,s=t.tags,l=t.type,d=t.material_type,u=t.material_id,p=t.need_testing,v=t.status,h=c+"/create";return i.a(h,{category_id:a,course_name:n,image:r,description:o,tags:s,type:l,material_type:d,material_id:u,need_testing:p,status:v}).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"getCourseInfo",value:function(e){var t=e.course_id,a=(r.a.getUserInfo().company_id,o.a.apiHost+"/course/get/"+t);return i.b(a).then(function(e){return e.data})}},{key:"editCourse",value:function(e){var t=e.govid,a=e.contentid,n=e.category_id,s=e.course_name,c=e.image,l=e.tags,d=e.type,u=e.material_type,p=e.material_id,v=e.description,h=e.need_testing,g=e.status,m=e.limit_time,f=e.limit_repeat,y=e.score_pass;t=t||r.a.getUserInfo().company_id;var _=o.a.apiHost+"/course/edit/"+a;return i.a(_,{category_id:n,course_name:s,image:c,tags:l,type:d,material_type:u,material_id:p,description:v,need_testing:h,limit_time:m,status:g,limit_repeat:f,score_pass:y}).then(function(e){return e.data})}},{key:"offlineCourse",value:function(e){var t=e.govid,a=e.course_id,n=e.status;t=t||r.a.getUserInfo().company_id;var s=o.a.apiHost+"/course/edit/"+a;return i.a(s,{status:n})}},{key:"commonUploadImage",value:function(){return o.a.apiHost+"/common/upload/file"}},{key:"commonUploadImageBase",value:function(e){var t=e.image,a=e.alias,n=void 0===a?Date.now()+".jpg":a,r=e.biz,s=void 0===r?"course":r,c=e.extpath,l=o.a.apiHost+"/common/upload/base64";return i.a(l,{image:t,alias:n,biz:s,extpath:c}).then(function(e){return xmview.showTip("success",e.message),e.data})}},{key:"commonUploadImageBaseSection",value:function(e){var t=e.image,a=e.alias,n=void 0===a?Date.now()+".jpg":a,r=e.biz,s=void 0===r?"section":r,c=e.extpath,l=o.a.apiHost+"/common/upload/base64";return i.a(l,{image:t,alias:n,biz:s,extpath:c}).then(function(e){return xmview.showTip("success",e.message),e.data})}},{key:"uploadCover4addCourse",value:function(e){var t=e.image,a=e.alias,n=void 0===a?Date.now()+".jpg":a,r=o.a.apiHost+"/course/subject/image";return i.a(r,{image:t,alias:n}).then(function(e){return e.data})}},{key:"deleteCourse",value:function(e){var t=e.govid,a=e.course_id;t=t||r.a.getUserInfo().company_id;var n=o.a.apiHost+"/course/delete/"+a;return i.d(n,{})}},{key:"deleteCourseMulty",value:function(e){var t=e.govid,a=e.id;t=t||r.a.getUserInfo().company_id;var n=o.a.apiHost+"/com/"+t+"/course/batchdel";return i.a(n,{id:a})}},{key:"deleteVideoMulty",value:function(e){var t=e.id,a=c+"/video/batchdel";return i.a(a,{id:t})}},{key:"moveCourseToCategoryMulty",value:function(e){var t=e.govid,a=e.id,n=e.catid;t=t||r.a.getUserInfo().company_id;var s=o.a.apiHost+"/com/"+t+"/course/batchmove";return i.a(s,{id:a,catid:n})}},{key:"getCourseDocUploadUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.govid;return t=t||r.a.getUserInfo().company_id,o.a.apiHost+"/course/doc/upload"}},{key:"getTestingInfo",value:function(e){var t=e.course_id,a=o.a.apiHost+"/course/subject/listoptions";return i.b(a,{course_id:t}).then(function(e){return e.data})}},{key:"addOrEditTesting",value:function(t){var a=t.govid,n=t.course_id,s=t.subjects;a=a||r.a.getUserInfo().company_id;var c=o.a.apiHost+"/course/subject/updates/"+n;return i.a(c,s).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"getAlbumList",value:function(e){var t=e.govid,a=e.page,n=e.pagesize,s=e.keyword,c=e.time_start,l=e.time_end;t=t||r.a.getUserInfo().company_id;var d=o.a.apiHost+"/com/"+t+"/course/album/search";return i.b(d,{page:a,pagesize:n,keyword:s,time_start:c,time_end:l}).then(function(e){return e.data})}},{key:"deleteAlbum",value:function(e){var t=e.govid,a=e.id;t=t||r.a.getUserInfo().company_id;var n=o.a.apiHost+"/com/"+t+"/course/album/"+a;return i.d(n,{})}},{key:"deleteAlbumMulty",value:function(e){var t=e.govid,a=e.ids;t=t||r.a.getUserInfo().company_id;var n=o.a.apiHost+"/com/"+t+"/course/album/batchdel";return i.a(n,{id:a.join(",")})}},{key:"addAlbum",value:function(e){var t=e.govid,a=e.course_id,n=e.name;t=t||r.a.getUserInfo().company_id;var s=o.a.apiHost+"/com/"+t+"/course/album/add";return i.a(s,{course_id:a.join(","),name:n})}},{key:"editAlbum",value:function(e){var t=e.govid,a=e.course_id,n=e.name;t=t||r.a.getUserInfo().company_id;var s=o.a.apiHost+"/com/"+t+"/course/album/edit";return i.a(s,{course_id:a.join(","),name:n})}},{key:"getCourseSubject",value:function(e){var t=e.id,a=c+"/"+t+"/subject/stat";return i.b(a).then(function(e){return e.data})}},{key:"getSubjectAnswer",value:function(e){var t=e.c_id,a=e.s_id,n=c+"/"+t+"/subject/"+a+"/stat";return i.b(n).then(function(e){return e.data.stat})}}]),t}();t.a=new l}).call(t,a(9))},185:function(e,t,a){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=a(23),r=a(3),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=r.a.apiHost+"/gov",c=function(){function t(){n(this,t)}return o(t,[{key:"getSelectList",value:function(e){var t=e.id,a=void 0===t?"":t,n=e.name,r=void 0===n?"":n,o=e.category,c=void 0===o?"":o,l=e.pagesize,d=void 0===l?"":l,u=e.page,p=void 0===u?"":u,v=e.pid,h=void 0===v?"":v,g=e.province_id,m=void 0===g?"":g,f=e.city_id,y=void 0===f?"":f,_=e.area_id,b=void 0===_?"":_,A=e.town_id,C=void 0===A?"":A,x=e.village_id,w=void 0===x?"":x,k=e.deleted,D=void 0===k?"":k,S=s+"/lists";return i.b(S,{id:a,name:r,category:c,page:p,pagesize:d,pid:h,province_id:m,city_id:y,area_id:b,town_id:C,village_id:w,deleted:D},!1).then(function(e){return e.data})}},{key:"postSelectList",value:function(e){var t=e.id,a=void 0===t?"":t,n=e.name,r=void 0===n?"":n,o=e.category,c=void 0===o?"":o,l=e.pagesize,d=void 0===l?"":l,u=e.page,p=void 0===u?"":u,v=e.pid,h=void 0===v?"":v,g=e.province_id,m=void 0===g?"":g,f=e.city_id,y=void 0===f?"":f,_=e.area_id,b=void 0===_?"":_,A=e.town_id,C=void 0===A?"":A,x=e.village_id,w=void 0===x?"":x,k=e.deleted,D=void 0===k?"":k,S=s+"/lists";return i.a(S,{id:a,name:r,category:c,page:p,pagesize:d,pid:h,province_id:m,city_id:y,area_id:b,town_id:C,village_id:w,deleted:D},!1).then(function(e){return e.data})}},{key:"getGovInfo",value:function(e){var t=s+"/get/"+e;return i.b(t).then(function(e){return e.data})}},{key:"addGov",value:function(t){var a=t.category,n=t.pid,r=t.province_id,o=t.city_id,c=t.area_id,l=t.town_id,d=t.village_id,u=t.name,p=t.concact,v=t.mobile,h=t.email,g=t.mobile_title,m=t.tel,f=t.zip,y=t.fax,_=t.url,b=t.address,A=t.description,C=s+"/create";return i.a(C,{category:a,pid:n,province_id:r,city_id:o,area_id:c,town_id:l,village_id:d,name:u,concact:p,mobile:v,email:h,mobile_title:g,tel:m,zip:f,fax:y,url:_,address:b,description:A}).then(function(t){if(t.code)return e.reject(t)})}},{key:"editGov",value:function(e){var t=s+"/edit/"+e;return i.b(t).then(function(e){return e.data})}},{key:"updateGov",value:function(t){var a=t.gov_id,n=t.category,r=t.pid,o=t.province_id,c=t.city_id,l=t.area_id,d=t.town_id,u=t.village_id,p=t.name,v=t.concact,h=t.mobile,g=t.email,m=t.mobile_title,f=t.tel,y=t.zip,_=t.fax,b=t.url,A=t.address,C=t.description,x=s+"/edit/"+a;return i.a(x,{category:n,pid:r,province_id:o,city_id:c,area_id:l,town_id:d,village_id:u,name:p,concact:v,mobile:h,email:g,mobile_title:m,tel:f,zip:y,fax:_,url:b,address:A,description:C}).then(function(t){if(t.code)return e.reject(t)})}},{key:"govAdminList",value:function(e){var t=e.name,a=e.gov_id,n=e.page,o=e.pagesize,s=e.role_id,c=e.mobile,l=e.active,d=r.a.apiHost+"/user/lists";return i.b(d,{name:t,gov_id:a,page:n,pagesize:o,role_id:s,mobile:c,active:l}).then(function(e){return e.data})}},{key:"govAdmin",value:function(e){var t=e.name,a=e.gov_id,n=e.page,o=e.pagesize,s=r.a.apiHost+"/user/get/"+a;return i.b(s,{name:t,page:n,pagesize:o}).then(function(e){return e.data})}},{key:"addGovAdmin",value:function(t){var a=t.name,n=t.mobile,o=t.passwd,s=t.gov_id,c=t.role_id,l=t.nickname,d=r.a.apiHost+"/user/create";return i.a(d,{name:a,mobile:n,passwd:o,gov_id:s,role_id:c,nickname:l}).then(function(t){if(t.code)return e.reject(t)})}},{key:"delAdmin",value:function(e){var t=e.id,a=r.a.apiHost+"/user/delete/"+t;return i.b(a)}},{key:"a",value:function(t){var a=t.pagesize,n=t.page,r=s+"/lists";return i.b(r,{pagesize:a,page:n}).then(function(t){return 0==t.code?t:e.reject(t)})}},{key:"getAdminInfo",value:function(t){var a=s+"/view/"+t;return i.b(a,{},!1).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"create",value:function(t){var a=t.role_id,n=t.name,r=t.mobile,o=t.email,c=t.password,l=s+"/create";return i.a(l,{role_id:a,name:n,mobile:r,email:o,password:c}).then(function(t){return 0==t.code?t.data:(xmview.showTip("error",t.message),e.reject(t))})}},{key:"update",value:function(t){var a=t.id,n=t.role_id,r=t.name,o=t.mobile,c=t.email,l=t.password,d=t.sex,u=t.avatar,p=t.address,v=s+"/update/"+a;return i.a(v,{role_id:n,name:r,mobile:o,email:c,password:l,sex:d,avatar:u,address:p}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteGov",value:function(t){var a=s+"/delete/"+t;return i.b(a,{}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"delete",value:function(t){var a=s+"/delete/"+t;return i.b(a,{}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteMulty",value:function(e){var t=s+"/batchdel";return i.c(t,{ids:e})}},{key:"moveToCategoryMulty",value:function(e){var t=e.ids,a=e.category_id,n=s+"/batchmove";return i.c(n,{ids:t,category_id:a})}},{key:"setLesson",value:function(t){var a=t.id,n=t.data,r=s+"/"+a+"/setlesson";return i.c(r,n).then(function(t){if(t.code)return e.reject(t)})}},{key:"offline",value:function(e){var t=e.id,a=e.role_id,n=e.name,r=e.mobile,o=e.email,c=e.password,l=e.sex,d=e.avatar,u=e.address,p=e.disabled,v=s+"/update/"+t;return i.a(v,{id:t,role_id:a,name:n,mobile:r,email:o,password:c,sex:l,avatar:d,address:u,disabled:p})}},{key:"online",value:function(e){var t=s+"/update/"+e;return i.a(t,{disabled:0})}},{key:"getUploadUrl",value:function(e){var t=e.image,a=e.alias,n=s+"/upload";return i.a(n,{image:t,alias:a}).then(function(e){return e.data})}},{key:"getCompanyManageStat",value:function(){var e=s+"/user/loginlog/lists";return i.b(e).then(function(e){return e.data})}},{key:"getUserLoginlog",value:function(e){var t=e.page,a=e.pagesize,n=e.name,o=void 0===n?"":n,s=e.user_name,c=void 0===s?"":s,l=e.gov_id,d=e.role_id,u=void 0===d?"":d,p=e.date_start,v=void 0===p?"":p,h=e.date_end,g=void 0===h?"":h,m=r.a.apiHost+"/user/loginlog/lists";return i.b(m,{page:t,pagesize:a,name:o,user_name:c,gov_id:l,role_id:u,date_start:v,date_end:g}).then(function(e){return e.data})}},{key:"getReportUserlogin",value:function(e){var t=e.page,a=e.pagesize,n=e.name,o=void 0===n?"":n,s=e.user_name,c=void 0===s?"":s,l=e.gov_id,d=e.role_id,u=void 0===d?"":d,p=e.date_start,v=void 0===p?"":p,h=e.date_end,g=void 0===h?"":h,m=e.level,f=r.a.apiHost+"/report/userlogin/lists";return i.b(f,{page:t,pagesize:a,name:o,user_name:c,gov_id:l,role_id:u,date_start:v,date_end:g,level:m}).then(function(e){return e.data})}},{key:"getCourseHistory",value:function(e){var t=e.page,a=e.pagesize,n=e.user_id,r=e.gov_id,o=e.category_id,c=e.course_id,l=e.date_start,d=e.date_end,u=s+"/course/history/lists";return i.b(u,{page:t,pagesize:a,user_id:n,gov_id:r,category_id:o,course_id:c,date_start:l,date_end:d}).then(function(e){return e.data})}},{key:"getCompanyStatChart",value:function(e){var t=e.gov_id,a=e.date_start,n=e.date_end,r=s+"/stat/chart";return i.b(r,{gov_id:t,date_start:a,date_end:n}).then(function(e){return e.data})}}]),t}();t.a=new c}).call(t,a(9))},186:function(e,t,a){"use strict";function n(e){return e?i.b(new Date(e)):e}Object.defineProperty(t,"__esModule",{value:!0});var i=a(42),r=void 0;t.default={props:{title:String,start:{},end:{},change:Function},data:function(){return{timespan:[this.start,this.end],pickerOptionsStart:{disabledDate:function(e){return r.timespan[1]?e.getTime()-144e5>=new Date(r.timespan[1]).getTime()&&0!==i.c(e,new Date(r.timespan[0])):null}},pickerOptionsEnd:{disabledDate:function(e){return r.timespan[0]?e.getTime()<=new Date(r.timespan[0]).getTime()&&0!==i.c(e,new Date(r.timespan[0])):null}}}},watch:{start:function(e){n(this.timespan[0])!=e&&(this.timespan[0]=e,e||(this.$refs.start.$el.querySelector("input").value=""))},end:function(e){n(this.timespan[1])!=e&&(this.timespan[1]=e,e||(this.$refs.end.$el.querySelector("input").value=""))}},beforeCreate:function(){r=this},methods:{setCurrVal:function(e){var t=["changeStart","changeEnd"],a=n(this.timespan[e]);this.$emit(t[e],n(a)),this.change&&this.change()}}}},187:function(e,t,a){var n=a(10)(a(186),a(188),null,null);e.exports=n.exports},188:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("i",[e._v(e._s(e.title))]),e._v(" "),a("el-date-picker",{ref:"start",attrs:{editable:!1,clearable:"",align:"right",type:"date","picker-options":e.pickerOptionsStart,placeholder:"开始日期"},on:{change:function(t){e.setCurrVal(0)}},model:{value:e.timespan[0],callback:function(t){var a=e.timespan;Array.isArray(a)?a.splice(0,1,t):e.timespan[0]=t},expression:"timespan[0]"}}),e._v(" "),a("el-date-picker",{ref:"end",attrs:{clearable:"",editable:!1,align:"right",type:"date","picker-options":e.pickerOptionsEnd,placeholder:"结束日期"},on:{change:function(t){e.setCurrVal(1)}},model:{value:e.timespan[1],callback:function(t){var a=e.timespan;Array.isArray(a)?a.splice(1,1,t):e.timespan[1]=t},expression:"timespan[1]"}})],1)},staticRenderFns:[]}},189:function(e,t,a){a(192);var n=a(10)(a(190),a(193),null,null);e.exports=n.exports},190:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{requestCb:Function,changeCb:Function,value:[String,Number],placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},list:Array},data:function(){return{keyword:void 0,selectVal:this.value,data:null==this.list?[]:this.list,loading:!1,currPlaceholder:this.placeholder,input:null,isSearching:!1,isShowGetMore:!0}},watch:{data:function(e){e.length<1&&(this.currPlaceholder=this.placeholder),this.initGetMore(),this.loading=!1},placeholder:function(e){this.currPlaceholder=e},value:function(e){this.selectVal!=e&&(this.selectVal=e),null!=this.value&&this.currPlaceholder&&this.data.length<1&&this.data.push({id:this.value,name:this.placeholder})}},created:function(){this.value&&this.currPlaceholder&&this.data.length<1&&this.data.push({id:this.value,name:this.placeholder})},mounted:function(){this.input=this.$refs.container.$el.querySelector("input")},methods:{filter:function(e){var t=this;this.loading=!0,this.keyword=e,this.requestCb(e,0).then(function(e){t.isShowGetMore=!0,t.processRequestRet(e,1)})},initGetMore:function(){var e=this,t=this;this.$nextTick(function(){var a=e.$refs.domLoading.parentNode;a.loaded||(a.loaded=!0,a.addEventListener("click",function(e){t.input.focus(),t.loading=!0,e=e||window.event,e.preventDefault(),e.stopPropagation(),t.requestCb(t.keyword,t.data.length).then(function(e){t.processRequestRet(e)}),a.loaded=!1},!0))})},handleChange:function(e){this.changeCb&&this.changeCb(e),this.$emit("input",e)},handleVisibleChange:function(e){var t=this;if(0==e)return void(this.currPlaceholder=this.placeholder);this.initGetMore(),(!this.data||this.data.length<1)&&(this.loading=!0,this.requestCb(this.keyword,0).then(function(e){t.processRequestRet(e)}))},processRequestRet:function(e){var t=this;if(0===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)){var a;e.data=e.data.filter(function(e){return e.id!=t.value}),(a=this.data).push.apply(a,n(e.data))}else this.data=e.data;this.isShowGetMore=this.data.length<e.total}}}},191:function(e,t,a){t=e.exports=a(138)(!0),t.push([e.i,".component-form-selectscroll-more{color:#50bfff;cursor:pointer}","",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/component/form/SelectScroll.vue"],names:[],mappings:"AACA,kCAAkC,cAAc,cAAc,CAC7D",file:"SelectScroll.vue",sourcesContent:["\n.component-form-selectscroll-more{color:#50bfff;cursor:pointer\n}\n"],sourceRoot:""}])},192:function(e,t,a){var n=a(191);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(139)("3cfb5a30",n,!0)},193:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{ref:"container",attrs:{placeholder:e.currPlaceholder,clearable:!0,"no-data-text":"暂无数据",disabled:e.disabled,"no-match-text":"没有数据"},on:{"visible-change":e.handleVisibleChange,change:e.handleChange},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}},[a("el-option",{staticStyle:{height:"50px"},attrs:{disabled:!0,value:"xmystinputval"}},[a("el-input",{attrs:{placeholder:"搜索内容"},on:{change:e.filter}})],1),e._v(" "),e._l(e.data,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),e._v(" "),a("el-option",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:!this.data||this.data.length<1,expression:"!this.data || this.data.length < 1"}],attrs:{value:"xmyst2",disabled:!0}},[a("span",[e._v("暂无数据")])]),e._v(" "),a("el-option",{directives:[{name:"show",rawName:"v-show",value:e.isShowGetMore&&this.data&&this.data.length>0,expression:"isShowGetMore && this.data && this.data.length > 0"},{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{value:"xmyst1",disabled:!0}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],ref:"domLoading",staticClass:"component-form-selectscroll-more"},[e._v("点击加载更多")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[e._v("加载中...")])])],2)},staticRenderFns:[]}},194:function(e,t,a){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=a(23),r=a(3),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=r.a.apiHost+"/sys/department",c=function(){function t(){n(this,t)}return o(t,[{key:"getDepartment",value:function(e){var t=e.page,a=void 0===t?"":t,n=e.page_size,r=void 0===n?"":n,o=e.company_id,c=void 0===o?"":o,l=e.province,d=void 0===l?"":l,u=e.city,p=void 0===u?"":u,v=e.area,h=void 0===v?"":v,g=e.keyword,m=void 0===g?"":g,f=e.concact,y=void 0===f?"":f,_=e.time_start,b=void 0===_?"":_,A=e.time_end,C=void 0===A?"":A,x=s+"/search";return i.b(x,{page:a,page_size:r,company_id:c,province:d,city:p,area:h,keyword:m,concact:y,time_start:b,time_end:C},!1).then(function(e){return e.data})}},{key:"getDepInfo",value:function(e){var t=s+"/"+e;return i.b(t).then(function(e){return e.data})}},{key:"depDelete",value:function(t){var a=s+"/"+t;return i.d(a,{}).then(function(t){if(t.code)return e.reject(t)})}},{key:"exportDepartment",value:function(e){var t=s+"/search";i.e(t,Object.assign(e,{export:1}),"department.xls")}}]),t}();t.a=new c}).call(t,a(9))},196:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(189),i=a.n(n),r=a(185);t.default={props:{value:[String,Number],change:Function,placeholder:String,list:Array,disabled:{type:Boolean,default:!1},type:[String,Number]},data:function(){return{currVal:this.value,pageSize:15}},watch:{value:function(e,t){this.currVal!==e&&(this.currVal=e)}},methods:{fetchData:function(e,t){var a=this;return r.a.getSelectList({keyword:e,category:this.type,pagesize:this.pageSize,page:parseInt(t/this.pageSize)+1}).then(function(e){return a.$emit("changelist",e.data),e})},handleChange:function(e){this.currVal=e,this.$emit("input",e),this.$emit("change",e),this.change&&this.change()}},components:{SelectScroll:i.a}}},203:function(e,t,a){var n=a(10)(a(196),a(206),null,null);e.exports=n.exports},206:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("SelectScroll",{attrs:{changeCb:e.handleChange,requestCb:e.fetchData,placeholder:e.placeholder,list:e.list,disabled:e.disabled},model:{value:e.currVal,callback:function(t){e.currVal=t},expression:"currVal"}})},staticRenderFns:[]}},208:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(189),i=a.n(n),r=a(194);t.default={props:{value:[String,Number],change:Function,placeholder:String,list:Array,disabled:{type:Boolean,default:!1}},data:function(){return{currVal:this.value,pageSize:15}},watch:{value:function(e,t){this.currVal!==e&&(this.currVal=e)}},methods:{fetchData:function(e,t){var a=this;return r.a.getDepartment({keyword:e,page_size:this.pageSize,page:parseInt(t/this.pageSize)+1}).then(function(e){return a.$emit("changeList",e.data),e})},handleChange:function(e){this.currVal=e,this.$emit("input",e),this.$emit("change",e),this.change&&this.change()}},components:{SelectScroll:i.a}}},215:function(e,t,a){var n=a(10)(a(208),a(217),null,null);e.exports=n.exports},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("SelectScroll",{attrs:{changeCb:e.handleChange,requestCb:e.fetchData,placeholder:e.placeholder,list:e.list,disabled:e.disabled},model:{value:e.currVal,callback:function(t){e.currVal=t},expression:"currVal"}})},staticRenderFns:[]}},230:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(184),i=a(189),r=a.n(i);t.default={props:{value:[String,Number],change:Function,placeholder:String,list:Array,disabled:{type:Boolean,default:!1}},components:{SelectScroll:r.a},data:function(){return{currVal:this.value,pageSize:10}},watch:{value:function(e,t){this.currVal!==e&&(this.currVal=e)}},methods:{handleChange:function(e){this.currVal=e,this.$emit("input",e),this.$emit("change",e),this.change&&this.change()},fetchData:function(e,t){var a=e,i=parseInt(t/this.pageSize)+1;return n.a.courseList(a,i,this.pageSize)}}}},237:function(e,t,a){var n=a(10)(a(230),a(240),null,null);e.exports=n.exports},240:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("SelectScroll",{attrs:{changeCb:e.handleChange,requestCb:e.fetchData,placeholder:e.placeholder,disabled:e.disabled},model:{value:e.currVal,callback:function(t){e.currVal=t},expression:"currVal"}})},staticRenderFns:[]}},266:function(e,t,a){e.exports=a(5)(184)},302:function(e,t,a){"use strict";function n(){return{date:"yesterday",page:1,page_size:15,type:void 0,store_id:void 0,date_start:"",date_end:""}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(266),r=a.n(i),o=a(185),s=a(237),c=a.n(s),l=a(215),d=a.n(l),u=a(203),p=a.n(u),v=a(187),h=a.n(v);t.default={filters:{passedPercent:function(e){return e?parseInt(100*e)+"%":"-"}},data:function(){return{analysis:{},total:0,loadingData:!1,tableData:[],type:0,xData:[],chart_data:[],maxResult:0,chartData:[],tagName:"active_user",fetchParam:n()}},activated:function(){this.type=parseInt(this.$route.query.type)||0,this.fetchParam.course_id=this.$route.query.course_id,this.fetchParam.department_id=this.$route.query.department_id,this.fetchParam.store_id=this.$route.query.store_id,this.fetchData(),xmview.setContentBack(this.type>0)},methods:{handleClick:function(e,t){var a=this,n=t;this.xData=[],this.chart_data=[],this.chartData.forEach(function(e){a.xData.push(e.day),"活跃人数"==n.target.innerText?a.chart_data.push(e.active_user):"学习人数"==n.target.innerText?a.chart_data.push(e.course_user):"考试人数"==n.target.innerText?a.chart_data.push(e.testing_user):"考试次数"==n.target.innerText?a.chart_data.push(e.testing_number):"私有课数量"==n.target.innerText?a.chart_data.push(e.private_number):"私有课考试人数"==n.target.innerText?a.chart_data.push(e.private_testing_user):"私有课考试次数"==n.target.innerText&&a.chart_data.push(e.private_testing)}),"活跃人数"==n.target.innerText?this.getLineChart("active_user"):"学习人数"==n.target.innerText?this.getLineChart("course_user"):"考试人数"==n.target.innerText?this.getLineChart("testing_user"):"考试次数"==n.target.innerText?this.getLineChart("testing_number"):"私有课数量"==n.target.innerText?this.getLineChart("private_number"):"私有课考试人数"==n.target.innerText?this.getLineChart("private_testing_user"):"私有课考试次数"==n.target.innerText&&this.getLineChart("private_testing");var i=this.chart_data.reduce(function(e,t){return Math.max(e,t)}),r=[i];this.maxResult=r.reduce(function(e,t){return Math.max(e,t)})},getLineChart:function(e){for(var t=this,a=document.getElementById("box-card").getElementsByTagName("section"),n=0;n<a.length;n++)a[n].style.display="none";var i=document.getElementById(e);i.style.display="block",this.$nextTick(function(){var e=r.a.init(i),a={tooltip:{trigger:"axis"},legend:{data:[]},grid:{left:"3%",right:"0%",bottom:20,containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,data:t.xData,axisLabel:{interval:0}}],yAxis:[{type:"value",max:Math.ceil(1.2*t.maxResult)}],series:[{name:"活跃人数",type:"line",areaStyle:{normal:{color:"rgba(0, 0, 0, 0)"}},data:t.chart_data}]};e.setOption(a),window.onresize=e.resize})},initFetchParam:function(){this.fetchParam=n()},handleSizeChange:function(e){this.fetchParam.page_size=e,this.fetchParam.getData()},handleCurrentChange:function(e){this.page=e,this.getData()},fetchData:function(){var e=this;return this.loadingData=!0,this.xData=[],this.chart_data=[],o.a.getCompanyStatView({page:this.fetchParam.page,page_size:this.fetchParam.page_size,store_id:this.$route.query.store_id,date_start:this.fetchParam.date_start,date_end:this.fetchParam.date_end}).then(function(t){e.total=t.total,e.tableData=t.data,e.loadingData=!1}),o.a.getCompanyStatChart({store_id:this.$route.query.store_id,date_start:this.fetchParam.date_start,date_end:this.fetchParam.date_end}).then(function(t){e.chartData=t.data,e.chartData.forEach(function(t){e.xData.push(t.day),e.chart_data.push(t.active_user)})}).then(function(){e.getLineChart("active_user");var t=e.chart_data.reduce(function(e,t){return Math.max(e,t)}),a=[t];e.maxResult=a.reduce(function(e,t){return Math.max(e,t)})}).then(function(){xmview.setContentBack(!0),xmview.setContentLoading(!1)})},exportClick:function(){}},components:{CourseSelect:c.a,DepSelect:d.a,StoreSelect:p.a,DateRange:h.a}}},378:function(e,t,a){t=e.exports=a(138)(!0),t.push([e.i,'#analysis-company-stat-view .table-container{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff}#analysis-company-stat-view .table-container:after{content:"";clear:both;display:block}#analysis-company-stat-view .table-container .pagin{float:right;margin-top:15px}#analysis-company-stat-view .table-container .bottom-manage{margin-top:15px}.text-blue{color:#20a0ff}.text-light-blue{color:#58b7ff}.text-dark-blue{color:#1d8ce0}.text-success{color:#13ce66}.text-warning{color:#f7ba2a}.text-danger{color:#ff4949}#analysis-company-stat-view .table-container .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px}#analysis-company-stat-view .table-container .search>section>span,#analysis-company-stat-view .table-container .search>section i{margin-right:2px}#analysis-company-stat-view .table-container .search>section>*{vertical-align:middle;display:inline-block}#analysis-company-stat-view .table-container .search .el-input{width:auto}.keyword-container{width:90%;margin-left:5%;margin-bottom:5px}#analysis-company-stat-view .yestoday-container{height:134px;margin-bottom:5px}#analysis-company-stat-view .export{float:right;margin-top:7px}#analysis-company-stat-view .el-tabs{display:inline-block}#analysis-company-stat-view .tags{margin-bottom:10px;overflow:hidden}#analysis-company-stat-view .tags li{float:left;list-style-type:none;padding:5px 20px;border:1px solid #ccc;cursor:pointer}#analysis-company-stat-view .tags .activate{background-color:#4db3ff;color:#fff}#analysis-company-stat-view .box-card section{width:100%;height:300px;display:none}#analysis-company-stat-view #active_user{display:block}',"",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/data/companyStat/View.vue"],names:[],mappings:"AACA,6CAA6C,aAAa,kBAAkB,yBAAyB,kBAAkB,eAAe,CACrI,AACD,mDAAmD,WAAW,WAAW,aAAa,CACrF,AACD,oDAAoD,YAAY,eAAe,CAC9E,AACD,4DAA4D,eAAe,CAC1E,AACD,WAAW,aAAa,CACvB,AACD,iBAAiB,aAAa,CAC7B,AACD,gBAAgB,aAAa,CAC5B,AACD,cAAc,aAAa,CAC1B,AACD,cAAc,aAAa,CAC1B,AACD,aAAa,aAAa,CACzB,AACD,6DAA6D,iBAAiB,mBAAmB,qBAAqB,iBAAiB,CACtI,AACD,iIAAiI,gBAAgB,CAChJ,AACD,+DAA+D,sBAAsB,oBAAoB,CACxG,AACD,+DAA+D,UAAU,CACxE,AACD,mBAAmB,UAAU,eAAe,iBAAiB,CAC5D,AACD,gDAAgD,aAAa,iBAAiB,CAC7E,AACD,oCAAoC,YAAY,cAAc,CAC7D,AACD,qCAAqC,oBAAoB,CACxD,AACD,kCAAkC,mBAAmB,eAAe,CACnE,AACD,qCAAqC,WAAW,qBAAqB,iBAAiB,sBAAsB,cAAc,CACzH,AACD,4CAA4C,yBAAyB,UAAU,CAC9E,AACD,8CAA8C,WAAW,aAAa,YAAY,CACjF,AACD,yCAAyC,aAAa,CACrD",file:"View.vue",sourcesContent:["\n#analysis-company-stat-view .table-container{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff\n}\n#analysis-company-stat-view .table-container:after{content:'';clear:both;display:block\n}\n#analysis-company-stat-view .table-container .pagin{float:right;margin-top:15px\n}\n#analysis-company-stat-view .table-container .bottom-manage{margin-top:15px\n}\n.text-blue{color:#20A0FF\n}\n.text-light-blue{color:#58B7FF\n}\n.text-dark-blue{color:#1D8CE0\n}\n.text-success{color:#13CE66\n}\n.text-warning{color:#F7BA2A\n}\n.text-danger{color:#FF4949\n}\n#analysis-company-stat-view .table-container .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px\n}\n#analysis-company-stat-view .table-container .search>section>span,#analysis-company-stat-view .table-container .search>section i{margin-right:2px\n}\n#analysis-company-stat-view .table-container .search>section>*{vertical-align:middle;display:inline-block\n}\n#analysis-company-stat-view .table-container .search .el-input{width:auto\n}\n.keyword-container{width:90%;margin-left:5%;margin-bottom:5px\n}\n#analysis-company-stat-view .yestoday-container{height:134px;margin-bottom:5px\n}\n#analysis-company-stat-view .export{float:right;margin-top:7px\n}\n#analysis-company-stat-view .el-tabs{display:inline-block\n}\n#analysis-company-stat-view .tags{margin-bottom:10px;overflow:hidden\n}\n#analysis-company-stat-view .tags li{float:left;list-style-type:none;padding:5px 20px;border:1px solid #ccc;cursor:pointer\n}\n#analysis-company-stat-view .tags .activate{background-color:#4db3ff;color:#fff\n}\n#analysis-company-stat-view .box-card section{width:100%;height:300px;display:none\n}\n#analysis-company-stat-view #active_user{display:block\n}\n"],sourceRoot:""}])},430:function(e,t,a){var n=a(378);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(139)("31254653",n,!0)},502:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{attrs:{id:"analysis-company-stat-view"}},[a("el-button",{staticClass:"export",attrs:{type:"warning"},on:{click:e.exportClick}},[a("i",{staticClass:"iconfont icon-iconfontexcel"}),e._v(" "),a("i",[e._v("导出")])]),e._v(" "),a("article",{staticClass:"table-container"},[a("article",{staticClass:"search"},[a("DateRange",{attrs:{title:"日期",start:e.fetchParam.date_start,end:e.fetchParam.date_end,change:e.fetchData},on:{changeStart:function(t){return e.fetchParam.date_start=t},changeEnd:function(t){return e.fetchParam.date_end=t}}})],1),e._v(" "),[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:this.tagName,callback:function(e){this.tagName=e},expression:"this.tagName"}},[a("el-tab-pane",{attrs:{label:"活跃人数",name:"active_user"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"学习人数",name:"course_user"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"考试人数",name:"testing_user"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"考试次数",name:"testing_number"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"私有课数量",name:"private_number"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"私有课考试人数",name:"private_testing_user"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"私有课考试次数",name:"private_testing"}})],1)],e._v(" "),a("el-card",{staticClass:"box-card",attrs:{id:"box-card"}},[a("section",{attrs:{id:"active_user"}}),e._v(" "),a("section",{attrs:{id:"course_user"}}),e._v(" "),a("section",{attrs:{id:"testing_user"}}),e._v(" "),a("section",{attrs:{id:"testing_number"}}),e._v(" "),a("section",{attrs:{id:"private_number"}}),e._v(" "),a("section",{attrs:{id:"private_testing_user"}}),e._v(" "),a("section",{attrs:{id:"private_testing"}})]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingData,expression:"loadingData"}],staticClass:"data-table",attrs:{data:e.tableData,fit:!0,border:""}},[a("el-table-column",{attrs:{prop:"stat_date","min-width":"100",label:"日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"active_user","min-width":"100",label:"活跃店员数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"course_user","min-width":"100",label:"学习人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"testing_user","min-width":"100",label:"考试人数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"testing_number","min-width":"100",label:"考试次数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"private_number","min-width":"100",label:"私有课数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"private_testing","min-width":"100",label:"私有课考试次数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"private_testing_user","min-width":"100",label:"私有课考试人数"}})],1),e._v(" "),a("el-pagination",{staticClass:"pagin",attrs:{"current-page":e.fetchParam.page,"page-size":e.fetchParam.page_size,"page-sizes":[15,30,60,100],layout:"sizes,total, prev, pager, next",total:e.total},on:{"size-change":function(t){e.fetchParam.page_size=t,e.fetchData()},"current-change":function(t){e.fetchParam.page=t,e.fetchData()}}})],2)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=16.2dc1ec5990f2060be180.js.map