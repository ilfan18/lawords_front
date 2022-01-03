<template>
    <div class="exercise-item" :class="{ answered: answered }">
        <div v-if="exercise.image" class="exercise-item__image">
            <image-loader
                :src="exercise.image"
                :alt="exercise.text"
                width="160px"
                height="160px"
                radius="10px"
            />
        </div>
        <div class="exercise-item__body">
            <div class="exercise-item__question">
                {{ exercise.text }}
                <div class="exercise-item__help">{{ helpText }}</div>
            </div>
            <div class="exercise-item__answers">
                <answer-item
                    v-on:answered="handleAnswer"
                    v-for="answer in exercise.answers"
                    :key="answer.id"
                    :answer="answer"
                    :answered="answered"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AnswerItem from './AnswerItem.vue'
export default {
    components: { AnswerItem },
    name: 'exercise-item',
    props: {
        exercise: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            total_answers: 0,
            right_answers: 0,
            answered: false
        }
    },
    computed: {
        isMultipleAnswers() {
            let right = 0
            this.exercise.answers.forEach(element => {
                if (element.right) {
                    right++
                }
            });
            return {
                isMultiple: right > 1,
                rightCount: right
            }


        },
        helpText() {
            return this.isMultipleAnswers.isMultiple ? `Выберите несколько вариантов (${this.isMultipleAnswers.rightCount})` : 'Выберите один из вариантов'
        }
    },
    methods: {
        handleAnswer(right) {
            this.total_answers++
            if (right && !this.isMultipleAnswers.isMultiple) {
                this.right_answers++
                this.answered = true
                this.$emit('exerciseAnswered', 1)
            } else if (right && this.isMultipleAnswers.isMultiple) {
                this.right_answers++
                if (this.total_answers == this.isMultipleAnswers.rightCount) {
                    this.answered = true
                    this.$emit('exerciseAnswered', this.right_answers)
                }
            } else if (!right && !this.isMultipleAnswers.isMultiple) {
                this.answered = true
                this.$emit('exerciseAnswered', 0)
            } else if (!right && this.isMultipleAnswers.isMultiple && this.total_answers == this.isMultipleAnswers.rightCount) {
                this.answered = true
                this.$emit('exerciseAnswered', this.right_answers)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.exercise-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    &.answered {
        opacity: 0.5;
    }
    &__image {
        flex: 0 0 250px;
        height: 250px;
        padding: 45px;
        border-radius: 20px;
        margin-right: 35px;
        background: var(--background-primary);
    }

    &__body {
        flex: 1 1 100%;
    }

    &__question {
        background: var(--background-primary);
        margin-bottom: 20px;
        padding: 20px 40px;
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        border-radius: 10px;
    }

    &__help {
        color: var(--text-second);
    }

    &__answers {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: -10px;
    }
}
</style>