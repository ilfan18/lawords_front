<template>
    <header class="header">
        <h1 class="header__title">
            <slot></slot>
        </h1>
        <div class="header__controls">
            <button class="theme-button" title="Тема">
                <vue-feather
                    v-if="themeIcon"
                    @click.prevent="handleThemeToggle"
                    type="sun"
                    size="24"
                    stroke="#000000"
                />
                <vue-feather
                    v-else
                    @click="handleThemeToggle"
                    type="moon"
                    size="24"
                    stroke="#FFFFFF"
                />
            </button>
            <router-link class="profile-link" to="/profile">
                <image-loader
                    :src="profileImage"
                    alt="Ваш аватар"
                    title="Перейти в профиль"
                    width="48px"
                    height="48px"
                    radius="50%"
                />
            </router-link>
        </div>
    </header>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: 'v-header',
    computed: {
        themeIcon() {
            return this.$store.state.ui.theme == 'light' ? true : false;
        },
        ...mapState({
            profileImage: state => state.user.profile.image,
        })
    },
    methods: {
        handleThemeToggle() {
            this.$store.state.ui.theme == 'light' ?
                this.$store.dispatch('ui/setTheme', 'dark')
                : this.$store.dispatch('ui/setTheme', 'light');
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    &__title {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
    }
    &__controls {
        display: flex;
        align-items: center;
    }
}
.theme-button {
    border: none;
    outline: none;
    background: none;
    display: flex;
    cursor: pointer;
}
.profile-link {
    margin-left: 25px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0;
    border-radius: 50%;
    overflow: hidden;
}
</style>