webpackJsonp([32],{141:function(e,r,t){t(340);var o=t(10)(t(228),t(394),null,null);e.exports=o.exports},181:function(e,r,t){"use strict";(function(e){function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var a=t(22),n=t(3),s=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),i=n.a.apiHost+"/mine",u=function(){function r(){o(this,r)}return s(r,[{key:"updateProfile",value:function(e){var r=e.name,t=e.address,o=e.sex,n=i+"/profile";return a.c(n,{name:r,address:t,sex:o})}},{key:"uploadAvatar",value:function(r){var t=r.avatar,o=r.alias,n=i+"/profile/avatar";return a.a(n,{avatar:t,alias:o}).then(function(r){return r.code?e.reject(r):r})}},{key:"getCompanyInfo",value:function(){var e=i+"/company";return a.b(e).then(function(e){return e.data.data})}},{key:"modifyCompany",value:function(r){var t=r.name,o=r.concact,n=r.mobile,s=r.email,u=r.tel,l=r.fax,c=r.province,f=r.city,d=r.area,p=r.address,m=r.zip,w=r.url,v=r.description,b=i+"/company";return a.c(b,{name:t,concact:o,mobile:n,email:s,tel:u,fax:l,province:c,city:f,area:d,address:p,zip:m,url:w,description:v}).then(function(r){if(r.code)return e.reject(r)})}},{key:"modifyPassword",value:function(r){var t=r.origin_password,o=r.new_password,n=r.re_password,s=i+"/password";return a.c(s,{origin_password:t,new_password:o,re_password:n}).then(function(r){if(r.code)return e.reject(r)})}},{key:"getSafeSetInfo",value:function(){var e=i+"/two-step/";return a.b(e).then(function(e){return e.data})}},{key:"getWechatLoginConfig",value:function(){var e=i+"/two-step/wechat";return a.b(e).then(function(e){return e.data.wechatConfig})}},{key:"bindOrChangeTwo",value:function(e){var r=e.type,t=e.code,o=e.receiver,n=i+"/two-step/code/bind";return a.c(n,{type:r,code:t,receiver:o}).then(function(e){return e.data.userTwoStepAuthToken})}},{key:"sendTwoValidCode",value:function(e){var r=e.type,t=e.receiver,o=i+"/two-step/code/send";return a.a(o,{type:r,receiver:t})}},{key:"validTwoVliadCode",value:function(e){var r=e.code,t=e.type,o=i+"/two-step/code/verify";return a.a(o,{code:r,type:t}).then(function(e){return e.data.userTwoStepAuthToken})}}]),r}();r.a=new u}).call(r,t(9))},228:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(181),a=t(4);r.default={data:function(){var e=this;return{imgUrl:"",form:{origin_password:"",new_password:"",re_password:""},formLabelWidth:"120px",rules:{origin_password:{required:!0,message:"必须填写",trigger:"blur"},new_password:{required:!0,message:"必须填写",trigger:"blur"},re_password:[{required:!0,message:"必须填写",trigger:"blur"},{validator:function(r,t,o){t!==e.form.new_password?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]}}},created:function(){this.form=a.a.getUserInfo(),this.form.mobile=this.form.mobile||"未设置",this.form.email=this.form.email||"未设置",xmview.setContentLoading(!1)},methods:{submit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;o.a.modifyPassword(r.form).then(function(){xmview.showTip("success","修改成功")}).catch(function(e){xmview.showTip("error",e.message)})})}}}},303:function(e,r,t){r=e.exports=t(132)(!0),r.push([e.i,".user-password{background:#fff;padding:20px 200px}.user-password .subButton{text-align:center}","",{version:3,sources:["/home/zhaoyicheng/devspace/admin_ui/assets/src/views/base/mine/Password.vue"],names:[],mappings:"AACA,eAAe,gBAAgB,kBAAkB,CAChD,AACD,0BAA0B,iBAAiB,CAC1C",file:"Password.vue",sourcesContent:["\n.user-password{background:#fff;padding:20px 200px\n}\n.user-password .subButton{text-align:center\n}\n"],sourceRoot:""}])},340:function(e,r,t){var o=t(303);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(133)("238d3d1c",o,!0)},394:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("article",{staticClass:"user-password"},[t("section",{staticClass:"submit-form"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"手机号码","label-width":e.formLabelWidth}},[e._v("\n                "+e._s(e.form.mobile)+"\n            ")]),e._v(" "),t("el-form-item",{attrs:{label:"邮箱","label-width":e.formLabelWidth}},[e._v("\n                "+e._s(e.form.email)+"\n            ")]),e._v(" "),t("el-form-item",{attrs:{prop:"origin_password",label:"原密码","label-width":e.formLabelWidth}},[t("el-input",{attrs:{type:"password",placeholder:"原密码","auto-complete":"off"},model:{value:e.form.origin_password,callback:function(r){e.form.origin_password=r},expression:"form.origin_password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"new_password",label:"新密码","label-width":e.formLabelWidth}},[t("el-input",{attrs:{type:"password",placeholder:"新密码","auto-complete":"off"},model:{value:e.form.new_password,callback:function(r){e.form.new_password=r},expression:"form.new_password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"re_password",label:"确认密码","label-width":e.formLabelWidth}},[t("el-input",{attrs:{type:"password",placeholder:"确认密码","auto-complete":"off"},model:{value:e.form.re_password,callback:function(r){e.form.re_password=r},expression:"form.re_password"}})],1),e._v(" "),t("el-form-item",{staticClass:"subButton"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submit("form")}}},[e._v("提交修改")])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=32.a440b6f2a17b683f81d8.js.map