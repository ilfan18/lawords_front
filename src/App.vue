<template>
    <div class="app" :class="theme">
        <left-panel v-if="isAuth" />
        <div class="app__main">
            <router-view />
        </div>
        <right-panel v-if="isAuth" />
        <image-uploader-modal v-if="uploadImageModalVisible" />
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'
export default {
    name: 'app',
    components: { LeftPanel, RightPanel },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            isAuth: state => state.auth.status.loggedIn,
            tokens: state => state.auth.user,
            uploadImageModalVisible: state => state.ui.uploadImageModalVisible
        }),
        theme() {
            return this.$store.state.ui.theme == 'light' ? '' : 'dark-theme';
        }
    },
    mounted() {
        this.getUserInfo()
    },
    methods: {
        ...mapActions({
            getUserInfo: 'user/getUserInfo',
        }),
    },
}
</script>

<style lang="scss">
html {
    font-size: 62.5%;
}
html,
body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
body {
    font-family: Inter;
    font-size: 1.4rem;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
}
#app {
    height: 100vh;
}
.app {
    height: 100%;
    display: flex;
    align-items: stretch;
    position: relative;
    &__main {
        flex: 1 1 auto;
    }
    --background-primary: #ffffff;
    --background-secandary: #f8f8f8;
    --background-third: #f5f5f5;
    --background-fourth: #efefef;
    --border-first: #e6e6e6;
    --text-primary: #000000;
    --text-second: #737373;
    --text-third: #2e2e2e;
    --text-fourth: #272727;
    --scrollbar-color: #ededed;
    --nav-item-round: #ececec;
    &.dark-theme {
        --background-primary: #1c1c1c;
        --background-secandary: #000000;
        --background-third: #303030;
        --background-fourth: #000000;
        --border-first: #3a3a3a;
        --text-primary: #ffffff;
        --text-second: #737373;
        --text-third: #b8b8b8;
        --text-fourth: #ffffff;
        --scrollbar-color: #5b5b5b;
        --nav-item-round: #101010;
    }
    background: var(--background-secandary);
    color: var(--text-primary);
}
.content {
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