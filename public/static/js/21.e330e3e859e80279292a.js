webpackJsonp([21],{165:function(e,t,a){a(413);var i=a(10)(a(299),a(480),null,null);e.exports=i.exports},183:function(e,t,a){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=a(22),o=a(3),r=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),l=o.a.apiHost+"/gov",s=function(){function t(){i(this,t)}return r(t,[{key:"getSelectList",value:function(e){var t=e.id,a=void 0===t?"":t,i=e.name,o=void 0===i?"":i,r=e.category,s=void 0===r?"":r,d=e.pagesize,c=void 0===d?"":d,u=e.page,p=void 0===u?"":u,m=e.pid,v=void 0===m?"":m,h=e.province_id,g=void 0===h?"":h,f=e.city_id,A=void 0===f?"":f,_=e.area_id,b=void 0===_?"":_,y=e.town_id,C=void 0===y?"":y,x=e.village_id,w=void 0===x?"":x,k=e.deleted,B=void 0===k?"":k,D=l+"/lists";return n.b(D,{id:a,name:o,category:s,page:p,pagesize:c,pid:v,province_id:g,city_id:A,area_id:b,town_id:C,village_id:w,deleted:B},!1).then(function(e){return e.data})}},{key:"postSelectList",value:function(e){var t=e.id,a=void 0===t?"":t,i=e.name,o=void 0===i?"":i,r=e.category,s=void 0===r?"":r,d=e.pagesize,c=void 0===d?"":d,u=e.page,p=void 0===u?"":u,m=e.pid,v=void 0===m?"":m,h=e.province_id,g=void 0===h?"":h,f=e.city_id,A=void 0===f?"":f,_=e.area_id,b=void 0===_?"":_,y=e.town_id,C=void 0===y?"":y,x=e.village_id,w=void 0===x?"":x,k=e.deleted,B=void 0===k?"":k,D=l+"/lists";return n.a(D,{id:a,name:o,category:s,page:p,pagesize:c,pid:v,province_id:g,city_id:A,area_id:b,town_id:C,village_id:w,deleted:B},!1).then(function(e){return e.data})}},{key:"getGovInfo",value:function(e){var t=l+"/get/"+e;return n.b(t).then(function(e){return e.data})}},{key:"addGov",value:function(t){var a=t.category,i=t.pid,o=t.province_id,r=t.city_id,s=t.area_id,d=t.town_id,c=t.village_id,u=t.name,p=t.concact,m=t.mobile,v=t.email,h=t.mobile_title,g=t.tel,f=t.zip,A=t.fax,_=t.url,b=t.address,y=t.description,C=l+"/create";return n.a(C,{category:a,pid:i,province_id:o,city_id:r,area_id:s,town_id:d,village_id:c,name:u,concact:p,mobile:m,email:v,mobile_title:h,tel:g,zip:f,fax:A,url:_,address:b,description:y}).then(function(t){if(t.code)return e.reject(t)})}},{key:"editGov",value:function(e){var t=l+"/edit/"+e;return n.b(t).then(function(e){return e.data})}},{key:"updateGov",value:function(t){var a=t.gov_id,i=t.category,o=t.pid,r=t.province_id,s=t.city_id,d=t.area_id,c=t.town_id,u=t.village_id,p=t.name,m=t.concact,v=t.mobile,h=t.email,g=t.mobile_title,f=t.tel,A=t.zip,_=t.fax,b=t.url,y=t.address,C=t.description,x=l+"/edit/"+a;return n.a(x,{category:i,pid:o,province_id:r,city_id:s,area_id:d,town_id:c,village_id:u,name:p,concact:m,mobile:v,email:h,mobile_title:g,tel:f,zip:A,fax:_,url:b,address:y,description:C}).then(function(t){if(t.code)return e.reject(t)})}},{key:"govAdmin",value:function(e){var t=e.name,a=e.gov_id,i=e.page,r=e.page_size,l=o.a.apiHost+"/user/get/"+a;return n.b(l,{name:t,page:i,page_size:r}).then(function(e){return e.data})}},{key:"addGovAdmin",value:function(t){var a=t.name,i=t.sex,o=t.mobile,r=t.passwd,s=t.gov_id,d=t.role_id,c=t.area_id,u=t.nickname,p=l+"/user/create";return n.a(p,{name:a,sex:i,mobile:o,passwd:r,gov_id:s,role_id:d,area_id:c,nickname:u}).then(function(t){if(t.code)return e.reject(t)})}},{key:"a",value:function(t){var a=t.pagesize,i=t.page,o=l+"/lists";return n.b(o,{pagesize:a,page:i}).then(function(t){return 0==t.code?t:e.reject(t)})}},{key:"getAdminInfo",value:function(t){var a=l+"/view/"+t;return n.b(a,{},!1).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"create",value:function(t){var a=t.role_id,i=t.name,o=t.mobile,r=t.email,s=t.password,d=l+"/create";return n.a(d,{role_id:a,name:i,mobile:o,email:r,password:s}).then(function(t){return 0==t.code?t.data:(xmview.showTip("error",t.message),e.reject(t))})}},{key:"update",value:function(t){var a=t.id,i=t.role_id,o=t.name,r=t.mobile,s=t.email,d=t.password,c=t.sex,u=t.avatar,p=t.address,m=l+"/update/"+a;return n.a(m,{role_id:i,name:o,mobile:r,email:s,password:d,sex:c,avatar:u,address:p}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteGov",value:function(t){var a=l+"/delete/"+t;return n.b(a,{}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"delete",value:function(t){var a=l+"/delete/"+t;return n.b(a,{}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteMulty",value:function(e){var t=l+"/batchdel";return n.c(t,{ids:e})}},{key:"moveToCategoryMulty",value:function(e){var t=e.ids,a=e.category_id,i=l+"/batchmove";return n.c(i,{ids:t,category_id:a})}},{key:"setLesson",value:function(t){var a=t.id,i=t.data,o=l+"/"+a+"/setlesson";return n.c(o,i).then(function(t){if(t.code)return e.reject(t)})}},{key:"offline",value:function(e){var t=e.id,a=e.role_id,i=e.name,o=e.mobile,r=e.email,s=e.password,d=e.sex,c=e.avatar,u=e.address,p=e.disabled,m=l+"/update/"+t;return n.a(m,{id:t,role_id:a,name:i,mobile:o,email:r,password:s,sex:d,avatar:c,address:u,disabled:p})}},{key:"online",value:function(e){var t=l+"/update/"+e;return n.a(t,{disabled:0})}},{key:"getUploadUrl",value:function(e){var t=e.image,a=e.alias,i=l+"/upload";return n.a(i,{image:t,alias:a}).then(function(e){return e.data})}},{key:"getCompanyManageStat",value:function(){var e=l+"/user/loginlog/lists";return n.b(e).then(function(e){return e.data})}},{key:"getUserLoginlog",value:function(e){var t=e.page,a=e.pagesize,i=e.name,r=void 0===i?"":i,l=e.user_name,s=void 0===l?"":l,d=e.gov_id,c=e.role_id,u=void 0===c?"":c,p=e.date_start,m=void 0===p?"":p,v=e.date_end,h=void 0===v?"":v,g=o.a.apiHost+"/user/loginlog/lists";return n.b(g,{page:t,pagesize:a,name:r,user_name:s,gov_id:d,role_id:u,date_start:m,date_end:h}).then(function(e){return e.data})}},{key:"getGovManage",value:function(e){var t=e.page,a=e.pagesize,i=e.name,r=void 0===i?"":i,l=e.user_name,s=void 0===l?"":l,d=e.gov_id,c=e.role_id,u=void 0===c?"":c,p=e.date_start,m=void 0===p?"":p,v=e.date_end,h=void 0===v?"":v,g=e.level,f=o.a.apiHost+"/report/userlogin/lists";return n.b(f,{page:t,pagesize:a,name:r,user_name:s,gov_id:d,role_id:u,date_start:m,date_end:h,level:g}).then(function(e){return e.data})}},{key:"getCourseHistory",value:function(e){var t=e.page,a=e.pagesize,i=e.user_id,o=e.gov_id,r=e.category_id,s=e.course_id,d=e.date_start,c=e.date_end,u=l+"/course/history/lists";return n.b(u,{page:t,pagesize:a,user_id:i,gov_id:o,category_id:r,course_id:s,date_start:d,date_end:c}).then(function(e){return e.data})}},{key:"getCompanyStatChart",value:function(e){var t=e.gov_id,a=e.date_start,i=e.date_end,o=l+"/stat/chart";return n.b(o,{gov_id:t,date_start:a,date_end:i}).then(function(e){return e.data})}}]),t}();t.a=new s}).call(t,a(9))},186:function(e,t,a){a(189);var i=a(10)(a(187),a(190),null,null);e.exports=i.exports},187:function(e,t,a){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{requestCb:Function,changeCb:Function,value:[String,Number],placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},list:Array},data:function(){return{keyword:void 0,selectVal:this.value,data:null==this.list?[]:this.list,loading:!1,currPlaceholder:this.placeholder,input:null,isSearching:!1,isShowGetMore:!0}},watch:{data:function(e){e.length<1&&(this.currPlaceholder=this.placeholder),this.initGetMore(),this.loading=!1},placeholder:function(e){this.currPlaceholder=e},value:function(e){this.selectVal!=e&&(this.selectVal=e),null!=this.value&&this.currPlaceholder&&this.data.length<1&&this.data.push({id:this.value,name:this.placeholder})}},created:function(){this.value&&this.currPlaceholder&&this.data.length<1&&this.data.push({id:this.value,name:this.placeholder})},mounted:function(){this.input=this.$refs.container.$el.querySelector("input")},methods:{filter:function(e){var t=this;this.loading=!0,this.keyword=e,this.requestCb(e,0).then(function(e){t.isShowGetMore=!0,t.processRequestRet(e,1)})},initGetMore:function(){var e=this,t=this;this.$nextTick(function(){var a=e.$refs.domLoading.parentNode;a.loaded||(a.loaded=!0,a.addEventListener("click",function(e){t.input.focus(),t.loading=!0,e=e||window.event,e.preventDefault(),e.stopPropagation(),t.requestCb(t.keyword,t.data.length).then(function(e){t.processRequestRet(e)}),a.loaded=!1},!0))})},handleChange:function(e){this.changeCb&&this.changeCb(e),this.$emit("input",e)},handleVisibleChange:function(e){var t=this;if(0==e)return void(this.currPlaceholder=this.placeholder);this.initGetMore(),(!this.data||this.data.length<1)&&(this.loading=!0,this.requestCb(this.keyword,0).then(function(e){t.processRequestRet(e)}))},processRequestRet:function(e){var t=this;if(0===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)){var a;e.data=e.data.filter(function(e){return e.id!=t.value}),(a=this.data).push.apply(a,i(e.data))}else this.data=e.data;this.isShowGetMore=this.data.length<e.total}}}},188:function(e,t,a){t=e.exports=a(136)(!0),t.push([e.i,".component-form-selectscroll-more{color:#50bfff;cursor:pointer}","",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/component/form/SelectScroll.vue"],names:[],mappings:"AACA,kCAAkC,cAAc,cAAc,CAC7D",file:"SelectScroll.vue",sourcesContent:["\n.component-form-selectscroll-more{color:#50bfff;cursor:pointer\n}\n"],sourceRoot:""}])},189:function(e,t,a){var i=a(188);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(137)("3cfb5a30",i,!0)},190:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{ref:"container",attrs:{placeholder:e.currPlaceholder,clearable:!0,"no-data-text":"暂无数据",disabled:e.disabled,"no-match-text":"没有数据"},on:{"visible-change":e.handleVisibleChange,change:e.handleChange},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}},[a("el-option",{staticStyle:{height:"50px"},attrs:{disabled:!0,value:"xmystinputval"}},[a("el-input",{attrs:{placeholder:"搜索内容"},on:{change:e.filter}})],1),e._v(" "),e._l(e.data,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),e._v(" "),a("el-option",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:!this.data||this.data.length<1,expression:"!this.data || this.data.length < 1"}],attrs:{value:"xmyst2",disabled:!0}},[a("span",[e._v("暂无数据")])]),e._v(" "),a("el-option",{directives:[{name:"show",rawName:"v-show",value:e.isShowGetMore&&this.data&&this.data.length>0,expression:"isShowGetMore && this.data && this.data.length > 0"},{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{value:"xmyst1",disabled:!0}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],ref:"domLoading",staticClass:"component-form-selectscroll-more"},[e._v("点击加载更多")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[e._v("加载中...")])])],2)},staticRenderFns:[]}},191:function(e,t,a){"use strict";(function(e){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=a(22),o=a(3),r=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),l=o.a.apiHost+"/sys/department",s=function(){function t(){i(this,t)}return r(t,[{key:"getDepartment",value:function(e){var t=e.page,a=void 0===t?"":t,i=e.page_size,o=void 0===i?"":i,r=e.company_id,s=void 0===r?"":r,d=e.province,c=void 0===d?"":d,u=e.city,p=void 0===u?"":u,m=e.area,v=void 0===m?"":m,h=e.keyword,g=void 0===h?"":h,f=e.concact,A=void 0===f?"":f,_=e.time_start,b=void 0===_?"":_,y=e.time_end,C=void 0===y?"":y,x=l+"/search";return n.b(x,{page:a,page_size:o,company_id:s,province:c,city:p,area:v,keyword:g,concact:A,time_start:b,time_end:C},!1).then(function(e){return e.data})}},{key:"getDepInfo",value:function(e){var t=l+"/"+e;return n.b(t).then(function(e){return e.data})}},{key:"depDelete",value:function(t){var a=l+"/"+t;return n.d(a,{}).then(function(t){if(t.code)return e.reject(t)})}},{key:"exportDepartment",value:function(e){var t=l+"/search";n.e(t,Object.assign(e,{export:1}),"department.xls")}}]),t}();t.a=new s}).call(t,a(9))},275:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(186),n=a.n(i),o=a(191);t.default={props:["value","type"],data:function(){return{currVal:this.value,pageSize:20}},watch:{value:function(e,t){this.setCurrentValue(e)},type:function(e,t){this.setCurrentValue(""),this.$refs.selectScroll.filter("")}},methods:{fetchData:function(e,t){return o.a.getDepartment({keyword:e,company_id:this.type,pagesize:this.pageSize,page:parseInt(t/this.pageSize)+1})},handleChange:function(e){this.setCurrentValue(e)},setCurrentValue:function(e){this.curVal!=e&&(this.currVal=e,this.$emit("input",e),this.$emit("change",e))}},components:{SelectScroll:n.a}}},299:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(183),n=(a(191),a(427)),o=a.n(n),r=a(41),l=a(324),s=a(43);t.default={name:"gov-admin",filters:{defaultAvatar:s.defaultAvatar},components:{departmentSelect:o.a},data:function(){var e=function(e,t,a){(t||"").match(/^1[34578]\d{9}$/)||a(new Error("请填写正确的手机号")),a()};return{loading:!1,clerkDetail:{name:"",department:"",mobile:"",pass:"",address:"",sex:0,birthday:"",create_time_name:""},departmentData:[],companyID:this.$route.params.gov_id,showDetail:!1,form:{name:"",department_id:"",mobile:"",passwd:"",address:"",sex:0,birthday:""},rules:{department_id:[{type:"number",required:!0,message:"必须填写",trigger:"blur"}],name:[{required:!0,message:"必须填写",trigger:"blur"}],mobile:[{required:!0,message:"必须填写",trigger:"blur"},{validator:e,trigger:"blur"}],passwd:[{required:!0,message:"必须填写",trigger:"blur"}]},formLabelWidth:"120px",addForm:!1,currentPage:1,total:0,pageSize:15,search:{name:""},adminData:[]}},computed:{govID:function(){return this.$route.params.gov_id},category:function(){return parseInt(this.$route.query.category)}},activated:function(){xmview.setContentLoading(!1),this.getData().then(function(){xmview.setContentLoading(!1)})},methods:{addAdmin:function(){this.addForm=!0},getData:function(){var e=this;return i.a.govAdmin({page:this.currentPage,page_size:this.pageSize,name:this.search.name,gov_id:this.govID}).then(function(t){e.adminData=t.data,e.total=t.total,e.loading=!1})},checkClerkDetail:function(e,t){var a=this;this.showDetail=!0,l.a.userDetail(t.id).then(function(e){a.clerkDetail=e.data})},handleDelete:function(e,t){var a=this;xmview.showDialog('你确认要删除用户<i style="color:red">'+t.name+"</i>的管理权限吗？",function(){i.a.delAdmin({company_id:t.company_id,id:t.id}).then(function(e){xmview.showTip("success","删除成功"),a.getData()}).catch(function(e){xmview.showTip("error",e.message)})})},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.form.company_id=t.companyID,t.form.birthday=r.b(t.form.birthday),i.a.addCompanyAdmin(t.form).then(function(e){xmview.showTip("success","添加成功")}).then(function(){t.addForm=!1,t.getData(),t.currentPage=1}).catch(function(e){xmview.showTip("error",e.message)})})},handleSizeChange:function(e){this.pageSize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},goBack:function(){window.history.back()}}}},324:function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=a(22),o=a(3),r=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),l=o.a.apiHost+"/sys/user",s=function(){function e(){i(this,e)}return r(e,[{key:"userDetail",value:function(e){var t=l+"/"+e;return n.b(t).then(function(e){return e.data})}},{key:"getUserList",value:function(e){var t=e.page,a=void 0===t?"":t,i=e.page_size,o=void 0===i?"":i,r=e.company_id,s=void 0===r?"":r,d=e.keyword,c=void 0===d?"":d,u=e.mobile,p=void 0===u?"":u,m=e.email,v=void 0===m?"":m,h=e.user_type,g=void 0===h?"":h,f=e.time_start,A=void 0===f?"":f,_=e.time_end,b=void 0===_?"":_,y=e.last_appstart,C=void 0===y?"":y,x=e.nologin_timestart,w=void 0===x?"":x,k=l+"/search";return n.b(k,{page:a,page_size:o,company_id:s,keyword:c,mobile:p,email:v,user_type:g,time_start:A,time_end:b,last_appstart:C,nologin_timestart:w}).then(function(e){return e.data})}},{key:"getCompanyState",value:function(e){var t=e.page,a=void 0===t?"":t,i=e.page_size,o=void 0===i?"":i,r=e.time_start,s=void 0===r?"":r,d=l+"/stat/search";return n.b(d,{page:a,page_size:o,time_start:s}).then(function(e){return e.data})}},{key:"getAreaState",value:function(e){var t=e.page,a=void 0===t?"":t,i=e.page_size,o=void 0===i?"":i,r=e.time_start,s=void 0===r?"":r,d=l+"/stat/area/search";return n.b(d,{page:a,page_size:o,time_start:s}).then(function(e){return e.data})}}]),e}();t.a=new s},365:function(e,t,a){t=e.exports=a(136)(!0),t.push([e.i,'.company-admin-container .main-container .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px}.company-admin-container .main-container .search>section>span,.company-admin-container .main-container .search>section i{margin-right:2px}.company-admin-container .main-container .search>section>*{vertical-align:middle;display:inline-block}.company-admin-container .main-container .search .el-input{width:auto}.keyword-container{width:90%;margin-left:5%;margin-bottom:5px}.show-detail .el-dialog__body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-display:flex;-moz-display:flex}.show-detail .avatar{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-grow:0;-moz-flex-grow:0;border:1px solid #ededed;width:150px;height:130px}.show-detail .avatar img{width:100%;height:100%}.show-detail .info{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;text-align:left;padding:20px}.show-detail .info h2{margin-bottom:10px;padding-left:100px}.show-detail .info p{line-height:35px}.show-detail .info p>*{display:inline-block;vertical-align:top}.show-detail .info p i.title{width:25%;margin-right:10px;text-align:right}.show-detail .info p span.value{width:70%;text-align:left}.show-detail .info p span.value>i{margin-right:5px}.show-detail .info p span.value>img{width:150px;cursor:pointer}.show-detail .info>p.select{margin-top:10px}.show-detail .info>p.select .el-select,.show-detail .info>p.select .el-textarea{display:inline-block;width:58%;vertical-align:top}.company-admin-container{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff}.company-admin-container:after{content:"";clear:both;display:block}.company-admin-container .pagin{float:right;margin-top:15px}.company-admin-container .bottom-manage{margin-top:15px}.company-admin-container .add{position:absolute;right:0;top:-50px}.company-admin-container .header-button.add>.el-button i{margin-right:5px}.company-admin-container .header-button.add>.el-button i:before{position:relative;top:-1px}.text-blue{color:#20a0ff}.text-light-blue{color:#58b7ff}.text-dark-blue{color:#1d8ce0}.text-success{color:#13ce66}.text-warning{color:#f7ba2a}.text-danger{color:#ff4949}.company-admin-container .main-container{background:#fff;padding:20px}.company-admin-container .main-container .block{text-align:right;margin-top:10px}',"",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/gov/Admin.vue"],names:[],mappings:"AACA,yDAAyD,iBAAiB,mBAAmB,qBAAqB,iBAAiB,CAClI,AACD,yHAAyH,gBAAgB,CACxI,AACD,2DAA2D,sBAAsB,oBAAoB,CACpG,AACD,2DAA2D,UAAU,CACpE,AACD,mBAAmB,UAAU,eAAe,iBAAiB,CAC5D,AACD,8BAA8B,oBAAoB,oBAAoB,aAAa,qBAAqB,iBAAiB,CACxH,AACD,qBAAqB,mBAAmB,oBAAoB,YAAY,oBAAoB,iBAAiB,yBAAyB,YAAY,YAAY,CAC7J,AACD,yBAAyB,WAAW,WAAW,CAC9C,AACD,mBAAmB,mBAAmB,oBAAoB,YAAY,oBAAoB,iBAAiB,gBAAgB,YAAY,CACtI,AACD,sBAAsB,mBAAmB,kBAAkB,CAC1D,AACD,qBAAqB,gBAAgB,CACpC,AACD,uBAAuB,qBAAqB,kBAAkB,CAC7D,AACD,6BAA6B,UAAU,kBAAkB,gBAAgB,CACxE,AACD,gCAAgC,UAAU,eAAe,CACxD,AACD,kCAAkC,gBAAgB,CACjD,AACD,oCAAoC,YAAY,cAAc,CAC7D,AACD,4BAA4B,eAAe,CAC1C,AACD,gFAAgF,qBAAqB,UAAU,kBAAkB,CAChI,AACD,yBAAyB,aAAa,kBAAkB,yBAAyB,kBAAkB,eAAe,CACjH,AACD,+BAA+B,WAAW,WAAW,aAAa,CACjE,AACD,gCAAgC,YAAY,eAAe,CAC1D,AACD,wCAAwC,eAAe,CACtD,AACD,8BAA8B,kBAAkB,QAAQ,SAAS,CAChE,AACD,yDAAyD,gBAAgB,CACxE,AACD,gEAAgE,kBAAkB,QAAQ,CACzF,AACD,WAAW,aAAa,CACvB,AACD,iBAAiB,aAAa,CAC7B,AACD,gBAAgB,aAAa,CAC5B,AACD,cAAc,aAAa,CAC1B,AACD,cAAc,aAAa,CAC1B,AACD,aAAa,aAAa,CACzB,AACD,yCAAyC,gBAAgB,YAAY,CACpE,AACD,gDAAgD,iBAAiB,eAAe,CAC/E",file:"Admin.vue",sourcesContent:["\n.company-admin-container .main-container .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px\n}\n.company-admin-container .main-container .search>section>span,.company-admin-container .main-container .search>section i{margin-right:2px\n}\n.company-admin-container .main-container .search>section>*{vertical-align:middle;display:inline-block\n}\n.company-admin-container .main-container .search .el-input{width:auto\n}\n.keyword-container{width:90%;margin-left:5%;margin-bottom:5px\n}\n.show-detail .el-dialog__body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-display:flex;-moz-display:flex\n}\n.show-detail .avatar{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-grow:0;-moz-flex-grow:0;border:1px solid #ededed;width:150px;height:130px\n}\n.show-detail .avatar img{width:100%;height:100%\n}\n.show-detail .info{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-grow:1;-moz-flex-grow:1;text-align:left;padding:20px\n}\n.show-detail .info h2{margin-bottom:10px;padding-left:100px\n}\n.show-detail .info p{line-height:35px\n}\n.show-detail .info p>*{display:inline-block;vertical-align:top\n}\n.show-detail .info p i.title{width:25%;margin-right:10px;text-align:right\n}\n.show-detail .info p span.value{width:70%;text-align:left\n}\n.show-detail .info p span.value>i{margin-right:5px\n}\n.show-detail .info p span.value>img{width:150px;cursor:pointer\n}\n.show-detail .info>p.select{margin-top:10px\n}\n.show-detail .info>p.select .el-select,.show-detail .info>p.select .el-textarea{display:inline-block;width:58%;vertical-align:top\n}\n.company-admin-container{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff\n}\n.company-admin-container:after{content:'';clear:both;display:block\n}\n.company-admin-container .pagin{float:right;margin-top:15px\n}\n.company-admin-container .bottom-manage{margin-top:15px\n}\n.company-admin-container .add{position:absolute;right:0;top:-50px\n}\n.company-admin-container .header-button.add>.el-button i{margin-right:5px\n}\n.company-admin-container .header-button.add>.el-button i:before{position:relative;top:-1px\n}\n.text-blue{color:#20A0FF\n}\n.text-light-blue{color:#58B7FF\n}\n.text-dark-blue{color:#1D8CE0\n}\n.text-success{color:#13CE66\n}\n.text-warning{color:#F7BA2A\n}\n.text-danger{color:#FF4949\n}\n.company-admin-container .main-container{background:#fff;padding:20px\n}\n.company-admin-container .main-container .block{text-align:right;margin-top:10px\n}\n"],sourceRoot:""}])},413:function(e,t,a){var i=a(365);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(137)("2b08f036",i,!0)},427:function(e,t,a){var i=a(10)(a(275),a(444),null,null);e.exports=i.exports},444:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("SelectScroll",{ref:"selectScroll",attrs:{changeCb:e.handleChange,requestCb:e.fetchData},on:{changeVal:e.setCurrentValue},model:{value:e.currVal,callback:function(t){e.currVal=t},expression:"currVal"}})},staticRenderFns:[]}},480:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"company-admin-container"},[a("el-dialog",{staticClass:"show-detail",attrs:{title:"查看管理员"},model:{value:e.showDetail,callback:function(t){e.showDetail=t},expression:"showDetail"}},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:e._f("defaultAvatar")({url:e.clerkDetail.avatar,sex:e.clerkDetail.sex})}})]),e._v(" "),a("div",{staticClass:"info"},[a("h2",[e._v(e._s(e.clerkDetail.name)+"("+e._s(e.clerkDetail.company)+")")]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("所属门店：")]),a("span",{staticClass:"value"},[e._v(e._s(e.clerkDetail.dep_name))])]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("Mobile：")]),e._v(" "),a("span",{staticClass:"value"},[e._v(e._s(e.clerkDetail.mobile))])]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("Email：")]),e._v(" "),a("span",{staticClass:"value"},[e._v(e._s(e.clerkDetail.email))])]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("状态：")]),e._v(" "),a("span",{staticClass:"value"},[e.clerkDetail.disabled?a("el-tag",{attrs:{type:"danger"}},[e._v("异常")]):a("el-tag",{attrs:{type:"success"}},[e._v("正常")])],1)]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("性别：")]),e._v(" "),a("span",{staticClass:"value"},[e._v(e._s(e.clerkDetail.sex?"男":"女"))])]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("生日：")]),e._v(" "),a("span",{staticClass:"value"},[e._v(e._s(e.clerkDetail.birthday))])]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("地址：")]),e._v(" "),a("span",{staticClass:"value"},[e._v(e._s(e.clerkDetail.address))])]),e._v(" "),a("p",[a("i",{staticClass:"title"},[e._v("注册时间：")]),a("span",{staticClass:"value"},[e._v(e._s(e.clerkDetail.create_time_name))])])])]),e._v(" "),a("el-dialog",{model:{value:e.addForm,callback:function(t){e.addForm=t},expression:"addForm"}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{prop:"name",label:"姓名","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"部门人员姓名","auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"mobile",label:"手机号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"number",placeholder:"手机号","auto-complete":"off"},model:{value:e.form.mobile,callback:function(t){e.form.mobile=t},expression:"form.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"passwd",label:"密码","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"password",placeholder:"密码","auto-complete":"off"},model:{value:e.form.passwd,callback:function(t){e.form.passwd=t},expression:"form.passwd"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"昵称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"昵称","auto-complete":"off"},model:{value:e.form.nickname,callback:function(t){e.form.nickname=t},expression:"form.nickname"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.addForm=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("form")}}},[e._v("确 定")])],1)],1),e._v(" "),a("section",{staticClass:"add"},[a("el-button",{attrs:{icon:"plus",type:"primary"},on:{click:e.addAdmin}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"main-container"},[a("section",{staticClass:"search"},[a("section",[a("i",[e._v("姓名")]),e._v(" "),a("el-input",{staticClass:"name",attrs:{placeholder:"请输入姓名"},on:{change:e.getData},model:{value:e.search.name,callback:function(t){e.search.name=t},expression:"search.name"}})],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.adminData}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"100%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"手机",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"last_login_time_name",label:"上次登录时间",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"last_login_ip",label:"上次登录IP",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"operate",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.checkClerkDetail(t.$index,t.row)}}},[e._v("\n                        详情\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("\n                        删除\n                    ")])]}}])})],1),e._v(" "),a("section",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,30,60,100],"page-size":e.pageSize,layout:"total, sizes, ->, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=21.e330e3e859e80279292a.js.map