<template>
    <li
        @click="showRightPanel(course)"
        class="courses-item"
        :class="[{ 'not-active': !is_active }, theme]"
    >
        <div class="courses-item__header">
            <div class="courses-item__left">
                <h2 class="courses-item__title">{{ course_num }} Курс</h2>
                <h3 class="courses-item__name">{{ course.name }}</h3>
            </div>
            <div class="courses-item__right">
                <div class="courses-item__icon">
                    <div class="courses-item__icon-wrapper">
                        <image-loader
                            :src="course.icon"
                            :alt="course.name"
                            width="48px"
                            height="48px"
                            radius="10px"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="courses-item__fraction">{{ lessonsFinishedCount }} / {{ lessonsCount }}</div>
        <div class="courses-item__progress-bar">
            <course-progress-bar :percentCompleted="percentCompleted" />
        </div>
    </li>
</template>

<script>
import CourseProgressBar from './UI/CourseProgressBar.vue'
export default {
    components: { CourseProgressBar },
    name: 'courses-item',
    props: {
        course: {
            type: Object,
            required: true
        },
        course_num: {
            type: Number,
            required: true
        },
        is_active: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        lessonsCount() {
            return this.course.lessons.length
        },
        userLessons() {
            return this.$store.state.user.user.lessons
        },
        userLessonsIds() {
            let userLessonsIds = []
            this.userLessons.forEach((element) => {
                userLessonsIds.push(element.id)
            })
            return userLessonsIds
        },
        lessonsFinishedCount() {
            let counter = 0
            this.course.lessons.forEach(lesson => {
                if (this.userLessonsIds.includes(lesson.id)) {
                    counter++
                }
            });
            return counter
        },
        percentCompleted() {
            return Math.floor(this.lessonsFinishedCount * 100 / this.lessonsCount)
        },
        theme() {
            return this.$store.state.ui.theme;
        },
    },
    methods: {
        showRightPanel(course) {
            if (this.is_active) {
                this.$store.dispatch('ui/showRightPanel')
                this.$store.dispatch('ui/showRightPanelCourseInfo')
                this.$store.dispatch('ui/hideRightPanelLessonsList')
                this.$store.dispatch('ui/setCourseInfo', course)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.courses-item {
    background: var(--background-primary);
    border-radius: 20px;
    padding: 25px 30px;
    flex: 1 1 355px;
    margin: 13px 15px;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(58, 58, 58, 0);
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
        margin-bottom: 40px;
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

    &__fraction {
        text-align: right;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }

    &__progress {
        display: flex;
        justify-content: space-between;
    }
    &__progress-bar {
        flex: 1 1 100%;
    }
}
</style>