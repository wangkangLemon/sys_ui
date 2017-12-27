<!--公告-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../utils/mixins/mixins";
    @import "../../utils/mixins/topSearch";
    .analysis-company-manage {
        .search {
            @extend %top-search-container;
        }
        .box-card {
            margin-top: 20px;
            .el-card__header {
                padding: 10px 15px;
                background: #f0f3f5;
            }
            .block {
                text-align: right;
                margin-top: 15px;
            }
            a {
                display: block;
                color: #20a0ff;
                font-size: 14px;
                margin-right: 10px;
                text-decoration: none;
            }
        }
        .course-analytics {
            @extend %justify;
            margin: 15px 0;
            height: 120px;
            border: 1px solid #ddd;
            background: #fff;
            border-radius: 5px;
            padding: 25px 40px;
            > div {
                display: inline-block;
                vertical-align: top;
                height: 100%;
                border-right: 1px solid #ddd;
                &:last-of-type {
                    border-right: none;
                }
                width: 18%;
                > * {
                    display: inline-block;
                    vertical-align: top;
                }
                .sign {
                    width: 55px;
                    height: 55px;
                    text-align: center;
                    text-align-last: center;
                    border-radius: 50%;
                    margin:10px 20px;
                    line-height: 76px;
                }
                > div {
                    margin-top: 10px;
                    > i {
                        font-size: 12px;
                        color: #666;
                    }
                    > p {
                        font-size: 25px;
                        color: #333;
                    }
                }
                .red {
                    color:red;
                }
                .green {
                    color:green;
                }
            }
        }
    }
</style>
<template>
    <article class="analysis-company-manage">
        <el-card class="box-card">
            <!--<section class="course-analytics" v-if="statData != null">
                <div>
                    <div>
                        <i>今日登陆</i>
                        <p>{{statData.today_num}}</p>
                        </div>
                </div>
                <div>
                    <div>
                        <i>昨日登录</i>
                        <p>{{statData.yesterday_num}}</p>
                        <span v-if="statData.today_status == 0">无变化</span>
                        <span class="el-icon-caret-top red" v-if="statData.today_status == 1">{{statData.today_ratio}}%</span>
                        <span class="el-icon-caret-bottom green" v-if="statData.today_status == 2">{{statData.today_ratio}}%</span>
                        同比上周
                    </div>
                </div>
                <div>
                    <div>
                        <i>本周登录</i>
                        <p>{{statData.week_num}}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <i>上周登录</i>
                        <p>{{statData.lastweek_num}}</p>
                        <span v-if="statData.week_status == 0">无变化</span>
                        <span class="el-icon-caret-top red" v-if="statData.week_status == 1">{{statData.week_ratio}}%</span>
                        <span class="el-icon-caret-bottom green" v-if="statData.week_status == 2">{{statData.week_ratio}}%</span>
                        同比上周
                    </div>
                </div>
                <div>
                    <div>
                        <i>本月登录</i>
                        <p>{{statData.month_num}}</p>
                    </div>
                </div>
            </section>-->
            <section class="search">
                <!--<section>
                    <label>姓名</label>
                    <el-input class="name" @change="getData" v-model="search.name"></el-input>
                    </section>-->
                    <!--<section>
                        <label>账号</label>
                        <el-input class="name" @change="getData" v-model="search.name"></el-input>
                    </section>-->
                    <!--<section>
                        <i>部门</i>
                        <CompanySelect  :change="getData" v-model="search.gov_id"
                                        v-on:change="val=>search.gov_id=val">
                        </CompanySelect>
                    </section>-->

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

                <!--<section>
                        <i>角色</i>
                        <el-select clearable v-model="search.role_id" @change="getData">
                            <el-option label="管理员" value="1"></el-option>
                            <el-option label="部门人员" value="0"></el-option>
                        </el-select>
                    </section>-->
                    <!--<DateRange title="登录时间" :start="search.createTime" :end="search.endTime"
                            v-on:changeStart="val=> search.createTime=val"
                            v-on:changeEnd="val=> search.endTime=val"
                            :change="getData">
                    </DateRange>-->
            </section>
            <el-table
                    v-loading="loading"
                    border
                    :data="manageData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        min-width="180"
                        label="所属部门" >
                        <template scope="scope">
                            <span>{{scope.row.gov_name? scope.row.gov_name: "暂无部门"}}</span>
                        </template>
                </el-table-column>
                <el-table-column
                        min-width="180"
                        label="注册人数">
                        <template scope="scope">
                            <router-link tag="a"  :to="{name: 'data-report-user-user', params: {gov_id: scope.row.gov_id,active:-1}}">
                            {{scope.row.user_cnt}}
                            <!--占坑-->
                            </router-link>
                        </template>
                </el-table-column>
                <el-table-column
                        min-width="180"
                        label="已登录人数">
                        <template scope="scope">
                            <!--<span @click="loginDetail(scope.$index, scope.row)">{{scope.row.logined_cnt}}</span>-->
                            <router-link tag="a"  :to="{name: 'data-report-userlogin-user', params: {gov_id: scope.row.gov_id,active:1}}">
                            {{scope.row.logined_cnt}}
                            </router-link>
                        </template>
                </el-table-column>
                <el-table-column
                        min-width="180"
                        label="未登录人数">
                        <template scope="scope">
                            <!--<span @click="nologinDetail(scope.$index, scope.row)">{{scope.row.nologin_cnt}}</span>-->
                            <router-link tag="a"  :to="{name: 'data-report-nouserlogin-user', params: {gov_id: scope.row.gov_id,active:0}}">
                            {{scope.row.nologin_cnt}}
                            </router-link>
                        </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[15, 30, 60, 100]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next"
                        :total="total">
                </el-pagination>
            </div>
        </el-card>
    </article>
