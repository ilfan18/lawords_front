<template>
    <div v-if="!isCoursesLoading" class="course-info">
        <div class="course-info__header">
            <button @click.prevent="hideRightPanel" class="course-info__close">
                <vue-feather type="arrow-left" size="24" :stroke="stroke" />
            </button>
            <div class="course-info__icon">
                <div class="course-info__icon-wrapper">
                    <image-loader
                        :src="course.icon"
                        :alt="course.name"
                        width="44px"
                        height="44px"
                        radius="10px"
                    />
                </div>
            </div>
            <div class="course-info__title">{{ course.id }} Курс</div>
        </div>
        <div class="course-info__cover">
            <image-loader
                :src="course.cover"
                :alt="course.name"
                width="300px"
                height="180px"
                radius="10px"
            />
        </div>
        <div class="course-info__name">{{ course.name }}</div>
        <div class="course-info__info-item course-info__level">
            <div class="course-info__info-icon">
                <vue-feather type="eye" size="17" stroke="#D94A4A" />
            </div>
            <div class="course-info__info-txt">Уровень: {{ course.level }}</div>
        </div>
        <div class="course-info__info-item course-info__words">
            <div class="course-info__info-icon">
                <vue-feather type="book" size="17" stroke="#2D9B32" />
            </div>
            <div class="course-info__info-txt">Новых слов: {{ course.new_words }}</div>
        </div>
        <div class="course-info__info-item course-info__lessons">
            <div class="course-info__info-icon">
                <vue-feather type="map" size="17" stroke="#504EBA" />
            </div>
            <div class="course-info__info-txt">Уроков: {{ course.lessons.length }}</div>
        </div>
        <button @click.prevent="showLessonsList" class="course-info__all-lessons">Перейти к урокам</button>
        <router-link v-if="!allLessonsDone" :to="activeLessonUrl" class="course-info__continue">
            <vue-feather type="play-circle" size="24" stroke="#FFFFFF" />
            <span>Продолжить урок</span>
        </router-link>
    </div>
    <course-info-skeleton v-else />
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import CourseInfoSkeleton from '../Loaders/CourseInfoSkeleton.vue';
export default {
    components: { CourseInfoSkeleton },
    name: 'right-panel-course-info',
    props: {
        course: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState({
            isCoursesLoading: state => state.courses.isCoursesLoding,
        }),
        lessons() {
            return this.course.lessons
        },
        lessonsIds() {
            let lessonsIds = []
            this.lessons.forEach((element) => {
                lessonsIds.push(element.id)
            })
            return lessonsIds
        },
        userLessons() {
            return this.$store.state.user.user.lessons
        },
        userLessonsIds() {
            let userLessonsIds = []
            this.userLessons.forEach((element) => {
                userLessonsIds.push(element.id)
            })
            return userLessonsIds
        },
        activeLesson() {
            // ! Сделать нормально
            let activeLessonIndex = 0
            this.lessons.forEach((element, index) => {
                if (this.userLessonsIds.includes(element.id)) {
                    activeLessonIndex = index
                }
            });
            if (this.userLessonsIds.length == 0) {
                return this.lessons[0]
            } else if (this.lessons.length == activeLessonIndex + 1) {
                return this.lessons[activeLessonIndex]
            } else {
                return this.lessons[activeLessonIndex + 1]
            }
        },
        activeLessonUrl() {
            return '/lessons/' + this.activeLesson.id
        },
        allLessonsDone() {
            let allLessonsDone = false
            const intersectLessons = this.lessonsIds.filter(value => this.userLessonsIds.includes(value));
            if (this.lessonsIds.length == intersectLessons.length) {
                return true
            }
            return false
        },
        stroke() {
            return this.$store.state.ui.theme == 'light' ? '#272727' : '#FFFFFF';
        }
    },
    methods: {
        hideRightPanel() {
            this.$store.dispatch('ui/hideRightPanel')
        },
        showLessonsList() {
            this.$emit('showLessonsList')
        }
    }
}
</script>

<style lang="scss" scoped>
.course-info {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    min-height: 720px;
    width: 370px;
    padding: 35px 30px;
    transition: opacity 0.2s linear;
    display: flex;
    flex-direction: column;
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
        border-radius: 10px;
        overflow: hidden;
        margin-right: 15px;
        padding: 6px;
        background: var(--background-secandary);
    }
    &__icon-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
    }

    &__title {
        font-weight: 600;
        font-size: 21px;
        line-height: 25px;
    }

    &__cover {
        width: 300px;
        height: 180px;
        flex: 0 0 180px;
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
        margin-bottom: auto;
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
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        background: #fc8451;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        span {
            margin-left: 14px;
        }
    }
}
</style>