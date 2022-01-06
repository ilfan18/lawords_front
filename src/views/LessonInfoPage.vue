<template>
    <div class="lesson-info content">
        <v-header>{{ lessonName }}</v-header>
        <div v-if="!isLessonLoading" class="lesson-info__content">
            <div class="lesson-info__top">
                <div class="lesson-info__left">
                    <div v-html="lesson.top_text" class="lesson-info__top-text text"></div>
                </div>
                <div class="lesson-info__right">
                    <div class="lesson-info__cover">
                        <image-loader
                            :src="lesson.cover"
                            :alt="lesson.name"
                            width="455px"
                            height="320px"
                            radius="20px"
                        />
                    </div>
                </div>
            </div>
            <div class="lesson-info__bottom">
                <div v-html="lesson.main_text" class="lesson-info__main-text text"></div>
                <div v-if="isLessonActive" class="lesson-info__to-exercise">
                    <router-link :to="lessonLink" class="lesson-info__link">Пройти упражнение</router-link>
                </div>
                <div v-else class="lesson-info__done">Урок уже пройден!</div>
            </div>
        </div>
        <page-loader v-else />
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
import PageLoader from '@/components/Loaders/PageLoader.vue'
export default {
    components: { VHeader, PageLoader },
    computed: {
        ...mapState({
            isLessonLoading: state => state.courses.isCurrentLessonLoading,
            userLessons: state => state.user.user.lessons,
        }),
        lesson() {
            return this.$store.state.courses.currentLesson
        },
        lessonName() {
            return this.isLessonLoading ? '' : this.$store.state.courses.currentLesson.name
        },
        isLessonActive() {
            return !this.userLessonsIds.includes(this.lesson.id)
        },
        lessonLink() {

            return this.lesson.id ? '/exercise/' + this.lesson.id : ''
        },
        userLessonsIds() {
            let userLessonsIds = []
            this.userLessons.forEach((element) => {
                userLessonsIds.push(element.id)
            })
            return userLessonsIds
        },
    },
    beforeMount() {
        this.fetchCurrentLesson(this.$route.params.lessonId)
    },
    methods: {
        ...mapActions({
            fetchCurrentLesson: 'courses/fetchCurrentLesson',
        }),
    },
}
</script>

<style  lang="scss">
.lesson-info {
    &__content {
        font-size: 18px;
        margin-top: 60px;
        padding: 0 80px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }

    &__left {
        flex: 1 1 400px;
        margin-right: 90px;
    }

    &__top-text {
    }

    &__right {
        flex: 1 1 450px;
    }

    &__cover {
        width: 100%;
        aspect-ratio: 16/10;
        font-size: 0;
        overflow: hidden;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    &__bottom {
    }

    &__main-text {
        margin-bottom: 50px;
    }

    &__to-exercise {
        text-align: center;
    }

    &__link {
        padding: 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        background: #fc8451;
        border-radius: 10px;
        text-decoration: none;
        margin: 0 auto;
        display: inline-block;
    }
    &__done {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
    }
}
</style>