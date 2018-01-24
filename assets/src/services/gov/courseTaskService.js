import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/course/task'

class sysService {
    // 课程任务
    getCourseTaskList ({
                           page = '',
                           pagesize = '',
                           deleted= -1
                       }) {
        let finalUrl = urlPre + '/lists'
        return api.get(finalUrl, {page, pagesize,deleted}).then((ret) => {
            return ret.data
        })
    }

    // 编辑时获取文章内容
    getCourseTaskTemplateEditDetail (id) {
        let finalUrl = config.apiHost + '/sys/coursetask/template/' + id
        return api.get(finalUrl, {}).then((ret) => {
            return ret.data
        })
    }

    // 课程任务模板管理
    getCourseTaskTemplateList ({
                                   category_id = '',
                                   title = '',
                                   page = '',
                                   pagesize = ''
                               }) {
        let finalUrl = config.apiHost + '/sys/coursetask/template/search'
        return api.get(finalUrl, {category_id, title, page, pagesize}).then((ret) => {
            return ret.data
        })
    }

    // 获取课程任务模板上传图片url
    CourseTaskTemplateUploadUrl ({avatar, alias}) {
        let url = config.apiHost + `/sys/coursetask/template/cover`
        return api.post(url, {avatar, alias})
    }

    // 创建课程任务模板
    addCourseTaskTemplate ({category_id, title, description, image, course_id, sort, status}) {
        let finalUrl = config.apiHost + `/sys/coursetask/template`
        return api.post(finalUrl, {category_id, title, description, image, course_id, sort, status}).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }

    // 更新课程任务模板
    updateCourseTaskTemplate ({category_id, title, description, image, course_id, sort, id, status}) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/${id}`
        return api.put(finalUrl, {
            category_id,
            title,
            description,
            image,
            course_id,
            sort,
            id,
            status
        }).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }

    // 删除课程任务模板
    deleteCourseTaskTemplate (task_id) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/${task_id}`
        return api.del(finalUrl, {})
    }

    // 上线课程任务模板
    publishCourseTaskTemplate (task_id) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/${task_id}/publish`
        return api.put(finalUrl, {})
    }

    // 下线课程任务模板
    revokeCourseTaskTemplate (task_id) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/${task_id}/revoke`
        return api.put(finalUrl, {})
    }

    // 获取课程任务模板分类
    getCategoryTree ({id = 'tree', filter = true}) {
        let finalUrl = config.apiHost + '/sys/coursetask/template/category/children'
        return api.get(finalUrl, {id, filter}).catch((ret) => {
            ret.tipCom.close()
            return ret
        })
    }

    // 创建分类
    createCategory ({parent_id, name, image, sort}) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/category`
        let reqParam = {parent_id, name, image, sort}
        if (parent_id === 0) delete reqParam['parent_id']
        return api.post(finalUrl, reqParam)
    }

    // 修改分类
    updateCategory ({name, image, sort, id}) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/category/${id}`
        return api.put(finalUrl, {name, image, sort})
    }

    // 删除分类
    delCategory ({id}) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/category/${id}`
        return api.del(finalUrl).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }

    // 获取分类上传图片地址
    getCategoryImageUrl () {
        let finalUrl = config.apiHost + `/sys/coursetask/template/category/image`
        return finalUrl
    }

    // 移动分类
    moveCategory ({id, to}) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/category/${id}/move`
        return api.put(finalUrl, {to})
    }

    // 移动分类内容
    moveCategoryContent ({id, to}) {
        let finalUrl = config.apiHost + `/sys/coursetask/template/category/${id}/move/content`
        return api.put(finalUrl, {to})
    }




    // 禁用管理员
    offline({id, disabled}) {
        let url = `${urlPre}/edit/${id}`
        return api.post(url, { disabled})
    }

    // 启用管理员
    online({id, disabled}) {
        let url = `${urlPre}/edit/${id}`
        return api.post(url, { disabled })
    }

    // 获取添加编辑课程上传图片的url
    getUploadUrl({image, alias}) {
        let url = `${urlPre}/upload`
        return api.post(url, {image, alias}).then((ret) => {
            return ret.data
        })
    }

}
export default new sysService()
