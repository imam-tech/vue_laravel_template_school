const actions = {
    setUser({commit}, val){
        commit('SET_USER', val)
    },

    setLogin({commit}, val){
        commit('SET_IS_LOGIN', val)
    },

    setSignAt({commit}, val){
        commit('SET_SIGN_AT', val)
    }
}

export default actions
