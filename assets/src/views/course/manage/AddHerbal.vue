<!--课程表单：添加/修改-->
<style lang="scss" rel="stylesheet/scss">
    @import "../../../utils/mixins/common";
    #sys-form {
        @extend %content-container;
       .el-form  {
            // margin: 10px 0;
            max-width: 700px;
        }
          .el-tab-pane {
                margin:20px 0;
                max-width: 700px;
            }
        .el-tabs__header{
            max-width: 715px;
            margin: 0 ;
        }
    }
</style>
<template>
    <main id="sys-form">
            <!-- <el-form label-width="120px" ref="form" :model="fetchParam"> -->
            <el-tabs type="border-card" @tab-click="handleClick" >
                <el-tab-pane label="概述">
                    <el-form label-width="120px" v-for="(item,index) in summary" :key="index" :model="item"  ref="test">
                        <el-form-item :label="item.name" >
                            </i><el-input  v-model="item.value" placeholder="请填写内容" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <!-- <el-pagination 
                            class="pagin" 
                            @size-change="handleSizeChange" 
                            @current-change="handleCurrentChange" 
                            :current-page="fetchParam.page" 
                            :page-size="fetchParam.pagesize" 
                            :page-sizes="[10, 20, 30, 50]" layout="sizes,total, prev, pager, next" :total="total">
                    </el-pagination> -->
                </el-tab-pane>
                <el-tab-pane label="课程简介">
                       1111
                </el-tab-pane>
                <el-tab-pane label="属性" name="second">
                    <el-form label-width="120px" v-for="(item,index) in attribute" :key="index" :model="item"  ref="test">
                        <el-form-item :label="item.name" >
                            </i><el-input  v-model="item.value" placeholder="请填写内容" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
            
     
        <el-button @click="a"></el-button>
    </main>
</template>

