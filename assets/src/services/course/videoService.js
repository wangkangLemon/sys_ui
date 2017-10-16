// 视频管理
import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/course/video'

class VideoService {
    // 搜索
    search({ status, keyword, page, page_size, time_start, time_end }) {
        let url = `${urlPre}/search`
        if (status == null || status === '') {
            status = -1
        }
        return api.get(url, { status, keyword, page, page_size, time_start, time_end }).then((ret) => {
            return ret.data
        })
    }

    // 添加
    create({ name, tags, source_type, source_url }) {
        let url = `${urlPre}/`
        return api.post(url, { name, tags, source_type, source_url })
    }

    // 修改
    update({ id, name, tags, cover, duration }) {
        let url = `${urlPre}/${id}/`
        return api.put(url, { name, tags, cover, duration })
    }

    // 删除
    delete({ id }) {
        let url = `${urlPre}/${id}`
        return api.del(url)
    }

    // 批量删除
    deleteMulty({ id }) {
        let url = `${urlPre}/batchdel`
        return api.post(url, { id })
    }

    // 获取oss的上传token
    getOssToken() {
        let url = `${urlPre}/upload`
        return api.get(url, {}).then((ret) => {
            return ret.data
        })
    }

    // 刷新视频状态
    refreshStatus({ id } = {}) {
        let url = `${urlPre}/refresh/aliyun/status`
        return api.post(url, { id })
    }

    // 获取上传封面的url
    getUploadCoverUrl() {
        return `${urlPre}/cover`
    }

    // 获取视频预览信息
    getPreviewInfo(id) {
        let url = `${urlPre}/${id}/preview`
        return api.get(url).then((ret) => {
            return ret.data
        })
    }
}

export default new VideoService()
