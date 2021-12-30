<template>
    <div class="lesson-info content">
        <v-header>{{ lessonName }}</v-header>
        <div v-if="!isLessonLoading" class="lesson-info__content">
            <div class="lesson-info__top">
                <div class="lesson-info__left">
                    <div v-html="lesson.top_text" class="lesson-info__top-text"></div>
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
                <div v-html="lesson.main_text" class="lesson-info__main-text"></div>
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
            isLessonLoading: state => state.courses.isLessonLoading,
        }),
        lesson() {
            return this.$store.state.courses.currentLesson
        },
        lessonName() {
            return this.isLessonLoading ? '' : this.$store.state.courses.currentLesson.name
        }
    },
    beforeMount() {
        this.fetchLesson(this.$route.params.lessonId)
    },
    methods: {
        ...mapActions({
            fetchLesson: 'courses/fetchLesson',
        }),
    },
}
</script>

<style  lang="scss" scoped>
.lesson-info {
    &__content {
        font-size: 18px;
        margin-top: 60px;
        padding: 0 80px;
    }

    &__top {
        display: flex;
        margin-bottom: 50px;
    }

    &__left {
        margin-right: 100px;
    }

    &__top-text {
    }

    &__right {
        flex: 0 0 450px;
    }

    &__cover {
        width: 455px;
        height: 320px;
        font-size: 0;
        overflow: hidden;
        border-radius: 20px;
    }

    &__bottom {
    }

    &__main-text {
    }
}
</style>