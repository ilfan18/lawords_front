<template>
    <div class="app">
        <left-panel></left-panel>
        <div class="app__main">
            <router-view />
        </div>

        <right-panel></right-panel>
    </div>
</template>

<script>
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'
export default {
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
    font-size: 1.4rem;
}
.app {
    height: 100%;
    min-height: 720px;
    background: #f8f8f8;
    display: flex;
    align-items: stretch;
    &__main {
        flex: 1 1 auto;
    }
}
</style>