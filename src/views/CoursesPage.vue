<template>
    <div class="courses content">
        <v-header>Мои курсы</v-header>
        <div v-if="!isCoursesLoading" class="courses__list">
            <courses-item
                v-for="(course,index) in courses"
                :key="course.id"
                :course="course"
                :course_num="index + 1"
                :is_active="active_courses.includes(course.id)"
            />
        </div>
        <div v-else class="courses__list">
            <div v-for="index in 3" :key="index" class="courses-item">
                <div class="courses-item__header">
                    <div class="courses-item__left">
                        <h2 class="courses-item__title">
                            <skeleton-loader width="100px" height="24px" />
                        </h2>
                        <h3 class="courses-item__name">
                            <skeleton-loader width="150px" height="24px" />
                        </h3>
                    </div>
                    <div class="courses-item__right">
                        <div class="courses-item__icon">
                            <skeleton-loader width="48px" height="48px" radius="10px" />
                        </div>
                    </div>
                </div>
                <div class="courses-item__progress">
                    <div class="courses-item__progress-bar">
                        <skeleton-loader width="200px" height="6px" radius="10px" />
                    </div>
                    <div class="courses-item__fraction">
                        <skeleton-loader width="38px" height="17px" />
                    </div>
                </div>
            </div>
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
            isCoursesLoading: state => state.courses.isCoursesLoding,
            courses: state => state.courses.courses_list,
            active_courses: state => state.user.profile.courses,
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
        justify-content: space-between;
        flex-wrap: wrap;
        margin: -13px -15px 0;
        padding-bottom: 17px;
        max-height: 420px;
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
.courses-item {
    background: var(--background-primary);
    border-radius: 20px;
    padding: 25px 30px;
    flex: 1 1 355px;
    margin: 13px 15px;
    position: relative;
    border: 1px solid rgba(58, 58, 58, 0);
    &.dark {
        border: 1px solid rgba(58, 58, 58, 1);
    }
    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    &__title {
        margin-bottom: 5px;
    }

    &__icon {
        width: 48px;
        height: 48px;
    }

    &__fraction {
        text-align: right;
    }

    &__progress {
        display: flex;
        justify-content: space-between;
    }
}
</style>