webpackJsonp([51],{146:function(e,t,n){n(890);var a=n(5)(n(800),n(972),null,null);e.exports=a.exports},167:function(e,t,n){"use strict";function a(e){return e?i.b(new Date(e)):e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(27),r=void 0;t.default={props:{title:String,start:{},end:{},change:Function},data:function(){return{timespan:[this.start,this.end],pickerOptionsStart:{disabledDate:function(e){return r.timespan[1]?e.getTime()-144e5>=new Date(r.timespan[1]).getTime()&&0!==i.c(e,new Date(r.timespan[0])):null}},pickerOptionsEnd:{disabledDate:function(e){return r.timespan[0]?e.getTime()<=new Date(r.timespan[0]).getTime()&&0!==i.c(e,new Date(r.timespan[0])):null}}}},watch:{start:function(e){a(this.timespan[0])!=e&&(this.timespan[0]=e,e||(this.$refs.start.$el.querySelector("input").value=""))},end:function(e){a(this.timespan[1])!=e&&(this.timespan[1]=e,e||(this.$refs.end.$el.querySelector("input").value=""))}},beforeCreate:function(){r=this},methods:{setCurrVal:function(e){var t=["changeStart","changeEnd"],n=a(this.timespan[e]);this.$emit(t[e],a(n)),this.change&&this.change()}}}},169:function(e,t,n){var a=n(5)(n(167),n(170),null,null);e.exports=a.exports},170:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("i",[e._v(e._s(e.title))]),e._v(" "),n("el-date-picker",{ref:"start",attrs:{editable:!1,clearable:"",align:"right",type:"date","picker-options":e.pickerOptionsStart,placeholder:"开始日期"},on:{change:function(t){e.setCurrVal(0)}},model:{value:e.timespan[0],callback:function(t){var n=e.timespan;Array.isArray(n)?n.splice(0,1,t):e.timespan[0]=t},expression:"timespan[0]"}}),e._v(" "),n("el-date-picker",{ref:"end",attrs:{clearable:"",editable:!1,align:"right",type:"date","picker-options":e.pickerOptionsEnd,placeholder:"结束日期"},on:{change:function(t){e.setCurrVal(1)}},model:{value:e.timespan[1],callback:function(t){var n=e.timespan;Array.isArray(n)?n.splice(1,1,t):e.timespan[1]=t},expression:"timespan[1]"}})],1)},staticRenderFns:[]}},410:function(e,t,n){"use strict";(function(e){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(6),r=n(1),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=r.a.apiHost+"/setting",c=function(){function t(){a(this,t)}return o(t,[{key:"fetchData",value:function(t){var n=t.page,a=t.pagesize,r=(t.id,t.category),o=t.field,c=s+"/lists";return i.a(c,{pagesize:a,page:n,category:r,field:o}).then(function(t){return 0==t.code?t:e.reject(t)})}},{key:"getAdminInfo",value:function(t){var n=s+"/get/"+t;return i.b(n,{},!1).then(function(t){return 0==t.code?t.data:e.reject(t)})}},{key:"create",value:function(t){var n=t.category,a=t.field,r=t.usage,o=t.ftype,c=t.val,l=t.describe,d=s+"/create";return i.a(d,{category:n,field:a,usage:r,ftype:o,val:c,describe:l}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"edit",value:function(t){var n=t.id,a=t.category,r=t.field,o=t.usage,c=t.ftype,l=t.val,d=t.describe,u=s+"/edit/"+n;return i.a(u,{category:a,field:r,usage:o,ftype:c,val:l,describe:d}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"delete",value:function(t){var n=s+"/delete/"+t;return i.b(n,{}).then(function(t){return 0==t.code?(xmview.showTip("success",t.message),t.data):(xmview.showTip("error",t.message),e.reject(t))})}},{key:"deleteMulty",value:function(e){var t=s+"/batchdel";return i.c(t,{ids:e})}},{key:"moveToCategoryMulty",value:function(e){var t=e.ids,n=e.category_id,a=s+"/batchmove";return i.c(a,{ids:t,category_id:n})}}]),t}();t.a=new c}).call(t,n(2))},800:function(e,t,n){"use strict";function a(){return{status:void 0,page:1,pagesize:15,id:void 0,category:"",field:""}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(410),r=n(169),o=n.n(r);t.default={components:{DateRange:o.a},data:function(){return{init:!1,loadingData:!1,data:[],dataCache:[],total:0,keyWord:"",dialogVisible:!1,selectedIds:[],fetchParam:a(),dialogTree:{isShow:!1,selectedId:void 0}}},activated:function(){this.fetchData()},methods:{userInfo:function(){return authUtils.getUserInfo()},initFetchParam:function(){this.fetchParam=a()},handleCurrentChange:function(e){this.init?(this.fetchParam.page=e,this.fetchData()):this.init=!0},handleSizeChange:function(e){this.fetchParam.pagesize=e,this.fetchData()},fetchData:function(e){var t=this;return i.a.fetchData(this.fetchParam).then(function(e){t.dataCache=e.data,t.total=e._exts.total,t.loadingData=!1,xmview.setContentLoading(!1)})},search:function(e){return i.a.search(this.fetchParam).then(function(e){})},selectRow:function(e){var t=[];e.forEach(function(e){t.push(e.id)}),this.selectedIds=t},del:function(e,t){var n=this;xmview.showDialog('你将要删除设置 <span style="color:red">'+t.category+"</span>  此操作不可恢复确认吗?",function(){i.a.delete(t.id).then(function(){n.dataCache.splice(e,1),t.deleted=1,xmview.showTip("success","操作成功")})})},delMulti:function(){var e=this;xmview.showDialog("你将要删除选中的项目，操作不可恢复确认吗?",function(){i.a.deleteMulty(e.selectedIds.join(",")).then(function(){xmview.showTip("success","操作成功"),e.dialogTree.isShow=!1,setTimeout(function(){e.fetchData()},300)})})}},computed:{tableData:function(){var e=this;return this.dataCache.filter(function(t){return t.describe.indexOf(e.keyWord)>=0})}}}},823:function(e,t,n){t=e.exports=n(98)(!0),t.push([e.i,'#sys-index-container{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff}#sys-index-container:after{content:"";clear:both;display:block}#sys-index-container .pagin{float:right;margin-top:15px}#sys-index-container .manage-container{position:absolute;right:0;top:-50px}#sys-index-container .header-button.manage-container>.el-button i{margin-right:5px}#sys-index-container .header-button.manage-container>.el-button i:before{position:relative;top:-1px}.text-blue{color:#20a0ff}.text-light-blue{color:#58b7ff}.text-dark-blue{color:#1d8ce0}.text-success{color:#13ce66}.text-warning{color:#f7ba2a}.text-danger{color:#ff4949}#sys-index-container .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px}#sys-index-container .search>section>span,#sys-index-container .search>section i{margin-right:2px}#sys-index-container .search>section>*{vertical-align:middle;display:inline-block}#sys-index-container .search .el-input{width:auto}.keyword-container{width:90%;margin-left:5%;margin-bottom:5px}#sys-index-container .manage-container>*{color:#fff;border-radius:5px}#sys-index-container .manage-container .add{background:#0cf}#sys-index-container .manage-container .catmange{background:#96c}#sys-index-container .bottom-manage{margin-top:15px}#sys-index-container .el-dialog__wrapper{padding-top:15px;background:rgba(0,0,0,.5);z-index:1000}',"",{version:3,sources:["/Users/zhaoyicheng/Documents/Code/yxt/PC-old/sys_ui/assets/src/views/setting/Index.vue"],names:[],mappings:"AACA,qBAAqB,aAAa,kBAAkB,yBAAyB,kBAAkB,eAAe,CAC7G,AACD,2BAA2B,WAAW,WAAW,aAAa,CAC7D,AACD,4BAA4B,YAAY,eAAe,CACtD,AAGD,uCAAuC,kBAAkB,QAAQ,SAAS,CACzE,AACD,kEAAkE,gBAAgB,CACjF,AACD,yEAAyE,kBAAkB,QAAQ,CAClG,AACD,WAAW,aAAa,CACvB,AACD,iBAAiB,aAAa,CAC7B,AACD,gBAAgB,aAAa,CAC5B,AACD,cAAc,aAAa,CAC1B,AACD,cAAc,aAAa,CAC1B,AACD,aAAa,aAAa,CACzB,AACD,qCAAqC,iBAAiB,mBAAmB,qBAAqB,iBAAiB,CAC9G,AACD,iFAAiF,gBAAgB,CAChG,AACD,uCAAuC,sBAAsB,oBAAoB,CAChF,AACD,uCAAuC,UAAU,CAChD,AACD,mBAAmB,UAAU,eAAe,iBAAiB,CAC5D,AACD,yCAAyC,WAAW,iBAAiB,CACpE,AACD,4CAA4C,eAAe,CAC1D,AACD,iDAAiD,eAAe,CAC/D,AACD,oCAAoC,eAAe,CAClD,AACD,yCAAyC,iBAAiB,0BAA2B,YAAY,CAChG",file:"Index.vue",sourcesContent:["\n#sys-index-container{padding:15px;position:relative;border:1px solid #ededed;border-radius:5px;background:#fff\n}\n#sys-index-container:after{content:'';clear:both;display:block\n}\n#sys-index-container .pagin{float:right;margin-top:15px\n}\n#sys-index-container .bottom-manage{margin-top:15px\n}\n#sys-index-container .manage-container{position:absolute;right:0;top:-50px\n}\n#sys-index-container .header-button.manage-container>.el-button i{margin-right:5px\n}\n#sys-index-container .header-button.manage-container>.el-button i:before{position:relative;top:-1px\n}\n.text-blue{color:#20A0FF\n}\n.text-light-blue{color:#58B7FF\n}\n.text-dark-blue{color:#1D8CE0\n}\n.text-success{color:#13CE66\n}\n.text-warning{color:#F7BA2A\n}\n.text-danger{color:#FF4949\n}\n#sys-index-container .search>section{margin-left:10px;margin-bottom:14px;display:inline-block;margin-right:10px\n}\n#sys-index-container .search>section>span,#sys-index-container .search>section i{margin-right:2px\n}\n#sys-index-container .search>section>*{vertical-align:middle;display:inline-block\n}\n#sys-index-container .search .el-input{width:auto\n}\n.keyword-container{width:90%;margin-left:5%;margin-bottom:5px\n}\n#sys-index-container .manage-container>*{color:#fff;border-radius:5px\n}\n#sys-index-container .manage-container .add{background:#0cf\n}\n#sys-index-container .manage-container .catmange{background:#96c\n}\n#sys-index-container .bottom-manage{margin-top:15px\n}\n#sys-index-container .el-dialog__wrapper{padding-top:15px;background:rgba(0,0,0,0.5);z-index:1000\n}\n"],sourceRoot:""}])},890:function(e,t,n){var a=n(823);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(99)("a2ddb080",a,!0)},972:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{id:"sys-index-container"}},[n("section",{staticClass:"manage-container"},[n("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){e.$router.push({name:"setting-add",params:{sys_type:"add"}})}}},[n("i",[e._v("添加设置")])])],1),e._v(" "),n("article",{staticClass:"search"},[n("section",[n("i",[e._v("设置名称")]),e._v(" "),n("el-input",{attrs:{placeholder:"请输入设置名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.fetchData(t)}},model:{value:e.fetchParam.category,callback:function(t){e.fetchParam.category=t},expression:"fetchParam.category"}})],1),e._v(" "),n("section",[n("i",[e._v("字段名")]),e._v(" "),n("el-input",{attrs:{placeholder:"请输入字段名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.fetchData(t)}},model:{value:e.fetchParam.field,callback:function(t){e.fetchParam.field=t},expression:"fetchParam.field"}})],1)]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingData,expression:"loadingData"}],staticClass:"data-table",attrs:{data:e.dataCache,fit:!0,border:""},on:{select:e.selectRow,"select-all":e.selectRow}},[e.data?n("el-table-column",{attrs:{"min-width":"100",prop:"id",label:"记录id"}}):e._e(),e._v(" "),n("el-table-column",{attrs:{"min-width":"100",prop:"category",label:"设置"}}),e._v(" "),n("el-table-column",{attrs:{"min-width":"100",prop:"usage",label:"功能说明"}}),e._v(" "),n("el-table-column",{attrs:{"min-width":"100",prop:"field",label:"字段名"}}),e._v(" "),n("el-table-column",{attrs:{"min-width":"180",prop:"val",label:"字段值"}}),e._v(" "),n("el-table-column",{attrs:{"min-width":"400",prop:"describe",label:"超长字段存储"}}),e._v(" "),n("el-table-column",{attrs:{"min-width":"200",prop:"addate",label:"添加时间"}}),e._v(" "),n("el-table-column",{attrs:{"min-width":"200",prop:"update",label:"更新时间"}}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.$router.push({name:"setting-edit",params:{roleInfo:t.row,sys_id:t.row.id}})}}},[e._v("详情\n                ")]),e._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.$router.push({name:"setting-edit",params:{roleInfo:t.row,sys_id:t.row.id,sys_type:"edit"}})}}},[e._v("编辑\n                ")]),e._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.del(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-pagination",{staticClass:"pagin",attrs:{"current-page":e.fetchParam.page,"page-size":e.fetchParam.pagesize,"page-sizes":[15,30,60,100],layout:"sizes,total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=51.956663c497713e357c9c.js.map