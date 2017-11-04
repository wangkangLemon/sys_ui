import * as api from '../api'
import authUtils from '../../utils/authUtils'
import config from '../../utils/config'
const urlPre = config.apiHost + '/course'

class CourseService {

    //========================种类数据请求===================================
    // 搜索
    search_cate({ id, name, category_type, pid, level, ended, disabled, page, pagesize}) {
        let url = urlPre + '/category/lists'
        return api.get(url, { id, name, category_type, pid, level, ended, disabled, page, pagesize }, false).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }
    // 创建
    create_cate({ name, remark, sort, category_type, pid, ended, disabled }) {
        let url = urlPre + '/category/create'
        return api.post(url, { name, remark, sort, category_type, pid, ended, disabled }).then(ret => {
            if (ret.code == 0) {
                 xmview.showTip('success',ret.message)
                return ret.data
            } else {
                xmview.showTip('error',ret.message)
                return Promise.reject(ret)
            }
        })
    }
     // 更新
    update_cate({ id, name, remark, sort, category_type, pid, ended, disabled, course_defid }) {
        let url = `${urlPre}/category/edit/${id}`
        return api.post(url, { name, remark, sort, category_type, pid, ended, disabled, course_defid }).then(ret => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }
    // 删除
    delete_cate(id) {
        let url = `${urlPre}/category/delete/${id}/`
        return api.get(url, {}).then(ret => {
            if (ret.code == 0) {
                xmview.showTip('success',ret.message)
                return ret.data
            } else {
                xmview.showTip('error',ret.message)
                return Promise.reject(ret)
            }
        })
    }


    //=======================课程数据请求===============================
    // 获取课程下拉列表
    courseList(keyword, page, pageSize) {
        let url = `${urlPre}/search/name`
        return api.get(url, { keyword, page, page_size: pageSize }).then(ret => {
            return ret.data
        })
    }

    // 获取公开课列表 { course_name = '', status, category_id , time_start, time_end, page, page_size }
    getPublicCourselist({ course_name = '', status, category_id , time_start, time_end}) {
        let url = urlPre + '/lists'
        console.log(url)
        return api.get(url, { course_name, status, category_id, time_start, time_end }, false).then(ret => {
            if (ret.code == 0) {
                console.log(ret)
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 创建
    addCourse({ gov_id, course_name, image, description, tags, company_id, type, material_type, material_id, need_testing, status}) {
        let url = urlPre + '/create'
        return api.post(url, { gov_id, course_name, image, description, tags, company_id, type, material_type, material_id, need_testing, status }).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 修改课程获取课程信息接口
    getCourseInfo({ course_id }) {
        let companyid = authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/course/get/${course_id}`
        return api.get(finalUrl).then((ret) => {
            return ret.data
        })
    }
    // 修改课程
    editCourse({ companyid, id, category_id, name, image, tags, material_type, material_id, albumid, description, need_testing, limit_time, limit_repeat, score_pass, price_enabled, price, price_float }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/${id}`
        return api.put(finalUrl, {
            category_id,
            name,
            image,
            tags,
            material_type,
            material_id,
            albumid,
            description,
            need_testing,
            limit_time,
            limit_repeat,
            score_pass,
            price_enabled,
            price,
            price_float
        }).then((ret) => {
            return ret.data
        })
    }

    // 上下线课程
    offlineCourse({ companyid, course_id, disabled }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/sys/course/${course_id}/disable`
        console.log(finalUrl)
        return api.put(finalUrl, { disabled })
    }

    // 获取添加编辑课程上传图片的url (与题目里的上传图片的url为同一个)
    getManageImgUploadUrl({ companyid } = {}) {
        companyid = companyid || authUtils.getUserInfo().company_id
        return `${config.apiHost}/com/${companyid}/course/image`
    }

    // 删除课程
    deleteCourse({ companyid, course_id }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/${course_id}`
        return api.del(finalUrl, {})
    }

    // 批量删除课程
    deleteCourseMulty({ companyid, id }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/batchdel`
        return api.post(finalUrl, { id })
    }

    // 批量删除视频
    deleteVideoMulty({ id }) {
        let finalUrl = `${urlPre}/video/batchdel`
        return api.post(finalUrl, { id })
    }

    // 批量移动课程到指定分类
    moveCourseToCategoryMulty({ companyid, id, catid }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/batchmove`
        return api.post(finalUrl, { id, catid })
    }

    // 弹出框请求的视频列表
    getVideo4Dialog({ companyid, status, keyword, page, page_size }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/video/search`
        return api.get(finalUrl, { keyword, status, page, page_size })
    }

    // 获取文档上传url
    getCourseDocUploadUrl({ companyid } = {}) {
        companyid = companyid || authUtils.getUserInfo().company_id
        return `${config.apiHost}/com/${companyid}/course/doc/upload`
    }

    // 添加编辑课程上传图片
    uploadCover4addCourse({ companyid, avatar, alias = Date.now() + '.jpg' }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let url = `${config.apiHost}/com/${companyid}/course/image`
        return api.post(url, { avatar, alias }).then((ret) => {
            return ret.data
        })
    }

    // 获取课程题目
    getTestingInfo({ companyid, course_id }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/${course_id}/subject/edit`
        return api.get(finalUrl).then((ret) => {
            return ret.data.subjects
        })
    }

    // 添加或修改题目
    addOrEditTesting({ companyid, course_id, subjects }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/${course_id}/subject/`
        return api.put(finalUrl, subjects).then((ret) => {
            return ret.data
        })
    }
    // ============================================= 栏目 开始 ======================================================
    // 获取课程栏目树
    getCategoryTree({ companyid, id = 'tree', type, filter = true }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/category/children`
        return api.get(finalUrl, { id, filter, type }).catch((ret) => {
            ret.tipCom.close()
            return ret
        })
    }

    // 获取上传栏目图片的url
    getUploadCategoryImgUrl({ companyid } = {}) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/category/image`
        return finalUrl
    }

    // 添加栏目
    addCategory({ companyid, parent_id, type, name, image, sort }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let reqParam = { parent_id, type, name, image, sort }
        if (parent_id === 0) delete reqParam['parent_id']

        let finalUrl = `${config.apiHost}/com/${companyid}/course/category`
        return api.post(finalUrl, reqParam)
    }

    // 修改栏目
    updateCategory({ companyid, type, name, image, sort, id }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/category/${id}`
        return api.put(finalUrl, { type, name, image, sort })
    }

    // 删除栏目
    deleteCategory({ companyid, id }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/category/${id}`
        return api.del(finalUrl, {})
    }

    // 移动栏目
    moveCategory({ companyid, id, to }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/category/${id}/move`
        return api.put(finalUrl, { to })
    }

    // 移动栏目下内容
    moveCategoryContent({ companyid, id, to }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/category/${id}/move/content`
        return api.put(finalUrl, { to })
    }


    // ============================================= 专辑 开始 ======================================================
    // 获取专辑
    getAlbumList({ companyid, page, page_size, keyword, time_start, time_end }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/album/search`
        return api.get(finalUrl, { page, page_size, keyword, time_start, time_end }).then((ret) => {
            return ret.data
        })
    }

    // 删除专辑
    deleteAlbum({ companyid, id }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/album/${id}`
        return api.del(finalUrl, {})
    }

    // 批量删除专辑 ids: id数组
    deleteAlbumMulty({ companyid, ids }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/album/batchdel`
        return api.post(finalUrl, { id: ids.join(',') })
    }

    // 新增专辑
    addAlbum({ companyid, course_id, name }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/album/add`
        return api.post(finalUrl, { course_id: course_id.join(','), name })
    }

    // 编辑专辑
    editAlbum({ companyid, course_id, name }) {
        companyid = companyid || authUtils.getUserInfo().company_id
        let finalUrl = `${config.apiHost}/com/${companyid}/course/album/edit`
        return api.post(finalUrl, { course_id: course_id.join(','), name })
    }

    // 获取课程信息以及选项列表
    getCourseSubject({ id }) {
        let finalUrl = `${urlPre}/${id}/subject/stat`
        return api.get(finalUrl).then((ret) => {
            return ret.data
        })
    }

    // 获取课程题目答案分析
    getSubjectAnswer({ c_id, s_id }) {
        let finalUrl = `${urlPre}/${c_id}/subject/${s_id}/stat`
        return api.get(finalUrl).then((ret) => {
            return ret.data.stat
        })
    }
    


}
export default new CourseService()
