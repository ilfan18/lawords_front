<template>
    <div v-if="!isLessonLoading" class="exercise-info">
        <div class="exercise-info__header">
            <div class="exercise-info__icon">
                <image-loader
                    :src="lesson.icon"
                    :alt="lesson.name"
                    width="32px"
                    height="32px"
                    radius="10px"
                />
            </div>
            <div class="exercise-info__title">{{ lesson.name }}</div>
        </div>
        <div class="exercise-info__cover">
            <div class="exercise-info__icon-wrapper">
                <image-loader
                    :src="lesson.cover"
                    :alt="lesson.name"
                    width="300px"
                    height="180px"
                    radius="10px"
                />
            </div>
        </div>
        <div class="exercise-info__type">
            <span class="exercise-info__type-name">Не ограниченно</span>
            <vue-feather type="clock" size="45" stroke="#A8A8A8" />
        </div>
        <div class="exercise-info__result">
            <div class="exercise-info__result-label">Всего ответов</div>
            <div class="exercise-info__result-counter">
                <span class="exercise-info__current">{{ answeredExercises }}</span>
                /
                <span class="exercise-info__total">{{ totalExercises }}</span>
            </div>
        </div>
        <div class="exercise-info__score">
            Баллов - {{ score }}
            <transition name="score-spoiler">
                <div
                    v-if="scoreSpoilerValue"
                    class="exercise-info__score-spoler"
                >+{{ scoreSpoilerValue }}</div>
            </transition>
        </div>
        <router-link to="/" class="exercise-info__stop">Прервать урок</router-link>
    </div>
    <exercise-info-skeleton v-else />
</template>

<script>
// ! Сделать таймер
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import ExerciseInfoSkeleton from '../Loaders/ExerciseInfoSkeleton.vue'
export default {
    components: { ExerciseInfoSkeleton },
    data() {
        return {
            scoreSpoilerValue: null
        }
    },
    computed: {
        ...mapState({
            isLessonLoading: state => state.courses.isCurrentLessonLoading,
            lesson: state => state.courses.currentLesson,
            totalExercises: state => state.courses.exerciseResult.totalExercises,
            answeredExercises: state => state.courses.exerciseResult.answeredExercises,
            score: state => state.courses.exerciseResult.score,
        }),
    },
    watch: {
        score(newScore, oldScore) {
            this.scoreSpoilerValue = null
            setTimeout(() => {
                this.scoreSpoilerValue = newScore - oldScore
            }, 200)
            setTimeout(() => {
                this.scoreSpoilerValue = null
            }, 5000)
        }
    }
}
</script>

<style lang="scss" scoped>
.exercise-info {
    width: 370px;
    padding: 35px 30px;
    transition: opacity 0.2s linear;
    height: 100%;
    background: var(--background-primary);
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    &__icon {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        overflow: hidden;
        margin-right: 15px;
        padding: 6px;
        background: var(--background-secandary);
    }

    &__icon-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
    }

    &__title {
        font-weight: 600;
        font-size: 21px;
        line-height: 25px;
    }

    &__cover {
        width: 100%;
        flex: 0 0 180px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 35px;
    }

    &__type {
        background: var(--background-third);
        border-radius: 10px;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    &__type-name {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-right: 20px;
    }

    &__result {
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    &__result-counter {
        flex: 1 1 100%;
        text-align: right;
    }

    &__result-label {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-right: 20px;
    }

    &__current {
    }

    &__total {
    }

    &__score {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 20px;
        text-align: center;
        margin-top: auto;
        position: relative;
    }

    &__score-spoler {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #59dd43;
        position: absolute;
        bottom: 100%;
        left: calc(50% - 20px);
        transition: all 0.2s linear;
    }

    &__stop {
        display: block;
        background: linear-gradient(92.52deg, #fb7e7e 0%, #ee4747 100%);
        border-radius: 10px;
        text-decoration: none;
        padding: 20px;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
    }
    .score-spoiler-enter-from,
    .score-spoiler-leave-to {
        opacity: 0.5;
    }
    .score-spoiler-enter-from {
        transform: translateY(10px);
    }
}
</style>