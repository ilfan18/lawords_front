<template>
    <div class="left-panel">
        <div class="logo">
            <img src="@/assets/logo.png" alt />
        </div>
        <navbar />
    </div>
</template>

<script>
import navbar from './Navbar.vue'
export default {
    name: 'left-panel',
    components: { navbar },
}
</script>

<style lang="scss" scoped>
.left-panel {
    flex: 0 0 90px;
    display: flex;
    flex-direction: column;
    padding: 35px 14px;
    background: var(--background-primary);
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
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