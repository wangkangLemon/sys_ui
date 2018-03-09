<!--编辑/添加课程-->
<style lang="scss" rel="stylesheet/scss">
    .gov-operate-container {
        background: #fff;
        padding: 20px 300px 20px 100px;
        overflow: auto;
        .addForm {
            .tip {
                text-align: center;
                border-top: 1px solid #ddd;
                color: #ff0000;
                line-height: 50px;
            }
        }
        .dialog-footer {
            text-align: center;
        }
    }
</style>
<template>
    <article class="gov-operate-container">
        <section>
            <el-form class="addForm" :model="form" :rules="rules" ref="form" :label-width="formLabelWidth">
                <el-form-item  label="区块栏目">
                    <Section-category-menu :placeholder="form.name" :autoClear="true" v-model="form.category_id"></Section-category-menu>
                </el-form-item>
                <el-form-item prop="course_name" label="标题" :label-width="formLabelWidth">
                    <el-input v-model="form.course_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item v-if="!form.ref_id" prop="url" label="链接" :label-width="formLabelWidth">
                    <el-input v-model="form.url" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="image" label="图片" :label-width="formLabelWidth">
                    <!--图片上传-->
                    <div class="img-wrap">
                        <div v-if="form.image" class="image">
                            <img :src="form.image | fillImgPath" alt="" />
                        </div>
                        <div class="button-wrap">
                            <el-button type="primary" @click="() => {$refs.imgcropper.chooseImg()}">上传</el-button>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item prop="description" label="描述" :label-width="formLabelWidth">
                    <el-input type="textarea" :rows="3" v-model="form.description" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="addate" label="日期" :label-width="formLabelWidth">
                    <el-date-picker v-model="form.addate" type="date" />
                </el-form-item>
                <el-form-item prop="sort" label="排序" :label-width="formLabelWidth">
                    <el-input v-model="form.sort" auto-complete="off" placeholder="排序越大越靠前，留空则自动设为最靠前的排序"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submit('form')">提交</el-button>
            </div>
        </section>
    </article>
</template>
<script>
    import examService from '../../../services/exam/examService'
    import Region from '../../component/select/Region.vue'
    import SectionCategoryMenu from '../../component/select/SectionCategoryMenu.vue'
    function clearFormFn() {
            return  {
                    gov_id: void 0,
                    category: '', // 类型
                    pid:'', //上级部门                    
                    province_id : '', // 省
                    city_id: '',  // 市
                    area_id: '',  // 区
                    town_id: '',  //乡镇                       -----
                    village_id: '', // 街道                    -----
                    name: '', // 名称
                    concact: '', // 联系人
                    mobile: '', // 联系人手机
                    email: '', // 联系人邮箱
                    mobile_title: '', // 手机端客户端名称        ----
                    tel: '', // 电话
                    zip: '', // 邮编
                    fax: '', // 传真
                    url: '', // 企业网址
                    address: '', // 地址
                    description: '', // 企业介绍
                }
    }
    let _this
    export default {
        components: {
            Region,SectionCategoryMenu,
        },
        data () {
            let validateEmail = (rule, value, callback) => {
                if (!(value || '').match(/^\w+([-+.]\w+)*@\w+([-+.]\w+)*.\w+([-+.]\w+)*$/)) {
                    callback(new Error('请输入一个有效的电子邮箱地址'))
                }
                callback()
            }
            let validateMobile = (rule, value, callback) => {
                if (!(value || '').match(/^1[34578]\d{9}$/)) {
                    callback(new Error('请输入正确的手机号'))
                }
                callback()
            }
            return {
                govTypes: [ // 部门类型
                    {
                        name: '政府',
                        id: 2
                    },
                    // {
                    //     name: '系统',
                    //     id: 1
                    // }
                ],
                formLabelWidth: '120px',
                form: clearFormFn(),
                rules: {
                    name: [
                        {required: true, message: '必填项', trigger: 'blur'}
                    ],
                    concact: [
                        {message: '必填项', trigger: 'blur'}
                    ],
                    mobile: [
                        {message: '必填项', trigger: 'blur'},
                        // {validator: validateMobile, trigger: 'blur'}
                    ],
                    email: [
                        {message: '必填项', trigger: 'blur'},
                        // {validator: validateEmail, trigger: 'blur'}
                    ]
                },
            }
        },
        computed: {
            govID () {  //传过来的govid
                return this.$route.params.id
            }
        },
        activated () {
            _this = this
            xmview.setContentLoading(false)
            if (this.govID == undefined) {
                this.form = clearFormFn()
                return false
            }
            examService.getGovInfo(this.govID).then((ret) => {
                this.form = ret
                this.govID = this.govID
            })
        },
        methods: {
            submit (form) { // 表单提交
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.form = Object.assign(this.form, this.sign)
                        let reqFn, msg 
                        if (this.govID) {
                            this.form.gov_id = this.govID
                            reqFn = examService.updateGov
                            msg = '修改成功'
                        }else{
                            reqFn = examService.addGov
                            msg= '添加成功'
                        }
                        console.log(this.$route.params.govinfo)
                        if(this.$route.params.govinfo!=undefined){
                            this.form.pid = this.$route.params.govinfo.pid
                        }else{
                            this.form.pid = this.form.village_id||this.form.town_id|| this.form.area_id||this.form.city_id ||this.form.province_id
                        }
                        console.log(this.form)
                        reqFn(this.form).then(() => {
                            xmview.showTip('success', msg)
                        }).then(() => {
                            this.$router.push({name: 'gov-index'})
                        }).catch((ret) => {
                            xmview.showTip('error', ret.message)
                        })
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>
