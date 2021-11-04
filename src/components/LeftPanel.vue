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

<style lang="scss">
.left-panel {
    top: 0;
    left: 0;
    flex: 0 0 90px;
    display: flex;
    flex-direction: column;
    padding: 35px 14px;
    background: #ffffff;
}
.logo {
    max-width: 50px;
    max-height: 50px;
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