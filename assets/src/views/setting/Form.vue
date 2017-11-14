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
                <el-form-item  v-if="$route.params.sys_id" label="ID" prop="category">
                    <el-input v-model.name="fetchParam.id" disabled></el-input>
                </el-form-item>
                 <el-form-item v-else >
                </el-form-item>
                <el-form-item label="设置" prop="category">
                    <el-input v-model.name="fetchParam.category"></el-input>
                </el-form-item>
                <el-form-item label="字段名" prop="field">
                    <el-input v-model.mobile="fetchParam.field"></el-input>
                </el-form-item>
                <el-form-item label="字段值"  prop="val">
                    <el-input v-model.email="fetchParam.val"></el-input>
                </el-form-item>
                <el-form-item label="超长字段存储" prop="describe">
                    <el-input v-model.password="fetchParam.describe"></el-input>
                </el-form-item>
                <el-form-item label="" v-if="this.$route.params.sys_type">
                    <el-button @click="$router.push({ name:'sys-index'})">取消</el-button>
                    <el-button type="primary" @click="btnNextClick">确认</el-button>
                </el-form-item>
            </el-form>
        </section>
    </main>
</template>

<script>
    import sysService from '../../services/setting/setService.js'
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
        activated () {
            xmview.setContentLoading(false);
            console.log('this.$route.params.sys_id='+this.$route.params.sys_id )
                if (this.$route.params.sys_id != undefined) {    //路由id传递
                    sysService.getAdminInfo(this.$route.params.sys_id).then((ret) => {
                        this.fetchParam = ret
                        console.log(ret)
                    })
                }else{
                    this.fetchParam=getOriginData()
                    // this.$refs['form'].resetFields();
                }    
            this.loadingData=false;
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
                        // this.fetchParam=getOriginData(),
                        this.$refs['form'].resetFields();
                        this.currentData = {
                            data: [],
                            pindex: -1,
                            index: -1
                        }
                        if (!this.fetchParam.id) this.fetchParam.id = ret.id;
                        this.$router.push({'name': 'setting-list'})
                    })
                })
            },
        }
    }

    function getOriginData() {
        return {
            category: '',
            field:'',
            val:'',
            describe: void 0,
        }
    }

</script>