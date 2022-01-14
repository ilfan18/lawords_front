<template>
    <div class="exercise-item" :class="[{ answered: answered }, rightClass]">
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
                <div v-html="exercise.text" class="exercise-item__text"></div>
                <div class="exercise-item__help">{{ helpText }}</div>
            </div>
            <div class="exercise-item__answers">
                <answer-item
                    v-on:answered="handleAnswer"
                    v-for="answer in exercise.answers"
                    :key="answer.id"
                    :answer="answer"
                    :answered="answered"
                    :showAllRight="showAllRight"
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
            answered: false,
            showAllRight: false
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
        },
        rightClass() {
            if (this.answered && this.right_answers) {
                return 'right'
            } else if (this.answered && !this.right_answers) {
                return 'wrong'
            }
        }
    },
    methods: {
        handleAnswer(right) {
            this.total_answers++
            if (right && !this.isMultipleAnswers.isMultiple) {
                this.right_answers++
                this.answered = true
                this.showAllRight = true
                this.$emit('exerciseAnswered', 1)
            } else if (right && this.isMultipleAnswers.isMultiple) {
                this.right_answers++
                if (this.total_answers == this.isMultipleAnswers.rightCount) {
                    this.answered = true
                    this.showAllRight = true
                    this.$emit('exerciseAnswered', this.right_answers)
                }
            } else if (!right && !this.isMultipleAnswers.isMultiple) {
                this.answered = true
                this.showAllRight = true
                this.$emit('exerciseAnswered', 0)
            } else if (!right && this.isMultipleAnswers.isMultiple && this.total_answers == this.isMultipleAnswers.rightCount) {
                this.answered = true
                this.showAllRight = true
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
    margin-bottom: 30px;
    border-radius: 20px;
    padding: 20px;
    background: var(--background-primary);
    transition: all 0.2s linear;
    &.right {
        box-shadow: 0px 0px 0px 2px #a3eea6;
    }
    &.wrong {
        box-shadow: 0px 0px 0px 2px #ee4747;
    }
    &.answered {
        // opacity: 0.7;
    }
    &__image {
        flex: 0 0 250px;
        height: 250px;
        padding: 45px;
        border-radius: 20px;
        margin-right: 35px;
        background: var(--background-third);
    }

    &__body {
        flex: 1 1 100%;
    }

    &__question {
        background: var(--background-third);
        margin-bottom: 20px;
        padding: 20px 40px;
        border-radius: 10px;
    }
    &__text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }

    &__help {
        color: var(--text-second);
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }

    &__answers {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: -10px;
    }
}
</style>