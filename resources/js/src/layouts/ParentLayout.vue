<template>
    <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" class="d-flex flex-column">

            <nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow">

                <!-- Sidebar Toggle (Topbar) -->
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>


                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">

                    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                    <li class="nav-item dropdown no-arrow d-sm-none">
                    </li>

                    <!-- Nav Item - Alerts -->
                    <li class="nav-item dropdown no-arrow mx-1">
                    </li>

                    <!-- Nav Item - Messages -->
                    <li class="nav-item dropdown no-arrow mx-1">
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                    <!-- Nav Item - User Information -->
                    <li class="nav-item dropdown no-arrow m-3">
                        <LogoutBar/>
                    </li>

                </ul>

            </nav>
            <!-- Main Content -->
            <div id="">

                <!-- Topbar -->
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="p-5">
                    <router-view/>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="row">
                    <div class="col-10">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span style="
                                    font-weight: bold;
                                    font-size: 21px;
                                    color: black;
                                ">Copyright &copy; edutama.id {{ new Date().getFullYear() }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-2" style="
                        text-align: right;
                        padding-right: 34px;
                    ">
                        <div class="product-buttons  fixed-bottom" style="
                            margin-right: 20px;
                            margin-bottom: 20px;
                        ">
                            <!--<a :href="`https://api.whatsapp.com/send?phone=${$store.state.auth.phone}&text=Halo kak saya tertarik ingin belajar di akademi`">-->
                            <!--<i class="fa fa-whatsapp" style="font-size:70px;color:green"></i>-->
                            <!--</a>-->
                        </div>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->
        </div>
    </div>
</template>
<script>
    import Navbar from '../components/Navbar.vue'
    import LogoutBar from '../components/LogoutBar.vue'

    export default {
        name: "ParentLayout",
        components: {
            Navbar, LogoutBar
        }
    }
</script>