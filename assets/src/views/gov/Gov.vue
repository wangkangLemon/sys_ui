<!--企业列表-->
<style lang="scss" rel='stylesheet/scss'>
    @import "../../utils/mixins/common";
    @import "../../utils/mixins/topSearch";
    @import "../../utils/mixins/showDetail";

    .gov-index {
        @extend %content-container;
        .add {
            @extend %right-top-btnContainer;
        }
        .search {
            @extend %top-search-container;
        }
        .block {
            text-align: right;
            margin-top: 15px;
        }
        .addForm {
            .tip {
                text-align: center;
                border-top: 1px solid #ddd;
                color: #ff0000;
                line-height: 50px;
            }
        }
    }
</style>
<template>
    <article class="gov-index">
        <!--详情-->
        <el-dialog size="small" v-if="details != null" class="show-detail" v-model="showDetail" title="企业信息">
            <div class="info">
                <h2>
                    {{details.name}}
                    <el-tag type="success">{{govType[details.category]}}</el-tag>
                </h2>
                <p><i class="title">联系人：</i><span class="value">{{details.concact || '无'}}</span></p>
                <p><i class="title">联系人手机：</i><span class="value">{{details.mobile || '无'}}</span></p>
                <p><i class="title">联系人邮箱：</i><span class="value">{{details.email || '无'}}</span></p>
                <p><i class="title">企业电话：</i><span class="value">{{details.tel || '无'}}</span></p>
                <p><i class="title">传真：</i><span class="value">{{details.fax || '无'}}</span></p>
                <p><i class="title">上级部门：</i><span class="value">{{details.parent_name || '无'}}</span></p>
                <p><i class="title">地址：</i><span class="value">{{details.address || '无'}}</span></p>
                <p><i class="title">邮编：</i><span class="value">{{details.zip || '无'}}</span></p>
                <p><i class="title">企业网址：</i><span class="value">{{details.url || '无'}}</span></p>
                <p><i class="title">企业介绍：</i><span class="value">{{details.description || '无'}}</span></p>
            </div>
            <!--<div slot="footer" class="dialog-footer">-->
            <!--<el-button type="primary" @click="showDetail = false">关 闭</el-button>-->
            <!--</div>-->
        </el-dialog>
        <div class="add">
            <el-button type="primary" icon="plus" class="recharge" @click="add">添加</el-button>
        </div>
        <section class="search">
            <section>
                <i>部门类型</i>
                <el-select @change="getData" clearable v-model="fetchParam.typeSelect" placeholder="未选择">
                    <el-option v-for="(item, index) in types" :label="item.name" :value="item.id" :key="item.id">
                    </el-option>
                </el-select>
            </section>
            <Region :province="fetchParam.provinceSelect" :city="fetchParam.citySelect" :area="fetchParam.areaSelect" 
                    :town="fetchParam.townSelect" :village="fetchParam.villageSelect" 
                    title="部门" 
                    v-on:provinceChange="val => fetchParam.provinceSelect = val"
                    v-on:cityChange="val => fetchParam.citySelect = val" 
                    v-on:areaChange="val => fetchParam.areaSelect = val" 
                    v-on:townChange="val => fetchParam.townSelect = val" 
                    v-on:villageChange="val => fetchParam.villageSelect = val" 
                    :change="getData" >
            </Region>
            <section>
                <i>名称：</i>
                <el-input @keyup.enter.native="getData" v-model="fetchParam.name" @change="changeName" auto-complete="off"></el-input>
            </section>
            <DateRange title="创建时间" :start="fetchParam.addate" :end="fetchParam.update" v-on:changeStart="val=> fetchParam.addate = val"
                v-on:changeEnd="val=> fetchParam.update = val" :change="getData">
            </DateRange>
        </section>
        <el-table v-loading="loading" border :data="govData" stripe style="width: 100%">
            <el-table-column prop="name" label="名称" min-width="230">
                <template scope="scope">
                    <el-tag type="gray">{{govType[scope.row.category]}}</el-tag>
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column prop="parent_name" label="上级部门" width="200">
            </el-table-column>
            <el-table-column width="100" prop="concact" label="联系人">
            </el-table-column>
            <el-table-column width="150" prop="mobile" label="手机">
            </el-table-column>

            <el-table-column width="180" prop="addate" label="创建时间">
            </el-table-column>
            <el-table-column prop="operate" label="操作" width="213">
                <template scope="scope">
                    <!--<el-button type="text" size="small" @click="adminPage(scope.$index, scope.row)">
                        管理员
                    </el-button>-->
                    <el-button type="text" size="small" @click="showFn(scope.$index, scope.row)">
                        详情
                    </el-button>
                    <el-button type="text" size="small" @click="editGov(scope.$index, scope.row)">
                        修改
                    </el-button>
                    <el-button type="text" size="small" @click="deleteGov(scope.$index, scope.row)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[15, 30, 60, 100]"
                :page-size="pageSize" layout="total, sizes, prev, pager, next" :total="total">
            </el-pagination>
        </div>
    </article>
