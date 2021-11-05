<template>
    <li class="courses-item">
        <div class="courses-item__header">
            <div class="courses-item__left">
                <h2 class="courses-item__title">{{ id }} Курс</h2>
                <h3 class="courses-item__name">{{ name }}</h3>
            </div>
            <div class="courses-item__right">
                <div class="courses-item__icon">
                    <img :src="icon" alt="Курс 1" />
                </div>
            </div>
        </div>
        <div class="courses-item__fraction">(1) / {{ lessons_count }}</div>
        <div class="courses-item__progress"></div>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        lessons_count: {
            type: Number,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
.courses-item {
    background: #ffffff;
    box-shadow: 0px 10px 30px rgba(123, 87, 226, 0.1);
    border-radius: 20px;
    padding: 25px 30px;
    flex: 0 1 calc(50% - 30px);
    margin: 13px 15px;
    cursor: pointer;
    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    &__left {
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

    &__right {
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
    }
}
</style>