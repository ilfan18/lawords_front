<template>
    <div class="main"></div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    methods: {
        ...mapActions({
            fetchCourses: 'courses/fetchCourses',
        }),
    },
    mounted() {
        this.fetchCourses()
    },
}
</script>

<style lang="scss" scoped>
.main {
}
</style>