</template>
<script>
    import govService from '../../services/gov/govService.js'
    import DateRange from '../component/form/DateRangePicker.vue'
    import Region from '../component/select/Region.vue'

    function clearFn() {
        return {
            typeSelect: '',
            provinceSelect: '',
            citySelect: '',
            areaSelect: '',
            townSelect: '',
            villageSelect: '',
            name: ''
        }
    }
    export default {
        components: {
            DateRange,
            Region
        },
        data() {
            return {
                isInit: false,
                govType: ['', '系统', '政府'],
                types: [ // 部门类型
                    {
                        name: '政府',
                        id: 2
                    },
                    {
                        name: '系统',
                        id: 1
                    }
                ],
                editloading: false,
                details: null,
                showDetail: false, // 显示详情弹窗
                loading: false,
                currentPage: 1,
                pageSize: 15,
                govData: [],
                fetchParam: {
                    addate: this.$route.query.yesterday == undefined ? '' : this.$route.query.yesterday,
                    update: this.$route.query.yesterday == undefined ? '' : this.$route.query.yesterday,
                    typeSelect: '',
                    provinceSelect: '',
                    citySelect: '',
                    areaSelect: '',
                    townSelect: '',
                    villageSelect: '',
                    name: '',
                    pid: void -1,
                },
                total: 0
            }
        },
        activated() {
            this.getData().then(() => {
                xmview.setContentLoading(false)
            })
        },
        watch: {
            'fetchParam.name':function(){
                if(this.fetchParam.pid==undefined){
                    this.fetchParam.pid = -1
                }
            }
        },
        methods: {
            changeName(){

            },
            initFetchParam() {
                this.currentPage = 1
                this.fetchParam = clearFn()
            },
            // 修改企业信息
            editGov(index, row) {
                this.$router.push({
                    name: 'gov-edit',
                    params: {
                        id: row.id
                    }
                })
            },
            // 显示详情
            showFn(index, row) {
                govService.getGovInfo(row.id).then((ret) => {
                    this.details = ret
                    this.showDetail = true
                })
            },
            // 删除 GOV部门
            deleteGov(index, row) {
                govService.deleteGov(row.id).then((ret) => {
                    this.govData.splice(index, 1) //删除选中项
                })
            },
            adminPage(index, item) {
                this.$router.push({
                    name: 'gov-admin',
                    params: {
                        gov_id: item.id || 1
                    },
                    query: {
                        category: item.category

                    }
                })
            },
            // 添加
            add() {
                this.$router.push({
                    name: 'gov-add'
                })
            },
            handleSizeChange(val) {
                this.pageSize = val
                this.getData()
            },
            handleCurrentChange(val) {
                if (!this.isInit) {
                    this.isInit = true
                    return
                }
                this.currentPage = val
                this.getData()
            },
            getData() {
                if (this.fetchParam.provinceSelect!=='') {
                    this.fetchParam.pid = this.fetchParam.villageSelect || this.fetchParam.townSelect || this.fetchParam.areaSelect || this.fetchParam.citySelect || this.fetchParam.provinceSelect
                }
                if(!this.fetchParam.provinceSelect && !this.fetchParam.citySelect && !this.fetchParam.areaSelect && !this.fetchParam.townSelect && !this.fetchParam.villageSelect){
                    this.fetchParam.pid= -1
                }
                this.loading = true
                return govService.getSelectList({
                    pagesize: this.pageSize,
                    page: this.currentPage,
                    pid: this.fetchParam.pid,
                    category: this.fetchParam.typeSelect,
                    name: this.fetchParam.name,
                    time_start: this.fetchParam.addate,
                    time_end: this.fetchParam.update,
                    province_id: this.fetchParam.provinceSelect,
                    city_id: this.fetchParam.citySelect,
                    area_id: this.fetchParam.areaSelect,
                    town_id: this.fetchParam.townSelect,
                    village_id: this.fetchParam.villageSelect,

                }).then((ret) => {
                    this.govData = ret
                    this.total = ret.total
                }).then(() => {
                    this.loading = false
                })
            }
        }
    }
</script>