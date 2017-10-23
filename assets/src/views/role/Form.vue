<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../utils/mixins/common";
    #sys-form {
        @extend %content-container;
        .el-form {
            max-width: 700px;
        }
    }
</style>
<template>
    <main id="sys-form">
            <el-form label-width="120px" ref="form" :rules="rules" :model="fetchParam">
            <!--<el-form-item label="角色" prop="role_id">
                <CourseCategorySelect type="newcourse" :placeholder="fetchParam.category_name" :autoClear="true" :showNotCat="false" v-model="fetchParam.role_id"></CourseCategorySelect>
            </el-form-item>-->
            <el-form-item label="角色" prop="role_id" :fetch-suggestions="querySearch">
                <el-select v-model="fetchParam.role_id" placeholder="请输入角色">
                    <el-option  v-for="item in role_list" :key="item.id" :label="item.role_name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model.name="fetchParam.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
                <el-input v-model.mobile="fetchParam.mobile"></el-input>
            </el-form-item>
            <el-form-item label="邮箱"  prop="email">
                <el-input v-model.email="fetchParam.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model.password="fetchParam.password" auto-complete="off" type="password" key=""></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="price">
                <el-input v-model.address="fetchParam.address"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button @click="$router.push({ name:'sys-index'})">取消</el-button>
                <el-button type="primary" @click="btnNextClick">确认</el-button>
            </el-form-item>
            </el-form>
    </main>
</template>

<script>
    import sysService from '../../services/sys/sysService.js'
    import role_mService from '../../services/sys/role_mService.js'
    import vTags from '../component/form/Tags.vue'
    import config from '../../utils/config'
    import clone from 'clone'
    export default {
        name: 'sys-form',
        components: {
            vTags,
        },
        data() {
            return {
                imgUrl: '',
                loadingData: false,
                currentData: {
                    data: {},
                    pindex: -1,
                    index: -1
                },
                fetchParam: getOriginData(),
                rules: {
                    role_id: { required: true, message: '请输入角色'},
                    mobile: { pattern: /^1[34578]\d{9}$/, required: true, type: 'string', message: '请输入正确的手机号', trigger: 'blur' },
                    email: { pattern: /^\w+([-+.]\w+)*@\w+([-+.]\w+)*.\w+([-+.]\w+)*$/, required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    password: {  pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/,required: true, message: '请输入包含数字和字母且大于6位的密码', trigger: 'blur' },
            },
                multi: {
                    data: [{
                        id: -1
                    }],
                },
                resultData: [],
                role_list:[],
            }
        },
        created() {
            xmview.setContentLoading(false);
                if (this.$route.params.sys_id != undefined) {    //路由id传递
                    sysService.getAdminInfo(this.$route.params.sys_id).then((ret) => {
                        this.fetchParam = ret
                        console.log(ret)
                        // this.fetchParam.role_id = ret.course.role_id
                    })
                }    
            this.getrole()
            this.loadingData=false;
        },
        methods: {
            getrole(val){
                role_mService.fetchData().then((ret)=>{
                 this.role_list=ret.data;
                })
            },
            btnNextClick() {
                this.$refs['form'].validate((valid) => {
                    if (!valid) return
                    let req = sysService.create
                    if (this.fetchParam.id) req = sysService.update
                    req(this.fetchParam).then((ret) => {
                        console.log(111111111111)
                        console.log(ret)
                        // 重置当前数据
                        //this.$refs[fetchParam].resetFields();//自己加的方法
                        xmview.showTip('success', '数据提交成功')
                        // this.fetchParam=getOriginData(),
                        this.$refs['form'].resetFields();
                        this.currentData = {
                            data: [],
                            pindex: -1,
                            index: -1
                        }
                        if (!this.fetchParam.id) this.fetchParam.id = ret.id;
                    })
                })
            },
            //拿到角色组
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据返回建议列表的数据
                cb(results);
            },
 
            // 保存章节
            submitChapter() {
                if (!this.chapter.value) return
                if (this.resultData === null) this.resultData = []
                this.resultData.push({
                    id: 0,
                    name: this.chapter.value,
                    sort: 0,
                    deleted: false,
                    status: 0,
                    lessons: [{
                        id: -1
                    }]
                })
                this.chapter.editStatus = false
            },
            saveItemChapter(pitem, pindex) {
                this.resultData[pindex].status = 0
                this.$forceUpdate()
            },
            saveResult() {
                let result = [{
                    id: 0,
                    name: '',
                    sort: 0,
                    deleted: false,
                    lessons: []
                }]
            },
        }
    }

    function getOriginData() {
        return {
            role_id: '',
            role:'',
            role_name:'',
            category_name: '请选择栏目',
            name: '',
            mobile: '',
            email: '',
            password: '',
            address: '',
            id: 0
        }
    }

</script>