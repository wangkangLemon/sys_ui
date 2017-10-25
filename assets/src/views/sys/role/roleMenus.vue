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

        <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedMenus" @change="handleCheckedMenusChange">
            <el-checkbox v-for="item in dataCache" :label="item.id" :key="item.id" :value="item.id">{{item.menu_name}}</el-checkbox>
        </el-checkbox-group>

        <!--底部的批量删除和移动两个按钮-->
        <div class="bottom-manage">
            <el-button @click="createImp">提交</el-button>
            <el-button @click="deleteImp">删除</el-button>
        </div>
    </article>
</template>

<script>
import sysService from '../../../services/sys/menuService.js'
import roleService from '../../../services/sys/roleService.js'
import DateRange from '../../component/form/DateRangePicker.vue'

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
            selectedIds: [], // 被选中的数据id集合
            // dialogTree: {
            //     isShow: false,
            //     selectedId: void 0,
            // }
            checkAll: false,
            checkedMenus: [],
            }
    },
    activated () {
        this.fetchData()
        this.fetchDataImp()
    },
    methods: {
        //全选反选按钮
        handleCheckAllChange(event) {
            var arr = this.dataCache.map(v=>{
                return v.id
            })
            this.checkedMenus = event.target.checked ? arr : [];
        },
        handleCheckedMenusChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.dataCache.length;
        },
        //总的数据     
        fetchData(val) {
            return sysService.fetchData(this.fetchParam).then((ret) => {
                console.log('全部的菜单======')
                console.log(ret.data)
                this.dataCache = ret.data 
                this.loadingData = false
                xmview.setContentLoading(false)     
            })
        },
        //授权部分开始
        fetchDataImp(){
            console.log(this.$route.params.role_id)
            return roleService.fetchDataImp(this.$route.params.role_id).then((ret) => {
                this.dataImp = ret.data
                ret.data.forEach(v=>{
                    this.checkedMenus.push(v.id)
                })    
                console.log('此角色已授权的菜单有======')
                console.log(ret.data)
                this.loadingData = false
                xmview.setContentLoading(false)     
            })
        },
        createImp(){
            let ids=this.checkedMenus.join(',')
            console.log(111111111111111)
            console.log(ids)
            roleService.createImp(this.$route.params.role_id,ids).then((ret) => {
                this.fetchParamImp = ret
                console.log(ret)
            })
            this.loadingData=false;
        },
        deleteImp(){
            xmview.showDialog(`你将要删除菜单 <span style="color:red"></span>  此操作不可恢复确认吗?`, () => {
                sysService.delete(this.$route.params.role_id).then(() => {
                    // this.dataCache.splice(index, 1)//删除选中项
                    // this.$route.params.role_id.deleted = 1
                    xmview.showTip('success', '操作成功')
                })
            })
        },
        //授权部分结束
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
