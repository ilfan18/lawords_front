<template>
    <div class="app">
        <left-panel></left-panel>
        <router-view />
        <right-panel></right-panel>
    </div>
</template>

<script>
import LeftPanel from '@/components/LeftPanel.vue'
import RightPanel from '@/components/RightPanel.vue'
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
}
</style>