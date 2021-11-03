<template>
    <div class="left-panel">
        <div class="logo">
            <img src="@/assets/logo.png" alt />
        </div>
        <navbar></navbar>
    </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
export default {
    components: { navbar },
}
</script>

<style lang="scss" scoped>
.left-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 90px;
    height: 100%;
    padding: 35px 14px;
    background: teal;
}
.logo {
    max-width: 53px;
    max-height: 31px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
}
</style>