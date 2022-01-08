<template>
    <div v-if="!isLessonLoading" class="exercise">
        <div class="exercise__inner content">
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
    </div>
    <page-loader v-else />
</template>

<script>
import router from '@/router';
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
            isLessonLoading: state => state.courses.isCurrentLessonLoading,
        }),
        ...mapGetters({
            totalExercises: 'courses/totalExercises',
            maxScore: 'courses/maxScore',
        }),
        percentCompleted() {
            if (this.totalExercises != 0) {
                return Math.floor(this.answeredExercises * 100 / this.totalExercises)
            } else {
                return 0
            }
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
            fetchLesson: 'courses/fetchCurrentLesson',
            setExerciseResult: 'courses/setExerciseResult',
            lessonsEdit: 'user/lessonsEdit',
            addNotification: 'notifications/addNotification'
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
                let lesson = {
                    id: this.lesson.id,
                    score: this.score
                }
                this.lessonsEdit(lesson)
                const notification = {
                    title: 'Урок пройден',
                    text: this.lesson.name,
                    icon: this.lesson.icon
                }
                this.addNotification(notification)
                router.push('/courses')
            }
            // if (this.score <= this.maxScore * 0.55) {
            //     console.log('bad');
            // }
        }
    },
}
</script>

<style lang="scss" scoped>
.exercise {
    position: relative;
    height: 100%;
    padding-right: 370px;
    &__inner {
        overflow-x: auto;

        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--scrollbar-color);
            border-radius: 10px;
        }
    }
    &__progress {
    }

    &__list {
        margin-top: 10px;
        padding-top: 20px;
    }
}
</style>