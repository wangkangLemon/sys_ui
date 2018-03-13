import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/exam'

class examService {
    //16.1--栏目


    //16.6--章节
    //拿到应试列表
    fetchChapterCategory(fetchParam) {
        let url = urlPre + '/chapter/lists'
        return api.get(url, fetchParam
        ).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }


    // 搜索
    getCategory(id) {
        let url = `${urlPre}/chapter/get/${id}`         //传递的地址的id
        return api.get(url, {}, false).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 创建
    ChapterCategoryCreate(fetchParam) {
        let url = urlPre + '/chapter/create'
        return api.post(url, fetchParam).then(ret => {
            if (ret.code == 0) {
                xmview.showTip('success', ret.message)
                return ret.data
            } else {
                xmview.showTip('error', ret.message)
                return Promise.reject(ret)
            }
        })
    }
    // 更新
    ChapterCategoryEdit(fetchParam,id) {
        let url = `${urlPre}/chapter/edit/${id}`
        return api.post(url, fetchParam).then(ret => {
            if (ret.code == 0) {
                xmview.showTip('success', ret.message)
                return ret.data
            } else {
                xmview.showTip('error', ret.message)
                return Promise.reject(ret)
            }
        })
    }

    // 删除
    ChapterCategorydelete(id) {
        let url = `${urlPre}/chapter/delete/${id}`
        // console.log(url)
        return api.post(url, {}).then(ret => {
            if (ret.code == 0) {
                xmview.showTip('success', ret.message)

                return ret.data
            } else {
                xmview.showTip('error', ret.message)
                return Promise.reject(ret)
            }
        })
    }
    // // 公共添加编辑课程上传图片  ---传base64
    commonUploadImageBase(image, biz = 'section', extpath = 'category') {
        let url = `${config.apiHost}/common/upload/file`
        return api.post(url, image, biz, extpath).then((ret) => {
            xmview.showTip('success', ret.message)
            return ret.data
        })
    }
    //课程列表
    fetchCourseLists({ pagesize, page, course_name, chapter_id, status}) {
        let url = urlPre + '/course/lists'
        return api.get(url, { pagesize, page, course_name, chapter_id, status }).then(ret => {
            if (ret.code == 0) {
                return ret
            } else {
                return Promise.reject(ret)
            }
        })
    }
    //
    // 添加课程
    addCourse(fetchParam) {
        let finalUrl = urlPre + '/course/create'
        return api.post(finalUrl, fetchParam).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }
    // 更新课程信息
    updateCourse(fetchParam, id) {
        let finalUrl = `${urlPre}/course/edit/${id}`
        return api.post(finalUrl, fetchParam).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }
    getExamCourse(id) {
        let url = `${urlPre}/course/get/${id}`         //传递的地址的id
        return api.get(url, {}, false).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }
    // 上下线课程
    offlineCourse({ govid, id, status }) {
        // govid = govid || authUtils.getUserInfo().company_id
        let finalUrl = `${urlPre}/course/edit/${id}`
        return api.post(finalUrl, { status })
    }

    deleteCourse(id) {
        let url = `${urlPre}/course/delete/${id}`
        return api.post(url, {}).then(ret => {
            if (ret.code == 0) {
                xmview.showTip('success', ret.message)
                return ret.data
            } else {
                xmview.showTip('error', ret.message)
                return Promise.reject(ret)
            }
        })
    }
    //课程列表
    fetchSubjectLists(params) {
        let url = urlPre + '/subject/lists'
        return api.get(url, params).then(ret => {
            if (ret.code == 0) {
                return ret
            } else {
                return Promise.reject(ret)
            }
        })
    }
    //
    // 添加课程
    addSubject(fetchParam) {
        let finalUrl = urlPre + '/subject/create'
        return api.post(finalUrl, fetchParam).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }
    // 更新课程信息
    upSubject(fetchParam, id) {
        let finalUrl = `${urlPre}/subject/edit/${id}`
        return api.post(finalUrl, fetchParam).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }
    getExamSubject(id) {
        let url = `${urlPre}/subject/get/${id}`         //传递的地址的id
        return api.get(url, {}, false).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }
    delSubject(id) {
        let url = `${urlPre}/subject/delete/${id}`
        return api.post(url, {}).then(ret => {
            if (ret.code == 0) {
                xmview.showTip('success', ret.message)
                return ret.data
            } else {
                xmview.showTip('error', ret.message)
                return Promise.reject(ret)
            }
        })
    }

}
export default new examService()
