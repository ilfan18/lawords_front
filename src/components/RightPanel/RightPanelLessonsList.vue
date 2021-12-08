<template>
    <div class="lessons-list">
        <div class="lessons-list__header">
            <button @click="goToCourseInfo" class="lessons-list__close" title="К курсу">
                <vue-feather type="arrow-left" size="24" :stroke="stroke" />
            </button>
            <div class="lessons-list__title">Все уроки</div>
        </div>
        <ul class="lessons-list__list">
            <li v-for="(lesson, index) in lessons" :key="index" class="lessons-list__item">
                <a class="lessons-list__link" href="#">
                    <span class="lessons-list__num">{{ index + 1 }}.</span>
                    <span class="lessons-list__name">{{ lesson.name }}</span>
                    <span class="lessons-list__icon">
                        <vue-feather size="24" type="check-circle" stroke="#5CBC6B" />
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import VueFeather from 'vue-feather';
export default {
    name: 'right-panel-course-info',
    components: { VueFeather },
    props: {
        course_id: {
            type: Number,
            required: true
        }
    },
    computed: {
        course() {
            return this.$store.state.courses.courses_list.find((item) => {
                return item.id == this.course_id
            })
        },
        lessons() {

            return this.course.lessons
        },
        stroke() {
            return this.$store.state.ui.theme == 'light' ? '#272727' : '#FFFFFF';
        }
    },
    methods: {
        goToCourseInfo() {
            this.$emit('goToCourseInfo')
        }
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

    &__item {
        margin-bottom: 20px;
    }
    &__link {
        text-decoration: none;
        padding: 17px 20px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        background: #bbfab1;
        border-radius: 10px;
        display: flex;
        align-items: center;
        color: #262626;
    }
    &__num {
        margin-right: 17px;
    }
    &__name {
    }
    &__icon {
        display: flex;
        margin-left: auto;
    }
}
</style>