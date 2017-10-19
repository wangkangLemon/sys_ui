<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
@import "../../utils/mixins/common";
#course-form {
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
    <main id="course-form">
                <el-form label-width="120px" ref="form" :model="fetchParam">
                    <el-form-item label="角色" prop="name">
                        <el-input v-model="fetchParam.name"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="price">
                        <el-input v-model.number="fetchParam.price" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="price">
                        <el-input v-model.number="fetchParam.price" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="price">
                        <el-input v-model.number="fetchParam.price" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="price">
                        <el-input v-model.number="fetchParam.price" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="price"7>
                        <el-input v-model.number="fetchParam.price" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" @click="btnNextClick">下一步</el-button>
                    </el-form-item>
                </el-form>
    </main>
</template>

<script>
import courseService from '../../services/course/courseService'
import CourseCategorySelect from '../component/select/CourseCategory.vue'
import vTags from '../component/form/Tags.vue'
import CropperImg from '../component/upload/ImagEcropperInput.vue'
import DialogVideo from './component/DialogVideo.vue'
import UploadFile from '../component/upload/UploadFiles.vue'
import VideoPreview from '../component/dialog/VideoPreview.vue'
import DocPreview from '../component/dialog/DocShow.vue'
import config from '../../utils/config'
import clone from 'clone'
export default {
    name: 'course-form',
    components: {
        DocPreview,
        VideoPreview,
        CourseCategorySelect,
        vTags,
        CropperImg,
        DialogVideo,
        UploadFile
    },
    data() {
        return {
            videoUrl: '',
            docurl: '',
            docshow: false,
            editLessonData: [],
            currentData: {
                data: {},
                pindex: -1,
                index: -1
            },
            chapter: {
                editStatus: false,
                value: ''
            },
            isShowVideoDialog: false,
            activeTab: 'course',
            courseTags: [],
            fetchParam: getOriginData(),
            multi: {
                data: [
                    {
                        id: -1
                    }
                ],
            },
            resultData: [],
        }
    },
    // created() {
    //     if (this.$route.params.course_id != undefined) {
    //         courseService.getCourseInfo({
    //             course_id: this.$route.params.course_id
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
    //     }
    //     xmview.setContentLoading(false)
    // },
    methods: {
        btnNextClick() {
            this.$refs['form'].validate((valid) => {
                if (!valid) return
                this.fetchParam.tags = this.courseTags.toString()
                let req = courseService.create
                if (this.fetchParam.id) req = courseService.update
                // req(this.fetchParam).then((ret) => {
                //     // 重置当前数据
                //     this.currentData = {
                //         data: [],
                //         pindex: -1,
                //         index: -1
                //     }
                //     this.activeTab = 'classhour'
                //     if (!this.fetchParam.id) this.fetchParam.id = ret.id
                // })
            })
        },
        addNewClasshour(pindex = -1) {
            this.currentData = {
                data: [],
                pindex: -1,
                index: -1
            }
            // if (this.fetchParam.lesson_type === 'chapter') this.currentData.pindex = pindex
            // this.classhour.showDialog = true
            // this.classhour.form = clearFormData()
            // this.classhour.form.material_type = 'video'
            // this.$nextTick(() => {
            //     this.$refs['multiForm'].resetFields()
            // })
        },
        editClasshour(row, pindex = -1, index = -1) {
            this.currentData = { data: row, pindex, index }
            // this.classhour.showDialog = true
            this.classhour.form = clone(row)
        },
        delClasshour(row, pindex = -1, index = -1) {
            if (row.id !== 0) {
                if (this.fetchParam.lesson_type === 'multi') {
                    this.multi.data[pindex].deleted = true
                } else if (this.fetchParam.lesson_type === 'chapter') {
                    this.resultData[pindex].lessons[index].deleted = true
                }
            } else {
                if (this.fetchParam.lesson_type === 'multi') {
                    this.multi.data.splice(pindex, 1)
                } else if (this.fetchParam.lesson_type === 'chapter') {
                    this.resultData[pindex].lessons.splice(index, 1)
                }
            }
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
                lessons: [
                    {
                        id: -1
                    }
                ]
            })
            this.chapter.editStatus = false
        },
        saveItemChapter(pitem, pindex) {
            this.resultData[pindex].status = 0
            this.$forceUpdate()
        },
        saveResult() {
            let result = [
                {
                    id: 0,
                    name: '',
                    sort: 0,
                    deleted: false,
                    lessons: []
                }
            ]
            if (this.fetchParam.lesson_type === 'single') {
                this.classhour.form.name = this.classhour.form.material_name
                delete this.classhour.form.material_name
                result[0].lessons.push(this.classhour.form)
            } else if (this.fetchParam.lesson_type === 'multi') {
                this.multi.data.pop()
                this.multi.data.forEach((item) => {
                    delete item.material_name
                    item.try_enable ? item.try_enable = 1 : item.try_enable = 0
                })
                result[0].lessons.push(...this.multi.data)
            } else if (this.fetchParam.lesson_type === 'chapter') {
                result = []
                this.resultData.forEach((pitem) => {
                    delete pitem.status
                    pitem.lessons.pop()
                    pitem.lessons.forEach((item) => {
                        delete item.material_name
                        item.try_enable ? item.try_enable = 1 : item.try_enable = 0
                    })
                })
                result = this.resultData
            }
            courseService.setLessons({
                course_id: this.fetchParam.id,
                jsonstr: JSON.stringify(result)
            }).then(() => {
                xmview.showTip('success', '操作成功')
                this.$router.push({ name: 'course-index' })
            })
        },
    }
}
function getOriginData() {
    return {
        company_id: '',
        company_name: '',
        category_id: '',
        category_name: '请选择栏目',
        name: '',
        image: '',
        description: '',
        price: '',
        lesson_type: 'multi',
        tags: '',
        id: 0
    }
}
function clearFormData() {
    return {
        id: 0,
        name: '',
        material_type: '',
        material_id: '',
        material_name: '选择视频',
        try_enable: 0,
        sort: 0,
        deleted: false
    }
}
</script>
