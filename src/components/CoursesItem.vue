<template>
    <li class="courses-item" :class="theme">
        <div class="courses-item__header">
            <div class="courses-item__left">
                <h2 class="courses-item__title">{{ course.id }} Курс</h2>
                <h3 class="courses-item__name">{{ course.name }}</h3>
            </div>
            <div class="courses-item__right">
                <div class="courses-item__icon">
                    <img :src="course.icon" alt="Курс 1" />
                </div>
            </div>
        </div>
        <div class="courses-item__progress">
            <div class="courses-item__progress-bar">Прогресс</div>
            <div class="courses-item__fraction">{{ lessonsFinishedCount }} / {{ lessonsCount }}</div>
        </div>
    </li>
</template>

<script>
import VueFeather from 'vue-feather';
export default {
    name: 'courses-item',
    components: { VueFeather },
    props: {
        course: {
            type: Object,
            required: true
        }
    },
    computed: {
        lessonsCount() {
            return this.course.lessons.length
        },
        lessonsFinishedCount() {
            return 1
        },
        theme() {
            return this.$store.state.ui.theme;
        },
    }
}
</script>

<style lang="scss" scoped>
.courses-item {
    background: var(--background-primary);
    border-radius: 20px;
    padding: 25px 30px;
    flex: 1 1 355px;
    margin: 13px 15px;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(58, 58, 58, 0);
    &.dark {
        border: 1px solid rgba(58, 58, 58, 1);
    }
    &.not-active {
        color: var(--text-second);
        .courses-item__icon {
            opacity: 0.5;
        }
    }
    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 5px;
    }

    &__name {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }

    &__icon {
        width: 48px;
        height: 48px;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }

    &__fraction {
        text-align: right;
    }

    &__progress {
        display: flex;
        justify-content: space-between;
    }
    &__progress-bar {
    }
}
</style>