// 应试考试
const pathPre = '/exam'
export default {
    path: pathPre,
    component: resolve => {
        require.ensure([], () => {
            resolve(require('../views/exam/Main.vue'))
        })
    },
    children: [
        //课程学习
        {
            path: 'course/category', 
            name: 'exam-course-category',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/exam/course/category.vue'))
                })
            },
            meta: {
                title: '栏目管理',
                noback: true
            }
        },
        {
            path: 'course/manage',
            name: 'exam-course-manage',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/exam/course/CourseManage.vue'))
                })
            },
            meta: {
                title: '课程管理',
                noback: true
            }
        },
        {//添加修改表单
            path: 'course/add',
            name: 'exam-course-add',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/exam/course/ExamCourseForm.vue'))
                })
            },
            meta: {
                title: '课程添加',
                noback: false
            }
        },
        {
            path: 'edit/:id',
            name: 'exam-course-edit',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/exam/course/ExamCourseForm.vue'))
                })
            },
            meta: {
                title: '课程更新',
                noback: false
            }
        },
        //章节练习
        {
            path: 'chapter/category',
            name: 'exam-chapter-category',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/exam/chapter/category.vue'))
                })
            },
            meta: {
                title: '栏目管理',
                noback: true
            }
        },
        {
            path: 'chapter/manage',
            name: 'exam-chapter-manage',
            component: resolve => {
                require.ensure([], () => {
                    resolve(require('../views/exam/chapter/TestPaperManage.vue'))
                })
            },
            meta: {
                title: ' 试题管理',
                noback: true
            }
        },
    ]
}
