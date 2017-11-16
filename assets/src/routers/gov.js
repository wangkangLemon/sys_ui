// 医政管理模块
const pathPre = '/gov'
//  管理员管理
export default {
    path: pathPre,
    component: resolve => {
        require.ensure([], () => {
            resolve(require('../views/gov/Main.vue'))
        })
    },
    children: [
        //
        {
            path: 'list',
            name: 'medical-index',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/Index.vue'))
                })
            },
            meta: {
                title: '医政',
                noback: true
            }
        },
        {
            path: 'gov/add',
            name: 'medical-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/Form.vue'))
                })
            },
            meta: {
                title: '医政添加',
                noback: false
            }
        },
        {
            path: 'edit/:medical_id',
            name: 'medical-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/Form.vue'))
                })
            },
            meta: {
                title: '医政更新',
                noback: false
            }
        },
    ]
}
