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
                .el-form-item{
                    .m{
                        font-size: 12px;
                        color:red;
                    }
                }
            }
        .el-tabs__header{
            max-width: 715px;
            margin: 0 ;
            
        }
        .bottom-btns {
            float: right;
        }
    }
</style>
<template>
    <main id="sys-form">
            <!-- <el-form label-width="120px" ref="form" :model="fetchParam"> -->
            <el-tabs type="border-card" @tab-click="handleClick" v-model="activeTab">
                <el-tab-pane label="课程简介" name="first">
                    <el-form label-width="120px" ref="formFirst" :model="fetchParam">
                        <el-form-item label="课程介绍">
                            <el-input v-model="fetchParam.description" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="课程封面图" prop="image">
                            <img :src="fetchParam.image | fillImgPath" width="200" height="112" v-show="fetchParam.image">
                            <span class="m">(必须上传)</span>
                            <CropperImg ref="imgcropper" :confirmFn="cropperImgSucc" :aspectRatio="16/9"></CropperImg>
                        </el-form-item>
                        <el-form-item label="课程标签">
                            <vTags v-model="courseTags"></vTags>
                        </el-form-item>
                        <!-- <el-form-item label="课程类别" prop="type">
                            <el-select v-model="fetchParam.type" placeholder="请选择">
                                <el-option label="私有课程" value="private"></el-option>
                                <el-option label="公开课程" value="public"></el-option>
                                <el-option label="工业课程" value="industry"></el-option>
                                <el-option label="政府课程" value="gov"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="素材类型" prop="material_type">
                            <el-select v-model="fetchParam.material_type" @change="typeChange" placeholder="请选择" >
                                <el-option label="视频" value="video"></el-option>
                                <el-option label="WORD" value="doc"></el-option>
                                <el-option label="PPT" value="ppt"></el-option>
                                <el-option label="PDF" value="pdf"></el-option>
                                <el-option label="PDF" value="text"></el-option>
                            </el-select>
                        </el-form-item> -->
                    </el-form>
                     <el-button style="float: right" type="primary" @click="btnNextClick">
                            <i>下一步</i>
                    </el-button>
                </el-tab-pane>
                <el-tab-pane label="概述" name="second">
                    <el-form label-width="120px" v-for="(item,index) in fetchParam.summary" :key="index" :model="item"  ref="test">
                        <el-form-item :label="item.name" >
                            <el-input  v-model="item.value" placeholder="请填写内容" auto-complete="off"></el-input>
                            <i class="m">{{item.must?'(必须填写)':''}}</i>
                        </el-form-item>
                    </el-form>
                    <div class="bottom-btns">
                        <el-button @click="btnPreClick">上一步</el-button>
                        <el-button style="float: right" type="primary" @click="btnNextClick">下一步</el-button>
                    </div>
                    <!-- <el-pagination 
                            class="pagin" 
                            @size-change="handleSizeChange" 
                            @current-change="handleCurrentChange" 
                            :current-page="fetchParam.page" 
                            :page-size="fetchParam.pagesize" 
                            :page-sizes="[10, 20, 30, 50]" layout="sizes,total, prev, pager, next" :total="total">
                        </el-pagination> -->
                </el-tab-pane>
                <el-tab-pane label="属性" name="three">
                    <el-form label-width="120px" v-for="(item,index) in fetchParam.attribute" :key="index" :model="item"  ref="test">
                        <el-form-item :label="item.name" >
                            <el-input  v-model="item.value"  type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="请填写内容" auto-complete="off"></el-input>
                            <i class="m">{{item.must?'(必须填写)':''}}</i>
                        </el-form-item>
                    </el-form>
                     <div class="bottom-btns">
                        <el-button @click="btnPreClick">上一步</el-button>
                        <el-button class="submit" type="primary" @click="handleSubmit">发布</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
    </main>
</template>

