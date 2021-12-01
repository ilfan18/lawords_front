<template>
    <div class="app">
        <left-panel v-if="isAuth" />
        <div class="app__main">
            <router-view />
        </div>
        <right-panel v-if="isAuth" />
    </div>
</template>

<script>
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'
export default {
    name: 'app',
    components: { LeftPanel, RightPanel },
    data() {
        return {}
    },
    computed: {
        isAuth() {
            return this.$store.state.auth.status.loggedIn;
        },
        user() {
            return this.$store.state.auth.user;
        },
    },
}
</script>

<style lang="scss">
html {
    font-size: 62.5%;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Inter;
    font-size: 1.4rem;
}
html,
body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
#app {
    height: 100vh;
}
.app {
    height: 100%;
    display: flex;
    align-items: stretch;
    &__main {
        flex: 1 1 auto;
    }
    --background-primary: #ffffff;
    --background-secandary: #f8f8f8;
    --text-primary: #000000;
    --text-secandary: #737373;
    --scrollbar-color: #ededed;
    --nav-item-round: #ececec;
    &.dark-theme {
        --background-primary: #1c1c1c;
        --background-secandary: #000000;
        --text-primary: #ffffff;
        --text-secandary: #737373;
        --scrollbar-color: #5b5b5b;
        --nav-item-round: #101010;
    }
    background: var(--background-secandary);
    color: var(--text-primary);
}
.main-content {
    padding: 30px 40px;
    height: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
}
</style>