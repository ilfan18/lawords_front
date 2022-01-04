<template>
    <div v-if="!isLessonLoading" class="exercise content">
        <div class="exercise__progress">
            <exercise-progress-bar :percent-completed="percentCompleted" />
        </div>
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
import ExerciseProgressBar from '@/components/UI/ExerciseProgressBar.vue';
export default {
    components: { PageLoader, ExerciseItem, ExerciseProgressBar },
    data() {
        return {
            answeredExercises: 0,
            score: 0
        }
    },
    computed: {
        ...mapState({
            lesson: state => state.courses.currentLesson,
            isLessonLoading: state => state.courses.isLessonLoading,
        }),
        ...mapGetters({
            totalExercises: 'courses/totalExercises',
            maxScore: 'courses/maxScore',
        }),
        percentCompleted() {
            return Math.floor(this.answeredExercises * 100 / this.totalExercises)
        }
    },
    watch: {
        $route(to, from) {
            this.$store.dispatch('ui/hideRightPanel');
        },
    },
    beforeMount() {
        this.fetchLesson(this.$route.params.exerciseId)
        this.$store.dispatch('ui/showRightPanel')
        this.$store.dispatch('ui/showRightPanelExerciseInfo')
    },
    methods: {
        ...mapActions({
            fetchLesson: 'courses/fetchLesson',
            setExerciseResult: 'courses/setExerciseResult'
        }),
        handleExerciseAnswered(score) {
            this.answeredExercises++
            this.score += score
            this.setExerciseResult({
                answeredExercises: this.answeredExercises,
                score: this.score,
            })
            if (this.answeredExercises == this.totalExercises) {
                this.finishExercise()
            }
        },
        finishExercise() {
            // ! Как то по другому сделать оценивание
            if (this.score > this.maxScore * 0.55) {
                console.log(this.score);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.exercise {
    overflow-x: auto;
    position: relative;
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
        margin-top: 10px;
        padding-top: 20px;
    }
}
</style>