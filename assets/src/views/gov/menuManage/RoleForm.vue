<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../../utils/mixins/common";
    #sys-form {
        @extend %content-container;
        .el-form {
            max-width: 700px;
        }
    }
</style>
<template>
    <main id="sys-form">
            <el-form label-width="120px" ref="form" :model="fetchParam">
            <el-form-item label="角色名称" prop="role_name">
                <el-input v-model="fetchParam.role_name"></el-input>
            </el-form-item>
            <el-form-item label="角色标识" prop="role_node">
                <el-input v-model="fetchParam.role_node"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button @click="$router.push({ name:'gov-warrant'})">取消</el-button>
                <el-button type="primary" @click="btnNextClick">确认</el-button>
            </el-form-item>
            </el-form>
    </main>
</template>

<script>
    import roleService from '../../../services/gov/roleService'
    import vTags from '../../component/form/Tags.vue'
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
                resultData: [],
            }
        },
        created() {
            xmview.setContentLoading(false);
                if (this.$route.params.warrant_id!=undefined) {    //路由id传递
                    roleService.getAdminInfo(this.$route.params.warrant_id).then((ret) => {
                        this.fetchParam = ret
                    })
                }    
            this.loadingData=false;
        },
        methods: {
            btnNextClick() {
                this.$refs['form'].validate((valid) => {
                    if (!valid) return
                    let req = roleService.create
                    if (this.$route.params.warrant_id) req = roleService.update
                    req(this.fetchParam).then((ret) => {
                        xmview.showTip('success', '数据提交成功')
                        this.$refs['form'].resetFields();
                        this.currentData = {
                            data: [],
                            pindex: -1,
                            index: -1
                        }
                        if (!this.fetchParam.id) this.fetchParam.id = ret.id;
                        this.$router.push({'name': 'gov-warrant'})
                    })
                })
            }
        }
    }

    function getOriginData() {
        return {
            role_name:'',
            role_node:'',
        }
    }

</script>