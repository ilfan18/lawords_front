<template>
    <nav class="nav">
        <ul class="nav__top">
            <navbar-item url="/" title="Главная" type="home" />
            <navbar-item url="/courses" title="Курсы" type="book-open" />
            <navbar-item url="/about" title="#" type="bookmark" />
        </ul>
        <ul class="nav__bottom">
            <navbar-item url="/settings" title="Настройки" type="settings" />
            <navbar-item @click="handleLogout" title="Выйти" type="log-out" />
        </ul>
    </nav>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import NavbarItem from './NavbarItem.vue'
export default {
    name: 'navbar',
    components: { NavbarItem },
    methods: {
        ...mapActions({
            logout: 'auth/logout'
        }),
        handleLogout() {
            this.logout()
            console.log('object');
        }
    }
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