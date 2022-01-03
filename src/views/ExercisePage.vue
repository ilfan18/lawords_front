<template>
    <div v-if="!isLessonLoading" class="exercise"></div>
    <page-loader v-else />
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import PageLoader from '../components/Loaders/PageLoader.vue';
export default {
    components: { PageLoader },
    computed: {
        ...mapState({
            lessons: state => state.courses.currentLesson,
            isLessonLoading: state => state.courses.isLessonLoading,
        }),
    },
    watch: {
        $route(to, from) {
            this.$store.dispatch('ui/hideRightPanel');
        }
    },
    beforeMount() {
        this.fetchLesson(this.$route.params.exerciseId)
        this.$store.dispatch('ui/showRightPanel')
        this.$store.dispatch('ui/showRightPanelExerciseInfo')
    },
    methods: {
        ...mapActions({
            fetchLesson: 'courses/fetchLesson',
        }),
    },
}
</script>

<style>
</style>