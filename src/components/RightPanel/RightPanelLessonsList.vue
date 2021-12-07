<template>
    <div class="lessons-list">
        <div class="lessons-list__header">
            <button class="lessons-list__close">
                <vue-feather type="arrow-left" size="24" :stroke="stroke" />
            </button>
            <div class="lessons-list__icon">
                <img :src="course.icon" :alt="course.name" />
            </div>
            <div class="lessons-list__title">{{ course.id }} Курс</div>
        </div>
        <ul class="lessons-list__list">
            <li v-for="lesson in lessons" :key="lesson" class="lessons-list__item">
                <a href="#">{{ lesson.name }}</a>
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
    }
}
</script>

<style lang="scss" scoped>
.lessons-list {
    padding: 35px 30px;
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

    &__icon {
        width: 44px;
        height: 44px;
        margin-right: 5px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__title {
        font-weight: 600;
        font-size: 21px;
        line-height: 25px;
    }

    &__cover {
        width: 300px;
        max-height: 180px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__name {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 13px;
    }

    &__info-item {
        border-radius: 10px;
        padding: 9px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    &__info-icon {
        width: 38px;
        height: 38px;
        margin-right: 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__info-txt {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }

    &__level {
        background: #ffaaaa;
        .course-info__info-icon {
            background: #ff7e7e;
        }
        .course-info__info-txt {
            color: #702525;
        }
    }

    &__words {
        background: #a3eea6;
        .course-info__info-icon {
            background: #69d373;
        }
        .course-info__info-txt {
            color: #2d6b2f;
        }
    }

    &__lessons {
        background: #c7c6f1;
        .course-info__info-icon {
            background: #9896cc;
        }
        .course-info__info-txt {
            color: #34335e;
        }
    }
    &__all-lessons {
        background: none;
        border: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        display: block;
        margin: 40px auto 20px;
        cursor: pointer;
        text-decoration: underline;
        color: var(--text-primary);
        &:hover {
            text-decoration: none;
        }
    }

    &__continue {
        width: 100%;
        padding: 20px;
        background: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        background: #fc8451;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            margin-left: 14px;
        }
    }
}
</style>