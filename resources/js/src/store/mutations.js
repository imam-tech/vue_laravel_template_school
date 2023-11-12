const mutations = {
    SET_USER (state, val) {
        console.log('set user')
      state.email = val.email
      state.name = val.name
      state.signAt = val.sign_at
      state.permissions = val.permissions
      state.roles = val.roles
    },

    SET_IS_LOGIN(state, val){
      state.isLogin = val
    },

    SET_SIGN_AT(state, val){
      state.signAt = val
    }
}
export default mutations
