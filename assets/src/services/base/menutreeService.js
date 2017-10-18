import * as api from '../api'
import config from '../../utils/config'
const urlPre = config.apiHost + '/auth/menus'


export default function getMenutree (token) {
    let url = urlPre
    return api.post(url,{
        token
    }).then(ret => {
        if (ret.code != -1) {
            return ret.data
        } else {
            return Promise.reject(ret)
        }
    })
}

