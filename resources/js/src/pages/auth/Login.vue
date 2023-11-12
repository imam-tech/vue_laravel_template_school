<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                </div>
                <form class="user">
                    <div class="form-group">
                        <input v-model="formData.email" type="email" class="form-control form-control-user"
                               id="exampleInputEmail" aria-describedby="emailHelp"
                               placeholder="Enter Email Address...">
                    </div>
                    <div class="form-group">
                        <input v-model="formData.password" type="password" class="form-control form-control-user"
                               id="exampleInputPassword" placeholder="Password">
                    </div>
                    <button type="button" @click="loginProcess()" class="btn btn-primary btn-user btn-block">
                        Login
                    </button>
                </form>
                <hr>
                <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div class="text-center">
                    <a class="small" href="register.html">Create an Account!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Cookies from "js-cookie";

    export default {
        name: "Login.vue",
        data() {
            return {
                formData: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            async loginProcess() {
                try {
                    this.$vs.loading();
                    const responseLogin = await this.$axios.post(`api/auth/login`, this.formData)
                    console.log("resp", responseLogin);
                    this.$vs.loading.close()
                    if (responseLogin.status) {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: "success",
                            showConfirmButton: false,
                            timer: 1500
                        }).then(()=>{
                            this.$store.commit('SET_USER', {
                                'name' : responseLogin.data.user.name,
                                'email' : responseLogin.data.user.email,
                                'permissions' : responseLogin.data.permissions,
                                'roles' : responseLogin.data.role,
                                'sign_at': responseLogin.data.sign_at
                            })
                            this.$store.commit('SET_LOGIN', true)
                            Cookies.set('access_token', responseLogin.data.token, { expires: 1 })
                            // this.$router.push('/app');
                        })
                    } else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: responseLogin.message,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                } catch (e) {
                    this.$vs.loading.close()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: e.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }
        }
    }
</script>