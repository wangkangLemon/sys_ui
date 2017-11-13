<!--数据管理-->
<style lang='scss' rel='stylesheet/scss'>
    @import "../../utils/mixins/common";
    @import "../../utils/mixins/topSearch";

    #sys-index-container {
        @extend %content-container;
        /*上传图片的样式*/
        .avatar-uploader {
            .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;

                &:hover {
                    border-color: #20a0ff;
                }
            }
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 150px;
            height: 150px;
            line-height: 150px;
            text-align: center;
        }
        .avatar {
            width: 150px;
            height: 150px;
            display: block;
        } // 同步时候的遮罩层
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
        .dialog-footer {
            text-align: right;
            float: right;
            margin-bottom: 30px;
        }
        .manage-container {
            @extend %right-top-btnContainer;
            >* {
                color: #fff;
                border-radius: 5px;
            } // 添加课程
            .add {
                background: rgb(0, 204, 255);
            } // 管理栏目
            .catmange {
                background: rgb(153, 102, 204);
            }
        }

        .search {
            @extend %top-search-container;
        } // 底部的管理按钮
        .bottom-manage {
            margin-top: 15px;
        }

        .el-dialog__wrapper {
            padding-top: 15px;
            background: rgba(0, 0, 0, .5);
            z-index: 1000;
        }
    }
</style>

<template>
    <article id="sys-index-container">
        <section class="manage-container">
            <el-button type="primary" icon="plus" @click="content.isShow = true">选取内容</el-button>
            <el-button type="primary" icon="plus" @click="$router.push({ name:'section-add', params:{sys_type:'add'}})">
                <i>添加数据</i>
            </el-button>
        </section>
        <!--添加/编辑课程-->
        <el-dialog v-model="addForm" :title="formTitle">
            <section v-if="form.ref_id">
                <div class="keep" v-if="form.ref_sync"></div>
                <div class="synchronize">

                    {{catArr[category]}}：{{category == 'course' ? form.content.course_name : form.content.title}}
                    <el-button @click="form.ref_sync = 0" v-if="form.ref_sync">关闭同步</el-button>
                    <el-button @click="keepSync" v-if="!form.ref_sync">开启同步</el-button>
                </div>
            </section>
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
                <el-form-item class="tag" label="标签" :label-width="formLabelWidth">
                    <span @click="toggleTag(item.value)" :class="{'active': item.value == form.tags}" v-for="(item, index) in tags">{{item.name}}</span>
                </el-form-item>
                <el-form-item prop="date" label="日期" :label-width="formLabelWidth">
                    <el-date-picker v-model="form.date" type="date" />
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
        <!--选取-->
        <ChooseContent v-model="content.isShow" v-on:result="contentConfirm"></ChooseContent>

        <article class="search">
            <section>
                <i>数据名称</i>
                <el-input v-model="keyWord" placeholder="请输入数据名称"></el-input>
            </section>

        </article>

        <el-table class="data-table" v-loading="loadingData" :data="id" :fit="true" @select="selectRow" @select-all="selectRow" border
            v-if="SecCateName">

            <el-table-column type="selection"></el-table-column>
            <el-table-column min-width="100" prop="id" label="区块id" v-if="data">
            </el-table-column>
            <el-table-column min-width="100" prop="formdateName" label="栏目名称">
            </el-table-column>
            <el-table-column min-width="100" prop="ref_id" label="引用id">
            </el-table-column>
            <el-table-column min-width="400" prop="title" label="标题">
            </el-table-column>
            <el-table-column min-width="100" prop="addtime" label="添加时间">
            </el-table-column>
            <el-table-column min-width="100" prop="tags" label="标签">
            </el-table-column>
            <el-table-column fixed="right" width="170" label="操作">
                <template scope="scope">
                    <el-button @click="$router.push({name: 'section-edit', params: {roleInfo: scope.row, sys_id: scope.row.id}})" type="text"
                        size="small">详情
                    </el-button>
                    <el-button @click="$router.push({name: 'section-edit', params: {roleInfo: scope.row, sys_id: scope.row.id, sys_type:'edit'}})"
                        type="text" size="small">编辑
                    </el-button>
                    <el-button @click="del(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="pagin" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="fetchParam.page"
            :page-size="fetchParam.pagesize" :page-sizes="[15, 30, 60, 100]" layout="sizes,total, prev, pager, next" :total="total">
        </el-pagination>

        <!--底部的批量删除和移动两个按钮-->
        <div class="bottom-manage">
            <el-button :disabled='selectedIds.length < 1' @click="dialogTree.isShow = true">移动到</el-button>
            <el-button :disabled='selectedIds.length < 1' @click="delMulti">批量删除</el-button>
        </div>
    </article>
