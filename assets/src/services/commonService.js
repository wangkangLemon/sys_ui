
import * as api from './api'
import authUtils from '../utils/authUtils'
import config from '../utils/config'
const urlPre = config.apiHost 

class CommonService {

// 公共添加编辑课程上传图片  ---传base64
    commonUploadImageBase({image, alias = Date.now() + '.jpg', biz='common', extpath}) {
        
        let url = `${config.apiHost}/common/upload/base64`
        return api.post(url, {image, alias, biz, extpath}).then((ret) => {
            xmview.showTip('success',ret.message)
            return ret.data
        })
    }
// 获取添加编辑课程上传图片的url (与题目里的上传图片的url为同一个)  =====直接传图

    //在父组件要配置:data='uploadextraData' data里定义参数
    commonUploadImage() { 
        return `${config.apiHost}/common/upload/file`
    }


    // // 添加编辑课程上传图片  ---传base64
    // uploadCover4addCourse({ image, alias = Date.now() + '.jpg' }) {
    //     let url = `${config.apiHost}/course/subject/image`
    //     return api.post(url, { image, alias }).then((ret) => {
    //         return ret.data
    //     })
    // }

     // 专家上传头像
    uploadExpertsAvatar({ image, alias = Date.now() + '.jpg', biz='expert' }) {
        let url = `${config.apiHost}/common/upload/base64`
        return api.post(url, { image, alias, biz }).then((ret) => {
            xmview.showTip('success',ret.message)
                return ret.data
        })
    }
     //base64
    commonUploadImageBaseSection({image, alias = Date.now() + '.jpg', biz='section'}) {
        let url = `${config.apiHost}/common/upload/base64`
        return api.post(url, {image, alias, biz}).then((ret) => {
            xmview.showTip('success',ret.message)
            return ret.data
        })
    }

    // 公共添加编辑头像  ---传base64  可配置 biz, extpath
    commonUploadAvatar({ image, alias = Date.now() + '.jpg', biz, extpath }) {

        let url = `${config.apiHost}/common/upload/base64`
        return api.post(url, { image, alias, biz, extpath }).then((ret) => {
            xmview.showTip('success', ret.message)
            return ret.data
        })
    }


}
export default new CommonService()