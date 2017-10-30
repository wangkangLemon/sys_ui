<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../utils/mixins/common";
    #sys-form {
        @extend %content-container;
        .el-form {
            max-width: 700px;
        }
    
        .submit-form {
        width: 40%;
        padding: 20px;
            .subButton {
                text-align: center;
            }
    }
    }
</style>
<template>
    <main id="sys-form">
        <section class="upload-avatar">
            <div class="img-container">
                <img :src="imgUrl" />
            </div>
            <!--<ImagEcropperInput :isRound="true" :aspectRatio="1" :confirmFn="cropperFn" class="upload-btn"></ImagEcropperInput>-->
        </section>     
        <section class="submit-form">   
            <el-form label-width="120px" ref="form" :model="fetchParam">
                <el-form-item v-if="$route.params.sys_id" label="区块id" prop="id">
                    <el-input v-model.name="fetchParam.id" type="number" disabled></el-input>
                </el-form-item>
                <el-form-item v-else >
                </el-form-item>
                <el-form-item label="栏目id" prop="category_id">
                    <el-input v-model.name="fetchParam.category_id" type="number"></el-input>
                </el-form-item>
                <el-form-item label="引用类型" prop="ref_type">
                    <el-input v-model.mobile="fetchParam.ref_type"></el-input>
                </el-form-item>
         
                <div class="el-form-item">
                    <label for="ref_sync" class="el-form-item__label" style="width: 120px;">
                        是否与引用同步
                    </label>
                    <div class="el-form-item__content" style="margin-left: 120px;">
                        <label class="el-radio radio">
                        <span :class="{'el-radio__input':true,'is-checked':fetchParam.ref_sync==1}">
                            <span class="el-radio__inner"></span>
                            <input type="radio" class="el-radio__original" value="1" name="ref_sync" v-model="fetchParam.ref_sync">
                        </span>
                        <span class="el-radio__label">同步</span></label> 
                        <label class="el-radio radio">
                            <span :class="{'el-radio__input':true,'is-checked':fetchParam.ref_sync==0}">
                                <span class="el-radio__inner"></span>
                                <input type="radio" class="el-radio__original" value="0" name="ref_sync" v-model="fetchParam.ref_sync">
                            </span>
                            <span class="el-radio__label">不同步</span>
                        </label>
                    </div>
                </div>
                <el-form-item label="引用id"  prop="ref_id">
                    <el-input v-model.email="fetchParam.ref_id" type="number" ></el-input>
                </el-form-item>
                <el-form-item label="是否与引用同步" prop="ref_sync">
                    <el-input v-model.password="fetchParam.ref_sync" type="number"></el-input> 
                    <!--1：同步 0：不同步-->
                </el-form-item>
                <el-form-item label="标题" prop="title">
                    <el-input v-model.address="fetchParam.title"></el-input>
                </el-form-item>
                <el-form-item label="图片" prop="image">
                    <el-input v-model.address="fetchParam.image"></el-input>
                </el-form-item>
                <el-form-item label="链接" prop="url">
                    <el-input v-model.address="fetchParam.url"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                    <el-input v-model.address="fetchParam.desc"></el-input>
                </el-form-item>
                <el-form-item label="日期字符串" prop="date">
                    <el-input v-model.address="fetchParam.date" type="date"></el-input>
                </el-form-item>
                <!--<el-form-item label="标签" prop="tags">
                    <el-input v-model.address="fetchParam.tags"></el-input>
                </el-form-item>-->
                <el-form-item label="标签">
                    <vTags v-model="courseTags"></vTags>
                </el-form-item>
                <el-form-item label="颜色值" prop="tags_color">
                    <el-input v-model.address="fetchParam.tags_color"></el-input>
                </el-form-item>
                <el-form-item label="排序" prop="sort">
                    <el-input v-model.address="fetchParam.sort" type="number"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button @click="$router.push({ name:'sys-index'})">取消</el-button>
                    <el-button type="primary" @click="btnNextClick">确认</el-button>
                </el-form-item>
            </el-form>
        </section>
    </main>
</template>

<script>
    import sysService from '../../services/section/dataService.js'
    import config from '../../utils/config'
    import vTags from '../component/form/Tags.vue'
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
                resultData: [],
                role_list:[],
                courseTags: [],
            }
        },
        created() {
            // xmview.setContentLoading(false);
            // console.log('this.$route.params.sys_id='+ this.$route.params.sys_id )
            //     if (this.$route.params.sys_id != undefined) {    //路由id传递
            //         console.log('进入了编辑')
            //         sysService.getAdminInfo(this.$route.params.sys_id).then((ret) => {
            //             this.fetchParam = ret
            //             console.log(ret)
            //         })
            //     }    
            // this.loadingData=false;
        },
        activated () {
            xmview.setContentLoading(false);
             if (this.$route.params.sys_id != undefined) {    //路由id传递
                    console.log('进入了编辑')
                    sysService.getAdminInfo(this.$route.params.sys_id).then((ret) => {
                        this.fetchParam = ret
                        this.courseTags = ret.course.tags.split(',')
                        console.log(ret)
                    })
                }else{
                    this.fetchParam = getOriginData()
                }    
            this.loadingData=false;
            // console.log('this.$route.params.sys_id='+ this.$route.params.sys_id )
        },
        methods: {
            btnNextClick() {
                this.$refs['form'].validate((valid) => {
                    if (!valid) return
                    this.fetchParam.tags = this.courseTags.join(',')
                    let req = sysService.create
                    if (this.$route.params.sys_id) req = sysService.edit
                    // alert(req)
                    // console.log(this.$route.params.sys_id)
                        console.log(this.fetchParam)

                    req(this.fetchParam).then((ret) => {
                        console.log(111111111111)
                        console.log(this.fetchParam)
                        // 重置当前数据
                        xmview.showTip('success', '数据提交成功')
                        this.$refs['form'].resetFields();
                        this.currentData = {
                            data: [],
                            pindex: -1,
                            index: -1
                        }
                        this.courseTags=[]
                        if (!this.fetchParam.id) this.fetchParam.id = ret.id;
                    })
                })
            },
        }
    }

    function getOriginData() {
        return {
            id:0, 
            category_id:0, 
            ref_type:'', 
            ref_id: 0, 
            ref_sync:'', 
            title:'', 
            image:'', 
            url:'', 
            desc:'', 
            date:'', 
            tags:'', 
            tags_color:'', 
            sort:0,
            courseTags:[]
        }
    }

</script>;