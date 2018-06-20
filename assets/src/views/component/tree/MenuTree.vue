<!--课程栏目-->

<template> 
    <!--这是父组件-->
    <el-tree v-loading="loading" :data="data" :expand-on-click-node="false" @node-click="handleNodeClick" 
             :highlight-current="selectable">
    </el-tree>
</template>

<script>
    import treeUtils from '../../../utils/treeUtils'

    export default{
        props: {
            onNodeClick: Function,
            value: Array,
            req:Function,
            mark:Object   // 传{type：‘menu’,name:'name'}
        },
        data () {
            return {
                data: this.value,
                loading: false,
                selectable: true, // 是否可选中
                type:this.type,
            }
        },
        created () {
             //第一步：处理数据
                function func(arr) {
                    arr.forEach(v=>{
                        if(v.pid != 0){
                            let t = find(arr,'id',v.pid);
                            t&&(t.children?t.children.push(v):t.children=[v])
                        }
                    });
                    return arr.filter(v=>{
                        return v.pid == 0;
                    })
                }
                function find(arr,key,value){
                    for(let i =0;i<arr.length;i++){
                        if(arr[i][key]==value){
                        return arr[i]
                        }
                    }
                    return false;
                }
               
            // 第二步： 替换键值XX_name->label,id>value
            function transfor(arr,name){
                arr.forEach(v=>{
                    v['label']=v[name]
                    v['value']=v['id']
                })
            
               return arr
            }
            this.req({id : 'tree', type :'menu', filter : true , pid :-1 , level:-1, pagesize:-1}).then(ret=>{ 
                let data=transfor(ret.data,this.mark.name)
                this.data=func(data)
                // this.loading = false
                // xmview.setContentLoading(false)
            })
        },
        methods: {
            handleNodeClick (data, node, store) { //点击
                // console.log(node.data)
                // if (node.data.ended) return
                    //     let currItem = treeUtils.findItem(this.data, node.data, 'value')   //拿到当前项 
                    //     var arr = []
                    //     this.getData({
                    //         pid: data.data.id, 
                    //         level:-1,
                    //     }).then((ret) => {
                    //         var arr = ret.map(v=>{
                    //             v.label = v.name
                    //             v.value = v.id
                    //             v.children = v.ended ? null : [] //是否最终菜单？是为nulgl 否则为一个数组
                    //             return v
                    //         })
                    //         currItem.children = arr
                    //         this.loading = false
                    //         xmview.setContentLoading(false)
                    //    })

                 this.$emit('onNodeClick', {data, node, store})
                 if(this.onNodeClick) this.onNodeClick(1, data, node, store) 

                //  根节点无法被选中 
                if (data.value == 0) return
                this.selectable = true
            },
            // 清空选中项
            clearSelected () {
                this.selectable = false
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



            setCurrVal (val) { //给输入框设置值
                if (val === this.data) return
                this.data = val
                this.$emit('input', val)
            },
 
        },
    }

      function findItem(arr,key,value){
        arr.forEach(item=>{
            if(item[key] == value ){
                return item
            }
        })
    }
</script>