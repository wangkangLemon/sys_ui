<!--区块数据-选取内容-课程栏目-->
<style lang="scss">
    .course-select-container {
        .el-icon-caret-bottom {
            text-align: center;
            text-align-last: center;
        }
    }
</style>
<template>
    <el-cascader class="course-select-container" ref="container" v-loading="loading" :options='options' :show-all-levels="false" :reqFun="reqFun"
        :placeholder="placeholder" @active-item-change="handleItemChange" :clearable="true" @change="setCurrVal">
    </el-cascader>
</template>

<script>
    import treeUtils from '../../../utils/treeUtils'
    import cateService from '../../../services/section/cateService'
    import examService from '../../../services/exam/examService'
    export default {
        props: {
            value: [String, Number, Array],
            autoClear: {
                type: Boolean,
                default: false
            },
            onchange: Function,
            placeholder: {
                type: String,
                default: '请选择'
            },
            showNotCat: { // 是否显示未分类的选项
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: ''
            },
            reqFun:Function,
        },
        data() {
            return {
                loading: false,
                options: [],
                currVal: this.value,
                govid: void 0, // 企业id
                lastData: void 0,
            }
        },
        watch: {
            'value' (val) {  //点击之后选中的值
                this.setCurrVal(val)
            },
            'currVal' (val, old) { //高亮选中值
                this.$emit('input', val.length > 0 ? parseInt(val[val.length - 1]) : val)
                this.onchange && this.onchange(val)
            }
        },
        mounted() {
            //  alert(this.reqFun)
            this.$refs.container.$el.addEventListener('click', () => {
                if (this.loading || this.options.length > 0) return
                if (this.lastData) {
                    this.options = this.lastData
                } else {
                    // this.loading = true //这是在请求数据前打开loading动画2-28打开
                    //获取数据的方法
                    // let req = cateService.fetchData
                    // // debugger
                   
                    // if(this.req=='sec') req=cateService.fetchData
                    // else if(this.req=='exam') req=examService.fetchChapterCategory
                    this.reqFun().then((ret) => {
                        var obj = {};
                        ret.forEach(v => {
                            if (v.level == 0) {
                                let t = {
                                    data: v,
                                    label: v.name,
                                    value: v.id,
                                }
                                obj[v.id] = t;
                                this.options.push(t);
                            }
                        })
                        var arr = {};
                        ret.forEach(v => {
                            if (v.level == 1) {
                                obj[v.pid].children?
                                obj[v.pid].children.push({
                                    data: v,
                                    label: v.name,
                                    value: v.id
                                }):
                                 obj[v.pid].children = [{
                                    data: v,
                                    label: v.name,
                                    value: v.id
                                }]
                            }
                        })
                        this.loading = false
                        xmview.setContentLoading(false);
                    })

                    // cateService.getCategoryTree({type: this.type, pid:0})
                        //     .then(ret => {
                        //         // 不显示未分类那一项
                        //         if (!this.showNotCat) {
                        //             ret = ret.filter((item) => {
                        //                 return item.id != 0
                        //             })
                        //         }
                        //         this.options = treeUtils.arr2Cascader(ret, 0, void 0, void 0, 'name', 'id')
                        //         this.loading = false
                        //     })
                }
            })
        },
        deactivated() {
            if (this.autoClear && this.options.length > 0) {
                this.lastData = this.options
                this.options = []
            }
        },
        methods: {
            setCurrVal(val) { //在请求子集时判断设置值
                console.log(this.currVal)
                if (!val) this.$refs.container.clearValue(new window.Event('click'))
                if (this.currVal == val || !val) return
                this.currVal = val
                console.log(this.currVal)
            },
            handleItemChange(val) {
                // console.log(val)
                    // if (val.length < 1) return
                    // // 递归找到该项
                    // // console.log(val)
                    // let currItem = treeUtils.findItem(this.options, val, 'value') //拿到当前项 

                    // //if (!currItem.children || (currItem.children.length > 0 && currItem.children[0].value)) return
                    // var arr = []
                    // cateService.fetchData({
                    //     pid: val[val.length - 1],
                    //     level: -1,
                    // }).then((ret) => {
                    //     var arr = ret.map(v => {
                    //         v.label = v.name
                    //         v.value = v.id
                    //         v.children = v.ended ? null : [] //是否最终菜单？是为nulgl 否则为一个数组
                    //         return v
                    //     })

                    //     // currItem.children = arr

                    //     this.loading = false
                    //     xmview.setContentLoading(false)
                    // })


                    // cateService.getCategoryTree({type: this.type, govid: this.govid, id: val[val.length - 1]})//id: val[val.length - 1 ]
                    // cateService.getCategoryTree({type: this.type, govid: this.govid, id: val[val.length - 1]})
                    //     .then(ret => {
                    //         // 重新组合数据
                    //         ret.map((item) => {
                    //             item.label = item.name
                    //             item.value = item.id
                    //             item.children = item.has_children ? [{label: '加载中...'}] : null
                    //         })
                    //         currItem.children = ret
                    //     })
            },
            clearData() {
                this.lastData = this.options
                this.options = []
            },
         

        },
        components: {}
    }
</script>