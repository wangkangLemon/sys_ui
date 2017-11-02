<!--数据管理-->
<style lang='scss' rel='stylesheet/scss'>
@import "../../utils/mixins/common";
@import "../../utils/mixins/topSearch";

#sys-index-container {
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
    <article id="sys-index-container">
        <section class="manage-container">
            <el-button type="primary" icon="plus" @click="$router.push({ name:'section-add'})">
                <i>添加数据</i>
            </el-button>
        </section>

        <article class="search">
            <section>
                <i>数据名称</i>
                <el-input v-model="keyWord" placeholder="请输入数据名称"></el-input>
            </section>

        </article>

        <el-table class="data-table" v-loading="loadingData" :data="id" :fit="true" @select="selectRow" @select-all="selectRow" border v-if="SecCateName">
            
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
                    <el-button @click="$router.push({name: 'section-edit', params: {roleInfo: scope.row, sys_id: scope.row.id}})" type="text" size="small">详情
                    </el-button>
                    <el-button @click="$router.push({name: 'section-edit', params: {roleInfo: scope.row, sys_id: scope.row.id}})" type="text" size="small">编辑
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
import sysService from '../../services/section/dataService.js'
import DateRange from '../component/form/DateRangePicker.vue'
import cateService from '../../services/section/cateService.js'

function getFetchParam() {
    return {
        // status: void 0, //  1-禁用 0-正常
        page: 1,
        page_size: 15,
    }
}

export default {
    components: {
        DateRange
    },
    data() {
        return {
            init:false,
            loadingData: false,
            data: [], // 表格数据
            dataCache:[],
            total: 0,
            keyWord:'',
            dialogVisible: false,
            selectedIds: [], // 被选中的数据id集合
            fetchParam: getFetchParam(),
            dialogTree: {
                isShow: false,
                selectedId: void 0,
            },
            SecCateName:null
        }
    },
    activated () {
        this.fetchData()
        this.fetchCate()
    },
    methods: {
        getCategory_name(id){
            let i = null
            this.SecCateName.forEach(v=>{
                if(v.id==id){
                    i = v.name
                }
            })
            return i
        },
        //获取栏目名称
        fetchCate() {
                cateService.fetchData().then((ret) => {
                        // this.$store.state.index.secMenu.commit('INDEX_SET__SETSECMENU', ret.data) 
                        this.SecCateName=ret.data
                        xmview.setContentLoading(false)     
                    })
            },
        userInfo () {
            return authUtils.getUserInfo()
        },
        initFetchParam() {
            this.fetchParam = getFetchParam()
        },
        handleCurrentChange(val) {
            if(this.init){                 //init是true进来 限制fetchData初始化不请求
                this.fetchParam.page = val
                this.fetchData()
            }else{
                this.init = true
                
            }
        },
        handleSizeChange(val) {
            this.fetchParam.page_size = val
            this.fetchData()
        },
        fetchData(val) {
            return sysService.fetchData(this.fetchParam).then((ret) => {
                // console.log(ret.data)
                this.dataCache = ret.data
                this.loadingData = false
                xmview.setContentLoading(false)     
            })
        },
        search(val){
               return sysService.search(this.fetchParam).then((ret) => {
                alert('success')
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
      
        // 单条删除
        del(index, row) {
            xmview.showDialog(`你将要删除第 <span style="color:red">${row.id}</span> 条数据,  此操作不可恢复确认吗?`, () => {
                sysService.delete(row.id).then(() => {
                    this.dataCache.splice(index, 1)//删除选中项
                    row.deleted = 1
                    xmview.showTip('success', '操作成功')
                })
            })
        },
        // 批量删除
        delMulti() {
            xmview.showDialog(`你将要删除选中的项目，操作不可恢复确认吗?`, () => {
                sysService.deleteMulty(this.selectedIds.join(',')).then(() => {
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
        tableData(){
            var arr = this.dataCache.filter(v=>{
                return v.title.indexOf(this.keyWord)>=0
            })
            return arr
        },
        id(){
            if(this.dataCache.length>0&&this.SecCateName){
                this.dataCache.forEach(v=>{
                    v.formdateName = this.getCategory_name(v.category_id)       
                })
            }
            return this.dataCache
        }
    }
}
</script>
