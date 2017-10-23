// 系统模块
// 管理员模块
const pathPre = '/sys'
//  管理员管理
export default {
    path: pathPre,
    component: resolve => {
        require.ensure([], () => {
            resolve(require('../views/sys/Main.vue'))
        })
    },
    children: [
        {
            path: 'admin',
            name: 'sys-index',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/sys/Index.vue'))
                })
            },
            meta: {
                title: '系统',
                noback: true
            }
        },
        {
            path: 'admin/add',
            name: 'sys-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/sys/Form.vue'))
                })
            },
            meta: {
                title: '系统添加',
                noback: false
            }
        },
        {
            path: 'edit/:sys_id',
            name: 'sys-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/sys/Form.vue'))
                })
            },
            meta: {
                title: '系统更新',
                noback: false
            }
        },
        //角色组路由导航
        {
            path: 'role',
            name: 'role-index',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/role/Index.vue'))
                })
            },
            meta: {
                title: '系统',
                noback: true
            }
        },
        {
            path: '/role/add',
            name: 'role-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/role/Form.vue'))
                })
            },
            meta: {
                title: '角色组添加',
                noback: false
            }
        },
        {
            path: 'edit/:role_id',
            name: 'role-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/role/Form.vue'))
                })
            },
            meta: {
                title: '角色组更新',
                noback: false
            }
        },


    ]
}
