<template>
    <div class="lesson-info content">
        <v-header>Текущий курс</v-header>
        <div class="lesson-info__content">
            <div class="lesson-info__top"></div>
            <div v-html="lesson.main_text" class="lesson-info__bottom"></div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
export default {
    components: { VHeader },
    computed: {
        lesson() {
            return this.$store.state.courses.currentLesson
        }
    },
    mounted() {
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