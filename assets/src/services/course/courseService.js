import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/course'

class CourseService {

    //种类数据请求
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


    //课程数据请求
    // 搜索 
    search({ course_name = '', status = -1, category_id = 0, time_start, time_end, page, page_size }) {
        let url = urlPre + '/lists'
        return api.get(url, { course_name, status, category_id, time_start, time_end, page, page_size }, false).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 创建
    create({ gov_id, course_name, image, description, tags, company_id, type, material_type, material_id, need_testing, status}) {
        let url = urlPre + '/create'
        return api.post(url, { gov_id, course_name, image, description, tags, company_id, type, material_type, material_id, need_testing, status }).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 更新
    update({ id, category_id, course_name, image, description, tags, company_id, type, material_type, material_id, need_testing, status }) {
        let url = `${urlPre}/${id}`
        return api.put(url, { category_id, course_name, image, description, tags, company_id, type, material_type, material_id, need_testing, status }).then(ret => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }

    // 删除
    delete(id) {
        let url = `${urlPre}/${id}/`
        return api.del(url, {}).then(ret => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }

    // 批量删除课程
    deleteMulty(ids) {
        let url = `${urlPre}/batchdel`
        return api.put(url, { ids })
    }

    // 批量移动课程到指定分类
    moveToCategoryMulty({ ids, category_id }) {
        let url = `${urlPre}/batchmove`
        return api.put(url, { ids, category_id })
    }

    // 课程
    setLesson({ id, data }) {
        let url = `${urlPre}/${id}/setlesson`
        return api.put(url, data).then(ret => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }

    // 上下线课程
    offline(id) {
        let url = `${urlPre}/${id}/offline`
        return api.put(url, {})
    }

    // 上下线课程
    online(id) {
        let url = `${urlPre}/${id}/online`
        return api.put(url, {})
    }

    // 获取课程栏目树
    getCategoryTree({ companyid, id = 'tree', type, filter = true }) {
        let finalUrl = `${urlPre}/category/children`
        return api.get(finalUrl, { id, filter, type }).catch((ret) => {
            ret.tipCom.close()
            return ret
        })
    }

    // 获取添加编辑课程上传图片的url
    getUploadUrl({image, alias}) {
        let url = `${urlPre}/upload`
        return api.post(url, {image, alias}).then((ret) => {
            return ret.data
        })
    }

    // // 设置课时
    // setLessons ({course_id, jsonstr}) {
    //     let url = `${urlPre}/${course_id}/lesson`
    //     return api.put(url, jsonstr)
    // }

    // 获取课程信息
    getCourseInfo (course_id) {
        let url = `${urlPre}/category/get/${course_id}`
        return api.get(url).then((ret) => {
            return ret.data
        })
    }

    


}
export default new CourseService()
