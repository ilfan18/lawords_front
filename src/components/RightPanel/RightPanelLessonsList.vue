<template>
    <div class="lessons-list">
        <div class="lessons-list__header">
            <button @click.prevent="goToCourseInfo" class="lessons-list__close" title="К курсу">
                <vue-feather type="arrow-left" size="24" :stroke="stroke" />
            </button>
            <div class="lessons-list__title">Все уроки</div>
        </div>
        <ul class="lessons-list__list">
            <right-panel-lessons-list-item
                v-for="(lesson, index) in lessons"
                :key="index"
                :lesson="lesson"
                :index="index"
            />
        </ul>
    </div>
</template>

<script>
import RightPanelLessonsListItem from './RightPanelLessonsListItem.vue'
export default {
    components: { RightPanelLessonsListItem },
    name: 'right-panel-course-info',
    props: {
        course: {
            type: Object,
            required: true
        }
    },
    computed: {
        lessons() {
            return this.course.lessons
        },
        userLessons() {
            return this.$store.state.user.user.lessons
        },
        lessonsDone() {
            const lessonsDone = []
            this.lessons.forEach(element => {
                if (this.userLessons.includes(element.id)) {
                    lessonsDone.push(element)
                }
            });
            return lessonsDone
        },
        stroke() {
            return this.$store.state.ui.theme == 'light' ? '#272727' : '#FFFFFF';
        },
    },
    methods: {
        goToCourseInfo() {
            this.$emit('goToCourseInfo')
        },
    }
}
</script>

<style lang="scss" scoped>
.lessons-list {
    padding: 35px 30px;
    transition: opacity 0.2s linear;
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    &__close {
        background: none;
        border: none;
        line-height: 0;
        cursor: pointer;
        margin-right: 15px;
    }

    &__title {
        font-weight: 600;
        font-size: 21px;
        line-height: 25px;
    }
    &__list {
        list-style: none;
    }
}
</style>