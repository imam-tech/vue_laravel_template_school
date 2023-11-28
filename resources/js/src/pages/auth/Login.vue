<template>

    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card-group d-block d-md-flex row">
                <div class="card col-md-7 p-4 mb-0">
                    <div class="card-body">
                        <h1>Login</h1>
                        <p class="text-medium-emphasis">Sign In to your account</p>
                        <div class="input-group mb-3"><span class="input-group-text">
                      <svg class="icon">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
                      </svg></span>
                            <input class="form-control" type="text" placeholder="Username">
                        </div>
                        <div class="input-group mb-4"><span class="input-group-text">
                      <svg class="icon">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
                      </svg></span>
                            <input class="form-control" type="password" placeholder="Password">
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-primary px-4" type="button">Login</button>
                            </div>
                            <div class="col-6 text-end">
                                <button class="btn btn-link px-0" type="button">Forgot password?</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-md-5 text-white bg-primary py-5">
                    <div class="card-body text-center">
                        <div>
                            <h2>Sign up</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button class="btn btn-lg btn-outline-light mt-3" type="button">Register Now!</button>
                        </div>
                    </div>
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