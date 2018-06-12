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
        // {
        //     path: 'category',//栏目主页此栏目已废 -更新为manage/course-category-manage
        //     name: 'course-index',
        //     component: resolve => {
        //         require.ensure([], () => {
        //             resolve(require('../views/course/category/Index.vue'))
        //         })
        //     },
        //     meta: {
        //         title: '课程种类',
        //         noback: true
        //     }
        // },
        {
            path: 'cate-add',  //栏目添加
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
            path: 'cate-edit/:course_id',  //栏目编辑
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
            path: 'video/add',//视频添加
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
        {
            path: 'manage/public', // 公开课管理
            name: 'course-manage-public',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/manage/Public.vue'))
                })
            },
            meta: {
                title: '公开课 - 课程管理',
                noback: true
            }
        },
        {
            path: 'manage/add-course', // 添加和编辑视频课程
            name: 'course-manage-addCourse',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/manage/AddCourse.vue'))
                })
            },
            meta: {
                title: '添加课程-培训',
            }
        },
        {
            path: 'manage/add-course/herbal', // 添加和编辑中草药课程
            name: 'course-manage-addCourse-herbal',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/manage/AddHerbal.vue'))
                })
            },
            meta: {
                title: '添加课程-中草药',
            }
        },
        {
            path: 'manage/add-course/imgtxt', // 添加和编辑中草药课程
            name: 'course-manage-addCourse-imgtxt',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/manage/AddImgtxt.vue'))
                })
            },
            meta: {
                title: '添加课程-图文系列',
            }
        },
        {
            path: 'manage/course-category-manage', // 栏目管理
            name: 'course-category-manage',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/manage/CategoryManage.vue'))
                })
            },
            meta: {
                title: '栏目管理-培训',
                noback: true
            }
        },
        {
            path: 'manage/course-answer-analysis/:id', // 答案分析
            name: 'course-manage-course-answer-analysis',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/manage/AnswerAnalysis.vue'))
                })
            },
            meta: {
                title: '课程题目分析',
            }
        },
      
        {
            path: 'manage/experts', //  专家管理
            name: 'course-manage-experts',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/experts/Experts.vue'))
                })
            },
            meta: {
                title: '专家管理',
                noback: true
            }
        },
        {
            path: 'manage/experts/add', //专家管理表单 -修改
            name: 'course-manage-experts-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/experts/ExpertsForm.vue'))
                })
            },
            meta: {
                title: '信息新建-专家',
                noback: false
            }
        },
        {
            path: 'manage/experts/edit/:id', //专家管理表单 -修改
            name: 'course-manage-experts-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/experts/ExpertsForm.vue'))
                })
            },
            meta: {
                title: '信息修改-专家',
                noback: false
            }
        },
        {
            path: 'manage/experts-hospital', //  医院管理
            name: 'course-manage-experts-hospital',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/experts/ExpertsHospital.vue'))
                })
            },
            meta: {
                title: ' 医院管理',
                noback: true
            }
        },
        {
            path: 'manage/experts-hospital/:id', //医院管理表单 -修改
            name: 'course-manage-experts-hospital-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/course/experts/ExpertsHospitalForm.vue'))
                })
            },
            meta: {
                title: '信息修改-医院',
                noback: false
            }
        },


      
    ]
}