<template>
    <div class="main content">
        <v-header>{{ greeting }}</v-header>
        <div class="main__content">
            <div v-if="!isCoursesLoading && lastLessonsIDs.length != 0" class="main__last-lessons">
                <h2 class="main__last-lessons-title">Недавние уроки</h2>
                <ul class="main__last-lessons-list">
                    <last-lesson-item
                        v-for="lesson in lastLessons"
                        :key="lesson.id"
                        :lesson="lesson"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import VHeader from '@/components/VHeader.vue'
import LastLessonItem from '../components/LastLessonItem.vue';
export default {
    components: { VHeader, LastLessonItem },
    computed: {
        ...mapState({
            first_name: (state) => state.user.user.first_name,
            isCoursesLoading: state => state.courses.isCoursesLoding,
            courses: state => state.courses.courses_list,
            lastLessonsIDs: (state) => state.courses.lastLessons,
        }),
        lastLessons() {
            //! Сделать последний юзера или первый вообще, если нет последних
            let lastLessons = []
            this.courses.forEach(course => {
                course.lessons.forEach((lesson) => {
                    if (this.lastLessonsIDs.includes(String(lesson.id))) {
                        console.log('object');
                        lastLessons.push(lesson)
                    }
                })
            });
            return lastLessons
        },
        greeting() {
            if (this.first_name) {
                return `Привет, ${this.first_name}!`
            }
            return 'Привет!'
        }
    },
    beforeMount() {
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
.main {
    &__content {
        display: flex;
    }

    &__last-lessons {
        flex: 0 1 355px;
    }

    &__last-lessons-title {
        font-weight: 600;
        font-size: 21px;
        line-height: 25px;
        margin-bottom: 33px;
    }

    &__last-lessons-list {
        list-style-type: none;
        margin: -13px 0;
    }
}
</style>