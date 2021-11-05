<template>
    <div class="courses">
        <courses-header></courses-header>
        <div class="courses__list">
            <courses-item></courses-item>
            <courses-item></courses-item>
            <courses-item></courses-item>
            <courses-item></courses-item>
            <courses-item></courses-item>
            <courses-item></courses-item>
            <courses-item></courses-item>
            <courses-item></courses-item>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import CoursesHeader from '@/components/CoursesHeader.vue'
import CoursesItem from '@/components/CoursesItem.vue'
export default {
    components: { CoursesHeader, CoursesItem },
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
.courses {
    padding: 30px 40px;
    &__list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: -13px -15px 0;
        padding-bottom: 17px;
        max-height: 400px;
        overflow-x: auto;
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: #ededed;
            border-radius: 10px;
        }
    }
    .header {
        margin-bottom: 25px;
    }
}
</style>