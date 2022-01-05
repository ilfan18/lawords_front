<template>
    <div class="courses content">
        <v-header>Мои курсы</v-header>
        <div v-if="!isCoursesLoading" class="courses__list">
            <courses-item
                v-for="(course,index) in courses"
                :key="course.id"
                :course="course"
                :course_num="index + 1"
                :is_active="activeCourses.includes(course.id) || course.id == nextCourse"
            />
        </div>
        <courses-list-skeleton v-else />
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
import CoursesItem from '@/components/CoursesItem.vue'
import CoursesListSkeleton from '@/components/Loaders/CoursesListSkeleton.vue'
export default {
    components: { VHeader, CoursesItem, CoursesListSkeleton },
    computed: {
        ...mapState({
            isCoursesLoading: state => state.courses.isCoursesLoding,
            courses: state => state.courses.courses_list,
            UserCourses: state => state.user.user.courses,
        }),
        activeCourses() {
            if (this.UserCourses.length) {
                let activeCourses = []
                this.courses.forEach(course => {
                    this.UserCourses.forEach(userCourse => {
                        if (userCourse == course.id) {
                            activeCourses.push(course.id)
                        }
                    });
                });
                return activeCourses
            } else {
                return [this.courses[0].id]
            }
        },
        nextCourse() {
            // ! Сделать обработку случая когда все курсы пройдены, хотя и так работает конечно
            const lastCourse = this.activeCourses[this.activeCourses.length - 1]
            let nextCourse = null
            this.courses.forEach((course, index) => {
                if (course.id == lastCourse) {
                    nextCourse = this.courses[index + 1].id
                }
            })
            return nextCourse
        }
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
        justify-content: space-between;
        flex-wrap: wrap;
        margin: -13px -15px 0;
        padding-bottom: 17px;
        max-height: 430px;
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