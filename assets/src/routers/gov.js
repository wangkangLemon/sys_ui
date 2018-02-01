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
        {
            path: 'index',  //政府管理主页列表
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

        {
            path: 'user',  // // 部门人员查询
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
        // //编辑管理员
        // {
        //     path: 'user/edit/:user_id',
        //     name: 'user-edit',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/gov/user/Form.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '管理员修改',
        //         noback: false
        //     }
        // },
        //  //新建人员
        // {
        //     path: 'person/edit/:user_id',
        //     name: 'person-add',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/gov/user/personForm.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '人员新建',
        //         noback: false
        //     }
        // },
        {
            path: 'person/edit/:user_id',//编辑人员
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

        {
            path: 'coursetask',
            name: 'gov-coursetask',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/courseTask/Coursetask.vue'))
                })
            },
            meta: {
                title: '课程任务',
                noback: true
            }
        },
        //  // 添加修改课程任务
        // {
        //     path: 'coursetask/template/add',
        //     name: 'server-manage-add',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/gov/courseTask/AddCoursetask.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '添加课程模板',
        //     }
        // },
        // 课程任务模板
        {
            path: 'coursetask/template',
            name: 'gov-coursetasktemplate',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/courseTask/Coursetasktemplate.vue'))
                })
            },
            meta: {
                title: '课程任务模板',
                noback: true
            }
        },
        // 添加修改课程任务模板
        {
            path: 'coursetask/template/add',
            name: 'coursetask-template-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/courseTask/AddCoursetasktemplate.vue'))
                })
            },
            meta: {
                title: '添加课程任务模板',
            }
        },
        // 课程任务模板栏目
        {
            path: 'coursetask/template/category',
            name: 'company-coursetasktemplate-category',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/gov/courseTask/Coursetasktemplatecategory.vue'))
                })
            },
            meta: {
                title: '课程任务模板分类',
                noback: true
            }
        },

    ]
}
