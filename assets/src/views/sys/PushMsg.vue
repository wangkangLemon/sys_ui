<!--部门人员管理-->
<style lang='scss' rel='stylesheet/scss'>
@import "../../utils/mixins/common";
@import "../../utils/mixins/topSearch";
@import "../../utils/mixins/showDetail";

#medical-index-container {
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
    <article id="medical-index-container">
         <!--添加/编辑表单-->
        <el-dialog v-model="addForm">
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item prop="title" label="推送标题" :label-width="formLabelWidth">
                    <el-input v-model="form.title" placeholder="请填写推送标题" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="content" label="推送内容" :label-width="formLabelWidth">
                    <el-input v-model="form.content" type="textarea" :autosize="{ minRows: 3, maxRows: 7}" placeholder="请填写推送内容"></el-input>
                </el-form-item>
                <el-form-item prop="url" label="跳转地址" :label-width="formLabelWidth">
                    <el-input v-model="form.url" placeholder="请填写跳转地址" auto-complete="off"></el-input>
                </el-form-item>
              
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addForm = false">取 消</el-button>
                <el-button type="primary" @click="submit('form')">确 定</el-button>
            </div>
        </el-dialog>
        <section class="manage-container">
            <!--<el-button type="primary" icon="plus" @click="$router.push({ name:'person-add',params:{sys_type:'add'}})">-->
            <el-button type="primary" icon="plus" @click="addAdmin">
                <i>推送</i>
            </el-button>
        </section>

        <article class="search">
            <section>
                <i>推送标题</i>
                <el-input v-model="fetchParam.title" placeholder="请输入推送标题" @keyup.enter.native="fetchData" ></el-input>
            </section>
            <section>
                <DateRange title="创建时间" :start="fetchParam.stime " :end="fetchParam.etime" @changeStart="val=> fetchParam.stime =val"
                    @changeEnd="val=> fetchParam.etime=val" :change="fetchData">
                </DateRange>
            </section>
        </article>

        <el-table class="data-table" v-loading="loadingData" :data="data" :fit="true"  border>
            
            <!--<el-table-column type="selection"></el-table-column> 左侧选择按钮-->

            <el-table-column min-width="300" prop="title" label="标题	" v-if="data">
            </el-table-column>
            <el-table-column min-width="300" prop="content" label="内容">
            </el-table-column>
            <el-table-column min-width="170" prop="url" label="跳转地址">
            </el-table-column>
            <el-table-column min-width="170" prop="addate" label="创建时间">
            </el-table-column>
            <el-table-column min-width="80" prop="admin_name" label="发布者">
            </el-table-column>
            <el-table-column fixed="right" width="80" label="操作">
                <template scope="scope">
                    <el-button @click="del(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--底部的page -->
        <el-pagination class="pagin" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="fetchParam.page" :page-size="fetchParam.pagesize" :page-sizes="[15, 30, 60, 100]" layout="sizes,total, prev, pager, next" :total="total">
        </el-pagination>
    </article>
</template>

<script>
import sysService from '../../services/sys/sysService'
import DateRange from '../component/form/DateRangePicker.vue'

function getFetchParam() {
    return {
        status: void 0, //  1-禁用 0-正常
        page: 1,
        pagesize: 15,
        title:'',
        stime:'',
        etime:'',
        type:''
    }
}
function clearForm() {
    return {
        type: 'default',
        title: '',
        content: '',
        url:'',
    }
}

export default {
    components: {
        DateRange,
    },
    data() {
        let validateMobile = (rule, value, callback) => {
                if (!(value || '').match(/^1[34578]\d{9}$/)) {
                    callback(new Error('请填写正确的手机号'))
                }
                callback()
            }
        return {
            roleTypes: [ // 管理员类型
                    {
                        name: '医院',
                        role_id: 1
                    },
                    {
                        name: '部门人员',
                        role_id: 0
                    }
                ],
            init:false,
            loadingData: false,
            data: [], // 表格数据
            total: 0,
            name:'',
            dialogVisible: false,
            fetchParam: getFetchParam(),
            dialogTree: {
                isShow: false,
                selectedId: void 0,
            },
            form: clearForm(),
            rules: {
                title: [
                    {required: true, message: '必须填写', trigger: 'blur'},
                    {
                        min: 1,
                        max: 30,
                        message: '长度不得大于 30个字' 
                    },{
                        pattern:  /\S$/,
                        message: '请输入非空格或非特殊字符的标题'
                    }
                ],
                content: [
                    {required: true,  message: '必须填写', trigger: 'blur'},
                    {
                        min: 1,
                        max: 120,
                        message: '长度不得大于 120个字' 
                    },{
                        pattern:  /\S$/,
                        message: '请输入非空格或非特殊字符的内容'
                    }
                ],
            },
            addForm: false, // 表单弹窗是否显示
            formLabelWidth: '120px', // 表单label的宽度

        }
    },
    activated () {
        this.fetchData()
    },
    methods: {
        //添加人员
        addAdmin () {
            this.form = clearForm()
            this.addForm = true
            },
        //添加人员提交
        submit (form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    // this.form.birthday = timeUtils.date2Str(this.form.birthday)
                    sysService.pushMsgCreate(this.form).then((ret) => {
                        xmview.showTip('success', '添加成功')
                    }).then(() => {
                        this.addForm = false
                        this.initFetchParam()
                        this.fetchData()
                        this.page = 1
                    }).catch((ret) => {
                        xmview.showTip('error', ret.message)
                    })
                } else {
                    return false
                }
            })
        },
        initFetchParam() {
            this.fetchParam = getFetchParam()
        },
        handleCurrentChange(val) {
            // if(this.init){                 //init是true进来 限制fetchData初始化不请求
                this.fetchParam.page = val
                this.fetchData()
            // }else{
            //     this.init = true
            // }
        },
        handleSizeChange( val) {
            this.fetchParam.pagesize = val
            this.fetchData()
        },
        fetchData(val) {
            return sysService.pushMsgList(this.fetchParam).then((ret) => {
                this.data = ret.data
                this.total = ret._exts.total
                this.loadingData = false
                xmview.setContentLoading(false)     
            })
        },
        // 禁用
        offline(index, row) {
            if(row.deleted == 0){
                xmview.showDialog(`你将要禁用管理员 <span style="color:red">${row.name}</span> 确认吗?`, () => {
                    row.disabled = 1
                    sysService.offline(row).then((ret) => {
                    })
                })
            }else{
                 xmview.showDialog(`医院 <span style="color:red">${row.name}</span> 已删除，无法禁用！`)
            }
        },
        // 启用
        online(index, row) {
            if(row.deleted == 0){
                xmview.showDialog(`你将要启用管理员<span style="color:red">${row.name}</span> 确认吗?`, () => {
                    row.disabled = 0
                    expertsService.online(row).then((ret) => {
                    })
                })
            }else{
                 xmview.showDialog(`医院 <span style="color:red">${row.name}</span> 已删除，无法启用！`)
            }
            
        },
        // 单条删除
        del(index, row) {
            xmview.showDialog(`你将要删除医院 <span style="color:red">${row.title}</span>  此操作不可恢复确认吗?`, () => {
                sysService.pushMsgDel(row.id).then(() => {
                    this.data.splice(index, 1)//删除选中项
                    row.deleted = 1
                    xmview.showTip('success', '操作成功')
                })
            })
        },
        Time(row, column, cellValue){
              return  this.timeFilter(row.addate) 
        },
        timeFilter( addate){
            let time
            this.data.forEach(v=> {3
                    time = addate.split(" ")[0]
                }, this);
            return time
        },

    },
}
</script>
