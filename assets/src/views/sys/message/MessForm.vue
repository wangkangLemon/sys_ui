<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../../utils/mixins/common";
    #medical-form {
        @extend %content-container;
        display: flex;
        .submit-form {
            width: 90%;
            padding: 20px;
                .select{
                    width: 100%;
                }
                .subButton {
                    text-align: center;
                }
                .collection {
                align-items: center;
                min-height: 36px;
                border-radius: 4px;
                padding: 3px 30px 3px 10px;
                border: 1px solid #bfcbd9;
            }
            .u-course-tag {
                margin-right: 10px;
                background-color: rgba(32,160,255,.1);
                display: inline-block;
                padding: 0 10px;
                height: 32px;
                line-height: 30px;
                font-size: 12px;
                color: #20a0ff;
                border-radius: 4px;
                box-sizing: border-box;
                border: 1px solid rgba(32,160,255,.2);
                white-space: nowrap;
                &:last-child {
                    margin-right: 0;
                }
            }

        }
        .search {
            section{
                margin-bottom:14px;
            }
           .el-input{
               width:auto
           }
           
        } 
    // 底部的管理按钮
        // section{
        //     display:inline-block
        // }
    }
</style>
<template>
    <main id="medical-form">

         <!-- 发布对象弹窗 -->
        <el-dialog
            :title="pushTypeDialog.title"
            :visible.sync="pushTypeDialog.showDialog"
            v-if="pushTypeDialog.showDialog">
            <template v-if="pushTypeDialog.isSearch">
                <section class="search">
                    <section>
                        <!-- <i>部门</i>
                        <DepSelect v-model="pushTypeDialog.fetchParam.receiver" :change="getPushTypeData"></DepSelect>  -->
                        <i>手机号</i>
                        <el-input v-model="pushTypeDialog.fetchParam.mobile" placeholder="请输入手机号" @keyup.enter.native="getPushTypeData" ></el-input>
                          <i>姓名</i>
                        <el-input v-model="pushTypeDialog.fetchParam.name" placeholder="请输入姓名" @keyup.enter.native="getPushTypeData" ></el-input>
                    </section>
                </section>
            </template>
            <Transfer placeholder="搜索"
                      @searchFn="(val)=>{pushTypeDialog.page=1;pushTypeDialog.fetchParam.name=val;fetchPushTypeData();}"
                      @moreFn="()=>{pushTypeDialog.page++;fetchPushTypeData('no-clear');}"
                      :total="pushTypeDialog.total"
                      :data="pushTypeDialog.data"
                      :selectedValue='selectData'
                      v-model="pushTypeDialog.selectedData[pushTypeDialog.type]"></Transfer>
            <span slot="footer" class="dialog-footer" >
                <el-button @click="pushTypeDialog.showDialog = false">取 消</el-button>
                <el-button type="primary" @click="transferConfirmFn">确 定</el-button>
            </span>
        </el-dialog>
        <section class="submit-form">   
              <el-form :model="form" :rules="rules" ref="form" :label-width="formLabelWidth">
                <el-form-item prop="title" label="推送标题">
                    <el-input v-model="form.title" placeholder="请填写推送标题" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="发布对象">
                    <el-select clearable v-model="form.receive_type" @change="choosePushType" placeholder="请选择发送范围类型">
                        <el-option label="全部" :value="3"></el-option>
                        <el-option label="政府任务" :value="1"></el-option>
                        <el-option label="个人任务" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    :label="pushTypeDialog.title"
                    v-if="form.receive_type!=3 && form.receive_type==pushTypeDialog.type">
                    <div class="collection" @click="openPushTypeDialog">
                        <el-tag
                            class="u-course-tag"
                            v-for="item in pushTypeDialog.selectedData[this.pushTypeDialog.type]"
                            :key="item.id">
                            {{item.name}}
                        </el-tag>
                    </div>
                </el-form-item>
                 <el-form-item label="下发部门" prop="receiver" v-if="form.receive_type==1">
                      <!--用v-if全部  v-else gov选择组件-->
                        <el-checkbox v-model="govparam.checked" v-if="!govparam.provinceSelect">全部</el-checkbox>
                        <Region :province="govparam.provinceSelect" 
                                :city="govparam.citySelect" 
                                :area="govparam.areaSelect" 
                                :town="govparam.townSelect"
                                :village="govparam.villageSelect" title="" 
                                v-on:provinceChange="val => {govparam.provinceSelect = val;finallyVal = val}"
                                v-on:cityChange="val => {govparam.citySelect = val;finallyVal = val}" 
                                v-on:areaChange="val => {govparam.areaSelect = val;finallyVal = val}"
                                v-on:townChange="val => {govparam.townSelect = val;finallyVal = val}" 
                                v-on:villageChange="val => {govparam.villageSelect = val;finallyVal = val}"
                                :change="changeR">
                        </Region>
                        <!-- <Course-category-select :placeholder="govparam.name" :autoClear="true" :mark = this.mark :showNotCat="false" v-model="govparam.id" :req="req">
                        </Course-category-select> -->
                </el-form-item>
                 <el-form-item prop="sendtime" label="发送时间" >
                    <el-date-picker v-model="form.sendtime" type="datetime" placeholder="发送日期"
                                    :picker-options="pickerOptionsed"/>
                </el-form-item>
                <el-form-item label="推送类型" prop="msg_type">
                    <el-radio-group v-model="form.msg_type">
                        <el-radio :label="1">通知</el-radio>
                        <el-radio :label="2">课程</el-radio>
                        <el-radio :label="3">直播</el-radio>
                        <!-- <el-radio :label="'task'">任务</el-radio> -->
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="url" label="推送地址" v-if="form.msg_type=='url'||form.msg_type=='course'">
                    <el-input v-model="form.url" placeholder="请填写推送地址" auto-complete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item prop="content" label="推送内容">
                    <el-input v-model="form.content" type="textarea" :autosize="{ minRows: 3, maxRows: 7}" placeholder="请填写推送内容"></el-input>
                </el-form-item> -->
                <el-form-item prop="biz_id" label="推送课程" v-if="form.msg_type==2">
                     <Course v-model="form.biz_id" :placeholder="form.course_name" ref="Course"
                            v-on:change="val=>form.biz_id=val" :change="reqFun2" :itemObj="['contentid','course_name']" :list="changelistc">
                    </Course>
                </el-form-item>
                <el-form-item prop="biz_id" label="推送直播" v-if="form.msg_type==3">
                    <Course v-model="form.biz_id" :placeholder="form.title" ref="Live"
                            v-on:change="val=>form.biz_id=val" :change="reqFun1" :itemObj="['id','title']" :list="changelistc">
                    </Course>
                </el-form-item>
                <el-form-item prop="content" label="推送内容" id="editor" :label-width="formLabelWidth">
                    <vue-editor v-model="form.content" @ready="ueReady"></vue-editor>
                </el-form-item>
          
                 <el-form-item label="" >
                    <!--<el-button @click="$router.push({ name:'medical-index'})">取消</el-button>-->
                    <div>
                    <el-button type="primary" @click="btnNextClick">确认</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </section>
    </main>
