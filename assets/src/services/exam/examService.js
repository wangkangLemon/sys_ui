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
    //
    fetchCourseLists ({pagesize, page, title,category_id}) {
        let url = urlPre + '/course/lists'
        return api.get(url, { pagesize, page, title, category_id }).then(ret => {
            if (ret.code == 0) {
                return ret
            } else {
                return Promise.reject(ret)
            }
        })
    }
    //
    // 添加课程
    addGov({
        category_id,
        chapter_id,
        course_name,
        image,
        tags,
        description,
        material_id,
        status,
        deleted,
        experts_id,
        sort,
        audited,
    }) {
        let finalUrl = urlPre + '/course/create'
        return api.post(finalUrl, {
            category_id,
            chapter_id,
            course_name,
            image,
            tags,
            description,
            material_id,
            status,
            deleted,
            experts_id,
            sort,
            audited,
        }).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }
    // 更新课程信息
    updateGov({
        gov_id,
        category,
        pid,
        province_id,
        city_id,
        area_id,
        town_id,
        village_id,
        name,
        concact,
        mobile,
        email,
        mobile_title,
        tel,
        zip,
        fax,
        url,
        address,
        description,
    }) {
        let finalUrl = `${urlPre}/course/edit/${gov_id}`
        return api.post(finalUrl, {
            category,
            pid,
            province_id,
            city_id,
            area_id,
            town_id,
            village_id,
            name,
            concact,
            mobile,
            email,
            mobile_title,
            tel,
            zip,
            fax,
            url,
            address,
            description,
        }).then((ret) => {
            if (ret.code) {
                return Promise.reject(ret)
            }
        })
    }


}
export default new examService()
