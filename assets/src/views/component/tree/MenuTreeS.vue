<style lang='scss' rel='stylesheet/scss'>
    @import "../../../utils/mixins/mixins";
    .left-menu-container {
        .fa {
            margin-right: 5px;
        }
    }
</style>

<template>
    <el-submenu  v-if="data && data.children != null">
        <template slot="title">
            {{data.item.name}}
        </template>

        <MenuTree v-for="item in hasChildCItems" :key="item.item.id" :data="item"></MenuTree>
        <template v-if="leafChildren">
        <el-menu-item :index="item.item.id" v-bind="{index}" v-for="item in leafChildren" :key="item.item.id">
            {{item.item.name}}
        </el-menu-item>
           </template>
    </el-submenu>
    <el-menu-item :index="item.id" v-bind="{index}" v-for="item in data" :key="item.id" v-else>
        <template v-if="data"> 
        {{data.item.name}}
        </template>
    </el-menu-item>
</template>

<script>
    //这是 组件   
    import MenuTree from './MenuTreeS.vue'
    export default{
        name: 'MenuTree',
        data () {
            return {
                leafChildren: null, // 叶子节点
                hasChildCItems: [], // 有子节点的item
            }
        },
        props: ['data'],
        created () {
            console.log('++++++++++++++')
            console.log(this.data)
            if (this.data == null) {
                this.data = {}
            }
            let hasChildCItems = []
            let leafChildren = []
            if (this.data.children) {
                this.data.children.forEach((item) => {
                    if (item.children != null) {
                        hasChildCItems.push(item)
                    } else {
                        leafChildren.push(item)
                    }
                })
            }

            this.hasChildCItems = hasChildCItems
            this.leafChildren = leafChildren
        },
        components: {MenuTree}
    }
</script>