</template>

<script>
    import sysService from '../../../services/sys/sysService.js'
    import ImagEcropperInput from '../../component/upload/ImagEcropperInput.vue'
    import commonService from '../../../services/commonService.js'
    import authUtils from '../../../utils/authUtils' 

    import courseService from "../../../services/course/courseService.js"
    import LiveService from "../../../services/liveService.js"
    import govService from "../../../services/gov/govService.js"
    import userService from '../../../services/gov/userService.js'
    import DateRange from '../../component/form/DateRangePicker.vue'
    import Course from '../../component/select/CommonSelect.vue'
    import CourseCategorySelect from '../../component/select/MultCategory'
    import Region from '../../component/select/Region.vue'
    import { time2String } from '../../../utils/timeUtils.js'
    import VueEditor from '../../component/form/UEditor.vue'
    import Transfer from '../../component/dialog/Transfer.vue'
    import DepSelect from '../../component/select/DepartmentNoself.vue'


    function clearFn() {
        return {
            typeSelect: '',
            provinceSelect: '',
            citySelect: '',
            areaSelect: '',
            townSelect: '',
            villageSelect: '',
            name: ''
        }
    }
    function clearForm() { //添加
        return {
            receive_type:void 0,
            msg_type: '',
            title: '',
            content: '',
            url:'',
            receiver:'',
            // gov_id:void 0,
            biz_id:void 0,
            sendtime:'',
            status:1
        }
    }
    function clearGovParam() { //添加
        return {
            checked:false,
            receiver: void 0,
            pid: void -1,
            provinceSelect: '',
            citySelect: '',
            areaSelect: '',
            townSelect: '',
            villageSelect: '',
            name: '',
        }
    }
    export default {
        name: 'messages-edit',
        components: {
            ImagEcropperInput, DateRange,Course,CourseCategorySelect,Region,VueEditor, Transfer, DepSelect
        },
        data() {
            let validateGov = (rule, value, callback) => { 
            console.log('validateGov',value,this.govparam.provinceSelect,this.govparam.checked);
            console.log('provinceSelect',this.govparam.provinceSelect==undefined,this.govparam.checked==false);
                if ((!this.govparam.provinceSelect&&this.govparam.checked==false)){
                    callback(new Error('请输入部门'))
                }
                callback()
            }
            return {
                selectData:[],
                govparam:clearGovParam() ,
                loadingData: false,
                fetchParam: getOriginData(),
                form: clearForm(),
                pushTypeDialog: { //发布对象数据模型
                    fetchParam: {
                        receiver: '',
                        gov_ids: '',
                        name: '',
                        noself: 1,
                        mobile:'',
                    },
                    title: '',
                    isSearch: '',
                    type: '',
                    showDialog: false,
                    selectedData: {
                        2: [],
                        1: []
                    },
                    data: [],
                    page: 1,
                    pagesize: 15,
                    total: 0,
                },
                role_list:[
                    {
                        name: '管理员',
                        id: 1
                    },
                    {
                        name: '部门人员',
                        id: 0
                    },
                ],
                rules: {
                    title:[
                        {required: true, message: '必须输入', trigger: 'blur'},
                        ,{
                            pattern:  /\S$/,
                            message: '请输入非空格或非特殊字符的内容'
                        }
                    ],
                    author: { required: true, message: '请输入作者姓名',trigger: 'blur'},
                    info: { required: true, message: '请输入简介内容',trigger: 'blur'},
                    html: { required: true, message: '请输入资讯内容',trigger: 'blur'},
                },
                pickerOptionsed: {
                    disabledDate (time) {
                        return time.getTime() < Date.now() - 8.64e7
                    }
                },
                formLabelWidth: '120px', // 表单label的宽度
                govid:'',
                changelistc:[],//课程列表
            }
        },
        watch:{
            'fetchParam.price'(){
                this.fetchParam.price=Number(this.fetchParam.price)
                console.log('typeof(this.fetchParam.price)===='+typeof(this.fetchParam.price));
            }
        },
        created() {
            // debugger
            // xmview.setContentLoading(false)
            // if (this.$route.params.id != undefined) {    //路由id传递
            //     newsService.getProduct(this.$route.params.id).then((ret) => {
            //         this.fetchParam = ret
            //         this.fillImgPath = ret.image
            //     })
            // } 
            // this.loadingData=false
        },
        activated () {
             xmview.setContentLoading(false)
            if (this.$route.params.id != undefined) {    //路由id传递
                newsService.getProduct(this.$route.params.id).then((ret) => {
                    this.fetchParam = ret
                    this.fillImgPath = ret.image
                })
            } 
            this.loadingData=false
        },
        methods: {
             ueReady (ue) {
                this.editor = ue
            },
             cropperFn (data, ext) {
                this.govid=authUtils.getUserInfo().gov_id 
                commonService.commonUploadImageBaseSection({
                    image: data,
                    alias: `${Date.now()}${ext}`,
                    biz: 'gov',
                    extpath: this.govid,
                }).then((ret) => {
                    this.fetchParam.image = ret.url 
                    // xmview.showTip('success', '上传成功')
                    // authUtils.setAvatar(ret.data.url)
                })
            },
            btnNextClick() {
                 this.$refs.form.validate((valid) => {
                    if (valid) {
                        
                        this.form.sendtime = this.form.sendtime ? time2String(this.form.sendtime) : ''
                        if(this.form.receive_type==1){
                        // 处理政府govids
                            if(this.govparam.checked==true){
                                this.form.receiver=0
                            }else{
                                this.form.receiver = this.govparam.villageSelect || this.govparam.townSelect || this.govparam.areaSelect || this.govparam.citySelect || this.govparam.provinceSelect
                            }
                        }else if(this.form.receive_type==2){
                            // 处理userids
                            this.form.receiver = this.pushTypeDialog.type && this.pushTypeDialog.selectedData[this.pushTypeDialog.type].map(item => {
                            return item.id
                            }).join(',')
                        }
                        console.log('this.form',this.form);
                        sysService.messageCreate(this.form).then((ret) => {
                            xmview.showTip('success', '添加成功')
                        }).then(() => {
                            this.addForm = false
                            // this.initFetchParam()
                            this.fetchData()
                            this.page = 1
                        })
                    } else {
                        return false
                    }
                })
            },
            //打开发布对象弹出框
            openPushTypeDialog () {
                this.pushTypeDialog.showDialog = true
                this.pushTypeDialog.page = 1
                this.pushTypeDialog.fetchParam.receiver = ''
                this.pushTypeDialog.fetchParam.gov_ids = ''
                this.pushTypeDialog.fetchParam.name = ''
                this.fetchPushTypeData()
            },
            transferConfirmFn () {
                this.pushTypeDialog.showDialog = false
            },
            //选择发布对象
            choosePushType(){
                let map = {
                    // 1: {
                    //     type: 1,
                    //     label: '选择部门',
                    //     isSearch: false,
                    // },
                    2: {
                        type: 2,
                        label: '选择人员',
                        isSearch: true,
                    }
                }
                console.log(1111111,typeof(this.form.receive_type),this.form.receive_type);
                let param = map[this.form.receive_type]
                console.log(param);
                
                if(param!=undefined){
                    this.pushTypeDialog.title = param.label
                    this.pushTypeDialog.isSearch = param.isSearch
                    this.pushTypeDialog.type = param.type
                }

            },
            getPushTypeData () {
                this.pushTypeDialog.page = 1
                this.fetchPushTypeData()
            },
            fetchPushTypeData (type) {
                type !== 'no-clear' && (this.pushTypeDialog.data = [])
                let map = {
                    1: govService.getSelectList,  //部门
                    2: userService.fetchData,  //人员
                }
                let param = {
                    name: this.pushTypeDialog.fetchParam.name,
                    page: this.pushTypeDialog.page,
                    pagesize: this.pushTypeDialog.pagesize,
                    noself:1  
                }

                if (this.pushTypeDialog.isSearch) {
                    param.mobile = this.pushTypeDialog.fetchParam.mobile
                    param.name = this.pushTypeDialog.fetchParam.name
                    param.receiver = this.pushTypeDialog.fetchParam.receiver
                    param.role_id = -1
                    param.noself = 1
                }
                map[this.pushTypeDialog.type](param).then(ret => {
                    this.pushTypeDialog.total = ret._exts.total
                    // if (this.pushTypeDialog.data.length > 0 && this.pushTypeDialog.data.length < ret._exts.total) {
                    if (this.pushTypeDialog.data.length > 0 ) {
                        this.pushTypeDialog.data.splice(-1, 1)
                    }
                    this.pushTypeDialog.data.push(...ret.data, {id: -1}) //暂无id:-1 字段
                })
            },
            ueReady (ue) {
                this.editor = ue
            },
            changeR(type){
                let level_pid=this.govparam.villageSelect || this.govparam.townSelect || this.govparam.areaSelect || this.govparam.citySelect || this.govparam.provinceSelect
                let flag = false
                let index
                let arr = ['provinceSelect', 'citySelect', 'areaSelect', 'townSelect', 'villageSelect']
                arr.forEach((v,i) => {
                    if (flag) {
                        this.govparam[v] = null
                    }
                        console.log(this.govparam.provinceSelect,this.govparam.citySelect ,this.govparam.areaSelect,this.govparam.townSelect, this.govparam.villageSelect);
                    if (this.govparam[v] == this.finallyVal) {
                        flag = true
                        index = i
                    }
                })

            },
            //获取gov菜下拉列表
            req(param){
                return govService.getSelectList({
                    pagesize:-1,pid:0,level:-1
                })
            },
            //推送直播搜索
            reqFun1(val, length){
                let param={
                    page: parseInt(length / 15) + 1||1,
                    pagesize: 15,
                    title:val,
                }
                let _this=this
                return LiveService.getLivelists(param)
                .then((ret)=>{
                    console.log('param=',typeof(param.page));
                    console.log('ret.data',ret.data);
                    // if(param.page==1){
                    //     ret.data=[{id:0,name:'免费直播'}].concat(ret.data)
                    //     console.log(ret.data);
                    //     _this.$emit('changelistc', ret.data)
                    // }else{
                        _this.$emit('changelistc', ret.data)
                    // }
                    return ret
                })
            },
            //推送课程搜索
            reqFun2(val, length){
                let param={
                    page: parseInt(length / 15) + 1||1,
                    pagesize: 15,
                    course_name:val,
                }
                let _this=this
                return courseService.getPublicCourselist(param)
                .then((ret)=>{
                    console.log('param=',typeof(param.page));
                    console.log('ret.data',ret.data);
                    // if(param.page==1){
                    //     ret.data=[{id:0,name:'免费直播'}].concat(ret.data)
                    //     console.log(ret.data);
                    //     _this.$emit('changelistc', ret.data)
                    // }else{
                        _this.$emit('changelistc', ret.data)
                    // }
                    return ret
                })
            },
        }
    }

    function getOriginData() {
        return {
            title: '',
            author: '',
            info:'',
            image:'',
            html:''
        }
    }

</script>