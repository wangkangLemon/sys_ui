<!--菜单管理-->
<style lang='scss' rel='stylesheet/scss'>
@import "../../../utils/mixins/common";
@import "../../../utils/mixins/topSearch";

#sys-index-container {
    @extend %content-container;

    .manage-container {
        @extend %right-top-btnContainer;
        >* {
            color: #fff;
            border-radius: 5px;
        } 
    }
    .search {
        @extend %top-search-container;
    } // 底部的管理按钮
    .bottom-manage {
        margin-top: 15px;
    }
}
</style>

<template>
    <article id="sys-index-container">
        <section class="manage-container">
            <el-button type="primary" >
                <i>{{$route.params.role_name}}角色组</i>
                <!--<i>全部</i>-->
            </el-button>
        </section>

        <article class="search">
            <section>
                <i>菜单名称</i>
                <el-input v-model="keyWord" placeholder="请输入菜单名称"></el-input>
            </section>
        </article>

        <el-table class="data-table" v-loading="loadingData" :data="tableData" :fit="true" @select="selectRow" @select-all="selectRow" border>
            
            <el-table-column type="selection"></el-table-column>
            <el-table-column min-width="100" prop="id" label="ID" v-if="data">
            </el-table-column>
            <el-table-column min-width="150" prop="menu_name" label="角色名">
            </el-table-column>
            <el-table-column min-width="150" prop="menu_node" label="菜单标识">
            </el-table-column>
            <el-table-column width="125" label="状态">
                <template scope="scope">
                    <el-tag v-if="scope.row.disabled == 0" type="success">正常</el-tag>
                    <el-tag v-else>禁用</el-tag>
 
                    <el-tag v-if="scope.row.disabled == 0" type="success">授权</el-tag>
                    <el-tag v-else>未授权</el-tag>
                </template>
                
            </el-table-column>
            <el-table-column min-width="100" prop="pid" label="父级菜单id">
            </el-table-column>
            <el-table-column min-width="100" prop="level" label="菜单层级">
            </el-table-column>
            <el-table-column min-width="100" prop="remark" label="标记">
            </el-table-column>
            <el-table-column  width="100" label="操作">
                <template scope="scope">
                    <el-button v-if="scope.row.disabled == 0" @click="offline(scope.$index, scope.row)" type="text" size="small">
                        <i>授权</i>
                    </el-button>
                    <el-button v-else @click="online(scope.$index, scope.row)" type="text" size="small">
                        <i>取消授权</i>
                    </el-button>
                </template>
    
            </el-table-column>
        </el-table>

        <el-pagination class="pagin" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="fetchParam.page" :page-size="fetchParam.page_size" :page-sizes="[15, 30, 60, 100]" layout="sizes,total, prev, pager, next" :total="total">
        </el-pagination>

        <!--底部的批量删除和移动两个按钮-->
        <div class="bottom-manage">
            <el-button :disabled='selectedIds.length < 1' @click="dialogTree.isShow = true">移动到</el-button>
            <el-button :disabled='selectedIds.length < 1' @click="impMulti">批量授权</el-button>
            <el-button :disabled='selectedIds.length < 1' @click="delMulti">批量删除</el-button>
        </div>
    </article>
</template>

<script>
import sysService from '../../../services/sys/menuService.js'
import DateRange from '../../component/form/DateRangePicker.vue'

function getFetchParam() {
    return {
        status: void 0, //  1-禁用 0-正常
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
            }
        }
    },
    activated () {
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
            // console.log(2)
            return sysService.fetchData(this.fetchParam).then((ret) => {
                // console.log(ret.data)
                this.dataCache = ret.data
                this.loadingData = false
                // console.log(ret)
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
        // 禁用
        offline(index, row) {
            xmview.showDialog(`你将要禁用菜单 <span style="color:red">${row.menu_name}</span> 确认吗?`, () => {
                sysService.offline(row.id).then((ret) => {
                    row.disabled = 1
                })
            })
        },
        // 启用
        online(index, row) {
            xmview.showDialog(`你将要启用菜单<span style="color:red">${row.menu_name}</span> 确认吗?`, () => {
                sysService.online(row.id).then((ret) => {
                    row.disabled = 0
                })
            })
        },
        // 单条删除
        del(index, row) {
            xmview.showDialog(`你将要删除菜单 <span style="color:red">${row.menu_name}</span>  此操作不可恢复确认吗?`, () => {
                sysService.delete(row.id).then(() => {
                    this.dataCache.splice(index, 1)//删除选中项
                    row.deleted = 1
                    xmview.showTip('success', '操作成功')
                })
            })
        },
         // 批量授权
        impMulti() {
            xmview.showDialog(`你将要授权选中的项目，是否确认?`, () => {
                sysService.impowMulty(this.selectedIds.join(',')).then(() => {
                    xmview.showTip('success', '操作成功')
                    this.dialogTree.isShow = false
                    setTimeout(() => {
                        this.fetchData() // 重新刷新数据
                    }, 300)
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
        filterTag(value,row){
            console.log(value);
            console.log(row);
            return 
        }
    },
    computed: {
        tableData(){
            var arr = this.dataCache.filter(v=>{
                return v.menu_name.indexOf(this.keyWord)>=0
            })
            return arr
        }
    }
}
</script>
