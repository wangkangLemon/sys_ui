// 财务模块

const pathPre = '/financemanage'

export default {
    path: pathPre,
    component: resolve => {
        require.ensure([], () => {
            resolve(require('../views/financeManage/Main'))
        })
    },
    children: [
        {
            path: 'order',
            name: 'finance-order',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/financeManage/finance/Order.vue'))
                })
            },
            meta: {
                title: '订单查询',
                noback: true
            }
        },
        {
            path: 'product',
            name: 'finance-product',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/financeManage/finance/product/Product.vue'))
                })
            },
            meta: {
                title: '商品列表',
                noback: true
            }
        },
        {
            path: 'product/add', //专家管理表单 -修改
            name: 'finance-product-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/financeManage/finance/product/ProductForm.vue'))
                })
            },
            meta: {
                title: '商品新建',
                noback: false
            }
        },
        {
            path: 'product/edit/:id', //专家管理表单 -修改
            name: 'finance-product-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/financeManage/finance/product/ProductForm.vue'))
                })
            },
            meta: {
                title: '商品修改',
                noback: false
            }
        },
    ]
}
