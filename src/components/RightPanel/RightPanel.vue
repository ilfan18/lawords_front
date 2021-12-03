<template>
    <div v-if="isVisible" class="right-panel"></div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    name: 'right-panel',
    computed: {
        isVisible() {
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
.right-panel {
    flex: 0 0 370px;
    background: var(--background-primary);
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