/**
 * Created by huanghuixin on 2017/3/29.
 */
import {
    INDEX_SETWEBPATH,
    INDEX_SET_NAVMENU,
    INDEX_SET__MENU_ACTIVE,
    INDEX_SET__CLEARFETCHPARAM,
    INDEX_SET__SETSECMENU,
    INDEX_SET__SETSECPID,
    INDEX_SET__SAVEGOVRANK,
    INDEX_SET__SAVEEXAMCATEGORY,
} from '../mutations'

const Auth = {
    state: {
        webpathMain: '主页',
        webpathSub: '',
        navMenu: [], // 导航菜单
        navMenueActive: '', // 当前菜单的选中项
        clearFetchParam: false, // 是否清空筛选条件
        secMenu:[],
        secPid:0,
        govRank :[],
        examCate:1,
        examCateName:'',
        // courseCate:{},

    },

    mutations: {
        [INDEX_SETWEBPATH] (state, {main, sub}) {
            state.webpathMain = main
            state.webpathSub = sub
        },
        [INDEX_SET_NAVMENU](state, {menu}) {
            state.navMenu = menu
        },
        [INDEX_SET__MENU_ACTIVE] (state, url) {
            state.navMenueActive = url
        },
        [INDEX_SET__CLEARFETCHPARAM] (state, need) {
            state.clearFetchParam = need
        },
        [INDEX_SET__SETSECMENU] (state, need) {
            state.secMenu = need
        },
        [INDEX_SET__SETSECPID] (state, need) {        
            state.secPid = need
        },
        [INDEX_SET__SAVEGOVRANK] (state, need) {        //保存部门层级关系的数据
            state.govRank= need
        },
        [INDEX_SET__SAVEEXAMCATEGORY](state, { category_id, category_name}) {        //保存部门层级关系的数据
            state.examCate = category_id
            state.examCateName = category_name

        },
        // [INDEX_SET__SETSAVECOURSECATE] (state, need) {        
        //     state.courseCate = need
        // },

    }
}

export default Auth