</template>

<script>
    import dataService from '../../services/section/dataService.js'
    import DateRange from '../component/form/DateRangePicker.vue'
    import cateService from '../../services/section/cateService.js'
    import ChooseContent from '../component/choose/ChooseContent'

    function getFetchParam() {
        return {
            // status: void 0, //  1-禁用 0-正常
            page: 1,
            pagesize: 15,
        }
    }

    export default {
        components: {
            DateRange,
            ChooseContent
        },
        data() {
            return {
                init: false,
                loadingData: false,
                data: [], // 表格数据
                dataCache: [],
                total: 0,
                keyWord: '',
                dialogVisible: false,
                selectedIds: [], // 被选中的数据id集合
                fetchParam: getFetchParam(),
                dialogTree: {
                    isShow: false,
                    selectedId: void 0,
                },
                SecCateName: null,
                // 选取
                content: {
                    isShow: false
                },
                // 表单相关属性
                formTitle: '添加内容',
                addForm: false, // 表单弹窗是否显示
                formLabelWidth: '50px', // 表单label的宽度
                catArr: {
                    'course': '课程',
                    'article': '资讯',
                    'speaking': '药我说',
                    'link': '链接'
                },
                category: 'course',
                form: { // 表单属性值
                    title: '', // 标题
                    url: '', // 链接地址
                    ref_type: '', // 引用类型
                    ref_id: '', // 引用ID
                    ref_sync: 0, // 是否与引用同步
                    image: '', // 图片
                    description: '', // 描述
                    date: '', // 日期
                    sort: '', // 排序
                    tags: ''
                },
                tags: [{
                        name: '无',
                        value: ''
                    },
                    {
                        name: '热门',
                        value: 'hot'
                    },
                    {
                        name: '最新',
                        value: 'new'
                    },
                    {
                        name: '推荐',
                        value: 'recommend'
                    }
                ],
                rules: {
                    title: [{
                        required: true,
                        message: '标题不能为空',
                        trigger: 'blur'
                    }],
                    url: [{
                        required: true,
                        message: '链接不能为空',
                        trigger: 'blur'
                    }]
                }
            }
        },
        activated() {
            this.fetchData()
            this.fetchCate()
        },
        created(){
        },
        methods: {
            submit(form) { // 表单提交
                this.form.section_id = this.section.currentID
                this.form.date = this.form.date ? date2Str(this.form.date) : ''
                this.form.ref_type = this.form.ref_id ? this.category : 'link'
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        let reqFn = sectionService.createSectionData
                        let msg = '添加成功'
                        if (this.form.id) {
                            reqFn = sectionService.updateSectionData
                            msg = '修改成功'
                        }
                        reqFn(this.form).then(() => {
                            xmview.showTip('success', msg)
                            this.addForm = false
                            this.content.isShow = false
                            this.getSectionData(this.section.currentID)
                        }).catch((ret) => {
                            xmview.showTip('error', ret.message)
                        })
                    } else {
                        return false
                    }
                })
            },
            toggleTag(value) {
                this.form.tags = value
            },
            // 保持同步
            keepSync() {
                this.form.ref_sync = 1
                this.form.title = this.form.content.course_name
                this.form.image = this.form.content.image
                this.form.description = this.form.content.description
                this.form.date = this.form.content.create_time_name
                this.form.sort = ''
            },
            handleImgUploaded(data, ext) {
                sectionService.uploadSectionImage({
                    section_id: this.section.currentID,
                    alias: Date.now() + ext,
                    image: data
                }).then((ret) => {
                    this.form.image = ret.url
                })
            },
            addCourse(form) {
                if (this.section.loading || this.result.loading) {
                    return
                }
                this.form = {
                    title: '',
                    url: '',
                    ref_type: '',
                    ref_id: '',
                    ref_sync: 0,
                    image: '',
                    description: '',
                    date: '',
                    sort: '',
                    tags: ''
                }
                this.addForm = true
                this.formTitle = '添加内容'
            },
            //更新课程
            updateCourse(index, item) {
                this.formTitle = `编辑${this.catArr[item.ref_type]}`
                this.form = item
                if (item.ref_type != 'link') {
                    this.category = item.ref_type
                    if (item.ref_type == 'course') {
                        this.form.content = item.course
                        this.form.title = item.course.course_name
                        this.form.description = item.description
                    } else if (item.ref_type == 'speaking') {
                        this.form.content = item.speaking
                        this.form.description = item.content
                    } else if (item.ref_type == 'article') {
                        this.form.content = item.article
                    }
                }
                this.addForm = true
            },
            //弹窗内容
            contentConfirm(dataObj) { // 点击确定的时候，进行搜索结果
                console.log(dataObj)
                this.form.content = dataObj
                this.form.ref_id = dataObj.contentid
                this.form.ref_sync = 1
                this.form.tags = ''
                // this.category = dataObj.category
                if (this.form.id) delete this.form.id
                this.keepSync()
                this.addForm = true
            },

            //获取栏目名称    
            getCategory_name(id) {
                let i = null
                this.SecCateName.forEach(v => {
                    if (v.id == id) {
                        i = v.name
                    }
                })
                return i
            },
            //获取栏目名称
            fetchCate() {
                cateService.fetchData().then((ret) => {
                    // this.$store.state.index.secMenu.commit('INDEX_SET__SETSECMENU', ret.data) 
                    this.SecCateName = ret.data
                    xmview.setContentLoading(false)
                })
            },
            userInfo() {
                return authUtils.getUserInfo()
            },
            initFetchParam() {
                this.fetchParam = getFetchParam()
            },
            handleCurrentChange(val) {
                if (this.init) { //init是true进来 限制fetchData初始化不请求
                    this.fetchParam.page = val
                    this.fetchData()
                } else {
                    this.init = true

                }
            },
            handleSizeChange(val) {
                this.fetchParam.pagesize = val
                this.fetchData()
            },
            fetchData(val) {
                return dataService.fetchData(this.fetchParam).then((ret) => {
                    // console.log(ret.data)
                    this.dataCache = ret.data
                    this.loadingData = false
                    xmview.setContentLoading(false)
                })
            },
            search(val) {
                return dataService.search(this.fetchParam).then((ret) => {})
            },
            // 单行被选中
            selectRow(selection) {
                let ret = []
                selection.forEach((item) => {
                    ret.push(item.id)
                })
                this.selectedIds = ret
            },

            // 单条删除
            del(index, row) {
                xmview.showDialog(`你将要删除第 <span style="color:red">${row.id}</span> 条数据,  此操作不可恢复确认吗?`, () => {
                    dataService.delete(row.id).then(() => {
                        this.dataCache.splice(index, 1) //删除选中项
                        row.deleted = 1
                        xmview.showTip('success', '操作成功')
                    })
                })
            },
            // 批量删除
            delMulti() {
                xmview.showDialog(`你将要删除选中的项目，操作不可恢复确认吗?`, () => {
                    dataService.deleteMulty(this.selectedIds.join(',')).then(() => {
                        xmview.showTip('success', '操作成功')
                        this.dialogTree.isShow = false
                        setTimeout(() => {
                            this.fetchData() // 重新刷新数据
                        }, 300)
                    })
                })
            },
        },
        computed: {
            tableData() {
                var arr = this.dataCache.filter(v => {
                    return v.title.indexOf(this.keyWord) >= 0
                })
                return arr
            },
            id() {
                if (this.dataCache.length > 0 && this.SecCateName) {
                    this.dataCache.forEach(v => {
                        v.formdateName = this.getCategory_name(v.category_id)
                    })
                }
                return this.dataCache
            }
        }
    }
</script>