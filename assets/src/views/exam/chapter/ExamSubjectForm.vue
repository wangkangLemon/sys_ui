<!--添加课程-->
<!--公开课管理-->
<style lang='scss' rel='stylesheet/scss'>
@import "../../../utils/mixins/common";

#course-manage-addcourse-container {
    @extend %content-container;

    h2 {
        margin-bottom: 10px;
    }
    .el-tab-pane {
        max-width: 700px;
    }
    .el-upload-list__item {
        position: relative;
        .el-icon-close {
            position: absolute;
            right: 5px;
            top: 5px;
        }
    } // 考试题目设置
    .testing-set {
            max-width: 700px;

        .el-form {
            
            padding-top: 17px;
            // width: 80%;
            &:first-of-type {
                padding-top: 0;
            }

            hr {
                position: absolute;
                width: 100%;
                border-top: none;
                border-color: #bbb;
            }
            h5 {
                font-size: 14px;
                color: #666;
            }
            .el-input {
                display: inline-block;
                width: 60%;
                vertical-align: middle;
            }

            .multy-choose-item {
                margin: 5px 0;
                &:last-of-type {
                    margin-bottom: 0;
                }
            }
    
        }
        .cate{
            .el-cascader{
                width: 240px;
            }
            i{
                font-size: 14px;
            }
            width: 100%;
            transform: translateY(15%) translateX(6%);
            .el-input {
                display: inline-block;
                width: 100%;
                vertical-align: middle;
            }
        }

        .bottom-btns {
            .submit {
                float: right;
            }
        }
    }
}
</style>

<template>
    <article id="course-manage-addcourse-container">
        <!-- <el-tabs v-model="activeTab" class="tab"> -->
            <!-- <el-tab-pane  label="考试题目设置" name="second" class="testing-set"> -->
                <el-form  class="testing-set"  >
                    <el-form class="cate" label-width="120px" :model="form"  :rules="rules" ref="cate">
                        <el-form-item  label="所属栏目" prop="chapter_id">
                            <Section-category-menu :placeholder="form.chapter_name" :autoClear="true" v-model="form.chapter_id" :reqFun="reqFun"></Section-category-menu>
                        </el-form-item>
                    </el-form>
                    <el-form label-width="120px" v-for="(item,index) in fetchTesting" :key="index" :rules="testRules" ref="test">
                        <el-form-item label="" v-if="!readonly">
                            <el-button icon="plus" @click='addTesting(0, index)'>判断题</el-button>
                            <el-button icon="plus" @click='addTesting(1, index)'>单选题</el-button>
                            <el-button icon="plus" @click='addTesting(2, index)'>多选题</el-button>
                            <el-button icon="delete" type="danger" @click='deleteTesting(index, item)'>删除</el-button>
                        </el-form-item>
                        <el-form-item :label="'第' + (index+1) + '题'">
                            <span v-if="item.type == 0">判断题</span>
                            <span v-else-if="item.type == 1">单选题</span>
                            <span v-else>多选题</span>
                        </el-form-item>
                        <el-form-item label="题型" props="qtype">
                            <el-select v-model="item.qtype" placeholder="请选择">
                                <el-option label="A1" value="A1"></el-option>
                                <el-option label="A2" value="A2"></el-option>
                                <el-option label="A3" value="A3"></el-option>
                                <el-option label="A4" value="A4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-show="item.qtype=='A3'||item.qtype=='A4'" label="题干">
                            <el-input v-model="item.title" :disabled="!item.editable" type="textarea" :autosize="{ minRows: 1, maxRows: 2}" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="题目">
                            <el-input v-model="item.description" :disabled="!item.editable" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="配图">
                            <UploadImg :defaultImg="item.image" :url="uploadImgUrl" :disabled="!item.editable" :onSuccess="res => item.image = res.data.url"></UploadImg>
                        </el-form-item>

                        <!--判断题的正确错误选项-->
                        <el-form-item label="选项" v-if="item.type == 0">
                            <el-radio class="radio" :disabled="!item.editable" v-model="item.correct" :label="1">
                                <i>正确</i>
                            </el-radio>
                            <el-radio class="radio" :disabled="!item.editable" v-model="item.correct" :label="0">
                                <i>错误</i>
                            </el-radio>
                        </el-form-item>

                        <!--单选|多选的答案部分-->
                        <el-form-item label="选项" v-else>
                            <h5>请在正确答案前面打勾</h5>
                            <div class="multy-choose-item" v-for="(option,indexOption) in item.options" :key="indexOption">
                                <el-checkbox v-model="option.correct" :true-label="1" :disabled="!item.editable" v-if="item.type == 2"></el-checkbox>
                                <el-radio class="radio" v-model="item.correct" :label="indexOption" :disabled="!item.editable" v-else>
                                    <i></i>
                                </el-radio>
                                <el-input placeholder="填写描述" v-model="option.description" :disabled="!item.editable"></el-input>
                                <el-button :disabled="!item.editable" type="text" @click="item.options.splice(indexOption, 1)">
                                    <i>删除</i>
                                </el-button>
                            </div>
                            <div class="multy-choose-item">
                                <el-button v-if="item.editable" type="text" @click="addMoreTestingOption(item.options)">添加更多选项</el-button>
                            </div>
                        </el-form-item>

                        <el-form-item label="答案详解">
                            <el-input v-model="item.explain" :disabled="!item.editable" type="textarea" :autosize="{ minRows: 4, maxRows: 6}" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>

                        <hr>
                    </el-form>
                

                <el-form label-width="120px" v-if="!readonly" >
                    <el-form-item label="">
                        <el-button icon="plus" @click='addTesting(0, fetchTesting.length)'>判断题</el-button>
                        <el-button icon="plus" @click='addTesting(1, fetchTesting.length)'>单选题</el-button>
                        <el-button icon="plus" @click='addTesting(2, fetchTesting.length)'>多选题</el-button>
                    </el-form-item>
                </el-form>

                <div class="bottom-btns" v-if="!readonly">
                    <el-button class="submit" type="primary" @click="handleSubmitTesting">发布</el-button>
                </div>

                </el-form>
            <!-- </el-tab-pane> -->
        <!-- </el-tabs> -->
    </article>
