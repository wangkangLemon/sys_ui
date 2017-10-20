// 系统模块
// 培训模块
const pathPre = '/sys'
//  培训管理
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
            path: 'add',
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
        {
            path: 'video', // 视频管理
            name: 'sys-video',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/sys/video/Index.vue'))
                })
            },
            meta: {
                title: '视频管理 - 系统',
                noback: true
            }
        },
        {
            path: 'video/add',
            name: 'sys-video-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/sys/video/Add.vue'))
                })
            },
            meta: {
                title: '添加视频 - 系统',
            }
        },
        {
            path: 'doc', // 文档管理
            name: 'sys-doc',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/sys/doc/Index.vue'))
                })
            },
            meta: {
                title: '文档管理 - 系统',
                noback: true
            }
        }
    ]
}
