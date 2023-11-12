<template>
    <div>
        <Preloader/>
        <router-view />
    </div>
</template>
<script>
    import Preloader from './components/Preloader.vue'

    export default {
        name: "app",
        components: {
            Preloader
        }
    }
</script>