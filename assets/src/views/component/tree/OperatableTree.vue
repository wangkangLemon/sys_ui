<!--课程栏目-->

<template>
    <el-tree v-loading="loading" :data="data" :expand-on-click-node="false" @node-click="handleNodeClick"
             @node-expand="handleNodeExpand" :highlight-current="selectable">
    </el-tree>
</template>

<script>
    import treeUtils from '../../../utils/treeUtils'

    export default{
        props: {
            value: Array,
            getData: Function, // 获取数据 返回promise
        },
        data () {
            return {
                // data: this.value,
                data: [],
                loading: false,
                selectable: true, // 是否可选中
            }
        },
        watch: {
            // 'value' (val) {
            //     if (val.length != this.data.length) {
            //         this.setCurrVal(val)
            //     }
            // }
        },
        created () {
            this.getData({id : 'tree', type :'course', filter : true , pid :0 , level:-1}).then(ret=>{
               ret.data.forEach(v => {
                   console.log(v)
                    this.data.push({
                        data: v,
                        label: v.name,
                        value: v.id,
                        children: v.ended ? null : []  //是否最终菜单？
                    })
               })
               this.loading = false
               xmview.setContentLoading(false)
                console.log(13)
               console.log(this.data)













            })
            if (!this.value || this.value.length < 1)
                this.initData()
        },
        deactivated () {
        },
        methods: {
            handleNodeExpand (data, node, nodeDom) {
                // 如果是有children 并且只有一个[加载中...]的一项 则去服务器加载数据
                if (data.children && data.children[0].value)
                    return

                this.initData(data)
            },
            handleNodeClick (data, node, store) {

                 if (data.data.ended) return
                    let currItem = treeUtils.findItem(this.data, val, 'value')   //拿到当前项 
                    var arr = []
                    courseService.search_cate({
                        pid: val[val.length - 1],
                        level:-1,
                    }).then((ret) => {
                        var arr = ret.map(v=>{
                            v.label = v.name
                            v.value = v.id
                            v.children = v.ended ? null : [] //是否最终菜单？是为nulgl 否则为一个数组
                            return v
                        })
                        currItem.children = arr
                        this.loading = false
                        xmview.setContentLoading(false)
                   })
                // this.$emit('onNodeClick', {data, node, store})
                // // 根节点无法被选中
                // if (data.value == 0) return
                // this.selectable = true
            },
            removeItem (item, parent) {
                // 父节点没有children 说明当前是根节点
                if (!parent.data.children) {
                    this.data = this.data.filter((curr) => {
                        return curr.value != item.value
                    })
                } else {
                    parent.data.children = parent.data.children.filter((curr) => {
                        return curr.value != item.value
                    })

                    if (parent.data.children.length < 1) parent.data.children = null
                }
                // 重新给父容器赋值  不然数据不同步
                this.$emit('input', this.data)
            },
            setCurrVal (val) {
                if (val === this.data) return
                this.data = val
                this.$emit('input', val)
            },
            initData (parentNode) {
                let params = parentNode ? {id: parentNode.value} : {}
                this.loading = true
                return this.getData(params).then(ret => {
                    consoel.log(ret)
                    xmview.setContentLoading(false)
                    if (!parentNode) {
                        this.setCurrVal(treeUtils.arr2Cascader(ret.data, 0, void 0, void 0, 'name', 'id'))
                        console.log(params)
                        // courseService.search_cate({
                        //     pid: val[val.length-1]
                        // }).then((ret) => {
                        //     // this.options.forEach(v => {
                        //     //     if (v.value == val[val.length-1]) {
                        //     //         ret.forEach(retItem => {
                        //     //             console.log(retItem)
                        //     //             arr.push({
                        //     //                 data: retItem,
                        //     //                 label: retItem.name,
                        //     //                 value: retItem.id,
                        //     //                 children: retItem.ended ? null : []
                        //     //             })
                        //     //         })
                        //     //         v.children = arr
                        //     //     }
                        //     // })

                        //     var arr = ret.map(v=>{
                        //         v.label = v.name
                        //     v.value = v.id
                        //     v.children = v.ended ? null : []
                        //     return v
                        // })

        
                    } else {
                        ret.map((item) => {
                            item.label = item.name
                            item.value = item.id
                            item.item = item
                            item.children = item.has_children ? [{label: '加载中...'}] : null
                        })
                        parentNode.children = ret
                    }
                }, () => {
                }).then(() => {
                    this.loading = false
                    this.$forceUpdate()
                })
            },
            // 清空选中项
            clearSelected () {
                this.selectable = false
            },
        },
        components: {}
    }

    function formatData(v){
        v.forEach(item=>{
            if(item.pid == 0 ){

            }
        })
    }


</script>
