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
                    resolve(require('../views/gov/GovOperate.vue'))
                })
            },
            meta: {
                title: '政府添加',
                noback: false
            }
        },
        {
            path: 'edit/:id',
            name: 'gov-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/GovOperate.vue'))
                })
            },
            meta: {
                title: '政府更新',
                noback: false
            }
        },
        {
            path: 'admin/:gov_id',
            name: 'gov-admin',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/Admin.vue'))
                })
            },
            meta: {
                title: '部门人员',
            }
        },

         // // 部门人员查询
        {
            path: 'user',
            name: 'user-index',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/user/Index.vue'))
                })
            },
            meta: {
                title: '医政 - 人员',
                noback: true
            }
        },
        // {
        //     path: 'user/add',
        //     name: 'user-add',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/gov/user/Form.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '角色组添加',
        //         noback: false
        //     }
        // },
        
        //编辑管理员
        {
            path: 'user/edit/:user_id',
            name: 'user-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/user/Form.vue'))
                })
            },
            meta: {
                title: '管理员修改',
                noback: false
            }
        },
         //新建人员
        {
            path: 'person/edit/:user_id',
            name: 'person-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/user/personForm.vue'))
                })
            },
            meta: {
                title: '人员新建',
                noback: false
            }
        },
        //编辑人员
        {
            path: 'person/edit/:user_id',
            name: 'person-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/user/personForm.vue'))
                })
            },
            meta: {
                title: '人员修改',
                noback: false
            }
        },
    ]
}
