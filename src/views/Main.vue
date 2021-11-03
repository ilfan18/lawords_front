<template>
    <div class="main">
        <left-panel></left-panel>
        <div class="main__content"></div>
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

<style lang="scss" scoped>
.main {
    min-height: 100vh;
    padding: 0 370px 0 90px;
    background: #f8f8f8;
}
</style>