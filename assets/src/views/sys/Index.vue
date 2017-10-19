<!--公开课管理-->
<style lang='scss' rel='stylesheet/scss'>
@import "../../utils/mixins/common";
@import "../../utils/mixins/topSearch";

#course-index-container {
    @extend %content-container;

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
    <article id="course-index-container">
        <section class="manage-container">
            <el-button type="primary" icon="plus" @click="$router.push({ name:'sys-add'})">
                <i>添加管理员</i>
            </el-button>
        </section>

        <article class="search">
            <section>
                <i>管理员姓名</i>
                <el-input v-model="fetchParam.keyword" @keyup.enter.native="fetchData"></el-input>
            </section>

        </article>

        <el-table class="data-table" v-loading="loadingData" :data="data" :fit="true" @select="selectRow" @select-all="selectRow" border>
            
            <el-table-column type="selection"></el-table-column>
            <el-table-column min-width="200" prop="name" label="姓名">
            </el-table-column>
            <el-table-column min-width="200" prop="category_name" label="角色">
            </el-table-column>
            <el-table-column min-width="200" prop="mobile" label="手机">
            </el-table-column>
            <el-table-column min-width="200" prop="email" label="邮箱">
            </el-table-column>
            <el-table-column min-width="200" prop="category_name" label="上次登录时间">
            </el-table-column>
            <el-table-column width="100" label="状态">
                <template scope="scope">
                    <el-tag v-if="scope.row.status == 0" type="success">正常</el-tag>
                    <el-tag v-else>禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column fixed="right" width="207" label="操作">
                <template scope="scope">
                    <!--<el-button @click="preview(scope.$index, scope.row)" type="text" size="small">预览</el-button>-->
                    <el-button @click="$router.push({name: 'course-edit', params: {courseInfo: scope.row, course_id: scope.row.id}})" type="text" size="small">详情
                        <!--a-->
                    </el-button>
                    <el-button @click="$router.push({name: 'course-edit', params: {courseInfo: scope.row, course_id: scope.row.id}})" type="text" size="small">编辑
                        <!--a-->
                    </el-button>
                    <el-button @click="online(scope.$index, scope.row)" type="text" size="small">
                        <i>禁用</i>
                    </el-button>
                    <el-button @click="del(scope.$index, scope.row)" type="text" size="small">删除</el-button>

                </template>
            </el-table-column>
        </el-table>

        <el-pagination class="pagin" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="fetchParam.page" :page-size="fetchParam.page_size" :page-sizes="[15, 30, 60, 100]" layout="sizes,total, prev, pager, next" :total="total">
        </el-pagination>

        <!--底部的批量删除和移动两个按钮-->
        <div class="bottom-manage">
            <el-button :disabled='selectedIds.length < 1' @click="dialogTree.isShow = true">移动到</el-button>
            <el-button :disabled='selectedIds.length < 1' @click="delMulti">批量删除</el-button>
        </div>

    </article>
</template>

<script>
// import sysService from '../../services/sys/sysService.js'
import authUtils from '../../utils/authUtils.js'
import sysService from '../../services/sys/sysService.js'
import DateRange from '../component/form/DateRangePicker.vue'

function getFetchParam() {
    return {
        status: void 0, //  1-禁用 0-正常
        category: void 0, // 3- 供应商
        page: 1,
        page_size: 15,
        time_start: void 0,
        time_end: void 0,
        need_testing: void 0, //  不赋值则表示全部，0为不需要，1为需要
        keyword: void 0,
    }
}

export default {
    components: {
        DateRange
    },
    data() {
        return {
            loadingData: false,
            data: [], // 表格数据
            total: 0,
            dialogVisible: false,
            selectedIds: [], // 被选中的数据id集合
            fetchParam: getFetchParam(),
            dialogTree: {
                isShow: false,
                selectedId: void 0,
            }
        }
    },
    activated() {
        this.fetchData()
    },
    methods: {
        userInfo () {
            return authUtils.getUserInfo()
        },
        initFetchParam() {
            this.fetchParam = getFetchParam()
        },
        handleCurrentChange(val) {
            this.fetchParam.page = val
            this.fetchData()
        },
        handleSizeChange(val) {
            this.fetchParam.page_size = val
            this.fetchData()
        },
        fetchData(val) {
            this.loadingData = true
            return sysService.fetchData(authUtils.getAuthToken()).then((ret) => {
                this.data = ret.data
                this.total = ret.total
                this.loadingData = false
                console.log(ret)
                xmview.setContentLoading(false)
            })
        },
        // 单行被选中
        selectRow(selection) {
            let ret = []
            selection.forEach((item) => {
                ret.push(item.id)
            })
            this.selectedIds = ret
        },
        // 下线
        offline(index, row) {
            xmview.showDialog(`你将要下线课程 <span style="color:red">${row.name}</span> 确认吗?`, () => {
                courseService.offline(row.id).then((ret) => {
                    row.status = 1
                })
            })
        },
        // 上线
        online(index, row) {
            xmview.showDialog(`你将要上线课程 <span style="color:red">${row.name}</span> 确认吗?`, () => {
                courseService.online(row.id).then((ret) => {
                    row.status = 0
                })
            })
        },
        // 单条删除
        del(index, row) {
            xmview.showDialog(`你将要删除管理员 <span style="color:red">${row.name}</span>  此操作不可恢复确认吗?`, () => {
                courseService.delete(row.id).then(() => {
                    xmview.showTip('success', '操作成功')
                    this.data.splice(index, 1)
                })
            })
        },
        // 批量删除
        delMulti() {
            xmview.showDialog(`你将要删除选中的项目，操作不可恢复确认吗?`, () => {
                courseService.deleteMulty(this.selectedIds.join(',')).then(() => {
                    xmview.showTip('success', '操作成功')
                    this.dialogTree.isShow = false
                    setTimeout(() => {
                        this.fetchData() // 重新刷新数据
                    }, 300)
                })
            })
        },
    },
}
</script>
