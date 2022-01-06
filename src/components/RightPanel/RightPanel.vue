<template>
    <transition name="right-panel">
        <div v-if="isVisible" class="right-panel">
            <transition name="course-info">
                <right-panel-course-info
                    v-on:show-lessons-list="showLessonsList"
                    v-if="courseInfoIsVisible && !lessonsListIsVisible"
                    :course="courseInfo"
                />
            </transition>

            <transition name="lessons-list">
                <right-panel-lessons-list
                    v-on:go-to-course-info="goToCourseInfo"
                    v-if="lessonsListIsVisible && !courseInfoIsVisible"
                    :course="courseInfo"
                />
            </transition>
            <right-panel-exercise-info v-if="exerciseInfoIsVisible" />
        </div>
    </transition>
</template>

<script>
//! Сделать нормальную анимацию при переходе на другие страницы
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import RightPanelCourseInfo from './RightPanelCourseInfo.vue'
import RightPanelLessonsList from './RightPanelLessonsList.vue';
import RightPanelExerciseInfo from './RightPanelExerciseInfo.vue';
export default {
    name: "right-panel",
    components: { RightPanelCourseInfo, RightPanelLessonsList, RightPanelExerciseInfo },
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            isVisible: state => state.ui.rightPanelVisible,
            courseInfo: state => state.ui.courseInfo,
            courseInfoIsVisible: state => state.ui.rightPanelCourseInfoVisible,
            lessonsListIsVisible: state => state.ui.rightPanelLessonsListVisible,
            exerciseInfoIsVisible: state => state.ui.rightPanelExerciseInfoVisible
        })
    },
    watch: {
        $route(to, from) {
            // hide right panel on location change
            this.$store.dispatch('ui/hideRightPanel');
        }
    },
    methods: {
        showLessonsList() {
            this.$store.dispatch('ui/hideRightPanelCourseInfo');
            this.$store.dispatch('ui/showRightPanelLessonsList');
        },
        goToCourseInfo() {
            this.$store.dispatch('ui/hideRightPanelLessonsList');
            this.$store.dispatch('ui/showRightPanelCourseInfo');
        }
    }
}
</script>

<style lang="scss" scoped>
.right-panel {
    position: relative;
    flex: 0 0 370px;
    background: var(--background-primary);
    overflow-x: hidden;
    overflow-y: auto;
    transition: flex 0.3s linear;
    &.visible {
        flex: 0 0 370px;
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