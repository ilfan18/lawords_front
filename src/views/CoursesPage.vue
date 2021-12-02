<template>
    <div class="courses main-content">
        <v-header>Мои курсы</v-header>
        <div class="courses__list">
            <courses-item
                v-for="course in courses"
                :key="course.id"
                :id="course.id"
                :name="course.name"
                :icon="course.icon"
                :lessons-count="course.lessons.length"
            />
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
import CoursesItem from '@/components/CoursesItem.vue'
export default {
    components: { VHeader, CoursesItem },
    computed: {
        ...mapState({
            courses: state => state.courses.courses_list,
        })
    },
    mounted() {
        this.fetchCourses()
    },
    methods: {
        ...mapActions({
            fetchCourses: 'courses/fetchCourses',
        }),
    },
}
</script>

<style lang="scss" scoped>
.courses {
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
            background: var(--scrollbar-color);
            border-radius: 10px;
        }
    }
}
</style>