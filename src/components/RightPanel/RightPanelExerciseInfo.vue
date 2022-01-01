<template>
    <div class="exercise-info">
        <div class="exercise-info__header">ГГВП</div>
        <div class="exercise-info__cover"></div>
        <div class="exercise-info__type"></div>
        <div class="exercise-info__result"></div>
        <div class="exercise-info__score"></div>
        <router-link to="/" class="exercise-info__stop" />
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            lesson: state => state.courses.currentLesson,
        }),
    }
}
</script>

<style>
</style>