<!--工业连锁店-->

<!--使用示范:-->
<!--<IndustryCompanySelect v-model="fetchParam.enterprise_id"-->
<!--v-on:change="val=>fetchParam.enterprise_id=val"-->
<!--:change="fetchData">-->
<!--</IndustryCompanySelect>-->

<template>
    <SelectScroll :changeCb="handleChange" :requestCb="fetchData" :placeholder="placeholder" :list="list" v-model="currVal" :disabled="disabled" :isend="isend">
    </SelectScroll>
</template>

<script>
    import SelectScroll from '../../component/form/SelectScroll0510.vue'
    export default{
        props: {
            value: [String, Number],
            change: Function,
            placeholder: String,
            list: Array,
            disabled: {
                type: Boolean,
                default: false
            },
            // 0-企业 1-工业 2-连锁
            type: [String, Number],
            reqFun:Function, 
        },
        data () {
            return {
                currVal: this.value,
                pageSize: 15,
                isend:false,
            }
        },
        created () {
            // console.log(this.reqFun);
        },
        watch: {
            'value'(val, oldValue) {
                this.currVal !== val && (this.currVal = val)
            }
        },
        methods: {
            fetchData (val, length) {
                return this.change(val, length).then((ret) => {
                    // this.$emit('changelitc', ret.data)
                    console.log('111111111',length,ret._exts.total);
                    if(length+15 >= ret._exts.total){this.isend=true} //判断子组件是否显示加载更多按钮
                    return ret.data
                })
            },
            handleChange(val) {
                console.log(val);
                
                this.currVal = val
                this.$emit('input', val)
                this.$emit('change', val)
                this.change && this.change()
            },
        },
        components: {
            SelectScroll
        }
    }
</script>
