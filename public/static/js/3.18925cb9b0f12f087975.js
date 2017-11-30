webpackJsonp([3],{188:function(e,t,i){"use strict";(function(e){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=i(22),r=i(3),n=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),l=r.a.apiHost+"/gov",c=function(){function t(){a(this,t)}return n(t,[{key:"getSelectList",value:function(e){var t=e.id,i=void 0===t?"":t,a=e.name,r=void 0===a?"":a,n=e.category,c=void 0===n?"":n,d=e.pagesize,s=void 0===d?"":d,u=e.page,f=void 0===u?"":u,m=e.pid,v=void 0===m?"":m,p=e.province_id,g=void 0===p?"":p,h=e.city_id,_=void 0===h?"":h,b=e.area_id,y=void 0===b?"":b,w=e.town_id,x=void 0===w?"":w,S=e.village_id,k=void 0===S?"":S,A=e.deleted,C=void 0===A?"":A,z=l+"/lists";return o.b(z,{id:i,name:r,category:c,page:f,pagesize:s,pid:v,province_id:g,city_id:_,area_id:y,town_id:x,village_id:k,deleted:C},!1).then(function(e){return e.data})}},{key:"postSelectList",value:function(e){var t=e.id,i=void 0===t?"":t,a=e.name,r=void 0===a?"":a,n=e.category,c=void 0===n?"":n,d=e.pagesize,s=void 0===d?"":d,u=e.page,f=void 0===u?"":u,m=e.pid,v=void 0===m?"":m,p=e.province_id,g=void 0===p?"":p,h=e.city_id,_=void 0===h?"":h,b=e.area_id,y=void 0===b?"":b,w=e.town_id,x=void 0===w?"":w,S=e.village_id,k=void 0===S?"":S,A=e.deleted,C=void 0===A?"":A,z=l+"/lists";return o.a(z,{id:i,name:r,category:c,page:f,pagesize:s,pid:v,province_id:g,city_id:_,area_id:y,town_id:x,village_id:k,deleted:C},!1).then(function(e){return e.data})}},{key:"getGovInfo",value:function(e){var t=l+"/get/"+e;return o.b(t).then(function(e){return e.data})}},{key:"addGov",value:function(t){var i=t.category,a=t.pid,r=t.province_id,n=t.city_id,c=t.area_id,d=t.town_id,s=t.village_id,u=t.name,f=t.concact,m=t.mobile,v=t.email,p=t.mobile_title,g=t.tel,h=t.zip,_=t.fax,b=t.url,y=t.address,w=t.description,x=l+"/create";return o.a(x,{category:i,pid:a,province_id:r,city_id:n,area_id:c,town_id:d,village_id:s,name:u,concact:f,mobile:m,email:v,mobile_title:p,tel:g,zip:h,fax:_,url:b,address:y,description:w}).then(function(t){if(t.code)return e.reject(t)})}},{key:"editGov",value:function(e){var t=l+"/edit/"+e;return o.b(t).then(function(e){return e.data})}},{key:"updateGov",value:function(t){var i=t.gov_id,a=t.category,r=t.pid,n=t.province_id,c=t.city_id,d=t.area_id,s=t.town_id,u=t.village_id,f=t.name,m=t.concact,v=t.mobile,p=t.email,g=t.mobile_title,h=t.tel,_=t.zip,b=t.fax,y=t.url,w=t.address,x=t.description,S=l+"/edit/"+i;return o.a(S,{category:a,pid:r,province_id:n,city_id:c,area_id:d,town_id:s,village_id:u,name:f,concact:m,mobile:v,email:p,mobile_title:g,tel:h,zip:_,fax:b,url:y,address:w,description:x}).then(function(t){if(t.code)return e.reject(t)})}},{key:"govAdmin",value:function(e){var t=e.keyword,i=e.gov_id,a=e.page,r=e.page_size,n="/user/get/"+i;return o.b(n,{keyword:t,page:a,page_size:r}).then(function(e){return e.data})}},{key:"addGovAdmin",value:function(t){var i=t.department_id,a=t.name,r=t.sex,n=t.mobile,c=t.passwd,d=t.birthday,s=t.address,u=t.gov_id,f=l+"/"+u+"/admin";return o.a(f,{department_id:i,name:a,sex:r,mobile:n,passwd:c,birthday:d,address:s}).then(function(t){if(t.code)return e.reject(t)})}},{key:"a",value:function(t){var i=t.pagesize,a=t.page,r=l+"/lists";return o.b(r,{pagesize:i,page:a}).then(function(t){return 0==t.code?t:e.reject(t)})}},{key:"getAdminInfo",value:function(t){var i=l+"/view/"+t;return o.b(i,{},!1).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"create",value:function(t){var i=t.role_id,a=t.name,r=t.mobile,n=t.email,c=t.password,d=l+"/create";return o.a(d,{role_id:i,name:a,mobile:r,email:n,password:c}).then(function(t){return 0==t.code?t.data:(xmview.showTip("error",t.message),e.reject(t))})}},{key:"update",value:function(t){var i=t.id,a=t.role_id,r=t.name,n=t.mobile,c=t.email,d=t.password,s=t.sex,u=t.avatar,f=t.address,m=l+"/update/"+i;return o.a(m,{role_id:a,name:r,mobile:n,email:c,password:d,sex:s,avatar:u,address:f}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteGov",value:function(t){var i=l+"/delete/"+t;return o.b(i,{}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"delete",value:function(t){var i=l+"/delete/"+t;return o.b(i,{}).then(function(t){if(t.code)return e.reject(t)})}},{key:"deleteMulty",value:function(e){var t=l+"/batchdel";return o.c(t,{ids:e})}},{key:"moveToCategoryMulty",value:function(e){var t=e.ids,i=e.category_id,a=l+"/batchmove";return o.c(a,{ids:t,category_id:i})}},{key:"setLesson",value:function(t){var i=t.id,a=t.data,r=l+"/"+i+"/setlesson";return o.c(r,a).then(function(t){if(t.code)return e.reject(t)})}},{key:"offline",value:function(e){var t=e.id,i=e.role_id,a=e.name,r=e.mobile,n=e.email,c=e.password,d=e.sex,s=e.avatar,u=e.address,f=e.disabled,m=l+"/update/"+t;return o.a(m,{id:t,role_id:i,name:a,mobile:r,email:n,password:c,sex:d,avatar:s,address:u,disabled:f})}},{key:"online",value:function(e){var t=l+"/update/"+e;return o.a(t,{disabled:0})}},{key:"getUploadUrl",value:function(e){var t=e.image,i=e.alias,a=l+"/upload";return o.a(a,{image:t,alias:i}).then(function(e){return e.data})}}]),t}();t.a=new c}).call(t,i(9))},211:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(i(42),i(188));t.default={props:["change","title","province","city","area","town","village","disabled"],data:function(){return{provinces:[],citys:[],areas:[],towns:[],villages:[],provinceSelect:"",citySelect:"",areaSelect:"",townSelect:"",villageSelect:"",curItem:[],cityData:"",options:[],fetchParam:{pagesize:-1,pid:0,province_id:null,city_id:null,area_id:null,town_id:null,village_id:null}}},watch:{province:function(e){e?(this.provinceSelect=e,this.currentVal(0,e)):this.provinceSelect=""},city:function(e){this.province&&e?(this.citySelect=e,this.currentVal(1,e)):this.citySelect=""},area:function(e){this.province&&this.citySelect&&e?(this.areaSelect=e,this.currentVal(2,e)):this.areaSelect=""},town:function(e){this.province&&this.citySelect&&e?(this.townSelect=e,this.currentVal(2,e)):this.townSelect=""},village:function(e){this.province&&this.citySelect&&e?(this.villageSelect=e,this.currentVal(2,e)):this.villageSelect=""},disabled:function(e){e&&(this.provinceSelect="")}},created:function(){},mounted:function(){this.getData(this.fetchParam.pid,"provinces")},methods:{getData:function(e,t){var i=this;void 0!==this.fetchParam.provinceSelect&&(this.fetchParam.pid=this.fetchParam.villageSelect||this.fetchParam.townSelect||this.fetchParam.areaSelect||this.fetchParam.citySelect||this.fetchParam.provinceSelect),this.loading=!0,a.a.getSelectList({pagesize:-1,pid:e,province_id:this.fetchParam.provinceSelect,city_id:this.fetchParam.citySelect,area_id:this.fetchParam.areaSelect,town_id:this.fetchParam.townSelect,village_id:this.fetchParam.villageSelect}).then(function(e){i.cityData=e;var a=[];i.cityData.forEach(function(e){a.push({data:e,name:e.name,id:e.id})}),i[t]=a}).then(function(){i.loading=!1})},currentVal:function(e,t){var i=["provinceSelect","citySelect","areaSelect","townSelect","villageSelect"],a=["provinces","citys","areas","towns","villages"];this[i[e]]&&([this[i[e]]],e<i.length-1&&this.getData(t,a[e+1]),this.change&&this.change(t,a[e+1]))},setCurrVal:function(e,t){var i=["provinceChange","cityChange","areaChange","townChange","villageChange"];this.$emit(i[e],t)}}}},222:function(e,t,i){t=e.exports=i(134)(!0),t.push([e.i,".region-container .el-select{max-width:130px!important}","",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/component/select/Region.vue"],names:[],mappings:"AACA,6BAA6B,yBAA0B,CACtD",file:"Region.vue",sourcesContent:["\n.region-container .el-select{max-width:130px !important\n}\n"],sourceRoot:""}])},224:function(e,t,i){var a=i(222);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(135)("b6222a90",a,!0)},225:function(e,t,i){i(224);var a=i(10)(i(211),i(229),null,null);e.exports=a.exports},229:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{ref:"container",staticClass:"region-container"},[i("i",[e._v(e._s(e.title))]),e._v(" "),i("el-select",{attrs:{disabled:e.disabled,placeholder:"全部",clearable:""},on:{change:function(t){e.setCurrVal(0,e.provinceSelect)}},model:{value:e.provinceSelect,callback:function(t){e.provinceSelect=t},expression:"provinceSelect"}},e._l(e.provinces,function(e,t){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),i("el-select",{attrs:{disabled:e.disabled,placeholder:"全部",clearable:""},on:{change:function(t){e.setCurrVal(1,e.citySelect)}},model:{value:e.citySelect,callback:function(t){e.citySelect=t},expression:"citySelect"}},e._l(e.citys,function(e,t){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),i("el-select",{attrs:{disabled:e.disabled,placeholder:"全部",clearable:""},on:{change:function(t){e.setCurrVal(2,e.areaSelect)}},model:{value:e.areaSelect,callback:function(t){e.areaSelect=t},expression:"areaSelect"}},e._l(e.areas,function(e,t){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),i("el-select",{attrs:{disabled:e.disabled,placeholder:"全部",clearable:""},on:{change:function(t){e.setCurrVal(3,e.townSelect)}},model:{value:e.townSelect,callback:function(t){e.townSelect=t},expression:"townSelect"}},e._l(e.towns,function(e,t){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),i("el-select",{attrs:{disabled:e.disabled,placeholder:"全部",clearable:""},on:{change:function(t){e.setCurrVal(4,e.villageSelect)}},model:{value:e.villageSelect,callback:function(t){e.villageSelect=t},expression:"villageSelect"}},e._l(e.villages,function(e,t){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)},staticRenderFns:[]}},267:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(188),o=i(225),r=i.n(o),n=(i(41),void 0);t.default={components:{Region:r.a},data:function(){var e=function(e,t,i){(t||"").match(/^\w+([-+.]\w+)*@\w+([-+.]\w+)*.\w+([-+.]\w+)*$/)||i(new Error("请输入一个有效的电子邮箱地址")),i()};return{govTypes:[{name:"政府",id:2},{name:"系统",id:1}],formLabelWidth:"120px",form:{gov_id:void 0,category:"",pid:"",province_id:"",city_id:"",area_id:"",town_id:"",village_id:"",name:"",concact:"",mobile:"",email:"",mobile_title:"",tel:"",zip:"",fax:"",url:"",address:"",description:""},rules:{name:[{required:!0,message:"必填项",trigger:"blur"}],concact:[{required:!0,message:"必填项",trigger:"blur"}],mobile:[{required:!0,message:"必填项",trigger:"blur"},{validator:function(e,t,i){(t||"").match(/^1[34578]\d{9}$/)||i(new Error("请输入正确的手机号")),i()},trigger:"blur"}],email:[{required:!0,message:"必填项",trigger:"blur"},{validator:e,trigger:"blur"}]}}},computed:{govID:function(){return this.$route.params.id}},activated:function(){var e=this;if(n=this,xmview.setContentLoading(!1),void 0==this.govID)return this.form={gov_id:void 0,category:"",pid:"",province_id:"",city_id:"",area_id:"",town_id:"",village_id:"",name:"",concact:"",mobile:"",email:"",mobile_title:"",tel:"",zip:"",fax:"",url:"",address:"",description:""},!1;a.a.getGovInfo(this.govID).then(function(t){e.form=t,e.govID=e.govID})},methods:{submit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.form=Object.assign(t.form,t.sign);var i=a.a.addGov,o="添加成功";t.form.province_id&&(t.form.pid=t.form.province_id,t.form.province_id&&t.form.city_id&&(t.form.pid=t.form.city_id,t.form.province_id&&t.form.city_id&&t.form.area_id&&(t.form.pid=t.form.area_id,t.form.province_id&&t.form.city_id&&t.form.area_id&&t.form.town_id&&(t.form.pid=t.form.town_id,t.form.province_id&&t.form.city_id&&t.form.area_id&&t.form.town_id&&t.form.village_id&&(t.form.pid=t.form.village_id))))),t.govID&&(t.form.gov_id=t.govID,i=a.a.updateGov,o="修改成功"),i(t.form).then(function(){xmview.showTip("success",o)}).then(function(){t.$router.push({name:"gov-index"})}).catch(function(e){xmview.showTip("error",e.message)})})}}}},331:function(e,t,i){t=e.exports=i(134)(!0),t.push([e.i,".gov-operate-container{background:#fff;padding:20px 200px}.gov-operate-container .addForm .tip{text-align:center;border-top:1px solid #ddd;color:red;line-height:50px}.gov-operate-container .dialog-footer{text-align:center}","",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/gov/GovOperate.vue"],names:[],mappings:"AACA,uBAAuB,gBAAgB,kBAAkB,CACxD,AACD,qCAAqC,kBAAkB,0BAA0B,UAAc,gBAAgB,CAC9G,AACD,sCAAsC,iBAAiB,CACtD",file:"GovOperate.vue",sourcesContent:["\n.gov-operate-container{background:#fff;padding:20px 200px\n}\n.gov-operate-container .addForm .tip{text-align:center;border-top:1px solid #ddd;color:#ff0000;line-height:50px\n}\n.gov-operate-container .dialog-footer{text-align:center\n}\n"],sourceRoot:""}])},373:function(e,t,i){var a=i(331);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(135)("3ec7de22",a,!0)},438:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"gov-operate-container"},[i("section",[i("el-form",{ref:"form",staticClass:"addForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth}},[i("el-form-item",{attrs:{prop:"category",label:"部门类型"}},[i("el-select",{model:{value:e.form.category,callback:function(t){e.form.category=t},expression:"form.category"}},e._l(e.govTypes,function(e,t){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"部门","label-width":e.formLabelWidth}},[i("Region",{attrs:{province:e.form.province_id,city:e.form.city_id,area:e.form.area_id,title:""},on:{provinceChange:function(t){return e.form.province_id=t},cityChange:function(t){return e.form.city_id=t},areaChange:function(t){return e.form.area_id=t}}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"name",label:"政府单位名称\t","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"concact",label:"联系人","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.concact,callback:function(t){e.form.concact=t},expression:"form.concact"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"mobile",type:"number",label:"联系人手机","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.mobile,callback:function(t){e.form.mobile=t},expression:"form.mobile"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"email",label:"联系人邮箱","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.email,callback:function(t){e.form.email=t},expression:"form.email"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"tel",label:"电话","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.tel,callback:function(t){e.form.tel=t},expression:"form.tel"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"fax",label:"传真","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.fax,callback:function(t){e.form.fax=t},expression:"form.fax"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"address",label:"地址","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.address,callback:function(t){e.form.address=t},expression:"form.address"}})],1),e._v(" "),i("el-form-item",{attrs:{prop:"zip",label:"邮编","label-width":e.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.zip,callback:function(t){e.form.zip=t},expression:"form.zip"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("form")}}},[e._v("提交")])],1)],1)])},staticRenderFns:[]}},46:function(e,t,i){i(373);var a=i(10)(i(267),i(438),null,null);e.exports=a.exports}});
//# sourceMappingURL=3.18925cb9b0f12f087975.js.map