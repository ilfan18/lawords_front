<template>
    <transition name="right-panel">
        <div v-if="isVisible" class="right-panel">
            <transition name="course-info">
                <right-panel-course-info
                    v-on:show-lessons-list="showLessonsList"
                    v-if="courseInfoIsVisible"
                    :course="courseInfo"
                />
            </transition>

            <transition name="lessons-list">
                <right-panel-lessons-list
                    v-on:go-to-course-info="goToCourseInfo"
                    v-if="lessonsListIsVisible"
                    :course="courseInfo"
                />
            </transition>
            <right-panel-exercise-info />
        </div>
    </transition>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import RightPanelCourseInfo from './RightPanelCourseInfo.vue'
import RightPanelLessonsList from './RightPanelLessonsList.vue';
import RightPanelExerciseInfo from './RightPanelExerciseInfo.vue';
export default {
    name: "right-panel",
    components: { RightPanelCourseInfo, RightPanelLessonsList, RightPanelExerciseInfo },
    data() {
        return {
            courseInfoIsVisible: false,
            lessonsListIsVisible: false,
            exerciseInfoIsVisible: false
        }
    },
    computed: {
        ...mapState({
            isVisible: state => state.ui.rightPanelVisible,
            courseInfo: state => state.ui.courseInfo
        })
    },
    watch: {
        $route(to, from) {
            // hide right panel on location change
            this.$store.dispatch('ui/hideRightPanel');
            this.courseInfoIsVisible = true
            this.lessonsListIsVisible = false
            this.exerciseInfoIsVisible = false
        }
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
    overflow-x: hidden;
    overflow-y: auto;
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