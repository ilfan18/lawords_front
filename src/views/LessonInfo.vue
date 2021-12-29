<template>
    <div class="lesson-info content">
        <v-header>Текущий курс</v-header>
        <div v-if="!isLessonLoading" class="lesson-info__content">
            <div class="lesson-info__top"></div>
            <div v-html="lesson.main_text" class="lesson-info__bottom"></div>
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
</style>