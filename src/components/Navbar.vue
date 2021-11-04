<template>
    <nav class="nav">
        <ul class="nav__top">
            <navbar-item href="/" title="Главная" type="home"></navbar-item>
            <navbar-item href="/about" title="#" type="clock"></navbar-item>
            <navbar-item href="/about" :round="false" title="#" type="download"></navbar-item>
            <navbar-item href="/about" :round="false" title="#" type="bookmark"></navbar-item>
        </ul>
        <ul class="nav__bottom">
            <navbar-item href="/about" :round="false" title="Настройки" type="settings"></navbar-item>
            <navbar-item href="/about" :round="false" title="Выйти" type="log-out"></navbar-item>
        </ul>
    </nav>
</template>

<script>
import NavbarItem from '@/components/NavbarItem.vue'
export default {
    components: { NavbarItem },
}
</script>

<style lang="scss" scoped>
.nav {
    margin-top: 80px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__top {
    }

    &__bottom {
    }
}
</style>