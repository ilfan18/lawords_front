<template>
    <div class="exercise-info">
        <div class="exercise-info__header">
            <div class="exercise-info__icon">
                <skeleton-loader width="44px" height="44px" radius="10px" />
            </div>
            <div class="exercise-info__title">
                <skeleton-loader width="120px" height="25px" />
            </div>
        </div>
        <div class="exercise-info__cover">
            <skeleton-loader height="180px" radius="10px" />
        </div>
        <div class="exercise-info__type">
            <skeleton-loader width="100px" height="44px" radius="10px" />
            <skeleton-loader width="38px" height="38px" radius="50%" />
        </div>
        <div class="exercise-info__result">
            <skeleton-loader height="60px" />
        </div>
        <div class="exercise-info__score">
            <skeleton-loader height="20px" />
        </div>
        <skeleton-loader height="60px" radius="10px" />
    </div>
</template>

<script>
export default {
    name: 'exercise-info-skeleton'
}
</script>

<style lang="scss" scoped>
.exercise-info {
    width: 370px;
    height: 100%;
    padding: 35px 30px;
    transition: opacity 0.2s linear;
    display: flex;
    flex-direction: column;
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    &__icon {
        margin-right: 5px;
    }

    &__cover {
        width: 100%;
        flex: 0 0 180px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 35px;
    }

    &__type {
        background: var(--background-third);
        border-radius: 10px;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    &__type-name {
        margin-right: 20px;
    }

    &__result {
        display: flex;
        align-items: center;
    }

    &__result-counter {
        flex: 1 1 100%;
    }
    &__score {
        margin-bottom: 20px;
        margin-top: auto;
    }
}
</style>