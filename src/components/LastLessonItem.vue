<template>
    <li @click="showRightPanel(course)" class="last-lesson-item" :class="theme">
        <router-link :to="lessonUrl" class="last-lesson-item__link">
            <div class="last-lesson-item__header">
                <div class="last-lesson-item__left">
                    <h3 class="last-lesson-item__name">{{ lesson.name }}</h3>
                </div>
                <div class="last-lesson-item__right">
                    <div v-if="lesson.icon" class="last-lesson-item__icon">
                        <div class="last-lesson-item__icon-wrapper">
                            <image-loader
                                :src="lesson.icon"
                                :alt="lesson.name"
                                width="48px"
                                height="48px"
                                radius="10px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
import CourseProgressBar from './UI/CourseProgressBar.vue'
export default {
    components: { CourseProgressBar },
    name: 'last-lesson-item',
    props: {
        lesson: {
            type: Object,
            required: true
        },
    },
    computed: {
        lessonUrl() {
            return '/lessons/' + this.lesson.id
        },
        theme() {
            return this.$store.state.ui.theme;
        },
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.last-lesson-item {
    background: var(--background-primary);
    border-radius: 20px;
    padding: 25px 30px;
    flex: 1 1 355px;
    margin: 13px 0;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(58, 58, 58, 0);
    &__link {
        text-decoration: none;
        color: inherit;
    }
    &.dark {
        border: 1px solid rgba(58, 58, 58, 1);
    }
    &.not-active {
        color: var(--text-second);
        .courses-item__icon {
            opacity: 0.5;
        }
    }
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 5px;
    }

    &__name {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }

    &__icon {
        width: 68px;
        height: 68px;
        border-radius: 15px;
        overflow: hidden;
        padding: 10px;
        background: var(--background-secandary);
    }
    &__icon-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
    }
}
</style>