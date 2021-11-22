<template>
    <nav class="nav">
        <ul class="nav__top">
            <navbar-item url="/" title="Главная" type="home"></navbar-item>
            <navbar-item url="/courses" title="Курсы" type="book-open"></navbar-item>
            <navbar-item url="/about" :round="false" title="#" type="bookmark"></navbar-item>
        </ul>
        <ul class="nav__bottom">
            <navbar-item url="/settings" :round="false" title="Настройки" type="settings"></navbar-item>
            <navbar-item url="/about" :round="false" title="Выйти" type="log-out"></navbar-item>
        </ul>
    </nav>
</template>

<script>
import NavbarItem from './NavbarItem.vue'
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