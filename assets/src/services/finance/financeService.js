import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/user'

class FinanceService {
    // 订单搜索
    getOrderlists(params) {
        let url = urlPre + '/order/lists'
        return api.get(url, params).then(ret => {
            if (ret.code == 0) {
                return ret
            } else {
                return Promise.reject(ret)
            }
        })
    }

    // 订单获取
    getOrder (id) {
        let finalUrl = `${urlPre}/${id}/`
        return api.get(finalUrl).then((ret) => {
            return ret.data
        })
    }
    // 订单删除
    deleteOrder(id) {
        let url = `${urlPre}/order/delete/${id}`
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

    // 商品管理
    // 商品获取
    getProduct(id) {
        let url = `${urlPre}/product/get/${id}`         //传递的地址的id
        return api.get(url).then(ret => {
            return ret.data
        })
    }
    // 商品列表
    fetchProductList(params) {
        let url = urlPre + '/product/lists'
        return api.get(url, params).then(ret => {
            if (ret.code == 0) {
                return ret
            } else {
                return Promise.reject(ret)
            }
        })
    }
    // 商品创建
    createProduct(fetchParam) {
        let url = urlPre + '/product/create'
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
    // 商品更新
    editProduct(fetchParam, id) {
        let url = `${urlPre}/product/edit/${id}`
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
    // 商品删除
    deleteProduct(id) {
        let url = `${urlPre}/product/delete/${id}`
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

export default new FinanceService()