</template>

<script>
import courseService from '../../../services/course/courseService.js'
import examService from '../../../services/exam/examService'
import testingFactory from '../../course/utils/testingFactory'
import formUtils from '../../../utils/formUtils'
import {transformParam} from '../../../utils/common'
import UploadImg from '../../component/upload/UploadImg.vue'
import SectionCategoryMenu from '../../component/select/SectionCategoryMenu.vue'

export default {
    name: 'exam-subject-form',
    data() {
        return {
            isShowVideoDialog: false, // 是否显示视频列表弹出框
            courseTags: [],
            rules: {
                    chapter_id: { required: true, type: 'number', message: '请选择试题栏目', trigger: 'change' },
                },
            testRules: {
                    qtype: { required: true, type: 'number', message: '请选择试题题型', trigger: 'change' },
                },
            accept: '*.doc,*.docx', // 上传的文件格式
            // 考试设置部分
            fetchTesting: [],
            readonly: false, // 只读模式
            videoUrl: '', // 预览的视频url
            changelist:{},
            form:{
                chapter_id:'',
                chapter_name:'',
                category_id:'',
                category_name:'',
            },
        }
    },
    created(){
        this.form={
                chapter_id:'',
                chapter_name:''
            },
        this.fetchTesting=[]
        this.uploadImgUrl = courseService.commonUploadImage()
        //编辑页面
        // if (this.$route.params.courseInfo) {
        //     // this.fetchParam = this.$route.params.courseInfo   //从主页传递信息
        //     for(let i in this.$route.params.courseInfo){
        //          this.fetchTesting[i]=this.$route.params.courseInfo[i]
        //     }
        //     console.log(this.fetchTesting)
        //     xmview.setContentTile('编辑课程-培训')
        // } else 
        if (this.$route.params.id) {
            examService.getExamSubject(this.$route.params.id).then((ret) => {
                console.log(ret)
                xmview.setContentTile('试题查看')
                this.form.chapter_name=ret.chapter_name
                var arr = []
                arr.push(ret)
                this.fetchTesting = arr
            }).catch((ret) => {
                xmview.showTip('error', ret.message)
            })
        }
        this.readonly = this.$route.params.readonly
        xmview.setContentLoading(false)
    },
    methods: {
        reqFun(param){
            return examService.fetchChapterCategory({
                pid: 0,
                pagesize:-1,
                chapter_type:2,
                category_id:this.$store.state.index.examCate
            })
        },
        addTesting(type, index) {
            this.fetchTesting.splice(index, 0, testingFactory.getExamSet(type))
        },
        // 删除考试
        deleteTesting(index, item) {
            console.log(index, item)
            xmview.showDialog(`是否确定删除题目【 <i style="color:red">${item.description || ''}</i> 】?`, () => {
                // courseService.delCourse({course_id:item.course_id,id:item.id}).then((ret) => {
                        this.fetchTesting.splice(index, 1)
                    // })
            })
        },
        // 添加多选 单选的选项
        addMoreTestingOption(options) {
            options.push({
                description: '',
                correct: ''
            })
        },
        // 考试题目信息提交
        handleSubmitTesting() {
            // 处理当前的数据
            let item = null

            if (!this.fetchTesting || this.fetchTesting.length < 1) {
                this.$router.back()
                return
            }
            this.$refs.cate.validate((valid) => {
                if (!valid) {
                        return false
                    }
                     console.log(this.fetchTesting)
                // this.fetchTesting.forEach(v => {
                //     console.log(v.qtype)
                //     if(!v.qtype){
                //     xmview.showTip('error', `请先选择【 题型 】,在进行发布操作！`)
                //     return false
                // }
                // });     
                console.log(requestParam)
                let requestParam = JSON.parse(JSON.stringify(this.fetchTesting))
                for (let i = 0; i < requestParam.length, item = requestParam[i]; i++) {
                    // 处理单选题的正确答案选中
                    if (item.type == 1 && typeof item.correct == 'number') {
                        if(item.options){
                            item.options.map((itemOptions) => {
                                delete itemOptions.correct
                            })
                            item.options[item.correct].correct = 1
                            delete item.correct
                        }
                    }
                    // 修复sort属性
                    item.sort = i + 1
                    if (item.options) {
                        item.options.map((itemOptions, index) => {
                            itemOptions.sort = index + 1
                        })
                    }
                }
                xmview.setContentLoading(true)
                console.log(encodeURI(formUtils.serializeArray(requestParam)).replace(/\+/g, '%2B'))
                examService.addSubject({ 
                    category_id:this.$store.state.index.examCate,
                    chapter_id:this.form.chapter_id,
                    subjects:encodeURI(formUtils.serializeArray(requestParam)).replace(/\+/g, '%2B')
                }).then((ret) => {
                    xmview.showTip('success', '操作成功')
                    this.$router.back()
                }, () => {
                }).then(() => {
                    xmview.setContentLoading(false)
                })
            })
        },
    },
    components: { UploadImg,SectionCategoryMenu}
}

</script>
