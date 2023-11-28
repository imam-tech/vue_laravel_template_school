<template>

    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
<script>

    export default {
        name: "AuthLayout",
    }
</script>