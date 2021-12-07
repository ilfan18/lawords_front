<template>
    <transition name="right-panel">
        <div v-if="isVisible" class="right-panel">
            <right-panel-course-info
                v-on:show-lessons-list="showLessonsList"
                v-if="courseInfoIsVisible"
                :course_id="showCourseInfoId"
            />
            <right-panel-lessons-list v-if="lessonsListIsVisible" :course_id="showCourseInfoId" />
        </div>
    </transition>
</template>

<script>
import RightPanelCourseInfo from './RightPanelCourseInfo.vue'
import RightPanelLessonsList from './RightPanelLessonsList.vue';
export default {
    name: "right-panel",
    components: { RightPanelCourseInfo, RightPanelLessonsList },
    data() {
        return {
            courseInfoIsVisible: true,
            lessonsListIsVisible: false
        }
    },
    computed: {
        isVisible() {
            return this.$store.state.ui.right_panel_visible;
        },
        showCourseInfoId() {
            return this.$store.state.ui.show_course_info_id;
        },
    },
    methods: {
        showLessonsList() {
            this.courseInfoIsVisible = false
            this.lessonsListIsVisible = true
        }
    }
}
</script>

<style lang="scss" scoped>
.right-panel {
    flex: 0 0 370px;
    background: var(--background-primary);
    overflow-x: auto;
    transition: flex 0.3s linear;
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