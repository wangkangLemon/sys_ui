<!--课程栏目-->
<style lang="scss">
    .course-select-container {
        .el-icon-caret-bottom {
            text-align: center;
            text-align-last: center;
        }
    }
</style>
<template>
    <el-cascader class="course-select-container" ref="container" v-loading="loading" :options='options' :show-all-levels="false"
        :placeholder="placeholder" @active-item-change="handleItemChange" :clearable="true" @change="setCurrVal"></el-cascader>
</template>

<script>
    import treeUtils from '../../../utils/treeUtils'
    import courseService from '../../../services/course/courseService.js'
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
            }
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
            'value' (val) {
                this.setCurrVal(val)
            },
            'currVal' (val, old) {
                this.$emit('input', val.length > 0 ? parseInt(val[val.length - 1]) : val)
                this.onchange && this.onchange(val)
            }
        },
        mounted() {
            this.$refs.container.$el.addEventListener('click', () => {
                if (this.loading || this.options.length > 0) return

                if (this.lastData) {
                    this.options = this.lastData

                } else {

                    this.loading = true
                    // console.log(this.govid, this.type)
                    //获取数据的方法
                    courseService.search_cate({
                        level: 1
                    }).then((ret) => {
                        ret.forEach(v => {
                            this.options.push({
                                data: v,
                                label: v.name,
                                value: v.id,
                                children: v.ended ? null : []
                            })
                        })
                        this.loading = false
                        xmview.setContentLoading(false)
                    })

                    // courseService.getCategoryTree({govid: this.govid, type: this.type})

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
        activated() {},
        methods: {
            setCurrVal(val) {
                // console.log(val)
                if (!val) this.$refs.container.clearValue(new window.Event('click'))
                if (this.currVal == val || !val) return
                this.currVal = val
            },
            handleItemChange(val) {
                if (val.length < 1) return
                // 递归找到该项



                let currItem = treeUtils.findItem(this.options, val, 'value')

                //if (!currItem.children || (currItem.children.length > 0 && currItem.children[0].value)) return

                var arr = []
                courseService.search_cate({
                    pid: val[val.length-1]
                }).then((ret) => {
                    // this.options.forEach(v => {
                    //     if (v.value == val[val.length-1]) {
                    //         ret.forEach(retItem => {
                    //             console.log(retItem)
                    //             arr.push({
                    //                 data: retItem,
                    //                 label: retItem.name,
                    //                 value: retItem.id,
                    //                 children: retItem.ended ? null : []
                    //             })
                    //         })
                    //         v.children = arr
                    //     }
                    // })

                    var arr = ret.map(v=>{
                        v.label = v.name
                        v.value = v.id
                        v.children = v.ended ? null : []
                        return v
                    })
                    // console.log(currItem)

                    currItem.children = arr

                    this.loading = false
                    xmview.setContentLoading(false)
                })





                // courseService.getCategoryTree({type: this.type, govid: this.govid, id: val[val.length - 1]})//id: val[val.length - 1 ]
                // courseService.getCategoryTree({type: this.type, govid: this.govid, id: val[val.length - 1]})
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
            }
        },
        components: {}
    }
</script>