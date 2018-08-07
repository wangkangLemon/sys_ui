<!--添加课程-->
<!--公开课管理-->
<style lang='scss' rel='stylesheet/scss'>
@import "../../../../utils/mixins/common";

#course-manage-addcourse-container {
    @extend %content-container;

    h2 {
        margin-bottom: 10px;
    }
    .tab {
        max-width: 700px;
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
    } 
        .bottom-btns {
            .submit {
                float: right;
            }
        }
}
</style>

<template>
    <article id="course-manage-addcourse-container">
        <el-tabs v-model="activeTab" class="tab">
            <el-tab-pane label="课程信息" name="first">
                <el-form label-width="120px" ref="formFirst" :rules="rulesFirst" :model="fetchParam">
                    <el-form-item label="课程名称" prop="course_name">
                        <el-input v-model="fetchParam.course_name"></el-input>
                    </el-form-item>
                    <el-form-item label="课程封面图" prop="image">
                        <img :src="fetchParam.image | fillImgPath" width="200" height="112" v-show="fetchParam.image">
                        <CropperImg ref="imgcropper" :confirmFn="cropperImgSucc" :aspectRatio="16/9"></CropperImg>
                    </el-form-item>
                    <!-- <el-form-item label="课程类型" prop="material_type">
                        <el-select v-model="fetchParam.material_type" @change="typeChange" placeholder="请选择" >
                            <el-option label="视频" value="video"></el-option>
                            <el-option label="WORD" value="doc"></el-option>
                            <el-option label="PPT" value="ppt"></el-option>
                            <el-option label="PDF" value="pdf"></el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="课程文件" prop="material_id">
                        <UploadFile :onSuccess="handleUploadDoc" :url="uploadDocUrl" :accept="accept" :disabled="fetchParam.material_type == null" 
                                    v-show="fetchParam.material_type !== 'video'"></UploadFile>
                        <el-button v-show="fetchParam.material_type === 'video'" @click="getVideoName">
                            <i>{{fetchParam.material_name}}</i>
                        </el-button>
                        <el-button v-show="fetchParam.material_type === 'video'" @click="preview(fetchParam.material_id)" type="text" size="big"
                               > 查看
                        </el-button>
                    </el-form-item>
                    <el-form-item  label="关联药品" prop="drug_id">
                        <Product v-model="fetchParam.drug_id" :placeholder="fetchParam.drug_name" ref="Product"
                                 v-on:change="val=>fetchParam.drug_id=val" 
                                :change="reqFun2" :list="changelistc">
                        </Product>
                    </el-form-item>
                    <el-form-item label="课程介绍" prop="description">
                        <el-input v-model="fetchParam.description" type="textarea" :autosize="{ minRows: 4, maxRows: 6}" placeholder="请输入内容">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="课程标签">
                        <vTags v-model="courseTags"></vTags>
                    </el-form-item>
                    <el-form-item label="" v-if="!readonly">
                        <el-button style="float: right" type="primary" @click="btnNextClick">
                            保存
                        </el-button>
                        <!-- <el-button class="submit" type="primary" @click="handleSubmitTesting">发布</el-button> -->
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!-- <el-tab-pane :disabled="!fetchParam.contentid" label="考试题目设置" name="second" class="testing-set">
                <el-form>
                    <el-form label-width="120px" v-for="(item,index) in fetchTesting" :key="index">
                        <el-form-item label="" v-if="!readonly">
                            <el-button icon="plus" @click='addTesting(0, index)'>判断题</el-button>
                            <el-button icon="plus" @click='addTesting(1, index)'>单选题</el-button>
                            <el-button icon="plus" @click='addTesting(2, index)'>多选题</el-button>
                            <el-button icon="delete" type="danger" @click='deleteTesting(index, item)'>删除</el-button>
                        </el-form-item>
                        <el-form-item :label="'第' + (index+1) + '题'">
                            <span v-if="item.category == 0">判断题</span>
                            <span v-else-if="item.category == 1">单选题</span>
                            <span v-else>多选题</span>
                        </el-form-item>
                        <el-form-item label="题目">
                            <el-input v-model="item.description" :disabled="!item.editable" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="配图">
                            <UploadImg :defaultImg="item.image" :url="uploadImgUrl" :disabled="!item.editable" :onSuccess="res => item.image = res.data.url" :data='uploadextraData'></UploadImg>
                        </el-form-item>
                        <el-form-item label="选项" v-if="item.category == 0">
                            <el-radio class="radio" :disabled="!item.editable" v-model="item.correct" :label="1">
                                <i>正确</i>
                            </el-radio>
                            <el-radio class="radio" :disabled="!item.editable" v-model="item.correct" :label="0">
                                <i>错误</i>
                            </el-radio>
                        </el-form-item>

                        <el-form-item label="选项" v-else>
                            <h5>请在正确答案前面打勾</h5>
                            <div class="multy-choose-item" v-for="(option,indexOption) in item.options" :key="indexOption">
                                <el-checkbox v-model="option.correct" :true-label="1" :disabled="!item.editable" v-if="item.category == 2"></el-checkbox>
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
                </el-form>

                <el-form label-width="120px" v-if="!readonly">
                    <el-form-item label="">
                        <el-button icon="plus" @click='addTesting(0, fetchTesting.length)'>判断题</el-button>
                        <el-button icon="plus" @click='addTesting(1, fetchTesting.length)'>单选题</el-button>
                        <el-button icon="plus" @click='addTesting(2, fetchTesting.length)'>多选题</el-button>
                    </el-form-item>
                </el-form>

                <div class="bottom-btns" v-if="!readonly">
                    <el-button @click="btnPreClick">上一步</el-button>
                    <el-button class="submit" type="primary" @click="handleSubmitTesting">发布</el-button>
                </div>
            </el-tab-pane> -->
        </el-tabs>

        <DialogVideo :onSelect="handleVideoSelected" v-model="isShowVideoDialog"></DialogVideo>

        <VideoPreview :url="videoUrl" :onchange="fetchVideoData" ref="videoPreview"></VideoPreview>
    </article>
