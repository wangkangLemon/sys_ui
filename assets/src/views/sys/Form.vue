<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../utils/mixins/common";
    #sys-form {
        @extend %content-container;
        .el-form {
            max-width: 700px;
        }
        .el-tabs {
            .el-tab-pane {
                .mulit-class {
                    .saveBtn {
                        float: right;
                        margin-top: 20px;
                    }
                    padding: 20px 100px;
                    text-align: center;
                    width: 75%;
                    p {
                        padding: 10px;
                        margin-top: 10px;
                        text-align: left;
                        span {
                            i {
                                margin: 0 10px;
                            }
                        }
                        .operate {
                            float: right;
                        }
                        &.gray {
                            text-align: center;
                            background: #eee;
                            margin-left: 50px;
                            cursor: pointer;
                        }
                        .edit-status {
                            display: block;
                            margin: 10px 0 10px 50px;
                            .el-input {
                                width: 70%;
                            }
                            span {
                                float: right;
                            }
                        }
                        &.edit-status {
                            text-align: left;
                            margin-left: 50px;
                            >.el-input {
                                outline: none;
                                line-height: 30px;
                                padding-left: 10px;
                                width: 70%;
                            }
                            >span {
                                float: right;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <main id="sys-form">
        <el-form label-width="120px" ref="form" :rules="rules" :model="fetchParam">
            <!--<el-form-item label="角色" prop="role_id">
                <CourseCategorySelect type="newcourse" :placeholder="fetchParam.category_name" :autoClear="true" :showNotCat="false" v-model="fetchParam.role_id"></CourseCategorySelect>
            </el-form-item>-->
            <el-form-item label="角色" prop="role" :fetch-suggestions="querySearch" v-model.role="fetchParam.role" placeholder="请输入内容"
                @select="handleSelect">
                <!--<el-input v-model="fetchParam.role"></el-input>-->
                <el-select v-model.role="fetchParam.role" placeholder="请输入角色" :change="getrole">
                    <el-option  v-for="item in role_list" :label="item.role_name" :value="item.role_name"></el-option>
                    <!--<el-option label="超级管理员" value="role_list.role_name"></el-option>-->
                </el-select>
            </el-form-item>
            <el-form-item label="姓名" prop="price">
                <el-input v-model.name="fetchParam.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
                <el-input v-model.mobile="fetchParam.mobile"></el-input>
            </el-form-item>
            <el-form-item label="邮箱"  prop="email">
                <el-input v-model.email="fetchParam.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model.password="fetchParam.password" auto-complete="off" type="password"></el-input>
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
                loadingData: false,
                currentData: {
                    data: {},
                    pindex: -1,
                    index: -1
                },
                fetchParam: getOriginData(),
                rules: {
                    role: { required: true, message: '请输入角色', trigger: 'change' },
                    mobile: { required: true, type: 'string', message: '请输入正确的手机号', trigger: 'change' },
                    email: { required: true, message: '请输入邮箱地址', trigger: 'change' },
                    pass: { required: true, message: '请输入大于6位的数字', trigger: 'change' },
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
            //     if (this.$route.params.role_id != undefined) {
            //         courseService.getCourseInfo({
            //             role_id: this.$route.params.role_id
            //         }).then((ret) => {
            //             this.editLessonData = ret.lessons
            //             this.fetchParam = ret.course
            //             this.fetchParam.company_id = ret.course.company_id
            //             this.courseTags = ret.course.tags.split(',')
            //             if (this.fetchParam.lesson_type === 'single') {
            //                 this.classhour.form = ret.lessons[0].lessons[0]
            //             } else if (this.fetchParam.lesson_type === 'multi') {
            //                 this.multi.data = ret.lessons[0].lessons
            //                 this.multi.data.push({ id: -1 })
            //             } else if (this.fetchParam.lesson_type === 'chapter') {
            //                 this.resultData = ret.lessons
            //                 this.resultData.forEach((pitem) => {
            //                     pitem.status = 0
            //                     pitem.lessons.push({ id: -1 })
            //                 })
            //             }
            //         })
            //     
            this.getrole()
            this.loadingData=false;
        },
         activated () {
            
        },
        methods: {
            getrole(val){
                role_mService.fetchData().then((ret)=>{
                 this.role_list=ret.data;
                console.log(this.role_list)
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
                        this.$refs[fetchParam].resetFields();//自己加的方法
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
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            //选择角色组
            handleSelect(item) {
                console.log(item);
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