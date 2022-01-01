<template>
    <div class="cofirm-info">
        <div class="cofirm-info__content">
            <h1 class="cofirm-info__title">Проверьте свою почту!</h1>
            <div class="cofirm-info__img">
                <img src="@/assets/pre1.png" alt />
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.cofirm-info {
    background: var(--background-secandary);
    width: 100%;
    height: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
    &__content {
        height: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 90px 0;
    }

    &__title {
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.323577px;
        text-align: center;
        margin-bottom: 30px;
    }

    &__img {
        display: flex;
        justify-content: center;
        height: 330px;
        font-size: 0;
        img {
            width: 590px;
        }
    }
}
</style>