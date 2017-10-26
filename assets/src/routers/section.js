// 区块模块
// 角色模块
const pathPre = '/section'
//  角色管理
export default {
    path: pathPre,
    component: resolve => {
        require.ensure([], () => {
            resolve(require('../views/section/Main.vue'))
        })
    },
    children: [
        {
            path: 'category',
            name: 'section-category',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/section/Index.vue'))
                })
            },
            meta: {
                title: '区块分类',
                noback: true
            }
        },
        // {
        //     path: 'add',
        //     name: 'section-add',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/section/Form.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '区块添加',
        //         noback: false
        //     }
        // },
        // {
        //     path: 'edit/:section_id',
        //     name: 'section-edit',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/section/Form.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '区块更新',
        //         noback: false
        //     }
        // },
    ]
}
