// 培训模块
const pathPre = '/course'
//  培训管理
export default {
    path: pathPre,
    component: resolve => {
        require.ensure([], () => {
            resolve(require('../views/course/Main.vue'))
        })
    },
    children: [{
            path: 'category',
            name: 'course-index',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/category/Index.vue'))
                })
            },
            meta: {
                title: '课程种类',
                noback: true
            }
        },
        {
            path: 'cate-add',
            name: 'cate-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/category/Form.vue'))
                })
            },
            meta: {
                title: '课程种类添加',
                noback: false
            }
        },
        {
            path: 'cate-edit/:course_id',//
            name: 'cate-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/category/Form.vue'))
                })
            },
            meta: {
                title: '课程种类更新',
                noback: false
            }
        },
        {
            path: 'video', // 视频管理
            name: 'course-video',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/manage/Video.vue'))
                })
            },
            meta: {
                title: '视频管理 - 培训',
                noback: true
            }
        },
        {
            path: 'video/add',
            name: 'course-video-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/video/Add.vue'))
                })
            },
            meta: {
                title: '添加视频 - 培训',
            }
        },
        // {
        //     path: 'doc', // 文档管理
        //     name: 'course-doc',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/course/doc/Index.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '文档管理 - 系统',
        //         noback: true
        //     }
        // }
    ]
}