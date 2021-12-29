<template>
    <li class="lessons-list-item">
        <a @click.prevent="goToLesson" class="lessons-list-item__link" href="#">
            <span class="lessons-list-item__num">{{ index + 1 }}.</span>
            <span class="lessons-list-item__name">{{ lesson.name }}</span>
            <span class="lessons-list-item__icon">
                <vue-feather size="24" type="check-circle" stroke="#5CBC6B" />
            </span>
        </a>
    </li>
</template>

<script>
export default {
    name: 'right-panel-lessons-list-item',
    props: {
        lesson: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        goToLesson() {

        }
    }
}
</script>

<style lang="scss" scoped>
.lessons-list-item {
    margin-bottom: 20px;
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
        .done {
            background: #bbfab1;
        }
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