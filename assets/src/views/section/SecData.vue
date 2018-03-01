<!--区块管理-->
<style lang='scss' rel="stylesheet/scss">
    @import "../../utils/mixins/mixins";
    @import "../../utils/mixins/table";
    @import "../../utils/mixins/common";
    @import "../../utils/mixins/topSearch";

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
                section{
                     width: 100%;
                    margin-bottom: 10px;
                     #input{
                        width: 50%;
                        display: inline-block;
                        margin-left: 10px;
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
        <ChooseContent v-model="select.isShow" v-on:result="contentConfirm"></ChooseContent>

        <!--添加/编辑区块-->
        <el-dialog v-model="addForm" :title="formTitle" size="tiny">
            <el-form label-position="top" class="addForm" :model="form" :rules="rules" ref="form">
                <el-form-item prop="name" label="名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addForm = false">取 消</el-button>
                <el-button type="primary" @click="submit('form')">确 定</el-button>
            </div>
        </el-dialog>
        <section class="left-content">
            <div class="content-title">
                所有分类
                <router-link tag="el-button" :to="{name: 'section-category'}">管理分类</router-link>
            </div>
            <div class="classify-tree">
                <MenuTree :data="SecMenu" v-if="SecMenu.length" ref="secCategory" ></MenuTree>
                    <!-- <el-tree class="leftSubTree" :expand-on-click-node="false" :highlight-current="true" :data="category.data"
                         :props="defaultProps" @node-expand="leftClassifyExpend" @node-click="leftClassifyClick"></el-tree> -->
            </div>
        </section>
        <section class="right-content">
            <div class="content-title">
                <span v-if="category.title">{{category.title}}-</span>区块列表
                

                <!-- <el-button @click="add">添加区块</el-button> -->
                <el-button type="primary" icon="plus" @click="select.isShow = true">选取内容</el-button>
            </div>
            <div class="content-list">
                <section>
                     <i>标题</i><el-input id="input" size='small' v-model="section.title" placeholder="请输入标题" @keyup.enter.native="getSectionData" auto-complete="off" ></el-input>
                </section>  
                   
                <el-table v-loading="section.loading" border :data="section.data">
                    <el-table-column prop="title" label="名称"></el-table-column>
                    <el-table-column prop="category_name" label="绑定栏目" width="100">
                        <!-- <template scope="scope">
                            {{scope.row.category_name || '无'}}
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="sort" label="排序" width="70"></el-table-column>
                    <el-table-column prop="tags" label="标签" width="100"></el-table-column>
                    <!-- <el-table-column class="tag" label="标签" :label-width="formLabelWidth">
                        <span @click="toggleTag(item.value)" :class="{'active': item.value == form.tags}" v-for="(item, index) in tags">{{item.name}}</span>
                    </el-table-column> -->
                    <el-table-column prop="update_time_name" label="更新时间" width="200"></el-table-column>
                     <!-- <el-table-column
                        prop="status_name"
                        label="状态"
                        width="100">
                    <template scope="scope">
                        <el-tag  type="success"v-if="scope.row.disabled==0">上线</el-tag>
                        <el-tag type="gray" v-else>下线</el-tag>
                    </template>
                </el-table-column> -->
                    <el-table-column prop="operate" label="操作" width="100">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="update(scope.$index, scope.row)">
                                编辑
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
    </article>
</template>
<script>
    import dataService from '../../services/section/dataService'
    import cateService from '../../services/section/cateService'
    import MenuTree from '../component/tree/MenuTreeSec.vue'
    import ChooseContent from '../component/choose/ChooseContent'
    // import CourseCategorySelect from '../../component/select/CourseCategory.vue'
    function clearFn() {
        return {
            name: '',          // 名称
            sort: '',          // 排序
            category_id: 2,   // 分类ID
            course_category_id: '',       // 绑定的栏目
            // disabled: 1         // 状态
        }
    }
    export default {
        components: {
            MenuTree,ChooseContent// CourseCategorySelect
        },
        data () {
            return {
                category: {
                    currentData: {},
                    loading: false,
                    title: '',
                    data: [],
                },
                formTitle: '', // 添加/编辑区块标题
                addForm: false, // 表单弹窗是否显示
                formLabelWidth: '50px', // 表单label的宽度
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
                    title:'',
                    page: 1,
                    pagesize: 10,
                    total: 0
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
            }
        },
        watch: {
            '$store.state.index.secMenu'(){
                this.category.currentData = Object.assign({},this.$store.state.index.secMenu) //复制一份vuex存储的值 
                console.log(this.category.currentData.id)
            },
            'category.currentData.id'(){
                this.getSectionData () 
                // this.$refs.secCategory.handleNodeClick()
            }
        },
        activated () {
            this.category.loading = true
            // this.getCategoryTree().then((ret) => {
            //     this.category.data = ret
            //     xmview.setContentLoading(false)
            //     this.category.loading = false
            //     this.category.currentData = ret[0]
            //     this.getSectionData()
            // })
            this.fetchData()
        },
        methods: {
            // 保持同步
            keepSync() {
                this.form.ref_sync = 1
                this.form.course_name = this.form.content.course_name
                this.form.image = this.form.content.image
                this.form.description = this.form.content.description
                this.form.addate = this.form.content.addate
                this.form.sort = ''
            },
            //弹窗内容
            contentConfirm(dataObj) {
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
                cateService.fetchData( this.fetchParam).then((ret) => {
                        // this.$store.state.index.secMenu.commit('INDEX_SET__SETSECMENU', ret.data) 
                        this.SecMenu=ret
                        xmview.setContentLoading(false)     
                    })
                this.getSectionData()
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
                this.getSectionData()
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
            getSectionData () {
                this.section.loading = true
                return dataService.fetchData({
                    title:this.section.title,
                    page: this.section.page,
                    pagesize: this.section.pagesize,
                    category_id: this.category.currentData.id
                }).then((ret) => {
                    this.section.data = ret.data
                    this.section.total = ret._exts.total
                    this.section.loading = false
                })
            },
            handleDelete (index, row) {
                xmview.showDialog(`确认要删除课程【<i style="color:red">${row.name}</i>】吗？`, () => {
                    dataService.delete(row.id).then(() => {
                        xmview.showTip('success', '删除成功')
                        this.getSectionData()
                    }).catch((ret) => {
                        xmview.showTip('error', ret.message)
                    })
                })
            },
            submit (form) { // 表单提交
                this.form.category_id = this.category.currentData.id
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        let reqFn = dataService.create
                        let msg = '添加成功'
                        if (this.form.id) {
                            reqFn = dataService.edit
                            msg = '修改成功'
                        }
                        reqFn(this.form).then(() => {
                            xmview.showTip('success', msg)
                            this.addForm = false
                            this.getSectionData()
                        }).catch((ret) => {
                            xmview.showTip('error', ret.message)
                        })
                    } else {
                        return false
                    }
                })
            },
            update (index, row) {
                this.addForm = true
                this.formTitle = '编辑区块：' + row.name
                // 调用接口 获取数据并赋值给this.form
                this.editPlacehoder = row.course_category_name ? row.course_category_name : '请选择'
                this.form = row
            },
            sectionPageChange (val) {
                this.section.page = val
                this.getSectionData()
            }
        }
    }
</script>
