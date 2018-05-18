<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../../../utils/mixins/common";
    #medical-form {
        @extend %content-container;
        display: flex;
        .submit-form {
        width: 45%;
        padding: 20px;
            .select{
                width: 100%;
            }
            .subButton {
                text-align: center;
            }
    }
    }
</style>
<template>
    <main id="medical-form">
        <section class="submit-form">   
            <el-form label-width="120px" ref="form" :rules="rules" :model="fetchParam" >
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="fetchParam.name"></el-input>
                </el-form-item>
                <el-form-item label="标记" prop="mark" :label-width="formLabelWidth">
                     <el-input v-model="fetchParam.mark"></el-input>
                    <!-- <el-radio-group v-model="fetchParam.mark">
                        <el-radio :label="'vip_original'">vip原价</el-radio>
                        <el-radio :label="'vip_discount'">vip打折</el-radio>
                    </el-radio-group> -->
                </el-form-item>
                <el-form-item label="商品金额(分)" prop="price">
                    <el-input type="number" :min="0" v-model="fetchParam.price"></el-input>
                </el-form-item>
                <el-form-item label="商品简介" prop="description">
                    <el-input v-model="fetchParam.description" type="textarea" :autosize="{ minRows: 3, maxRows: 7}" placeholder="请输入内容">
                    </el-input>
                </el-form-item>
                <el-form-item label="苹果原价商品id" prop="appleid_origin">
                    <el-input v-model="fetchParam.appleid_origin" placeholder="请输入内容">
                    </el-input>
                </el-form-item>
                <el-form-item label="苹果折扣价商品id" prop="appleid_discount">
                    <el-input v-model="fetchParam.appleid_discount" placeholder="请输入内容">
                    </el-input>
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
    import financeService from '../../../../services/finance/financeService'

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
    export default {
        name: 'finance-product-edit',
        components: {
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
                // passValue: true,
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
                    name:[
                        {required: true, message: '必须输入', trigger: 'blur'},
                        ,{
                            pattern:  /\S$/,
                            message: '请输入非空格或非特殊字符的内容'
                        }
                    ],
                    mark: { required: true, type:'string',message: '请输入商品标记',trigger: 'change'},
                    price: { required: true,type:'number', message: '请输入商品金额',trigger: 'blur'},
                    description: { required: true, message: '请输入商品简介',trigger: 'blur'},
                    appleid_origin: { required: true, message: '请输入苹果原价商品id',trigger: 'blur'},
                    appleid_discount: { required: true, message: '请输入苹果折扣价商品id',trigger: 'blur'},
            },
                multi: {
                    data: [{
                        id: -1
                    }],
                },
                resultData: [],
                hospital_list:[],
                formLabelWidth: '120px', // 表单label的宽度
                changelist:{}
            }
        },
        watch:{
            'fetchParam.price'(){
                this.fetchParam.price=Number(this.fetchParam.price)
                console.log('typeof(this.fetchParam.price)===='+typeof(this.fetchParam.price));
            }
        },
        created() {
            xmview.setContentLoading(false)
            if (this.$route.params.id != undefined) {    //路由id传递
                // this.passValue = false
                financeService.getProduct(this.$route.params.id).then((ret) => {
                    this.fetchParam = ret
                    // this.fillImgPath = ret.image
                    // this.fetchParam.role_id = ret.course.role_id
                })
            } 
            //暂时不获取角色列表       
            this.loadingData=false
        },
        methods: {
            getExpertsList (val, length) {
                return financeService.fetchProductList({
                    name: val,
                    // category: this.type,
                    pagesize: this.pageSize,
                    page: parseInt(length / this.pageSize) + 1
                }).then((ret) => {
                    this.$emit('changelist', ret)
                    this.changelist = ret;
                    return ret
                })
            },
            btnNextClick() {
                this.$refs['form'].validate((valid) => {
                    if (!valid) return
                    console.log(this.fetchParam)
                       console.log('typeof(this.fetchParam.mark)===='+typeof(this.fetchParam.mark));

                    let req = financeService.createProduct
                    if (this.fetchParam.id) req = financeService.editProduct
                    req(this.fetchParam,this.fetchParam.id).then((ret) => {
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
                        this.$router.go(-1)
                    })
                })
            }
        }
    }

    function getOriginData() {
        return {
            name: '',
            description: '',
            mark: '',
            price:void 0,
            appleid_origin:'',
            appleid_discount:''
        }
    }

</script>