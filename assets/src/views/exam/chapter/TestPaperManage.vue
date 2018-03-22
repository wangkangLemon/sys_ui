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
                    width:100%;
                    margin-bottom:10px;
                    section{
                        margin-left: 10px;
                        margin-bottom: 14px;
                        display: inline-block;
                        margin-right: 10px;
                        .el-select .el-input .el-input__icon{
                            transform: translateY(-50%) translateX(-50%)rotateZ(180deg);
                        }
                        #input{
                            width: 84%;
                            display: inline-block;
                            margin-left: 10px;
                        }
                    }
                    .fi{
                        width:30%;
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
    }
</style>
<template>
    <article class="block-manage">
        <section class="left-content">
            <div class="content-title">
                所有分类
                <router-link tag="el-button" :to="{name: 'exam-chapter-category'}">管理分类</router-link>
            </div>
            <div class="classify-tree">
                 <MenuTree :data="SecMenu" v-if="SecMenu.length" ref="chapterCategory"></MenuTree>
            </div>
        </section>
        <section class="right-content">
            <div class="content-title">
                <span v-if="category.title">{{category.title}}-</span>考题列表
                 <el-button type="primary" icon="plus"  @click="$router.push({ name:'exam-subject-add'})">添加考题</el-button>
            </div>
            <div class="content-list">
                <div class="search">
                    <section class="fi">
                     <i>题目</i><el-input id="input" v-model="section.description" placeholder="请输入标题" @keyup.enter.native="fetchCourseLists" auto-complete="off" ></el-input>
                    </section>  
                    <!-- <section>
                        <i>状态</i>
                        <el-select v-model="section.status" placeholder="未选择" @change="fetchCourseLists" :clearable="true">
                            <el-option label="全部" value="-1"></el-option>
                            <el-option label="正常" value="0"></el-option>
                            <el-option label="禁用 " value="1"></el-option>
                        </el-select>
                    </section>    -->
                    <DateRange title="创建时间" :start="section.stime " :end="section.etime" @changeStart="val=> section.stime =val "
                        @changeEnd="val=> section.etime=val" :change="fetchCourseLists">
                    </DateRange>
                </div>     
                <el-table v-loading="section.loading" border :data="section.data">
                    <el-table-column prop="description" label="考题" ></el-table-column>
                    <el-table-column prop="chapter_name" label="绑定栏目" width="180">
                        <!-- <template scope="scope">
                            {{scope.row.category_name || '无'}}
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="sort" label="排序" width="70"></el-table-column>
                    <!-- <el-table-column prop="tags" label="标签" width="150"></el-table-column> -->
                    <!-- <el-table-column class="tag" label="标签" :label-width="formLabelWidth">
                        <span @click="toggleTag(item.value)" :class="{'active': item.value == form.tags}" v-for="(item, index) in tags">{{item.name}}</span>
                    </el-table-column> -->
                    <!-- <el-table-column width="80" label="状态">
                        <template scope="scope">
                            <el-tag v-if="scope.row.status == 0" type="success">正常</el-tag>
                            <el-tag v-else type="danger">禁用 </el-tag>
                        </template>
                    </el-table-column> -->
                    <el-table-column prop="addate" label="创建时间" width="200"></el-table-column>
                    <el-table-column prop="operate" label="操作" width="135" fixed="right">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="update(scope.$index, scope.row)">
                                查看
                            </el-button>
                            <!-- <el-button @click="offline(scope.$index, scope.row)" type="text" size="small">
                                <i>{{ scope.row.status == 1 ? '正常 ' : '禁用 ' }}</i>
                            </el-button> -->
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
                            layout="total,prev, pager, next"
                            :total="section.total">
                    </el-pagination>
                </div>
            </div>
        </section>
    </article>
</template>
<script>
    import examService from '../../../services/exam/examService'
    import MenuTree from '../../component/tree/MenuTreeExam.vue'
    import SectionCategoryMenu from '../../component/select/SectionCategoryMenu.vue'
    import ImagEcropperInput from '../../component/upload/ImagEcropperInputSec.vue'
    import DateRange from '../../component/form/DateRangePicker.vue'
    import formUtils from '../../../utils/formUtils'

    export default {
        components: {
            MenuTree,SectionCategoryMenu,ImagEcropperInput
            ,DateRange
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
                formLabelWidth: '50px', // 表单label的宽度
                catArr: {
                    'course': '课程',
                    'article': '资讯',
                    'link': '链接'
                },
                editPlacehoder: '',
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
                    description:'',
                    stime :'',
                    etime:'',
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
                category_id:1,
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
            },
            '$store.state.index.examCate'(){
               this.fetchCourseLists() 
               this.fetchData()
            }     
        },
        activated () {
            this.category.currentData.id = ''
            this.category.loading = true
            this.fetchData()
            this.fetchCourseLists()
        },
         computed: {
            examCateid( ){
                return this.$store.state.index.examCate //在Vue 工具里检测examCate
            }
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
            fetchData() {//获取左边栏目数据
                let param={
                            category_id: this.$store.state.index.examCate  , // 3- 供应商
                            page: 1,
                            chapter_type:2,
                            pagesize: -1,
                        }
                examService.fetchChapterCategory( param).then((ret) => {
                        this.SecMenu=ret
                        // console.log('this.SecMenu+++++++',param,this.SecMenu)
                        xmview.setContentLoading(false)     
                    })
            },
            fetchCourseLists () {
                this.section.loading = true
                let params={
                    description:this.section.description,
                    status:this.section.status,
                    stime:this.section.stime ,
                    etime:this.section.etime,
                    page: this.section.page,
                    pagesize: this.section.pagesize,
                    chapter_id: this.category.currentData.id,
                    category_id:this.$store.state.index.examCate,
                    deleted:-1
                }
                return examService.fetchSubjectLists(params).then((ret) => {
                    this.section.data = ret.data
                    this.section.total = ret._exts.total
                    this.section.loading = false
                })
            },
            handleDelete (index, row) {
                xmview.showDialog(`确认要删除课程【<i style="color:red">${row.description}</i>】吗？`, () => {
                    examService.delSubject(row.id).then(() => {
                        xmview.showTip('success', '删除成功')
                        this.fetchCourseLists()
                    }).catch((ret) => {
                        xmview.showTip('error', ret.message)
                    })
                })
            },
           
            update (index, row) {
                this.$router.push({
                    name:'exam-subject-edit',
                    params:{
                        id:row.id,
                        category_id:row.category_id,
                        chapter_id:row.chapter_id,
                        courseInfo:row,
                        readonly:true,
                    }
                })
            },
            sectionPageChange (val) {
                this.section.page = val
                this.fetchCourseLists()
            }
        }
    }
</script>
