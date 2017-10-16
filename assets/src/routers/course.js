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
    children: [
        {
            path: 'index',
            name: 'course-index',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/Index.vue'))
                })
            },
            meta: {
                title: '课程',
                noback: true
            }
        },
        {
            path: 'add',
            name: 'course-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/Form.vue'))
                })
            },
            meta: {
                title: '添加课程',
                noback: false
            }
        },
        {
            path: 'edit/:course_id',
            name: 'course-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/Form.vue'))
                })
            },
            meta: {
                title: '更新课程',
                noback: false
            }
        },
        {
            path: 'video', // 视频管理
            name: 'course-video',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/video/Index.vue'))
                })
            },
            meta: {
                title: '视频管理 - 课程',
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
                title: '添加视频 - 课程',
            }
        },
        {
            path: 'doc', // 文档管理
            name: 'course-doc',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/doc/Index.vue'))
                })
            },
            meta: {
                title: '文档管理 - 课程',
                noback: true
            }
        }
    ]
}