<script>
    import govService from '../../../services/gov/govService'
    import courseService from '../../../services/course/courseService.js'
    import vTags from '../../component/form/Tags.vue'
    import CropperImg from '../../component/upload/ImagEcropperInput.vue'
    export default {
        name: 'gov-authority',
        components: {
            CropperImg,vTags
        },
        data() {
            return {
                loadingData: false,
                activeTab: 'first',
                // currentData: {
                //     data: {},
                //     pindex: -1,
                //     index: -1
                // },
                fetchParam: getFetchParam(),
                courseTags: [],
                onValue:1,
                offValue:2,
                summary:[],
                attribute:[],
                zy:{},
                sx:{},
                fj:{},
                category_name:'',
                rules:{},
                // total: 0,
            }
        },
        watch:{
        },
        created() {
            xmview.setContentLoading(false);
            this.zy={
                summary:[ //概述
                    {
                        name: "中文名",
                        value: "",
                        must:1,
                    },
                    {
                        name: "拼音名",
                        value: "",
                        must:1,
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
                        value: "",
                        must:1,

                    },
                    {
                        name: "功效",
                        value: "",
                        must:1,
                    },
                    {
                        name: "主治",
                        value: ""
                    },
                    {
                        name: "临床应用",
                        value: "",
                        must:1,
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
                        value: "",
                        must:1,
                    },
                    {
                        name: "拼音名",
                        value: "",
                        must:1,
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
                        value: "",
                        must:1,
                    },
                    {
                        name: "取穴",
                        value: "",
                        must:1,
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
                        value: "",
                        must:1,
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
                        value: "",
                        must:1,
                    },
                    {
                        name: "拼音名",
                        value: "",
                        must:1,
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
                        value: "",
                        must:1,
                    },
                    {
                        name: "临床应用",
                        value: "",
                        must:1,
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
            if(!this.$route.params.herbalInfo){
                xmview.showTip('error', "请先选择中药栏目组最终级栏目添加")
                this.$router.push({'name':'course-manage-public'})
                return
            }
            let t=this.$route.params.herbalInfo.category_type
            let f=this.fetchParam
            if(t==3){
                this.category_name='中药'
                f.summary=this.zy.summary
                f.attribute=this.zy.attribute
            }
            else if(t==4){
                this.category_name='方剂'
                f.summary=this.fj.summary
                f.attribute=this.fj.attribute
            }
            else{
                this.category_name='腧穴'
                f.summary=this.sx.summary
                f.attribute=this.sx.attribute
            }
            xmview.setContentTile(`添加课程-中草药 ${ this.category_name}`)
            this.loadingData=false;
        },
        methods: {
             // 课程类型改变
            typeChange(val) {
                if (val === 'doc') {
                    this.accept = '.doc,.docx'
                } else if (val === 'ppt') {
                    this.accept = '.ppt,pptx'
                } else if (val === 'pdf') {
                    this.accept = '.pdf'
                }
            },
            // 图片裁切成功回调
            cropperImgSucc(imgData) {
                courseService.commonUploadImageBase({ image: imgData ,extpath:''}).then((ret) => {
                    this.fetchParam.image = ret.url
                })
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            btnPreClick() {
                if(this.activeTab=='three'){
                    this.activeTab = 'second' 
                    return
                }
                if(this.activeTab=='second'){
                    this.activeTab = 'first' 
                    return
                }
            },
            btnNextClick() {
                
                if(this.activeTab=='first'){
                    this.activeTab = 'second' 
                    return
                }
                if(this.activeTab=='second'){
                    this.activeTab = 'three' 
                    return
                }
                if(this.activeTab=='three') 
                // this.$refs['form'].validate((valid) => {
                    // if (!valid) return
                    // let req = govService.create
                    // if (this.$route.params.warrant_id) req = govService.update
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
                // })
            },
            handleSubmit(){
                let f=Object.assign({},this.fetchParam)
                f.summary.map(v=>{
                    console.log(v)
                    if(v.name=="中文名")  f.course_name=v.value
                    if(v.name=="拼音名")  f.pinyin=v.value
                    return
                })
          
                f.thumb=f.image
                f.tags = this.courseTags ? this.courseTags.join(',') : ''
                // console.log(this.fetchParam) 
                // console.log(JSON.stringify(this.fetchParam))
       
                if (f.course_name ==''||f.pinyin =='') {
                    xmview.showTip('error', "请先填写 ‘概述 - 中文名、拼音名’")
                    return
                }
                let fa=f.attribute
                if(this.category_name=='中药'){
                    fa.map(v=>{
                        if(v.name=="性味归经")  this.rules.xwgz=v.value
                        if(v.name=="功效")  this.rules.gx=v.value
                        if(v.name=="临床应用")  this.rules.lcyy=v.value
                        return true
                    })
                    console.log(this.rules)
                    if((this.rules.xwgz==''||this.rules.gx==''||this.rules.lcyy==''||f.image=='')){
                        xmview.showTip('error', "请先填写 ‘ 课程简介 - 课程封面图；属性 - 性味归经、功效、临床应用 ‘")
                        return 
                    }
                }else if(this.category_name=='方剂'){
                    fa.map(v=>{
                        if(v.name=="组成")  this.rules.zc=v.value
                        if(v.name=="临床应用")  this.rules.lcyy=v.value
                        return true
                        
                    })
                    console.log(this.rules)
                    if((this.rules.zc==''||this.rules.lcyy=='')){
                        xmview.showTip('error', "请先填写 ‘ 属性 - 组成、临床应用 ‘")
                        return 
                    }
                }else if(this.category_name=='腧穴'){
                    fa.map(v=>{
                        if(v.name=="定位")  this.rules.dw=v.value
                        if(v.name=="取穴")  this.rules.qx=v.value
                        if(v.name=="操作")  this.rules.cz=v.value
                        return true
                        
                    })
                    console.log(this.rules)
                    if((this.rules.dw==''||this.rules.qx==''||this.rules.cz==''||f.image=='')){
                        xmview.showTip('error', "请先填写 ‘ 课程简介 - 课程封面图；属性 - 定位、取穴、操作 ‘")
                        return 
                    }

                }
                let s =f.summary.filter(v=>{
                    if (v.name =='中文名' || v.name == '拼音名') {
                        return true
                    }
                    return v.value
                })
                console.log(JSON.stringify(s))
                f.summary=s

                let a =f.attribute.filter(v=>{
                    return v.value
                })
                console.log(JSON.stringify(a))
                f.attribute=a

                let p,data,cid
                data=JSON.stringify(f)
                console.log(data)
                cid=this.$route.params.herbalInfo.category_id
                if (this.fetchParam.contentid) {  // 如果是编辑
                    param.course_id=''
                    p = courseService.editHerbal({
                        category_id:cid,
                        data:data,
                        noJson:0
                        }).then((ret) => {
                        this.$router.push({'name':'course-manage-public'})
                    })
                } else {  //新建
                    p = courseService.addHerbal({
                        category_id:cid,
                        data:data,
                        noJson:0
                        }).then((ret) => {
                        this.$router.push({'name':'course-manage-public'})
                        this.fetchParam.contentid = ret.contentid //?
                    })
                }
            }
        }
    }

    function getFetchParam() {
        return {
                // pagesize:10,
                // page:1,
                course_name:'',
                pinyin:'',
                thumb:'',
                image:'',
                tags:'',
                description:'',
                type:'public',
                material_type:'text',
                summary:[],
                attribute:[]
        }
    }

</script>