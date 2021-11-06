<template>
    <div class="app">
        <left-panel v-if="isAuth"></left-panel>
        <div class="app__main">
            <router-view />
        </div>
        <right-panel v-if="isAuth"></right-panel>
    </div>
</template>

<script>
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'
export default {
    data() {
        return {
            isAuth: false
        }
    },
    components: { LeftPanel, RightPanel },
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
    color: #000000;
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
    background: #f8f8f8;
    display: flex;
    align-items: stretch;
    &__main {
        flex: 1 1 auto;
    }
}
</style>