<template>
    <transition name="right-panel">
        <div v-if="isVisible" class="right-panel">
            <right-panel-course-info
                v-if="rightPanelShowCourseId"
                :course_id="rightPanelShowCourseId"
            />
        </div>
    </transition>
</template>

<script>
import { computed } from '@vue/reactivity'
import RightPanelCourseInfo from './RightPanelCourseInfo.vue'
export default {
    name: "right-panel",
    computed: {
        isVisible() {
            return this.$store.state.ui.right_panel_visible;
        },
        rightPanelShowCourseId() {
            return this.$store.state.ui.right_panel_show_course_id;
        }
    },
    components: { RightPanelCourseInfo }
}
</script>

<style lang="scss" scoped>
.right-panel {
    flex: 0 0 370px;
    background: var(--background-primary);
    overflow-x: auto;
    transition: all 0.3s linear;
    &.visible {
        flex: 0 0 370px;
        .right-panel__inner {
            width: 100%;
        }
    }
    &__inner {
        background: red;
        width: 0;
    }
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
}
.right-panel-enter-from,
.right-panel-leave-to {
    flex: 0 0 0;
}
</style>