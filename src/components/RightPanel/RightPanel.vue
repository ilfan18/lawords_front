<template>
    <transition name="right-panel">
        <div v-if="isVisible" class="right-panel">
            <transition name="course-info">
                <right-panel-course-info
                    v-on:show-lessons-list="showLessonsList"
                    v-if="courseInfoIsVisible"
                    :course_id="CourseInfoId"
                />
            </transition>

            <transition name="lessons-list">
                <right-panel-lessons-list
                    v-on:go-to-course-info="goToCourseInfo"
                    v-if="lessonsListIsVisible"
                    :course_id="CourseInfoId"
                />
            </transition>
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
            return this.$store.state.ui.rightPanelVisible;
        },
        CourseInfoId() {
            return this.$store.state.ui.courseInfoId;
        },
    },
    methods: {
        showLessonsList() {
            this.courseInfoIsVisible = false
            this.lessonsListIsVisible = true
        },
        goToCourseInfo() {
            this.courseInfoIsVisible = true
            this.lessonsListIsVisible = false
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
.lessons-list-enter-from,
.lessons-list-leave-to {
    opacity: 0;
}
.course-info-enter-from,
.course-info-leave-to {
    opacity: 0;
}
</style>