</template>

<script>
import courseService from '../../../../services/course/courseService.js'
import videoService from '../../../../services/course/videoService.js'
import industryService from '../../../../services/course/industryService.js'
import CropperImg from '../../../component/upload/ImagEcropperInput.vue'
import DialogVideo from '../../component/DialogVideo.vue'
import UploadFile from '../../../component/upload/UploadFiles.vue'
// import CourseCategorySelect from '../../component/select/CourseCategory.vue'
import CourseAlbumSelect from '../../../component/select/CourseAlbum'
import testingFactory from '../../utils/testingFactory'
import formUtils from '../../../../utils/formUtils'
import {transformParam} from '../../../../utils/common'
import vTags from '../../../component/form/Tags.vue'
import VideoPreview from '../../../component/dialog/VideoPreview.vue'
import Product from '../../../component/select/CommonSelect.vue'

export default {
    name: 'course-manage-addcourse',
    data() {
        return {
            activeTab: 'first',
            uploadDocUrl: '', // 上传文档的url
            isShowVideoDialog: false, // 是否显示视频列表弹出框
            fetchParam: getOrignData(),
            courseTags: [],
            rulesFirst: { // 课程信息的校验规则
                course_name:[
                    {required: true, message: '请输入课程名称', trigger: 'blur'},
                    {
                        pattern:  /\S$/,
                        message: '请输入非空格或非特殊字符的栏目名称'
                    }],
                image: { required: true, message: '请上传课程封面', trigger: 'change' },
                description: { required: true, message: '请输入课程介绍', trigger: 'change' },
                drug_id: { required: true, type: 'number', message: '请选择', trigger: 'change' },
                material_id: { required: true, type: 'number', message: '请上传课程文件', trigger: 'change' },
                material_type: { required: true,  message: '请选择题材类型', trigger: 'change' },
            },
            accept: '*.doc,*.docx', // 上传的文件格式
            // 考试设置部分
            readonly: false, // 只读模式
            videoUrl: '', // 预览的视频url
            uploadextraData:{
                biz:'course',
                extpath:'subject'
            },
            changelistc:[],
        }
    },

    created() {
        this.uploadDocUrl = courseService.getCourseDocUploadUrl()
        this.uploadImgUrl = courseService.commonUploadImage()
console.log(this.$route.query.contentid);

        //编辑页面
        if (this.$route.query.contentid) {//编辑页面

            industryService.getCourse( this.$route.query.contentid ).then((ret) => {
                this.fetchParam = ret             // 没拿到信息 获取信息
                this.fetchParam.drug_name= ret.industry_drug.name
                this.fetchParam.material_name= ret.course_name
                this.courseTags = this.fetchParam.tags ? this.fetchParam.tags.split(',') : []
                 xmview.setContentTile(`编辑课程`)
            }).catch((ret) => {
                xmview.showTip('error', ret.message)
            })
        }else if(this.$route.params.addcourseInfo){ //添加页面
            this.fetchParam.category_name=this.$route.params.addcourseInfo.category_name
            xmview.setContentTile(`添加课程`)
        }
        this.$route.params.tab && (this.activeTab = this.$route.params.tab)
        this.readonly = this.$route.params.readonly
        xmview.setContentLoading(false)
    },

    watch: {
    },
    methods: {
        //商品搜索
            reqFun2(val, length){
                let param={
                    page: parseInt(length / 15) + 1||1,
                    pagesize: 15,
                    name:val,
                }
                let _this=this
                return industryService.fetchDrugList(param)
                .then((ret)=>{
                    console.log('param=',typeof(param.page));
                    console.log(ret.data);
                    // if(param.page==1){
                    //     ret.data=[{id:0,name:'免费直播'}].concat(ret.data)
                    //     console.log(ret.data);
                    //     _this.$emit('changelistc', ret.data)
                    // }else{
                        _this.$emit('changelistc', ret.data)
                    // }
                    return ret
                })
            },
        fetchVideoData () {
                this.loadingData = true
                return videoService.getVideo(this.fetchParam).then((ret) => {
                    this.data = ret.data
                    this.total = ret._exts.total
                    this.loadingData = false
                })
            },
         // 预览视频
            preview (index) {
                // 拿到播放地址
                videoService.getVideoPreviewUrl(index).then((ret) => {
                    this.videoUrl = ret.video
                    // this.row = row
                    this.$refs.videoPreview.show(this.fetchParam.material_name) //返回视频的数据后显示弹窗
                })
            },

        // 拿到视频名称
        getVideoName(){
            this.isShowVideoDialog=true
        },
        // 下一步按钮点击保存课程内容
        btnNextClick() {
            this.fetchParam.tags = this.courseTags ? this.courseTags.join(',') : ''
            this.$refs.formFirst.validate((isValidate) => {
                if (!isValidate) return
                transformParam(this.fetchParam)
                // for(let i in this.fetchParam){
                //     this.fetchParam[i] = this.fetchParam[i]== undefined ?'': this.fetchParam[i]
                    
                // }
                let p
                // 如果是编辑
                console.log(this.fetchParam);
                
                if (this.fetchParam.id) {
                    p = industryService.editCourse(this.fetchParam,this.fetchParam.id).then((ret) => {
                    })
                } else {
                    p = industryService.addCourse(this.fetchParam).then((ret) => {
                        this.fetchParam.contentid = ret.contentid
                    })
                }
                this.$router.back()
            })
        },
        // 处理上传文档
        handleUploadMedia(response) {
            this.fetchParam.material_id = response.data.contentid
        },
        // 图片裁切成功回调
        cropperImgSucc(imgData) {
            courseService.commonUploadImageBase({ image: imgData ,extpath:''}).then((ret) => {
                this.fetchParam.image = ret.url
            })
        },
        // 处理视频选取
        handleVideoSelected(row) {
            this.fetchParam.material_name = row.title
            this.fetchParam.material_id = row.material_id
        },
        // 文档上传完毕
        handleUploadDoc(rep) { 
            this.fetchParam.material_id = rep.data.contentid
        },
        // 课程类型改变
        typeChange(val) {
            if (val === 'doc') {
                this.accept = '.doc,.docx'
            } else if (val === 'ppt') {
                this.accept = '.ppt,pptx'
            } else if (val === 'pdf') {
                this.accept = '.pdf'
            }
        }
    },
    components: { CropperImg, UploadFile, CourseAlbumSelect, DialogVideo, vTags ,VideoPreview,Product}
}

function getOrignData() {
    let orignData = { // 课程信息部分
        contentid: void 0,  //切换tab
        course_name: void 0,
        image: void 0,
        tags: void 0,
        material_type: 'video', //教材类型	video,doc,ppt,pdf
        material_id: void 0,
        material_name: '选择视频',
        drug_id: void 0,
        description: void 0,
    }

    return orignData
}
</script>
