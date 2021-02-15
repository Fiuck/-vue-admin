const state = {
    sidebar: {
        opened: true
    },
    navbar: {
        menus: [],
        currentMenu: null
    }
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened
    },
    SELECT_MENU: (state, payload) => {
        if(payload.path === '/'){
            state.navbar.currentMenu = null
            window.sessionStorage.setItem('selectMenu', null)
        }else {
            state.navbar.currentMenu = payload
            window.sessionStorage.setItem('selectMenu', JSON.stringify(payload))
        }
    }
}

const actions = {
    toggleSideBar({ commit }){
        commit('TOGGLE_SIDEBAR')
    },
    selectMenu({ commit }, payload){
        commit('SELECT_MENU', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}