<template>
    <div
        @click="handleAnswerClick"
        class="answer"
        :class="[{ answered: answered }, rightClass]"
    >{{ answer.text }}</div>
</template>

<script>
export default {
    name: 'answer-item',
    props: {
        answer: {
            type: Object,
            required: true
        },
        answered: {
            type: Boolean,
            default: false
        },
        showAllRight: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showRight: false
        }
    },
    computed: {
        rightClass() {
            let rightClass = ''
            if (this.answer.right) {
                rightClass = 'right'
            } else {
                rightClass = 'wrong'
            }
            if (this.showRight) {
                return rightClass
            } else if (this.showAllRight) {
                return rightClass
            }
        }
    },
    methods: {
        handleAnswerClick() {
            if (!this.answered) {
                this.showRight = true
                this.$emit('answered', this.answer.right)
            }
        }
    }
}
</script>

<style lang="scss">
.answer {
    flex: 1 1 220px;
    padding: 18px 14px;
    text-align: center;
    background: var(--background-primary);
    margin: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    border-radius: 10px;
    cursor: pointer;
    &.answered {
        cursor: default;
    }
    &.right {
        background: #a3eea6;
        color: #2d6b2f;
    }
    &.wrong {
        background: #ee4747;
        color: #420000;
    }
}
</style>