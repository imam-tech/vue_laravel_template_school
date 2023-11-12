import Vue from 'vue'
import router from './src/routers/router.js'
import App from './src/App.vue'
import store from './src/store/store.js'
import './src/plugins/axios.js'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')