<script>
    import govService from '../../../services/gov/govService'
    export default {
        name: 'gov-authority',
        data() {
            return {
                loadingData: false,
                currentData: {
                    data: {},
                    pindex: -1,
                    index: -1
                },
                fetchParam: getFetchParam(),
                onValue:1,
                offValue:2,
                summary:[],
                attribute:[],
                zy:{},
                sx:{},
                fj:{},
                category_name:''
                // total: 0,
            }
        },
        watch:{
            'summary'(){
                console.log(this.summary)
            }
        },
        created() {
            xmview.setContentLoading(false);
            this.zy={
                summary:[ //概述
                    {
                        name: "中文名",
                        value: ""
                    },
                    {
                        name: "拼音名",
                        value: ""
                    },
                    {
                        name: "别名",
                        value: ""
                    },
                    {
                        name: "拉丁学名",
                        value: ""
                    },
                    {
                        name: "学名",
                        value: ""
                    },
                    {
                        name: "界",
                        value: ""
                    },
                    {
                        name: "门",
                        value: ""
                    },
                    {
                        name: "纲",
                        value: ""
                    },
                    {
                        name: "目",
                        value: ""
                    },
                    {
                        name: "科",
                        value: ""
                    },
                    {
                        name: "属",
                        value: ""
                    },
                    {
                        name: "种",
                        value: ""
                    },
                    {
                        name: "制法",
                        value: ""
                    },
                            {
                        name: "主要分子式",
                        value: ""
                    },
                    {
                        name: "药材性状",
                        value: ""
                    },
                    {
                        name: "鉴别",
                        value: ""
                    },
                    {
                        name: "分布区域",
                        value: ""
                    },
                    {
                        name: "产地",
                        value: ""
                    },
                    {
                        name: "采收时间",
                        value: ""
                    },
                    {
                        name: "入药部位",
                        value: ""
                    },
                    {
                        name: "三品",
                        value: ""
                    },
                    {
                        name: "用量",
                        value: ""
                    },
                    {
                        name: "毒性",
                        value: ""
                    },
                    {
                        name: "贮藏",
                        value: ""
                    },
                    {
                        name: "禁忌",
                        value: ""
                    },
                    {
                        name: "来源",
                        value: ""
                    },
                    {
                        name: "植物形态",
                        value: ""
                    },
                    {
                        name: "加工炮制",
                        value: ""
                    },
        
                    {
                        name: "性状鉴别",
                        value: ""
                    },
                    {
                        name: "化学成分",
                        value: ""
                    },
                    {
                        name: "药理作用",
                        value: ""
                    }
                ],
                attribute:[ //属性
                           {
                        name: "属性",
                        value: ""
                    },
                    {
                        name: "性味归经",
                        value: ""
                    },
                    {
                        name: "功效",
                        value: ""
                    },
                    {
                        name: "主治",
                        value: ""
                    },
                    {
                        name: "临床应用",
                        value: ""
                    },
                    {
                        name: "用法用量",
                        value: ""
                    },
                    {
                        name: "使用注意",
                        value: ""
                    },
                    {
                        name: "文献论述",
                        value: ""
                    },
                    {
                        name: "处方举例",
                        value: ""
                    },
                    {
                        name: "不良反应",
                        value: ""
                    }
                ]
            }
            this.sx={
                summary:[ //概述
                    {
                        name: "中文名",
                        value: ""
                    },
                    {
                        name: "拼音名",
                        value: ""
                    },
                    {
                        name: "别名",
                        value: ""
                    },
                    {
                        name: "国际编号",
                        value: ""
                    },
                    {
                        name: "出处",
                        value: ""
                    },
                    {
                        name: "穴名释疑",
                        value: ""
                    },
                    {
                        name: "隶属经络",
                        value: ""
                    },
                    {
                        name: "类型",
                        value: ""
                    },
                    {
                        name: "部位",
                        value: ""
                    },
                    {
                        name: "特异性",
                        value: ""
                    },
                   
                ],
                attribute:[ //属性
                    {
                        name: "定位",
                        value: ""
                    },
                    {
                        name: "取穴",
                        value: ""
                    },
                    {
                        name: "局部解剖",
                        value: ""
                    },
                    {
                        name: "功效",
                        value: ""
                    },
                    {
                        name: "主治",
                        value: ""
                    },
                    {
                        name: "操作",
                        value: ""
                    },
                    {
                        name: "注意事项",
                        value: ""
                    },
                    {
                        name: "常用配伍",
                        value: ""
                    },
                    {
                        name: "文献摘要",
                        value: ""
                    },
                    {
                        name: "现代研究",
                        value: ""
                    }
                ]
            }
            this.fj={
                summary:[ //概述
                    {
                        name: "中文名",
                        value: ""
                    },
                    {
                        name: "拼音名",
                        value: ""
                    },
                    {
                        name: "出处",
                        value: ""
                    },
                    {
                        name: "分类",
                        value: ""
                    }
                ],
                attribute:[ //属性
                    {
                        name: "组成",
                        value: ""
                    },
                    {
                        name: "临床应用",
                        value: ""
                    },
                    {
                        name: "功用",
                        value: ""
                    },
                    {
                        name: "主治",
                        value: ""
                    },
                    {
                        name: "方解",
                        value: ""
                    },
                    {
                        name: "配伍特点",
                        value: ""
                    },
                    {
                        name: "辨证要点",
                        value: ""
                    },
                    {
                        name: "加减变化",
                        value: ""
                    },
                    {
                        name: "使用注意",
                        value: ""
                    },
                    {
                        name: "附方",
                        value: ""
                    },
                    {
                        name: "文献摘要",
                        value: ""
                    },
                    {
                        name: "临床报道",
                        value: ""
                    },
                    {
                        name: "实验研究",
                        value: ""
                    },
                    {
                        name: "方歌",
                        value: ""
                    }
                ]
            }
            // this.summary=this.zy.summary
            // this.attribute=this.zy.attribute
            console.log(this.$route.params)
            let t=this.$route.params.herbalInfo.category_type
            if(t==3){
                this.category_name='中药'
                this.summary=this.zy.summary
                this.attribute=this.zy.attribute
            }
            else if(t==4){
                this.category_name='腧穴'
                this.summary=this.sx.summary
                this.attribute=this.sx.attribute
            }
            else{
                this.category_name='方剂'
                this.summary=this.fj.summary
                this.attribute=this.fj.attribute
            }
            xmview.setContentTile(`添加课程-中草药 ${ this.category_name}`)
            

            // this.total=this.summary.length
            // govService.getAuthorize().then((ret) => {
            //     this.fetchParam=getOriginData()
            //     ret.map((v,i)=>{
            //         if(v.access_type==1){this.fetchParam.value1=v.visibled}
            //         if(v.access_type==2){this.fetchParam.value2=v.visibled}
            //     })
            // })
            this.loadingData=false;
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            },
            a(){
                 console.log(this.summary)
            },
            handleCurrentChange(val) {
                this.fetchParam.page = val
                // this.fetchData()
            },
            handleSizeChange(val) {
                this.fetchParam.pagesize = val
                // this.fetchData()
            },
            change($event,num){
                console.log($event)
                console.log(num);
            },
            changemx($event,num){
                console.log(name,num,$event)
                let param={
                    access_type :num,
                    visibled :$event
                }
                  console.log(param)
                govService.authorize(param).then((ret) => {
                        this.$refs['form'].resetFields();
                        // this.fetchParam = {
                        //     data: [],
                        //     pindex: -1,
                        //     index: -1
                        // }
                    })
            },
            btnNextClick() {
                this.$refs['form'].validate((valid) => {
                    if (!valid) return
                    let req = govService.create
                    if (this.$route.params.warrant_id) req = govService.update
                    console.log(this.fetchParam)
                    // req(this.fetchParam).then((ret) => {
                    //     this.$refs['form'].resetFields();
                    //     this.currentData = {
                    //         data: [],
                    //         pindex: -1,
                    //         index: -1
                    //     }
                    //     if (!this.fetchParam.id) this.fetchParam.id = ret.id;
                    //     this.$router.push({'name': 'gov-warrant'})
                    // })
                })
            }
        }
    }

    function getFetchParam() {
        return {
                pagesize:10,
                page:1,
        }
    }

</script>