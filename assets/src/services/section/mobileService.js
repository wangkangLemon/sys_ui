import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/appmenu'

class MobileService {
    uploadboot ({company_id, image}) {
        let finalUrl = `${config.apiHost}/com/${company_id}/mobile/boot/upload`
        return api.post(finalUrl, {company_id, image, alias: +new Date() + '.png'}, false)
    }
    // 获取启动图
    getBoot ({company_id}) {
        let finalUrl = `${urlPre}/boot`
        return api.get(finalUrl).then((ret) => {
            return ret.data
        })
    }
    // 更新启动图
    updateBoot ({company_id, image, url, status}) {
        let finalUrl = `${urlPre}/boot`
        return api.put(finalUrl, {image, url, status})
    }
    // 查询接口
    menuSearch ({page, pagesize}) {
        let finalUrl = `${urlPre}/menu/scheme/list`
        return api.get(finalUrl, {page, pagesize}).then((ret) => {
            return ret.data
        })
    }
    // 应用导航方案
    applyMenu (id) {
        let finalUrl = `${urlPre}/menu/scheme/${id}/enable`
        return api.put(finalUrl)
    }
    // 克隆导航
    menuClone (id) {
        let finalUrl = `${urlPre}/menu/scheme/${id}/copy`
        return api.put(finalUrl)
    }
    // 删除导航方案
    menuDelete (id) {
        let finalUrl = `${urlPre}/menu/scheme/${id}`
        return api.del(finalUrl)
    }
    // 上传导航图标
    uploadNavIcon ({image, alias}) {
        let finalUrl = `${urlPre}/menu/scheme/cover`
        return api.post(finalUrl, {image, alias}).then((ret) => {
            return ret.data
        })
    }
    // 更新方案
    updateMenu ({info, scheme_id}) {
        let finalUrl = `${urlPre}/menu/scheme/${scheme_id}`
        return api.put(finalUrl, info)
    }
    // -------------------导航管理部分-------------
    // 获取方案组列表
    searchScheme ({type, platform, version, page, pagesize}) {
        let finalUrl = `${urlPre}/group/lists`
        return api.get(finalUrl, {type, platform, version, page, pagesize}).then((ret) => {
            return ret
        })
    }
    // 获取方案组筛选版本
    searchVersions ({type, platform}) {
        let finalUrl = `${urlPre}/menuscheme/versions`
        return api.get(finalUrl, {type, platform}).then((ret) => {
            return ret.data
        })
    }
    // 创建方案组
    createScheme ({type, version, adapter, used}) {
        let finalUrl = `${urlPre}/group/create`
        return api.post(finalUrl, {type,version, adapter, used}).then((ret) => {
            return ret
        })
    }
    // 克隆方案组
    cloneScheme ({scheme_id}) {
        let finalUrl = `${urlPre}/group/clone/${scheme_id}`
        return api.post(finalUrl, {scheme_id}).then((ret) => {
            return ret.data
        })
    }
    // 删除导航方案
    deleteScheme ({scheme_id}) {
        let finalUrl = `${urlPre}/menuscheme/${scheme_id}`
        return api.del(finalUrl)
    }
    // 启用方案
    activeScheme ({scheme_id, ios, android}) {
        let finalUrl = `${urlPre}/menuscheme/${scheme_id}/active`
        return api.post(finalUrl, {ios, android})
    }
    // 获取平台版本列表
    getPlatVersions ({scheme_id}) {
        let finalUrl = `${urlPre}/menuscheme/${scheme_id}/validate`
        return api.get(finalUrl).then((ret) => {
            return ret.data
        })
    }
    // 删除功能
    deleteModule ({scheme_id, module_id}) {
        let finalUrl = `${urlPre}/menuscheme/${scheme_id}/module/${module_id}`
        return api.del(finalUrl)
    }
    // 获取功能版本
    getModuleVersions () {
        let finalUrl = `${urlPre}/appmodule/version`
        return api.get(finalUrl).then((ret) => {
            return ret.data
        })
    }
    // 获取功能列表
    getModules ({version}) {
        let finalUrl = `${urlPre}/list`
        return api.get(finalUrl, {version}).then((ret) => {
            return ret.data
        })
    }
    // 添加功能
    // addModule ({scheme_id, type, type_id, url, name, icon, notify, notify_node, notify_icon, notify_text, sort, group = 0}) {
    //     let finalUrl = `${urlPre}/menuscheme/${scheme_id}/module`
    //     return api.post(finalUrl, {type, type_id, url, name, icon, notify, notify_node, notify_icon, notify_text, sort, group}).then((ret) => {
    //         return ret.data
    //     })
    // }
    addModule ({scheme_id, type, type_id, url, name, icon, notify, notify_node, notify_icon, notify_text, sort, group = 0}) {
        let finalUrl = `${urlPre}/menuscheme/${scheme_id}/module`
        return api.post(finalUrl, {type, type_id, url, name, icon, notify, notify_node, notify_icon, notify_text, sort, group}).then((ret) => {
            return ret.data
        })
    }
    // 更新功能
    updateModule ({scheme_id, module_id, type, type_id, url, name, icon, notify, notify_node, notify_icon, notify_text}) {
        let finalUrl = `${urlPre}/menuscheme/${scheme_id}/module/${module_id}`
        return api.put(finalUrl, {type, type_id, url, name, icon, notify, notify_node, notify_icon, notify_text})
    }
    // 上传功能图标
    // uploadModuleScheme ({image, alias, scheme_id}) {
    //     let finalUrl = `${urlPre}/menuscheme/${scheme_id}/module/icon`
    //     return api.post(finalUrl, {image, alias}).then((ret) => {
    //         return ret.data
    //     })
    // }

    uploadModuleScheme ({image, alias, scheme_id, biz='section'}) {
        let finalUrl =  `${config.apiHost}/common/upload/base64`
        return api.post(finalUrl, {image, alias, biz}).then((ret) => {
            xmview.showTip('success',ret.message)
            return ret.data
        })
    }
    //      // 专家上传头像
    // uploadExpertsAvatar({ image, alias = Date.now() + '.jpg', biz='expert' }) {
    //     let url = `${config.apiHost}/common/upload/base64`
    //     return api.post(url, { image, alias, biz }).then((ret) => {
    //         xmview.showTip('success',ret.message)
    //             return ret.data
    //     })
    // }
    // 功能排序
    sortModule ({scheme_id, modules}) {
        let finalUrl = `${urlPre}/menuscheme/${scheme_id}/module/sort`
        return api.post(finalUrl, {modules})
    }
}

export default new MobileService()
