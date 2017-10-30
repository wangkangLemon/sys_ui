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
                <el-form-item label="栏目id" prop="category_id">
                    <el-input v-model.name="fetchParam.category_id" type="number"></el-input>
                </el-form-item>
                <el-form-item label="引用类型" prop="ref_type">
                    <el-input v-model.mobile="fetchParam.ref_type"></el-input>
                </el-form-item>
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
                    <el-input v-model.address="fetchParam.date"></el-input>
                </el-form-item>
                <el-form-item label="标签" prop="tags">
                    <el-input v-model.address="fetchParam.tags"></el-input>
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
    export default {
        name: 'sys-form',
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
            }
        },
        created() {
            xmview.setContentLoading(false);
            console.log('this.$route.params.sys_id='+ this.$route.params.sys_id )
                if (this.$route.params.sys_id != undefined) {    //路由id传递
                    console.log('进入了编辑')
                    sysService.getAdminInfo(this.$route.params.sys_id).then((ret) => {
                        this.fetchParam = ret
                        console.log(ret)
                    })
                }    
            this.loadingData=false;
        },
        activated () {
            xmview.setContentLoading(false);
            // console.log('this.$route.params.sys_id='+ this.$route.params.sys_id )
        },
        methods: {
            btnNextClick() {
                this.$refs['form'].validate((valid) => {
                    if (!valid) return
                    let req = sysService.create
                    if (this.$route.params.sys_id) req = sysService.edit
                    console.log(req)
                    // console.log(this.$route.params.sys_id)
                    req(this.fetchParam).then((ret) => {
                        console.log(111111111111)
                        console.log(ret)
                        // 重置当前数据
                        xmview.showTip('success', '数据提交成功')
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
        }
    }

    function getOriginData() {
        return {
            menu_name: '',
            menu_node:'',
            remark:'',
            sort: 0,
            pid: 0,
            level: 0,
        }
    }

</script>