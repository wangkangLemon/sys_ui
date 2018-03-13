<!--区块管理-->
<style lang='scss' rel="stylesheet/scss">
    @import "../../../utils/mixins/mixins";
    @import "../../../utils/mixins/table";
    @import "../../../utils/mixins/common";
    @import "../../../utils/mixins/topSearch";

    .block-manage {
        @extend %justify;

        .content-title {
            padding: 10px 20px;
            background: #f0f3f5;
            text-align: left;
            line-height: 35px;
            button {
                float: right;
                display: block;
            }
        }
        .left-content {
            display: inline-block;
            vertical-align: top;
            width: 25%;
            background: #fff;

            .classify-tree {
                padding: 20px;
            }
        }

        .right-content {
            width: 74%;
            display: inline-block;
            vertical-align: top;
            background: #fff;
            padding-bottom: 20px;

            .content-list {
                padding: 20px;
                .search{
                    margin-bottom:10px;
                    section{
                    display: inline;
                    width: 100%;
                    .el-select .el-input .el-input__icon{
                        transform: translateY(-50%) translateX(-50%)rotateZ(180deg);
                    }
                     #input{
                        width: 30%;
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
                }
                
                .tag {
                span {
                    padding: 10px;
                    border: 1px solid #e2e7eb;
                    background: #fff;
                    border-right: none;
                    &:last-of-type {
                        border-right: 1px solid #e2e7eb;
                    }
                    &:hover {
                        background: #e2e7eb;
                    }
                    &.active {
                        background: #e2e7eb;
                    }
                }
                
                
            }
            }

            .el-pagination {
                float: right;
                margin-top: 10px;
            }
        }
        // 同步时候的遮罩层
        .keep {
            position: absolute;
            width: 100%;
            left: 0;
            height: 360px;
            z-index: 99;
            background: rgba(255, 255, 255, 0.7);
            top: 140px;
        }
        .synchronize {
            background: cornflowerblue;
            color: #fff;
            padding: 10px;
            line-height: 35px;
            margin-bottom: 20px;
            .el-button {
                float: right;
            }
        }
        .addForm {
            text-align: left;
            text-align-last: left;
            .img-wrap {
                display: flex;
                .image {
                    width: 200px;
                    height: 100px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .button-wrap {
                    margin-left: 10px;
                }
            }
            // .tag {
            //     span {
            //         padding: 10px;
            //         border: 1px solid #e2e7eb;
            //         background: #fff;
            //         border-right: none;
            //         &:last-of-type {
            //             border-right: 1px solid #e2e7eb;
            //         }
            //         &:hover {
            //             background: #e2e7eb;
            //         }
            //         &.active {
            //             background: #e2e7eb;
            //         }
            //     }
            // }
        }
        .el-dialog__wrapper {
            padding-top: 15px;
            background: rgba(0, 0, 0, .5);
            z-index: 1000;
        }
        // .manage-container {
        //     @extend %right-top-btnContainer;
        //     >* {
        //         color: #fff;
        //         border-radius: 5px;
        //     } // 添加课程
        //     .add {
        //         background: rgb(0, 204, 255);
        //     } // 管理栏目
        //     .catmange {
        //         background: rgb(153, 102, 204);
        //     }
        // }

    }
</style>
<template>
    <article class="block-manage">
 
        <!--选取内容-->
        <!-- <ChooseContent v-model="select.isShow" v-on:result="contentConfirm"></ChooseContent> -->

        <!--添加/编辑内容课程-->
        <el-dialog v-model="addForm" :title="formTitle">
            <section v-if="form.ref_id">
                <div class="synchronize">
                    {{catArr[chooseCate]}}：{{chooseCate == 'course' ? form.content.course_name : form.content.title}}
                </div>
            </section>

            <!--1 这是区块选取的栏目 -->
            <el-form label-position="top" :rules="rules">
                <el-form-item  label="区块栏目">
                    <Section-category-menu :placeholder="form.name" :autoClear="true" v-model="form.category_id"></Section-category-menu>
                </el-form-item>
            </el-form>
            
            <!--2 这是课程类表选取的数据 -->

            <el-form label-position="top" class="addForm" :model="form" :rules="rules" ref="form">

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
                <el-button @click="addForm = false">取 消</el-button>
                <el-button type="primary" @click="submit('form')">确 定</el-button>
            </div>
        </el-dialog>
        
        <!--添加/编辑区块-->
        <!-- <el-dialog v-model="addForm" :title="formTitle" size="tiny">
            <el-form label-position="top" class="addForm" :model="form" :rules="rules" ref="form">
                <el-form-item prop="name" label="名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addForm = false">取 消</el-button>
                <el-button type="primary" @click="submit('form')">确 定</el-button>
            </div>
        </el-dialog> -->

        <section class="left-content">
            <div class="content-title">
                所有分类
                <router-link tag="el-button" :to="{name: 'exam-chapter-category'}">管理分类</router-link>
            </div>
            <div class="classify-tree">
                 <MenuTree :data="SecMenu" v-if="SecMenu.length" ref="chapterCategory" ></MenuTree>
            </div>
        </section>
        <section class="right-content">
            <div class="content-title">
                <span v-if="category.title">{{category.title}}-</span>考题列表
                 <el-button type="primary" icon="plus"  @click="$router.push({ name:'exam-course-add'})">添加考题</el-button>
            </div>
            <div class="content-list">
                <div class="search">
                    <section>
                     <i>标题</i><el-input id="input" v-model="section.course_name" placeholder="请输入标题" @keyup.enter.native="fetchCourseLists" auto-complete="off" ></el-input>
                    </section>  
                    <section>
                        <i>状态</i>
                        <el-select v-model="section.status" placeholder="未选择" @change="fetchCourseLists" :clearable="true">
                            <el-option label="全部" value="-1"></el-option>
                            <el-option label="正常" value="0"></el-option>
                            <el-option label="禁用 " value="1"></el-option>
                        </el-select>
                    </section>   
                </div>     
                
                <!-- <DateRange title="创建时间" :start="fetchParam.create_start" :end="fetchParam.create_end" @changeStart="val=> fetchParam.create_start=val "
                    @changeEnd="val=> fetchParam.create_end=val" :change="fetchData">
                </DateRange> -->
                <el-table v-loading="section.loading" border :data="section.data">
                    <el-table-column prop="course_name" label="名称" width="180"></el-table-column>
                    <el-table-column prop="chapter_name" label="绑定栏目" width="180">
                        <!-- <template scope="scope">
                            {{scope.row.category_name || '无'}}
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="sort" label="排序" width="70"></el-table-column>
                    <el-table-column prop="tags" label="标签" width="150"></el-table-column>
                    <!-- <el-table-column class="tag" label="标签" :label-width="formLabelWidth">
                        <span @click="toggleTag(item.value)" :class="{'active': item.value == form.tags}" v-for="(item, index) in tags">{{item.name}}</span>
                    </el-table-column> -->
                    <el-table-column width="80" label="状态">
                        <template scope="scope">
                            <el-tag v-if="scope.row.status == 0" type="success">正常</el-tag>
                            <el-tag v-else type="danger">禁用 </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="update" label="更新时间" width="200"></el-table-column>
                    
                    <el-table-column prop="operate" label="操作" width="145" fixed="right">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="update(scope.$index, scope.row)">
                                编辑
                            </el-button>
                            <el-button @click="offline(scope.$index, scope.row)" type="text" size="small">
                                <i>{{ scope.row.status == 1 ? '正常 ' : '禁用 ' }}</i>
                            </el-button>
                            <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                            @current-change="sectionPageChange"
                            :current-page="section.page"
                            :page-size="section.pagesize"
                            small
                            layout="prev, pager, next"
                            :total="section.total">
                    </el-pagination>
                </div>
            </div>
        </section>
        <!-- <ImagEcropperInput :compress="1" :isShowBtn="false" ref="imgcropper" :confirmFn="handleImgUploaded" :aspectRatio="ratio"></ImagEcropperInput> -->
    </article>
</template>
<script>
    // import examService from '../../../services/section/examService'
    // import cateService from '../../../services/section/cateService'
    import examService from '../../../services/exam/examService'
    import MenuTree from '../../component/tree/MenuTreeExam.vue'
    // import ChooseContent from '../../component/choose/ChooseContent'
    import SectionCategoryMenu from '../../component/select/SectionCategoryMenu.vue'
    import ImagEcropperInput from '../../component/upload/ImagEcropperInputSec.vue'
    import DateRange from '../../component/form/DateRangePicker.vue'
    // import courseService from '../../../services/course/courseService.js'
    // import CourseCategorySelect from '../../component/select/CourseCategory.vue'
    function clearFn() {
        return {
            // 表单属性值
                id: 0,
                course_name: '', // 标题
                url: '', // 链接地址
                ref_type: '', // 引用类型
                ref_id: '', // 引用ID
                ref_sync: 0, // 是否与引用同步
                image: '', // 图片
                description: '', // 描述
                addate: '', // 日期
                sort: '', // 排序
                tags: '',
                tags_color: '',
                category_id: 0, //栏目id
        }
    }
    export default {
        components: {
            MenuTree,SectionCategoryMenu,ImagEcropperInput
            // ,DateRange
            // CourseCategorySelect
        },
        data () {
            return {
                ratio: 0, // 裁剪的比例
                category: {
                    currentData: {},
                    loading: false,
                    title: '',
                    data: [],
                },
                // 表单相关属性
                formTitle: '添加内容', // 添加/编辑区块标题
                addForm: false, // 表单弹窗是否显示
                formLabelWidth: '50px', // 表单label的宽度
                catArr: {
                    'course': '课程',
                    'article': '资讯',
                    'link': '链接'
                },
                chooseCate: 'course',
                editPlacehoder: '',
                form: clearFn(),
                rules: {
                    name: [
                        {
                            required: true,
                            message: '名称不能为空',
                            trigger: 'blur'
                        }
                    ]
                },
                section: {
                    loading: false,
                    data: [],
                    course_name:'',
                    page: 1,
                    pagesize: 10,
                    total: 0,
                    status
                },
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                SecMenu:[],
                // 选取
                select: {
                    isShow: false
                },
                Mult:'true',// 判断左边 课程多级栏目树状标识,
                
            }
        },
        watch: {
            '$store.state.index.secMenu'(){
                this.category.currentData = Object.assign({},this.$store.state.index.secMenu) //复制一份vuex存储的值 
            },
            'category.currentData.id'(){
                this.fetchCourseLists () 
                // this.$refs.secCategory.handleNodeClick()
            }
        },
        activated () {
            this.category.loading = true
            this.fetchData()
            this.fetchCourseLists()
        },
        methods: {
            // 下线 或者上线课程 0为下线，1为上线
            offline(index, row) {
                let txt = row.status == 0 ? '禁用' : '启用'
                let finalStatus = row.status == 0 ? 1 : 0
                xmview.showDialog(`你将要${txt}课程 <span style="color:red">${row.course_name}</span> 确认吗?`, () => {
                    examService.offlineCourse({
                        id: row.id,
                        status: finalStatus
                    }).then((ret) => {
                        row.status = finalStatus
                    })
                })
            },
            // 保持同步
            keepSync() {
                this.form.ref_sync = 1
                this.form.course_name = this.form.content.course_name
                this.form.image = this.form.content.image
                this.form.description = this.form.content.description
                this.form.addate = this.form.content.addate
                this.form.sort = ''
            },
            // // 图片上传完毕
            // handleImgUploaded(data, ext) {
            //     courseService.commonUploadImageBaseSection({
            //         // section_id: this.section.currentID,
            //         alias: Date.now() + ext,
            //         image: data
            //     }).then((ret) => {
            //         this.form.image = ret.url
            //     })
            // },
            //弹窗内容
            contentConfirm(dataObj) {
                console.log(dataObj)
                this.form.content = dataObj
                // this.form.category_id = dataObj.category_id  
                // this.form.ref_id = dataObj.contentid
                this.form.ref_id = dataObj.contentid
                this.form.ref_sync = 1
                this.form.tags = ''
                // this.category = dataObj.category
                if (this.form.id) delete this.form.id
                this.keepSync()
                this.addForm = true
            },
            fetchData() {
                examService.fetchChapterCategory( this.fetchParam).then((ret) => {
                        // this.$store.state.index.secMenu.commit('INDEX_SET__SETSECMENU', ret.data) 
                        this.SecMenu=ret
                        xmview.setContentLoading(false)     
                    })
            },
            add() {
                this.form = clearFn()
                this.formTitle = '添加'
                this.addForm = true
            },
            // 获取左侧分类
            // getCategoryTree (id) {
            //     return cateService.fetchData({id}).then((ret) => {
            //         ret.map((item) => {
            //             item.children = item.has_children ? [{label: '加载中...'}] : null
            //         })
            //         return ret
            //     })
            // },
            leftClassifyClick (item) { // 左侧列表按照分类搜索
                this.category.title = item.name
                // 获取区块数据
                this.category.currentData = item
                this.fetchCourseLists()
            },
            // leftClassifyExpend (item) {
            //     if (item.has_children) {
            //         this.category.loading = true
            //         this.getCategoryTree(item.id).then((ret) => {
            //             item.children = ret
            //         }).then(() => {
            //             this.category.loading = false
            //         })
            //     }
            // },
            fetchCourseLists () {
                this.section.loading = true
                return examService.fetchCourseLists({
                    course_name:this.section.course_name,
                    status:this.section.status,
                    page: this.section.page,
                    pagesize: this.section.pagesize,
                    chapter_id: this.category.currentData.id
                }).then((ret) => {
                    this.section.data = ret.data
                    this.section.total = ret._exts.total
                    this.section.loading = false
                })
            },
            handleDelete (index, row) {
                xmview.showDialog(`确认要删除课程【<i style="color:red">${row.name}</i>】吗？`, () => {
                    examService.delete(row.id).then(() => {
                        xmview.showTip('success', '删除成功')
                        this.fetchCourseLists()
                    }).catch((ret) => {
                        xmview.showTip('error', ret.message)
                    })
                })
            },
            submit (form) { // 表单提交
                this.form.category_id = this.category.currentData.id
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        let reqFn = examService.create
                        let msg = '添加成功'
                        if (this.form.id) {
                            reqFn = examService.updateGov
                            msg = '修改成功'
                        }
                        reqFn(this.form).then(() => {
                            xmview.showTip('success', msg)
                            this.addForm = false
                            this.fetchCourseLists()
                        }).catch((ret) => {
                            xmview.showTip('error', ret.message)
                        })
                    } else {
                        return false
                    }
                })
            },
            update (index, row) {
                this.$router.push({
                    name:'exam-course-edit',
                    params:{
                        id:row.id,
                        courseInfo:row,
                    }
                })
                // this.addForm = true
                // this.formTitle = '编辑区块：' + row.name
                // // 调用接口 获取数据并赋值给this.form
                // this.editPlacehoder = row.course_category_name ? row.course_category_name : '请选择'
                // this.form = row

            },
            sectionPageChange (val) {
                this.section.page = val
                this.fetchCourseLists()
            }
        }
    }
</script>
