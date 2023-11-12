<template>
    <div class="d-flex justify-content-center" v-if="this.$store.state.signAt">
        <router-link class="dropdown-item mt-2" to="/app/profile">
            <img src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg" style="width:40px" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <h6>{{this.$store.state.name.substring(0,7)+ '...'}}</h6>
        </router-link>
        <button class="btn btn-warning m-4 d-flex justify-content-center" @click="confirmLogout()">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 mt-1 text-gray-400"></i>Logout
        </button>
    </div>
</template>

<script>

    import Cookies from 'js-cookie'

    export default {
        data() {
            return {
                'data' : {}
            }
        },
        methods: {
            async confirmLogout() {
                let hasLogin = confirm('Are you sure you want to logout?')
                if( hasLogin) {
                    await this.$axios.get(`api/auth/logout`)
                    Cookies.remove('access_token', {path: ''})
                    this.$router.push('/auth/login');
                }
            }
        }

    }
</script>


