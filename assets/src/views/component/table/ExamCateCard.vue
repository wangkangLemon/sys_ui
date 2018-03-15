<template>
    <div class="el-card edit-content">

        <el-card class="edit-content">
            <el-form label-position="right" label-width="90px" :rules="rules" :model="selectData" ref="form">
                <el-form-item label="栏目名称" prop="name">
                    <el-input v-model="selectData.name" ></el-input>
                </el-form-item>
                <el-form-item label="课程价格" prop="price">
                    <el-input placeholder="最小的排在前面"  v-model="selectData.price"></el-input>
                </el-form-item>
                <el-form-item label="栏目图片" prop="image">
                    <UploadImg ref="uploadImg" :defaultImg="selectData.image" :url="uploadImgUrl"  :onSuccess="handleImgUploaded" :data='uploadextraData'></UploadImg>
                </el-form-item>
                <el-form-item label="简介" prop="remark">
                    <el-input v-model="selectData.remark" ></el-input>
                </el-form-item>
                <el-form-item label="分类排序" prop="sort">
                    <el-input placeholder="最小的排在前面"  v-model="selectData.sort"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info"  @click="save">保存
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>
<script>
    import UploadImg from '../../component/upload/UploadImg.vue'
    import commonService from '../../../services/commonService'
    import authUtils from '../../../utils/authUtils.js'
    export default {
        components: {
            UploadImg
        },
        data() {
            return {
                SecMenu: [],
                selectData: setSelectData(),
                uploadImgUrl: '',
                rules: {
                    name: [
                        {required: true, message: '请输入章节名称', trigger: 'blur'},
                    ],
                    chapter_type: [
                        {required: true, type:'number',message: '请输入	章节类型', trigger: 'blur'},
                    ],
                    image: [
                        {required: true, message: '请上传图片', trigger: 'blur'}
                    ]
                },
                uploadextraData:{
                    biz:'course',
                    extpath:'category'
                }
            }
        },
        props: ['data', 'type','category','chaptertype'],

        watch: {
            'type' () {
                this.initData()
            },
            'data' () {
                //判断是否存在传过来的数据 有则使用无则初始化
                if (this.data) {
                    this.selectData = Object.assign({}, this.data)
                }
            }
            // '$store.state.index.secMenu'(){
            //     this.selectData = Object.assign({},this.$store.state.index.secMenu)
            // }
        },
        activated () {
            this.selectData.category_id=this.category
            this.selectData.chapter_type=this.chaptertype
            xmview.setContentLoading(false)
            this.uploadImgUrl = commonService.commonUploadImage()
        },
        methods: {
            initData() {
                this.selectData  = setSelectData()
            },
            save() {
                // xmview.showDialog(this.selectData, () => {
                this.$refs.form.validate((valid) => {
                    if (!valid) {
                        return false
                    }    
                    this.$emit('handleSave', this.selectData)
                })
            },
            // 图片上传完毕
            handleImgUploaded (response) {
                this.selectData.image = response.data.url
                // alert( response.data.url)
            },
            // 重置表单
            resetForm () {
                this.$refs.form.resetFields()
            },
        }
    }

    function setSelectData(){
        return {

                    category_id:void 0,
                    price: void 0,
                    name: '',
                    image: null,
                    remark :'',
                    sort:void 0,
                }
    }
</script>