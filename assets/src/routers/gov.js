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
        //政府管理主页列表
        {
            path: 'index',
            name: 'gov-index',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/Gov.vue'))
                })
            },
            meta: {
                title: '政府',
                noback: true
            }
        },
        {
            path: 'gov/add',
            name: 'gov-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/CompanyOperate.vue'))
                })
            },
            meta: {
                title: '政府添加',
                noback: false
            }
        },
        {
            path: 'edit/:medical_id',
            name: 'gov-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/CompanyOperate.vue'))
                })
            },
            meta: {
                title: '政府更新',
                noback: false
            }
        },
    ]
}
