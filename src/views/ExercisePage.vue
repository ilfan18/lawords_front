<template>
    <div v-if="!isLessonLoading" class="exercise content">
        <div class="exercise__progress"></div>
        <div class="exercise__list">
            <exercise-item
                v-on:exerciseAnswered="handleExerciseAnswered"
                v-for="exercise in lesson.exercises"
                :key="exercise.id"
                :exercise="exercise"
            />
        </div>
    </div>
    <page-loader v-else />
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import PageLoader from '@/components/Loaders/PageLoader.vue';
import ExerciseItem from '@/components/Exercise/ExerciseItem.vue';
export default {
    components: { PageLoader, ExerciseItem },
    computed: {
        ...mapState({
            lesson: state => state.courses.currentLesson,
            isLessonLoading: state => state.courses.isLessonLoading,
        }),
    },
    watch: {
        $route(to, from) {
            this.$store.dispatch('ui/hideRightPanel');
        }
    },
    beforeMount() {
        this.fetchLesson(this.$route.params.exerciseId)
        this.$store.dispatch('ui/showRightPanel')
        this.$store.dispatch('ui/showRightPanelExerciseInfo')
    },
    methods: {
        ...mapActions({
            fetchLesson: 'courses/fetchLesson',
        }),
        handleExerciseAnswered(score) {
            console.log(score);
        }
    },
}
</script>

<style lang="scss" scoped>
.exercise {
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
    &__progress {
    }

    &__list {
    }
}
</style>