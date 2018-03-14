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
                    <section>
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
                </div>     
                
                <!-- <DateRange title="创建时间" :start="fetchParam.create_start" :end="fetchParam.create_end" @changeStart="val=> fetchParam.create_start=val "
                    @changeEnd="val=> fetchParam.create_end=val" :change="fetchData">
                </DateRange> -->
                <el-table v-loading="section.loading" border :data="section.data">
                    <el-table-column prop="description" label="考题" width="200"></el-table-column>
                    <el-table-column prop="chapter_name" label="绑定栏目" width="250">
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
                    <el-table-column prop="operate" label="操作" width="105" fixed="right">
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
                            layout="prev, pager, next"
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
            // ,DateRange
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
            }
        },
        activated () {
            // console.log(this.$router.history.current.path)
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
            fetchData() {//获取左边栏目数据
                examService.fetchChapterCategory( this.fetchParam).then((ret) => {
                        this.SecMenu=ret
                        xmview.setContentLoading(false)     
                    })
            },
            fetchCourseLists () {
                this.section.loading = true
                let params={
                    description:this.section.description,
                    status:this.section.status,
                    page: this.section.page,
                    pagesize: this.section.pagesize,
                    chapter_id: this.category.currentData.id,
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
                console.log(row)
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
