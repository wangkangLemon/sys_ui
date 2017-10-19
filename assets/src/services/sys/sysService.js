import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/admin'

class sysService {

    //拿到数据
    fetchData () {
        let url = urlPre + '/lists'
        return api.post(url,{
        }).then(ret => {
            if (ret.code == 0) {
                return ret
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 搜索
    search({ keyword = '', status = -1, category_id = 0, time_start, time_end, page, page_size }) {
        let url = urlPre + '/lists'
        return api.get(url, { keyword, status, category_id, time_start, time_end, page, page_size }, false).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 创建
    create({ role_id, name, mobile, email, password }) {
        let url = urlPre + '/create'
        console.log(url)
        return api.post(url, { role_id, name, mobile, email, password }).then(ret => {
            if (ret.code == 0) {
                return ret.data
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 更新
    update({ id, category_id, name, image, description, tags, company_id, price, lesson_type }) {
        let url = `${urlPre}/${id}`
        return api.put(url, { category_id, name, image, description, tags, company_id, price, lesson_type }).then(ret => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }

    // 删除
    delete(id) {
        alert('dellllllllllllllllllllllllllllllllllll')
        // let url = `${urlPre}/${id}/`
        let url = `${urlPre}/delete/${id}`
        console.log(url)
        return api.del(url, {}).then(ret => {
            console.log(1111111111111111)
            console.log(ret)
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

    // 设置课时
    setLessons ({course_id, jsonstr}) {
        let url = `${urlPre}/${course_id}/lesson`
        return api.put(url, jsonstr)
    }

    // 获取课程信息
    getCourseInfo ({course_id}) {
        let url = `${urlPre}/${course_id}`
        return api.get(url).then((ret) => {
            return ret.data
        })
    }
}
export default new sysService()
