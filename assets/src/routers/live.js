// 直播管理模块
const pathPre = '/live'
//  管理员管理
export default {
    path: pathPre,
    component: resolve => {
        require.ensure([], () => {
            resolve(require('../views/live/Main.vue'))
        })
    },
    children: [
        // // 部门人员查询
        {
            path: 'list',
            name: 'live-list',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/live/Live.vue'))
                })
            },
            meta: {
                title: '直播查询',
                noback: true
            }
        },
        {
            path: 'live/add', // 添加和编辑课程
            name: 'live-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/live/LiveForm.vue'))
                })
            },
            meta: {
                title: '直播新建',
            }
        },
        {
            path: 'live/edit/:id', // 添加和编辑课程
            name: 'live-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/live/LiveForm.vue'))
                })
            },
            meta: {
                title: '直播修改',
            }
        },
    ]
}