</template>
<script>
    import DateRange from '../component/form/DateRangePicker.vue'
    import CompanySelect from '../component/select/IndustryCompany.vue'
    import DepSelect from '../component/select/Department.vue'
    import govService from '../../services/gov/govService.js'
    import Region from '../component/select/Region.vue'
    function clearFn() {
        return {
            name: '',
            user_name: '',
            gov_id: '',
            role_id: '',
            createTime: '',
            endTime: '',

            typeSelect: '',
            provinceSelect: '',
            citySelect: '',
            areaSelect: '',
            townSelect: '',
            villageSelect: '',
        }
    }

    export default {
        components: {
            DepSelect,
            CompanySelect,
            DateRange,
            Region
        },
        data () {
            return {
                loading: false,
                manageData: [],
                statData: null,
                currentPage: 1,
                pageSize: 15,
                total: 0,
                search: clearFn(),
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
                    level:void 0,
                },
                props: {
                    unit: {   // 可选字段，有默认值
                        default: '0000'
                    }
                }
            }
        },
        mounted () {
            // govService.getCompanyManageStat().then((ret) => {
            //     this.statData = ret.data
            // }).then(() => {
            //     xmview.setContentLoading(false)
            // })
        },
        activated () {
            xmview.setContentLoading(false)               //关闭遮罩
            this.getData().then(() => {
                xmview.setContentLoading(false)
            })
        },
        methods: {
            userDetail(index, item){
                this.$router.push({
                    name: 'data-report-user-user',
                    params: {
                        gov_id: item.gov_id || 1,
                        active:-1
                    }
                })
            },
            loginDetail(index, item){
                this.$router.push({
                    name: 'data-report-userlogin-user',
                    params: {
                        gov_id: item.gov_id || 1,
                        active:1
                    }
                })
            },
            nologinDetail(index, item){
                this.$router.push({
                    name: 'data-report-nouserlogin-user',
                    params: {
                        gov_id: item.gov_id || 1,
                        active:0
                    }
                })
            },
            initFetchParam() {
                this.currentPage = 1
                this.search = clearFn()
            },
            handleSizeChange (val) {
                this.pageSize = val
                this.getData()
            },
            handleCurrentChange (val) {
                this.currentPage = val
                this.getData()
            },
            getData () {
                //先拿到省市区id 再请求这个id的详细信息
                 if (this.fetchParam.provinceSelect!=='') {
                    this.fetchParam.level= 1 //0
                    if (this.fetchParam.citySelect!==''){
                        this.fetchParam.level= 2 //1
                        if (this.fetchParam.areaSelect!==''){
                            this.fetchParam.level= 3 //2
                            if (this.fetchParam.townSelect!==''){
                                this.fetchParam.level= 4 //3
                                if (this.fetchParam.villageSelect!==''){
                                    this.fetchParam.level= 4
                                }
                            }
                        }
                    }
                    //根据 pid 拿到 gov_id 参数
                    this.fetchParam.pid = this.fetchParam.gov_id=this.fetchParam.villageSelect || this.fetchParam.townSelect || this.fetchParam.areaSelect || this.fetchParam.citySelect || this.fetchParam.provinceSelect

                }
                if(!this.fetchParam.provinceSelect && !this.fetchParam.citySelect && !this.fetchParam.areaSelect && !this.fetchParam.townSelect && !this.fetchParam.villageSelect){
                    // this.fetchParam.pid= -1
                }

                this.loading = true
                return govService.getReportUserlogin({
                    page: this.currentPage,
                    pagesize: this.pageSize,
                    name: this.search.name,
                    user_name: this.search.user_name,
                    gov_id: this.fetchParam.pid,
                    role_id: this.search.role_id,
                    date_start: this.search.createTime,
                    date_end: this.search.endTime,
                    level:this.fetchParam.level,
                }).then((ret) => {
                    this.total = ret.total
                    this.manageData = ret
                }).then(() => {
                    this.loading = false
                })
            }
        }
    }
</script>
